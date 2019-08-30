var fs = require('fs');
const PATH = require('path');
const rootPath = PATH.resolve (__dirname, '../');
const srcPath = PATH.resolve (rootPath, 'src/');

module.exports =  function() {
  const exp = require(srcPath+'/index.js');
  let expArr = {};
  for(var k in exp) {
    if(typeof exp[k] === 'object') {
      let g = exp[k];
      expArr[k] = []
      for(var j in g) {
        if(j !== '__esModule') {
          expArr[k].push(j);
        }
      }
    }
  }
  delImportFile(srcPath);
  return expArr;
};

function delImportFile(path){
  let files = [];
  if(fs.existsSync(path)){
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if(fs.statSync(curPath).isDirectory()){
        delImportFile(curPath);
      }else{
        if (/.js$/.test(curPath)){
          if(!(/index.js/.test(curPath))){
            fs.unlinkSync(curPath)
          }
        }
      }
    });
  }
}
