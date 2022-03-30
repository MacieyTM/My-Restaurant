(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},,function(e,t,n){e.exports={meal:"MealItem_meal__2uJ70",description:"MealItem_description__2YINS",price:"MealItem_price__3sNYl"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__22zUX"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"MealItemForm_form__32qVd"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2ZLCP","meals-appear":"AvailableMeals_meals-appear__ONwLi"}},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),o=n.n(r),s=n(0),l=function(){return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(s.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=o.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),d=n(8),u=n.n(d),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useContext)(m).items,d=o.reduce((function(e,t){return e+t.amount}),0),j="".concat(u.a.button," ").concat(a?u.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(s.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(s.jsx)("span",{className:u.a.icon,children:Object(s.jsx)(l,{})}),Object(s.jsx)("span",{children:"Twoje zam\xf3wienia"}),Object(s.jsx)("span",{className:u.a.badge,children:d})]})},b=n.p+"static/media/meals.d0247323.jpg",p=n(13),O=n.n(p),x=function(e){return Object(s.jsxs)(r.Fragment,{children:[Object(s.jsxs)("header",{className:O.a.header,children:[Object(s.jsx)("h1",{children:"Restauracja 'U Ma\u0107ka'"}),Object(s.jsx)(j,{onClick:e.onShowCart})]}),Object(s.jsx)("div",{className:O.a["main-image"],children:Object(s.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},_=n(15),h=n.n(_),f=function(){return Object(s.jsxs)("section",{className:h.a.summary,children:[Object(s.jsx)("h2",{children:"Pyszne jedzenie, przygotowane specjalnie dla Ciebie!"}),Object(s.jsx)("p",{children:"Wybierz sw\xf3j ulubiony posi\u0142ek z naszego menu przez internet i odbierz go od naszego kuriera bez wychodzenia z domu!"}),Object(s.jsx)("p",{children:"Wszystkie nasze posi\u0142ki s\u0105 przygotowywane przez do\u015bwiadczonych kucharzy i dostarczane do 30 minut od z\u0142o\u017cenia zam\xf3wienia!"})]})},v=n(16),z=n.n(v),C=function(e){return Object(s.jsx)("div",{className:z.a.card,children:e.children})},w=n(2),g=n(17),N=n.n(g),k=o.a.forwardRef((function(e,t){return Object(s.jsxs)("div",{className:N.a.input,children:[Object(s.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(s.jsx)("input",Object(w.a)({ref:t},e.input))]})})),y=n(18),I=n.n(y),A=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useRef)();return Object(s.jsxs)("form",{className:I.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(s.jsx)(k,{ref:o,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(s.jsx)("button",{children:"+ Dodaj"}),!a&&Object(s.jsx)("p",{children:"Prosz\u0119 wprowadzi\u0107 poprawn\u0105 ilo\u015b\u0107 (1-5)."})]})},M=n(10),H=n.n(M),D=function(e){var t=Object(r.useContext)(m),n="".concat(e.price.toFixed(2)," z\u0142");return Object(s.jsxs)("li",{className:H.a.meal,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e.name}),Object(s.jsx)("div",{className:H.a.description,children:e.description}),Object(s.jsx)("div",{className:H.a.price,children:n})]}),Object(s.jsx)("div",{children:Object(s.jsx)(A,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},F=n(19),S=n.n(F),Z=[{id:"m1",name:"Kebab",description:"Zawiera trzy rodzaje sur\xf3wek.",price:16.99},{id:"m2",name:"Pizza",description:"Na grubym cie\u015bcie z sosem czosnkowym lub ketchupem.",price:22.99},{id:"m3",name:"Zapiekanka",description:"Z serem \u017c\xf3\u0142tym i pieczarkami.",price:7.99},{id:"m4",name:"Zestaw dnia",description:"Zupa: og\xf3rkowa lub pieczarkowa. Drugie danie: \u0142azanki lub kotlet schabowy.",price:19.99}],P=function(){var e=Z.map((function(e){return Object(s.jsx)(D,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(s.jsx)("section",{className:S.a.meals,children:Object(s.jsx)(C,{children:Object(s.jsx)("ul",{children:e})})})},B=function(){return Object(s.jsxs)(r.Fragment,{children:[Object(s.jsx)(f,{}),Object(s.jsx)(P,{})]})},E=n(11),R=n.n(E),T=function(e){return Object(s.jsx)("div",{className:R.a.backdrop,onClick:e.onClose})},U=function(e){return Object(s.jsx)("div",{className:R.a.modal,children:Object(s.jsx)("div",{className:R.a.content,children:e.children})})},V=document.getElementById("overlays"),J=function(e){return Object(s.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(s.jsx)(T,{onClose:e.onClose}),V),c.a.createPortal(Object(s.jsx)(U,{children:e.children}),V)]})},L=n(4),Q=n.n(L),W=function(e){var t="".concat(e.price.toFixed(2)," z\u0142");return Object(s.jsxs)("li",{className:Q.a["cart-item"],children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:e.name}),Object(s.jsxs)("div",{className:Q.a.summary,children:[Object(s.jsx)("span",{className:Q.a.price,children:t}),Object(s.jsxs)("span",{className:Q.a.amount,children:["x ",e.amount]})]})]}),Object(s.jsxs)("div",{className:Q.a.actions,children:[Object(s.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(s.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=n(5),X=n.n(K),q=function(e){var t=Object(r.useContext)(m),n="".concat(t.totalAmount.toFixed(2)," z\u0142"),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(w.a)(Object(w.a)({},e),{},{amount:1}))},o=Object(s.jsx)("ul",{className:X.a["cart-items"],children:t.items.map((function(e){return Object(s.jsx)(W,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(s.jsxs)(J,{onClose:e.onClose,children:[o,Object(s.jsxs)("div",{className:X.a.total,children:[Object(s.jsx)("span",{children:"\u0141\u0105cznie"}),Object(s.jsx)("span",{children:n})]}),Object(s.jsxs)("div",{className:X.a.actions,children:[Object(s.jsx)("button",{className:X.a["button--alt"],onClick:e.onClose,children:"Zamknij"}),a&&Object(s.jsx)("button",{className:X.a.button,children:"Zamawiam"})]})]})},G=n(14),Y={items:[],totalAmount:0},$=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(w.a)(Object(w.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(G.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var o,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],m=e.totalAmount-l.price;if(1===l.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(w.a)(Object(w.a)({},l),{},{amount:l.amount-1});(o=Object(G.a)(e.items))[s]=d}return{items:o,totalAmount:m}}return Y},ee=function(e){var t=Object(r.useReducer)($,Y),n=Object(i.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(s.jsx)(m.Provider,{value:o,children:e.children})},te=(n(26),function(){return Object(s.jsx)("footer",{children:Object(s.jsx)("p",{children:"\xa9 M. Grochowski | 2022"})})});var ne=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)(ee,{children:[n&&Object(s.jsx)(q,{onClose:function(){a(!1)}}),Object(s.jsx)(x,{onShowCart:function(){a(!0)}}),Object(s.jsx)("main",{children:Object(s.jsx)(B,{})}),Object(s.jsx)(te,{})]})};c.a.render(Object(s.jsx)(ne,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.11f029a4.chunk.js.map