'use strict';

// q
var q = require('qiao.util.file');

// vars
var electronDistPath = q.path.resolve(__dirname, '../electron-dist');

// electron dist
function electronDist(){
    // mkdir
    mkDir(electronDistPath);

    // cp folder
    cpDir('main');
    cpDir('node_modules');
    cpDir('renderer-index/dist');
    cpDir('renderer-login/dist');

    // cp file
    cpFile('package.json');
}

// make electron-dist dir
function mkDir(src){
    var res = 'success';
    try{
        // rm
        if(q.isExists(src)) q.rm(`${src}/`);

        // mkdir
        q.fs.mkdirSync(src);
    }catch(e){
        console.log(e);
        res = 'fail';
    }

    console.log(`make dir: ${src} ${res}`);
}

// cp dir
function cpDir(src){
    var res = 'success';
    try {
        var srcPath = q.path.resolve(__dirname, `../electron-src/${src}`);
        var destPath = q.path.resolve(__dirname, `../electron-dist/${src}`);
        q.fs.cpSync(srcPath, destPath, {recursive:true});
    }catch(e){
        console.log(e);
        res = 'fail';
    }

    console.log(`cp dir: electron-src/${src} ${res}`);
}

// cp file
function cpFile(src){
    var res = 'success';
    try {
        var srcPath = q.path.resolve(__dirname, `../electron-src/${src}`);
        var destPath = q.path.resolve(__dirname, `../electron-dist/${src}`);
        q.fs.copyFileSync(srcPath, destPath);
    }catch(e){
        console.log(e);
        res = 'fail';
    }

    console.log(`cp file: electron-src/${src} ${res}`);
}

// run
electronDist();