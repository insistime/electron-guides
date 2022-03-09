var electron = require('electron');

exports.init = function(){
    var docMenus = [
        {
            label: 'menu_label_yach',
            submenu: [
                {
                    label: 'menu_about',
                    role: 'about'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'system_preferences',
                    accelerator: 'CmdOrCtrl+,',
                    click: function(item, focusedWindow) {
                        // if (focusedWindow) windowHandle.createWindow('systemset');
                    }
                },
                {
                    type: 'separator'
                },
                {
                    label: 'menu_hide',
                    role: 'hide'
                },
                {
                    label: 'menu_hideOthers',
                    role: 'hideOthers'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'menu_hideOthers',
                    role: 'quit'
                }
            ]
        },
        {
            label: 'menu_label_edit',
            submenu: [
                {
                    label: 'menu_undo',
                    role: 'undo'
                },
                {
                    label: 'menu_redo',
                    role: 'redo'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'menu_cut',
                    role: 'cut'
                },
                {
                    label: 'menu_copy',
                    role: 'copy'
                },
                {
                    label: 'menu_paste',
                    role: 'paste'
                },
                {
                    label: 'menu_delete',
                    role: 'delete'
                },
                {
                    label: 'menu_selectAll',
                    role: 'selectAll'
                }
            ]
        },
        {
            label: 'menu_label_window',
            submenu: [
                {
                    label: 'menu_minimize',
                    role: 'minimize'
                },
                {
                    label: 'menu_close',
                    role: 'close'
                },
                {
                    label: 'menu_togglefullscreen',
                    role: 'togglefullscreen'
                }
            ]
        },
        {
            label: '调试',
            submenu: [
                {
                    label: 'toggleDevTools',
                    role: 'toggleDevTools'
                }
            ]
        }
    ];

    var dockMenu = electron.Menu.buildFromTemplate(docMenus);
    electron.Menu.setApplicationMenu(dockMenu);
};