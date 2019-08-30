
const FS = require("fs");
const PATH = require('path');
const rootPath = PATH.resolve (__dirname, '../');
const startPath = PATH.resolve (rootPath, 'src/');
module.exports = function(fileSource, exportFilePath) {

  const readFiles = [];
  let newFileSize = 0;
  let newFileData = "";
  let mergeFileProgress = 0;

  function searchFile(path) {
    try{
      let stats = FS.statSync(path);
      if(stats.isFile()){
        newFileSize += stats.size;
        readFiles.push({absPath:path,size:stats.size});
      }else if(stats.isDirectory()){
        let dirfiles = FS.readdirSync(path);
        for(let i = 0;i<dirfiles.length;i++){
          searchFile(PATH.join(path,dirfiles[i]));
        }
      }
    }catch(err){
      console.log("error not find "+path);
    }
  }

  for(let i=0;i<fileSource.length;i++){
    searchFile(`${startPath}${fileSource[i]}`);
  }

  for(let i = 0;i<readFiles.length;i++){
    newFileData += FS.readFileSync(readFiles[i].absPath);
    mergeFileProgress++;
  }

  FS.writeFile(exportFilePath,newFileData,err =>{
    if(null != err){
      throw err;
    }
  });
}
