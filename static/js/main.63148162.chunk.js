(this.webpackJsonptemp=this.webpackJsonptemp||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(6),s=a.n(n),r=a(4),i=a.n(r),j=a(7),u=a(5),h=(a(3),a(0)),l=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("karachi"),r=Object(u.a)(s,2),l=r[0],o=r[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){var t,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://api.openweathermap.org/data/2.5/weather?q=".concat(l,"&units=metric&APPID=e0ff048d5a37b0e012f4b7d2ba566222"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,n(c.main);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"Header",children:"Check Weather Updates"}),Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("div",{className:"inputData",children:Object(h.jsx)("input",{value:l,type:"text",placeholder:"search",className:"inputField",onChange:function(e){o(e.target.value)}})}),a?Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("h2",{className:"location",children:[Object(h.jsx)("i",{className:"fas fa-street-view"}),l]}),Object(h.jsxs)("h1",{className:"temp",children:[a.temp,"\xb0C"]}),Object(h.jsxs)("h3",{className:"tempmin_max",children:["Min :  ",a.temp_min,"\xb0C   | Max : ",a.temp_max,"\xb0C"]})]})}):Object(h.jsx)("p",{children:Object(h.jsx)("b",{children:" No Data Found "})})]})]})};var o=function(){return Object(h.jsx)(l,{})};s.a.render(Object(h.jsx)(o,{}),document.getElementById("root"))},3:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.63148162.chunk.js.map