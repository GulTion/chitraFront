(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{246:function(e,t,n){e.exports=n.p+"static/media/pen.d2648682.svg"},249:function(e,t,n){e.exports=n(628)},254:function(e,t,n){},255:function(e,t,n){},598:function(e,t,n){},627:function(e,t,n){},628:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(54),o=n.n(i),c=(n(254),n(14)),s=n(15),l=n(17),u=n(16),d=n(21),m=n(7),h=(n(255),n(32)),f=n.n(h),p=n(55),g=n(243),b=n.n(g),v=n(106),w=n.n(v),E="https://chitraBackend.gultion.repl.co",O=n(19),y=n.n(O),j=(console.log,atob(localStorage.getItem("id"))),k=b()(E),N=function(e){k.on("drawingList",(function(t){return e(t)})),k.emit("subscribeForDrawingList",{key:j})},S=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.key,e.next=3,k.emit("createDrawing",{name:n,key:a,user:j});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=n(8);a.Component;var D=function(e){var t=e.title,n=e.btn,a=e.color;return r.a.createElement("div",{style:{background:a&&"none"},className:"NavBar d-flex align-items-center justify-content-around p-1"},r.a.createElement("h1",{className:"text-light display-3 float-left"},t),r.a.createElement("div",{className:"d-flex align-items-center justify-content-around p-1"},null===n||void 0===n?void 0:n.map((function(e){return e}))))},C=(n(77),n(244)),L=(n(594),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={value:""},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"d-flex flex-column justify-content-center NewAdder"},r.a.createElement("input",{onBlur:function(t){return e.setState({value:t.target.value})},type:"text",placeholder:"Enter Drawing Name"}),r.a.createElement("div",{className:"btn btn-primary",onClick:function(t){e.props.onSave(e.state.value),e.props.onClose(),e.setState({value:""})}},"SAVE"))}}]),n}(a.Component)),I=console.log,M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={drawings:[],temp:[],key:"",redirect:!1,query:"",name:"",isNew:!1,isAuth:!0,status:"Loading ..."},a}return Object(s.a)(n,[{key:"getDrawing",value:function(){var e=this;N((function(t){I("getDrawing is running"),e.setState((function(e){return{drawings:t,temp:t,status:"No Drawing Found !"}}))}))}},{key:"getAllList",value:function(){var e=this;y.a.post("".concat(E,"/drawing/all"),{id:atob(localStorage.getItem("id"))}).then((function(t){I(t);var n=t.data.list;document.title="".concat(n.length," Drawings"),e.setState((function(e){return{drawings:n,temp:n,status:"No Drawing Found !"}}))}))}},{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){var e=this;y.a.post("".concat(E,"/auth/check"),{key:atob(localStorage.getItem("id"))}).then((function(t){t.data.success?e.getAllList():e.setState({isAuth:!1})}))}},{key:"deleteDrawing",value:function(e){var t=this;!function(e,t){y.a.post(E+"/drawing/delete",{id:e,key:j}).then((function(e){t(e)}))}(e.id,(function(e){I(e),t.getAllList()}))}},{key:"DrawingElement",value:function(e){var t=this,n=e.drawing;return r.a.createElement("div",{className:"drawingCard card m-1 w-auto shadow-sm ",key:n._id},this.state.redirect&&r.a.createElement(m.a,{to:"/auth"}),r.a.createElement("div",{className:"card-body "},r.a.createElement("h5",{className:"card-title"},n.name),r.a.createElement(d.b,{className:"card-text btn btn-info text-light",to:"/drawings/".concat(n._id)},"Draw"),r.a.createElement("button",{onClick:function(e){return t.deleteDrawing({id:n._id})},className:"btn btn-danger mx-1"},"DELETE")),r.a.createElement("h6",{className:"card-footer text-dimmed"},new Date(n.timestamp).toLocaleString()))}},{key:"render",value:function(){var e=this,t=this.state.temp.map((function(t){return e.DrawingElement({drawing:t,getAllList:e.getAllList})}));return r.a.createElement(r.a.Fragment,null,D({title:"DashBoard",btn:[r.a.createElement(d.b,{to:"/",className:"btn"},"< Back"),r.a.createElement("div",{className:"btn",onClick:Object(p.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({isNew:!0});case 1:case"end":return t.stop()}}),t)})))},"+ NEW")],color:!0}),r.a.createElement(C.a,{onClose:function(){return e.setState({isNew:!1})},open:this.state.isNew},r.a.createElement(L,{onClose:function(){return e.setState({isNew:!1})},onSave:function(){var t=Object(p.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e,t){S({name:n,key:""}),e()}));case 2:return t.next=4,e.getAllList();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})),r.a.createElement("div",null,this.state.isAuth?null:r.a.createElement(m.a,{to:"/auth"}),r.a.createElement("div",{className:"container mb-2 form"},r.a.createElement("input",{type:"text",className:"form-control",id:"floatingInputGrid",placeholder:"Search",value:this.state.query,onChange:function(t){var n=t.target.value;e.setState({query:n,temp:e.state.drawings.filter((function(e){return-1!=e.name.toLowerCase().indexOf(n)}))})}})),r.a.createElement("div",{className:"d-flex flex-wrap container justify-content-center"},t.length?t:r.a.createElement("h1",{className:"text-white"},this.state.status))))}}]),n}(a.Component),A=n(60),F=n(58),T=(console.log,function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={lastLength:0},e.handleOnMouseDown=function(t){if(e.props.drawingEnabled){var n=e.node.getBoundingClientRect();e.ctx.beginPath(),e.lastX=t.clientX-n.left,e.lastY=t.clientY-n.top,e.drawing=!0}},e.handleOnMouseMove=function(t){if(e.drawing){var n=e.node.getBoundingClientRect(),a=t.clientX-n.left,r=t.clientY-n.top;e.draw(e.lastX,e.lastY,a,r),e.update(),e.props.onDraw&&e.props.onDraw({from:{x:e.lastX,y:e.lastY},to:{x:a,y:r},brushColor:e.props.brushColor,linewidth:e.props.lineWidth}),e.lastX=a,e.lastY=r}},e.handleonMouseUp=function(){e.drawing=!1},e.handleOnTouchDown=function(t){if(e.props.drawingEnabled){var n=Object(x.a)(t.touches,1)[0],a=e.node.getBoundingClientRect();e.ctx.beginPath(),e.lastX=n.clientX-a.left,e.lastY=n.clientY-a.top,e.drawing=!0,t.preventDefault()}},e.handleOnTouchMove=function(t){if(e.drawing){var n=Object(x.a)(t.touches,1)[0],a=e.node.getBoundingClientRect(),r=n.clientX-a.left,i=n.clientY-a.top;e.draw(e.lastX,e.lastY,r,i),e.update(),e.props.onDraw&&e.props.onDraw({from:{x:e.lastX,y:e.lastY},to:{x:r,y:i},brushColor:e.props.brushColor,linewidth:e.props.lineWidth}),e.lastX=r,e.lastY=i}t.preventDefault()},e.handleOnTouchUp=function(){e.drawing=!1},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.node;e.addEventListener("touchstart",this.handleOnTouchDown,!1),e.addEventListener("touchmove",this.handleOnTouchMove,!1),e.addEventListener("touchend",this.handleOnTouchUp,!1),e.style.width="100%",e.style.height="100%",e.width=e.offsetWidth,e.height=e.offsetHeight,this.ctx=e.getContext("2d")}},{key:"componentWillReceiveProps",value:function(e){if(e.lines&&e.lines.length>this.state.lastLength){for(var t=this.state.lastLength;t<e.lines.length;t+=1){var n=e.lines[t];this.draw(n.from.x,n.from.y,n.to.x,n.to.y)}this.update(),this.setState({lastLength:e.lines.length})}}},{key:"update",value:function(){this.ctx.stroke()}},{key:"draw",value:function(e,t,n,a){this.ctx.strokeStyle=this.props.brushColor,this.ctx.lineWidth=this.props.lineWidth,this.ctx.moveTo(e,t),this.ctx.lineTo(n,a)}},{key:"render",value:function(){var e=this;return r.a.createElement("canvas",{ref:function(t){return e.node=t},style:this.props.canvasStyle,onMouseDown:this.handleOnMouseDown,onMouseMove:this.handleOnMouseMove,onMouseUp:this.handleonMouseUp})}}]),n}(a.Component));T.defaultProps={brushColor:"#000000",lineWidth:2,canvasStyle:{backgroundColor:"#FFFFFF",cursor:"pointer"},drawingEnabled:!1,lines:[]};var P=T,W=console,B=W.log,Y=(W.table,function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleDraw=function(e){!function(e){k.emit("publishLine",e)}(Object(F.a)({drawingId:a.props.drawingId},e))},a.state={lines:[],info:{name:""},brushColor:"black",name:"Loading....",isFound:!1},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e,t,n=this,a=window.location.href.split("/").pop();B(a),y.a.post("".concat(E,"/drawing/get"),{id:a}).then((function(e){var t=e.data;B(t),t.success?(n.setState({isFound:!0,name:t.name}),document.title="".concat(t.name," - Chitr")):n.setState({name:"NOT FOUND"})})),e=this.props.drawingId,t=function(e){n.setState((function(t){return{lines:[].concat(Object(A.a)(t.lines),Object(A.a)(e.lines))}}))},w.a.Observable.fromEventPattern((function(t){return k.on("drawingAll:".concat(e),t)}),(function(t){return k.off("drawingAll:".concat(e),t)})).bufferTime(100).map((function(e){return{lines:e}})).subscribe((function(e){return t(e)})),k.emit("subscribeForAllPublishLine",e),function(e,t){w.a.Observable.fromEventPattern((function(t){return k.on("drawing:".concat(e),t)}),(function(t){return k.off("drawing:".concat(e),t)})).bufferTime(100).map((function(e){return{lines:e}})).subscribe((function(e){return t(e)})),k.emit("subscribeForPublishLine",e)}(this.props.drawingId,(function(e){n.setState((function(t){return{lines:[].concat(Object(A.a)(t.lines),Object(A.a)(e.lines))}}))}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,D({title:this.state.name,btn:[r.a.createElement(d.b,{to:"/dashboard",className:"btn"},"dashBoard")]}),this.state.isFound?r.a.createElement("div",{className:"Drawing"},r.a.createElement(P,{brushColor:this.state.brushColor,onDraw:this.handleDraw,drawingEnabled:!0,lines:this.state.lines})):null)}}]),n}(a.Component)),X=n(246),_=n.n(X),R=n(57),U=n(247),q={key:""},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;return t.type,e},H=console.log,J={list:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;t.data;switch(t.type){case"GET_DRAWING_LIST":return new Promise((function(t,n){N((function(n){H("GET_DRAWING_LIST "+n.length),H(e.list),t(Object(F.a)(Object(F.a)({},e),{},{list:n}))}))}));default:return e}},V=Object(R.b)({auth:G,drawing:z}),$=Object(R.c)(V,Object(R.a)(U.a)),K=(console.log,function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={email:"",password:"",success:!1},a}return Object(s.a)(n,[{key:"auth",value:function(e){var t=this,n=this.state,a=n.email,r=n.password;y.a.post("".concat(E,"/auth/").concat(e),{email:a,password:r}).then((function(e){var n=e.data;n.success?(localStorage.setItem("id",btoa(n.id)),t.setState({success:!0})):alert(n.message)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Auth h-100"},D({title:"Auth Page",btn:[],color:!0}),r.a.createElement("div",{className:"container-fluid d-flex align-items-center"},this.state.success&&r.a.createElement(m.a,{to:"/dashboard"}),r.a.createElement("form",{className:"from",style:{width:"100%",maxWidth:"330px",padding:"15px",margin:"auto"},onSubmit:function(e){return e.preventDefault()}},r.a.createElement("img",{className:"mb-4",src:_.a,alt:"",width:"72",height:"72"}),r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal text-light"},"Please sign in/up"),r.a.createElement("input",{onChange:function(t){return e.setState({email:t.target.value})},value:this.state.email,name:"email",type:"email",id:"inputEmail",className:"form-control mb-2",placeholder:"Email address",required:!0,autoFocus:!0}),r.a.createElement("input",{onChange:function(t){return e.setState({password:t.target.value})},value:this.state.password,name:"password",type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),r.a.createElement("button",{onClick:function(t){return e.auth("signin")},className:"btn btn-lg btn-primary btn-block mt-2 ms-2 text-light",type:"submit"},"Sign in"),r.a.createElement("button",{onClick:function(t){return e.auth("signup")},className:"btn btn-lg btn-info btn-block mt-2 ms-2 text-light",type:"submit"},"Sign up"))))}}]),n}(a.Component)),Q=(n(598),n(59)),Z=r.a.memo((function(){return r.a.createElement("div",{className:"Present"},r.a.createElement(Q.Impress,null,r.a.createElement(Q.Step,{data:{x:0,y:0}},r.a.createElement("h1",{className:"_1"},"What is Chitr?")),r.a.createElement(Q.Step,{data:{y:1e3,scale:3}},r.a.createElement("h1",{className:"_2"},"Drawing Collebrate Tool for RealTime Drawing!")),r.a.createElement(Q.Step,{data:{x:1e3,y:-1e3,scale:5,rotateX:45,rotateY:45}},r.a.createElement("h1",{className:"_1"},"What is Chitr?"))))})),ee=function(){var e=Object(a.useState)(!1),t=Object(x.a)(e,2),n=t[0],i=t[1];return y.a.post("".concat(E,"/auth/check"),{key:atob(localStorage.getItem("id"))}).then((function(e){e.data.success?i(!0):i(!1)})),document.title="Chitr",r.a.createElement("div",{className:"HomePage"},D({title:"Chitr",btn:[n?r.a.createElement("button",{className:"btn",onClick:function(){localStorage.setItem("id",""),i(!1)}},"Log Out"):r.a.createElement(d.b,{to:"auth",className:"btn"},"Log In"),n&&r.a.createElement(d.b,{to:"dashboard",className:"btn"},"dashBoard")]}),r.a.createElement(Z,null))},te=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"DashBoard container-fluid"},r.a.createElement(M,null))}}]),n}(r.a.Component),ne=n(248),ae=n.n(ne),re=console.log;function ie(e){e.drawingId;var t=Object(a.useRef)(null),n=Object(a.useState)(!1),i=Object(x.a)(n,2),o=i[0],c=(i[1],Object(a.useState)(!1)),s=Object(x.a)(c,2),l=s[0],u=(s[1],Object(a.useState)(!1)),d=Object(x.a)(u,2),m=d[0],h=(d[1],Object(a.useState)(null)),f=Object(x.a)(h,2),p=(f[0],f[1],Object(a.useState)(null)),g=Object(x.a)(p,2),b=(g[0],g[1],Object(a.useState)(!1)),v=Object(x.a)(b,2),w=(v[0],v[1],Object(a.useState)(!1)),O=Object(x.a)(w,2),j=(O[0],O[1],Object(a.useState)("light")),k=Object(x.a)(j,2),N=k[0],S=(k[1],Object(a.useState)("")),D=Object(x.a)(S,2),C=D[0],L=D[1];return Object(a.useEffect)((function(){var e=window.location.href.split("/").pop();re(e),y.a.post("".concat(E,"/drawing/get"),{id:e}).then((function(e){var t=e.data;re({data:t}),t.success?(L(t.name),document.title="".concat(t.name," - Chitr")):L("NOT FOUND")}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,C),r.a.createElement(ae.a,{ref:t,initialData:[],onCollabButtonClick:function(){return window.alert("You clicked on collab button")},onPointerUpdate:function(e){re(e)},viewModeEnabled:o,zenModeEnabled:l,gridModeEnabled:m,theme:N,name:"Custom name of drawing",UIOptions:{canvasActions:{loadScene:!1}}}))}var oe="LineDraw",ce=console.log,se=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).selectDrawing=function(e){a.setState({selectedDrawing:e})},a.state={selectedDrawing:{id:"",name:""},title:oe},a}return Object(s.a)(n,[{key:"componentWillMount",value:function(){this.setState({title:oe}),ce($.getState())}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(ee,null)),r.a.createElement(m.b,{path:"/dashboard"},r.a.createElement(te,null)),r.a.createElement(m.b,{path:"/auth"},r.a.createElement(K,null)),r.a.createElement(m.b,{path:"/drawings/:drawingId",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{drawingId:t.match.params.drawingId,drawing:e.state.selectedDrawing}))}}),r.a.createElement(m.b,{path:"/new/drawings/:drawingId",render:function(e){return r.a.createElement(ie,{drawingId:e.match.params.drawingId})}}))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(627);o.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,t,n){}},[[249,1,2]]]);
//# sourceMappingURL=main.abfe85d3.chunk.js.map