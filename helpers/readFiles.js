const fsPromises = require('fs').promises;

const readFiles = (path) =>{
  return fsPromises.readFile(path, { encoding: 'utf-8' })
  .then((data) => JSON.parse(data))
  .catch((err) => {throw err;});
};
module.exports = readFiles;
