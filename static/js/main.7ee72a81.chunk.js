(this["webpackJsonprobertos-movies"]=this["webpackJsonprobertos-movies"]||[]).push([[0],{15:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(16),a=n.n(r),s=(n(22),n(23),n(4)),o=n.n(s),l=n(5),d=n(3),b=n(17),j=n.n(b).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(n(43),n(15),n(0));function u(e){var t,n,i=e.name,c=e.description,r=e.image;return Object(h.jsx)("div",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url(\n                https://image.tmdb.org/t/p/original/".concat(r,"\n                )"),backgroundPosition:"center center"},children:Object(h.jsx)("div",{className:"banner-fade-bottom",children:Object(h.jsxs)("div",{className:"banner-contents",children:[Object(h.jsx)("h1",{className:"banner-title",children:i}),Object(h.jsx)("div",{className:"banner-buttons",children:Object(h.jsx)("a",{href:"https://www.youtube.com/results?search_query=trailer+".concat(i),target:"_blank",className:"banner-button",children:"Find YouTube Trailer"})}),Object(h.jsx)("h2",{className:"banner-description",children:(t=c,n=400,(null===t||void 0===t?void 0:t.length)>n?t.substr(0,n-1)+"...":t)})]})})})}function v(e){var t=e.title,n=e.fetchUrl,c=e.isLargeRow,r=Object(i.useState)([]),a=Object(d.a)(r,2),s=a[0],b=a[1],v=Object(i.useState)(""),m=Object(d.a)(v,2),p=m[0],g=m[1],f=Object(i.useState)(""),O=Object(d.a)(f,2),x=O[0],y=O[1],_=Object(i.useState)(""),w=Object(d.a)(_,2),k=w[0],U=w[1];Object(i.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(n);case 2:return t=e.sent,b(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);return Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("h2",{children:t}),Object(h.jsxs)("div",{className:"row-posters",children:["",s.map((function(e){return Object(h.jsx)("img",{onClick:function(){return function(e){p&&x&&k?(g(""),y(""),U("")):(g(e.title||e.name),y(e.overview),U(e.backdrop_path))}(e)},className:"row-poster ".concat(c&&"row-poster-large"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),alt:e.name},e.id)}))]}),Object(h.jsx)("div",{children:p&&Object(h.jsx)(u,{name:p,description:x,image:k})})]})}var m="0fa5fd85b7f9899ab54b5ff41e400aa1",p={Trending:"/trending/all/week?api_key=".concat(m,"&language=en-US"),TopRated:"/movie/top_rated?api_key=".concat(m,"&language=en-US"),NetflixOriginals:"/discover/tv?api_key=".concat(m,"&with_networks=213"),Action:"/discover/movie?api_key=".concat(m,"&with_genres=28"),Adventure:"/discover/movie?api_key=".concat(m,"&with_genres=12"),Animation:"/discover/movie?api_key=".concat(m,"&with_genres=16"),Comedy:"/discover/movie?api_key=".concat(m,"&with_genres=35"),Crime:"/discover/movie?api_key=".concat(m,"&with_genres=80"),Drama:"/discover/movie?api_key=".concat(m,"&with_genres=18"),Family:"/discover/movie?api_key=".concat(m,"&with_genres=10751"),Fantasy:"/discover/movie?api_key=".concat(m,"&with_genres=14"),History:"/discover/movie?api_key=".concat(m,"&with_genres=36"),Horror:"/discover/movie?api_key=".concat(m,"&with_genres=27"),Music:"/discover/movie?api_key=".concat(m,"&with_genres=10402"),Mystery:"/discover/movie?api_key=".concat(m,"&with_genres=9648"),Romance:"/discover/movie?api_key=".concat(m,"&with_genres=10749"),ScienceFiction:"/discover/movie?api_key=".concat(m,"&with_genres=878"),TVMovie:"/discover/movie?api_key=".concat(m,"&with_genres=10770"),Thriller:"/discover/movie?api_key=".concat(m,"&with_genres=53"),War:"/discover/movie?api_key=".concat(m,"&with_genres=10752"),Western:"/discover/movie?api_key=".concat(m,"&with_genres=37")};function g(){var e,t,n=Object(i.useState)([]),c=Object(d.a)(n,2),r=c[0],a=c[1];return Object(i.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get(p.Trending);case 2:t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(h.jsx)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url(\n                https://image.tmdb.org/t/p/original/".concat(null===r||void 0===r?void 0:r.backdrop_path,"\n            )"),backgroundPosition:"center center"},children:Object(h.jsx)("div",{className:"banner-fade-bottom",children:Object(h.jsxs)("div",{className:"banner-contents",children:[Object(h.jsx)("h1",{className:"banner-title",children:(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)}),Object(h.jsx)("div",{className:"banner-buttons",children:Object(h.jsx)("a",{href:"https://www.youtube.com/results?search_query=trailer+".concat((null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)),target:"_blank",className:"banner-button",children:"Find YouTube Trailer"})}),Object(h.jsx)("h2",{className:"banner-description",children:(e=null===r||void 0===r?void 0:r.overview,t=400,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]})})})}var f=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(g,{}),Object(h.jsx)(v,{title:"Trending Now",fetchUrl:p.Trending}),Object(h.jsx)(v,{title:"Top Rated",fetchUrl:p.TopRated}),Object(h.jsx)(v,{title:"Action",fetchUrl:p.Action}),Object(h.jsx)(v,{title:"Adventure",fetchUrl:p.Adventure}),Object(h.jsx)(v,{title:"Animation",fetchUrl:p.Animation}),Object(h.jsx)(v,{title:"Comedy",fetchUrl:p.Comedy}),Object(h.jsx)(v,{title:"Crime",fetchUrl:p.Crime}),Object(h.jsx)(v,{title:"Drama",fetchUrl:p.Drama}),Object(h.jsx)(v,{title:"Family",fetchUrl:p.Family}),Object(h.jsx)(v,{title:"Fantasy",fetchUrl:p.Fantasy}),Object(h.jsx)(v,{title:"History",fetchUrl:p.History}),Object(h.jsx)(v,{title:"Horror",fetchUrl:p.Horror}),Object(h.jsx)(v,{title:"Music",fetchUrl:p.Music}),Object(h.jsx)(v,{title:"Mystery",fetchUrl:p.Mystery}),Object(h.jsx)(v,{title:"Netflix Originals",fetchUrl:p.NetflixOriginals}),Object(h.jsx)(v,{title:"Romance",fetchUrl:p.Romance}),Object(h.jsx)(v,{title:"Science Fiction",fetchUrl:p.ScienceFiction}),Object(h.jsx)(v,{title:"TV",fetchUrl:p.TVMovie}),Object(h.jsx)(v,{title:"Thriller",fetchUrl:p.Thriller}),Object(h.jsx)(v,{title:"War",fetchUrl:p.War}),Object(h.jsx)(v,{title:"Western",fetchUrl:p.Western})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),O()}},[[45,1,2]]]);
//# sourceMappingURL=main.7ee72a81.chunk.js.map