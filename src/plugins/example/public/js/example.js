(function (window, $, undefined) {
  'use strict';
  var Example;
  Example = function Example(cockpit) {
    console.log('Loading example plugin in the browser.');
    // Instance variables
    this.cockpit = cockpit;
    // Add required UI elements
    $('#menu').prepend('<div id="example" class="hidden">[example]</div>');

    this.cockpit.emit('inputController.register',
      {
        name: "example.keyBoardMapping",
        description: "Example for keymapping.",
        defaults: { keyboard: '0', gamepad: 'X' },
        down: function() { console.log('0 down'); },
        up: function() { console.log('0 up'); },
        secondary: [
          {
            name: "example.keyBoardMappingDepdent",
            dependency: "example.keyBoardMapping",
            defaults: { keyboard: '9', gamepad: 'RB' },
            down: function() { console.log('####'); }
          }
        ]
      });

    // for plugin management:
    this.name = 'example';
    // for the settings
    this.viewName = 'Example plugin';
    // for the UI
    this.canBeDisabled = true;
    // SET THIS TO true to see it working!
    this.enable = function () {
      alert('example enabled');
    };
    this.disable = function () {
      alert('example disabled');
    };
  };
  window.Cockpit.plugins.push(Example);
}(window, jQuery));