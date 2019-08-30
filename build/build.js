const fs = require ('fs');
const path = require ('path');
const ora = require ('ora');
const rootPath = path.resolve (__dirname, '../');
const startPath = path.resolve (rootPath, 'src/');
let building = ora ('Being building...');
console.log("打包中....")
let modules = [];
let exportName = [];
let esData = [];
const buildSingle = (targetPath, name) => {
  let isFile = fs.statSync (targetPath).isFile();
  if (/index.ts/.test(name)) return;
  if (/.js$/.test(name)) return;
  if (isFile) {
    let file = targetPath.split("src");
    let fileName = file[file.length - 1];
    modules.includes(fileName) || modules.push(fileName);
    const imports = modules.map(item => {
      let nameArr = item.split("/")[item.split("/").length - 1];
      let name = nameArr.substr(0,nameArr.length - 3);
      exportName.includes(name) || exportName.push(name);
      return `import * as ${name} from '.${item.substr(0,item.length - 3)}'`
    }).join('\n');
    const exportDefault = `export {\n\t${exportName.join(',\n\t')}\n}`;
    fs.writeFileSync('./src/index.ts', `${imports}\n\n${exportDefault}`, function(err) {
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
