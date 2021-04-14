(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{46:function(e,t,a){},47:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(22),i=a.n(r),o=(a(46),a(9)),c=a(10),l=a(12),h=a(11),u=(a(47),a(48),a(13)),d=a(3),p=a(14),m=a(17),j=a(41),b="GET_ERRORS",v="SET_CURRENT_USER",f={},O=a(27),g=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},x={isAuthenticated:!1,user:{}},y=Object(m.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.payload;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!g(t.payload),user:t.payload});default:return e}}}),w=Object(m.e)(y,{},Object(m.d)(Object(m.a)(j.a))),N=a(23),k=a(20),C=a.n(k),S=function(e){e?C.a.defaults.headers.common.Authorization=e:delete C.a.defaults.headers.common.Authorization},I=function(e){return{type:v,payload:e}},T=function(e){return function(t){localStorage.removeItem("jwtToken"),S(!1),t(I({})),e.push("/login")}},R=a(1),U=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"onLogout",value:function(e){e.preventDefault(),this.props.logoutUser(this.props.history)}},{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated,a=e.user,n=Object(R.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(R.jsxs)("a",{href:"#",className:"nav-link",onClick:this.onLogout.bind(this),children:[Object(R.jsx)("img",{src:a.avatar,alt:a.name,title:a.name,className:"rounded-circle",style:{width:"25px",marginRight:"5px"}}),"Logout"]})}),s=Object(R.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(R.jsx)("li",{className:"nav-item",children:Object(R.jsx)(u.b,{className:"nav-link",to:"/register",children:"Sign Up"})}),Object(R.jsx)("li",{className:"nav-item",children:Object(R.jsx)(u.b,{className:"nav-link",to:"/login",children:"Sign In"})})]});return Object(R.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(R.jsx)(u.b,{className:"navbar-brand",to:"/",children:"Products App"}),Object(R.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:t?n:s})]})}}]),a}(n.Component),_=Object(p.b)((function(e){return{auth:e.auth}}),{logoutUser:T})(Object(d.e)(U)),A=a(19),E=a(16),P=a(15),D=a.n(P),L=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={name:"",email:"",password:"",password_confirm:"",errors:{}},e.handleInputChange=e.handleInputChange.bind(Object(E.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(E.a)(e)),e}return Object(c.a)(a,[{key:"handleInputChange",value:function(e){this.setState(Object(A.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,email:this.state.email,password:this.state.password,password_confirm:this.state.password_confirm};this.props.registerUser(t,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/"),e.errors&&this.setState({errors:e.errors})}},{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/")}},{key:"render",value:function(){var e=this.state.errors;return Object(R.jsxs)("div",{className:"container",style:{marginTop:"50px",width:"700px"},children:[Object(R.jsx)("h2",{style:{marginBottom:"40px"},children:"Registration"}),Object(R.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("input",{type:"text",placeholder:"Name",className:D()("form-control form-control-lg",{"is-invalid":e.name}),name:"name",onChange:this.handleInputChange,value:this.state.name}),e.name&&Object(R.jsx)("div",{className:"invalid-feedback",children:e.name})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("input",{type:"email",placeholder:"Email",className:D()("form-control form-control-lg",{"is-invalid":e.email}),name:"email",onChange:this.handleInputChange,value:this.state.email}),e.email&&Object(R.jsx)("div",{className:"invalid-feedback",children:e.email})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("input",{type:"password",placeholder:"Password",className:D()("form-control form-control-lg",{"is-invalid":e.password}),name:"password",onChange:this.handleInputChange,value:this.state.password}),e.password&&Object(R.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("input",{type:"password",placeholder:"Confirm Password",className:D()("form-control form-control-lg",{"is-invalid":e.password_confirm}),name:"password_confirm",onChange:this.handleInputChange,value:this.state.password_confirm}),e.password_confirm&&Object(R.jsx)("div",{className:"invalid-feedback",children:e.password_confirm})]}),Object(R.jsx)("div",{className:"form-group",children:Object(R.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Register User"})})]})]})}}]),a}(n.Component),B=Object(p.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){C.a.post("/api/register",e).then((function(e){return t.push("/login")})).catch((function(e){a({type:b,payload:e.response.data})}))}}})(Object(d.e)(L)),F=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={email:"",password:"",errors:{}},e.handleInputChange=e.handleInputChange.bind(Object(E.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(E.a)(e)),e}return Object(c.a)(a,[{key:"handleInputChange",value:function(e){this.setState(Object(A.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={email:this.state.email,password:this.state.password};this.props.loginUser(t)}},{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return Object(R.jsxs)("div",{className:"container",style:{marginTop:"50px",width:"700px"},children:[Object(R.jsx)("h2",{style:{marginBottom:"40px"},children:"Login"}),Object(R.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("input",{type:"email",placeholder:"Email",className:D()("form-control form-control-lg",{"is-invalid":e.email}),name:"email",onChange:this.handleInputChange,value:this.state.email}),e.email&&Object(R.jsx)("div",{className:"invalid-feedback",children:e.email})]}),Object(R.jsxs)("div",{className:"form-group",children:[Object(R.jsx)("input",{type:"password",placeholder:"Password",className:D()("form-control form-control-lg",{"is-invalid":e.password}),name:"password",onChange:this.handleInputChange,value:this.state.password}),e.password&&Object(R.jsx)("div",{className:"invalid-feedback",children:e.password})]}),Object(R.jsx)("div",{className:"form-group",children:Object(R.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login User"})})]})]})}}]),a}(n.Component),M=Object(p.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){C.a.post("/api/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),S(a);var n=Object(N.a)(a);t(I(n))})).catch((function(e){t({type:b,payload:e.response.data})}))}}})(F),z=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(R.jsx)("div",{children:"Home Component"})}}]),a}(n.Component);if(localStorage.jwtToken){S(localStorage.jwtToken);var J=Object(N.a)(localStorage.jwtToken);w.dispatch(I(J));var W=Date.now()/1e3;J.exp<W&&(w.dispatch(T()),window.location.href="/login")}var G=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(R.jsx)(p.a,{store:w,children:Object(R.jsx)(u.a,{children:Object(R.jsxs)("div",{children:[Object(R.jsx)(_,{}),Object(R.jsx)(d.a,{exact:!0,path:"/",component:z}),Object(R.jsxs)("div",{className:"container",children:[Object(R.jsx)(d.a,{exact:!0,path:"/register",component:B}),Object(R.jsx)(d.a,{exact:!0,path:"/login",component:M})]})]})})})}}]),a}(n.Component),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(G,{})}),document.getElementById("root")),H()}},[[77,1,2]]]);
//# sourceMappingURL=main.9d1ddc00.chunk.js.map