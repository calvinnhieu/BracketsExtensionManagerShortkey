define(function (require, exports, module) {
    'use strict';

    var CommandManager =brackets.getModule("command/CommandManager");
    var KeyBindingManager= brackets.getModule('command/KeyBindingManager');

    var OPEN_BEM_ID = "dderaedt.tutorialExt.LogHelloWorld";
    var OPEN_BEM_NAME = "Open Extension Manager";

    function openBEM() {
        $("#toolbar-extension-manager").click();
    }

    KeyBindingManager.addBinding(OPEN_BEM_ID,"Alt-Shift-O");

    CommandManager.register(OPEN_BEM_NAME, OPEN_BEM_ID, openBEM);
});
