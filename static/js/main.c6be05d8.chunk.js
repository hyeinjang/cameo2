(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{34:function(e,t,a){e.exports=a(66)},39:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),i=(a(39),a(9)),s=a(6);var l=function(){return r.a.createElement("h2",null,"I built it because I love movies!")},m=a(11),u=a.n(m),v=a(25),p=a(26),d=a(27),E=a(32),h=a(28),_=a(33),f=(a(41),a(29)),g=a.n(f);a(59);var y=function(e){e.id;var t=e.title,a=e.summary,n=e.poster,o=e.year,c=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:n,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},o),r.a.createElement("ul",{className:"movie__genres"},c.map((function(e,t){return r.a.createElement("li",{key:t,className:"genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},a.slice(0,200),"...")))},b=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(v.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(_.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,title:e.title,summary:e.summary,poster:e.medium_cover_image,year:e.year,genres:e.genres})})))}}]),t}(r.a.Component);a(60);var w=function(e){return console.log(e),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",className:"nav__list"},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/about",className:"nav__list"},"About"))))};var N=function(){return r.a.createElement(i.a,null,r.a.createElement(w,null),r.a.createElement(s.a,{path:"/",exact:!0,component:b}),r.a.createElement(s.a,{path:"/about",exact:!0,component:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.c6be05d8.chunk.js.map