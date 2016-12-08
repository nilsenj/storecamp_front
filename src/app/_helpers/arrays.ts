let $ = require('../../../node_modules/jquery/dist/jquery.min.js');

export let arrays = {

  transformToArray: ($obj: Object) => {
    var arrays = $.map($obj, function(value, index) {
      return [value];
    });
    return arrays[0];
  }

}
