(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{213:function(e,t,n){e.exports=n(548)},218:function(e,t,n){},219:function(e,t,n){},548:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(207),c=n.n(i),o=(n(218),n(23)),l=n(24),s=n(26),u=n(25),m=n(27),d=n(62),f=n(6),b=(n(219),n(208)),w=n.n(b),h=n(88),g=n.n(h),p=(console.log,w()("https://chitraBackend.gultion.repl.co/")),v=function(e){var t=e.name,n=e.key;p.emit("createDrawing",{name:t,key:n})},E=function(e){p.emit("publishLine",e)},D=n(30);function O(e){var t=Object(a.useState)(0),n=Object(D.a)(t,2),i=n[0],c=n[1],o=Object(a.useState)(""),l=Object(D.a)(o,2),s=l[0],u=l[1],m=Object(a.useState)(""),d=Object(D.a)(m,2),f=d[0],b=d[1];return r.a.createElement("div",{className:"NewAdd"},r.a.createElement("div",{className:"row"},r.a.createElement("select",{name:"",id:"",className:"type",onChange:function(e){c(e.target.value)}},r.a.createElement("option",{value:0},"Select Permissions"),[{text:"Public can VIEW, EDIT AND DELETE",value:1},{text:"Public can VIEW, EDIT",value:2},{text:"Public can VIEW",value:3},{text:"Public can't do anything",value:4}].map((function(e){return r.a.createElement("option",{value:e.value},e.text)}))),""==f||""==s&&1!=i?null:r.a.createElement("button",{className:"save",onClick:function(t){t.preventDefault(),v({name:f,key:s}),u(""),b(""),e.save()}},"SAVE")),i>1?r.a.createElement("input",{value:s,onChange:function(e){return u(e.target.value)},type:"text",placeholder:"Password of Drawing",className:"key"}):null,0!=i?r.a.createElement("input",{value:f,onChange:function(e){return b(e.target.value)},type:"text",placeholder:"Name of Drawing",className:"name"}):null)}var j=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",isNew:!1,submitButtonTitle:"NEW"},n.handleSubmit=function(e){e.preventDefault(),v({name:n.state.name}),n.setState({name:""})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"DrawingForm"},r.a.createElement("div",{className:"form"},r.a.createElement("input",{value:this.state.name,type:"text",placeholder:"Search Drawing",onChange:function(t){return e.setState({name:t.target.value})}}),r.a.createElement("input",{type:"submit",value:this.state.submitButtonTitle,onClick:function(t){e.setState({submitButtonTitle:e.state.isNew?"NEW":"CANCEL",isNew:!e.state.isNew})}})),this.state.isNew?r.a.createElement(O,{save:function(){return e.setState({isNew:!1,submitButtonTitle:e.state.isNew?"NEW":"CANCEL"})}}):null)}}]),t}(a.Component),N=n(29),y=n(553),S=n(209);y.a.addDefaultLocale(S);new y.a("en-US");var k=console.log,C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={drawings:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;e=function(e){k("Getting List"),t.setState((function(t){return{drawings:e}}))},p.on("drawingList",(function(t){return e(t)})),p.emit("subscribeForDrawingList"),function(e){p.on("drawing",(function(t){return e(t)})),p.emit("subscribeForDrawings")}((function(e){k("drawing is added"),k(e),"insert"==e.operationType&&t.setState((function(t){return{drawings:[e.fullDocument].concat(Object(N.a)(t.drawings))}})),"delete"==e.operationType&&t.setState((function(t){return{drawings:t.drawings.filter((function(t){return t._id!==e.documentKey._id}))}}))}))}},{key:"render",value:function(){var e=this,t=this.state.drawings.map((function(t){return r.a.createElement("div",{className:"card m-1 w-auto shadow-sm",key:t._id,onClick:function(n){e.props.onSelectDrawing(t),k(t)}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.name),r.a.createElement(d.b,{className:"card-text btn btn-info text-light",to:"/".concat(t._id)},"Draw")),r.a.createElement("h6",{className:"card-footer text-dimmed"},new Date(t.timestamp).toLocaleString()))}));return r.a.createElement("div",{className:"d-flex flex-wrap justify-content-center"},t.length?t:r.a.createElement("h1",null,"LOADING ..."))}}]),t}(a.Component),I=n(212),T=n(211),L=n.n(T),x=console,A=x.log,P=(x.table,function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleDraw=function(e){E(Object(I.a)({drawingId:n.props.drawingId},e))},n.state={lines:[],info:{name:""},brushColor:"black"},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t,n=this;e=this.props.drawingId,t=function(e){n.setState((function(t){return{lines:[].concat(Object(N.a)(t.lines),Object(N.a)(e.lines))}}))},g.a.Observable.fromEventPattern((function(t){return p.on("drawingAll:".concat(e),t)}),(function(t){return p.off("drawingAll:".concat(e),t)})).bufferTime(100).map((function(e){return{lines:e}})).subscribe((function(e){return t(e)})),p.emit("subscribeForAllPublishLine",e),function(e,t){g.a.Observable.fromEventPattern((function(t){return p.on("drawing:".concat(e),t)}),(function(t){return p.off("drawing:".concat(e),t)})).bufferTime(100).map((function(e){return{lines:e}})).subscribe((function(e){return t(e)})),p.emit("subscribeForPublishLine",e)}(this.props.drawingId,(function(e){n.setState((function(t){return{lines:[].concat(Object(N.a)(t.lines),Object(N.a)(e.lines))}}))})),function(e,t){p.on("takeDrawing",(function(e){return t(e)})),p.emit("getDrawingById",e)}(window.location.pathname.split("/")[1],(function(e){A(e),A(window.location.pathname.split("/")[1]),n.setState({info:e})}))}},{key:"render",value:function(){return this.props.drawing?r.a.createElement("div",{className:"Drawing"},this.state.info.name,r.a.createElement(L.a,{brushColor:this.state.brushColor,onDraw:this.handleDraw,drawingEnabled:!0,lines:this.state.lines})):null}}]),t}(a.Component));var W={TITLE:"LineDraw"},B=(console.log,function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).selectDrawing=function(e){n.setState({selectedDrawing:e})},n.state={selectedDrawing:{id:"",name:""},title:W.TITLE},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({title:W.TITLE})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/"},r.a.createElement("h1",null,this.state.title),r.a.createElement(j,null),r.a.createElement(C,{onSelectDrawing:function(t){e.selectDrawing(t)}})),r.a.createElement(f.a,{path:"/:drawingId",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,e.state.selectedDrawing.name),r.a.createElement(P,{drawingId:t.match.params.drawingId,drawing:e.state.selectedDrawing}))}}))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[213,1,2]]]);
//# sourceMappingURL=main.d6f89b4d.chunk.js.map