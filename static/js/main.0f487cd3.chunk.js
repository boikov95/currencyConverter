(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{22:function(e,t,n){e.exports={converter:"Converter_converter__wO0x-",converter_choice:"Converter_converter_choice__I-076",ant_select:"Converter_ant_select__eNszT",ant_select_selection:"Converter_ant_select_selection__ENQ3y",ant_select_selection_text:"Converter_ant_select_selection_text__2wxpO",money:"Converter_money__2qEA4",change:"Converter_change__MwiuK",converter_choice_input:"Converter_converter_choice_input__3Rr2a",required:"Converter_required__3Rbnf",error:"Converter_error__2DG-w",currentMoney:"Converter_currentMoney__1dPIX"}},220:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(25),a=n.n(r),s=n(35),o=(n(129),n(81)),u=n.n(o),i=n(44),l=n(14),d=n(49),p=n(19),m=n(89),j=n.n(m),b=n(113),_=n(63),O=n(114),f=n.n(O).a.create({baseURL:"https://www.cbr-xml-daily.ru/"}),v=function(){return f.get("/daily_json.js").then((function(e){return e.data}))},g=function(e){return{type:"SAVE_CURRENCY",currency:e}},h=function(e,t){return{type:"SAVE_DATE",date:e,timestamp:t}},x={convertedAmounts:[{id:1,name:"USD",description:"\u0414\u043e\u043b\u043b\u0430\u0440 \u0421\u0428\u0410",img:"http://4.bp.blogspot.com/-PSVm0SVC2bE/UeldWXVm55I/AAAAAAAAAJQ/FmSPaoHTbw8/s320/images.jpg"},{id:2,name:"EUR",description:"\u0415\u0432\u0440\u043e",img:"https://www.bosunbobs.com/Images/Models/Full/110.Jpg"},{id:3,name:"JPY",description:"\u042f\u043f\u043e\u043d\u0441\u043a\u0430\u044f \u0438\u0435\u043d\u0430",img:"https://4.bp.blogspot.com/-yQqNs1Ze4uY/VgNg4IkXKFI/AAAAAAAAABw/fK0Jjb89Nd8/s200/Screenshot%2B2015-09-24%2Bat%2B2.32.43%2BPM.png"},{id:4,name:"GBP",description:"\u0424\u0443\u043d\u0442 \u0441\u0442\u0435\u0440\u043b\u0438\u043d\u0433\u043e\u0432",img:"https://media2.autokopen.nl/afbeeldingen/britse-vlag-90490-240.jpg"},{id:5,name:"CHF",description:"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043a\u0438\u0439 \u0444\u0440\u0430\u043d\u043a",img:"https://i2.wp.com/gwam.ch/wp-content/uploads/2017/04/1.jpg?resize=300%2C169&ssl=1"},{id:6,name:"RUB",description:"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c",img:"https://egor.mp-mp.ru/upload/sync/png/2/d/0/2d04a34a6e938d598ad3643428020c20.png"},{id:7,name:"CAD",description:"\u041a\u0430\u043d\u0430\u0434\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440",img:"https://www.cardly.net/images/flags/ca.png"},{id:8,name:"CZK",description:"\u0427\u0435\u0448\u0441\u043a\u0438\u0439 \u043a\u0440\u043e\u043d",img:"https://sun9-79.userapi.com/impf/c841623/v841623600/197e7/_3SnPzJPWLA.jpg?size=130x97&quality=96&sign=b15df84352f03de0628b7da7fd77092a&c_uniq_tag=U8N3mkSfUp2oNyMyq2GqzOqs4blnmZPzPetcYd-pwxc&type=album"},{id:9,name:"PLN",description:"\u041f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u0437\u043b\u043e\u0442\u044b\u0439",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Thuringia.svg/250px-Flag_of_Thuringia.svg.png"},{id:10,name:"SEK",description:"\u0428\u0432\u0435\u0434\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430",img:"https://www.consciencelaws.org/images/flagsweden.jpg"}],currencyData:{},updateDate:"",timeStamp:""},w=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:(n=e.sent).error||n.code||n.explanation||"object"!==typeof n||(t(g(n.Valute)),t(h(n.Date.substring(0,16).replace("T"," "),n.Timestamp.substring(0,16).replace("T"," "))));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_CURRENCY":return Object(_.a)(Object(_.a)({},e),{},{currencyData:t.currency});case"SAVE_DATE":return Object(_.a)(Object(_.a)({},e),{},{updateDate:t.date,timeStamp:t.timestamp});default:return e}},N=n(22),S=n.n(N),D=n(224),A=n(9),C=D.a.Option,E=function(e){var t=e.defaultValue,n=e.value,c=e.updateData,r=e.selectData,a=e.exception,s=e.filter;return Object(A.jsx)(D.a,{className:S.a.ant_select,defaultValue:t,value:n,onChange:c,children:r.filter((function(e){return s?e.name!==a:!s})).map((function(e){return Object(A.jsx)(C,{className:S.a.ant_select_selection,value:e.name,label:e.name,children:Object(A.jsxs)("div",{className:S.a.ant_select_selection_text,children:[Object(A.jsx)("img",{alt:"\u0424\u043b\u0430\u0433",className:S.a.money,src:e.img}),"".concat(e.name," (").concat(e.description,")")]})},e.id)}))})},V=function(e){var t=e.amount,n=e.required,c=e.value,r=e.updateMoney,a=e.updateSelect,s=e.byDefault,o=e.exception,u=e.disabled;return Object(A.jsxs)("div",{className:S.a.converter_choice,children:[Object(A.jsxs)("div",{className:"".concat(S.a.converter_choice_input," ").concat(n?S.a.required:""),children:[Object(A.jsx)("input",{type:"text",className:"".concat(S.a.currentMoney," ").concat(n?S.a.required:""),value:null===c||void 0===c?void 0:c.toString(),disabled:u,onChange:r}),n&&Object(A.jsx)("span",{className:S.a.error,children:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d \u0432\u0432\u043e\u0434 \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0435\u043b\u044b\u0445 \u0447\u0438\u0441\u0435\u043b!"})]}),Object(A.jsx)(E,{defaultValue:s,value:s,updateData:a,selectData:t,exception:o,filter:!0})]})},q=function(e){var t=Object(p.c)((function(e){return e.converted.convertedAmounts})),n=Object(p.c)((function(e){return e.converted.currencyData})),r=Object(p.c)((function(e){return e.converted.updateDate})),a=Object(p.c)((function(e){return e.converted.timeStamp})),o=Object(p.b)(),u=Object(c.useState)((function(){return t[0].name})),i=Object(s.a)(u,2),l=i[0],d=i[1],m=Object(c.useState)((function(){return t[1].name})),j=Object(s.a)(m,2),b=j[0],_=j[1],O=Object(c.useState)(""),f=Object(s.a)(O,2),v=f[0],g=f[1],h=Object(c.useState)(""),x=Object(s.a)(h,2),y=x[0],N=x[1],D=Object(c.useState)(!1),C=Object(s.a)(D,2),E=C[0],q=C[1];return Object(c.useEffect)((function(){(+new Date-+new Date(r))/1e3/60<1440&&(+new Date-+new Date(a))/1e3/60<60&&o(w()),v.length>0?N(Math.round((Boolean(n[l])?n[l].Value/n[l].Nominal:1)*Number(v)/(Boolean(n[b])?n[b].Value/n[b].Nominal:1)*100)/100):N("")}),[n,b,l,v]),Object(A.jsxs)("div",{className:S.a.converter,children:[Object(A.jsx)(V,{amount:t,required:E,updateMoney:function(e){Number.isInteger(+e.target.value)?(q(!1),g(e.target.value)):q(!0)},value:v,updateSelect:function(e){d(e)},byDefault:l,exception:b,disabled:!1}),Object(A.jsx)("img",{className:S.a.change,onClick:function(){d((function(){return b})),_((function(){return l}))},alt:"\u041f\u043e\u043c\u0435\u043d\u044f\u0442\u044c",src:"https://www.pngmart.com/files/7/Exchange-Transparent-Background.png"}),Object(A.jsx)(V,{amount:t,required:!1,value:y,updateMoney:function(e){},updateSelect:function(e){_(e)},byDefault:b,exception:l,disabled:!0})]})},B=n(225),M=n(223),k=n(226),T=n(47),P=n.n(T),I=function(e){var t=e.amount,n=e.currentCurrency,c=Object(p.c)((function(e){return e.converted.currencyData}));return Object(A.jsx)("div",{className:P.a.currentcourses,children:t.filter((function(e){return e.name!==n})).map((function(e){return Object(A.jsxs)("div",{className:P.a.currentcourses__cours,children:[Object(A.jsx)("img",{alt:"\u0424\u043b\u0430\u0433",className:P.a.money,src:e.img}),"".concat(e.name," (").concat(e.description,")"),Object(A.jsx)("span",{className:P.a.currentcourses__cours__rezult,children:Math.round((Boolean(c[n])?c[n].Value/c[n].Nominal:1)/(Boolean(c[e.name])?c[e.name].Value/c[e.name].Nominal:1)*1e4)/1e4})]},e.id)}))})},R=function(){var e=Object(p.c)((function(e){return e.converted.convertedAmounts})),t=Object(p.c)((function(e){return e.converted.updateDate})),n=Object(p.c)((function(e){return e.converted.timeStamp})),r=Object(p.b)(),a=Object(c.useState)((function(){return e[0].name})),o=Object(s.a)(a,2),u=o[0],i=o[1];return Object(c.useEffect)((function(){(+new Date-+new Date(t))/1e3/60<1440&&(+new Date-+new Date(n))/1e3/60<60&&r(w())}),[u]),Object(A.jsxs)("div",{className:P.a.course,children:[Object(A.jsx)("div",{children:Object(A.jsx)(E,{defaultValue:u,value:u,updateData:function(e){i(e)},selectData:e,filter:!1})}),Object(A.jsx)(I,{amount:e,currentCurrency:u})]})},U=B.a.SubMenu,z=M.a.Sider,K=Object(d.c)(l.e)((function(e){var t=Object(c.useState)(!0),n=Object(s.a)(t,2),r=n[0],a=n[1],o=Object(p.b)();return Object(c.useEffect)((function(){o(w())}),[]),Object(A.jsx)(i.b,{children:Object(A.jsxs)("div",{className:u.a.wrapper,children:[Object(A.jsx)("div",{className:u.a.menu,children:Object(A.jsx)(z,{collapsible:!0,collapsed:r,onCollapse:function(){return a((function(e){return!e}))},className:"site-layout-background",width:300,children:Object(A.jsx)(B.a,{theme:"dark",mode:"inline",defaultOpenKeys:["sub1"],defaultSelectedKeys:["1"],style:{height:20},children:Object(A.jsxs)(U,{icon:Object(A.jsx)(k.a,{}),title:"\u0424\u0438\u043d\u0430\u043d\u0441\u044b",children:[Object(A.jsx)(B.a.Item,{children:Object(A.jsx)(i.c,{to:"/converter",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044f \u0432\u0430\u043b\u044e\u0442\u044b"})},"1"),Object(A.jsx)(B.a.Item,{children:Object(A.jsx)(i.c,{to:"/course",children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442\u044b"})},"2")]},"sub1")})})}),Object(A.jsxs)("div",{className:u.a.content,children:[Object(A.jsx)(l.a,{path:"/converter",render:function(){return Object(A.jsx)(q,{})}}),Object(A.jsx)(l.a,{path:"/course",render:function(){return Object(A.jsx)(R,{})}})]})]})})})),F=n(121),J=Object(d.b)({converted:y}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c,X=Object(d.d)(J,Y(Object(d.a)(F.a)));a.a.render(Object(A.jsx)(i.a,{children:Object(A.jsx)(p.a,{store:X,children:Object(A.jsx)(K,{state:X.getState()})})}),document.getElementById("root"))},47:function(e,t,n){e.exports={course:"Course_course__1Q_no",currentcourses:"Course_currentcourses__d0yks",currentcourses__cours:"Course_currentcourses__cours__1FTyV",currentcourses__cours__rezult:"Course_currentcourses__cours__rezult__3W9gB",money:"Course_money__EbYpw"}},81:function(e,t,n){e.exports={wrapper:"App_wrapper__3VplE",content:"App_content__3hrKm"}}},[[220,1,2]]]);
//# sourceMappingURL=main.0f487cd3.chunk.js.map