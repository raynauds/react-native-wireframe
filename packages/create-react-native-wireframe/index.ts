#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";

const WIREFRAME_PACKAGE_PATH: string = path.dirname(
  require.resolve("react-native-wireframe/package.json")
);
const SOURCE_DIRECTORY: string = path.join(WIREFRAME_PACKAGE_PATH, "src");
const DESTINATION_DIRECTORY: string = path.resolve(process.cwd(), "wireframe");

const paths: { source: string; destination: string }[] = [
  "components",
  "theme",
  "index.ts",
].map((entry) => ({
  source: path.join(SOURCE_DIRECTORY, entry),
  destination: path.join(DESTINATION_DIRECTORY, entry),
}));

const checkDestinationPath = (): void => {
  if (fs.existsSync(DESTINATION_DIRECTORY)) {
    const destinationPath = path.basename(DESTINATION_DIRECTORY);
    console.error(`Error: The '${destinationPath}' folder already exists.`);
    console.error(
      "Please delete it before running this script again to ensure a clean installation."
    );
    process.exit(1);
  }
};

const copyFiles = (): void => {
  fs.ensureDirSync(DESTINATION_DIRECTORY);
  paths.map((path) => {
    fs.copySync(path.source, path.destination);
  });
};

const showSuccessMessage = (): void => {
  console.log(
    "Success! The wireframe components have been added to your project."
  );
};

const main = (): void => {
  checkDestinationPath();
  copyFiles();
  showSuccessMessage();
};

main();
