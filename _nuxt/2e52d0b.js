(window.webpackJsonp=window.webpackJsonp||[]).push([[53,12,14,17,19,20,28,34,35,47,51],{301:function(t,e,n){"use strict";n.r(e);var l={name:"Logo",props:{label:{type:String,default:""}}},r=n(51),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center"},[e("img",{staticClass:"mr-2",attrs:{src:"/images/navbar/seakun_logo.png",width:"40",height:"40",alt:"logo seakun"}}),t._v(" "),e("span",{staticClass:"text-primary font-bold"},[t._v(t._s(t.label))])])}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("8ab11092",content,!0,{sourceMap:!1})},304:function(t,e,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("0439c03a",content,!0,{sourceMap:!1})},306:function(t,e,n){"use strict";n(302)},307:function(t,e,n){var l=n(111)((function(i){return i[1]}));l.push([t.i,".reverse[data-v-1b8c602a]{transform:rotate(180deg)}",""]),l.locals={},t.exports=l},308:function(t,e,n){"use strict";n.r(e);var l={props:{btnText:{type:String,default:""},mode:{type:String,default:""},addClass:{type:String,default:""},variant:{type:String,default:"bg-primary"},fillColor:{type:String,default:"#ffff"}}},r=(n(306),n(51)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{on:{click:function(e){return t.$emit("click-chevron")}}},[e("div",{staticClass:"relative cursor-pointer w-9 h-9 rounded-full mx-auto flex justify-center items-center",class:t.addClass},[e("svg",{staticClass:"cursor-pointer text-white absolute z-10",class:"".concat("left"===t.mode?"reverse":""),attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:t.fillColor,xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}})]),t._v(" "),e("div",{staticClass:"w-full h-full rounded-full absolute",class:t.variant})]),t._v(" "),t.btnText?e("span",{staticClass:"cursor-pointer"},[t._v(t._s(t.btnText))]):t._e()])}),[],!1,null,"1b8c602a",null);e.default=component.exports},311:function(t,e,n){"use strict";n(304)},312:function(t,e,n){var l=n(111)((function(i){return i[1]}));l.push([t.i,".footer{background-color:#2d2d2d}",""]),l.locals={},t.exports=l},315:function(t,e,n){"use strict";n.r(e);var l={props:{color:{typeof:String,default:"#2D2D2D"},addClass:{typeof:String,default:""},isShow:{typeof:Boolean,default:!1}}},r=n(51),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{class:t.addClass},[e("section",{staticClass:"w-max",class:{"-rotate-180":t.isShow},on:{click:function(e){t.isShow=!t.isShow,t.$emit("click")}}},[e("svg",{attrs:{width:"14",height:"15",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M2.45998 4.97461C2.23321 5.20342 2.23328 5.57226 2.46012 5.80099L6.29872 9.67152C6.6899 10.066 7.32759 10.066 7.71878 9.67152L11.5574 5.80099C11.7842 5.57226 11.7843 5.20342 11.5575 4.97461C11.328 4.74297 10.9536 4.74292 10.7239 4.97449L7.71883 8.00503C7.32763 8.39954 6.68986 8.39954 6.29867 8.00503L3.29355 4.97449C3.06393 4.74292 2.68954 4.74297 2.45998 4.97461Z",fill:t.color}})])])])}),[],!1,null,"30101b32",null);e.default=component.exports},317:function(t,e,n){"use strict";n.r(e);n(86);var l={data:function(){return{isHiring:!1,showSpark1:!1,showSpark2:!1,showSpark3:!1}},mounted:function(){var t=this;setInterval((function(){t.showSpark1=!t.showSpark1}),700),setInterval((function(){t.showSpark2=!t.showSpark2}),800),setInterval((function(){t.showSpark3=!t.showSpark3}),900)},methods:{scrollTo:function(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}},r=(n(311),n(51)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer lg:pt-6 xl:pt-12 mt-12 bg-[#2d2d2d]"},[e("div",{staticClass:"tn:px-3 md:!container !text-[#EFEFEF] !text-sm p-4 md:grid md:grid-cols-2 md:justify-between lg:grid-cols-5 lg:gap-8 lg:justify-center"},[t._m(0),t._v(" "),e("div",{staticClass:"tn:my-4 md:mt-0"},[e("h1",{staticClass:"font-bold tn:text-lg md:text-2xl tn:my-8 lg:mb-4 xl:mb-8"},[t._v("\n        Seakun\n      ")]),t._v(" "),e("ul",{staticClass:"tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4"},[e("li",{on:{click:function(e){return t.scrollTo("about-us")}}},[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Tentang Kami")])],1),t._v(" "),e("li",{on:{click:function(e){return t.scrollTo("orderFlow")}}},[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Cara Pesan")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Syarat dan Ketentuan")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Kebijakan Privasi")])],1),t._v(" "),t._m(1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Karir\n            "),t.isHiring?e("span",{staticClass:"hiring text-primary font-mono"},[t._v("\n              ..we're hiring")]):t._e()])],1)])]),t._v(" "),e("div",{staticClass:"tn:my-4 lg:mt-0"},[e("h1",{staticClass:"font-bold tn:text-lg md:text-2xl tn:my-8 lg:mb-4 xl:mb-8"},[t._v("\n        Produk\n      ")]),t._v(" "),e("ul",{staticClass:"tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4"},[e("li",{on:{click:function(e){return t.scrollTo("product-ondemand")}}},[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Produk Non Digital")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Program Patungan")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Program Sekeranjang")])],1),t._v(" "),e("li",{staticClass:"relative max-w-max"},[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Sequrban")])],1),t._v(" "),e("li",{staticClass:"relative max-w-max"},[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("SeGlowUp")]),t._v(" "),e("img",{staticClass:"absolute top-0 -right-1 w-[9px]",class:"".concat(t.showSpark1?"opacity-100":"opacity-20"),attrs:{src:"/images/icons/atoms/spark.svg",alt:"spark"}}),t._v(" "),e("img",{staticClass:"absolute bottom-1 -right-2 w-[8px]",class:"".concat(t.showSpark2?"!opacity-100":"!opacity-20"),attrs:{src:"/images/icons/atoms/spark.svg",alt:"spark"}}),t._v(" "),e("img",{staticClass:"absolute top-0 -right-4 w-[12px]",class:"".concat(t.showSpark3?"!opacity-100":"!opacity-20"),attrs:{src:"/images/icons/atoms/spark.svg",alt:"spark"}})],1)])]),t._v(" "),t._m(2)]),t._v(" "),t._m(3)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-md md:row-span-3 lg:col-span-2 md:pr-10 xl:pr-16"},[e("div",{staticClass:"tn:mt-8 tn:mb-6 md:mb-9"},[e("img",{staticClass:"tn:h-[30px]",attrs:{src:"/images/navbar/brand_seakun.svg",alt:"tentang seakun"}})]),t._v(" "),e("p",{staticClass:"tn:text-sm md:text-base my-2 space-y-1"},[t._v("\n        Platform pertama di Indonesia yang memberikan layanan patungan untuk\n        menikmati fitur dan produk premium dengan konsep sharing price\n        sehingga dapat dinikmati dengan harga yang leih murah, serta aman dan\n        praktis.\n      ")]),t._v(" "),e("div",{staticClass:"flex space-x-2 xl:space-x-3 my-3"},[e("a",{attrs:{href:"https://instagram.com/seakun.id",target:"_blank"}},[e("img",{attrs:{src:"/images/footer/instagram.svg",alt:"instagram icon "}})]),t._v(" "),e("a",{attrs:{href:"https://twitter.com/OfficialSeakun",target:"_blank"}},[e("img",{attrs:{src:"/images/footer/twitter.svg",alt:"twitter icon"}})]),t._v(" "),e("a",{attrs:{href:"https://www.linkedin.com/company/seakun-id/",target:"_blank"}},[e("img",{attrs:{src:"/images/footer/linkedin.svg",alt:"linkedin icon"}})])]),t._v(" "),e("div",{},[e("p",{staticClass:"text-sm"},[t._v("\n          Sudah terdaftar sebagai penyedia media elektronik di Kominfo\n          "),e("span",[e("img",{staticClass:"inline-block",attrs:{src:"/images/footer/shield-check.svg",alt:"check"}})])])])])},function(){var t=this._self._c;return t("li",[t("a",{staticClass:"hover:no-underline",attrs:{href:"https://forms.gle/t1AbaxnjEtJr8NAPA",target:"_blank"}},[this._v("Laporan Kendala")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tn:my-4 lg:mt-0"},[e("h1",{staticClass:"font-bold tn:text-lg md:text-2xl tn:my-8 lg:mb-4 xl:mb-8"},[t._v("\n        Hubungi Kami\n      ")]),t._v(" "),e("div",{staticClass:"tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4"},[e("div",{staticClass:"flex space-x-2"},[e("img",{attrs:{src:"/images/footer/email-icon.svg",alt:"#"}}),t._v(" "),e("a",{attrs:{href:"mailto:admin@seakun.id"}},[e("p",[t._v("official@seakun.tech")])])]),t._v(" "),e("div",{staticClass:"flex space-x-2 items-center"},[e("img",{attrs:{src:"/images/footer/whatsapp.svg",alt:"#"}}),t._v(" "),e("a",{attrs:{href:"https://api.whatsapp.com/send?phone=6282124852232"}},[t._v("082124852232")])]),t._v(" "),e("div",{staticClass:"flex space-x-2 items-start"},[e("img",{staticClass:"ml-1",attrs:{src:"/images/footer/time-circle.svg",alt:"#"}}),t._v(" "),e("div",{staticClass:"space-y-1"},[e("p",{staticClass:"font-bold"},[t._v("Jam Operasional")]),t._v(" "),e("p",[t._v("Setiap Hari")]),t._v(" "),e("p",[t._v("09.00 - 21.00 WIB")])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"text-center text-white tn:py-2 lg:py-4"},[t("p",[this._v("© 2020 - 2024 PT Seakun Global Teknologi")])])}],!1,null,null,null);e.default=component.exports},324:function(t,e,n){"use strict";n(16);e.a=function(t){return new Promise((function(e){if(document.querySelector(t))return e(document.querySelector(t));var n=new MutationObserver((function(l){document.querySelector(t)&&(e(document.querySelector(t)),n.disconnect())}));n.observe(document.body,{childList:!0,subtree:!0})}))}},360:function(t,e,n){var content=n(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("a8c9eb3a",content,!0,{sourceMap:!1})},361:function(t,e,n){var content=n(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("031f35be",content,!0,{sourceMap:!1})},362:function(t,e,n){var content=n(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("38e9014c",content,!0,{sourceMap:!1})},366:function(t,e,n){var content=n(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("e962026a",content,!0,{sourceMap:!1})},375:function(t,e,n){"use strict";n.r(e);n(41);var l={props:{dataTestimony:{typeof:Object,default:function(){}}}},r=n(51),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.dataTestimony,expression:"dataTestimony"}],staticClass:"rounded-[6px] bg-white border-[1px] boder-[#CFDADE]"},[e("section",{staticClass:"p-4"},[e("div",{staticClass:"w-full mx-auto"},[e("img",{staticClass:"w-full h-[135px] md:h-[150px] lg:h-[177px] rounded-[6px] object-cover object-top",attrs:{src:"/images/testimony/".concat(t.dataTestimony.images),alt:t.dataTestimony.name}})]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("div",[e("p",{staticClass:"text-main leading-7 text-xs font-bold pt-3"},[t._v("\n          "+t._s(t.dataTestimony.name)+"\n        ")]),t._v(" "),e("p",{staticClass:"text-[#66738F] text-xs leading-normal pt-1"},[t._v("\n          "+t._s(t.dataTestimony.address)+"\n        ")])]),t._v(" "),e("p",{staticClass:"text-xs text-[#08A081] bg-[#E5FEF9] py-1 px-2 rounded-[20px]"},[t._v("\n        "+t._s(t.dataTestimony.testimony)+"\n      ")])]),t._v(" "),e("div",{staticClass:"border-t-[1px] border-[#ABBED133] mt-2"},[e("p",{staticClass:"text-[#474747] text-xs md:text-sm leading-[20px] max-w-[284px] lg:max-w-[324px] pt-2"},[t._v("\n        "+t._s(t.dataTestimony.text)+"\n      ")])])])])}),[],!1,null,"7155e8fa",null);e.default=component.exports},440:function(t,e,n){"use strict";n(360)},441:function(t,e,n){var l=n(111)((function(i){return i[1]}));l.push([t.i,".bg-nav{background-color:#fff!important;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)!important}.bg-nav,.bg-none{transition:all 1s ease}.bg-none{background-color:transparent!important;box-shadow:none!important}@media (min-width:800px){.bg-nav{background-color:#fff!important;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)!important;padding-bottom:8px!important;padding-top:8px!important}.bg-nav,.bg-none{transition:all 1s ease}.bg-none{background-color:transparent!important;box-shadow:none!important;padding-bottom:0!important;padding-top:30px!important}}@media (max-width:800px){nav{text-transform:uppercase}}",""]),l.locals={},t.exports=l},442:function(t,e,n){"use strict";n(361)},443:function(t,e,n){var l=n(111)((function(i){return i[1]}));l.push([t.i,'#head{font-family:"Nunito Sans",sans-serif}.bg-header{background:linear-gradient(180deg,#e3fcf6,#fff 116.06%)}.bg-banner{background:radial-gradient(80.18% 813.47% at 80.18% 92.9%,#a8dfc2 0,#8dcabe 100%)}',""]),l.locals={},t.exports=l},444:function(t,e,n){"use strict";n(362)},445:function(t,e,n){var l=n(111)((function(i){return i[1]}));l.push([t.i,".bg-gradient{background:linear-gradient(175.34deg,#fff 3.77%,#f2fffc 96.23%)}",""]),l.locals={},t.exports=l},448:function(t,e,n){"use strict";n(366)},449:function(t,e,n){var l=n(111)((function(i){return i[1]}));l.push([t.i,".testimony-semabar[data-v-600bad08]::-webkit-scrollbar{display:none}.testimony-semabar[data-v-600bad08]{-ms-overflow-style:none;scrollbar-width:none}",""]),l.locals={},t.exports=l},518:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{showSpark1:!1,showSpark2:!1,showSpark3:!1,open:!1,isLoggedin:!0,navbarLink:[{id:1,label:"Cara Bertransaksi",tag:"flow"},{id:2,label:"Layanan",tag:"provider"},{id:3,label:"Testimoni",tag:"testimony"}]}},components:{Logo:n(301).default},mounted:function(){},methods:{handleScrollEffect:function(){var t=document.getElementById("navbar");document.body.scrollTop>=50||document.documentElement.scrollTop>=50?(t.classList.add("bg-nav"),t.classList.remove("bg-none")):(t.classList.add("bg-none"),t.classList.remove("bg-nav"))},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"}),this.open=!1},scrollToSection:function(menu){"helpCenter"===menu.tag?window.open("https://forms.gle/t1AbaxnjEtJr8NAPA","_blank"):"sekurban"===menu.tag?this.$router.push("/sekurban"):"profile"===menu.tag||(this.scrollToElementWithOffset(menu.tag,25),this.open=!1)},scrollToElementWithOffset:function(t,e){var n=document.getElementById(t).getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:n,behavior:"smooth"})}}},r=(n(440),n(51)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full fixed z-40 py-3 lg:py-2 bg-white shadow",attrs:{id:"navbar"}},[t.open?e("div",{staticClass:"opacity-20 fixed inset-0 z-90 bg-black",on:{click:function(e){t.open=!1}}}):t._e(),t._v(" "),e("div",{staticClass:"static z-0 w-full text-gray-700"},[e("div",{staticClass:"container lg:flex lg:justify-between lg:items-center"},[t._m(0),t._v(" "),e("div",{staticClass:"absolute top-1 right-1 py-4 px-4 md:px-4 lg:top-0 lg:right-0 lg:relative z-100 flex flex-col w-3/5 md:w-1/2 lg:w-4/5 rounded-xl lg:p-0 lg:justify-end lg:flex-row lg:items-center",class:{shadow:t.open,"bg-white":t.open}},[e("div",{staticClass:"items-center"},[e("button",{staticClass:"lg:hidden rounded-lg focus:outline-none float-right",on:{click:function(e){t.open=!t.open}}},[t.open?e("svg",{staticClass:"w-6 h-6 primary",attrs:{fill:"#08A081",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})]):e("div",{staticClass:"pt-1 pr-1"},[e("img",{staticClass:"w-[18px] md:w-[20px]",attrs:{src:"/images/icons/atoms/hamburger.svg",alt:"menu"}})])])]),t._v(" "),t._l(t.navbarLink,(function(n,l){return e("nav",{key:l,staticClass:"flex-col pr-4 md:pr-4 lg:pr-0 mt-2 md:p-0 lg:mt-0 lg:flex lg:justify-end lg:flex-row",class:{flex:t.open,hidden:!t.open}},[e("div",{staticClass:"cursor-pointer text-right my-3 text-sm md:text-[14px] font-semibold md:font-bold text-secondary rounded-lg md:py-0 md:mt-0 hover:opacity-50 focus:opacity-50 lg:ml-8 xl:ml-12 relative",class:"".concat("profile"===n.tag?"lg:my-1":"lg:my-3")},["profile"===n.tag?e("div",[e("img",{staticClass:"rounded-full w-[42px] h-[42px] hidden lg:block border border-[#D8EDEE]",attrs:{src:"/images/profile-page/avatar/".concat(t.avatar,".svg"),alt:"profile"}}),t._v(" "),e("p",{staticClass:"lg:hidden"},[t._v(t._s(n.label))])]):e("a",{attrs:{href:"/#".concat(n.tag)}},[t._v("\n              "+t._s(n.label)+"\n            ")]),t._v(" "),"sekurban"===n.tag?[e("img",{staticClass:"absolute -top-1 -right-1 w-[9px]",class:"".concat(t.showSpark1?"opacity-100":"opacity-20"),attrs:{src:"/images/icons/atoms/spark.svg",alt:"spark"}}),t._v(" "),e("img",{staticClass:"absolute bottom-1 -right-2 w-[8px]",class:"".concat(t.showSpark2?"!opacity-100":"!opacity-20"),attrs:{src:"/images/icons/atoms/spark.svg",alt:"spark"}}),t._v(" "),e("img",{staticClass:"absolute top-0 -right-4 w-[12px]",class:"".concat(t.showSpark3?"!opacity-100":"!opacity-20"),attrs:{src:"/images/icons/atoms/spark.svg",alt:"spark"}})]:t._e()],2)])})),t._v(" "),t.isLoggedin?t._e():e("div",[e("NuxtLink",{staticClass:"h-[42px] justify-center items-center rounded-[8px] text-white font-bold text-sm lg:text-base bg-primary w-full mt-3",class:{flex:t.open,hidden:!t.open},attrs:{to:"/login"}},[t._v("Login")]),t._v(" "),e("NuxtLink",{staticClass:"w-[112px] h-[42px] hidden lg:flex justify-center items-center rounded-[8px] text-white font-bold text-sm lg:text-base bg-primary lg:ml-10",attrs:{to:"/login"}},[t._v("Login")])],1)],2)])])])}),[function(){var t=this._self._c;return t("a",{attrs:{href:"/"}},[t("img",{staticClass:"h-[40px]",attrs:{src:"/images/navbar/brand_seakun.svg",alt:"brand seakun"}})])}],!1,null,null,null);e.default=component.exports},519:function(t,e,n){"use strict";n.r(e);n(86);var l={components:{Button:n(298).default},data:function(){return{textToType:["T. Seakun Global Teknologi"],currentTextIndex:0,typedText:"PT. Seakun Global Teknologi",currentText:"",index:0}},mounted:function(){},methods:{typeText:function(){var t=this;this.index=0,this.typedText="P";var e=setInterval((function(){t.index<t.currentText.length?(t.typedText+=t.currentText.charAt(t.index),t.index++):clearInterval(e)}),75)},onClickOrder:function(){document.getElementById("provider").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}},r=(n(442),n(51)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative",attrs:{id:"head"}},[e("div",{staticClass:"absolute top-0 left-0 z-0 w-full tn:h-[411px] xl:h-[520px] bg-header"}),t._v(" "),e("div",{staticClass:"tn:px-[24px] md:!container tn:pt-20 md:pt-24 lg:pt-28 relative z-20"},[e("div",{staticClass:"w-full rounded-2xl bg-banner flex tn:flex-col md:flex-row md:justify-between md:items-center tn:py-8"},[e("div",{staticClass:"tn:pt-[10px] md:py-[32px] lg:py-[42px] tn:px-[24px] md:pl-[40px] lg:pl-[63px] md:pr-0 md:w-[620px] lg:w-[610px] tn:order-2 md:order-1"},[e("div",{staticClass:"font-extrabold text-[16px] md:text-[20px] lg:text-[28px] xl:text-[40px] text-[#15382F] tn:leading-snug xl:leading-[62px] tn:text-center md:text-left"},[e("p",[t._v("Platform Patungan")]),t._v(" "),t.typedText?e("p",{staticClass:"text-[#A8DFC2] bg-[#15382F] p-2 whitespace-nowrap text-[14px] md:text-[18px] lg:text-[26px] xl:text-[38px] w-max mx-auto md:ml-0 mt-2"},[t._v("\n            "+t._s(t.typedText)+"\n          ")]):t._e()]),t._v(" "),e("div",{staticClass:"text-center md:text-left"},[e("NuxtLink",{attrs:{to:"/#provider"}},[e("Button",{staticClass:"tn:mt-6 xl:mt-12 md:w-auto",attrs:{"class-wrapper":"!bg-[#15382F] !text-[14px] lg:!text-[24px] text-white w-full !h-[46px] lg:!w-[240px] lg:!h-[64px] rounded-lg font-bold ",label:"Lihat Layanan","add-class":"text-[24px] font-bold "}})],1)],1)]),t._v(" "),t._m(0)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"tn:px-[27px] md:px-0 md:pr-[42px] tn:order-1 md:order-2"},[t("img",{staticClass:"md:w-[450px] lg:w-[455px] mx-auto",attrs:{src:"/images/header/header.webp",alt:"seakun"}})])}],!1,null,null,null);e.default=component.exports},520:function(t,e,n){"use strict";n.r(e);n(41);var l={data:function(){return{portofolio:[{name:"Pengguna",counter:"65.000+",icon:"user"},{name:"Transaksi",counter:"300.000+",icon:"transaction"},{name:"Layanan",counter:"31",icon:"service"},{name:"Tingkat Kepuasan",counter:"9/10",icon:"rating"}]}}},r=(n(444),n(51)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pt-8 pb-6 lg:pb-8 text-center bg-gradient"},[e("h2",{staticClass:"tn:text-[20px] md:text-[30px] xl:text-[36px] font-bold"},[t._v("\n    Jadilah bagian dari Seakun\n  ")]),t._v(" "),e("p",{staticClass:"tn:text-[14px] md:text-[24px] text-[#15382F] tn:w-[283px] md:w-[600px] lg:w-[928px] mx-auto font-normal tn:mt-2 lg:mt-4"},[t._v("\n    Dapatkan manfaat berpatungan. Nikmati kemudahan transaksi dengan lebih\n    hemat dan aman\n  ")]),t._v(" "),e("div",{staticClass:"xl:!container grid tn:grid-cols-2 xl:grid-cols-4 tn:gap-2 md:gap-[20px] items-center tn:mt-6 lg:mt-12 tn:px-6 md:px-20 lg:px-32"},t._l(t.portofolio,(function(n,l){return e("div",{key:l,staticClass:"w-full shadow-md rounded-[8px] bg-white tn:py-5 md:py-[32px] tn:px-[15px] md:px-[20px]"},[e("div",{staticClass:"tn:flex tn:space-x-2 md:space-x-3 items-center"},[e("img",{staticClass:"tn:w-[20px] md:w-[32px]",attrs:{src:"/images/portofolio/".concat(n.icon,".svg"),alt:n.name}}),t._v(" "),e("div",{staticClass:"text-left"},[e("p",{staticClass:"tn:text-[21px] md:text-[40px] font-bold tn:-mb-1.5 md:-mb-3 !pb-0 tracking-tighter"},[t._v("\n            "+t._s(n.counter)+"\n          ")]),t._v(" "),e("p",{staticClass:"tn:hidden md:block md:text-[18px]"},[t._v(t._s(n.name))]),t._v(" "),e("p",{staticClass:"tn:text-[13px] text-left md:hidden"},[t._v("\n            "+t._s("Tingkat Kepuasan"==n.name?"Kepuasan":n.name)+"\n          ")])])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},521:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{benefit1:[{text:"Hemat Hingga 70%",icon:"percent"},{text:"Privasi Terjamin",icon:"privacy"},{text:"Customer Service Responsif",icon:"customer-service"}],benefit2:[{text:"Beragam Metode Pembayaran",icon:"payment"},{text:"Layanan Legal dan Resmi",icon:"legal"},{text:"Pengingat Pembayaran",icon:"reminder"}]}}},r=n(51),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tn:pt-20 tn:pb-[45px] md:pb-[90px] relative"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"flex items-center justify-center tn:mt-[38px] md:mt-[45px] tn:px-6 tn:space-x-[20px] md:space-x-0 relative z-10"},[e("div",{staticClass:"md:w-[276px] tn:space-y-[20px] md:space-y-[45px] lg:space-y-[60px]"},t._l(t.benefit1,(function(n,l){return e("div",{key:l,staticClass:"flex items-center tn:space-x-2 md:space-x-[11px]"},[e("div",{staticClass:"tn:!w-[29px] tn:!h-[29px] md:!w-[58px] md:!h-[58px] flex justify-center items-center rounded-[4px] bg-[#E9FAF5] tn:p-[5px] md:p-0"},[e("img",{attrs:{src:"/images/benefit/".concat(n.icon,".svg"),alt:n.text}})]),t._v(" "),e("p",{staticClass:"tn:w-[117px] md:w-[207px] tn:text-[12px] md:text-[20px] font-medium tn:leading-[12px] md:leading-[24px]"},[t._v("\n          "+t._s(n.text)+"\n        ")])])})),0),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"md:w-[276px] tn:space-y-[20px] md:space-y-[45px] lg:space-y-[60px]"},t._l(t.benefit2,(function(n,l){return e("div",{key:l,staticClass:"flex items-center tn:space-x-2 md:space-x-[11px]"},[e("div",{staticClass:"tn:!w-[29px] tn:!h-[29px] md:!w-[58px] md:!h-[58px] flex justify-center items-center rounded-[4px] bg-[#E9FAF5] tn:p-[5px] md:p-0"},[e("img",{attrs:{src:"/images/benefit/".concat(n.icon,".svg"),alt:n.text}})]),t._v(" "),e("p",{staticClass:"tn:w-[117px] md:w-[207px] tn:text-[12px] md:text-[20px] font-medium tn:leading-[12px] md:leading-[24px]"},[t._v("\n          "+t._s(n.text)+"\n        ")])])})),0)]),t._v(" "),t._m(3),t._v(" "),t._m(4)])}),[function(){var t=this,e=t._self._c;return e("h2",{staticClass:"tn:w-[250px] md:w-[447px] font-bold tn:text-[20px] md:text-[30px] xl:text-[36px] mx-auto text-center"},[t._v("\n    Beragam Manfaat "),e("br"),t._v("\n    Yang Bisa Kamu Dapatkan\n  ")])},function(){var t=this._self._c;return t("div",{staticClass:"xl:hidden mx-auto max-w-max"},[t("img",{staticClass:"tn:w-[300px] md:w-[400px] lg:w-[600px] mx-auto tn:mt-[18px]",attrs:{src:"/images/benefit/benefit.webp",alt:"benefit seakun"}})])},function(){var t=this._self._c;return t("div",{staticClass:"tn:hidden xl:block"},[t("img",{staticClass:"w-[460px] h-[320px]",attrs:{src:"/images/benefit/benefit.webp",alt:"benefit seakun"}})])},function(){var t=this._self._c;return t("div",{staticClass:"absolute -z-10 top-0 left-0 tn:w-[175px] md:w-[300px] xl:w-[427px]"},[t("img",{staticClass:"w-full",attrs:{src:"/images/benefit/bg-top-left.svg",alt:"background left"}})])},function(){var t=this._self._c;return t("div",{staticClass:"absolute -z-10 bottom-0 right-0 tn:w-[175px] md:w-[300px] xl:w-[423px]"},[t("img",{staticClass:"w-full",attrs:{src:"/images/benefit/bg-bottom-right.svg",alt:"background right"}})])}],!1,null,null,null);e.default=component.exports},525:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{orderFlow:[{step:1,desc:"Pesan layanan",img:"step-1"},{step:2,desc:"Cari Teman Patungan",img:"step-2"},{step:3,desc:"Pemabayaran",img:"step-3"},{step:4,desc:"Menunggu Proses",img:"step-4"},{step:5,desc:"Pesanan diterima",img:"step-5"},{step:6,desc:"Selesai!",img:"step-6"}]}}},r=n(51),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tn:pt-20",attrs:{id:"flow"}},[e("div",{staticClass:"tn:pt-[24px] md:pt-[60px] tn:pb-[40px] md:pb-[84px] bg-[#F4FFFD] container"},[e("h2",{staticClass:"tn:text-[20px] md:text-[30px] xl:text-[36px] leading-[64px] font-bold text-center"},[t._v("\n      Cara Bertransaksi\n    ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap justify-center xl:justify-between items-center tn:mt-[16px] md:mt-[28px] gap-6 xl:gap-0"},t._l(t.orderFlow,(function(n,l){return e("div",{key:l,staticClass:"tn:w-[125px] md:w-[170px] mx-auto"},[e("img",{staticClass:"mx-auto w-[85px] md:w-[140px]",attrs:{src:"/images/order flow/".concat(n.img,".svg"),alt:n.desc}}),t._v(" "),e("div",{staticClass:"flex items-center justify-center tn:space-x-1 md:space-x-2 tn:mt-[20px]"},[e("div",{staticClass:"tn:w-[12px] tn:h-[12px] md:w-[24px] md:h-[24px] rounded-full flex justify-center items-center text-white bg-primary tn:text-[8px] md:text-[16px] md:py-[2px] md:px-[9px]"},[t._v("\n            "+t._s(n.step)+"\n          ")]),t._v(" "),e("p",{staticClass:"text-secondary font-bold text-[10px] md:text-[18px]"},[t._v("\n            "+t._s(n.desc)+"\n          ")])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},526:function(t,e,n){"use strict";n.r(e);n(52);var l=n(375),r=n(308),o=n(324),c=n(315),d={components:{CardTestimonySemabarVue:l.default,ButtonChevron:r.default,Chevron:c.default},data:function(){return{pillScrollPosition:0,isPillEndScroll:!1,filteredList:[{name:"Guy Hawkins",address:"Medan, Sumatera Utara",text:"Terima kasih kepada Seakun & Kitabisa telah membantu masyarakat. Semoga semuanya sehat...",images:"hawkins.webp",testimony:"Sequrban"},{name:"Khoir",address:"Semarang, Jawa Tengah",text:"Minisoccer bareng kawan di Seakun seru!!! Lapangan yang nyaman, atmosfer penuh semangat, dan teman-teman yang ramah.",images:"khoir.jpeg",testimony:"Semabar"},{name:"Samsul",address:"Medan, Sumatera Utara",text:"Lapangannya bagus, matchnya sudah diatur, dan ketemu temen baru yang asik dan seru. Terima kasih Seakun untuk pengalaman bermain yang tak terlupakan!",images:"samsul.jpeg",testimony:"Semabar"}],windowWidth:0,allreadyDisplayData:!1}},mounted:function(){},methods:{waitForElement:o.a,updateFilteredList:function(){var t=window.innerWidth;t!==this.windowWidth&&(this.filteredList=t<768?this.dataTestimony.slice(0,3):this.dataTestimony)},showAllDataVenue:function(){this.allreadyDisplayData?this.filteredList=this.dataTestimony.slice(0,3):this.filteredList=this.dataTestimony,this.allreadyDisplayData=!this.allreadyDisplayData},scrollPill:function(t){var e=document.getElementById("semabar-testimony-wrapper");"right"==t?e.scrollLeft+=e.offsetWidth:e.scrollLeft=0}}},m=(n(448),n(51)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full mt-7 md:mt-[35px] lg:mt-[52px] container",attrs:{id:"testimony"}},[t._m(0),t._v(" "),e("div",{staticClass:"relative md:pr-3"},[t.filteredList.length>0?e("div",{staticClass:"flex flex-col md:flex-row gap-5 overflow-x-scroll testimony-semabar scroll-smooth",attrs:{id:"semabar-testimony-wrapper"}},[t._l(t.filteredList,(function(t,n){return e("CardTestimonySemabarVue",{key:n,staticClass:"md:min-w-[330px] lg:min-w-[300px] xl:min-w-[350px]",attrs:{"data-testimony":t}})})),t._v(" "),e("div",{staticClass:"flex gap-2 items-center pt-4 md:pt-6 mx-auto w-max cursor-pointer md:hidden",on:{click:t.showAllDataVenue}},[e("p",{staticClass:"text-green-seakun-secondary-dark text-xs md:text-sm font-medium"},[t._v("\n            "+t._s(t.allreadyDisplayData?"Show less":"Show more")+"\n          ")]),t._v(" "),e("Chevron",{attrs:{color:"#00BA88"}})],1)],2):t._e()])])}),[function(){var t=this,e=t._self._c;return e("header",{staticClass:"lg:text-left mb-7 lg:mb-8 text-[#15382F] w-full"},[e("h1",{staticClass:"font-bold text-base md:text-xl lg:text-[28px] xl:text-[36px] text-left hidden md:block"},[t._v("\n        Apa kata mereka yang menggunakan Seakun?\n      ")]),t._v(" "),e("h1",{staticClass:"font-bold text-lg text-[#15382F] md:text-xl lg:text-[28px] xl:text-[36px] md:hidden text-center"},[t._v("\n        Apa kata mereka ?\n      ")])])}],!1,null,"600bad08",null);e.default=component.exports},583:function(t,e,n){"use strict";n.r(e);var l=n(518),r=n(519),o=n(520),c=n(521),d=n(566),m=n(525),x=n(526),f=n(317),v={components:{Navbar:l.default,HeaderSection:r.default,PortfolioSection:o.default,BenefitSection:c.default,ProductSection:d.default,OrderFlowSection:m.default,TestimonySection:x.default,Footer:f.default},data:function(){return{hello:"hello world"}}},h=n(51),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar"),t._v(" "),e("HeaderSection"),t._v(" "),e("PortfolioSection"),t._v(" "),e("BenefitSection"),t._v(" "),e("ProductSection"),t._v(" "),e("OrderFlowSection"),t._v(" "),e("TestimonySection"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);