'use strict';

// qiao-log
var q = require('qiao-log');

// Logger
var Logger = q.getLogger('vq.log');

/**
 * info
 * @param {*} msg 
 */
exports.info = function(msg){
    exports.log(msg, 'info');
};

/**
 * warn
 * @param {*} msg 
 */
exports.warn = function(msg){
    exports.log(msg, 'warn');
};

/**
 * error
 * @param {*} msg 
 */
exports.error = function(msg){
    exports.log(msg, 'error');
};

/**
 * log
 * @param {*} msg 
 * @param {*} type 
 */
exports.log = function(msg, type){
    var _type = type || 'info';

    if(_type == 'info')     Logger.info(msg);
    if(_type == 'warn')     Logger.warn(msg);
    if(_type == 'error')    Logger.error(msg);
};