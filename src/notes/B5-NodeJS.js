const path = require('path');
const fs = require('fs');

function convertJSON(jsonPath) {
  try {
    const jsonFile = fs.readFileSync(jsonPath, 'utf8');
    const jsonObj = JSON.parse(jsonFile);
    jsonObj.check = true;
    const jsonConverted = JSON.stringify(jsonObj);
    fs.writeFileSync(jsonPath, jsonConverted);
  } catch (err) {
    console.error(err);
  }
}

function searchImage(folderPath) {
  const results = [];
  const allFiles = fs.readdirSync(folderPath);
  for (let file of allFiles) {
    const fileExt = path.extname(file).toLowerCase();
    if (
      fileExt === '.jpg' ||
      fileExt === '.png' ||
      fileExt === '.jpeg' ||
      fileExt === '.gif'
    )
      results.push(file);
  }
  return results;
}

// copy all image type of png to new folder
function createNewImageFolder(folderPath, folderName) {
  // search all image
  const images = searchImage(folderPath);
  // create new folder
  fs.mkdirSync(path.join(__dirname, folderName));
  const newFolderPath = path.join(__dirname, folderName);
  // copy all images into a folder
}

// process.argv
// const folderPath = process.argv[2];
