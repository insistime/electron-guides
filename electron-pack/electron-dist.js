'use strict';

// q
var q = require('qiao.util.file');

// vars
var electronDistPath = q.path.resolve(__dirname, '../electron-dist');

// electron dist
function electronDist(){
    // mkdir
    mkDir(electronDistPath);

    // cp file or folder
    cpFileOrFolder('main');
    cpFileOrFolder('node_modules');
    cpFileOrFolder('renderer-index/dist');
    cpFileOrFolder('renderer-login/dist');
    cpFileOrFolder('package.json');
}

// make electron-dist dir
function mkDir(src){
    var res = 'success';
    try{
        // rm
        if(q.isExists(src)) q.rm(`${src}/`);

        // mkdir
        q.mkdir(`${src}/`);
    }catch(e){
        console.log(e);
        res = 'fail';
    }

    console.log(`make dir: ${src} ${res}`);
}

// cp file or folder
function cpFileOrFolder(src){
    var res = 'success';
    try {
        var srcPath = q.path.resolve(__dirname, `../electron-src/${src}`);
        var destPath = q.path.resolve(__dirname, `../electron-dist/${src}`);
        q.cp(srcPath, destPath);
    }catch(e){
        console.log(e);
        res = 'fail';
    }

    console.log(`cp: electron-src/${src} ${res}`);
}

// run
electronDist();