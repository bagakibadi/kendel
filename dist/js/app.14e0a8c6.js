(function(a){function t(t){for(var e,r,o=t[0],l=t[1],d=t[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(a[e]=l[e]);c&&c(t);while(m.length)m.shift()();return n.push.apply(n,d||[]),s()}function s(){for(var a,t=0;t<n.length;t++){for(var s=n[t],e=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(e=!1)}e&&(n.splice(t--,1),a=r(r.s=s[0]))}return a}var e={},i={app:0},n=[];function r(t){if(e[t])return e[t].exports;var s=e[t]={i:t,l:!1,exports:{}};return a[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=a,r.c=e,r.d=function(a,t,s){r.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:s})},r.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},r.t=function(a,t){if(1&t&&(a=r(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var e in a)r.d(s,e,function(t){return a[t]}.bind(null,e));return s},r.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return r.d(t,"a",t),t},r.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var c=l;n.push([0,"chunk-vendors"]),s()})({0:function(a,t,s){a.exports=s("56d7")},"034f":function(a,t,s){"use strict";s("85ec")},"4a8c":function(a,t,s){},"56d7":function(a,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r=(s("034f"),s("2877")),o={},l=Object(r["a"])(o,i,n,!1,null,null,null),d=l.exports,c=s("9483");Object(c["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(a){console.error("Error during service worker registration:",a)}});var u=s("8c4f"),m=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("Navbar"),s("Header"),a._m(0),a._m(1),s("div",{staticClass:"action-section bg-white",staticStyle:{overflow:"hidden"},attrs:{id:"berita"}},[s("div",{staticClass:"container"},[a._m(2),s("div",{staticClass:"row"},[a._l(a.pageOfItems,(function(t){return s("div",{key:t.id,staticClass:"col-md-4",attrs:{"data-aos":"fade-up-right","data-aos-delay":"500","data-aos-duration":"800"}},[a._m(3,!0)])})),s("div",{staticClass:" col-md-12 pb-0 py-3 row justify-content-center"},[s("jw-pagination",{attrs:{items:a.berita,pageSize:"6"},on:{changePage:a.onChangePage}})],1)],2)])]),s("Footer")],1)},f=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"action-section bg-white",staticStyle:{overflow:"hidden"},attrs:{id:"profildesa"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"font-weight-bold text-center mb-5",staticStyle:{color:"#076825 !important"},attrs:{"data-aos":"fade-up","data-aos-delay":"200","data-aos-duration":"800"}},[s("span",[a._v(" Profil Desa ")])]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-6",attrs:{"data-aos":"fade-right","data-aos-delay":"300","data-aos-duration":"800"}},[s("div",{staticClass:"row justify-content-between"},[s("div",{staticClass:"col-md-4 img-profile"},[s("div",{staticClass:"d-flex justify-content-center"},[s("img",{staticClass:"img-fluid rounded-circle",attrs:{src:"/img/boyolali.png",alt:"Cinque Terre"}})])]),s("div",{staticClass:"col-md-8"},[s("h3",{staticClass:"text-green font-weight-bold"},[a._v("Desa Kendel")]),s("p",[a._v("Kecamatan Kemusu, Boyolali, Jawa Tengah, Indonesia")])])])]),s("div",{staticClass:"col-md-6",attrs:{"data-aos":"fade-left","data-aos-delay":"300","data-aos-duration":"800"}},[s("div",{staticClass:"row justify-content-between"},[s("div",{staticClass:"col-md-4 img-profile"},[s("div",{staticClass:"d-flex justify-content-center"},[s("img",{staticClass:"img-fluid rounded-circle",attrs:{src:"",alt:""}})])]),s("div",{staticClass:"col-md-8"},[s("h3",{staticClass:"text-green font-weight-bold"},[a._v("Kusmanto")]),s("p",[a._v("Kepala Desa Kendel")])])])])])])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"project-section",staticStyle:{overflow:"hidden"},attrs:{id:"visimisi"}},[s("div",{staticClass:"container"},[s("h1",{staticClass:"font-weight-bold text-center",staticStyle:{color:"#076825 !important"},attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615256342335539.6009804439918","data-aos":"fade-up","data-aos-delay":"200","data-aos-duration":"800"}},[s("span",[a._v(" Visi Misi Desa ")])]),s("div",{staticClass:"row visi justify-content-center mt-5"},[s("div",{staticClass:"col-md-12 align-items-center"},[s("h3",{staticClass:"text-green font-weight-bold",attrs:{"data-aos":"fade-right","data-aos-delay":"200","data-aos-duration":"800"}},[a._v("VISI")]),s("p",{staticClass:"indent",staticStyle:{"text-align":"justify"},attrs:{"data-aos":"fade-right","data-aos-delay":"200","data-aos-duration":"800"}},[a._v(" Terwujudnya masyarakat Kendel yang mandiri menuju Boyolali tersenyum yang Pro Investasi untuk mencapai masyarakat yang sehat dan sejahtera. ")])])])]),s("div",{staticClass:"container mt-5"},[s("div",{staticClass:"row misi justify-content-center mt-4"},[s("div",{staticClass:"col-md-12 align-items-center",attrs:{"data-aos":"fade-left","data-aos-delay":"200","data-aos-duration":"800"}},[s("h3",{staticClass:"text-green font-weight-bold"},[a._v("Misi")]),s("ol",{staticClass:"pl-5"},[s("li",[a._v("Meningkatkan pembangunan inrastruktur yang mendukung perekonomian desa.")]),s("li",[a._v("Mewujudkan sarana prasarana desa yang baik.")]),s("li",[a._v("Menciptakan tata kelola pemerintahan yang baik.")]),s("li",[a._v("Mewujudkan desa yang unggul dan berprestasi.")]),s("li",[a._v("Mewujudkan masyarakat yang sehat dan sejahtera.")])])])])])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("h1",{staticClass:"font-weight-bold text-center mb-5",staticStyle:{color:"#076825 !important"},attrs:{"data-aos":"fade-up","data-aos-delay":"400","data-aos-duration":"800"}},[s("span",[a._v(" Berita ")])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"cards"},[s("div",{staticClass:"penampungimg"},[s("a",{attrs:{target:"new",href:"#"}},[s("img",{staticClass:"imgcontent",attrs:{src:"https://mice.id/warehouse/assets/news/news_images_1609425816.jpg"}})])]),s("div",{staticClass:"dalemcards"},[s("a",{attrs:{href:"#"}},[s("h1",{staticClass:"juduldalam",attrs:{id:"juduld"}},[a._v("Destinasi")])]),s("p",{staticClass:"text-muted tanggal"},[a._v("2020-12-31 14:43:36")]),s("p",{staticClass:"sinopsiscard"},[a._v("Bali: Surga Lokasi Penyelenggaraan Event MICE")]),s("hr"),s("div",{staticStyle:{display:"flex"}},[s("div",{staticClass:"icons"},[s("a",{attrs:{onClick:"window.open('https://www.facebook.com/sharer/sharer.php?u=', '', 'width=400, height=500')",target:"_blank"}},[s("div",{staticClass:"imgfb",attrs:{title:"Facebook Kemenparekraf"}},[s("i",{staticClass:"fab fa-facebook-f"})])]),s("a",{attrs:{href:"https://twitter.com/intent/tweet?text=",target:"_blank"}},[s("div",{staticClass:"imgtwit",attrs:{title:"Twitter Kemenparekraf"}},[s("i",{staticClass:"fab fa-twitter"})])]),s("a",{attrs:{"data-container":"body","data-toggle":"popover","data-placement":"top","data-content":"URL Copied"}},[s("div",{staticClass:"imgcop",attrs:{title:"Youtube Kemenparekraf"}},[s("i",{staticClass:"fa fa-link example-popover"})])])])])])])}],v=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},p=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white",attrs:{id:"nav"}},[s("a",{staticClass:"navbar-brand",attrs:{href:"#","data-aos":"zoom-in"}},[s("img",{staticClass:"img-logo",attrs:{id:"logo-img",src:"/img/boyolali.png",alt:"PrimaVillage"}})]),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item",attrs:{"data-aos":"fade-left","data-aos-delay":"600","data-aos-duration":"800"}},[s("a",{staticClass:"js-scroll-trigger mr-3",attrs:{href:"#home","data-translatable":"","data-dom-i18n-id":"i18n161525634233560.02850891091693"}},[a._v("Home ")])]),s("li",{staticClass:"nav-item",attrs:{"data-aos":"fade-left","data-aos-delay":"600","data-aos-duration":"800"}},[s("a",{staticClass:"js-scroll-trigger mr-3",attrs:{href:"#profildesa","data-translatable":"","data-dom-i18n-id":"i18n161525634233560.02850891091693"}},[a._v("Profil Desa ")])]),s("li",{staticClass:"nav-item",attrs:{"data-aos":"fade-left","data-aos-delay":"600","data-aos-duration":"800"}},[s("a",{staticClass:"js-scroll-trigger mr-3",attrs:{href:"#visimisi","data-translatable":"","data-dom-i18n-id":"i18n161525634233560.02850891091693"}},[a._v("Visi Misi ")])]),s("li",{staticClass:"nav-item",attrs:{"data-aos":"fade-left","data-aos-delay":"600","data-aos-duration":"800"}},[s("a",{staticClass:"js-scroll-trigger mr-3",attrs:{href:"#berita","data-translatable":"","data-dom-i18n-id":"i18n161525634233560.02850891091693"}},[a._v("Berita ")])]),s("li",{staticClass:"nav-item",attrs:{"data-aos":"fade-left","data-aos-delay":"600","data-aos-duration":"800"}},[s("a",{staticClass:"js-scroll-trigger mr-3",attrs:{href:"http://bumdes.primakom.co.id/kendel",target:"_blank","data-translatable":"","data-dom-i18n-id":"i18n161525634233560.02850891091693"}},[a._v("Portal ")])])])]),s("a",{staticClass:"btn btn-nav btn-jejakin-white my-2 my-sm-0 d-none d-sm-inline aos-init aos-animate",attrs:{"data-v-af38669a":"",href:"/masuk","data-translatable":"","data-aos":"zoom-in"}},[s("span",{attrs:{"data-v-af38669a":""}},[a._v(" Masuk "),s("i",{staticClass:"fas fa-arrow-right",attrs:{"data-v-af38669a":""}})])])])}],g={name:"Navbar"},b=g,h=Object(r["a"])(b,v,p,!1,null,null,null),C=h.exports,y=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{attrs:{id:"home"}},[s("div",{staticClass:"intro-section"},[s("div",{staticClass:"overlay-bg"}),s("div",{staticStyle:{width:"100%"}},[s("video",{attrs:{autoplay:"",muted:"",loop:"",id:"myVideo",width:"100%"},domProps:{muted:!0}})]),a._m(0)])])},_=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"text-intro"},[s("h1",{staticClass:"text1"},[a._v("Smart Kendel")]),s("h1",{staticClass:"text2"},[a._v("#MajuBersamaDesa")])])}],w={name:"Header"},k=w,j=(s("b1cc"),Object(r["a"])(k,y,_,!1,null,"63a848db",null)),x=j.exports,S=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},M=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-between first-section"},[s("div",{staticClass:"col-md-3"},[s("ul",[s("li",[s("span",{staticClass:"header",attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891228.11464504790547"}},[a._v("Produk")])]),s("li",{attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891423.88676061147555"}},[a._v(" Induk BUMDesa ")]),s("li",{attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891423.88676061147555"}},[a._v(" Unit PPOB ")]),s("li",{attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891423.88676061147555"}},[a._v(" Unit Simpan Pinjam ")]),s("li",{attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891423.88676061147555"}},[a._v(" Unit Bank Sampah ")])])]),s("div",{staticClass:"col-md-3"},[s("ul",[s("li",[s("span",{staticClass:"header",attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891934.3232495058986"}},[a._v("Desa")])]),s("li",[s("a",{staticClass:"text",attrs:{target:"_blank","data-translatable":"",href:"http://klego.primavillage.id/","data-dom-i18n-id":"i18n1615261805891906.9956331339595"}},[a._v("BUMDesa Klego ")])]),s("li",[s("a",{staticClass:"text",attrs:{target:"_blank","data-translatable":"",href:"http://kendel.primavillage.id/","data-dom-i18n-id":"i18n1615261805891108.26124095196698"}},[a._v("BUMDesa Kendel ")])]),s("li",[s("a",{staticClass:"text",attrs:{target:"_blank","data-translatable":"",href:"http://banyuurip.primavillage.id/","data-dom-i18n-id":"i18n1615261805891108.26124095196698"}},[a._v("BUMDesa Banyu Urip ")])])])]),s("div",{staticClass:"col-md-3"},[s("ul",[s("li",[s("span",{staticClass:"header",attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891140.395761716557"}},[a._v("Hubungi Kami ")])]),s("li",{staticClass:"d-flex"},[s("span",{staticClass:"icon mr-2"},[s("i",{staticClass:"fas fa-map-marker-alt"})]),s("span",{staticClass:"text"},[a._v(" Kecamatan Kemusu, Boyolali, Jawa Tengah, Indonesia ")])])])])]),s("div",{staticClass:"row second-section"},[s("div",{staticClass:"col-md d-flex order-2 order-md-1"},[s("span",{staticClass:"text-copyright",attrs:{"data-translatable":"","data-dom-i18n-id":"i18n1615261805891852.0072758460451"}},[a._v("©2021 PT.Prima Mandiri Komunikasi ")])])])])])}],P={name:"Footer"},O=P,K=(s("8f4e"),Object(r["a"])(O,S,M,!1,null,"509ac61d",null)),E=K.exports,B={name:"Home",components:{Navbar:C,Header:x,Footer:E},data:function(){return{berita:[{id:1,nama:"asu"},{id:2,nama:"asu"},{id:3,nama:"asu"},{id:4,nama:"asu"},{id:5,nama:"asu"},{id:6,nama:"asu"},{id:7,nama:"asu"},{id:8,nama:"asu"},{id:9,nama:"asu"},{id:10,nama:"asu"},{id:11,nama:"asu"}],pageOfItems:[]}},methods:{onChangePage:function(a){console.log(a),this.pageOfItems=a}}},$=B,D=(s("cccb"),Object(r["a"])($,m,f,!1,null,null,null)),U=D.exports,I=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},T=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"row m-0 justify-content-center align-items-center",staticStyle:{"min-height":"100vh"}},[s("div",{staticClass:"col-md-7"},[s("div",{staticClass:"card shadow p-0",staticStyle:{overflow:"hidden"}},[s("div",{},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 p-4"},[s("div",{staticClass:"py-1 px-3"},[s("h2",{staticClass:"font-bold text-uppercase",staticStyle:{"font-weight":"bold","margin-bottom":"0"}},[a._v("MASUK")]),s("div",{staticClass:"mb10"},[s("small",[a._v("Masuk ke akun anda")])]),s("form",{attrs:{action:""}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[a._v("Username")]),s("input",{staticClass:"form-control",attrs:{type:"text",name:"username",id:"username"}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"katasandi"}},[a._v("Kata Sandi")]),s("input",{staticClass:"form-control",attrs:{type:"password",name:"katasandi",id:"katasandi"}})]),s("div",{staticClass:"form-group mb-0"},[s("button",{staticClass:"btn btn-success",staticStyle:{color:"white"}},[a._v("Masuk")])])])])]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"box-right"},[s("a",{attrs:{href:"/"}},[s("img",{staticClass:"w-100",staticStyle:{height:"335px","object-fit":"contain"},attrs:{src:"/img/boyolali.png",alt:""}})])])])])])])])])}],H={},N=H,F=(s("c3bd"),Object(r["a"])(N,I,T,!1,null,"066b5ed9",null)),V=F.exports;e["a"].use(u["a"]);var A=[{path:"/",name:"Home",component:U},{path:"/masuk",name:"Masuk",component:V}],J=new u["a"]({mode:"history",base:"/",routes:A}),z=J,q=s("2f62");e["a"].use(q["a"]);var L=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),R=s("f5af"),Y=s.n(R),G=(s("e829"),s("eb2e")),Q=s.n(G);e["a"].component("jw-pagination",Q.a),e["a"].config.productionTip=!1,new e["a"]({router:z,store:L,created:function(){Y.a.init()},render:function(a){return a(d)}}).$mount("#app")},"5bd6":function(a,t,s){},"5ced":function(a,t,s){},"7b78":function(a,t,s){},"85ec":function(a,t,s){},"8f4e":function(a,t,s){"use strict";s("7b78")},b1cc:function(a,t,s){"use strict";s("5bd6")},c3bd:function(a,t,s){"use strict";s("4a8c")},cccb:function(a,t,s){"use strict";s("5ced")}});
//# sourceMappingURL=app.14e0a8c6.js.map