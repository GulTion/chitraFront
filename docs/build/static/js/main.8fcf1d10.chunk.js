(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{243:function(e,t,a){e.exports=a.p+"static/media/pen.d2648682.svg"},246:function(e,t,a){e.exports=a(621)},251:function(e,t,a){},252:function(e,t,a){},596:function(e,t,a){},620:function(e,t,a){},621:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(78),i=a.n(o),l=(a(251),a(14)),c=a(15),s=a(17),u=a(16),m=a(24),d=a(7),h=(a(252),a(59)),f=a(58),p=a(56),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={lastLength:0},e.handleOnMouseDown=function(t){if(e.props.drawingEnabled){var a=e.node.getBoundingClientRect();e.ctx.beginPath(),e.lastX=t.clientX-a.left,e.lastY=t.clientY-a.top,e.drawing=!0}},e.handleOnMouseMove=function(t){if(e.drawing){var a=e.node.getBoundingClientRect(),n=t.clientX-a.left,r=t.clientY-a.top;e.draw(e.lastX,e.lastY,n,r),e.update(),e.props.onDraw&&e.props.onDraw({from:{x:e.lastX,y:e.lastY},to:{x:n,y:r},brushColor:e.props.brushColor,linewidth:e.props.lineWidth}),e.lastX=n,e.lastY=r}},e.handleonMouseUp=function(){e.drawing=!1},e.handleOnTouchDown=function(t){if(e.props.drawingEnabled){var a=Object(p.a)(t.touches,1)[0],n=e.node.getBoundingClientRect();e.ctx.beginPath(),e.lastX=a.clientX-n.left,e.lastY=a.clientY-n.top,e.drawing=!0,t.preventDefault()}},e.handleOnTouchMove=function(t){if(e.drawing){var a=Object(p.a)(t.touches,1)[0],n=e.node.getBoundingClientRect(),r=a.clientX-n.left,o=a.clientY-n.top;e.draw(e.lastX,e.lastY,r,o),e.update(),e.props.onDraw&&e.props.onDraw({from:{x:e.lastX,y:e.lastY},to:{x:r,y:o},brushColor:e.props.brushColor,linewidth:e.props.lineWidth}),e.lastX=r,e.lastY=o}t.preventDefault()},e.handleOnTouchUp=function(){e.drawing=!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.node;e.addEventListener("touchstart",this.handleOnTouchDown,!1),e.addEventListener("touchmove",this.handleOnTouchMove,!1),e.addEventListener("touchend",this.handleOnTouchUp,!1),e.style.width="100%",e.style.height="100%",e.width=e.offsetWidth,e.height=e.offsetHeight,this.ctx=e.getContext("2d")}},{key:"componentWillReceiveProps",value:function(e){if(e.lines&&e.lines.length>this.state.lastLength){for(var t=this.state.lastLength;t<e.lines.length;t+=1){var a=e.lines[t];this.draw(a.from.x,a.from.y,a.to.x,a.to.y)}this.update(),this.setState({lastLength:e.lines.length})}}},{key:"update",value:function(){this.ctx.stroke()}},{key:"draw",value:function(e,t,a,n){this.ctx.strokeStyle=this.props.brushColor,this.ctx.lineWidth=this.props.lineWidth,this.ctx.moveTo(e,t),this.ctx.lineTo(a,n)}},{key:"render",value:function(){var e=this;return r.a.createElement("canvas",{ref:function(t){return e.node=t},style:this.props.canvasStyle,onMouseDown:this.handleOnMouseDown,onMouseMove:this.handleOnMouseMove,onMouseUp:this.handleonMouseUp})}}]),a}(n.Component);g.defaultProps={brushColor:"#000000",lineWidth:2,canvasStyle:{backgroundColor:"#FFFFFF",cursor:"pointer"},drawingEnabled:!1,lines:[]};var b=g,v=a(35),w=a.n(v),E=a(55),y=a(241),k=a.n(y),N=a(104),O=a.n(N),x="https://chitraBackend.gultion.repl.co",S=a(23),D=a.n(S),j=atob(localStorage.getItem("id")),C=k()(x),L=function(e){C.on("drawingList",(function(t){return e(t)})),C.emit("subscribeForDrawingList",{key:j})},T=function(){var e=Object(E.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,n=t.key,e.next=3,C.emit("createDrawing",{name:a,key:n,user:j});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=(a(76),function(e){var t=e.title,a=e.btn,n=e.color;return r.a.createElement("div",{style:{background:n&&"none"},className:"NavBar d-flex align-items-center justify-content-around p-1"},r.a.createElement("h1",{className:"text-light display-3 float-left"},t),r.a.createElement("div",{className:"d-flex align-items-center justify-content-around p-1"},null===a||void 0===a?void 0:a.map((function(e){return e}))))}),F=console.log,_=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleDraw=function(e){!function(e){C.emit("publishLine",e)}(Object(f.a)({drawingId:n.props.drawingId},e))},n.state={lines:[],info:{name:""},brushColor:"black",name:"Loading....",isFound:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e,t,a=this,n=window.location.href.split("/").pop();F(n),D.a.post("".concat(x,"/drawing/get"),{id:n}).then((function(e){var t=e.data;F(t),t.success?(a.setState({isFound:!0,name:t.name}),document.title="".concat(t.name," - Chitr")):a.setState({name:"NOT FOUND"})})),e=this.props.drawingId,t=function(e){a.setState((function(t){return{lines:[].concat(Object(h.a)(t.lines),Object(h.a)(e.lines))}}))},O.a.Observable.fromEventPattern((function(t){return C.on("drawingAll:".concat(e),t)}),(function(t){return C.off("drawingAll:".concat(e),t)})).bufferTime(100).map((function(e){return{lines:e}})).subscribe((function(e){return t(e)})),C.emit("subscribeForAllPublishLine",e),function(e,t){O.a.Observable.fromEventPattern((function(t){return C.on("drawing:".concat(e),t)}),(function(t){return C.off("drawing:".concat(e),t)})).bufferTime(100).map((function(e){return{lines:e}})).subscribe((function(e){return t(e)})),C.emit("subscribeForPublishLine",e)}(this.props.drawingId,(function(e){a.setState((function(t){return{lines:[].concat(Object(h.a)(t.lines),Object(h.a)(e.lines))}}))}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,A({title:this.state.name,btn:[r.a.createElement(m.b,{to:"/dashboard",className:"btn"},"dashBoard")]}),this.state.isFound?r.a.createElement("div",{className:"Drawing"},r.a.createElement(b,{brushColor:this.state.brushColor,onDraw:this.handleDraw,drawingEnabled:!0,lines:this.state.lines})):null)}}]),a}(n.Component),I=a(243),M=a.n(I),B=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",success:!1},n}return Object(c.a)(a,[{key:"auth",value:function(e){var t=this.state,a=t.email,n=t.password;D.a.post("".concat(x,"/auth/").concat(e),{email:a,password:n}).then((function(e){var t=e.data;t.success?(localStorage.setItem("id",btoa(t.id)),window.location.pathname="/dashboard"):alert(t.message)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Auth h-100"},A({title:"Auth Page",btn:[],color:!0}),r.a.createElement("div",{className:"container-fluid d-flex align-items-center"},this.state.success&&r.a.createElement(d.a,{to:"/dashboard"}),r.a.createElement("form",{className:"from",style:{width:"100%",maxWidth:"330px",padding:"15px",margin:"auto"},onSubmit:function(e){return e.preventDefault()}},r.a.createElement("img",{className:"mb-4",src:M.a,alt:"",width:"72",height:"72"}),r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal text-light"},"Please sign in/up"),r.a.createElement("input",{onChange:function(t){return e.setState({email:t.target.value})},value:this.state.email,name:"email",type:"email",id:"inputEmail",className:"form-control mb-2",placeholder:"Email address",required:!0,autoFocus:!0}),r.a.createElement("input",{onChange:function(t){return e.setState({password:t.target.value})},value:this.state.password,name:"password",type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),r.a.createElement("button",{onClick:function(t){return e.auth("signin")},className:"btn btn-lg btn-primary btn-block mt-2 ms-2 text-light",type:"submit"},"Sign in"),r.a.createElement("button",{onClick:function(t){return e.auth("signup")},className:"btn btn-lg btn-info btn-block mt-2 ms-2 text-light",type:"submit"},"Sign up"))))}}]),a}(n.Component),P=(a(596),a(31)),W=r.a.memo((function(){return r.a.createElement("div",{className:"Present"},r.a.createElement(P.Impress,null,r.a.createElement(P.Step,{data:{x:0,y:0}},r.a.createElement("h1",{className:"_1"},"What is Chitr?",r.a.createElement("h1",null,"Drawing Collaboration Tool for RealTime Drawing! \u270f"))),r.a.createElement(P.Step,{data:{y:1e3,scale:3}},r.a.createElement("h1",{className:"_2 "},"Which Technology is used ?"),r.a.createElement("h1",{className:"_1 _left"},r.a.createElement("h1",null,"=>"," Mongo Express React Node - MERN"),r.a.createElement("h1",null,"=>"," Socket.io - for Bidirectional communication between Server and Client"),r.a.createElement("h1",null,"=>"," Impressjs - for this Presentation"))),r.a.createElement(P.Step,{data:{x:1e3,y:-1e3,scale:5,rotateX:90,rotateY:45}},r.a.createElement("h1",{className:"_1"},"What are the Features ?",r.a.createElement("h1",null,"=>"," Two or More user can draw at same time !"),r.a.createElement("h1",null,"=>"," Use Very less Internet for  transferring the Data !"),r.a.createElement("h1",null,"=>"," User Can Save as many drawings as user want !"),r.a.createElement("h1",null,"=>"," Can Share Drawing to anyone to see and draw !"))),r.a.createElement(P.Step,{data:{x:3e3,y:3e3,scale:1,z:1e3,rotateX:90,rotateY:-45,rotateZ:45}},r.a.createElement("h1",{className:"_2"},"Requirements"),r.a.createElement("h1",{className:"_1 _left"},r.a.createElement("h1",null,"=>"," Server for backend hosting - replit.com"),r.a.createElement("h1",null,"=>"," DataBase for Save the Drawing and user auth - mongodb"),r.a.createElement("h1",null,"=>"," Server for frontend hosting - github pages"),r.a.createElement("h1",null,"=>"," Domain for website - name.com"),r.a.createElement("h1",null,"=>"," Needs Lot of Time and Peace Mind!"))),r.a.createElement(P.Step,{data:{x:5e3,y:3e3,scale:2,rotateX:90,rotateY:0,rotateZ:180}},r.a.createElement("h1",{className:"_2"},"How it Works? - (Logic)"),r.a.createElement("h1",{className:"_1 _left"},r.a.createElement("h2",null,"=>","let, we have 2 users A and B!"),r.a.createElement("h2",null,"=>","When user A tries to draw then a Packet[coordination of line] is thrown to the server using socket."),r.a.createElement("h2",null,"=>","After receiving the Packet , Server saves it and throws the Packet to all the connected drawings of the users using socket"),r.a.createElement("h2",null,"=>","After receiving the Packet at the client side or say user B , client re-renders it and canvas shows that a line is being drawn"))),r.a.createElement(P.Step,{data:{x:5e3,y:1e3,z:1e3,scale:1,rotateX:90,rotateY:90,rotateZ:180}},r.a.createElement("h1",{className:"_2"}," Source Code"),r.a.createElement("h1",null,"=>"," ",r.a.createElement("a",{target:"_blank",href:"https://github.com/GulTion/chitraFront"},"GulTion/chitraFront - Front End")),r.a.createElement("h1",null,"=>"," ",r.a.createElement("a",{target:"_blank",href:"https://github.com/GulTion/chitraBackend"},"GulTion/chitraBackend - Back End"))),r.a.createElement(P.Step,{data:{x:5e3,y:1e3,z:2e3,scale:1,rotateX:90,rotateY:90,rotateZ:90}},r.a.createElement("h1",{className:"_2"},"Work done by"),r.a.createElement("h1",{className:"_1"},r.a.createElement("h1",null,"Designer - Gulshan"),r.a.createElement("h1",null,"FrontEnd Developer - Gulshan"),r.a.createElement("h1",null,"BackEnd Developer - Gulshan"))),r.a.createElement(P.Step,{data:{x:5e3,y:1e3,z:3e3,scale:1,rotateX:180,rotateY:180,rotateZ:90}},r.a.createElement("h1",{className:"_2"},"Let's GO"))))})),X=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],o=t[1];return D.a.post("".concat(x,"/auth/check"),{key:atob(localStorage.getItem("id"))}).then((function(e){e.data.success?o(!0):o(!1)})),document.title="Chitr",r.a.createElement("div",{className:"HomePage"},A({title:"Chitr",btn:[a?r.a.createElement("button",{className:"btn",onClick:function(){localStorage.setItem("id",""),o(!1)}},"Log Out"):r.a.createElement(m.b,{to:"auth",className:"btn"},"Log In"),a&&r.a.createElement(m.b,{to:"dashboard",className:"btn"},"dashBoard")]}),r.a.createElement(W,null))},Y=a(244),G=(a(619),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={value:""},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"d-flex flex-column justify-content-center NewAdder"},r.a.createElement("input",{onBlur:function(t){return e.setState({value:t.target.value})},type:"text",placeholder:"Enter Drawing Name"}),r.a.createElement("div",{className:"btn btn-primary",onClick:function(t){e.props.onSave(e.state.value),e.props.onClose(),e.setState({value:""})}},"SAVE"))}}]),a}(n.Component)),R=console.log,U=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={drawings:[],temp:[],key:"",redirect:!1,query:"",name:"",isNew:!1,isAuth:!0,status:"Loading ..."},n}return Object(c.a)(a,[{key:"getDrawing",value:function(){var e=this;L((function(t){R("getDrawing is running"),e.setState((function(e){return{drawings:t,temp:t,status:"No Drawing Found !"}}))}))}},{key:"getAllList",value:function(){var e=this;D.a.post("".concat(x,"/drawing/all"),{id:atob(localStorage.getItem("id"))}).then((function(t){R(t);var a=t.data.list;document.title="".concat(a.length," Drawings"),e.setState((function(e){return{drawings:a,temp:a,status:"No Drawing Found !"}}))}))}},{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){var e=this;D.a.post("".concat(x,"/auth/check"),{key:atob(localStorage.getItem("id"))}).then((function(t){t.data.success?e.getAllList():e.setState({isAuth:!1})}))}},{key:"deleteDrawing",value:function(e){var t=this;!function(e,t){D.a.post(x+"/drawing/delete",{id:e,key:j}).then((function(e){t(e)}))}(e.id,(function(e){R(e),t.getAllList()}))}},{key:"DrawingElement",value:function(e){var t=this,a=e.drawing;return r.a.createElement("div",{className:"drawingCard card m-1 w-auto shadow-sm ",key:a._id},this.state.redirect&&r.a.createElement(d.a,{to:"/auth"}),r.a.createElement("div",{className:"card-body "},r.a.createElement("h5",{className:"card-title"},a.name),r.a.createElement("div",{className:"d-flex flex-row justify-content-center"},r.a.createElement(m.b,{className:"card-text btn btn-info text-light",to:"/drawings/".concat(a._id)},"Draw"),r.a.createElement("button",{onClick:function(e){return t.deleteDrawing({id:a._id})},className:"btn btn-danger mx-1"},"DELETE"))),r.a.createElement("h6",{className:"card-footer text-dimmed"},new Date(a.timestamp).toLocaleString()))}},{key:"render",value:function(){var e=this,t=this.state.temp.map((function(t){return e.DrawingElement({drawing:t,getAllList:e.getAllList})}));return r.a.createElement(r.a.Fragment,null,A({title:"DashBoard",btn:[r.a.createElement(m.b,{to:"/",className:"btn"},"< Back"),r.a.createElement("div",{className:"btn",onClick:Object(E.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({isNew:!0});case 1:case"end":return t.stop()}}),t)})))},"+ NEW")],color:!0}),r.a.createElement(Y.a,{onClose:function(){return e.setState({isNew:!1})},open:this.state.isNew},r.a.createElement(G,{onClose:function(){return e.setState({isNew:!1})},onSave:function(){var t=Object(E.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e,t){T({name:a,key:""}),e()}));case 2:return t.next=4,e.getAllList();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})),r.a.createElement("div",null,this.state.isAuth?null:r.a.createElement(d.a,{to:"/auth"}),r.a.createElement("div",{className:"container mb-2 form"},r.a.createElement("input",{type:"text",className:"form-control",id:"floatingInputGrid",placeholder:"Search",value:this.state.query,onChange:function(t){var a=t.target.value;e.setState({query:a,temp:e.state.drawings.filter((function(e){return-1!==e.name.toLowerCase().indexOf(a)}))})}})),r.a.createElement("div",{className:"d-flex flex-wrap container justify-content-center DrawingList"},t.length?t:r.a.createElement("h1",{className:"text-white"},this.state.status))))}}]),a}(n.Component),q=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"DashBoard container-fluid"},r.a.createElement(U,null))}}]),a}(r.a.Component),Z=a(57),z=a(245),H={key:""},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;return t.type,e},V=console.log,$={list:[]},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DRAWING_LIST":return new Promise((function(t,a){L((function(a){V("GET_DRAWING_LIST "+a.length),V(e.list),t(Object(f.a)(Object(f.a)({},e),{},{list:a}))}))}));default:return e}},Q=Object(Z.b)({auth:J,drawing:K}),ee=Object(Z.c)(Q,Object(Z.a)(z.a)),te="LineDraw",ae=console.log,ne=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).selectDrawing=function(e){n.setState({selectedDrawing:e})},n.state={selectedDrawing:{id:"",name:""},title:te},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){this.setState({title:te}),ae(ee.getState())}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/"},r.a.createElement(X,null)),r.a.createElement(d.b,{path:"/dashboard"},r.a.createElement(q,null)),r.a.createElement(d.b,{path:"/auth"},r.a.createElement(B,null)),r.a.createElement(d.b,{path:"/drawings/:drawingId",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{drawingId:t.match.params.drawingId,drawing:e.state.selectedDrawing}))}}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(620);i.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,a){}},[[246,1,2]]]);
//# sourceMappingURL=main.8fcf1d10.chunk.js.map