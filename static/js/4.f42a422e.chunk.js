(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{288:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return r})},292:function(e,t,n){e.exports={usersList:"users_usersList__38Arp",userPhoto:"users_userPhoto__aY0er"}},293:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__2go-R",pageNumber:"Paginator_pageNumber__WT4E4"}},294:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},297:function(e,t,n){"use strict";n.r(t);var r=n(53),a=n(54),o=n(56),s=n(55),c=n(34),l=n(0),u=n.n(l),i=n(19),f=n(292),p=n.n(f),g=n(23),m=n(37),d=n(288),h=n(293),b=n.n(h),v=n(294),E=n.n(v),P=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.onPagesChanged,a=e.currentPage,o=e.portionSize,s=Math.ceil(t/n),c=[],i=1;i<=s;i++)c.push(i);var f=Math.ceil(s/o),p=Object(l.useState)(1),g=Object(d.a)(p,2),h=g[0],v=g[1],P=(h-1)*o+1,y=h*o;return u.a.createElement("div",null,h>1&&u.a.createElement("button",{onClick:function(){v(h-1)}},"PREV"),c.filter(function(e){return e>=P&&e<=y}).map(function(e){return u.a.createElement("span",{key:e+2,className:E()(Object(m.a)({},b.a.selectedPage,a===e),b.a.pageNumber),onClick:function(){r(e)}},e," ")}),f>h&&u.a.createElement("button",{onClick:function(){v(h+1)}},"NEXT"))},y=function(e){var t=e.users,n=e.followingInProgress;return u.a.createElement("div",null,u.a.createElement(P,{totalItemsCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPagesChanged:e.onPagesChanged,portionSize:10}),u.a.createElement("div",{className:p.a.usersList},!t.length&&u.a.createElement("span",null,"users not found"),t.map(function(t){return u.a.createElement("div",{className:p.a.user,key:t.id},u.a.createElement("span",null,u.a.createElement("div",null,u.a.createElement(g.b,{to:"/profile/"+t.id},u.a.createElement("img",{src:null!=t.photos.small?t.photos.small:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbjDT4_86P3Ig4JwojvIDUwEbgw4bDS6QMq8O96XkIKiWAK8g",className:p.a.userPhoto}))),u.a.createElement("div",null,t.followed?u.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){e.unfollowUser(t.id)}}," Unfollow"):u.a.createElement("button",{disabled:n.some(function(e){return e===t.id}),onClick:function(){e.followUser(t.id)}},"Follow"))),u.a.createElement("span",null,u.a.createElement("span",null,u.a.createElement("div",null,t.name),u.a.createElement("div",null,t.status))))})))},w=n(28),j=n(88),O=n(8),C=n(33);function _(e){return function(){var t,n=Object(c.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=Object(c.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(s.a)(this,t)}}var k=function(e){Object(o.a)(n,e);var t=_(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).onPagesChanged=function(t){e.props.setCurrentPage(t),e.props.getUsers(t)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){!this.props.users.length&&this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,this.props.isFetching?u.a.createElement(j.a,null):null,u.a.createElement(y,Object.assign({},this.props,{onPagesChanged:this.onPagesChanged})))}}]),n}(u.a.Component);t.default=Object(O.d)(Object(i.b)(function(e){return{users:Object(C.o)(e),status:Object(C.l)(e),pageSize:Object(C.h)(e),totalUsersCount:Object(C.m)(e),currentPage:Object(C.c)(e),isFetching:Object(C.g)(e),followingInProgress:Object(C.e)(e)}},{followUser:w.b,unfollowUser:w.g,getUsers:w.c,setCurrentPage:w.d,togleFollowingProgress:w.e}))(k)}}]);
//# sourceMappingURL=4.f42a422e.chunk.js.map