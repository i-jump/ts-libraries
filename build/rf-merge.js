var fs = require('fs');
const PATH = require('path');
const rootPath = PATH.resolve (__dirname, '../');
const distPath = PATH.resolve (rootPath, 'dist/');
const srcPath = PATH.resolve (rootPath, 'src/');
function delDir(path){
  let files = [];
  if(fs.existsSync(path)){
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()){
        delFile(curPath);
      }
    });
  }
}

function delFile(path){
  let files = [];
  if(fs.existsSync(path)){
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()){
        console.log(curPath);
        delDir(curPath);
      } else {
        fs.unlinkSync(curPath)
      }
    });
    fs.rmdirSync(path);
  }
}
delDir(distPath,(res) => {});
// fs.unlinkSync(`${srcPath}/index.ts`);
fs.rename(rootPath+'/dist',rootPath+'/lib',function(err){});
