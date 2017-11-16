define('ace/theme/directus', ['require', 'exports', 'module', 'ace/lib/dom'], function (require, exports, module) {
  exports.isDark = false;
  exports.cssClass = 'ace-directus';

  // NOTE: This uses an ES6 template literal string in order to make editing the CSS
  //   from within the JS file bearable. The browser support is okay, but if
  //   someone reports an 'unexpected token' error in an old browser, this is
  //   probably why.
  exports.cssText = `
  .ace-directus .ace_gutter {
    background: #e8e8e8;
    color: #333
  }

  .ace-directus .ace_print-margin {
    width: 1px;
    background: #e8e8e8
  }

  .ace-directus {
    background-color: #FFFFFF;
    color: #000000
  }

  .ace-directus .ace_cursor {
    color: #000000
  }

  .ace-directus .ace_marker-layer .ace_selection {
    background: #B5D5FF
  }

  .ace-directus.ace_multiselect .ace_selection.ace_start {
    box-shadow: 0 0 3px 0px #FFFFFF;
  }

  .ace-directus .ace_marker-layer .ace_step {
    background: rgb(198, 219, 174)
  }

  .ace-directus .ace_marker-layer .ace_bracket {
    margin: -1px 0 0 -1px;
    border: 1px solid #BFBFBF
  }

  .ace-directus .ace_marker-layer .ace_active-line {
    background: rgba(0, 0, 0, 0.071)
  }

  .ace-directus .ace_gutter-active-line {
    background-color: rgba(0, 0, 0, 0.071)
  }

  .ace-directus .ace_marker-layer .ace_selected-word {
    border: 1px solid #B5D5FF
  }

  .ace-directus .ace_constant.ace_language, .ace-directus .ace_keyword, .ace-directus .ace_meta, .ace-directus .ace_variable.ace_language {
    color: #C800A4
  }

  .ace-directus .ace_invisible {
    color: #BFBFBF
  }

  .ace-directus .ace_constant.ace_character, .ace-directus .ace_constant.ace_other {
    color: #275A5E
  }

  .ace-directus .ace_constant.ace_numeric {
    color: #3A00DC
  }

  .ace-directus .ace_entity.ace_other.ace_attribute-name, .ace-directus .ace_support.ace_constant, .ace-directus .ace_support.ace_function {
    color: #450084
  }

  .ace-directus .ace_fold {
    background-color: #C800A4;
    border-color: #000000
  }

  .ace-directus .ace_entity.ace_name.ace_tag, .ace-directus .ace_support.ace_class, .ace-directus .ace_support.ace_type {
    color: #790EAD
  }

  .ace-directus .ace_storage {
    color: #C900A4
  }

  .ace-directus .ace_string {
    color: #DF0002
  }

  .ace-directus .ace_comment {
    color: #008E00
  }

  .ace-directus .ace_indent-guide {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==) right repeat-y
  }`;

  var dom = require('../lib/dom');
  dom.importCssString(exports.cssText, exports.cssClass);
});
