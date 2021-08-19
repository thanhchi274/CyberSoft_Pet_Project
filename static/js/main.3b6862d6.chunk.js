(this["webpackJsonpexcel-to-sql"]=this["webpackJsonpexcel-to-sql"]||[]).push([[0],{108:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),i=n.n(r),s=(n(108),n(109),n(177)),l=n(179),o=n(138),d=n(180),j=n(89),u=n.n(j),b=n(42),h=n(174),p=n(13),O=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(b.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(b.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(p.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.a)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(b.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),x=n(3);function m(){var e=O();return Object(x.jsx)("div",{className:e.root,children:Object(x.jsx)(s.a,{position:"static",children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(o.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(x.jsx)(u.a,{})}),Object(x.jsx)(d.a,{className:e.title,variant:"h6",noWrap:!0,children:"SheetToSQL"})]})})})}var g=n(189),f=n(31),v=n(4),N=n(191),T=n(181),S=n(182),D=n(72),k=n.n(D),w=n(183),_=n(28),y=n(91),C=n.n(y),E=n(90),L=n(24),A=Object(h.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:700,wordBreak:"break-all"},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},icon:{verticalAlign:"bottom",height:20,width:20},details:{alignItems:"center"},column:{flexBasis:"25%",wordBreak:"break-all"},columnSQLHeading:{flexBasis:"5%"},columnSQL:{flexBasis:"95%"},helper:{borderLeft:"2px solid ".concat(e.palette.divider),padding:e.spacing(1,2),height:"100%"},code:{},link:{color:e.palette.primary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},pre:{whiteSpace:"pre-wrap",wordBreak:"break-all","& code":{fontSize:"12px"}}}}));var I=Object(_.b)((function(e){return{sheetData:e.reducer.sheetData,option:e.reducer.option}}),null)((function(e){var t=e.sheetData,n=e.option,c=A(),r=Object(a.useRef)(null),i=Object(a.useState)([]),s=Object(f.a)(i,2),l=s[0],j=s[1];function u(){var e="";switch(n){case"single_choice":e="4";break;case"multiple_choice":e="5";break;case"fill_inblank_input":e="3";break;case"fill_inblank_html_css":e="2";break;case"fill_inblank_code":e="1"}return e}function b(){return function(e){return JSON.stringify(e).split('"').join("'").split(/[\{\[]/).join("(").split(/[\}\]]/).join(")").replaceAll("&lsqb;&quest;&rsqb;","\u2665").replaceAll(/\:'|\:\s'|\s\:'|\s\:\s'/g,":'").replaceAll("\\'",'"').replace(/'N'/g,"N'").replaceAll("?''","?'").replaceAll("='",'="').replace(/\\n|\\r/g,"").slice(0,-1).slice(1)}(function(){var e=E.DateTime.now().toFormat("yyyy-LL-dd HH:mm:ss"),t=[],n=u();return l.values.map((function(a,c){var r=["N'"+"".concat(a[1]),a[2],"1"===n?"":a[3],"1"===n?a[3]:a[4],n,"",a[8],"","",e];return c>0&&""!==a[1]?t.push(r):null})),t}())}return Object(a.useEffect)((function(){j(t)}),[t]),l.values.length>0?Object(x.jsxs)("div",{className:c.root,children:[Object(x.jsxs)(T.a,{className:c.details,children:[Object(x.jsx)("div",{className:c.columnSQLHeading,children:Object(x.jsx)(o.a,{"aria-label":"delete",onClick:function(e){var t=b();navigator.clipboard.writeText("INSERT INTO tblBaiTap (TieuDe,NoiDung,NoiDungCSS,OUTPUT,LoaiBaiTap,NgonNgu,CapDo,GhiChu,DaXoa,NgayTao) VALUES"+t),L.toast.success("Copied Table ".concat(u(),"!"))},children:Object(x.jsx)(C.a,{})})}),Object(x.jsx)("div",{className:Object(v.default)(c.columnSQL,c.helper),children:Object(x.jsxs)(N.a,{children:[Object(x.jsx)(S.a,{expandIcon:Object(x.jsx)(k.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(x.jsx)(d.a,{className:c.heading,children:"Result"})}),Object(x.jsxs)(T.a,{children:[Object(x.jsx)("pre",{className:c.pre,children:Object(x.jsxs)("code",{ref:r,children:["INSERT INTO tblBaiTap( TieuDe, NoiDung, NoiDungCSS, OUTPUT, LoaiBaiTap, NgonNgu, CapDo, GhiChu, DaXoa, NgayTao ) VALUES ",b()]})}),Object(x.jsx)("br",{})]})]})})]}),Object(x.jsxs)(N.a,{defaultExpanded:!0,children:[Object(x.jsxs)(S.a,{expandIcon:Object(x.jsx)(k.a,{}),"aria-controls":"panel1c-content",id:"panel1c-header",children:[Object(x.jsx)("div",{className:c.column,children:Object(x.jsx)(d.a,{className:c.heading,children:"Ti\xeau \u0110\u1ec1"})}),Object(x.jsx)("div",{className:c.column,children:Object(x.jsx)(d.a,{className:c.heading,children:"N\u1ed9i Dung"})}),Object(x.jsx)("div",{className:c.column,children:Object(x.jsx)(d.a,{className:c.heading,children:"OUTPUT"})}),Object(x.jsx)("div",{className:c.column,children:Object(x.jsx)(d.a,{className:c.heading,children:"DS C\xe2u tr\u1ea3 l\u1eddi"})})]}),l.values.map((function(e,t){return t>0?Object(x.jsxs)(T.a,{className:c.details,children:[Object(x.jsx)("div",{className:c.column,children:Object(x.jsx)(d.a,{className:c.heading,children:e[0]+". "+e[1]})}),Object(x.jsxs)("div",{className:c.column,children:[Object(x.jsx)("b",{children:"N\u1ed9i Dung (HTML): "}),Object(x.jsx)("pre",{className:c.pre,children:Object(x.jsx)("code",{dangerouslySetInnerHTML:{__html:e[2].replaceAll("&lsqb;&quest;&rsqb;","\u2665")}})}),Object(x.jsx)("b",{children:"N\u1ed9i Dung CSS: "}),Object(x.jsx)("br",{}),l.values[0][3].toLocaleLowerCase().includes("input_css")||"input_CSS"===l.values[0][3]?Object(x.jsx)("pre",{className:c.pre,children:Object(x.jsx)("code",{dangerouslySetInnerHTML:{__html:e[3].replaceAll("&lsqb;&quest;&rsqb;","\u2665")}})}):null]}),Object(x.jsx)("div",{className:Object(v.default)(c.column,c.helper),children:Object(x.jsx)("pre",{className:c.pre,children:Object(x.jsx)("code",{className:c.code,children:""===e[4]?e[3]:e[4]})})}),Object(x.jsxs)("div",{className:Object(v.default)(c.column,c.helper),children:[Object(x.jsx)(d.a,{variant:"caption",children:e[5]?JSON.parse(e[5]).map((function(e,t){return Object(x.jsx)("pre",{className:c.pre,children:Object(x.jsxs)("code",{children:[Object(x.jsxs)("b",{children:[e.ma,":"]})," ",e.noiDung,Object(x.jsx)("br",{})]})},t)})):null}),Object(x.jsxs)(d.a,{children:[Object(x.jsx)("b",{children:"\u0110\xe1p \xe1n:"}),e[6]?JSON.parse(e[6]).map((function(e,t){return 0===t?Object(x.jsxs)("code",{children:[" ",e," "]},t):Object(x.jsxs)("code",{children:[" v\xe0 ",e]},t)})):null]}),Object(x.jsxs)(d.a,{children:[Object(x.jsx)("b",{children:"\u0110\u1ed9 Kh\xf3:"})," ",e[8]]})]})]},t):null})),Object(x.jsx)(w.a,{})]})]}):null})),B=n(192),R=n(187),H=n(92),q=n.n(H),G=n(188),P=n(193),U=n(194),F=n(184),z=n(190),J=n(49),M=n.n(J),Q=n(73),X="GET_SHEETS",V="GET_SHEETS_DETAIL",W=n(74),Z=n.n(W),K=Object(h.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));var Y=Object(_.b)((function(e){return{data:e.reducer.data}}),(function(e){return{getDetailData:function(t){e(function(e){var t=e.id,n=e.option;return function(e){Z()({method:"GET",url:"https://googlesheetapi274.herokuapp.com/sheets?id=".concat(t,"&sheets=").concat(n)}).then(function(){var t=Object(Q.a)(M.a.mark((function t(a){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,V;case 3:return t.t1=t.sent,t.next=6,a.data;case 6:t.t2=t.sent,t.t3=n,t.t4={type:t.t1,sheetData:t.t2,option:t.t3},(0,t.t0)(t.t4);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return L.toast.error("Have Error! Please Check Again"),e}))}}(t))}}}))((function(e){var t=e.data,n=e.id,r=e.getDetailData,i=K(),s=c.a.useState([]),l=Object(f.a)(s,2),o=l[0],d=l[1],j=Object(a.useState)(""),u=Object(f.a)(j,2),b=u[0],h=u[1];return Object(a.useEffect)((function(){d(t)}),[t]),Object(x.jsx)("div",{children:Object(x.jsxs)(F.a,{className:i.formControl,children:[Object(x.jsx)(P.a,{id:"demo-simple-select-label",children:"Ch\u1ecdn B\u1ea3ng"}),Object(x.jsx)(z.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:b,onChange:function(e){h(e.target.value);var t=e.target.value;r({id:n,option:t})},children:o.length>0?o.map((function(e,t){return Object(x.jsx)(U.a,{value:e.properties.title,children:e.properties.title},t)})):Object(x.jsx)(U.a,{value:0,children:"Nh\u1eadp Link \u0111\u1ec3 ch\u1ecdn b\u1ea3ng"})})]})})})),$=Object(h.a)((function(e){return{margin:{margin:e.spacing(1)},grid:{justifyContent:"center","& .MuiInput-root":{width:"800px"}}}}));var ee=Object(_.b)(null,(function(e){return{getData:function(t){var n;e((n=t,function(e){Z()({method:"GET",url:"https://googlesheetapi274.herokuapp.com/?id=".concat(n,"&sheets=fill_inblank_html_css")}).then(function(){var t=Object(Q.a)(M.a.mark((function t(n){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,X;case 3:return t.t1=t.sent,t.next=6,n.data;case 6:t.t2=t.sent,t.t3={type:t.t1,data:t.t2},(0,t.t0)(t.t3),L.toast.success("Get Success");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){return L.toast.error("Have Error! Please Check Again"),e}))}))}}}))((function(e){var t=e.getData,n=$(),c=Object(a.useState)(""),r=Object(f.a)(c,2),i=r[0],s=r[1],l=Object(a.useState)(""),o=Object(f.a)(l,2),d=o[0],j=o[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:n.margin,children:Object(x.jsxs)(R.a,{className:n.grid,container:!0,spacing:1,alignItems:"flex-end",children:[Object(x.jsx)(R.a,{item:!0,children:Object(x.jsx)(q.a,{})}),Object(x.jsx)(R.a,{item:!0,children:Object(x.jsx)(B.a,{id:"input-with-icon-grid",label:"Add Link",onChange:function(e){return s(e.target.value)}})}),Object(x.jsx)(R.a,{item:!0,children:Object(x.jsx)(G.a,{variant:"contained",color:"primary",onClick:function(){if(i.match(RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)"))){var e=new RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)").exec(i)[1];j(e),t(e)}else L.toast.error("Please check your link")},children:"GET DATA"})})]})}),d?Object(x.jsx)(Y,{id:d}):null]})}));function te(){return Object(x.jsx)(c.a.Fragment,{children:Object(x.jsxs)(g.a,{children:[Object(x.jsx)(ee,{}),Object(x.jsx)(I,{})]})})}var ne=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(m,{}),Object(x.jsx)(te,{}),Object(x.jsx)(L.ToastContainer,{})]})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,196)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},ce=n(45),re=n(93),ie=n(66),se={data:[],sheetData:[],option:null},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return e.data=t.data,Object(ie.a)({},e);case V:return e.sheetData=t.sheetData,e.option=t.option,Object(ie.a)({},e);default:return Object(ie.a)({},e)}},oe=Object(ce.b)({reducer:le}),de=window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__||ce.c,je=Object(ce.d)(oe,de(Object(ce.a)(re.a)));i.a.render(Object(x.jsx)(_.a,{store:je,children:Object(x.jsx)(ne,{})}),document.getElementById("root")),ae()}},[[136,1,2]]]);
//# sourceMappingURL=main.3b6862d6.chunk.js.map