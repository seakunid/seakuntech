(window.webpackJsonp=window.webpackJsonp||[]).push([[60,11,17,19,21,61,62],{297:function(t,n,e){var content=e(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(112).default)("6e4d3b88",content,!0,{sourceMap:!1})},298:function(t,n,e){"use strict";e.r(n);e(85);var r={name:"Button",props:{variant:{type:String,default:null},size:{type:String,default:null},label:{type:String,default:""},isLoading:{type:Boolean,default:!1},shape:{type:String,default:""},addClass:{type:String,default:""},classWrapper:{type:String,default:""}},data:function(){return{classBtn:"btn btn-".concat(this.variant," ").concat(this.size?"btn-"+this.size:""," ").concat("pill"===this.shape?"!rounded-full":""," ").concat(this.addClass?this.addClass:"")}},methods:{handleOnClick:function(t){this.$emit("click",t)}}},l=(e(299),e(51)),component=Object(l.a)(r,(function(){var t=this,n=t._self._c;return n("button",t._b({class:t.classWrapper,attrs:{type:"button",disabled:t.isLoading},on:{click:t.handleOnClick}},"button",t.$props,!1),[t.isLoading?n("div",[t._m(0)]):t.label?n("div",[t._v("\n    "+t._s(t.label)+"\n  ")]):n("div",[t._t("default")],2)])}),[function(){var t=this._self._c;return t("div",[t("i",{staticClass:"fa-solid fa-circle-notch fa-spin"}),this._v("\n      Loading...\n    ")])}],!1,null,"b2985172",null);n.default=component.exports},299:function(t,n,e){"use strict";e(297)},300:function(t,n,e){var r=e(111)((function(i){return i[1]}));r.push([t.i,"button[data-v-b2985172]:disabled,button[data-v-b2985172]:hover:disabled{background-color:#a9e0d5!important;border:1px solid #a9e0d5!important;color:#fff!important}.fa[data-v-b2985172]{margin-left:-12px;margin-right:8px}",""]),r.locals={},t.exports=r},301:function(t,n,e){"use strict";e.r(n);var r={name:"Logo",props:{label:{type:String,default:""}}},l=e(51),component=Object(l.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"flex items-center"},[n("img",{staticClass:"mr-2",attrs:{src:"/images/navbar/seakun_logo.png",width:"40",height:"40",alt:"logo seakun"}}),t._v(" "),n("span",{staticClass:"text-primary font-bold"},[t._v(t._s(t.label))])])}),[],!1,null,null,null);n.default=component.exports},304:function(t,n,e){var content=e(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(112).default)("0439c03a",content,!0,{sourceMap:!1})},305:function(t,n,e){var content=e(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(112).default)("6f2b1ade",content,!0,{sourceMap:!1})},311:function(t,n,e){"use strict";e(304)},312:function(t,n,e){var r=e(111)((function(i){return i[1]}));r.push([t.i,".footer{background-color:#2d2d2d}",""]),r.locals={},t.exports=r},313:function(t,n,e){"use strict";e(305)},314:function(t,n,e){var r=e(111)((function(i){return i[1]}));r.push([t.i,"#navbar[data-v-ffb3c620]{position:fixed;top:0}@media (min-width:400px){#navbar[data-v-ffb3c620]{background-color:#f4f9f8}}@media (max-width:800px){nav[data-v-ffb3c620]{text-transform:uppercase}}",""]),r.locals={},t.exports=r},317:function(t,n,e){"use strict";e.r(n);e(86);var r={data:function(){return{isHiring:!1,showSpark1:!1,showSpark2:!1,showSpark3:!1}},mounted:function(){var t=this;setInterval((function(){t.showSpark1=!t.showSpark1}),700),setInterval((function(){t.showSpark2=!t.showSpark2}),800),setInterval((function(){t.showSpark3=!t.showSpark3}),900)},methods:{scrollTo:function(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}},l=(e(311),e(51)),component=Object(l.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"footer lg:pt-6 xl:pt-12 mt-12 bg-[#2d2d2d]"},[n("div",{staticClass:"tn:px-3 md:!container !text-[#EFEFEF] !text-sm p-4 md:grid md:grid-cols-2 md:justify-between lg:grid-cols-5 lg:gap-8 lg:justify-center"},[t._m(0),t._v(" "),n("div",{staticClass:"tn:my-4 md:mt-0"},[n("h1",{staticClass:"font-bold tn:text-lg md:text-2xl tn:my-8 lg:mb-4 xl:mb-8"},[t._v("\n        Seakun\n      ")]),t._v(" "),n("ul",{staticClass:"tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4"},[n("li",{on:{click:function(n){return t.scrollTo("about-us")}}},[n("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Tentang Kami")])],1),t._v(" "),n("li",{on:{click:function(n){return t.scrollTo("orderFlow")}}},[n("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Cara Pesan")])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Syarat dan Ketentuan")])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Kebijakan Privasi")])],1),t._v(" "),t._m(1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Karir\n            "),t.isHiring?n("span",{staticClass:"hiring text-primary font-mono"},[t._v("\n              ..we're hiring")]):t._e()])],1)])]),t._v(" "),n("div",{staticClass:"tn:my-4 lg:mt-0"},[n("h1",{staticClass:"font-bold tn:text-lg md:text-2xl tn:my-8 lg:mb-4 xl:mb-8"},[t._v("\n        Produk\n      ")]),t._v(" "),n("ul",{staticClass:"tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4"},[n("li",{on:{click:function(n){return t.scrollTo("product-ondemand")}}},[n("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Produk Non Digital")])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Program Patungan")])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Program Sekeranjang")])],1),t._v(" "),n("li",{staticClass:"relative max-w-max"},[n("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Sequrban")])],1),t._v(" "),n("li",{staticClass:"relative max-w-max"},[n("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("SeGlowUp")]),t._v(" "),n("img",{staticClass:"absolute top-0 -right-1 w-[9px]",class:"".concat(t.showSpark1?"opacity-100":"opacity-20"),attrs:{src:"/images/icons/atoms/spark.svg",alt:"spark"}}),t._v(" "),n("img",{staticClass:"absolute bottom-1 -right-2 w-[8px]",class:"".concat(t.showSpark2?"!opacity-100":"!opacity-20"),attrs:{src:"/images/icons/atoms/spark.svg",alt:"spark"}}),t._v(" "),n("img",{staticClass:"absolute top-0 -right-4 w-[12px]",class:"".concat(t.showSpark3?"!opacity-100":"!opacity-20"),attrs:{src:"/images/icons/atoms/spark.svg",alt:"spark"}})],1)])]),t._v(" "),t._m(2)]),t._v(" "),t._m(3)])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"max-w-md md:row-span-3 lg:col-span-2 md:pr-10 xl:pr-16"},[n("div",{staticClass:"tn:mt-8 tn:mb-6 md:mb-9"},[n("img",{staticClass:"tn:h-[30px]",attrs:{src:"/images/navbar/brand_seakun.svg",alt:"tentang seakun"}})]),t._v(" "),n("p",{staticClass:"tn:text-sm md:text-base my-2 space-y-1"},[t._v("\n        Platform pertama di Indonesia yang memberikan layanan patungan untuk\n        menikmati fitur dan produk premium dengan konsep sharing price\n        sehingga dapat dinikmati dengan harga yang leih murah, serta aman dan\n        praktis.\n      ")]),t._v(" "),n("div",{staticClass:"flex space-x-2 xl:space-x-3 my-3"},[n("a",{attrs:{href:"https://instagram.com/seakun.id",target:"_blank"}},[n("img",{attrs:{src:"/images/footer/instagram.svg",alt:"instagram icon "}})]),t._v(" "),n("a",{attrs:{href:"https://twitter.com/OfficialSeakun",target:"_blank"}},[n("img",{attrs:{src:"/images/footer/twitter.svg",alt:"twitter icon"}})]),t._v(" "),n("a",{attrs:{href:"https://www.linkedin.com/company/seakun-id/",target:"_blank"}},[n("img",{attrs:{src:"/images/footer/linkedin.svg",alt:"linkedin icon"}})])]),t._v(" "),n("div",{},[n("p",{staticClass:"text-sm"},[t._v("\n          Sudah terdaftar sebagai penyedia media elektronik di Kominfo\n          "),n("span",[n("img",{staticClass:"inline-block",attrs:{src:"/images/footer/shield-check.svg",alt:"check"}})])])])])},function(){var t=this._self._c;return t("li",[t("a",{staticClass:"hover:no-underline",attrs:{href:"https://forms.gle/t1AbaxnjEtJr8NAPA",target:"_blank"}},[this._v("Laporan Kendala")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"tn:my-4 lg:mt-0"},[n("h1",{staticClass:"font-bold tn:text-lg md:text-2xl tn:my-8 lg:mb-4 xl:mb-8"},[t._v("\n        Hubungi Kami\n      ")]),t._v(" "),n("div",{staticClass:"tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4"},[n("div",{staticClass:"flex space-x-2"},[n("img",{attrs:{src:"/images/footer/email-icon.svg",alt:"#"}}),t._v(" "),n("a",{attrs:{href:"mailto:admin@seakun.id"}},[n("p",[t._v("official@seakun.tech")])])]),t._v(" "),n("div",{staticClass:"flex space-x-2 items-center"},[n("img",{attrs:{src:"/images/footer/whatsapp.svg",alt:"#"}}),t._v(" "),n("a",{attrs:{href:"https://api.whatsapp.com/send?phone=6282124852232"}},[t._v("082124852232")])]),t._v(" "),n("div",{staticClass:"flex space-x-2 items-start"},[n("img",{staticClass:"ml-1",attrs:{src:"/images/footer/time-circle.svg",alt:"#"}}),t._v(" "),n("div",{staticClass:"space-y-1"},[n("p",{staticClass:"font-bold"},[t._v("Jam Operasional")]),t._v(" "),n("p",[t._v("Setiap Hari")]),t._v(" "),n("p",[t._v("09.00 - 21.00 WIB")])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"text-center text-white tn:py-2 lg:py-4"},[t("p",[this._v("© 2020 - 2024 PT Seakun Global Teknologi")])])}],!1,null,null,null);n.default=component.exports},318:function(t,n,e){"use strict";e.r(n);var r=e(301),l={name:"navbar-blank",data:function(){return{}},props:{className:{typeof:String,default:"bg-third tn:shadow"}},components:{Logo:r.default}},o=(e(313),e(51)),component=Object(o.a)(l,(function(){var t=this._self._c;return t("div",{staticClass:"w-full fixed top-0 z-40 py-3 px-2",class:this.className,attrs:{id:"navbar"}},[t("div",{staticClass:"!container static z-0 w-full text-gray-700 md:px-10 lg:flex lg:justify-between"},[t("NuxtLink",{attrs:{to:"/"}},[t("img",{staticClass:"h-[30px]",attrs:{src:"/images/navbar/brand_seakun.svg",alt:"brand seakun"}})])],1)])}),[],!1,null,"ffb3c620",null);n.default=component.exports},325:function(t,n,e){"use strict";e.r(n);var r=e(326),l=e.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n.default=l.a},326:function(t,n){},452:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return l}));var r=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},l=[function(){var t=this,n=t._self._c;t._self._setupProxy;return n("section",{staticClass:"rounded-[10px] p-4 bg-white h-max",staticStyle:{"box-shadow":"0px 2px 8px 0px rgba(28, 37, 44, 0.08)"}},[n("div",{staticClass:"flex gap-3 items-center w-full"},[n("div",{staticClass:"w-[66px] xl:w-[88px] h-[50px] xl:h-[70px] shimmer shrink-0"}),t._v(" "),n("div",{staticClass:"font-bold text-xs sm:text-sm lg:text-base w-full space-y-1"},[n("div",{staticClass:"shimmer h-3 w-3/4"}),t._v(" "),n("div",{staticClass:"shimmer h-3 w-1/2"})])]),t._v(" "),n("div",{staticClass:"border-t-[1px] border-[#E5E5E580] mt-4 lg:mt-5"},[n("div",{staticClass:"mt-3 text-xs sm:text-sm lg:text-base font-bold text-[#363636CC] flex justify-between items-center"},[n("p",[t._v("Harga")]),t._v(" "),n("div",{staticClass:"shimmer h-3 w-1/3"})])])])}]},458:function(t,n,e){"use strict";e.r(n);var r=e(452),l=e(325);for(var o in l)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return l[t]}))}(o);var c=e(51),component=Object(c.a)(l.default,r.a,r.b,!1,null,null,null);n.default=component.exports},459:function(t,n,e){var content=e(539);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(112).default)("67d4b1c0",content,!0,{sourceMap:!1})},491:function(t,n,e){"use strict";e.r(n);var r={props:{dataOrder:{type:Object,default:function(){}}},methods:{}},l=e(51),component=Object(l.a)(r,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);n.default=component.exports},538:function(t,n,e){"use strict";e(459)},539:function(t,n,e){var r=e(111)((function(i){return i[1]}));r.push([t.i,'.thankyou-page-seglowup[data-v-45162b32]{font-family:"Nunito Sans",sans-serif}.text-dmsans[data-v-45162b32]{font-family:"DM Sans",sans-serif}',""]),r.locals={},t.exports=r},573:function(t,n,e){"use strict";e.r(n);e(85),e(41);var r=e(318),l=e(317),o=e(298),c=e(491),d=e(458),f={components:{NavbarBlank:r.default,Button:o.default,Footer:l.default,SeglowupOrderCard:c.default,SeglowupShimmerCard:d.default},computed:{provider:function(){return this.dataDetailOrder.data.provider.name},member:function(){return this.dataDetailOrder.data.member}},mounted:function(){var t=this.$router.history.current.query,n=t.order_uid,e=t.customer_uid;n&&e&&this.getDetailOrder(n,e)},methods:{confirm:function(){var t=this.$router.history.current.query,n=t.order_uid,e=t.customer_uid;this.$router.push("/confirmation?type=pre-order&order_uid=".concat(n,"&customer_uid=").concat(e))}}},m=(e(538),e(51)),component=Object(m.a)(f,(function(){return(0,this._self._c)("div")}),[],!1,null,"45162b32",null);n.default=component.exports}}]);