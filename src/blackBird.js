"use strict";
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, blackBird.js
----------------------------------------------------------------*/
// TU CÓDIGO AQUÍ:

function $Promise(executor) {
  if (typeof executor !== "function")
    throw TypeError("executor is not a function");
  this._state = "pending";
  this._internalResolve = function (data) {
    if (this._state === "pending") {
      this._value = data;
      this._state = "fulfilled";
    }
  };
  this._internalReject = function (reason) {
    if (this._state === "pending") {
      this._value = reason;
      this._state = "rejected";     
    }
  };

  function resolver (){
    this_state === "fulfilled"

  };
  function rejector (){};

  executor (resolver, rejector);
  
}

/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('blackBird');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
