const fs = require ('fs');
const path = require ('path');
const ora = require ('ora');
const rootPath = path.resolve (__dirname, '../');
const startPath = path.resolve (rootPath, 'src/');
const fileMerge = require("./index");
let building = ora ('Being building...');

let modules = [];

const buildSingle = (targetPath, name) => {
  let isFile = fs.statSync (targetPath).isFile();
  if (/index.ts/.test(name)) return;
  if (isFile) {
    let file = targetPath.split("src");
    let fileName = file[file.length - 1];
    modules.push(fileName);
    fileMerge(modules,'./src/index.ts');
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
