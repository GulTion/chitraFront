(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{225:function(e,t,a){e.exports=a.p+"static/media/pen.d2648682.svg"},227:function(e,t,a){e.exports=a(581)},232:function(e,t,a){},233:function(e,t,a){},580:function(e,t,a){},581:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(221),c=a.n(i),o=(a(232),a(15)),s=a(16),l=a(18),u=a(17),m=a(19),d=a(13),h=a(6),f=(a(233),a(32)),g=a.n(f),b=a(222),p=a.n(b),w=a(94),v=a.n(w),E="https://chitraBackend.gultion.repl.co",y=a(23),k=a.n(y),N=(console.log,atob(localStorage.getItem("id"))),O=p()(E),j=function(e){O.on("drawingList",(function(t){return e(t)})),O.emit("subscribeForDrawingList",{key:N})},D=function(e){var t,a;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.name,a=e.key,n.next=3,g.a.awrap(O.emit("createDrawing",{name:t,key:a}));case 3:case"end":return n.stop()}}))},x=function(e){O.emit("publishLine",e)},S=a(33);n.Component;var L=function(e){var t=e.title,a=e.btn,n=e.color;return r.a.createElement("div",{style:{background:n&&"none"},className:"NavBar d-flex align-items-center justify-content-around p-1"},r.a.createElement("h1",{className:"text-light display-3 float-left"},t),r.a.createElement("div",{className:"d-flex align-items-center justify-content-around p-1"},null===a||void 0===a?void 0:a.map((function(e){return e}))))},I=(a(68),console.log),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={drawings:[],temp:[],key:"",redirect:!1,query:"",name:"",isNew:!1,isAuth:!0,status:"Loading ..."},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getDrawing",value:function(){var e=this;j((function(t){I("getDrawing is running"),e.setState((function(e){return{drawings:t,temp:t,status:"No Drawing Found !"}}))}))}},{key:"getAllList",value:function(){var e=this;k.a.post("".concat(E,"/drawing/all"),{id:atob(localStorage.getItem("id"))}).then((function(t){I(t);var a=t.data.list;e.setState((function(e){return{drawings:a,temp:a,status:"No Drawing Found !"}}))}))}},{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){var e=this;k.a.post("".concat(E,"/auth/check"),{key:atob(localStorage.getItem("id"))}).then((function(t){t.data.success?e.getAllList():e.setState({isAuth:!1})}))}},{key:"deleteDrawing",value:function(e){var t=this;!function(e,t){k.a.post(E+"/drawing/delete",{id:e,key:N}).then((function(e){t(e)}))}(e.id,(function(e){I(e),t.getAllList()}))}},{key:"DrawingElement",value:function(e){var t=this,a=e.drawing;return r.a.createElement("div",{className:"drawingCard card m-1 w-auto shadow-sm ",key:a._id},this.state.redirect&&r.a.createElement(h.a,{to:"/auth"}),r.a.createElement("div",{className:"card-body "},r.a.createElement("h5",{className:"card-title"},a.name),r.a.createElement(d.b,{className:"card-text btn btn-info text-light",to:"/drawings/".concat(a._id)},"Draw"),r.a.createElement("button",{onClick:function(e){return t.deleteDrawing({id:a._id})},className:"btn btn-danger mx-1"},"DELETE")),r.a.createElement("h6",{className:"card-footer text-dimmed",onClick:function(){return alert(a.key)}},"show key"),r.a.createElement("h6",{className:"card-footer text-dimmed"},new Date(a.timestamp).toLocaleString()))}},{key:"render",value:function(){var e=this,t=this.state.temp.map((function(t){return e.DrawingElement({drawing:t,getAllList:e.getAllList})}));return r.a.createElement(r.a.Fragment,null,L({title:"DashBoard",btn:[r.a.createElement(d.b,{to:"/",className:"btn"},"< Back"),r.a.createElement("div",{className:"btn",onClick:function(){var t,a;return g.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=prompt("Enter the Drawing Name: "),a=prompt("Enter the Drawing Name (leave blank for public): "),n.next=4,g.a.awrap(new Promise((function(e,n){D({name:t,key:a}),e()})));case 4:return n.next=6,g.a.awrap(e.getAllList());case 6:case"end":return n.stop()}}))}},"+ NEW")],color:!0}),r.a.createElement("div",null,this.state.isAuth?null:r.a.createElement(h.a,{to:"/auth"}),r.a.createElement("div",{className:"container mb-2 form"},r.a.createElement("input",{type:"text",className:"form-control",id:"floatingInputGrid",placeholder:"Search",value:this.state.query,onChange:function(t){var a=t.target.value;e.setState({query:a,temp:e.state.drawings.filter((function(e){return-1!=e.name.toLowerCase().indexOf(a)}))})}})),r.a.createElement("div",{className:"d-flex flex-wrap container justify-content-center"},t.length?t:r.a.createElement("h1",{className:"text-white"},this.state.status))))}}]),t}(n.Component),A=a(49),T=a(69),F=a(224),P=a.n(F),B=console,W=B.log,_=(B.table,function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleDraw=function(e){x(Object(T.a)({drawingId:a.props.drawingId},e))},a.state={lines:[],info:{name:""},brushColor:"black",name:"Loading....",isFound:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e,t,a=this,n=window.location.href.split("/").pop();W(n),k.a.post("".concat(E,"/drawing/get"),{id:n}).then((function(e){var t=e.data;W(t),t.success?(a.setState({isFound:!0,name:t.name}),document.title="".concat(t.name," - Chitr")):a.setState({name:"NOT FOUND"})})),e=this.props.drawingId,t=function(e){a.setState((function(t){return{lines:[].concat(Object(A.a)(t.lines),Object(A.a)(e.lines))}}))},v.a.Observable.fromEventPattern((function(t){return O.on("drawingAll:".concat(e),t)}),(function(t){return O.off("drawingAll:".concat(e),t)})).bufferTime(100).map((function(e){return{lines:e}})).subscribe((function(e){return t(e)})),O.emit("subscribeForAllPublishLine",e),function(e,t){v.a.Observable.fromEventPattern((function(t){return O.on("drawing:".concat(e),t)}),(function(t){return O.off("drawing:".concat(e),t)})).bufferTime(100).map((function(e){return{lines:e}})).subscribe((function(e){return t(e)})),O.emit("subscribeForPublishLine",e)}(this.props.drawingId,(function(e){a.setState((function(t){return{lines:[].concat(Object(A.a)(t.lines),Object(A.a)(e.lines))}}))}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,L({title:this.state.name,btn:[r.a.createElement(d.b,{to:"/dashboard",className:"btn"},"dashBoard")]}),this.state.isFound?r.a.createElement("div",{className:"Drawing"},r.a.createElement(P.a,{brushColor:this.state.brushColor,onDraw:this.handleDraw,drawingEnabled:!0,lines:this.state.lines})):null)}}]),t}(n.Component)),q=a(225),G=a.n(q),M=a(48),J=a(226),R={key:""},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return t.type,e},U=console.log,$={list:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;t.data;switch(t.type){case"GET_DRAWING_LIST":return new Promise((function(t,a){j((function(a){U("GET_DRAWING_LIST "+a.length),U(e.list),t(Object(T.a)({},e,{list:a}))}))}));default:return e}},K=Object(M.b)({auth:H,drawing:z}),Q=Object(M.c)(K,Object(M.a)(J.a)),V=(console.log,function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={email:"",password:"",success:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"auth",value:function(e){var t=this,a=this.state,n=a.email,r=a.password;k.a.post("".concat(E,"/auth/").concat(e),{email:n,password:r}).then((function(e){var a=e.data;a.success?(localStorage.setItem("id",btoa(a.id)),t.setState({success:!0})):alert(a.message)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Auth h-100"},L({title:"Auth Page",btn:[],color:!0}),r.a.createElement("div",{className:"container-fluid d-flex align-items-center"},this.state.success&&r.a.createElement(h.a,{to:"/dashboard"}),r.a.createElement("form",{className:"from",style:{width:"100%",maxWidth:"330px",padding:"15px",margin:"auto"},onSubmit:function(e){return e.preventDefault()}},r.a.createElement("img",{className:"mb-4",src:G.a,alt:"",width:"72",height:"72"}),r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal text-light"},"Please sign in/up"),r.a.createElement("input",{onChange:function(t){return e.setState({email:t.target.value})},value:this.state.email,name:"email",type:"email",id:"inputEmail",className:"form-control mb-2",placeholder:"Email address",required:!0,autoFocus:!0}),r.a.createElement("input",{onChange:function(t){return e.setState({password:t.target.value})},value:this.state.password,name:"password",type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),r.a.createElement("button",{onClick:function(t){return e.auth("signin")},className:"btn btn-lg btn-primary btn-block mt-2 ms-2 text-light",type:"submit"},"Sign in"),r.a.createElement("button",{onClick:function(t){return e.auth("signup")},className:"btn btn-lg btn-info btn-block mt-2 ms-2 text-light",type:"submit"},"Sign up"))))}}]),t}(n.Component)),X=function(){var e=Object(n.useState)(!1),t=Object(S.a)(e,2),a=t[0],i=t[1];return k.a.post("".concat(E,"/auth/check"),{key:atob(localStorage.getItem("id"))}).then((function(e){e.data.success?i(!0):i(!1)})),r.a.createElement("div",{className:"HomePage"},L({title:"Chitr",btn:[a?r.a.createElement("button",{className:"btn",onClick:function(){localStorage.setItem("id",""),i(!1)}},"Log Out"):r.a.createElement(d.b,{to:"auth",className:"btn"},"Log In"),a&&r.a.createElement(d.b,{to:"dashboard",className:"btn"},"dashBoard")]}))},Y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"DashBoard container-fluid"},r.a.createElement(C,null))}}]),t}(r.a.Component),Z={TITLE:"LineDraw"},ee=console.log,te=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).selectDrawing=function(e){a.setState({selectedDrawing:e})},a.state={selectedDrawing:{id:"",name:""},title:Z.TITLE},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.setState({title:Z.TITLE}),ee(Q.getState())}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/"},r.a.createElement(X,null)),r.a.createElement(h.b,{path:"/dashboard"},r.a.createElement(Y,null)),r.a.createElement(h.b,{path:"/auth"},r.a.createElement(V,null)),r.a.createElement(h.b,{path:"/drawings/:drawingId",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{drawingId:t.match.params.drawingId,drawing:e.state.selectedDrawing}))}}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(580);c.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},68:function(e,t,a){}},[[227,1,2]]]);
//# sourceMappingURL=main.e92e7957.chunk.js.map