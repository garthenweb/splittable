for(var ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,r,f){if(f.get||f.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[r]=f.value)},U="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,qa=["String","prototype","endsWith"],ra=0;ra<qa.length-1;ra++){var sa=qa[ra];sa in U||(U[sa]={});U=U[sa]}
var ta=qa[qa.length-1],ua=U[ta],xa=ua?ua:function(a,r){var f;if(null==this)throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");f=this+"";a+="";void 0===r&&(r=f.length);r=Math.max(0,Math.min(r|0,f.length));for(var I=a.length;0<I&&0<r;)if(f[--r]!=a[--I])return!1;return 0>=I};xa!=ua&&null!=xa&&ka(U,ta,{configurable:!0,writable:!0,value:xa});console.log("d export");function ya(){console.log("c export")}console.log("in c");
(self.System=self.System||{}).import=function(n){n=n.replace(/\.js$/g,"")+".js";return (self._S["//"+n]&&Promise.resolve(self._S["//"+n]))||self._S[n]||(self._S[n]=new Promise(function(r,t){var s=document.createElement("script");s.src=(self.System.baseURL||".")+"/"+n.replace(/[\/\\]/g,"-");s.onerror=t;s.onload=function(){r(self._S["//"+n])};(document.head||document.documentElement).appendChild(s);}))};
(self._S=self._S||[]).push=function(f){f.call(self)};(function(f){while(f=self._S.shift()){f.call(self)}})();
//# sourceMappingURL=_base.js.map

