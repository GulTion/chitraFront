(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{245:function(e,t,a){e.exports=a.p+"static/media/checkbox-blank-circle-fill.0c03fec0.svg"},246:function(e,t,a){e.exports=a.p+"static/media/checkbox-blank-fill.beed5b18.svg"},247:function(e,t,a){e.exports=a.p+"static/media/cursor-fill.68139605.svg"},248:function(e,t,a){e.exports=a.p+"static/media/delete-bin-2-fill.8c6aadcd.svg"},249:function(e,t,a){e.exports=a.p+"static/media/download-cloud-2-fill.808efe79.svg"},250:function(e,t,a){e.exports=a.p+"static/media/eraser-fill.afe1087b.svg"},251:function(e,t,a){e.exports=a.p+"static/media/font-color.8cea8ca9.svg"},252:function(e,t,a){e.exports=a.p+"static/media/lock-fill.aa688ead.svg"},253:function(e,t,a){e.exports=a.p+"static/media/lock-unlock-fill.88a79c49.svg"},254:function(e,t,a){e.exports=a.p+"static/media/pencil-fill.726090f2.svg"},255:function(e,t,a){e.exports=a.p+"static/media/text.4acc259b.svg"},256:function(e,t,a){e.exports=a.p+"static/media/upload-cloud-2-fill.b62920c5.svg"},257:function(e,t,a){e.exports=a.p+"static/media/fill.f95e459e.svg"},258:function(e,t,a){e.exports=a.p+"static/media/share.d8e36b84.svg"},260:function(e,t,a){e.exports=a.p+"static/media/pen.d2648682.svg"},263:function(e,t,a){e.exports=a(642)},268:function(e,t,a){},269:function(e,t,a){},273:function(e,t){},274:function(e,t){},275:function(e,t){},276:function(e,t,a){},277:function(e,t){},617:function(e,t,a){},641:function(e,t,a){},642:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(80),o=a.n(i),c=(a(268),a(14)),l=a(15),s=a(17),u=a(16),d=a(24),m=a(7),h=(a(269),a(25)),f=a(32),g=(a(276),a(43)),p=a.n(g),v=a(38),b=a.n(v),w=a(58),E=a(244),y=a.n(E),k=a(106),C=a.n(k),x="https://chitraBackend.gultion.repl.co",N=a(19),O=a.n(N),S=atob(localStorage.getItem("id")),D=y()(x),j=!0,T=function(e){D.on("drawingList",(function(t){return e(t)})),D.emit("subscribeForDrawingList",{key:S})},A=function(){var e=Object(w.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,n=t.key,e.next=3,D.emit("createDrawing",{name:a,key:n,user:S});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(e,t){D.emit("pushChange",{drawingId:e,data:t})},_=a(37),L=a(245),P=a.n(L),M=a(246),F=a.n(M),W=a(247),Y=a.n(W),B=a(248),R=a.n(B),X=a(249),G=a.n(X),U=a(250),J=a.n(U),q=a(251),z=a.n(q),H=a(252),Z=a.n(H),V=a(253),K=a.n(V),$=a(254),Q=a.n($),ee=a(255),te=a.n(ee),ae=a(256),ne=a.n(ae),re=a(257),ie=a.n(re),oe=a(258),ce=a.n(oe),le={Circle:P.a,Rect:F.a,Cursor:Y.a,Remove:R.a,Download:G.a,Erase:J.a,FontColor:z.a,Fill:ie.a,Share:ce.a,Lock:Z.a,Unlock:K.a,Pencil:Q.a,Text:te.a,Save:ne.a},se=window.location.href.split("/").pop(),ue={addMain:function(e){var t=document.canvas;I(se,Object(h.a)(Object(h.a)({},e.toJSON(["id"])),{},{cmd:"add"})),t.add(e),t.renderAll()},addRect:function(){var e=new f.fabric.Rect({top:100,left:100,width:100,height:100,fill:"red",id:p()(),padding:3,strokeWidth:3});this.addMain(e)},addCircle:function(){var e=new f.fabric.Circle({top:100,left:100,radius:50,fill:"blue",id:p()(),strokeWidth:3});this.addMain(e)},addText:function(){var e=new f.fabric.IText("Enter Text",{top:100,left:100,id:p()()});e.on("changed",(function(t){var a=e.id;I(se,{text:e.text,id:a,cmd:"text"})})),this.addMain(e)},addDraw:function(e){var t=e.setDraw,a=document.canvas;t((function(e){return!e})),a.isDrawingMode=!a.isDrawingMode},delete:function(){var e=document.canvas,t=e.getActiveObject();t?(I(se,{id:t.id,cmd:"delete"}),e.remove(t)):e.getObjects().forEach((function(t){e.remove(t)})),e.renderAll()},colorChange:function(e){var t=document.canvas;if(t){var a=t.getActiveObject();a?(a.set({fill:e.target.value}),I(se,{id:a.id,fill:e.target.value,cmd:"modified"})):(t.set({backgroundColor:e.target.value}),I(se,{fill:e.target.value,cmd:"changeCanvasColor"})),t.renderAll()}}},de=function(e){var t=e.onChange,a=Object(n.useState)([1,2,5,7].findIndex((function(e){return e===document.canvas.freeDrawingBrush.width}))),i=Object(_.a)(a,2),o=i[0],c=i[1];return r.a.createElement("div",{className:"__Tab"},[1,2,5,7].map((function(e,a){return r.a.createElement("div",{onClick:function(){c(a),t(a),document.canvas.freeDrawingBrush.width=e},title:o===a?"Selected Pencil Size":"Select ".concat(e," Size"),className:"_Tab ".concat(o===a&&"_Tab_Active")},e)})))};var me=function(e){e.isAuth,e.isValid;var t=Object(n.useState)(!1),a=Object(_.a)(t,2),i=a[0],o=a[1],c=Object(n.useRef)();return r.a.createElement("div",{className:"ToolBar"},r.a.createElement("div",{title:"Add a Rectangle",className:"Tab",onClick:function(){return ue.addRect()}},r.a.createElement("img",{alt:"img",src:le.Rect})),r.a.createElement("div",{title:"Add a Circle",className:"Tab",onClick:function(){return ue.addCircle()}},r.a.createElement("img",{alt:"img",src:le.Circle})),r.a.createElement("div",{title:"Add a Text",className:"Tab",onClick:function(){return ue.addText()}},r.a.createElement("img",{alt:"img",src:le.Text})),r.a.createElement("div",{title:i?"Use Default Cursor":"Draw using Pencil",className:"Tab",onClick:function(){return ue.addDraw({setDraw:function(e){return o(e)}})}},r.a.createElement("img",{alt:"img",src:i?le.Cursor:le.Pencil})),i&&r.a.createElement(de,{onChange:function(){}}),r.a.createElement("div",{className:"Tab",title:"Select the Shape, and Click me to Delete the Shape or Pencil Draw or Text",onClick:function(){return ue.delete({setDraw:function(e){return o(e)}})}},r.a.createElement("img",{alt:"img",src:le.Remove})),r.a.createElement("div",{className:"Tab",title:"Select the Shape, and Click me to Change color of Shape or Text or fill the Draw",onClick:function(){c.current.click()}},r.a.createElement("img",{alt:"img",src:le.Fill}),r.a.createElement("input",{ref:c,style:{width:"0px",height:"0px",border:"0px",opacity:"0"},type:"color",onChange:ue.colorChange})),r.a.createElement("div",{title:"Save the Current State of Drawing to Server",className:"Tab",onClick:function(){!function(e){var t=e.drawingId,a=e.json;D.emit("saveChitr",{drawingId:t,json:a,key:atob(localStorage.getItem("id"))})}({drawingId:se,json:document.canvas.toJSON(["id"])})}},r.a.createElement("img",{alt:"img",src:le.Save})),r.a.createElement("div",{className:"Tab",title:"Download the Current Drawing on Your Device",onClick:function(){var e=document.createElement("a");e.href=document.canvas.toDataURL({format:"jpeg",quality:1}),e.download="canvas.png",e.click()}},r.a.createElement("img",{alt:"img",src:le.Download})),r.a.createElement("div",{className:"Tab",title:"Button to Share the Current Drawing to Others",onClick:function(){var e=document.createElement("textarea");e.value=document.location.href,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),alert("URL is Copied in Clipboard , paste to share to anybody !")}},r.a.createElement("img",{alt:"img",src:le.Share})))},he=console.log,fe=window.location.href.split("/").pop();var ge=function(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){var t=function(){var e=document.body.clientHeight-document.querySelector(".ToolBar").getBoundingClientRect().height,t=document.body.clientWidth,a=t/e;return he({realWidth:t,realHeight:e}),1.77777777<a?{height:.9*e,width:1.777777777*e*.9}:{height:t/1.777777777*.9,width:.9*t}},a=new f.fabric.Canvas(e.current,{width:t().width,height:t().height,backgroundColor:"white"});document.canvas=a;var n,r=function(){return Math.floor(256*Math.random())};document.color="rgb(".concat(r(),",").concat(r(),",").concat(r(),")"),e.current.style.border="3px solid ".concat(document.color),n=fe,D.on("giveMeCanvas:".concat(n),(function(e){console.log("data"),D.emit("takeMyCanvas",{id:e,canvas:document.canvas.toJSON(["id"])})})),D.on("hereMyCanvas:".concat(n),(function(e){j&&("server"===e.from?document.canvas.loadFromJSON(e.json):"socket"===e.from&&(document.canvas.loadFromJSON(e.json),j=!1))})),D.emit("subscribeForFabric",{drawingId:n}),a.on("object:modified",(function(e){var t=e.target.toJSON(["id"]),a=t.id,n=t.type;I(fe,{id:a,selectable:!0,stroke:"path"===n?"black":"",cmd:"modified"})})),a.on("object:moving",(function(e){var t=e.target.toJSON(["id"]),a=t.top,n=t.left,r=t.id;I(fe,{id:r,top:a,left:n,selectable:!1,stroke:document.color,cmd:"modified"})})),a.on("object:scaling",(function(e){var t=e.target.toJSON(["id"]),a=t.scaleX,n=t.scaleY,r=t.top,i=t.left,o=t.id;I(fe,{scaleX:a,top:r,left:i,scaleY:n,selectable:!1,stroke:document.color,id:o,cmd:"modified"})})),a.on("object:rotating",(function(e){var t=e.target.toJSON(["id"]),a=t.angle,n=t.top,r=t.left,i=t.id;I(fe,{angle:a,id:i,top:n,selectable:!1,stroke:document.color,left:r,cmd:"modified"})})),a.on("path:created",(function(e){e.path.set({id:p()()}),he(e.path),I(fe,Object(h.a)(Object(h.a)({},e.path.toJSON(["id"])),{},{cmd:"add"}))})),function(e,t){D.on("pullChange:".concat(e),(function(e){t(e)}))}(fe,(function(e){he(e),"add"===e.cmd?"rect"===e.type?a.add(new f.fabric.Rect(e)):"circle"===e.type?a.add(new f.fabric.Circle(e)):"i-text"===e.type?a.add(new f.fabric.IText(e.text,e)):"path"===e.type&&a.add(new f.fabric.Path(e.path,e)):"modified"===e.cmd?a._objects.forEach((function(t){t.id===e.id&&t.set(e)})):"text"===e.cmd?a._objects.forEach((function(t){t.id===e.id&&t.set({text:e.text})})):"delete"===e.cmd?a._objects.forEach((function(t){t.id===e.id&&a.remove(t)})):"changeCanvasColor"===e.cmd&&a.set({backgroundColor:e.fill}),a.renderAll()})),a.on("mouse:wheel",(function(e){var t=e.e.deltaY,n=a.getZoom();(n*=Math.pow(.999,t))>20&&(n=20),n<.01&&(n=.01),a.zoomToPoint({x:e.e.offsetX,y:e.e.offsetY},n),e.e.preventDefault(),e.e.stopPropagation();var r=this.viewportTransform;n<.4?(r[4]=200-1e3*n/2,r[5]=200-1e3*n/2):(r[4]>=0?r[4]=0:r[4]<a.getWidth()-1e3*n&&(r[4]=a.getWidth()-1e3*n),r[5]>=0?r[5]=0:r[5]<a.getHeight()-1e3*n&&(r[5]=a.getHeight()-1e3*n))})),a.on("mouse:down",(function(e){var t=e.e;!0===t.altKey&&(this.isDragging=!0,this.selection=!1,this.lastPosX=t.clientX,this.lastPosY=t.clientY)})),a.on("mouse:move",(function(e){if(this.isDragging){var t=e.e,a=this.viewportTransform;a[4]+=t.clientX-this.lastPosX,a[5]+=t.clientY-this.lastPosY,this.requestRenderAll(),this.lastPosX=t.clientX,this.lastPosY=t.clientY}})),a.on("mouse:up",(function(e){this.setViewportTransform(this.viewportTransform),this.isDragging=!1,this.selection=!0})),window.onload=window.onresize=function(){a.setDimensions({height:t().height,width:t().width})},O.a.post("".concat(x,"/drawing/get"),{id:fe}).then((function(e){var t=e.data;he(t),t.success?document.title="".concat(t.name," - Chitr"):(document.title="NOT FOUND DRAWING",document.querySelector(".NewCanvas").innerHTML="<h1 style='margin:auto'>NOT FOUND DRAWING</h1>")}))}),[]),r.a.createElement("div",{className:"NewCanvas"},r.a.createElement(me,null),r.a.createElement("canvas",{id:"_newCanvas",style:{border:"2px solid ".concat(document.color),width:"100%",height:"100%"},ref:e}))},pe=a(61),ve=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={lastLength:0},e.handleOnMouseDown=function(t){if(e.props.drawingEnabled){var a=e.node.getBoundingClientRect();e.ctx.beginPath(),e.lastX=t.clientX-a.left,e.lastY=t.clientY-a.top,e.drawing=!0}},e.handleOnMouseMove=function(t){if(e.drawing){var a=e.node.getBoundingClientRect(),n=t.clientX-a.left,r=t.clientY-a.top;e.draw(e.lastX,e.lastY,n,r),e.update(),e.props.onDraw&&e.props.onDraw({from:{x:e.lastX,y:e.lastY},to:{x:n,y:r},brushColor:e.props.brushColor,linewidth:e.props.lineWidth}),e.lastX=n,e.lastY=r}},e.handleonMouseUp=function(){e.drawing=!1},e.handleOnTouchDown=function(t){if(e.props.drawingEnabled){var a=Object(_.a)(t.touches,1)[0],n=e.node.getBoundingClientRect();e.ctx.beginPath(),e.lastX=a.clientX-n.left,e.lastY=a.clientY-n.top,e.drawing=!0,t.preventDefault()}},e.handleOnTouchMove=function(t){if(e.drawing){var a=Object(_.a)(t.touches,1)[0],n=e.node.getBoundingClientRect(),r=a.clientX-n.left,i=a.clientY-n.top;e.draw(e.lastX,e.lastY,r,i),e.update(),e.props.onDraw&&e.props.onDraw({from:{x:e.lastX,y:e.lastY},to:{x:r,y:i},brushColor:e.props.brushColor,linewidth:e.props.lineWidth}),e.lastX=r,e.lastY=i}t.preventDefault()},e.handleOnTouchUp=function(){e.drawing=!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.node;e.addEventListener("touchstart",this.handleOnTouchDown,!1),e.addEventListener("touchmove",this.handleOnTouchMove,!1),e.addEventListener("touchend",this.handleOnTouchUp,!1),e.style.width="100%",e.style.height="100%",e.width=e.offsetWidth,e.height=e.offsetHeight,this.ctx=e.getContext("2d")}},{key:"componentWillReceiveProps",value:function(e){if(e.lines&&e.lines.length>this.state.lastLength){for(var t=this.state.lastLength;t<e.lines.length;t+=1){var a=e.lines[t];this.draw(a.from.x,a.from.y,a.to.x,a.to.y)}this.update(),this.setState({lastLength:e.lines.length})}}},{key:"update",value:function(){this.ctx.stroke()}},{key:"draw",value:function(e,t,a,n){this.ctx.strokeStyle=this.props.brushColor,this.ctx.lineWidth=this.props.lineWidth,this.ctx.moveTo(e,t),this.ctx.lineTo(a,n)}},{key:"render",value:function(){var e=this;return r.a.createElement("canvas",{ref:function(t){return e.node=t},style:this.props.canvasStyle,onMouseDown:this.handleOnMouseDown,onMouseMove:this.handleOnMouseMove,onMouseUp:this.handleonMouseUp})}}]),a}(n.Component);ve.defaultProps={brushColor:"#000000",lineWidth:2,canvasStyle:{backgroundColor:"#FFFFFF",cursor:"pointer"},drawingEnabled:!1,lines:[]};var be=ve,we=(a(78),function(e){var t=e.title,a=e.btn,n=e.color;return r.a.createElement("div",{style:{background:n&&"none"},className:"NavBar d-flex align-items-center justify-content-around p-1"},r.a.createElement("h1",{className:"text-light display-3 float-left"},t),r.a.createElement("div",{className:"d-flex align-items-center justify-content-around p-1"},null===a||void 0===a?void 0:a.map((function(e){return e}))))}),Ee=console.log,ye=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleDraw=function(e){!function(e){D.emit("publishLine",e)}(Object(h.a)({drawingId:n.props.drawingId},e))},n.state={lines:[],info:{name:""},brushColor:"black",name:"Loading....",isFound:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e,t,a=this,n=window.location.href.split("/").pop();Ee(n),O.a.post("".concat(x,"/drawing/get"),{id:n}).then((function(e){var t=e.data;Ee(t),t.success?(a.setState({isFound:!0,name:t.name}),document.title="".concat(t.name," - Chitr")):a.setState({name:"NOT FOUND"})})),e=this.props.drawingId,t=function(e){a.setState((function(t){return{lines:[].concat(Object(pe.a)(t.lines),Object(pe.a)(e.lines))}}))},C.a.Observable.fromEventPattern((function(t){return D.on("drawingAll:".concat(e),t)}),(function(t){return D.off("drawingAll:".concat(e),t)})).bufferTime(100).map((function(e){return{lines:e}})).subscribe((function(e){return t(e)})),D.emit("subscribeForAllPublishLine",e),function(e,t){C.a.Observable.fromEventPattern((function(t){return D.on("drawing:".concat(e),t)}),(function(t){return D.off("drawing:".concat(e),t)})).bufferTime(100).map((function(e){return{lines:e}})).subscribe((function(e){return t(e)})),D.emit("subscribeForPublishLine",e)}(this.props.drawingId,(function(e){a.setState((function(t){return{lines:[].concat(Object(pe.a)(t.lines),Object(pe.a)(e.lines))}}))}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,we({title:this.state.name,btn:[r.a.createElement(d.b,{to:"/dashboard",className:"btn"},"dashBoard")]}),this.state.isFound?r.a.createElement("div",{className:"Drawing"},r.a.createElement(be,{brushColor:this.state.brushColor,onDraw:this.handleDraw,drawingEnabled:!0,lines:this.state.lines})):null)}}]),a}(n.Component),ke=a(260),Ce=a.n(ke),xe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",success:!1},n}return Object(l.a)(a,[{key:"auth",value:function(e){var t=this.state,a=t.email,n=t.password;O.a.post("".concat(x,"/auth/").concat(e),{email:a,password:n}).then((function(e){var t=e.data;t.success?(localStorage.setItem("id",btoa(t.id)),window.location.pathname="/dashboard"):alert(t.message)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Auth h-100"},we({title:"Auth Page",btn:[],color:!0}),r.a.createElement("div",{className:"container-fluid d-flex align-items-center"},this.state.success&&r.a.createElement(m.a,{to:"/dashboard"}),r.a.createElement("form",{className:"from",style:{width:"100%",maxWidth:"330px",padding:"15px",margin:"auto"},onSubmit:function(e){return e.preventDefault()}},r.a.createElement("img",{className:"mb-4",src:Ce.a,alt:"",width:"72",height:"72"}),r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal text-light"},"Please sign in/up"),r.a.createElement("input",{onChange:function(t){return e.setState({email:t.target.value})},value:this.state.email,name:"email",type:"email",id:"inputEmail",className:"form-control mb-2",placeholder:"Email address",required:!0,autoFocus:!0}),r.a.createElement("input",{onChange:function(t){return e.setState({password:t.target.value})},value:this.state.password,name:"password",type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:!0}),r.a.createElement("button",{onClick:function(t){return e.auth("signin")},className:"btn btn-lg btn-primary btn-block mt-2 ms-2 text-light",type:"submit"},"Sign in"),r.a.createElement("button",{onClick:function(t){return e.auth("signup")},className:"btn btn-lg btn-info btn-block mt-2 ms-2 text-light",type:"submit"},"Sign up"))))}}]),a}(n.Component),Ne=(a(617),a(33)),Oe=r.a.memo((function(){return r.a.createElement("div",{className:"Present"},r.a.createElement(Ne.Impress,null,r.a.createElement(Ne.Step,{data:{x:0,y:0}},r.a.createElement("h1",{className:"_2 "},"What is Chitr?"),r.a.createElement("h1",{className:"_1"},r.a.createElement("h1",null,"Drawing Collaboration Tool for RealTime Drawing! \u270f"))),r.a.createElement(Ne.Step,{data:{y:1e3,scale:3}},r.a.createElement("h1",{className:"_2 "},"Which Technology is used ?"),r.a.createElement("h1",{className:"_1 _left"},r.a.createElement("h1",null,"=>"," Mongo Express React Node - MERN"),r.a.createElement("h1",null,"=>"," Socket.io - for Bidirectional communication between Server and Client"),r.a.createElement("h1",null,"=>"," Impressjs - for this Presentation"))),r.a.createElement(Ne.Step,{data:{x:1e3,y:-1e3,scale:5,rotateX:90,rotateY:45}},r.a.createElement("h1",{className:"_2 "}," What are the Features ?"),r.a.createElement("h1",{className:"_1 _left"},r.a.createElement("h1",null,"=>"," Two or More user can draw at same time !"),r.a.createElement("h1",null,"=>"," Use Very less Internet for  transferring the Data !"),r.a.createElement("h1",null,"=>"," User Can Save as many drawings as user want !"),r.a.createElement("h1",null,"=>"," Can Share Drawing to anyone to see and draw !"))),r.a.createElement(Ne.Step,{data:{x:3e3,y:3e3,scale:1,z:1e3,rotateX:90,rotateY:-45,rotateZ:45}},r.a.createElement("h1",{className:"_2"},"Requirements"),r.a.createElement("h1",{className:"_1 _left"},r.a.createElement("h1",null,"=>"," Server for backend hosting - replit.com"),r.a.createElement("h1",null,"=>"," DataBase for Saving the Drawing and user auth - mongodb"),r.a.createElement("h1",null,"=>"," Server for frontend hosting - github pages"),r.a.createElement("h1",null,"=>"," Domain for website - name.com"),r.a.createElement("h1",null,"=>"," Needs Lot of Time and Peace of Mind!"))),r.a.createElement(Ne.Step,{data:{x:5e3,y:3e3,scale:2,rotateX:90,rotateY:0,rotateZ:180}},r.a.createElement("h1",{className:"_2"},"How it Works? - (Logic)"),r.a.createElement("h1",{className:"_1 _left"},r.a.createElement("h2",null,"=>","let, we have 2 users A and B! "),r.a.createElement("h2",null,"=>","When user A tries to draw then a Packet[coordination of line] is thrown to the server using socket. "),r.a.createElement("h2",null,"=>","After receiving the Packet , Server saves it and throws the Packet to all the connected drawings of the users using socket"),r.a.createElement("h2",null,"=>","After receiving the Packet at the client side or say user B , client re-renders it and canvas shows that a line is being drawn"))),r.a.createElement(Ne.Step,{data:{x:5e3,y:1e3,z:1e3,scale:1,rotateX:90,rotateY:90,rotateZ:180}},r.a.createElement("h1",{className:"_2"}," Source Code"),r.a.createElement("h1",null,"=>"," ",r.a.createElement("a",{target:"_blank",href:"https://github.com/GulTion/chitraFront"},"GulTion/chitraFront - Front End")),r.a.createElement("h1",null,"=>"," ",r.a.createElement("a",{target:"_blank",href:"https://github.com/GulTion/chitraBackend"},"GulTion/chitraBackend - Back End"))),r.a.createElement(Ne.Step,{data:{x:5e3,y:1e3,z:2e3,scale:1,rotateX:90,rotateY:90,rotateZ:90}},r.a.createElement("h1",{className:"_2"},"Work done by"),r.a.createElement("h1",{className:"_1"},r.a.createElement("h1",null,"Designer - Gulshan"),r.a.createElement("h1",null,"FrontEnd Developer - Gulshan"),r.a.createElement("h1",null,"BackEnd Developer - Gulshan"))),r.a.createElement(Ne.Step,{data:{x:5e3,y:1e3,z:3e3,scale:1,rotateX:180,rotateY:180,rotateZ:90}},r.a.createElement("h1",{className:"_2"},"Let's GO"))))})),Se=function(){var e=Object(n.useState)(!1),t=Object(_.a)(e,2),a=t[0],i=t[1];return O.a.post("".concat(x,"/auth/check"),{key:atob(localStorage.getItem("id"))}).then((function(e){e.data.success?i(!0):i(!1)})),document.title="Chitr",r.a.createElement("div",{className:"HomePage"},we({title:"Chitr",btn:[a?r.a.createElement("button",{className:"btn",onClick:function(){localStorage.setItem("id",""),i(!1)}},"Log Out"):r.a.createElement(d.b,{to:"auth",className:"btn"},"Log In"),a&&r.a.createElement(d.b,{to:"dashboard",className:"btn"},"dashBoard")]}),r.a.createElement(Oe,null))},De=a(261),je=(a(640),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={value:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"d-flex flex-column justify-content-center NewAdder"},r.a.createElement("input",{onBlur:function(t){return e.setState({value:t.target.value})},type:"text",placeholder:"Enter Drawing Name"}),r.a.createElement("div",{className:"btn btn-primary",onClick:function(t){e.props.onSave(e.state.value),e.props.onClose(),e.setState({value:""})}},"SAVE"))}}]),a}(n.Component)),Te=console.log,Ae=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={drawings:[],temp:[],key:"",redirect:!1,query:"",name:"",isNew:!1,isAuth:!0,status:"Loading ..."},n}return Object(l.a)(a,[{key:"getDrawing",value:function(){var e=this;T((function(t){Te("getDrawing is running"),e.setState((function(e){return{drawings:t,temp:t,status:"No Drawing Found !"}}))}))}},{key:"getAllList",value:function(){var e=this;O.a.post("".concat(x,"/drawing/all"),{id:atob(localStorage.getItem("id"))}).then((function(t){Te(t);var a=t.data.list;document.title="".concat(a.length," Drawings"),e.setState((function(e){return{drawings:a,temp:a,status:"No Drawing Found !"}}))}))}},{key:"componentWillMount",value:function(){var e=this;O.a.post("".concat(x,"/auth/check"),{key:atob(localStorage.getItem("id"))}).then((function(t){t.data.success?e.getAllList():e.setState({isAuth:!1})}))}},{key:"deleteDrawing",value:function(e){var t=this;!function(e,t){O.a.post(x+"/drawing/delete",{id:e,key:S}).then((function(e){t(e)}))}(e.id,(function(e){Te(e),t.getAllList()}))}},{key:"DrawingElement",value:function(e){var t=this,a=e.drawing;return r.a.createElement("div",{className:"drawingCard card m-1 w-auto shadow-sm ",key:a._id},this.state.redirect&&r.a.createElement(m.a,{to:"/auth"}),r.a.createElement("div",{className:"card-body "},r.a.createElement("h5",{className:"card-title"},a.name),r.a.createElement("div",{className:"d-flex flex-row justify-content-center"},r.a.createElement(d.b,{className:"card-text btn btn-info text-light",to:"/new/drawings/".concat(a._id),target:"_blank"},"Draw"),r.a.createElement("button",{onClick:function(e){return t.deleteDrawing({id:a._id})},className:"btn btn-danger mx-1"},"DELETE"))),r.a.createElement("h6",{className:"card-footer text-dimmed"},new Date(a.timestamp).toLocaleString()))}},{key:"render",value:function(){var e=this,t=this.state.temp.map((function(t){return e.DrawingElement({drawing:t,getAllList:e.getAllList})}));return r.a.createElement(r.a.Fragment,null,we({title:"DashBoard",btn:[r.a.createElement(d.b,{to:"/",className:"btn"},"< Back"),r.a.createElement("div",{className:"btn",onClick:Object(w.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({isNew:!0});case 1:case"end":return t.stop()}}),t)})))},"+ NEW")],color:!0}),r.a.createElement(De.a,{onClose:function(){return e.setState({isNew:!1})},open:this.state.isNew},r.a.createElement(je,{onClose:function(){return e.setState({isNew:!1})},onSave:function(){var t=Object(w.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e,t){A({name:a,key:""}),e()}));case 2:return t.next=4,e.getAllList();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})),r.a.createElement("div",null,this.state.isAuth?null:r.a.createElement(m.a,{to:"/auth"}),r.a.createElement("div",{className:"container mb-2 form"},r.a.createElement("input",{type:"text",className:"form-control",id:"floatingInputGrid",placeholder:"Search",value:this.state.query,onChange:function(t){var a=t.target.value;e.setState({query:a,temp:e.state.drawings.filter((function(e){return-1!==e.name.toLowerCase().indexOf(a)}))})}})),r.a.createElement("div",{className:"d-flex flex-wrap container justify-content-center DrawingList"},t.length?t:r.a.createElement("h1",{className:"text-white"},this.state.status))))}}]),a}(n.Component),Ie=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"DashBoard container-fluid"},r.a.createElement(Ae,null))}}]),a}(r.a.Component),_e=a(60),Le=a(262),Pe={key:""},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Fe=console.log,We={list:[]},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DRAWING_LIST":return new Promise((function(t,a){T((function(a){Fe("GET_DRAWING_LIST "+a.length),Fe(e.list),t(Object(h.a)(Object(h.a)({},e),{},{list:a}))}))}));default:return e}},Be=Object(_e.b)({auth:Me,drawing:Ye}),Re=Object(_e.c)(Be,Object(_e.a)(Le.a)),Xe="LineDraw",Ge=console.log,Ue=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).selectDrawing=function(e){n.setState({selectedDrawing:e})},n.state={selectedDrawing:{id:"",name:""},title:Xe},n}return Object(l.a)(a,[{key:"componentWillMount",value:function(){this.setState({title:Xe}),Ge(Re.getState())}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(Se,null)),r.a.createElement(m.b,{path:"/dashboard"},r.a.createElement(Ie,null)),r.a.createElement(m.b,{path:"/auth"},r.a.createElement(xe,null)),r.a.createElement(m.b,{path:"/drawings/new/:drawingId",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye,{drawingId:t.match.params.drawingId,drawing:e.state.selectedDrawing}))}}),r.a.createElement(m.b,{path:"/new/drawings/:drawingId",render:function(e){return r.a.createElement(ge,{drawingId:e.match.params.drawingId})}}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(641);o.a.render(r.a.createElement(Ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},78:function(e,t,a){}},[[263,1,2]]]);
//# sourceMappingURL=main.acd35983.chunk.js.map