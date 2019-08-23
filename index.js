// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Singleton Example</h1>`;

let singleTonClass = (function (){
  var instance;
  function init (){
    var privateProperty = Math.random();
    var privateMethod = () => {
      return Math.random();
    }
    return {
      publicProperty : "Public property",
      publicMethod: function (){
        return privateProperty;
      }
    }
  }
  return {
    getInstance : function () {
      if(!instance){
        instance = init()
      }
      return instance;
    }
  }
})();

let s1 = singleTonClass.getInstance();
let s2 = singleTonClass.getInstance();

console.log(s1.publicMethod() + "  =====  " + s2.publicMethod());
console.log(s1 === s2);