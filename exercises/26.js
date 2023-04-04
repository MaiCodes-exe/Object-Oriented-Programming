// Use an IIFE to Create a Module

let funModule = (function () {
  return{
    isCuteMixin: function(obj){
      obj.isCute = function(){

      }
    },
        singMixin: function(obj){
      obj.sing = function(){

      }
    },
  }
}) ();








