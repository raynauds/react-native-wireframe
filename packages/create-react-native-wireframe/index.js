#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

const SOURCE_DIRECTORY = path.resolve(__dirname, '../src');
const DESTINATION_DIRECTORY = path.resolve(process.cwd(), 'wireframe');

const SOURCE_COMPONENTS_DIRECTORY = path.join(SOURCE_DIRECTORY, 'components');
const SOURCE_THEME_DIRECTORY = path.join(SOURCE_DIRECTORY, 'theme');

const copyThemeFiles = () => {
  const themeFileNames = fs.readdirSync(SOURCE_THEME_DIRECTORY);
  for (const fileName of themeFileNames) {
    const sourceFilePath = path.join(SOURCE_THEME_DIRECTORY, fileName);
    const destinationFilePath = path.join(DESTINATION_DIRECTORY, fileName);
    fs.copySync(sourceFilePath, destinationFilePath);
  }
};

const updateImportPaths = (content) => {
  let updatedContent = content;
  // from '../../theme/theme' => from './theme'
  updatedContent = updatedContent.replace(/from\s+['"]\.\.\/\.\.\/theme\/theme['"]/g, 'from "./theme"');
  // from '../WComponent/WComponent' => from './WComponent'
  updatedContent = updatedContent.replace(/from\s+['"]\.\.\/(W[a-zA-Z0-9]+)\/\1['"]/g, 'from "./$1"');
  return updatedContent;
};

const copyComponentFiles = () => {
  const componentDirectoryNames = fs.readdirSync(SOURCE_COMPONENTS_DIRECTORY)
    .filter(item => {
      const itemPath = path.join(SOURCE_COMPONENTS_DIRECTORY, item);
      return fs.statSync(itemPath).isDirectory() && item !== '_internal';
    });

  for (const componentDirectoryName of componentDirectoryNames) {
    const sourceComponentDirectory = path.join(SOURCE_COMPONENTS_DIRECTORY, componentDirectoryName);
    const fileNames = fs.readdirSync(sourceComponentDirectory)
      .filter(fileName => !fileName.includes('.stories.'));

    for (const fileName of fileNames) {
      const sourceFilePath = path.join(sourceComponentDirectory, fileName);
      const destinationFilePath = path.join(DESTINATION_DIRECTORY, fileName);

      if (fileName.endsWith('.tsx')) {
        const content = fs.readFileSync(sourceFilePath, 'utf8');
        const updatedContent = updateImportPaths(content);
        fs.writeFileSync(destinationFilePath, updatedContent, 'utf8');
      } else {
        fs.copySync(sourceFilePath, destinationFilePath);
      }
    }
  }
};

const showSuccessMessage = () => {
  console.log('Success! The wireframe components have been added to your project.');
  console.log('');
  console.log('Please make sure you have the following peer dependencies installed:');
  console.log('- @react-native-community/datetimepicker');
  console.log('- @react-native-community/slider');
  console.log('- react-native-svg');
  console.log('');
  console.log('You can install them by running:');
  console.log('npm install @react-native-community/datetimepicker @react-native-community/slider react-native-svg');
};

const main = () => {
  if (fs.existsSync(DESTINATION_DIRECTORY)) {
    console.error(`Error: The '${path.basename(DESTINATION_DIRECTORY)}' folder already exists.`);
    console.error(`Please delete it before running this script again to ensure a clean installation.`);
    process.exit(1);
  }

  fs.ensureDirSync(DESTINATION_DIRECTORY);
  copyThemeFiles();
  copyComponentFiles();
  showSuccessMessage();
};

main();