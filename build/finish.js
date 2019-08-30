var fs = require('fs');
const PATH = require('path');
const rootPath = PATH.resolve (__dirname, '../');
const distPath = PATH.resolve (rootPath, 'dist/');
const srcPath = PATH.resolve (rootPath, 'src/');
let content = '';
function finshDir(path){
  let files = [];
  if(fs.existsSync(path)){
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()){
        finshFile(curPath);
      }
    });
  }
}

function finshFile(path){
  let files = [];
  if(fs.existsSync(path)){
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()){
        finshDir(curPath);
      } else {
        var c = fs.readFileSync(curPath);
        content += c.toString() + '\n';
        fs.unlinkSync(curPath)
      }
    });
    fs.rmdirSync(path);
  }
}
// finshDir(distPath,(res) => {});
// fs.writeFile(`${distPath}/index.d.ts`, content,(err) => {});
fs.unlinkSync(`${srcPath}/index.ts`);
fs.unlinkSync(`${srcPath}/index.js`);
fs.rename('dist','lib',function(err){});
