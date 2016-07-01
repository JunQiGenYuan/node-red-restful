
module.exports = function (RED) {
  "use strict";
  var restful = require('node-restful');

  function RestfulInNode(config) {
    console.log(RED.httpNode);
    setTimeout(function () {
      console.log(config);
    }, 1000);
  }

  RED.nodes.registerType('restful in', RestfulInNode);

  function ModelNode(config) {
  }

  RED.nodes.registerType('model', ModelNode);
}
