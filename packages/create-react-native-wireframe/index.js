#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

const wireframePackagePath = path.dirname(
  require.resolve('react-native-wireframe/package.json'),
);
const SOURCE_DIRECTORY = path.join(wireframePackagePath, 'src');
const DESTINATION_DIRECTORY = path.resolve(process.cwd(), 'wireframe');

const SOURCE_COMPONENTS_DIRECTORY = path.join(SOURCE_DIRECTORY, 'components');
const SOURCE_THEME_DIRECTORY = path.join(SOURCE_DIRECTORY, 'theme');

const DESTINATION_COMPONENTS_DIRECTORY = path.join(
  DESTINATION_DIRECTORY,
  'components',
);
const DESTINATION_THEME_DIRECTORY = path.join(DESTINATION_DIRECTORY, 'theme');

const copyThemeFiles = () => {
  fs.copySync(SOURCE_THEME_DIRECTORY, DESTINATION_THEME_DIRECTORY);
};

const updateImportPaths = (content) => {
  let updatedContent = content;
  // from '../../theme/theme' => from '../theme/theme'
  updatedContent = updatedContent.replace(
    /from\s+['"]\.\.\/\.\.\/theme\/theme['"]/g,
    'from "../theme/theme"',
  );
  // from '../WText/WText' => from './WText'
  updatedContent = updatedContent.replace(
    /from\s+['"]\.\.\/(W[a-zA-Z0-9]+)\/W[a-zA-Z0-9]+['"]/g,
    (match, p1) => `from './${p1}'`,
  );
  return updatedContent;
};

const copyComponentFiles = () => {
  const componentDirectoryNames = fs
    .readdirSync(SOURCE_COMPONENTS_DIRECTORY)
    .filter((item) => {
      const itemPath = path.join(SOURCE_COMPONENTS_DIRECTORY, item);
      return fs.statSync(itemPath).isDirectory();
    });

  for (const componentDirectoryName of componentDirectoryNames) {
    const sourceComponentDirectory = path.join(
      SOURCE_COMPONENTS_DIRECTORY,
      componentDirectoryName,
    );

    // As per the problem description, the component file is named `index.ts`.
    // We will also check for `index.tsx` as a fallback.
    const indexTsPath = path.join(sourceComponentDirectory, 'index.ts');
    const indexTsxPath = path.join(sourceComponentDirectory, 'index.tsx');

    let sourceComponentPath;
    if (fs.existsSync(indexTsPath)) {
      sourceComponentPath = indexTsPath;
    } else if (fs.existsSync(indexTsxPath)) {
      sourceComponentPath = indexTsxPath;
    } else {
      console.warn(
        `warn: No 'index.ts' or 'index.tsx' file found for component '${componentDirectoryName}'. Skipping.`,
      );
      continue;
    }

    const destinationComponentPath = path.join(
      DESTINATION_COMPONENTS_DIRECTORY,
      `${componentDirectoryName}.tsx`,
    );

    const content = fs.readFileSync(sourceComponentPath, 'utf8');
    const updatedContent = updateImportPaths(content);
    fs.writeFileSync(destinationComponentPath, updatedContent, 'utf8');
  }
};

const showSuccessMessage = () => {
  console.log(
    'Success! The wireframe components have been added to your project.',
  );
  console.log('');
  console.log(
    'Please make sure you have the following peer dependencies installed:',
  );
  console.log('- @react-native-community/datetimepicker');
  console.log('- @react-native-community/slider');
  console.log('- react-native-svg');
  console.log('');
  console.log('You can install them by running:');
  console.log(
    'npm install @react-native-community/datetimepicker @react-native-community/slider react-native-svg',
  );
};

const main = () => {
  if (fs.existsSync(DESTINATION_DIRECTORY)) {
    console.error(
      `Error: The '${path.basename(
        DESTINATION_DIRECTORY,
      )}' folder already exists.`,
    );
    console.error(
      `Please delete it before running this script again to ensure a clean installation.`,
    );
    process.exit(1);
  }

  fs.ensureDirSync(DESTINATION_COMPONENTS_DIRECTORY);
  fs.ensureDirSync(DESTINATION_THEME_DIRECTORY);
  copyThemeFiles();
  copyComponentFiles();
  showSuccessMessage();
};

main();