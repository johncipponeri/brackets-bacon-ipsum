/*
 * The MIT License (MIT)
 * Copyright (c) 2013 Lance Campbell. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, regexp: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, brackets, XMLHttpRequest, $ */

define(function (require, exports, module) {
    "use strict";
    
    // --- Brackets Modules ---
    var KeyEvent        = brackets.getModule("utils/KeyEvent"),
        EditorManager   = brackets.getModule("editor/EditorManager");
    
    // --- Extension modules ---
    var BaconIpsum = require("BaconIpsum");
    
    // --- Helper functions ---
    function _getBaconCommand(editor) {
        var document    = editor.document,
            pos         = editor.getCursorPos(),
            line        = document.getLine(pos.line),
            start       = pos.ch,
            end         = pos.ch,
            command     = "";
        
        while (start > 0 && (/\S/).test(line.charAt(start - 1))) {
            --start;
        }
        
        command = document.getRange({line: pos.line, ch: start}, {line: pos.line, ch: end});
        
        if (command.match(/bacon/)) {
            command = command.substring(command.match(/bacon/).index);
        }
        
        return ((command.split("_")[0] === "bacon") ? command : "");
    }
    
    // --- Event handlers ---
    function _handleKeyEvent(jqEvent, editor, event) {
        var command     = "",
            text        = "",
            start       = 0,
            end         = 0,
            codemirror  = null,
            i           = 0;
        
        if ((event.type === "keydown") && (event.keyCode === KeyEvent.DOM_VK_CONTROL)) {
            command = _getBaconCommand(editor);
            if (command) {
                text    = BaconIpsum.parseCommand(command);
                end     = editor.getCursorPos();
                start   = {line: end.line, ch: end.ch - command.length};
                editor.document.replaceRange(text, start, end);
                
                // Fix the line indentation
                codemirror = editor._codeMirror;
                if (codemirror) {
                    end = editor.getCursorPos();
                    for (i = (start.line); i <= end.line; i++) {
                        codemirror.indentLine(i);
                    }
                }
                
                event.preventDefault();
            }
        }
    }
    
    function _updateEditorListener(event, newEditor, oldEditor) {
        if (newEditor) {
            $(newEditor).on("keyEvent", _handleKeyEvent);
        }
        
        if (oldEditor) {
            $(oldEditor).off("keyEvent", _handleKeyEvent);
        }
    }
    
    // Add Event Listeners
    $(EditorManager).on("activeEditorChange", _updateEditorListener);
    $(EditorManager.getCurrentFullEditor()).on("keyEvent", _handleKeyEvent);
});
