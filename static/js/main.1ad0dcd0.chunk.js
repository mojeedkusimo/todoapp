(this.webpackJsonpdevlist=this.webpackJsonpdevlist||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(34),o=a.n(l),s=a(7),r=a(8),i=a(11),m=a(10),d=a(14),u=a(67),h=a(68),p=a(69),E=a(70),f=a(71),k=a(72),g=a(73),v=a(12),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(d.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){if(e.preventDefault(),""===n.state.task&&""===n.state.time)return null;n.props.addTodo(n.state),n.setState({task:"",date:"",time:""})},n.state={task:"",date:"",time:""},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"input-fields"},c.a.createElement(u.a,null,c.a.createElement("h2",{className:"text-center"},"Signup"),c.a.createElement(h.a,null,c.a.createElement(p.a,{xs:"12",md:{size:6,offset:3}},c.a.createElement(E.a,{onSubmit:function(){e.props.history.push("/todoapp/login")}},c.a.createElement(f.a,{row:!0},c.a.createElement(p.a,{xs:"12",className:"form-columns"},c.a.createElement(k.a,{onChange:this.handleChange,type:"text",id:"firstname",placeholder:"Firstname",value:this.state.firstname}))),c.a.createElement(f.a,{row:!0},c.a.createElement(p.a,{xs:"12",className:"form-columns"},c.a.createElement(k.a,{onChange:this.handleChange,type:"text",id:"lastname",placeholder:"Lastname",value:this.state.lastname}))),c.a.createElement(f.a,{row:!0},c.a.createElement(p.a,{xs:"12",className:"form-columns"},c.a.createElement(k.a,{onChange:this.handleChange,type:"email",id:"email",placeholder:"Email",value:this.state.email}))),c.a.createElement(f.a,{row:!0},c.a.createElement(p.a,{xs:"12",className:"form-columns"},c.a.createElement(k.a,{onChange:this.handleChange,type:"password",id:"password",placeholder:"Password",value:this.state.password}))),c.a.createElement(f.a,{row:!0},c.a.createElement(p.a,{xs:"4",md:"3",className:"form-columns"},c.a.createElement(g.a,{id:"add-todo",color:"success"},"Signup")),c.a.createElement(p.a,{xs:"8",md:"9",className:"form-columns"},c.a.createElement("span",null,"Already have an account? ",c.a.createElement(v.b,{to:"/todoapp/login"}," Login")))))))))}}]),a}(n.Component),C=new(function(){function e(){Object(s.a)(this,e),this.authenticated=!1}return Object(r.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),x=(a(46),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(d.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=Object(d.a)({},e.target.id,e.target.value);fetch("http://localhost:7000/api/login",{method:"POST",mode:"no-cors",credentials:"include",headers:{"Content-Type":"application/json"},referrerPolicy:"origin-when-cross-origin",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))},n.state={email:"",password:""},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"input-fields"},c.a.createElement(u.a,null,c.a.createElement("h2",{className:"text-center"},"Login"),c.a.createElement(h.a,null,c.a.createElement(p.a,{xs:"12",md:{size:6,offset:3}},c.a.createElement(E.a,{onSubmit:function(){C.login((function(){e.props.history.push("/todoapp/mytodos")}))}},c.a.createElement(f.a,{row:!0},c.a.createElement(p.a,{xs:"12",className:"form-columns"},c.a.createElement(k.a,{onChange:this.handleChange,type:"text",id:"email",placeholder:"Email address",value:this.state.email}))),c.a.createElement(f.a,{row:!0},c.a.createElement(p.a,{xs:"12",className:"form-columns"},c.a.createElement(k.a,{onChange:this.handleChange,type:"password",id:"password",placeholder:"Password",value:this.state.password}))),c.a.createElement(f.a,{row:!0},c.a.createElement(p.a,{xs:"4",md:"3",className:"form-columns"},c.a.createElement(g.a,{id:"add-todo",color:"success"},"Login")),c.a.createElement(p.a,{xs:"8",md:"9",className:"form-columns"},c.a.createElement("span",null,"Don't have an account? ",c.a.createElement(v.b,{to:"/todoapp/signup"}," Signup")))))))))}}]),a}(n.Component)),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(d.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){if(e.preventDefault(),""===n.state.task&&""===n.state.time)return null;n.props.addTodo(n.state),n.setState({task:"",date:"",time:""})},n.state={task:"",date:"",time:""},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"input-fields"},c.a.createElement(u.a,null,c.a.createElement("h1",{className:"text-center"},"Todo App"),c.a.createElement("h3",{className:"text-center m-4"},"Hi there! Please choose an option below"),c.a.createElement(h.a,null,c.a.createElement(p.a,{xs:"12",md:{size:6,offset:3}},c.a.createElement(E.a,null,c.a.createElement(f.a,{row:!0},c.a.createElement(p.a,{xs:"4",className:"form-columns text-right"},c.a.createElement(g.a,{id:"add-todo",color:"success",onClick:function(){e.props.history.push("/todoapp/login")}},"Login")),c.a.createElement(p.a,{xs:"4",className:"form-columns"},c.a.createElement(g.a,{id:"add-todo",color:"success",onClick:function(){e.props.history.push("/todoapp/signup")}},"Signup")),c.a.createElement(p.a,{xs:"4",className:"form-columns"},c.a.createElement(g.a,{id:"add-todo",color:"danger",onClick:function(){e.props.history.push("/todoapp/mytodos")}},"MyTodos"))))))))}}]),a}(n.Component),j=a(23),O=a(19),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(d.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){if(e.preventDefault(),""===n.state.task&&""===n.state.time)return null;n.props.addTodo(n.state),n.setState({task:"",date:"",time:""})},n.state={task:"",date:"",time:""},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"input-fields"},c.a.createElement(u.a,null,c.a.createElement(h.a,null,c.a.createElement(p.a,{xs:"6"},c.a.createElement(v.b,{to:"/todoapp/",className:"text-white"},"Back to Landingpage")),c.a.createElement(p.a,{xs:"6",className:"text-right"},c.a.createElement(E.a,{onSubmit:function(){C.logout((function(){e.props.history.push("/todoapp/login")}))}},c.a.createElement("button",{className:"btn btn-success"},"Logout")))),c.a.createElement("h2",{className:"text-center"},"Add todo"),c.a.createElement(h.a,null,c.a.createElement(p.a,{xs:"12",md:{size:6,offset:3}},c.a.createElement(E.a,{onSubmit:this.handleSubmit},c.a.createElement(f.a,{row:!0},c.a.createElement(p.a,{xs:"12",className:"form-columns"},c.a.createElement(k.a,{onChange:this.handleChange,type:"text",id:"task",placeholder:"Enter Your Task",value:this.state.task}))),c.a.createElement(f.a,{row:!0},c.a.createElement(p.a,{xs:"7",className:"form-columns"},c.a.createElement(k.a,{onChange:this.handleChange,type:"date",id:"date",value:this.state.date})),c.a.createElement(p.a,{xs:"5",className:"form-columns"},c.a.createElement(k.a,{onChange:this.handleChange,type:"select",name:"select",id:"time",value:this.state.time},c.a.createElement("option",null,"Select Time"),c.a.createElement("option",null,"5:00am"),c.a.createElement("option",null,"9:00am"),c.a.createElement("option",null,"4:00pm")))),c.a.createElement(f.a,{row:!0},c.a.createElement(p.a,{xs:"5",className:"form-columns"},c.a.createElement(g.a,{id:"add-todo",color:"success"},"Add Task"))))))))}}]),a}(n.Component),w=a(74),S=a(75),T=a(76),U=function(e){var t=e.todos,a=(e.deleteTask,e.toggleCheckbox),n=(e.allCheckedUnchecked,e.checkUncheckAll,e.checked,e.handleCheckUncheck,t.length?t.map((function(e,t){var n=new Date(e.date);return n=n.toDateString(),c.a.createElement(w.a,{className:"my-tasks",key:e.id},c.a.createElement(S.a,null,n),c.a.createElement("div",null,c.a.createElement(E.a,{className:"todo-item"},c.a.createElement(f.a,{check:!0},c.a.createElement(k.a,{type:"checkbox",id:e.id,onChange:function(){return a(e,t)}})," "),c.a.createElement("p",null,e.task),c.a.createElement("p",null,e.time))))})):c.a.createElement("p",{id:"addTask"},"You have not added any task yet"));return c.a.createElement("div",{className:"task-list"},c.a.createElement(u.a,null,c.a.createElement(h.a,null,c.a.createElement(p.a,{xs:"12",md:{size:6,offset:3}},c.a.createElement("div",null,c.a.createElement("h3",{id:"schedule"},t.length?"My Todos":null)))),c.a.createElement(h.a,null,c.a.createElement(p.a,{xs:"12",md:{size:6,offset:3}},c.a.createElement(T.a,null,n)))))},A=function(e){var t=e.completedTodos,a=(e.deleteTask,e.completedToggleCheckbox),n=(e.allCheckedUnchecked,e.checkUncheckAll,e.checked,e.handleCheckUncheck,t.length,t.length?t.map((function(e){var t=new Date(e.date);return t=t.toDateString(),c.a.createElement(w.a,{className:"my-tasks",key:e.id},c.a.createElement(S.a,null,t),c.a.createElement("div",null,c.a.createElement(E.a,{className:"todo-item"},c.a.createElement(f.a,{check:!0},c.a.createElement(k.a,{type:"checkbox",id:e.id,onChange:function(){return a(e)}})," "),c.a.createElement("p",null,e.task),c.a.createElement("p",null,e.time))))})):"");return c.a.createElement("div",{className:"task-list"},c.a.createElement(u.a,null,c.a.createElement(h.a,null,c.a.createElement(p.a,{xs:"12",md:{size:6,offset:3}},c.a.createElement("div",null,c.a.createElement("h3",{id:"schedule"},t.length?"Completed Todos":null)))),c.a.createElement(h.a,null,c.a.createElement(p.a,{xs:"12",md:{size:6,offset:3}},c.a.createElement(T.a,null,n)))))},D=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).addTodo=function(e){if(e.id=Math.floor(1e3*Math.random()),e.isChecked=!1,e.id===n.state.todos.id)return null;var t=[].concat(Object(O.a)(n.state.todos),[e]);n.setState({todos:t})},n.deleteTask=function(){var e=n.state.todos.filter((function(e){return!0!==e.isChecked}));n.setState({todos:e})},n.toggleCheckbox=function(e,t){if(console.log(t),!1===e.isChecked){e.isChecked=!0;var a=n.state.todos.filter((function(e){return!0!==e.isChecked}));n.setState({todos:a});var c=[].concat(Object(O.a)(n.state.completedTodos),[e]);n.setState({completedTodos:c})}else e.isChecked=!1},n.completedToggleCheckbox=function(e){if(!0===e.isChecked){e.isChecked=!1;var t=n.state.completedTodos.filter((function(e){return!0===e.isChecked}));n.setState({completedTodos:t});var a=[].concat(Object(O.a)(n.state.todos),[e]);n.setState({todos:a})}else e.isChecked=!0},n.handleCheckUncheck=function(e,t){e.target.id,e.target.checked;n.setState({checked:!n.state.checked});var a=n.state.todos.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{isChecked:e.target.checked})}));console.log(e.target.checked),console.log(a)},n.checkUncheckAll=function(e){"check-uncheck-all"===e.target.name&&n.setState({allUncheckedUnchecked:!n.state.allUncheckedUnchecked})},n.state={todos:[],completedTodos:[]},n}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(N,{addTodo:this.addTodo}),c.a.createElement(U,{todos:this.state.todos,deleteTask:this.deleteTask,toggleCheckbox:this.toggleCheckbox,handleCheckUncheck:this.handleCheckUncheck,checked:this.state.checked,allUncheckedUnchecked:this.state.allUncheckedUnchecked,checkUncheckAll:this.checkUncheckAll}),c.a.createElement(A,{completedTodos:this.state.completedTodos,completedToggleCheckbox:this.completedToggleCheckbox}))}}]),a}(n.Component),z=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"input-fields"},c.a.createElement(u.a,{className:"text-center"},c.a.createElement("h1",null,"I am sorry the Page you looking for does not exist"),c.a.createElement("h3",null,"Please go back to the ",c.a.createElement(v.b,{to:"/todoapp/"},"Landingpage"))))}}]),a}(n.Component),L=a(5),P=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.component;return C.isAuthenticated()?c.a.createElement(e,null):c.a.createElement(L.a,{to:{pathname:"/todoapp/"}})}}]),a}(c.a.Component),M=(n.Component,function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(L.d,null,c.a.createElement(L.b,{exact:!0,path:"/todoapp/",component:y}),c.a.createElement(L.b,{exact:!0,path:"/todoapp/login",component:x}),c.a.createElement(L.b,{exact:!0,path:"/todoapp/signup",component:b}),c.a.createElement(P,{exact:!0,path:"/todoapp/mytodos",component:D}),c.a.createElement(L.b,{path:"*",component:z})))}}]),a}(n.Component));a(64),a(65),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(v.a,null,c.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.1ad0dcd0.chunk.js.map