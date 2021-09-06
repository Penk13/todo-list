(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(11),i=n.n(s),l=(n(37),n(38),n(12)),o=n(13),r=n(16),d=n(15),m=n(14),u=n(20),h=n(78),j=n(70),b=n(71),p=n(72),f=n(73),v=n(74),x=n(75),O=n(76),g=n(77),C=n(3),k=function(e){Object(r.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,c=t.value;"checkbox"===e.target.type&&(c=e.target.checked);var s=Object(u.a)(Object(u.a)({},a.state.activeItem),{},Object(m.a)({},n,c));a.setState({activeItem:s})},a.state={activeItem:a.props.activeItem},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.toggle,a=t.onSave;return Object(C.jsxs)(h.a,{isOpen:!0,toggle:n,children:[Object(C.jsx)(j.a,{toggle:n,children:" Task Item "}),Object(C.jsx)(b.a,{children:Object(C.jsxs)(p.a,{children:[Object(C.jsxs)(f.a,{children:[Object(C.jsx)(v.a,{for:"title",children:"Title"}),Object(C.jsx)(x.a,{type:"text",name:"title",value:this.state.activeItem.title,onChange:this.handleChange,placeholder:"Enter Task Title"})]}),Object(C.jsx)(f.a,{check:!0,children:Object(C.jsxs)(v.a,{for:"completed",children:[Object(C.jsx)(x.a,{type:"checkbox",name:"completed",checked:this.state.activeItem.completed,onChange:this.handleChange}),"Completed"]})})]})}),Object(C.jsx)(O.a,{children:Object(C.jsx)(g.a,{color:"success",onClick:function(){return a(e.state.activeItem)},children:"Save"})})]})}}]),n}(c.a.Component),I=n(10),N=n.n(I);N.a.defaults.xsrfCookieName="csrftoken",N.a.defaults.xsrfHeaderName="X-CSRFToken";var S=function(e){Object(r.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).refreshList=function(){N.a.get("api/tasks/").then((function(e){return a.setState({taskList:e.data})})).catch((function(e){return console.log(e)}))},a.displayCompleted=function(e){return e?a.setState({viewCompleted:!0}):a.setState({viewCompleted:!1})},a.renderTabList=function(){return Object(C.jsxs)("div",{className:"tab-list m-3 text-center",children:[Object(C.jsx)("span",{className:a.state.viewCompleted?"active":"",onClick:function(){return a.displayCompleted(!0)},children:"Completed"}),Object(C.jsx)("span",{className:a.state.viewCompleted?"":"active",onClick:function(){return a.displayCompleted(!1)},children:"Incompleted"})]})},a.renderItems=function(){var e=a.state.viewCompleted;return a.state.taskList.filter((function(t){return t.completed===e})).map((function(e){return Object(C.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(C.jsx)("span",{className:"todo-title ".concat(a.state.viewCompleted?"completed-todo":""),title:e.title,children:e.title}),Object(C.jsxs)("span",{children:[Object(C.jsx)("button",{className:"btn btn-info mx-2",onClick:function(){return a.editItem(e)},children:"Edit"}),Object(C.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(){return a.handleDelete(e)},children:"Delete"})]})]},e.id)}))},a.toggle=function(){a.setState({modal:!a.state.modal})},a.handleSubmit=function(e){a.toggle(),console.log(e.id),e.id?N.a.put("api/tasks/".concat(e.id,"/"),e).then((function(e){return a.refreshList()})):N.a.post("api/tasks/",e).then((function(e){return a.refreshList()}))},a.handleDelete=function(e){N.a.delete("api/tasks/".concat(e.id)).then((function(e){return a.refreshList()}))},a.editItem=function(e){a.setState({activeItem:e,modal:!a.state.modal})},a.createItem=function(){var e={title:"",completed:!1,modal:!a.state.modal};a.setState({activeItem:e,modal:!a.state.modal})},a.state={modal:!1,viewCompleted:!1,taskList:[],activeItem:{title:"",completed:!1}},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){return Object(C.jsxs)("main",{className:"content p-3 bg-info",children:[Object(C.jsx)("h1",{className:"text-center my-4 text-light",children:"TASK MANAGER"}),Object(C.jsx)("div",{className:"row",children:Object(C.jsx)("div",{className:"col-md-6 col-sm-10 mx-auto p-0",children:Object(C.jsxs)("div",{className:"card p-3",children:[Object(C.jsx)("button",{className:"btn btn-success m-3",onClick:this.createItem,children:"Add Task"}),this.renderTabList(),Object(C.jsx)("ul",{className:"list-group list-group-flush"}),this.renderItems()]})})}),this.state.modal?Object(C.jsx)(k,{activeItem:this.state.activeItem,toggle:this.toggle,onSave:this.handleSubmit}):null]})}}]),n}(c.a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(S,{})}),document.getElementById("root")),y()}},[[68,1,2]]]);
//# sourceMappingURL=main.95d40d6e.chunk.js.map