(this.webpackJsonpgithubrep=this.webpackJsonpgithubrep||[]).push([[0],{199:function(e,t,n){e.exports=n(371)},204:function(e,t,n){},370:function(e,t,n){},371:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(38),c=n.n(o),i=(n(204),n(20)),u=n(60),s=n.n(u),l=n(104),p=n(379),h=n(378),m=n(381),d=n(33),b=n(206),f=n(207).default,g=function(e,t){return t?f.get("".concat(e,":").concat(t," https://api.github.com/user/repos")):f.get("https://api.github.com/users/".concat(e,"/repos"))},v=function(e,t){return b("https://api.github.com/graphql",{method:"POST",headers:{Authorization:"bearer ".concat(t)},body:JSON.stringify({query:'\n                  {\n                      user(login: "'.concat(e,'") {\n                       repositories(first: 100) {\n                       nodes {\n                            name\n                            url\n                          }\n                       }\n                      }\n                  }\n              ')})})};function O(e){var t=e.setReposFound,n=e.setFilter,o=Object(a.useState)(""),c=Object(i.a)(o,2),u=c[0],f=c[1],O=Object(a.useState)(!1),y=Object(i.a)(O,2),j=y[0],k=y[1],E=Object(a.useState)(!1),w=Object(i.a)(E,2),x=w[0],S=w[1],F=Object(a.useState)(!1),C=Object(i.a)(F,2),A=C[0],I=C[1],N=Object(a.useState)(!0),_=Object(i.a)(N,2),L=_[0],P=_[1],q=Object(a.useState)(1),B=Object(i.a)(q,2),J=B[0],z=B[1],R=Object(a.useState)(!1),W=Object(i.a)(R,2),H=W[0],T=W[1],U=Object(a.useState)(!1),Y=Object(i.a)(U,2),G=Y[0],K=Y[1],V=Object(a.useState)(""),$=Object(i.a)(V,2),D=$[0],M=$[1],Q=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return");case 2:if(k(!0),S(!1),1!==J){e.next=9;break}return e.next=7,g(u,D).then((function(e){e.data.length>0?(t(e.data),I(!0),P(!0)):P(!1)})).catch((function(){S(!0)}));case 7:e.next=11;break;case 9:return e.next=11,v(u,D).then((function(e){return e.json()})).then((function(e){e.data.user.repositories.nodes.length>0?(t(e.data.user.repositories.nodes),I(!0),P(!0)):P(!1)})).catch((function(){S(!0)}));case 11:k(!1),document.getElementById("inputField").value="";case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){n(""),I(!1),t(null),S(!1),document.getElementById("inputField").value=""},Z=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(!0),!(D&&D.length>0)){e.next=5;break}return e.next=4,(n=D,b("https://api.github.com/graphql",{method:"POST",headers:{Authorization:"bearer ".concat(n)},body:JSON.stringify({query:"\n                {\n                    __typename\n                }\n                  "})})).then((function(e){return e.json()})).then((function(e){t=e}));case 4:t.hasOwnProperty("message")?(S(!0),M("")):(K(!0),T(!1),S(!1),I(!1));case 5:k(!1);case 6:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"userInput"},r.a.createElement(p.a,{options:[{key:1,text:"Api v3",value:1},{key:2,text:"Api v4",value:2}],fluid:!0,selection:!0,defaultValue:1,onChange:function(e,t){var n=t.value;X(),z(n),G||2!==n?T(!1):(T(!0),I(!0),M(""))}}),r.a.createElement(h.a,{disabled:L,open:!0,position:"top center",content:L?"User not found":"".concat(u," has no public repositories"),trigger:r.a.createElement(m.a,{id:"inputField",type:"text",onChange:function(e){return A?n(e.target.value):f(e.target.value)},onFocus:function(){P(!0),S(!1)},placeholder:A&&!H?"Repository":"Username...",maxLength:"39",disabled:H&&A,error:x&&!H,loading:j&&!H,onKeyPress:function(e){"Enter"===e.key&&Q()}})}),r.a.createElement(d.a,{size:"large",name:A&&!H?"undo":"search",disabled:H&&A,onClick:function(){return A?X():Q()}})),r.a.createElement("div",{className:"authInput"},r.a.createElement(h.a,{position:"bottom center",on:"click",pinned:!0,content:r.a.createElement("a",{rel:"noopener noreferrer",href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token",target:"_blank"},1===J?"You'll need a token to access your private repositories":"You need to generate a token to use the Api v4"),trigger:r.a.createElement(m.a,{disabled:G,error:x&&H,value:D,placeholder:"Write your personal access token",type:"text",onChange:function(e){M(e.target.value)},maxLength:"100"})}),r.a.createElement(d.a,{name:G?"checkmark box":j?"sync":"arrow circle right",loading:j&&H,disabled:G,onClick:function(){D&&Z(D)}})))}var y=n(382),j=n(380);n(370);var k=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(null),u=Object(i.a)(c,2),s=u[0],l=u[1];return r.a.createElement("div",{className:"App"},r.a.createElement(y.a,{as:"h1",icon:!0},r.a.createElement(d.a,{name:"github"}),"Search for your repositories on GitHub!"),r.a.createElement(O,{setReposFound:o,setFilter:l}),r.a.createElement("div",{className:"repoList"},n&&n.map((function(e,t){return(!s||e.name.toLowerCase().trim().match(s.toLowerCase().trim()))&&r.a.createElement(j.a,{celled:!0,key:t},r.a.createElement(j.a.Item,null,r.a.createElement(j.a.Content,null,r.a.createElement(j.a.Header,{as:"a",href:e.hasOwnProperty("html_url")?e.html_url:e.url,target:"_blank"},e.name))))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[199,1,2]]]);
//# sourceMappingURL=main.5d2221f9.chunk.js.map