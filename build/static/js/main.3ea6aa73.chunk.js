(this.webpackJsonpuptime_app=this.webpackJsonpuptime_app||[]).push([[0],{100:function(e,a,t){},102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(25),l=t.n(c),o=t(67),s=t(15),i=t(68),m=t(8),u=t(39),d=t.n(u),C="https://europe-west2-mpx-tools-internal.cloudfunctions.net/frontend-mock-api/clients/",p={users:null,user:null,error:"",loadingUsers:"",loadingUser:""},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_USERS_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{loadingUsers:!0});case"FETCH_USER_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{loadingUser:!0});case"FETCH_USERS_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{loadingUsers:!1,users:a.payload,user:null});case"FETCH_USER_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{loadingUser:!1,users:e.users,user:a.payload});case"FETCH_USERS_FAILURE":return Object(m.a)(Object(m.a)({},e),{},{loadingUsers:!1,error:a.payload});case"FETCH_USER_FAILURE":return Object(m.a)(Object(m.a)({},e),{},{loadingUser:!1,error:a.payload});default:return e}},L=Object(s.createStore)(E,Object(i.composeWithDevTools)(Object(s.applyMiddleware)(o.a))),g=t(4),f=t(12),v=t(2),_=(t(98),function(e,a){return a?null===e||void 0===e?void 0:e.sort((function(e,a){return new Date(e.date)-new Date(a.date)})):null===e||void 0===e?void 0:e.sort((function(e,a){return new Date(a.date)-new Date(e.date)}))}),h=function(e,a){return null===e||void 0===e?void 0:e.reduce((function(e,t){return e+t[a]}),0)},b=31,S=15,N=8,y=function(e,a,t){var n=new Date,r=new Date(n.setDate(n.getDate()-e)).toISOString(),c=(new Date).toISOString(),l=t.filter((function(e){return e.date>=r&&e.date<=c}));a(_(l))},w=function(e){return new Date(e).toLocaleDateString()},U=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},j=function(e){return e.loadingUsers||e.loadingUser},O=function(e){return e.error},T=function(e){return e.users},R=function(e){var a;return _(null===(a=e.user)||void 0===a?void 0:a.data)},x=function(e){var a;return null===(a=e.user)||void 0===a?void 0:a.logo},F=function(e){var a;return null===(a=e.user)||void 0===a?void 0:a.name},M=(t(99),t(100),{logo:r.a.createElement("svg",{width:"94px",height:"19px",viewBox:"0 0 94 19"},r.a.createElement("g",{id:"Apple-TV-Copy",transform:"translate(-627.000000, -23.000000)",fill:"#FFFFFF",fillRule:"nonzero"},r.a.createElement("g",{id:"Group-4",transform:"translate(555.000000, 0.000000)"},r.a.createElement("path",{d:"M77.675,23.3 L77.675,33.275 C77.675,34.0916707 77.8541649,34.7374976 78.2125,35.2125 C78.5708351,35.6875024 79.15,35.925 79.95,35.925 C80.750004,35.925 81.3416648,35.6875024 81.725,35.2125 C82.1083352,34.7374976 82.3,34.0916707 82.3,33.275 L82.3,23.3 L87.825,23.3 L87.825,33.275 C87.825,34.9583418 87.4750035,36.3958274 86.775,37.5875 C86.0749965,38.7791726 85.1166727,39.674997 83.9,40.275 C82.6833273,40.875003 81.3250075,41.175 79.825,41.175 C78.3249925,41.175 76.9958391,40.875003 75.8375,40.275 C74.6791609,39.674997 73.7750032,38.7833392 73.125,37.6 C72.4749968,36.4166607 72.15,34.9750085 72.15,33.275 L72.15,23.3 L77.675,23.3 Z M104.7,29.375 C104.7,30.4916722 104.441669,31.5041621 103.925,32.4125 C103.408331,33.3208379 102.645838,34.041664 101.6375,34.575 C100.629162,35.108336 99.4083405,35.375 97.975,35.375 L95.775,35.375 L95.775,41 L90.225,41 L90.225,23.3 L97.975,23.3 C100.141678,23.3 101.804161,23.8499945 102.9625,24.95 C104.120839,26.0500055 104.7,27.5249908 104.7,29.375 Z M97.35,31 C98.5000057,31 99.075,30.4583387 99.075,29.375 C99.075,28.2916613 98.5000057,27.75 97.35,27.75 L95.775,27.75 L95.775,31 L97.35,31 Z M120.35,23.3 L120.35,27.7 L115.65,27.7 L115.65,41 L110.1,41 L110.1,27.7 L105.45,27.7 L105.45,23.3 L120.35,23.3 Z M127.4,23.3 L127.4,41 L121.85,41 L121.85,23.3 L127.4,23.3 Z M151.175,23.3 L151.175,41 L145.65,41 L145.65,32.175 L142.925,41 L138.175,41 L135.45,32.175 L135.45,41 L129.9,41 L129.9,23.3 L136.7,23.3 L140.6,33.925 L144.4,23.3 L151.175,23.3 Z M159.225,27.725 L159.225,29.9 L164.725,29.9 L164.725,34.075 L159.225,34.075 L159.225,36.575 L165.475,36.575 L165.475,41 L153.675,41 L153.675,23.3 L165.475,23.3 L165.475,27.725 L159.225,27.725 Z",id:"UPTIME"})))),arrow:r.a.createElement("svg",{width:"22px",height:"12px",viewBox:"0 0 22 12"},r.a.createElement("g",{id:"Page-1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Apple-TV",transform:"translate(-1295.000000, -243.000000)",fill:"#FFFFFF",fillRule:"nonzero"},r.a.createElement("g",{id:"Group-2",transform:"translate(555.000000, 210.000000)"},r.a.createElement("g",{id:"Group-2-Copy-11",transform:"translate(705.000000, 16.000000)"},r.a.createElement("path",{d:"M50.2064917,20.9357873 L35.581249,20.9357873 C35.2602543,20.9357873 35,21.1931206 35,21.5105127 L35,24.1925644 C35,24.5099565 35.2602543,24.7672898 35.581249,24.7672898 L50.2064917,24.7672898 L50.2064917,26.9732295 C50.2064917,27.9972944 51.4586474,28.510141 52.1910212,27.7860349 L56.3594971,23.6643439 C56.813501,23.2154355 56.813501,22.4876416 56.3594971,22.0387811 L52.1910212,17.9170901 C51.4586959,17.192984 50.2064917,17.7058306 50.2064917,18.7298955 L50.2064917,20.9357873 Z",id:"Path"})))))),arrowBack:r.a.createElement("svg",{width:"17px",height:"17px",viewBox:"0 0 17 17"},r.a.createElement("g",{className:"arrowBack",transform:"translate(-555.000000, -110.000000)",fill:"#393939",fillRule:"nonzero"},r.a.createElement("g",{id:"down-arrow",transform:"translate(563.500000, 118.500000) rotate(90.000000) translate(-563.500000, -118.500000) translate(555.000000, 110.000000)"},r.a.createElement("path",{d:"M17,8.5 C17,3.8132137 13.1867863,0 8.5,0 C3.8132137,0 0,3.8132137 0,8.5 C0,13.1867863 3.8132137,17 8.5,17 C13.1867863,17 17,13.1867863 17,8.5 Z M0.849306688,8.5 C0.849306688,4.28119902 4.28119902,0.849306688 8.5,0.849306688 C12.718801,0.849306688 16.1506933,4.28119902 16.1506933,8.5 C16.1506933,12.718801 12.718801,16.1506933 8.5,16.1506933 C4.28119902,16.1506933 0.849306688,12.718801 0.849306688,8.5 Z",id:"Shape"}),r.a.createElement("path",{d:"M9.32142857,11.8821053 L11.8669951,9.56126316 C12.044335,9.39957895 12.044335,9.14021053 11.8669951,8.97852632 C11.6896552,8.81684211 11.4051724,8.81684211 11.2278325,8.97852632 L9.4544335,10.5953684 L9.4544335,4.41431579 C9.4544335,4.18526316 9.25123153,4 9,4 C8.74876847,4 8.5455665,4.18526316 8.5455665,4.41431579 L8.5455665,10.592 L6.77216749,8.97515789 C6.59482759,8.81347368 6.31034483,8.81347368 6.13300493,8.97515789 C5.95566502,9.13684211 5.95566502,9.39621053 6.13300493,9.55789474 L8.67857143,11.8787368 C8.76724138,11.9595789 8.8817734,12 9,12 C9.1182266,12 9.23275862,11.9629474 9.32142857,11.8821053 Z",id:"Path"})))),calendar:r.a.createElement("svg",{width:"21px",height:"19px",viewBox:"0 0 21 19"},r.a.createElement("g",{id:"Apple-TV-Copy",transform:"translate(-1063.000000, -295.000000)",fill:"#4BC0C0",fillRule:"nonzero"},r.a.createElement("g",{id:"Group",transform:"translate(556.000000, 295.000000)"},r.a.createElement("g",{id:"002-calendar",transform:"translate(507.000000, 0.000000)"},r.a.createElement("path",{d:"M18.8228298,1.61111111 L17.5045206,1.61111111 L17.5045206,0.555555556 C17.5045206,0.25 17.2583633,0 16.9575043,0 C16.6566454,0 16.4104881,0.25 16.4104881,0.555555556 L16.4104881,1.61111111 L11.0497286,1.61111111 L11.0497286,0.555555556 C11.0497286,0.25 10.8035713,0 10.5027124,0 C10.2018534,0 9.9556961,0.25 9.9556961,0.555555556 L9.9556961,1.61111111 L4.54023503,1.61111111 L4.54023503,0.555555556 C4.54023503,0.25 4.29407771,0 3.99321876,0 C3.69235982,0 3.4462025,0.25 3.4462025,0.555555556 L3.4462025,1.61111111 L2.18259491,1.61111111 C0.979159122,1.61111111 0,2.63888889 0,3.86111111 L0,16.7777778 C0,18.0055556 0.973688959,19 2.18259491,19 L18.8173597,19 C20.0262656,19 20.9999774,18.0055556 20.9999774,16.7833333 L20.9999774,3.86111111 C21.0054247,2.63888889 20.0262656,1.61111111 18.8228298,1.61111111 Z M5.22400537,15.0555556 L4.2667269,15.0555556 C3.96586795,15.0555556 3.71971063,14.8055556 3.71971063,14.5 C3.71971063,14.1944444 3.96586795,13.9444444 4.2667269,13.9444444 L5.22947553,13.9444444 C5.53033448,13.9444444 5.77102164,14.1944444 5.77102164,14.5 C5.77102164,14.8055556 5.52486432,15.0555556 5.22400537,15.0555556 Z M5.22400537,11.2777778 L4.2667269,11.2777778 C3.96586795,11.2777778 3.71971063,11.0277778 3.71971063,10.7222222 C3.71971063,10.4166667 3.96586795,10.1666667 4.2667269,10.1666667 L5.22947553,10.1666667 C5.53033448,10.1666667 5.77102164,10.4166667 5.77102164,10.7222222 C5.77102164,11.0277778 5.52486432,11.2777778 5.22400537,11.2777778 Z M9.06405958,15.0555556 L8.10678111,15.0555556 C7.80592216,15.0555556 7.55976484,14.8055556 7.55976484,14.5 C7.55976484,14.1944444 7.80592216,13.9444444 8.10678111,13.9444444 L9.06405958,13.9444444 C9.36491853,13.9444444 9.61107585,14.1944444 9.61107585,14.5 C9.61107585,14.8055556 9.36491853,15.0555556 9.06405958,15.0555556 Z M9.06405958,11.2777778 L8.10678111,11.2777778 C7.80592216,11.2777778 7.55976484,11.0277778 7.55976484,10.7222222 C7.55976484,10.4166667 7.80592216,10.1666667 8.10678111,10.1666667 L9.06405958,10.1666667 C9.36491853,10.1666667 9.61107585,10.4166667 9.61107585,10.7222222 C9.61107585,11.0277778 9.36491853,11.2777778 9.06405958,11.2777778 Z M9.06405958,7.44444444 L8.10678111,7.44444444 C7.80592216,7.44444444 7.55976484,7.19444444 7.55976484,6.88888889 C7.55976484,6.58333333 7.80592216,6.33333333 8.10678111,6.33333333 L9.06405958,6.33333333 C9.36491853,6.33333333 9.61107585,6.58333333 9.61107585,6.88888889 C9.61107585,7.19444444 9.36491853,7.44444444 9.06405958,7.44444444 Z M12.8712928,15.0555556 L11.9140143,15.0555556 C11.6131554,15.0555556 11.3669981,14.8055556 11.3669981,14.5 C11.3669981,14.1944444 11.6131554,13.9444444 11.9140143,13.9444444 L12.8712928,13.9444444 C13.1776219,13.9444444 13.4183091,14.1944444 13.4183091,14.5 C13.4183091,14.8055556 13.1721518,15.0555556 12.8712928,15.0555556 Z M12.8712928,11.2777778 L11.9140143,11.2777778 C11.6131554,11.2777778 11.3669981,11.0277778 11.3669981,10.7222222 C11.3669981,10.4166667 11.6131554,10.1666667 11.9140143,10.1666667 L12.8712928,10.1666667 C13.1776219,10.1666667 13.4183091,10.4166667 13.4183091,10.7222222 C13.4183091,11.0277778 13.1721518,11.2777778 12.8712928,11.2777778 Z M12.8712928,7.44444444 L11.9140143,7.44444444 C11.6131554,7.44444444 11.3669981,7.19444444 11.3669981,6.88888889 C11.3669981,6.58333333 11.6131554,6.33333333 11.9140143,6.33333333 L12.8712928,6.33333333 C13.1776219,6.33333333 13.4183091,6.58333333 13.4183091,6.88888889 C13.4183091,7.19444444 13.1721518,7.44444444 12.8712928,7.44444444 Z M16.711347,11.2777778 L15.7540686,11.2777778 C15.4532096,11.2777778 15.2070523,11.0277778 15.2070523,10.7222222 C15.2070523,10.4166667 15.4532096,10.1666667 15.7540686,10.1666667 L16.711347,10.1666667 C17.012206,10.1666667 17.2583633,10.4166667 17.2583633,10.7222222 C17.2583633,11.0277778 17.012206,11.2777778 16.711347,11.2777778 Z M16.711347,7.44444444 L15.7540686,7.44444444 C15.4532096,7.44444444 15.2070523,7.19444444 15.2070523,6.88888889 C15.2070523,6.58333333 15.4532096,6.33333333 15.7540686,6.33333333 L16.711347,6.33333333 C17.012206,6.33333333 17.2583633,6.58333333 17.2583633,6.88888889 C17.2583633,7.19444444 17.012206,7.44444444 16.711347,7.44444444 Z",id:"Shape"}))))),diagram:r.a.createElement("svg",{width:"25px",height:"19px",viewBox:"0 0 25 19"},r.a.createElement("g",{id:"Apple-TV-Copy",transform:"translate(-556.000000, -295.000000)",fill:"#4BC0C0",fillRule:"nonzero"},r.a.createElement("g",{id:"Group",transform:"translate(556.000000, 295.000000)"},r.a.createElement("g",{id:"001-market-fluctuation"},r.a.createElement("path",{d:"M7,5.36363636 L7,16 L1,16 L1,5.36363636 C1,4.61090909 1.56,4 2.25,4 L5.75,4 C6.44,4 7,4.61090909 7,5.36363636 Z",id:"Path"}),r.a.createElement("path",{d:"M16,1.33333333 L16,16 L10,16 L10,1.33333333 C10,0.597333333 10.56,0 11.25,0 L14.75,0 C15.44,0 16,0.597333333 16,1.33333333 Z",id:"Path"}),r.a.createElement("path",{d:"M24,9.25 L24,16 L18,16 L18,9.25 C18,8.56 18.56,8 19.25,8 L22.75,8 C23.44,8 24,8.56 24,9.25 Z",id:"Path"}),r.a.createElement("path",{d:"M24.21875,19 L0.78125,19 C0.35,19 0,18.552 0,18 C0,17.448 0.35,17 0.78125,17 L24.21875,17 C24.65,17 25,17.448 25,18 C25,18.552 24.65,19 24.21875,19 Z",id:"Path"})))))}),P=function(e){var a=e.name;return r.a.createElement("span",{className:"icon"},M[a])},Z=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header__logo"},r.a.createElement(f.b,{to:"/uptime"},r.a.createElement(P,{name:"logo"})))))},k=(t(102),function(e){var a=e.id,t=e.name,n=e.logo;return r.a.createElement("div",{key:a,className:"companyCard"},r.a.createElement("div",{className:"companyCard__box"},r.a.createElement("img",{src:n,alt:"Logo company: ".concat(t),className:"companyCard__logo"}),r.a.createElement("p",{className:"companyCard__name"},t)),r.a.createElement(f.b,{to:"/uptime/".concat(a),className:"companyCard__button"},r.a.createElement(P,{name:"arrow"})))}),B=(t(103),t(70)),D=t.n(B),H=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("img",{className:"loader__gif",src:D.a,alt:"Uptime preloader"}))},A=t(72),I=(t(104),t(71)),z=function(e){var a,t,n=e.userData,c={labels:null===(a=_(n,!0))||void 0===a||null===(t=a.map((function(e){return w(e.date)})))||void 0===t?void 0:t.flat(1),datasets:[{label:"Cost",data:null===n||void 0===n?void 0:n.map((function(e){return e.cost})),backgroundColor:["transparent"],borderColor:["#4bc0c0"],borderWidth:2,pointBackgroundColor:"#4bc0c0"}]};return r.a.createElement(I.Line,{data:c,options:{legend:{display:!1},scales:{yAxes:[{ticks:{fontSize:10,min:0,max:3e3}}],xAxes:[{ticks:{fontSize:9}}]}}})},G=(t(199),function(e){var a=e.highlightedTop,t=e.highlightedBottom,n=e.date,c=void 0===n?"Date":n,l=e.impressions,o=void 0===l?"Impressions":l,s=e.clicks,i=void 0===s?"Clicks":s,m=e.conversions,u=void 0===m?"Conversion":m,d=e.cost,C=void 0===d?"Costs":d;return r.a.createElement("div",{className:["singleTableRow",a&&"highlightedTop",t&&"highlightedBottom"].join(" ")},a||t?r.a.createElement("p",{className:"singleTableRow__cell"},c):r.a.createElement("p",{className:"singleTableRow__cell"},w(c)),r.a.createElement("p",{className:"singleTableRow__cell"},U(o)),r.a.createElement("p",{className:"singleTableRow__cell"},U(i)),r.a.createElement("p",{className:"singleTableRow__cell"},U(u)),r.a.createElement("p",{className:"singleTableRow__cell"},U(C)))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g.a,{store:L},r.a.createElement(f.a,null,r.a.createElement(v.a,{exact:!0,path:"/",component:function(){var e=Object(g.c)(j),a=Object(g.c)(O),t=Object(g.c)(T),c=Object(g.b)();return Object(n.useEffect)((function(){c((function(e){e({type:"FETCH_USERS_REQUEST"}),d.a.get(C).then((function(a){var t=a.data;e(function(e){return{type:"FETCH_USERS_SUCCESS",payload:e}}(t))})).catch((function(a){var t=a.message;e(function(e){return{type:"FETCH_USERS_FAILURE",payload:e}}(t))}))}))}),[c]),r.a.createElement("div",{className:"homePage"},e&&r.a.createElement(H,null),r.a.createElement(Z,null),r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"homePage__title"},"List of your clients"),a&&r.a.createElement("p",{className:"error"},"Data not found..."),r.a.createElement("div",{className:"homePage__wrapper"},null===t||void 0===t?void 0:t.map((function(e,a){return r.a.createElement(k,{key:a,id:e.id,name:e.name,logo:e.logo})})))))}}),r.a.createElement(v.a,{exact:!0,path:"/:id",component:function(){var e=Object(v.e)(),a=Object(g.b)(),t=Object(g.c)(R),c=Object(g.c)(j),l=Object(g.c)(O),o=Object(g.c)(x),s=Object(g.c)(F),i=Object(n.useState)([]),m=Object(A.a)(i,2),u=m[0],p=m[1];return Object(n.useEffect)((function(){return a((t=e.id,function(e){e({type:"FETCH_USER_REQUEST"}),d.a.get("".concat(C).concat(t)).then((function(a){var t=a.data;e(function(e){return{type:"FETCH_USER_SUCCESS",payload:e}}(t))})).catch((function(a){var t=a.message;e(function(e){return{type:"FETCH_USER_FAILURE",payload:e}}(t))}))}));var t}),[a,e.id]),Object(n.useEffect)((function(){return p(t)}),[p,t]),r.a.createElement("div",{className:"userPage"},c&&r.a.createElement(H,null),r.a.createElement(Z,null),r.a.createElement("div",{className:"container"},r.a.createElement(f.b,{className:"userPage__backButton",to:"/uptime"},r.a.createElement(P,{name:"arrowBack"}),"go back"),l?r.a.createElement("p",{className:"error"},"Data not found..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"userPage__companyBox"},r.a.createElement("img",{className:"userPage__companyBox-logo",src:o,alt:"Logo company ".concat(s)}),r.a.createElement("p",{className:"userPage__companyBox-title"},s)),r.a.createElement("div",{className:"userPage__scope"},r.a.createElement("div",{className:"userPage__scope-box"},r.a.createElement(P,{name:"diagram"}),r.a.createElement("p",{className:"userPage__scope-title"},"Show:"),r.a.createElement("button",{className:"userPage__scope-button filtered"},"Cost")),r.a.createElement("div",{className:"userPage__scope-box"},r.a.createElement(P,{name:"calendar"}),r.a.createElement("p",{className:"userPage__scope-title"},"Scope:"),r.a.createElement("button",{className:["userPage__scope-button",7===(null===u||void 0===u?void 0:u.length)&&"filtered"].join(" "),onClick:function(){return y(N,p,t)}},"7 days"),r.a.createElement("button",{className:["userPage__scope-button",14===(null===u||void 0===u?void 0:u.length)&&"filtered"].join(" "),onClick:function(){return y(S,p,t)}},"14 days"),r.a.createElement("button",{className:["userPage__scope-button",30===(null===u||void 0===u?void 0:u.length)&&"filtered"].join(" "),onClick:function(){return y(b,p,t)}},"30 days"))),r.a.createElement("div",{className:"userPage__chart"},r.a.createElement(z,{userData:u})),r.a.createElement("div",{className:"userPage__table"},r.a.createElement(G,{highlightedTop:!0}),null===u||void 0===u?void 0:u.map((function(e,a){var t=e.date,n=e.impressions,c=e.clicks,l=e.cost,o=e.conversions;return r.a.createElement(G,{key:a,date:t,impressions:n,clicks:c,cost:l,conversions:o})})),r.a.createElement(G,{highlightedBottom:!0,date:"TOTAL",impressions:h(u,"impressions"),clicks:h(u,"clicks"),cost:h(u,"cost"),conversions:h(u,"conversions")})))))}})))),document.getElementById("root"))},70:function(e,a,t){e.exports=t.p+"static/media/preloader.cf804e29.gif"},73:function(e,a,t){e.exports=t(200)},98:function(e,a,t){},99:function(e,a,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.3ea6aa73.chunk.js.map