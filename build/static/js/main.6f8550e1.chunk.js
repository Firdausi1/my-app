(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),m=(a(26),a(27),a(28),a(3));var s=function(){return c.a.createElement("div",{className:"nav"},c.a.createElement("nav",null,c.a.createElement("h3",null,"Logo"),c.a.createElement("ul",{className:"nav-links"},c.a.createElement(m.b,{className:"navStyle",to:"/"},c.a.createElement("li",null,"Home")),c.a.createElement(m.b,{className:"navStyle",to:"/menu"},c.a.createElement("li",null,"Menu")),c.a.createElement(m.b,{className:"navStyle",to:"/about"},c.a.createElement("li",null,"About")),c.a.createElement(m.b,{className:" navStyle",to:"/cart"},c.a.createElement("li",null,c.a.createElement("img",{src:"../Compound Path 1.svg",alt:"cart"}))),c.a.createElement(m.b,{className:"btn-secondary navStyle",to:"/#logIn"},c.a.createElement("li",null,"Login")))))};a(34);var o=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"header-text"},c.a.createElement("h1",null,"What would you like today?"),c.a.createElement("p",null,"Small chops, cakes, doughnuts and more available for pickup/delivery"),c.a.createElement("form",null,c.a.createElement("input",{className:"form-input",type:"text",name:"address",placeholder:"Enter your Address"}),c.a.createElement("button",{className:"form-btn"}," submit"))),c.a.createElement("img",{src:"./undraw_Hamburger_8ge6.svg",alt:"header"}))};a(35);var u=function(){return c.a.createElement("section",{className:"about"},c.a.createElement("div",{className:"about-us"},c.a.createElement("div",{className:"about-text"},c.a.createElement("h2",null,"ABOUT"),c.a.createElement("p",null,"A bakery business founded in 2017 by Firdausy Bashir. we cater to your desert needs by delivering freshly baked goods and confectionaries to your doorstep."),c.a.createElement("form",null,c.a.createElement("button",{className:"btn-tertiary"},"Learn More"))),c.a.createElement("div",{className:"about-img"},c.a.createElement("img",{src:"./Rectangle 3.jpg",alt:"small chop"}))))};a(36);var i=function(){return c.a.createElement("section",{className:"menu"},c.a.createElement("div",{className:"menu-body"},c.a.createElement("div",{className:"menu-img"},c.a.createElement("img",{src:"./Rectangle 3.jpg",alt:"small chop"})),c.a.createElement("div",{className:"menu-text"},c.a.createElement("h2",null,"MENU"),c.a.createElement("p",null,"Let Sucre Delight take care of your catering needs individual or party. Our different trays are the perfect solution for your next meeting, event, gathering."),c.a.createElement("form",null,c.a.createElement(m.b,{to:"/menu"},c.a.createElement("button",{className:"btn-tertiary"},"Browse Our Menu"))))))},E=a(7),p=a.n(E),d=a(9),v=a(10);a(17);var f=function(e){var t=e.name,a=e.price,n=e.desc,r=e.itemId;return c.a.createElement("div",{className:"picks"},c.a.createElement(m.b,{className:"link",to:"/menu/".concat(r)},c.a.createElement("div",{className:"top-pick_box"},c.a.createElement("img",{src:"./rectangle 3.jpg",alt:"small chop"}),c.a.createElement("div",{className:"top-pick_text"},c.a.createElement("h3",null,t),c.a.createElement("h4",null,n),c.a.createElement("p",null,"#",a)))))};var h=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){l()}),[]);for(var l=function(){var e=Object(d.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://surce-delight.herokuapp.com/api/product/all/",e.next=3,fetch("https://surce-delight.herokuapp.com/api/product/all/");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),r(a[0].product_variation);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=a.map((function(e){return c.a.createElement(f,{name:e.product_type,price:e.current_price,desc:e.description,itemId:e.id,key:e.id})})),s=[],o=0;o<4;o++)s.push(m[o]);return console.log(s),c.a.createElement("div",{className:"top"},c.a.createElement("div",{className:"top-heading"},c.a.createElement("h2",null,"OUR TOP PICKS"),c.a.createElement("a",{className:"btn-link"}," View all")),c.a.createElement("section",{className:"top-picks"},s.map((function(e){return e}))))};a(38);var g=function(){return c.a.createElement("section",{className:"news"},c.a.createElement("div",{className:"newsletter"},c.a.createElement("div",{className:"news-text"},c.a.createElement("h2",null,"Get the latest news and others"),c.a.createElement("p",null,"Subscribe to our Newsletter")),c.a.createElement("div",{className:"news-form"},c.a.createElement("form",null,c.a.createElement("input",{className:"form-input",type:"text",name:"address",placeholder:"Enter Email Address"}),c.a.createElement("button",{className:"form-btn"}," submit")))))};var b=function(){return c.a.createElement("div",null,c.a.createElement(o,null),c.a.createElement(u,null),c.a.createElement(i,null),c.a.createElement(h,null),c.a.createElement(g,null))};a(18);var N=function(e){var t=e.name,a=e.desc,n=e.price,r=e.itemId;return c.a.createElement("div",{className:"ourMenu-list"},c.a.createElement(m.b,{className:"link",to:"/menu/".concat(r)},c.a.createElement("div",{className:"Menu-box"},c.a.createElement("div",{className:"Menu-img"},c.a.createElement("img",{src:"./4C9E43EF-FD5D-4A3E-80E6-32C05E01B80C.jpeg",alt:"small chop"})),c.a.createElement("div",{className:"Menu-content"},c.a.createElement("div",{className:"Menu-text"},c.a.createElement("h4",null,t," "),c.a.createElement("p",null,a)),c.a.createElement("div",{className:"Menu-price"},c.a.createElement("h5",null,"#",n),c.a.createElement(m.b,{className:"link",to:"/menu/".concat(r,"/cart")},c.a.createElement("a",{className:"btn-link",href:""},"add to cart")))))))};var y=function(e){console.log(e);var t=Object(n.useState)([]),a=Object(v.a)(t,2),r=a[0],l=a[1];Object(n.useEffect)((function(){m()}),[]);var m=function(){var e=Object(d.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://surce-delight.herokuapp.com/api/product/all/",e.next=3,fetch("https://surce-delight.herokuapp.com/api/product/all/");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),l(a[0].product_variation);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("section",{className:"our-menu"},c.a.createElement("h2",null,"Our Menu"),c.a.createElement("div",{className:"Menu"},r.map((function(e){return c.a.createElement(N,{name:e.product_type,price:e.current_price,image:e.product_image,desc:e.description,itemId:e.id,key:e.id})}))))};a(39),a(40);var k=function(e){var t=e.price,a=e.name,n=e.desc,r=e.itemId;return c.a.createElement("div",{className:"item-container"},c.a.createElement("img",{alt:"small chop"}),c.a.createElement("div",{className:"item-heading"},c.a.createElement("h2",null,a),c.a.createElement("p",null,"#",t)),c.a.createElement("p",null,n),c.a.createElement("div",{className:"item-quantity"},c.a.createElement("div",null,c.a.createElement("label",{id:"quantity"},"Quantity"),c.a.createElement("input",{type:"number",name:"quantity",placeholder:"0"})),c.a.createElement(m.b,{className:"link",to:"/menu/".concat(r,"/cart")},c.a.createElement("a",{className:"btn-link"},"add to cart"))))};var w=function(e){var t=e.match,a=Object(n.useState)([]),r=Object(v.a)(a,2),l=r[0],m=r[1];console.log(t),Object(n.useEffect)((function(){s()}));var s=function(){var e=Object(d.a)(p.a.mark((function e(){var a,n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://surce-delight.herokuapp.com/api/product/small-chops/".concat(t.params.itemId,"/"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,console.log(c),m(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("section",{className:"menuItemContainer"},c.a.createElement(k,{price:l.price,desc:l.description,name:l.product_type,itemId:l.id,key:l.id}))};var x=function(e){var t=e.match;return console.log(t),c.a.createElement("section",{className:"cart-container"})},j=a(1);a(41);var O=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("footer",null,c.a.createElement("h2",null,"Sucre Delight"),c.a.createElement("p",null,"You can also reach out to us on any of our social media platform "),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("span",null,c.a.createElement("img",{src:"../instagram (2).svg",alt:"instagram"}))),c.a.createElement("li",null,c.a.createElement("span",null,c.a.createElement("img",{src:"../twitter (2).svg",alt:"twitter"})))),c.a.createElement("p",null,"copyright\xa0\xa9 2020")))};var S=function(){return c.a.createElement(m.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(s,null),c.a.createElement(j.c,null,c.a.createElement(j.a,{path:"/",exact:!0,component:b}),c.a.createElement(j.a,{path:"/menu",exact:!0,component:y}),c.a.createElement(j.a,{path:"/menu/:itemId/cart",exact:!0,component:x}),c.a.createElement(j.a,{path:"/menu/:itemId",exact:!0,component:w})),c.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.6f8550e1.chunk.js.map