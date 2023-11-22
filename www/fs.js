// const fs = require('fs');
const fs = require('fs/promises');

// write a file

// callback version
// fs.writeFile('f1.txt', 'hello 1', err => {
//   if (err) throw err;
//   console.log('file created...');
// });

// promise version
// fs.writeFile('f2.txt', 'hello 2')
//   .then(() => console.log('file created...'))
//   .catch(err => console.log(err));

// sync version
// fs.writeFileSync('f3.txt', 'hello 3');
// console.log('file created...');

// async - await
// async function createFile(fileName, content) {
//   try {
//     await fs.writeFile(fileName, content);
//     console.log('file created...');
//   } catch (err) {
//     console.log(err);
//   }
// }
// createFile('f4.txt', 'hello 4');

// read from a file
// async function readFile(fileName) {
//   try {
//     const data = await fs.readFile(fileName, 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// readFile('f1.txt');
// readFile('f2.txt');
// readFile('f3.txt');
// readFile('f4.txt');

// delete from a file (unlink)
// async function deleteFile(fileName) {
//   try {
//     await fs.unlink(fileName);
//     console.log(`file ${fileName} deleted`);
//   } catch (err) {
//     console.log(err);
//   }
// }
// deleteFile('f4.txt');

// rename a file
// async function renameFile(oldName, newName) {
//   try {
//     await fs.rename(oldName, newName);
//     console.log(`File ${oldName} renamed to ${newName}`);
//   } catch (err) {
//     console.log(err);
//   }
// }
// renameFile('f1.txt', 'duy.txt');

// create a folder
async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`Folder ${folderName} created...`);
  } catch (err) {
    console.log(err);
  }
}
createFolder('folder1');
