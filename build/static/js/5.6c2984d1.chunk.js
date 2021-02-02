(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{55:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(4),r=n(63),i=n.n(r),a=n(2),o=n(56),s="https://image.tmdb.org/t/p/w500/";e.b=Object(a.f)((function(t){var e=t.movies,n=t.match,r=t.onClick;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{className:i.a.btn,type:"button",onClick:r,children:"go back"}),Object(c.jsxs)("div",{className:i.a.container,children:[Object(c.jsx)("div",{className:i.a.imgBox,children:Object(c.jsx)("img",{className:i.a.img,src:"".concat(s).concat(e.poster_path),alt:e.title})}),Object(c.jsxs)("div",{className:i.a.info,children:[Object(c.jsx)("h2",{children:e.title}),Object(c.jsxs)("h3",{children:["Rating: ",e.vote_average]}),Object(c.jsx)("h4",{children:"Overview:"})," ",Object(c.jsx)("span",{children:e.overview}),Object(c.jsx)("h4",{children:"Genres:"}),Object(c.jsx)("ul",{children:e.genres&&e.genres.map((function(t){return Object(c.jsxs)("li",{children:[" ",t.name]},t.id)}))})]})]}),Object(c.jsx)(o.a,{name:"Cast",path:"".concat(n.url,"/cast")}),Object(c.jsx)(o.a,{name:"Review",path:"".concat(n.url,"/review")})]})}))},56:function(t,e,n){"use strict";var c=n(4),r=n(59),i=n(64),a=n.n(i),o=n(10),s=n(2);e.a=Object(s.f)((function(t){var e=t.name,n=t.path,i=t.onClick,s=Object(r.a)(t,["name","path","onClick"]);return Object(c.jsx)(o.c,{exact:!0,to:{pathname:n,state:{from:s.location}},className:a.a.base,activeClassName:a.a.active,children:Object(c.jsx)("button",{onClick:i,className:a.a.btn,type:"button",children:e})})}))},57:function(t,e,n){"use strict";var c=n(4),r=n(58),i=n.n(r);e.a=function(t){var e=t.children;return Object(c.jsx)("div",{className:i.a.container,children:e})}},58:function(t,e,n){t.exports={container:"container_container__3TiUU"}},59:function(t,e,n){"use strict";function c(t,e){if(null==t)return{};var n,c,r=function(t,e){if(null==t)return{};var n,c,r={},i=Object.keys(t);for(c=0;c<i.length;c++)n=i[c],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(c=0;c<i.length;c++)n=i[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,"a",(function(){return c}))},60:function(t,e,n){"use strict";var c=n(4),r=n(61),i=n.n(r);e.a=function(t){var e=t.children;return Object(c.jsx)("div",{className:i.a.container,children:e})}},61:function(t,e,n){t.exports={container:"header_container__3hoMn"}},62:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return u}));var c="ded316cd594a4a167b1b831fae420aff",r="https://api.themoviedb.org";function i(){return fetch("".concat(r,"/3/trending/movie/week?api_key=").concat(c)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Something go wrong, try again"))}))}function a(t){return fetch("".concat(r,"/3/movie/").concat(t,"?api_key=").concat(c)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Something go wrong, try again"))}))}function o(t){return fetch("".concat(r,"/3/movie/").concat(t,"/credits?api_key=").concat(c)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Something go wrong, try again"))}))}function s(t){return fetch("".concat(r,"/3/movie/").concat(t,"/reviews?api_key=").concat(c)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Something go wrong, try again"))}))}function u(t){return fetch("".concat(r,"/3/search/movie?api_key=").concat(c,"&query=").concat(t)).then((function(t){return t.ok?t.json():Promise.reject(new Error("Something go wrong, try again"))}))}},63:function(t,e,n){t.exports={container:"movieDetailsPage_container__kwH9X",img:"movieDetailsPage_img__AcLFP",imgBox:"movieDetailsPage_imgBox__3EQmo",link:"movieDetailsPage_link__XZXvJ",btn:"movieDetailsPage_btn__RLrFn",info:"movieDetailsPage_info__Py39Q"}},64:function(t,e,n){t.exports={btn:"buttonMain_btn__BTQ9Q",base:"buttonMain_base__2Oogs",active:"buttonMain_active__3imCc"}},65:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var c=n(4),r=n(55),i=n(66),a=n.n(i),o="https://stolica-dent.ru/content/photos/opinion/217/main/783/defaultuser_.png";e.a=function(t){var e=t.cast;return Object(c.jsx)("ul",{className:a.a.list,children:e.map((function(t){return Object(c.jsxs)("li",{className:a.a.item,children:[Object(c.jsx)("img",{className:a.a.img,src:t.profile_path?"".concat(r.a).concat(t.profile_path):o,alt:t.name}),Object(c.jsxs)("div",{className:a.a.info,children:[Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("h4",{children:t.character})]})]},t.id)}))})}},66:function(t,e,n){t.exports={list:"cast_list__39L_T",item:"cast_item__3q_N9",img:"cast_img__nCVZp",info:"cast_info__gv-A6"}},70:function(t,e,n){"use strict";function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,"a",(function(){return i}))},88:function(t,e,n){"use strict";n.r(e);var c=n(70),r=n(4),i=n(15),a=n(16),o=n(18),s=n(17),u=n(2),j=n(57),l=n(0),h=n(55),b=n(65);var m=function(t){var e=t.reviews;return Object(r.jsx)(r.Fragment,{children:0===e.length?Object(r.jsx)("h3",{children:"No reviews"}):Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsxs)("h3",{children:["Author: ",t.author]}),Object(r.jsx)("span",{children:t.content})]},t.id)}))})})},f=n(60),p=n(9),O=n(56),v=n(62),d=function(t){Object(o.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={movieInfo:{},credits:[],reviews:[]},t.handleOnclickHistory=function(e){t.props.location.state&&t.props.location.state.from?t.props.history.push(t.props.location.state.from):t.props.history.push(p.a.home)},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;Object(v.b)(this.props.match.params.moviesId).then((function(e){t.setState({movieInfo:e})})),Object(v.a)(this.props.match.params.moviesId).then((function(e){t.setState({credits:e.cast})})),Object(v.d)(this.props.match.params.moviesId).then((function(e){t.setState({reviews:e.results})}))}},{key:"render",value:function(){var t=this.props.match.url,e=this.state,n=e.movieInfo,i=e.credits,a=e.reviews;return Object(r.jsxs)(j.a,{children:[Object(r.jsxs)(f.a,{children:[Object(r.jsx)(O.a,{path:p.a.home,name:"Home"}),Object(r.jsx)(O.a,{path:p.a.movies,name:"Movies"})]}),Object(r.jsx)(h.b,{movies:n,onClick:this.handleOnclickHistory}),Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"".concat(t,"/cast"),render:function(t){return Object(r.jsx)(b.a,Object(c.a)(Object(c.a)({},t),{},{cast:i}))}}),Object(r.jsx)(u.a,{exact:!0,path:"".concat(t,"/review"),render:function(t){return Object(r.jsx)(m,Object(c.a)(Object(c.a)({},t),{},{reviews:a}))}})]})]})}}]),n}(l.Component);e.default=d}}]);
//# sourceMappingURL=5.6c2984d1.chunk.js.map