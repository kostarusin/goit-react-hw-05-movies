"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[23],{197:function(n,e,t){t.d(e,{LI:function(){return s},Mc:function(){return f},r7:function(){return h},uV:function(){return p},vw:function(){return i}});var r=t(165),a=t(861),u=t(243),c="https://api.themoviedb.org/3/",o={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDI5ZGVlOTNiZTJjYThhZDQ2YmYyMWRlMTQ5ZWU1MiIsInN1YiI6IjY0ZGI0NGQ1ZjQ5NWVlMDI5MzU2OTE1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X9DeGRwHeq0vI0Xl8w9Nwm04Y3Uo2f5aEe62rr6KFDE"}},i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(c,"trending/movie/day?language=en-US"),o);case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,n.next=3,u.Z.get("".concat(c,"search/movie?query=").concat(t,"&include_adult=false&language=en-US&page=1"),o);case 3:return a=n.sent,i=a.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(c,"movie/").concat(e,"?language=en-US"),o);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(c,"movie/").concat(e,"/credits?language=en-US"),o);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(c,"movie/").concat(e,"/reviews?language=en-US&page=1"),o);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},23:function(n,e,t){t.r(e);var r=t(439),a=t(689),u=t(791),c=t(197),o=t(184);e.default=function(){var n=(0,u.useState)([]),e=(0,r.Z)(n,2),t=e[0],i=e[1],s=(0,a.UO)().movieId;return(0,u.useEffect)((function(){s&&(0,c.r7)(s).then((function(n){i(n.results)})).catch((function(n){console.error(n)}))}),[s]),(0,o.jsx)("ul",{children:t&&t.map((function(n){return(0,o.jsxs)("li",{children:[(0,o.jsx)("p",{children:n.author}),n.content]},n.id)}))})}}}]);
//# sourceMappingURL=23.d3990ffe.chunk.js.map