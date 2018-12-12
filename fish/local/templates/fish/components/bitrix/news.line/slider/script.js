/*

 Sudo Slider version 3.4.1 - jQuery plugin
 Written by Erik Krogh Kristensen erik@webbies.dk.
 http://webbies.dk/SudoSlider/

 Dual licensed under the MIT and GPL licenses.

 Based on EasySlider http://cssglobe.com/easy-slider-17-numeric-navigation-jquery-slider/
 But bear little resemblance at this point.

 Built for jQuery library
 http://jquery.com

*/
(function(h,kb){function sa(){return{effect:"slide",speed:1500,customLink:!1,controlsFadeSpeed:400,controlsFade:!0,insertAfter:!0,vertical:!1,slideCount:1,moveCount:1,startSlide:1,responsive:!0,ease:"swing",auto:!1,pause:2E3,resumePause:!1,continuous:!1,prevNext:!0,numeric:!1,numericText:[],slices:15,boxCols:8,boxRows:4,initCallback:R,ajaxLoad:R,beforeAnimation:R,afterAnimation:R,history:!1,autoHeight:!0,autoWidth:!0,updateBefore:!1,ajax:!1,preloadAjax:100,loadingText:"",prevHtml:'<a href="#" class="prevBtn fa">&#xf104;</a>',
    nextHtml:'<a href="#" class="nextBtn fa">&#xf105;</a>',controlsAttr:'class="controls"',numericAttr:'class="numericControls"',interruptible:!1,useCSS:!0,loadStart:R,loadFinish:R,touch:!1,touchHandle:!1,destroyCallback:R,mouseTouch:!0,allowScroll:!0,CSSease:"swing"}}function ea(a,b,d,f,G){if(h.isFunction(b))f?ea(a,["","Up","Right","Down","Left",b],d,0,G):a[d]=function(a){var d=[a].concat(G),k=d.length-1;if(0===f&&0==d[k]){var l=a.diff;d[k]=a.options.vertical?0>l?1:3:0>l?2:4}b.apply(this,d)};else if(h.isArray(b))for(var l=
    b.length-1,q=b[l],m=0;m<l;m++){var p=G.slice();p.push(m);ea(a,q,d+b[m],f,p)}else h.each(b,function(b,l){ea(a,l,d+b,f,G)})}function la(a,b,d,f,G,l,q,m,p){var r=a.options,v=r.boxrows,k=r.boxcols,g=v*k,x=r.speed/(1==g?1:2.5),u=Ia(a,k,v,!m),n=r=0,y=0,H=[];H[n]=[];b&&pa(u);G&&qa(u);for(var w=0;w<u.length;w++)H[n][y]=u[w],y++,y==k&&(d&&pa(H[n]),n++,y=0,H[n]=[]);n=[];if(1==l)for(u=0;u<2*k+1;u++){g=u;w=[];for(l=0;l<v;l++){if(0<=g&&g<k){y=H[l][g];if(!y)return;w.push(y)}g--}0!=w.length&&n.push(w)}else if(2==
    l){var H=v/2,y=b?g:-1,Z=b?-1:1;for(l=0;l<H;l++){for(g=w=l;g<k-l-1;g++)n[y+=Z]=u[w*k+g];g=k-l-1;for(w=l;w<v-l-1;w++)n[y+=Z]=u[w*k+g];w=v-l-1;for(g=k-l-1;g>l;g--)n[y+=Z]=u[w*k+g];g=l;for(w=v-l-1;w>l;w--)n[y+=Z]=u[w*k+g]}}else for(u=0;u<v;u++)for(g=0;g<k;g++)n.push([H[u][g]]);m&&a.goToNext();for(var D=0,w=0;w<n.length;w++){v=n[w];h.isArray(v)||(v=[v]);for(k=0;k<v.length;k++)(function(l,k){function h(k){var g=l(),v=g.children(),n=g.width(),w=g.height(),r=n,u=w,y=fa(g.css("left")),H=fa(g.css("top")),A=
    y,Z=H,P=fa(v.css("left")),z=fa(v.css("top")),N=P,Q=z;if(q){var aa,R;G?(R=wa([-r,r]),aa=wa([-u,u])):(R=b!=d?-r:r,aa=b?-u:u);m?(A-=1.5*R,Z-=1.5*aa):g.css({left:y+1.5*R,top:H+1.5*aa})}f&&(m?(N-=r/2,A+=r/2,Q-=u/2,Z+=u/2,u=r=0):(g.css({left:y+r/2,top:H+u/2}),v.css({left:P-r/2,top:z-u/2}),g.width(0).height(0),p&&g.css({borderRadius:T(w,n)})));m&&g.css({opacity:1});D++;xa(function(){Ka.ready(function(){U(v,{left:N,top:Q},x,!1,!1,a);U(g,{opacity:m?0:1,width:r,height:u,left:A,top:Z,borderRadius:f&&m&&p?T(w,
        n):0},x,!1,function(){D--;0==D&&a.callback()},a)})},k)}m||150>k?h(k):xa(N(h,[150]),k-150)})(v[k],r);r+=x/n.length*1.5}}function ba(a,b,d,f,G,l,q,m){for(var p=a.options,r=p.slices,v=p.speed/2,p=a.slider,k=Ia(a,b?r:1,b?1:r,!m),g=h(),x=0;x<k.length;x++)g=g.add(k[x]());var u=0,n=!1;d?pa(g):h(pa(g.get())).appendTo(p);f&&qa(g);g.each(function(f){f*=v/r;var k=h(this),g=k.width(),p=k.height(),x=k.css("left"),D=k.css("top"),A=b?x:D,P=k.children()[b?"width":"height"]();1==l?A=0:2==l&&(A=P/2);d&&(A=P-A);b?k.css({width:G||
    q?g:0,left:A}):k.css({height:G||q?p:0,top:A});m&&(A=1==q?-1:1,k.css({top:D,left:x,width:g,height:p,opacity:1}),b?D=A*p:x=A*g);q&&(A=!0,3==q?n=n?A=!1:!0:2==q&&(A=!1),b?m?D=(A?-1:1)*p:k.css({bottom:A?0:p,top:A?p:0,height:m?p:0}):m?x=(A?-1:1)*g:k.css({right:A?0:g,left:A?g:0,width:m?g:0}));u++;xa(N(U,[k,{width:g,height:p,opacity:m?0:1,left:x,top:D},v,!1,function(){u--;0==u&&a.callback()},a]),f)});m&&a.goToNext()}function ya(a,b,d){var f=2==d||4==d;d=2==d||3==d?1:-1;var h=a.options.speed,l=a.callback;
    if(b){b=a.fromSlides;var q=ga(a,!0).hide();a.slider.append(q);var m=T(q.height(),b.height()),p=T(q.width(),b.width());q.css(f?{left:d*p}:{top:d*m}).show();U(q,{left:0,top:0},h,!1,l,a)}else b=ga(a,!1),a.slider.append(b),a.goToNext(),q=a.toSlides,q=-1==d?b:q,m=q.height(),p=q.width(),U(b,f?{left:d*p}:{top:d*m},h,!1,l,a)}function $a(a){var b=La(a.slider),d=a.options.speed,f=a.target,h=f.left,f=f.top;a.options.usecss?U(b,{transform:"translate("+h+"px, "+f+"px)"},d,!1,a.callback,a,!0):U(b,{marginTop:f,
    marginLeft:h},d,!1,a.callback,a)}function U(a,b,d,f,h,l,q){function m(){if(!q){var b={};b[k]="0s";b[g]="";b[v]="";a.css(b)}}var p=!l||l.options.usecss;if(!1!==ha&&p){f||(f=l.options.cssease);var r={},v=ha+"transition",p=Ma(b);r[v]=p.join(" ")+(""==ha?"":" "+ha+p.join(" "+ha));var k=v+"-duration";r[k]=d+"ms";var g=v+"-timing-function";"swing"==f&&(f="ease-in-out");r[g]=f;l&&l.stopCallbacks.push(m);f=ha.replace(/\-/g,"");var x=f+((f?"T":"t")+"ransitionend")+" transitionend",u=!1,n=function(){u||(u=
    !0,a.unbind(x),m(),h&&h())};if(20>d)a.css(b),n();else return z(function(){a.css(r);z(function(){a.css(b);var f=+new Date;a.on(x,function w(b){a.is(b.target)&&-100<+new Date-f-d&&(a.off(x,w),n())});setTimeout(n,d+100)})}),n}else f||(f=l.options.ease),a.animate(b,d,f,h)}function za(a,b){var d=a.options;d.boxcols=1;d.boxrows=1;d.speed=b;la(a,!1)}function Ia(a,b,d,f){function G(b,d){m.push(function(){var g=ga(a,f),g=Aa(g,k*b,v*d,k,v);l.append(g);return g})}var l=a.slider,q=a.options.vertical,m=[],p;p=
    q?f?a.toSlides.width():a.slider.width():0;var r;r=q?0:f?a.toSlides.height():a.slider.height();a.toSlides.each(function(){var a=h(this);q?r+=a.height():p+=a.width()});for(var v=Math.ceil(p/b),k=Math.ceil(r/d),g=0;g<d;g++)for(var x=0;x<b;x++)G(g,x);return m}function Aa(a,b,d,f,G){a.css({width:a.width(),height:a.height(),display:"block",top:-b,left:-d});return h("<div>").css({left:d,top:b,width:G,height:f,opacity:0,overflow:"hidden",position:"absolute"}).append(a).addClass("sudo-box")}function ga(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       b){var d=b?a.toSlides:a.fromSlides,f=d.eq(0).position(),G=f.left,l=f.top,q=0,m=0,p=h("<div>").css({position:"absolute",top:0,left:0}).addClass("sudo-box");d.each(function(a,b){var d=h(b),f=d.outerWidth(!0),x=d.outerHeight(!0),u=d.clone(),n=d.position(),d=n.left-G,n=n.top-l;u.css({position:"absolute",left:d,top:n,opacity:1});q=T(q,n+x);m=T(m,d+f);p.append(u)});p.width(m).height(q);return p}function N(a,b){return function(){a.apply(ma,b)}}function ia(a,b,d){if(a){a=a.add(a.find("img")).filter("img");
    var f=a.length;f?a.each(function(){var a=h(this),l=function(){a.off("load error",l);f--;b?0==f&&d():d()};a.on("load error",l);if("complete"==this.readyState)a.trigger("load");else if(this.readyState)this.src=this.src;else if(this.complete)a.trigger("load");else if(this.complete===ma){var q=this.src;this.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";this.src=q}}):d()}else d()}function yb(a){for(var b=h.fn.jquery.split("."),d=b.length,f=0;f<d;f++)if(a[f]&&+b[f]<+a[f])return!1;
    return!0}function ab(a){return a.replace(/^\s+|\s+$/g,"")}function Ma(a){var b=[],d;for(d in a)b.push(d);return b}function z(a){setTimeout(a,0)}function xa(a,b){return setTimeout(a,b)}function pa(a){return[].reverse.call(a)}function La(a){return a.children().not(".sudo-box")}function Ba(a){var b={},d;for(d in a)b[d.toLowerCase()]=a[d];return b}function qa(a){for(var b,d,f=a.length;f;b=parseInt(Math.random()*f),d=a[--f],a[f]=a[b],a[b]=d);return a}function D(a){return parseInt(a,10)}function fa(a){return parseFloat(a)}
    function Ca(a,b){return(a%b+b)%b||0}function Q(a){return 0>a?-a:a}function T(a,b){return a>b?a:b}function Na(a,b){return a<b?a:b}function Oa(a){if(h.isArray(a))return na(a);if(h.isFunction(a))return a;a=ab(a);if(-1!=a.indexOf(",")){var b=a.split(",");return na(b)}var d=Ba(da);a=ab(a.toLowerCase());if(b=d[a])return b;var b=[],f;for(f in d)f.match(new RegExp("^"+a.split("*").join(".*")+"$","g"))&&b.push(d[f]);return b.length?na(b):$a}function na(a){return function(b){var d=wa(a);return Oa(d)(b)}}function wa(a){return a[qa(Ma(a))[0]]}
    function zb(a){var b="bez_"+a.join("_").replace(/\./g,"p"),d=h.easing;if(!h.isFunction(d[b])){var f=function(a,b){function d(q,k){r[k]=3*a[k];h[k]=3*(b[k]-a[k])-r[k];f[k]=1-r[k]-h[k];return q*(r[k]+q*(h[k]+q*f[k]))}var f=[0,0],h=[0,0],r=[0,0];return function(a){for(var b=a,g=0,l;14>++g;){l=d(b,0)-a;if(.001>Q(l))break;b-=l/(r[0]+b*(2*h[0]+3*f[0]*b))}return d(b,1)}};d[b]=function(b,d,h,m,p){return m*f([a[0],a[1]],[a[2],a[3]])(d/p)+h}}return b}var ma,R=function(){},ha=function(){var a;a:{var b=h("<div>")[0].style;
        for(a in b)if(b=a.toLowerCase(),-1!==b.indexOf("transition",b.length-10))break a;a=!1}if(!1===a)return!1;a=a.slice(0,a.length-10);return 0!=a.length?"-"+a+"-":""}(),bb=h(kb),Ka=h(document);h.fn.sudoSlider=function(a){var b=this;a=h.extend(Ba(sa()),Ba(a));!1!==ha&&yb([1,8,0])||(a.usecss=!1);return this.each(function(){function d(){var e=0,a;for(a in oa)c[e]=oa[a],e++;V=!0;Pa=[];cb=[];Qa=[];Ea=[];Ra=[];B=La(M);e=B.length;a=h("<div>");e?(Sa=B.is("ul"))||B.hasClass("slidesContainer")||lb||(a.append(B),
        M.append(B=a)):(M.append(B=a),Sa=!1);lb=!0;e=La(B);I=[];C=e.length;e.each(function(e,a){var b=h(a);I[e]=b;b.css({position:"relative"});"none"==b.css("display")&&b.css("display","inline")});B.addClass("slidesContainer");e.addClass("slide");e.each(function(e,a){h(a).attr("data-slide",e+1)});if(c[30]&&(a=c[30].length,a>C)){for(e=1;e<=a-C;e++){var b;b=Sa?"li":"div";b=h("<"+b+">"+c[32]+"</"+b+">");B.append(b);I[C+(e-1)]=b}e=La(B);C=a}e.each(function(e,a){Pa[e]=!1;ia(h(a),!0,function(){Pa[e]=!0})});t=(t=
        !1===ca?0:ca)||0;X=!0;Ta=[];ja=!1;M.css({overflow:"hidden"});"static"==M.css("position")&&M.css({position:"relative"});e.css({"float":"left",listStyle:"none"});B.add(e).css({display:"block",position:"relative",margin:"0"});A(0,0,!0);c[7]=D(c[7]);S=c[7];c[7]+=c[8]-1;"string"==typeof c[9]&&"random"==c[9].toLowerCase()&&(c[9]=Math.random()*C|0);c[9]=D(c[9])-1||0;c[0]=Oa(c[0]);c[18]=c[18].slice(0);for(e=0;e<C;e++)c[18][e]||""==c[18][e]||(c[18][e]=e+1),c[30][e]=c[30][e]||!1;c[4]=c[4]&&!c[15];c[10]&&G(!0);
        B[c[6]?"height":"width"](9E6)[c[6]?"width":"height"]("100%");c[28]=c[28]&&!c[10];c[10]&&Fa(bb,"resize focus",G,"");if(c[17]||c[16]){ra=h("<span "+c[35]+"></span>");M[c[5]?"after":"before"](ra);if(c[17])for(db=h("<ol "+c[36]+"></ol>"),ra.prepend(db),b=(a="pages"==c[17])?S:1,e=0;e<C-(c[15]||a?1:S)+1;e+=b)Ta[e]=h('<li data-target="'+(e+1)+'"><a href="#"><span>'+c[18][e]+"</span></a></li>").appendTo(db).click(function(){g(l(this)-1,!0);return!1});c[16]&&(mb=k(c[34],"next"),nb=k(c[33],"prev"));c[4]&&u(t,
            0)}e=[4,1,14];for(a=0;a<e.length;a++)c[e[a]]=v(c[e[a]]);c[2]&&Fa(Ka,"click",f,c[2]);ia(ya(c[9],c[7]),!0,function(){if(!1!==ca)Ua(ca,!1);else if(c[26]){var e;(e=bb.hashchange)?e(q):(e=h.address)?e.change(q):Fa(bb,"hashchange",q);q()}else Ua(c[9],!1);n(t)});c[30][c[9]]&&ta(c[9]);if(!0===c[31])for(a=0;a<C;a++)c[30][a]&&c[9]!=a&&ta(a);else m()}function f(){var e;if(e=l(this))"stop"==e?(c[12]=!1,r()):"start"==e?(p(),c[12]=!0):"block"==e?X=!1:"unblock"==e?X=!0:g(e==D(e)?e-1:e,!0);return!1}function G(e){function a(){if((M.is(":visible")&&
        !V&&!ja||!0===e)&&0!=C){var b;b=M.width();b=c[6]?b:b/S;if(ob!=b||!0===e){ob=b;for(var Da=0;Da<C;Da++)I[Da].width(b);!1!==Va&&p(Va);Ga();va();Y(t);H(t,0)}}}a();z(a);setTimeout(a,20)}function l(e){e=h(e);return e.attr("data-target")||e.attr("rel")}function q(){var e;a:{e=location.hash.substr(1);for(var a=0;a<c[18].length;a++)if(c[18][a]==e){e=a;break a}e=e&&!V?t:c[9]}V?Ua(e,!1):g(e,!1)}function m(){if(!1!==c[31]){var e=D(c[31]);if(c[30])for(var a=0;a<c[30].length;a++)if(c[30][a]){clearTimeout(Wa);Wa=
        xa(function(){c[30][a]?ta(D(a)):m()},e);break}}}function p(e){e===ma&&(e=I[t].attr("data-pause"),e=e!==ma?D(e):c[13]);eb&&(e=T(e,100));r();Xa=!0;Va=e;fb=xa(function(){Xa&&!ka&&(g("next",!1),Va=!1)},e)}function r(e){fb&&clearTimeout(fb);e||(Xa=!1)}function v(e){return D(e)||0==e?D(e):"fast"==e?200:"normal"==e||"medium"==e?400:600}function k(e,a){return h(e).prependTo(ra).click(function(){g(a,!0);return!1})}function g(e,a,b){if(X&&!V)r(!0),ja||Ba(e,a,b);else if(c[37]&&ka)E(fa(e))!==gb&&(Ga(),g(e,a,
        b));else if(Ya=e,pb=a,qb=b,c[30])for(a=e=fa(e);a<e+S;a++)c[30][a]&&ta(E(a))}function x(e,a,b){function d(){e||0!=f.css("opacity")||f.css({visibility:"hidden"})}e=e?1:0;var f=h();c[16]&&(f=b?mb:nb);if(c[2]){var g=h(c[2]);b='="'+(b?"next":"prev")+'"]';g=g.filter("[rel"+b+", [data-target"+b+"");f=f.add(g)}g={opacity:e};e&&f.css({visibility:"visible"});c[38]?U(f,g,a,c[46],d):f.animate(g,{queue:!1,duration:a,easing:c[11],callback:d})}function u(e,a){x(e,a,!1);x(e<C-S,a,!0)}function n(e){e=E(e)+1;"pages"!=
    c[17]||e!=C-S+1||c[15]||(e=C);if(c[17])for(var a=0;a<Ta.length;++a)y(Ta[a],e);c[2]&&y(h(c[2]),e)}function y(e,a){e&&e.filter&&(e.filter(".current").removeClass("current"),e.filter(function(){var e=l(this);if("pages"==c[17])for(var b=S-1;0<=b;b--){if(e==a-b)return!0}else return e==a;return!1}).addClass("current"))}function H(e,a){rb=e=E(e);hb=+new Date+a;(c[27]||c[28])&&w(e)}function w(e){M.ready(function(){ba(e);ia(I[e],!1,N(ba,[e]))})}function R(e,a){for(var b=0,d=e;d<e+S;d++){var f=I[E(d)];f&&(f=
        f["outer"+(a?"Height":"Width")](!0),b=a==c[6]?b+f:T(f,b))}return b}function ba(e){if(e==rb&&M.is(":visible")&&!V&&!ja){var a=hb-+new Date,a=T(a,0),b={};c[27]&&(b.height=R(e,!0)||1);c[28]&&(b.width=R(e,!1)||1);var d;a:if(e=sb,Ma(e).length!=Ma(b).length)d=!1;else{for(d in e)if(e[d]!=b[d]){d=!1;break a}d=!0}d||(sb=b,c[38]?U(M,b,a,c[46]):0==a?M.stop().css(b):M.animate(b,{queue:!1,duration:a,easing:c[11]}))}}function Y(e){var a=P(e,!1);e=P(e,!0);A(a,e)}function A(e,a,b){tb=e;ub=a;(c[38]||b)&&B.css({transform:"translate("+
            e+"px, "+a+"px)"});if(!c[38]||b)B.css({marginLeft:0,marginTop:0}),B.css({marginLeft:e,marginTop:a})}function P(a,b){b==ma&&(b=c[6]);var d=I[E(a)];return d&&d.length?-d.position()[b?"top":"left"]:0}function da(){if(!1!==Ya){var a=Ya;Ya=!1;z(N(g,[a,pb,qb]))}}function ea(a,b,c,d){a=E(a);a=N(b?la:pa,[I[a],a+1,d]);c?a():z(a)}function la(a,d){c[25].call(a,d,b)}function pa(a,d,f){c[24].call(a,d,b,f)}function fa(a){return"next"==a?ga(t+c[8],a):"prev"==a?ga(t-c[8],a):"first"==a?0:"last"==a?C-1:ga(D(a),a)}
        function ga(a,b){if(c[15])return"next"==b||"prev"==b?a:E(a);var d=C-S;return a>d?t==d&&"next"==b?0:d:0>a?0==t&&"prev"==b?d:0:a}function ta(a,b){function d(){var b=new Image;b.src=g;var c=h(b);ia(c,!0,N(ua,[function(){k.empty().append(b);na(a,!0)}]))}if(b){var f=Qa[a];f||(f=Qa[a]=[]);f.push(b)}if(Ra[a])b&&ia(I[a],!0,N(z,[b]));else if(!Ea[a]){Ea[a]=!0;var g=c[30][a];if(g){Wa&&clearTimeout(Wa);var k=I[a],l=!1;h.ajax({url:g,success:function(b,c,f){l=!0;ua(function(){var c=f.getResponseHeader("Content-Type");
                c&&"i"!=c.substr(0,1)?(k.html(b),na(a,!1)):d()})},complete:function(){l||d()}});c[30][a]=!1;oa.ajax[a]=!1}else z(b)}}function ua(a){ka?cb.push(a):z(a)}function na(a,d){var f=I[a];Y(t);H(t,0);ia(f,!0,N(ua,[function(){Y(t);H(t,0);Ra[a]=!0;Ja(Qa[a]);m();z(function(){c[23].call(I[a],a+1,d,b)});V&&(V=!1,z(qa))}]))}function qa(){c[15]&&aa(t,0);H(t,0);Y(t);da();c[10]&&G();c[12]&&p();c[22].call(b);c[41]&&wa();ia(ya(t,C),!1,N(ua,[function(){H(t,0);Y(t)}]))}function wa(){var a=h("body"),b,d=!1,f=c[0];c[0]=
            function(a){if(d){d=!1;var e=a.options;e.ease=b;e.cssease=b;return $a(a)}return f(a)};var g,k,l,p,m,q=[],r=[],u=0,n,v,w,G,D=!1,x=0,y=0,H=0,I=0,B=function(f){if(X){var W=f.type,B,O,F,J="m"==W.substr(0,1);J?(B="mousedown",O="mouseup",F=""):(B="touchstart",O="touchend",F="touchcancel",f=f.originalEvent);if(!D){if(W!=B)return;var K=f.target,E=h(K);c[42]||(E=E.parents().add(K));K=c[42]||M;"string"===typeof K&&(K=ab(K),">"==K.charAt(0)&&(K=h(K.substr(1,K.length),M)));if(E.filter(K).length)D=!0;else return}if(W!=
            O&&W!=F){J?(O=f.pageX,F=f.pageY):(F=f.touches[0],O=F.pageX,F=F.pageY);if(W==B)x=O,y=F,f=O-x,J=F-y,a.addClass("sudoSlider-dragging"),n=t,v=0,ka=!0,va(),k=ub,g=tb,m=c[6]?Q(J):Q(f),p=l=+new Date,f=P(n),w=P(n+1)-f,G=!1;else{W=O-x;B=F-y;E=c[6]?B:W;K=Q(E);q[u]=K-m;var N=+new Date;r[u]=N-p;u=(u+1)%3;p=N;m=K;if(c[15]&&C>=S+1){K=0;if(E-v<w){G=!1;v+=w;var K=1,L=P(n+K);aa(n+K,0);var z=P(n+K)}0<E-v&&(K=-1,L=P(n),aa(n+K,0),z=P(n),E=P(n-1)-z,v+=E,G=-E);0!=K&&(n+=K,c[6]?k-=L-z:g-=L-z,w=P(n+1)-P(n))}c[6]?W=0:B=0;
            A(g+W,k+B);L=O-x;L=Q(F-y)>Q(L);J=J?!1:c[45]?c[6]?!L:L:!1;J||f.preventDefault()}H=O-x;I=F-y}else{f=H;J=I;a.removeClass("sudoSlider-dragging");F=c[6]?J:f;F-=v;G&&(F-=G,n++);J=Q(F);O=+new Date;for(z=L=f=0;3>z;z++)W=r[z],W+100<O&&(f+=W,L+=q[z]);z=c[6]?M.height():M.width();O=Q(L)/f;f=.2<=O||J>=z/2;if(0<L&&0>J||0>L&&0<J||10>=J)f=!1;F=0>F?"next":"prev";c[15]||(t+1==C?"next"==F&&(f=!1):0==t&&"prev"==F&&(f=!1));F="next"==F?n+1:n-1;F=Ca(F,C);J=f?z-J:J;L=J/O*1.3;z=T(z/J*c[1],c[1]/4);L=L<z?Na(L,c[1]):Na(z,c[1]);
            J=O*L/(J+O*L);O=1-J;b=c[38]?"cubic-bezier("+O+","+J+",0.3,1)":zb([O||0,J||0,.3,1]);X=!1;d=!0;f?Ha(F,L,!0,!0,!0):Ha(n,L,!0,!0,!0);D=!1}}};Fa(Ka,"touchstart touchmove touchend touchcancel",B);c[44]&&Fa(Ka,"mousedown mousemove mouseup",B)}function Ja(a){for(;a&&a.length;)a.splice(0,1)[0]()}function Ba(a,d,f){var g=fa(a),h="next"==a||"prev"==a;a=E(g);if(a!=t)if(X=!1,gb=a,c[30]){for(var k=0,l=a;l<a+S;l++){var n=E(l);Pa[n]&&(c[30]?c[30][n]?0:!Ea[n]||Ra[n]:1)||(k++,ta(n,function(){k--;0==k&&(c[40].call(b,
            g+1),Ha(g,f,d,h))}))}0==k?Ha(g,f,d,h):c[39].call(b,g+1)}else Ha(g,f,d,h)}function va(){c[38]&&B.css(ha+"transition-duration","")}function sa(a){a=E(a);if(a!=vb){vb=a;va();for(var b=0;b<C;b++){var c=I[E(a+b)];B.append(c)}Y(t)}}function aa(a,b){var c=T(D((C-b-S)/2),0);a=Ca(a-c,C);sa(a)}function Ia(a){var b=Na(a,t);a=Q(a-t);aa(b,a)}function Ha(a,d,f,g,k){c[29]&&n(a);c[26]&&f&&(kb.location.hash=c[18][a]);c[4]&&u(a,c[3]);for(var l=h(),p=h(),m=0;m<S;m++)l=l.add(I[E(t+m)]),p=p.add(I[E(a+m)]);var m=a-t,q;
            if(c[15]&&!g){g=Q(m);q=a;var r=-t+a+C;Q(r)<g&&(q=a+C,m=r,g=Q(m));r=-t+a-C;Q(r)<g&&(q=a-C,m=r)}else q=a;c[15]&&!k&&Ia(q);k=P(q,!1);g=P(q,!0);var v=I[E(a)],r=h.extend(!0,{},oa),w=c[1],x=v.attr("data-speed");x!=ma&&(w=D(x));d!=ma&&(w=D(d));r.speed=w;var y=c[0];(d=v.attr("data-effect"))&&(y=Oa(d));I[t]&&(d=I[t].attr("data-effectout"))&&(y=Oa(d));ka=!0;wb=y;var A=!0;ib=function(){A=ka=!1;Ua(a,f);screen.fontSmoothingEnabled&&p.style&&p.style.removeAttribute("filter");c[15]&&aa(q,0);ea(a,!0);c[10]&&G();
                Ja(cb)};jb={fromSlides:l,toSlides:p,slider:M,container:B,options:r,to:a+1,from:t+1,diff:m,target:{left:k,top:g},stopCallbacks:[],callback:function(){A&&(A=!1,Ga())},goToNext:function(){A&&ia(h(".sudo-box",M),!0,N(Y,[a]))}};H(a,w);z(function(){ea(a,!1,!0,w);y.call(b,jb)})}function Ga(){if(ka){eb=!0;ib&&ib();Ja(jb.stopCallbacks);var a=wb.stop;a?a():(h(".sudo-box",M).remove(),B.stop());H(t,0);Y(t);eb=!1}}function Fa(a,b,c,d){a.on(b,d,c);xb.push(function(){a.off(b,d,c)})}function Ua(a,b){X=!b&&!c[12];
            t=a;va();H(t,0);t=E(t);c[29]||n(t);Y(t);X=!0;gb=!1;c[12]&&(b?(r(),c[14]&&p(c[14])):V||p());da();c[4]&&V&&u(t,0);!V||c[30][t]||Ea[t]||(V=!1,z(qa))}function ya(a,b){for(var c=h(),d=0;d<b;d++)c=c.add(I[E(a+d)]);return c}function E(a){return Ca(a,C)}function za(){r();Ga();H(t,0);ja=!0;ca=t;Ja(xb);va();ra&&ra.remove();sa(0);Y(t);c[43].call(b)}function Aa(){ja&&d()}function Za(a){return function(){var b=!ja;za();a.apply(this,arguments);b&&Aa()}}var V,Sa,B,I,Pa,C,t,X,gb,Ta,db,ja,ca=!1,ra,mb,nb,fb,Xa,S,Wa,
            M=h(this),rb,hb=0,ka=!1,wb,ib,jb,cb,Qa,Ea,Ra,Ya=!1,pb,qb,lb=!1,c=[],oa=h.extend(!0,{},a),ub,tb,xb=[],Va=!1,eb=!1,ob=-1,sb={},vb=0;b.destroy=za;b.init=Aa;b.getOption=function(a){return oa[a.toLowerCase()]};b.setOption=Za(function(a,b){oa[a.toLowerCase()]=b});b.setOptions=Za(function(a){for(var b in a)oa[b.toLowerCase()]=a[b]});b.runWhenNotAnimating=ua;b.insertSlide=Za(function(a,b,d,f){b=0>b?C-Ca(-b-1,C+1):Ca(b,C+1);a=h(a||"<div>");Sa?a=h("<li>").prepend(a):1!=a.length&&(a=h("<div>").prepend(a));b&&
        0!=b?I[b-1].after(a):B.prepend(a);f?ca=f-1:(b<=ca||!b||0==b)&&ca++;c[18].length<b&&(c[18].length=b);c[18].splice(b,0,d||D(b)+1)});b.removeSlide=Za(function(a){a=T(0,D(a)-1);I[Na(a,C-1)].remove();c[18].splice(a,1);a<ca&&ca--});b.goToSlide=function(a,b){var c=a==D(a)?a-1:a;z(N(g,[c,!0,b]))};b.block=function(){X=!1};b.unblock=function(){X=!0};b.startAuto=function(){c[12]=!0;p()};b.stopAuto=function(){c[12]=!1;r()};b.adjust=function Da(a){var b=T(hb-+new Date,0);H(t,b);ka||Y(t);a||z(N(Da,[!0]))};b.getValue=
            function(a){return{currentslide:t+1,totalslides:C,clickable:X,destroyed:ja,autoanimation:Xa}[a.toLowerCase()]};b.getSlide=function(a){return I[E(D(a)-1)]};b.stopAnimation=Ga;d()})};h.fn.sudoSlider.getDefaultOptions=sa;var Ab={box:{Random:["","GrowIn","GrowInRounded","GrowOut","GrowOutRounded","FlyIn","FlyOut",function(a,b){la(a,!1,!1,0<b&&5>b,!0,0,5==b||6==b,3==b||4==b||6==b,2==b||4==b)}],Rain:["","GrowIn","GrowInRounded","GrowOut","GrowOutRounded","FlyIn","FlyOut",["UpLeft","DownLeft","DownRight",
                "UpRight",function(a,b,d){la(a,0==d||3==d,1==d||3==d,1<=b&&4>=b,!1,1,5==b||6==b,6==b||3==b||4==b,2==b||4==b)}]],Spiral:["InWards","OutWards",{"":function(a,b){la(a,b,!1,!1,!1,2,!1,!1,!1)},Grow:["In","Out",["","Rounded",function(a,b,d,f){la(a,b,!1,!0,!1,2,!1,d,f)}]]}]},fade:{"":function(a){za(a,a.options.speed)},OutIn:function(a){var b=a.options.speed,d=D(.6*b),d=b-d;a.stopCallbacks.push(function(){a.fromSlides.stop().css({opacity:1})});U(a.fromSlides,{opacity:1E-4},d,!1,N(za,[a,b]),a)}},foldRandom:["Horizontal",
            "Vertical",function(a,b){ba(a,b,!1,!0)}],slide:$a,stack:["Up","Right","Down","Left",["","Reverse",function(a,b,d){var f=0<a.diff;d&&(f=!f);ya(a,f,++b)}]]},da={};ea(da,{blinds:["1","2",function(a,b,d){b++;ba(a,2==d||4==d,1==d||4==d,!1,!1,b)}],fold:function(a,b){ba(a,2==b||4==b,1==b||4==b)},push:["Out","In",ya],reveal:function(a,b){var d=1==b||3==b,f=a.options.speed,h=ga(a,!0),l=h.width(),q=h.height(),m=Aa(h,0,0,0,0).css({opacity:1}).appendTo(a.slider),p=m.add(h);p.hide();d?(m.css({width:l}),1==b&&
        (h.css({top:-q}),m.css({bottom:0,top:"auto"}))):(m.css({height:q}),4==b&&(h.css({left:-l}),m.css({right:0,left:"auto"})));p.show();d?p.width(l):p.height(q);U(h,{left:0,top:0},f,!1,R,a);U(m,{width:l,height:q},f,!1,a.callback,a)},slice:{"":["","Reveal",["","Reverse","Random",function(a,b,d,f){ba(a,1==f||3==f,d,2==d,!1,0,1==f||4==f?1:2,b)}]],Fade:function(a,b){ba(a,2==b||4==b,1==b||4==b,!1,!0)}},zip:function(a,b){ba(a,2==b||4==b,1==b||4==b,!1,!1,0,3)},unzip:function(a,b){ba(a,2==b||4==b,1==b||4==b,!1,
            !1,0,3,!0)}},"",!0,[]);ea(da,Ab,"",!1,[]);da.random=na(da);h.fn.sudoSlider.effects=da})(jQuery,window);


$(document).ready(function(){
    var sudoSlider = $("#slider").sudoSlider({
        //effect: "fade",
        responsive: true,
        pause: 6000,
        auto:true,
        prevNext:true,
        numeric:true,
        continuous:true
    });
});