"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[442],{197:function(e,n,r){r.d(n,{LI:function(){return s},Mc:function(){return l},r7:function(){return f},uV:function(){return d},vw:function(){return o}});var t=r(165),a=r(861),c=r(243),i="https://api.themoviedb.org/3/",u={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDI5ZGVlOTNiZTJjYThhZDQ2YmYyMWRlMTQ5ZWU1MiIsInN1YiI6IjY0ZGI0NGQ1ZjQ5NWVlMDI5MzU2OTE1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X9DeGRwHeq0vI0Xl8w9Nwm04Y3Uo2f5aEe62rr6KFDE"}},o=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"trending/movie/day?language=en-US"),u);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r,a,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.query,e.next=3,c.Z.get("".concat(i,"search/movie?query=").concat(r,"&include_adult=false&language=en-US&page=1"),u);case 3:return a=e.sent,o=a.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"movie/").concat(n,"?language=en-US"),u);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"movie/").concat(n,"/credits?language=en-US"),u);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var r,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"movie/").concat(n,"/reviews?language=en-US&page=1"),u);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},442:function(e,n,r){r.r(n),r.d(n,{default:function(){return l}});var t=r(439),a=r(689),c=r(87),i=r(791),u=r(184),o=function(e){var n=e.movie,r=n.overview,t=n.poster_path,a=n.original_title,c=n.vote_average,i=n.genres;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://i.pinimg.com/564x/e4/71/1e/e4711e46bea5264eaab661d643285ff6.jpg",width:"500",alt:a}),!t&&(0,u.jsx)("p",{children:"Sorry, we didn't find a poster."}),(0,u.jsx)("h2",{children:a}),(0,u.jsxs)("p",{children:["User score: ",Math.round(10*Number(c))," %"]}),(0,u.jsx)("p",{children:r}),(0,u.jsxs)("ul",{children:["Genres",i.map((function(e){return(0,u.jsx)("li",{children:e.name},e.id)}))]})]})},s=r(197),l=function(){var e,n,r=(0,i.useState)(null),l=(0,t.Z)(r,2),d=l[0],f=l[1],p=(0,a.UO)().movieId,h=(0,a.TH)(),v=(0,i.useRef)(null!==(e=null===(n=h.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,i.useEffect)((function(){p&&(0,s.Mc)(p).then((function(e){f(e)})).catch((function(e){console.error(e)}))}),[p]),(0,u.jsxs)("div",{children:[(0,u.jsx)(c.rU,{to:v.current,children:"Go back"}),d&&(0,u.jsx)(o,{movie:d}),(0,u.jsx)("h3",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]}),(0,u.jsx)(i.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:(0,u.jsx)(a.j3,{})})]})}}}]);
//# sourceMappingURL=442.2a2eb40c.chunk.js.map