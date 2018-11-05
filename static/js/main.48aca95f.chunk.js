(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,n,t){e.exports=t(43)},34:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(13),c=t.n(i),o=(t(34),t(4)),u={users:{},pairings:{},filter:{selectedCity:"ny",selectedDepartments:{engineering:!0}}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.users,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_USERS_SUCCESS":return n.users;default:return e}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.pairings,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"MAKE_PAIRINGS":return n.pairings;default:return e}},f=t(6),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.filter,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE_FILTER":return n.filter;case"LOAD_USERS_SUCCESS":return Object(f.a)({},e,{selectedDepartments:Object(f.a)({},n.departments,e.selectedDepartments)});default:return e}},m=Object(o.c)({users:l,pairings:s,filter:d}),b=t(22),p=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,h=function(){return Object(o.e)(m,p(Object(o.a)(b.a)))},v=t(5),g=t(7),O=function(e){var n=e?"?location=".concat(e):"";return fetch("https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users/"+n).then(function(e){return e.json()}).catch(function(e){return e})},E=t(26),j=t(27),y=function(e,n){for(var t={},r=function(e,n){return Object.keys(e).filter(function(t){var r=e[t].department;return n.selectedDepartments[r]})}(e,n),a=Object(E.a)(r).sort(function(e,n){return.5-Math.random()});r.length;){var i=r.shift(),c=a[0]===i?a.pop():a.shift();t[i]=c}return t},w=function(e,n){return{type:"LOAD_USERS_SUCCESS",users:e,departments:n}},k=function(e){return function(n,t){var r=Object(f.a)({},t().filter,{selectedCity:e});n(D(t().users[e],r)),n({type:"UPDATE_FILTER",filter:r})}},C=function(e){return function(n,t){console.log("selected dept: ",e);var r=t(),a=r.filter.selectedDepartments,i=Object(f.a)({},r.filter,{selectedDepartments:Object(f.a)({},a,Object(g.a)({},e,!a[e]))});console.log("new filter: ",i);var c=r.filter.selectedCity;n({type:"UPDATE_FILTER",filter:i}),n(D(r.users[c],i)),console.log("filter after: ",r.filter)}},D=function(e,n){return{type:"MAKE_PAIRINGS",pairings:y(e,n)}},S=t(1),x=t(2);function _(){var e=Object(S.a)(["\n    padding: 1.5rem 1.5rem;\n    font-size: 1.75rem;\n  "]);return _=function(){return e},e}function I(){var e=Object(S.a)(["\n  box-sizing: border-box;\n  background-color: DimGray;\n  color: white;\n  padding: 1rem 4rem;\n  border: 1px solid DarkGray;\n  ","\n"]);return I=function(){return e},e}function G(){var e=Object(S.a)(["\n    background-color: LightGray;\n    font-size: 1.25rem;\n  "]);return G=function(){return e},e}function R(){var e=Object(S.a)(["\n  background-color: white;\n  border: 1px solid DimGray;\n  ","\n"]);return R=function(){return e},e}function L(){var e=Object(S.a)(["\n    background-color: white;\n    padding: .75rem 2rem;\n    font-size: 3rem;\n    border: 1px solid DarkGray;\n  "]);return L=function(){return e},e}function A(){var e=Object(S.a)(["\n  box-sizing: border-box;\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  ","\n"]);return A=function(){return e},e}function U(){var e=Object(S.a)(["\n    @media (max-width: ","em) {\n      ","\n    }\n  "]);return U=function(){return e},e}var z={desktop:992,tablet:768,mobile:576},F=Object.keys(z).reduce(function(e,n){return e[n]=function(){return Object(x.css)(U(),z[n]/16,x.css.apply(void 0,arguments))},e},{}),P=x.default.div(A(),F.mobile(L())),T=Object(x.default)(P)(R(),F.mobile(G())),M=x.default.div(I(),F.mobile(_())),N=function(e){var n=e.title,t=e.selectedCity;return a.a.createElement(P,null,a.a.createElement(M,null,"".concat(n," (").concat(t,")")))},K=Object(v.b)(function(e){return{selectedCity:e.filter.selectedCity}})(N),V=t(9),W=t(11),B=t(10),J=t(12);function X(){var e=Object(S.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n"]);return X=function(){return e},e}function $(){var e=Object(S.a)(["\n  margin-right: .5rem;\n  font-size: .75rem;\n  display: flex;\n  flex-wrap: nowrap;\n"]);return $=function(){return e},e}function q(){var e=Object(S.a)(["\n  //font-size: 1rem;\n  margin-right: 5px;\n"]);return q=function(){return e},e}function H(){var e=Object(S.a)(["\n    position: fixed;\n    bottom: 0;\n    margin: 0;\n    width: 100%;\n  "]);return H=function(){return e},e}function Q(){var e=Object(S.a)(["\n\n  ","\n"]);return Q=function(){return e},e}var Y=Object(x.default)(P)(Q(),F.mobile(H())),Z=x.default.span(q()),ee=x.default.span($()),ne=Object(x.default)(M)(X()),te=function(e){function n(){var e,t;Object(V.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=Object(W.a)(this,(e=Object(B.a)(n)).call.apply(e,[this].concat(i)))).onCityChange=function(e){var n=e.target.value;t.props.selectCity(n)},t.handleFilterDept=function(e){var n=e.target.value;console.log("handle dept: ",n),t.props.changeDeptSelection(n)},t.renderSelectOption=function(e){return a.a.createElement("option",{key:e,value:e},e)},t.renderCheckbox=function(e){var n=t.props.departments[e];return a.a.createElement(ee,{key:e},a.a.createElement("input",{type:"checkbox",value:e,checked:n,onChange:t.handleFilterDept}),e)},t.render=function(){return a.a.createElement(Y,null,a.a.createElement(ne,null,a.a.createElement(Z,null,"FILTER: "),a.a.createElement(ee,null,a.a.createElement("select",{onChange:t.onCityChange,value:t.props.selectedCity},t.props.cities.map(t.renderSelectOption))),Object.keys(t.props.departments).map(t.renderCheckbox)))},t}return Object(J.a)(n,e),n}(a.a.Component),re=Object(v.b)(function(e){return{cities:Object.keys(e.users),selectedCity:e.filter.selectedCity,departments:e.filter.selectedDepartments}},function(e){return Object(o.b)({selectCity:k,changeDeptSelection:C},e)})(te),ae=t(14);function ie(){var e=Object(S.a)(["\n  display: inline-block;\n  font-size: 1rem;\n"]);return ie=function(){return e},e}function ce(){var e=Object(S.a)(["\n  border: 1px solid DarkGray;\n  margin-top: .5rem;\n  margin-bottom: .5rem;\n"]);return ce=function(){return e},e}function oe(){var e=Object(S.a)(["\n    width: 100%;\n    min-height: 0;\n  "]);return oe=function(){return e},e}function ue(){var e=Object(S.a)(["\n  width: 38%;\n"]);return ue=function(){return e},e}function le(){var e=Object(S.a)(["\n  border: 1px solid DimGray;\n  margin-bottom: 1rem;\n  background-color: #E6E6E6;\n  color: black;\n  padding: 1rem 1.5rem;\n  font-size: .75rem;\n  width: 42%;\n  min-height: 100px;\n  \n  ","\n  ","\n"]);return le=function(){return e},e}var se=x.default.div(le(),F.tablet(ue()),F.mobile(oe())),fe=x.default.div(ce()),de=x.default.span(ie()),me=function(e){var n=e.giverInfo,t=e.receiverInfo,r=function(e){var n=e.first,t=e.last;return a.a.createElement("div",null,n," ",t)};return a.a.createElement(se,null,a.a.createElement("div",null,"GIVER: ",a.a.createElement(de,null,r(n.name))),a.a.createElement(fe,null),a.a.createElement("div",null,"RECEIVER: ",a.a.createElement(de,null,r(t.name))))};function be(){var e=Object(S.a)(["\n    padding: 2px;\n    padding-bottom: 100px;\n    background-color: LightGray;\n    border: none;\n"]);return be=function(){return e},e}function pe(){var e=Object(S.a)(["\n  background-color: white;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-content: flex-start;\n  width: 100%;\n  padding: 0;\n  border: none;\n  margin: 0;\n  ","\n"]);return pe=function(){return e},e}function he(){var e=Object(S.a)(["\n    background: LightGray;\n    border: none;\n    padding-top: 0rem;\n  "]);return he=function(){return e},e}function ve(){var e=Object(S.a)(["\n  padding: 3rem 4rem 0rem;\n  border: none;\n\n  ","\n\n"]);return ve=function(){return e},e}var ge=Object(x.default)(T)(ve(),F.mobile(he())),Oe=Object(x.default)(M)(pe(),F.mobile(be())),Ee=function(e){function n(){var e,t;Object(V.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(t=Object(W.a)(this,(e=Object(B.a)(n)).call.apply(e,[this].concat(i)))).renderPair=function(e){var n=t.props.users,r=n[e[0]],i=n[e[1]];return a.a.createElement(me,{key:r.phone,giverInfo:r,receiverInfo:i})},t}return Object(J.a)(n,e),Object(ae.a)(n,[{key:"render",value:function(){var e=this.props.pairings;return a.a.createElement(ge,null,e?a.a.createElement(Oe,null,Object.entries(e).map(this.renderPair)):a.a.createElement(Oe,null,"Loading Pairings"))}}]),n}(a.a.Component),je=Object(v.b)(function(e){return{users:e.users[e.filter.selectedCity],pairings:e.pairings}})(Ee),ye=function(e){return a.a.createElement("div",null,a.a.createElement(K,{title:"COFFEE WEEK"}),a.a.createElement(re,null),a.a.createElement(je,null))},we=function(e){function n(e){var t;return Object(V.a)(this,n),(t=Object(W.a)(this,Object(B.a)(n).call(this,e))).state={hasError:!1},t}return Object(J.a)(n,e),Object(ae.a)(n,[{key:"componentDidCatch",value:function(e,n){console.log("Uncaught Error: ",e,n)}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(a.a.Component),ke=t(25),Ce=t.n(ke);t(41);function De(){var e=Object(S.a)(["\n      background-color: LightGray;\n    "]);return De=function(){return e},e}function Se(){var e=Object(S.a)(["\n  ","\n\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: Roboto, sans-serif;\n    font-weight: 350;\n    background: white;\n\n    ","\n  }\n"]);return Se=function(){return e},e}var xe=Object(x.createGlobalStyle)(Se(),Ce.a,F.mobile(De())),_e=h();_e.dispatch(function(e,n){return O().then(function(t){var r=function(e){var n={};return e.forEach(function(e){var t=e.guid,r=e.location,a=Object(j.a)(e,["guid","location"]);r in n?n[r][t]=a:n[r]=Object(g.a)({},t,a)}),n}(t.users),a=function(e){var n={};return e.forEach(function(e){e.department in n||(n[e.department]=!1)}),n}(t.users);e(w(r,a)),e(k(n().filter.selectedCity))}).catch(function(e){throw e})});var Ie=function(){return a.a.createElement(we,null,a.a.createElement(xe,null),a.a.createElement(v.a,{store:_e},a.a.createElement(ye,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.48aca95f.chunk.js.map