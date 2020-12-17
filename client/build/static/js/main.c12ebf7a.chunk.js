(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{151:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(3),o=a(0),c=a.n(o),r=a(11),s=a.n(r),i=a(16),l=a(57),d=a(32),u=a(14);var b=Object(o.createContext)({isAuthenticated:!1,username:"",login:void 0,logout:void 0,message:void 0}),j="userStorage",m=a(44),h=a(12),O=a(39),p=a.n(O),f=a(201),v=a(189);var x=function(){var e=Object(o.useContext)(b),t=e.login,a=e.message,c=e.isAuthenticated,r=Object(o.useState)({username:"",password:""}),s=Object(i.a)(r,2),l=s[0],d=s[1],j=function(e){d(Object(h.a)(Object(h.a)({},l),{},Object(m.a)({},e.target.name,e.target.value)))};return c?Object(n.jsx)(u.a,{to:"/dashboard"}):Object(n.jsxs)("div",{className:"login-form-container",children:[Object(n.jsx)("h1",{className:"login-form-title",children:"Login"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();p.a.post("/api/auth/login",Object(h.a)({},l),{"Content-Type":"application/json"}).then((function(e){t(e.data.username,e.data.token)})).catch((function(e){return a("error",e.response.data.message)}))},children:[Object(n.jsx)(f.a,{id:"outlined-username-input",name:"username",label:"Username",type:"text",autoComplete:"current-username",variant:"outlined",value:l.username,onChange:j}),Object(n.jsx)(f.a,{id:"outlined-password-input",name:"password",label:"Password",type:"password",autoComplete:"current-password",variant:"outlined",value:l.password,onChange:j}),Object(n.jsx)(v.a,{color:"inherit",type:"submit",children:"Login"})]})]})},k=a(94),g=function(e){var t=e.component,a=e.isAuthenticated,c=Object(k.a)(e,["component","isAuthenticated"]);return Object(n.jsx)(u.b,Object(h.a)(Object(h.a)({},c),{},{render:function(e){return a?Object(n.jsx)(o.Fragment,{children:Object(n.jsx)(t,Object(h.a)({},e))}):Object(n.jsx)(u.a,{to:"/login"})}}))},N=a(198),y=a(197),D=a(191);function C(e){return Object(n.jsx)(y.a,Object(h.a)({elevation:6,variant:"filled"},e))}var w=Object(D.a)((function(e){return{root:{cursor:"pointer",width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function S(e){var t=e.options,a=e.message,o=e.close,c=w();return Object(n.jsx)("div",{className:c.root,children:Object(n.jsx)(N.a,{open:!0,autoHideDuration:6e3,onClose:o,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:Object(n.jsx)(C,{onClose:function(){return o()},severity:t.type,children:a})})})}var B=a(90),P=a(91),A=a(95),I=a(93),q=function(e){Object(A.a)(a,e);var t=Object(I.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(P.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.type,n=t.alert,o=t.message;"success"===a?n.success(o):"error"===a&&n.error(o)}},{key:"render",value:function(){return Object(n.jsx)(o.Fragment,{})}}]),a}(o.Component),E=Object(l.b)()(q),R=a(192),F=a(193),T=Object(D.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function _(){var e=T(),t=Object(o.useContext)(b);return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(R.a,{position:"static",children:Object(n.jsxs)(F.a,{children:[Object(n.jsx)(d.b,{to:"/dashboard",className:e.title,children:"Library Manager"}),t.isAuthenticated?Object(n.jsxs)("div",{className:"navbar-auth-block",children:[Object(n.jsx)("p",{children:t.username}),Object(n.jsx)(v.a,{color:"inherit",onClick:function(){t.logout()},children:"Logout"})]}):""]})})})}var M=a(199),J=a(200),L=a(187),U=a(196);var z=function(e){var t=Object(u.g)();return Object(n.jsxs)("div",{className:"books-bookCard-block",children:[Object(n.jsxs)("div",{className:"books-bookCard-actions",children:[Object(n.jsx)(v.a,{variant:"outlined",color:"primary",onClick:function(a){a.preventDefault(),t.push({pathname:"/dashboard/".concat(e.data._id),state:{bookData:e.data,mode:"view"}})},children:"View"}),Object(n.jsx)(v.a,{variant:"outlined",color:"primary",onClick:function(a){a.preventDefault(),t.push({pathname:"/dashboard/".concat(e.data._id),state:{bookData:e.data,mode:"edit"}})},children:"Edit"}),Object(n.jsx)(v.a,{variant:"outlined",color:"primary",onClick:function(t){t.preventDefault(),e.deleteBook(e.data._id)},children:"Delete"})]}),Object(n.jsxs)("div",{className:"books-bookCard-info",children:[Object(n.jsx)("p",{className:"bookName",children:e.data.bookName}),Object(n.jsx)("p",{className:"authorBook",children:e.data.authorBook}),Object(n.jsx)("p",{className:"stock",children:e.data.stock?"In library":"At the reader"})]})]})},G=a(92);a.n(G)()(p.a,{retries:3});var K=function(e){return new Promise((function(t,a){p.a.put("/api/books/edit/".concat(e._id),e,H()).then((function(e){t(e.data)})).catch((function(e){a(e.response.data.message)}))}))},Z=function(e){return new Promise((function(t,a){p.a.delete("/api/books/delete/".concat(e),H()).then((function(e){return t(e.data.message)})).catch((function(e){a(e.response.data.message)}))}))},H=function(){var e=JSON.parse(localStorage.getItem("userStorage")).token,t={headers:{"Content-Type":"application/json"}};return e&&(t.headers.Authorization="Bearer ".concat(e)),t},V=Object(D.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),W={bookName:"",authorBook:"",publishDate:new Date,stock:!0,readerName:"",returnDate:new Date};var Q=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(o.useState)(!1),l=Object(i.a)(s,2),d=l[0],j=l[1],m=c.a.useState("default"),h=Object(i.a)(m,2),O=h[0],f=h[1],x=Object(o.useContext)(b),k=x.token,g=x.logout,N=x.message,y=V(),D=Object(u.g)();Object(o.useEffect)((function(){k&&function(e,t){return new Promise((function(a,n){var o={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}};p.a.get("/api/books/?sort=".concat(t),o).then((function(e){return a(e.data)})).catch((function(e){n(e.response.status)}))}))}(k,O).then((function(e){r(e)})).catch((function(e){401===e&&g()}))}),[k,O,d,g]);var C=function(e){Z(e).then((function(e){N("success",e),j(!d)})).catch((function(e){N("error",e)}))};return Object(n.jsxs)("div",{className:"page-container",children:[Object(n.jsx)("h1",{className:"title-page-block",children:"Books"}),Object(n.jsxs)("div",{className:"books-main-menu",children:[Object(n.jsx)("div",{className:"books-sort-menu",children:Object(n.jsxs)(L.a,{variant:"outlined",className:y.formControl,children:[Object(n.jsx)(M.a,{id:"demo-simple-select-outlined-label",children:"Sort by"}),Object(n.jsxs)(U.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:O,onChange:function(e){f(e.target.value)},label:"Sort",children:[Object(n.jsx)(J.a,{value:"default",children:"Default"}),Object(n.jsx)(J.a,{value:"stock",children:"In stock"}),Object(n.jsx)(J.a,{value:"expired",children:"Expired"})]})]})}),Object(n.jsx)(v.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),D.push({pathname:"/dashboard/create",state:{bookData:W,mode:"create"}})},children:"Create book entry"})]}),Object(n.jsx)("div",{className:"books-list-block",children:0===a.length?Object(n.jsx)("p",{children:"No data ..."}):a.map((function(e){return Object(n.jsx)(z,{data:e,deleteBook:C},e._id)}))})]})},X=a(64),Y=a(20),$=a(195),ee=a(156),te=a(194),ae=a(154),ne=Object(D.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function oe(e){var t=ne(),a=Object(o.useState)({readerName:"",returnDate:new Date}),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.jsx)("div",{className:"modal-container",children:Object(n.jsx)(ee.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:e.show,onClose:e.close,closeAfterTransition:!0,BackdropComponent:te.a,BackdropProps:{timeout:500},children:Object(n.jsx)(ae.a,{in:e.show,children:Object(n.jsxs)("div",{className:t.paper,children:[Object(n.jsx)("h2",{className:"title-modal-block",children:"Details about client"}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.edit(Object(h.a)(Object(h.a)(Object(h.a)({},e.bookData),r),{},{stock:!1}))},className:"modal-form",children:[Object(n.jsxs)("div",{className:"form-data",children:[Object(n.jsxs)("div",{className:"form-label",children:[Object(n.jsxs)("label",{className:"form-label-item",htmlFor:"readerName",children:["Reader Name:"," "]}),Object(n.jsxs)("label",{className:"form-label-item",htmlFor:"returnDate",children:["Return Date:"," "]})]}),Object(n.jsxs)("div",{className:"form-input",children:[Object(n.jsx)(f.a,{className:"form-input-item",required:!0,id:"standard-required",name:"readerName",label:"Required",type:"text",value:r.readerName,onChange:function(e){s(Object(h.a)(Object(h.a)({},r),{},{readerName:e.target.value}))},variant:"outlined"}),Object(n.jsx)(Y.a,{className:"form-input-item",utils:X.a,children:Object(n.jsx)($.a,{margin:"normal",id:"date-picker-dialog",label:"Publish date",format:"MM/dd/yyyy",value:r.returnDate,onChange:function(e){s(Object(h.a)(Object(h.a)({},r),{},{returnDate:e}))},KeyboardButtonProps:{"aria-label":"change date"}})})]})]}),Object(n.jsxs)("div",{className:"form-buttons",children:[Object(n.jsx)(v.a,{color:"inherit",type:"submit",children:"Save"}),Object(n.jsx)(v.a,{color:"inherit",onClick:function(t){t.preventDefault(),s({readerName:"",returnDate:new Date}),e.close()},children:"Cancel"})]})]})]})})})})}var ce=function(e){var t={weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"UTC",timeZoneName:"short"},a=new Date(e).toLocaleString("en-US",t);return(a=a.split(","))[1]=a[1].split(" ").reverse().join(" "),[a[1],a[2]].join("")};var re=function(){var e=Object(u.g)(),t=Object(o.useContext)(b).message,a=Object(u.h)(),c=Object(o.useState)(!1),r=Object(i.a)(c,2),s=r[0],l=r[1],d=Object(o.useState)(a.state.mode),j=Object(i.a)(d,2),O=j[0],x=j[1],k=Object(o.useState)(a.state.bookData),g=Object(i.a)(k,2),N=g[0],y=g[1],D=Object(o.useState)({bookName:"",authorBook:"",publishDate:new Date,stock:!0,readerName:"",returnDate:new Date}),C=Object(i.a)(D,2),w=C[0],S=C[1];Object(o.useEffect)((function(){S(a.state.bookData),y(a.state.bookData),x(a.state.mode)}),[a.state.bookData,a.state.mode]);var B=function(e){S(Object(h.a)(Object(h.a)({},w),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(n.jsxs)("div",{className:"page-container",children:[Object(n.jsx)("h1",{className:"title-page-block",children:"create"===O?"Book Name":N.bookName}),"create"===O?"":Object(n.jsxs)("div",{className:"bookPage-menu",children:[Object(n.jsx)(v.a,{variant:"outlined",color:"primary",onClick:function(e){e.preventDefault(),x("edit")},children:"Edit"}),Object(n.jsx)(v.a,{variant:"outlined",color:"primary",onClick:function(a){a.preventDefault(),Z(N._id).then((function(a){t("success",a),e.push("/dashboard")})).catch((function(e){t("error",e)}))},children:"Delete"})]}),Object(n.jsxs)("div",{className:"bookPage-container",children:[Object(n.jsxs)("form",{onSubmit:function(a){var n;a.preventDefault(),"create"===O?(n=w,new Promise((function(e,t){p.a.post("/api/books/create",n,H()).then((function(t){return e(t.data)})).catch((function(e){t(e.response.data.message)}))}))).then((function(t){e.push({pathname:"/dashboard/".concat(t.book._id),state:{bookData:t.book,mode:"view"}})})).catch((function(e){t("error",e)})):K(w).then((function(e){y(e.book),x("view")})).catch((function(e){t("error",e)}))},children:[Object(n.jsxs)("div",{className:"form-data",children:[Object(n.jsxs)("div",{className:"form-label",children:[Object(n.jsxs)("label",{className:"form-label-item",htmlFor:"bookName",children:["Book Name:"," "]}),Object(n.jsxs)("label",{className:"form-label-item",htmlFor:"authorName",children:["Author Name:"," "]}),Object(n.jsxs)("label",{className:"form-label-item",htmlFor:"authorName",children:["Publish Date:"," "]})]}),Object(n.jsxs)("div",{className:"form-input",children:[Object(n.jsx)(f.a,{className:"form-input-item",required:!0,disabled:"view"===O,id:"standard-required",name:"bookName",label:"Required",type:"text",value:w.bookName,onChange:B,variant:"outlined"}),Object(n.jsx)(f.a,{className:"form-input-item",required:!0,disabled:"view"===O,id:"standard-required",name:"authorBook",label:"Required",type:"text",value:w.authorBook,onChange:B,variant:"outlined"}),Object(n.jsx)(Y.a,{className:"form-input-item",utils:X.a,children:Object(n.jsx)($.a,{disabled:"view"===O,margin:"normal",id:"date-picker-dialog",label:"Publish date",format:"MM/dd/yyyy",value:w.publishDate,onChange:function(e){S(Object(h.a)(Object(h.a)({},w),{},{publishDate:e}))},KeyboardButtonProps:{"aria-label":"change date"}})})]})]}),Object(n.jsxs)("div",{className:"form-buttons",children:["view"===O?"":Object(n.jsx)(v.a,{color:"inherit",type:"submit",children:"Save"}),"edit"===O?Object(n.jsx)(v.a,{color:"primary",onClick:function(e){e.preventDefault(),S(N),x("view")},children:"Reset"}):""]})]}),"create"===O?"":Object(n.jsxs)("div",{className:"bookPage-reader-block",children:[Object(n.jsx)("p",{className:"",children:"Book status information"}),Object(n.jsxs)("div",{className:"bookPage-reader-menu",children:[Object(n.jsx)(v.a,{disabled:!N.stock,variant:"outlined",color:"primary",onClick:function(e){e.preventDefault(),l(!0),console.log(N)},children:"Give to the reader"}),Object(n.jsx)(v.a,{disabled:N.stock,variant:"outlined",color:"primary",onClick:function(e){e.preventDefault(),K(Object(h.a)(Object(h.a)({},N),{},{stock:!0,readerName:"",returnDate:new Date})).then((function(e){y(e.book)})).catch((function(e){t("error",e)}))},children:"Return a book"})]}),Object(n.jsx)("div",{className:"bookPage-reader-info",children:N.stock?Object(n.jsx)("p",{children:"Book in the library."}):Object(n.jsxs)("div",{className:"reader-info",children:[Object(n.jsxs)("p",{children:["Name: ",N.readerName]}),Object(n.jsxs)("p",{children:["Return date: ",ce(N.returnDate)]})]})})]})]}),Object(n.jsx)(oe,{show:s,close:function(){l(!1)},bookData:N,edit:function(e){console.log(e),K(e).then((function(e){y(e.book),l(!1)})).catch((function(e){t("error",e)}))}})]})};a(151);var se=function(){var e=function(){var e=Object(o.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(o.useState)(""),r=Object(i.a)(c,2),s=r[0],l=r[1],d=Object(o.useCallback)((function(e,t){n(t),l(e),localStorage.setItem(j,JSON.stringify({username:e,token:t}))}),[]),u=Object(o.useCallback)((function(){n(null),l(null),localStorage.removeItem(j)}),[]);return Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem(j));e&&e.token&&d(e.username,e.token)}),[d]),{username:s,token:a,login:d,logout:u}}(),t=e.username,a=e.token,c=e.login,r=e.logout,s=Object(o.useState)(!!a),m=Object(i.a)(s,2),h=m[0],O=m[1],p=Object(o.useState)({type:"",message:""}),f=Object(i.a)(p,2),v=f[0],k=f[1];return Object(o.useEffect)((function(){O(!!a)}),[a]),Object(n.jsx)(b.Provider,{value:{token:a,isAuthenticated:h,username:t,login:c,logout:r,message:function(e,t){k({type:e,message:t}),k({type:"",message:""})}},children:Object(n.jsx)(l.a,{template:S,children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(_,{}),Object(n.jsx)(E,{type:v.type,message:v.message}),Object(n.jsx)("div",{className:"page-container",children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{exact:!0,path:"/login",component:x}),Object(n.jsx)(g,{exact:!0,path:"/dashboard",component:Q,isAuthenticated:h}),Object(n.jsx)(g,{exact:!0,path:"/dashboard/:bookID",component:re,isAuthenticated:h}),Object(n.jsx)(g,{exact:!0,path:"*",component:Q,isAuthenticated:h})]})})]})})})};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(se,{})}),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.c12ebf7a.chunk.js.map