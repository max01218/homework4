(this.webpackJsonpgituser=this.webpackJsonpgituser||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),a=n(3),r=n.n(a),i=(n(13),n(4)),o=n(5),u=n(8),h=n(7),l=n(6),b=n.n(l),j=n(0),g=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(i.a)(this,n),(s=e.call(this,t)).state={username:"",githubtUrl:"",avatarUrl:"",company:"",login:"",location:""},s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;b.a.get(this.props.source,(function(e){console.log(e);var n=e;n&&t.setState({username:n.name,githubtUrl:n.html_url,avatarUrl:n.avatar_url,company:n.company,login:n.login,location:n.location})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:this.state.avatarUrl,alt:""}),Object(j.jsx)("br",{}),Object(j.jsx)("h1",{children:this.state.username}),Object(j.jsx)("br",{}),Object(j.jsx)("h3",{children:this.state.login}),Object(j.jsx)("br",{}),Object(j.jsxs)("h3",{children:["My school:",this.state.company]}),Object(j.jsx)("br",{}),Object(j.jsxs)("h3",{children:["My country:",this.state.location]}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:this.state.githubtUrl,children:"My Github"}),Object(j.jsx)("br",{})]})}}]),n}(c.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),s(t),c(t),a(t),r(t)}))};r.a.render(Object(j.jsx)(g,{source:"https://api.github.com/users/max01218"}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.0f01e610.chunk.js.map