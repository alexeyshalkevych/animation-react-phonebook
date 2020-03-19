(this["webpackJsonphomework-01"]=this["webpackJsonphomework-01"]||[]).push([[0],{29:function(n,t,e){n.exports=e(41)},40:function(n,t,e){},41:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(7),i=e.n(o),c=e(26),u=e(8),l=e(10),s=e(11),f=e(14),p=e(12),b=e(15),m=e(44),d=e(9),h=e(2),g=e(1);function x(){var n=Object(h.a)(["\n  display: block;\n  width: 100%;\n  padding: 10px 5px;\n  font-family: sans-serif;\n  font-size: 14px;\n  line-height: 1.2;\n  font-weight: 400;\n  color: #fff;\n  background-color: rgb(0, 106, 177);\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.75);\n  transition: all 0.2s ease-in;\n\n  :hover {\n    cursor: pointer;\n    background-color: rgb(19, 19, 138);\n  }\n"]);return x=function(){return n},n}function v(){var n=Object(h.a)(["\n  display: block;\n  width: 100%;\n  margin-bottom: 15px;\n  padding: 8px 5px;\n  border-radius: 4px;\n  border: 1px solid rgb(126, 126, 126);\n\n  :focus {\n    border-color: rgb(0, 106, 177);\n    outline: none;\n  }\n"]);return v=function(){return n},n}function y(){var n=Object(h.a)(["\n  font-family: sans-serif;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: 500;\n"]);return y=function(){return n},n}function O(){var n=Object(h.a)(["\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 10px;\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.59);\n"]);return O=function(){return n},n}var j=g.b.form(O()),w=g.b.label(y()),C=g.b.input(v()),E=g.b.button(x()),k=function(n){function t(){var n,e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=Object(f.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(r)))).state={name:"",number:""},e.handleChange=function(n){var t=n.target,a=t.name,r=t.value;e.setState(Object(d.a)({},a,r))},e.handleSubmit=function(n){n.preventDefault(),e.props.onAddContact(Object(u.a)({},e.state)),e.resetForm()},e}return Object(b.a)(t,n),Object(s.a)(t,[{key:"resetForm",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var n=this.state,t=n.name,e=n.number;return r.a.createElement(j,{onSubmit:this.handleSubmit},r.a.createElement(w,null,"Name",r.a.createElement(C,{type:"text",name:"name",value:t,onChange:this.handleChange,autoComplete:"off"})),r.a.createElement(w,null,"Number",r.a.createElement(C,{type:"text",name:"number",value:e,onChange:this.handleChange,autoComplete:"off"})),r.a.createElement(E,{type:"submit"},"Add contact"))}}]),t}(a.Component),S=e(45);function D(){var n=Object(h.a)(["\n  display: block;\n  padding: 5px 10px;\n  font-family: sans-serif;\n  font-size: 14px;\n  line-height: 1.2;\n  font-weight: 400;\n  color: #fff;\n  background-color: rgb(218, 1, 1);\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.75);\n  transition: all 0.2s ease-in;\n\n  :hover {\n    cursor: pointer;\n    background-color: rgb(170, 0, 0);\n  }\n"]);return D=function(){return n},n}function F(){var n=Object(h.a)(["\n  margin-right: 50px;\n"]);return F=function(){return n},n}function z(){var n=Object(h.a)(["\n  flex: 1 0 auto;\n"]);return z=function(){return n},n}function A(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return A=function(){return n},n}var J=g.b.div(A()),N=g.b.span(z()),X=g.b.span(F()),I=g.b.button(D()),L=function(n){var t=n.name,e=n.number,a=n.onDeleteContact;return r.a.createElement(J,null,r.a.createElement(N,null,t),r.a.createElement(X,null,e),r.a.createElement(I,{type:"button",onClick:a},"delete"))};function q(){var n=Object(h.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]);return q=function(){return n},n}var M=g.b.ul(q());function P(){var n=Object(h.a)(["\n  padding: 10px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.59);\n\n  &:enter { \n    opacity: 0;\n    transform: translateX(-100%); \n  }\n\n  &:enter-active {\n    opacity: 1;\n    transform: translateX(0);\n    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;\n  }\n\n  &:exit { \n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  &:exit-active {\n    opacity: 0;\n    transform: translateX(-100%);\n    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;\n  }\n"]);return P=function(){return n},n}var U=e(25).a.li.attrs({unmountOnExit:!0,timeout:250})(P()),B=function(n){var t=n.items,e=n.onDeleteContact;return t.length>0&&r.a.createElement(S.a,{component:M},t.map((function(n){return r.a.createElement(U,{key:n.id},r.a.createElement(L,Object.assign({},n,{onDeleteContact:function(){return e(n.id)}})))})))};function G(){var n=Object(h.a)(["\n  display: block;\n  width: 100%;\n  padding: 8px 5px;\n  border-radius: 4px;\n  border: 1px solid rgb(126, 126, 126);\n\n  :focus {\n    border-color: rgb(0, 106, 177);\n    outline: none;\n  }\n"]);return G=function(){return n},n}function H(){var n=Object(h.a)(["\n  font-family: sans-serif;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: 500;\n"]);return H=function(){return n},n}function K(){var n=Object(h.a)(["\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 10px 10px 15px;\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.59);\n"]);return K=function(){return n},n}var Q=g.b.div(K()),R=g.b.label(H()),T=g.b.input(G()),V=function(n){var t=n.value,e=n.onChangeFilter;return r.a.createElement(Q,null,r.a.createElement(R,null,"Find contacts by name",r.a.createElement(T,{type:"text",value:t,onChange:e})))};e(40);function W(){var n=Object(h.a)(["\n  margin: 0 0 10px 0;\n  font-family: sans-serif;\n  font-size: 20px;\n  line-height: 1.2;\n  font-weight: 900;\n  color: rgb(0, 106, 177);\n"]);return W=function(){return n},n}function Y(){var n=Object(h.a)(["\n  margin: 0 0 10px 0;\n  font-family: sans-serif;\n  font-size: 30px;\n  line-height: 1.2;\n  font-weight: 900;\n  color: rgb(0, 106, 177);\n"]);return Y=function(){return n},n}function Z(){var n=Object(h.a)(["\n  max-width: 400px;\n  min-width: 310px;\n  margin: 0 auto;\n  padding: 0 5px;\n"]);return Z=function(){return n},n}var $=g.b.div(Z()),_=g.b.h1(Y()),nn=g.b.h2(W()),tn=function(n){function t(){var n,e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=Object(f.a)(this,(n=Object(p.a)(t)).call.apply(n,[this].concat(r)))).state={contacts:[],filter:""},e.changeFilter=function(n){var t=n.target.value;e.setState({filter:t})},e.addContact=function(n){var t=e.state.contacts,a=Object(u.a)({},n,{id:Object(m.a)()});t.find((function(t){return t.name===n.name}))?alert("".concat(n.name," is already in contacts.")):e.setState((function(n){return{contacts:[].concat(Object(c.a)(n.contacts),[a])}}))},e.deleteContact=function(n){e.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},e}return Object(b.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("contacts");n&&this.setState({contacts:JSON.parse(n)})}},{key:"componentDidUpdate",value:function(n,t){var e=this.state.contacts;t.contacts!==e&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var n=this.state,t=n.contacts,e=n.filter,a=function(n,t){return n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))}(t,e);return r.a.createElement($,null,r.a.createElement(_,null,"Phonebook"),r.a.createElement(k,{onAddContact:this.addContact}),r.a.createElement(nn,null,"Contacts"),t.length>=2&&r.a.createElement(V,{value:e,onChangeFilter:this.changeFilter}),r.a.createElement(B,{items:a,onDeleteContact:this.deleteContact}))}}]),t}(a.Component);i.a.render(r.a.createElement(tn,null),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.f87ed50e.chunk.js.map