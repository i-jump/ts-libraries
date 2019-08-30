const fs = require ('fs');
const path = require ('path');
const ora = require ('ora');
const rootPath = path.resolve (__dirname, '../');
const startPath = path.resolve (rootPath, 'src/');
const fileMerge = require("./rf.js");
let building = ora ('now building...');
let modules = [];
let exportName = [];
let esData = [];
const buildSingle = (targetPath, name) => {
  if (/index.ts/.test(name)) return;
  if (/.js$/.test(name)) return;
  let isFile = fs.statSync (targetPath).isFile();
  if (isFile) {
    let file = targetPath.split("src");
    let fileName = file[file.length - 1];
    modules.includes(fileName) || modules.push(fileName);

      let exArr = fileMerge();
      const importCommentJs = modules.map(item => {
        let nameArr = item.split("/")[item.split("/").length - 1];
        let name = nameArr.substr(0,nameArr.length - 3);
        exportName.includes(name) || exportName.push(name);
        let arr = exArr[name];
        let esExArr = exArr[name];
        let index = arr.indexOf("default");
        esExArr[index] = name;
        esData = esData.concat(esExArr);
        var importStr = '';
        if(index !== -1){
          importStr = `import ${name} from '.${item.substr(0,item.length - 3)}'`;
          arr.splice(index,1);
        }
        if(arr.length > 0) {
          importStr += `\n import {${arr.join(",")}} from '.${item.substr(0,item.length - 3)}'`;
        }
        esData = Array.from(new Set(esData));

        return importStr
      }).join('\n');
      const esExport = `export {\n\t${esData.join(',\n\t')}\n}`;
      fs.writeFileSync('./src/index.ts', `${importCommentJs}\n\n${esExport}`, function(err) {
        if (err) {
          throw err;
        }
      });
  } else {
    const directory = fs.readdirSync (targetPath);
    directory.forEach (dir => {
      buildSingle (path.resolve (targetPath, dir), dir);
    });
  }
};
async function build () {
  building.start ();
  Promise.all ([await buildSingle (startPath)])
    .then (([result1]) => {
      building.stop ();
    })
    .catch (e => {
      building.stop ();
      throw e;
    });
}
build ();
