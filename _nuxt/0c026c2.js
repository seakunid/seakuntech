(window.webpackJsonp=window.webpackJsonp||[]).push([[69,11,17,19,21,81,82,87],{297:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("6e4d3b88",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";n.r(e);n(85);var l={name:"Button",props:{variant:{type:String,default:null},size:{type:String,default:null},label:{type:String,default:""},isLoading:{type:Boolean,default:!1},shape:{type:String,default:""},addClass:{type:String,default:""},classWrapper:{type:String,default:""}},data:function(){return{classBtn:"btn btn-".concat(this.variant," ").concat(this.size?"btn-"+this.size:""," ").concat("pill"===this.shape?"!rounded-full":""," ").concat(this.addClass?this.addClass:"")}},methods:{handleOnClick:function(t){this.$emit("click",t)}}},r=(n(299),n(51)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("button",t._b({class:t.classWrapper,attrs:{type:"button",disabled:t.isLoading},on:{click:t.handleOnClick}},"button",t.$props,!1),[t.isLoading?e("div",[t._m(0)]):t.label?e("div",[t._v("\n    "+t._s(t.label)+"\n  ")]):e("div",[t._t("default")],2)])}),[function(){var t=this._self._c;return t("div",[t("i",{staticClass:"fa-solid fa-circle-notch fa-spin"}),this._v("\n      Loading...\n    ")])}],!1,null,"b2985172",null);e.default=component.exports},299:function(t,e,n){"use strict";n(297)},300:function(t,e,n){var l=n(111)((function(i){return i[1]}));l.push([t.i,"button[data-v-b2985172]:disabled,button[data-v-b2985172]:hover:disabled{background-color:#a9e0d5!important;border:1px solid #a9e0d5!important;color:#fff!important}.fa[data-v-b2985172]{margin-left:-12px;margin-right:8px}",""]),l.locals={},t.exports=l},301:function(t,e,n){"use strict";n.r(e);var l={name:"Logo",props:{label:{type:String,default:""}}},r=n(51),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center"},[e("img",{staticClass:"mr-2",attrs:{src:"/images/navbar/seakun_logo.png",width:"40",height:"40",alt:"logo seakun"}}),t._v(" "),e("span",{staticClass:"text-primary font-bold"},[t._v(t._s(t.label))])])}),[],!1,null,null,null);e.default=component.exports},304:function(t,e,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("0439c03a",content,!0,{sourceMap:!1})},305:function(t,e,n){var content=n(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("6f2b1ade",content,!0,{sourceMap:!1})},311:function(t,e,n){"use strict";n(304)},312:function(t,e,n){var l=n(111)((function(i){return i[1]}));l.push([t.i,".footer{background-color:#2d2d2d}",""]),l.locals={},t.exports=l},313:function(t,e,n){"use strict";n(305)},314:function(t,e,n){var l=n(111)((function(i){return i[1]}));l.push([t.i,"#navbar[data-v-ffb3c620]{position:fixed;top:0}@media (min-width:400px){#navbar[data-v-ffb3c620]{background-color:#f4f9f8}}@media (max-width:800px){nav[data-v-ffb3c620]{text-transform:uppercase}}",""]),l.locals={},t.exports=l},317:function(t,e,n){"use strict";n.r(e);n(86);var l={data:function(){return{isHiring:!1,showSpark1:!1,showSpark2:!1,showSpark3:!1}},mounted:function(){var t=this;setInterval((function(){t.showSpark1=!t.showSpark1}),700),setInterval((function(){t.showSpark2=!t.showSpark2}),800),setInterval((function(){t.showSpark3=!t.showSpark3}),900)},methods:{scrollTo:function(t){document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}}},r=(n(311),n(51)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer lg:pt-6 xl:pt-12 mt-12 bg-[#2d2d2d]"},[e("div",{staticClass:"tn:px-3 md:!container !text-[#EFEFEF] !text-sm p-4 md:grid md:grid-cols-2 md:justify-between lg:grid-cols-5 lg:gap-8 lg:justify-center"},[t._m(0),t._v(" "),e("div",{staticClass:"tn:my-4 md:mt-0"},[e("h1",{staticClass:"font-bold tn:text-lg md:text-2xl tn:my-8 lg:mb-4 xl:mb-8"},[t._v("\n        Seakun\n      ")]),t._v(" "),e("ul",{staticClass:"tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4"},[e("li",{on:{click:function(e){return t.scrollTo("about-us")}}},[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Tentang Kami")])],1),t._v(" "),e("li",{on:{click:function(e){return t.scrollTo("orderFlow")}}},[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Cara Pesan")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Syarat dan Ketentuan")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Kebijakan Privasi")])],1),t._v(" "),t._m(1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Karir\n            "),t.isHiring?e("span",{staticClass:"hiring text-primary font-mono"},[t._v("\n              ..we're hiring")]):t._e()])],1)])]),t._v(" "),e("div",{staticClass:"tn:my-4 lg:mt-0"},[e("h1",{staticClass:"font-bold tn:text-lg md:text-2xl tn:my-8 lg:mb-4 xl:mb-8"},[t._v("\n        Produk\n      ")]),t._v(" "),e("ul",{staticClass:"tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4"},[e("li",{on:{click:function(e){return t.scrollTo("product-ondemand")}}},[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Produk Non Digital")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Program Patungan")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Program Sekeranjang")])],1),t._v(" "),e("li",{staticClass:"relative max-w-max"},[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("Sequrban")])],1),t._v(" "),e("li",{staticClass:"relative max-w-max"},[e("NuxtLink",{staticClass:"hover:no-underline",attrs:{to:"/"}},[t._v("SeGlowUp")]),t._v(" "),e("img",{staticClass:"absolute top-0 -right-1 w-[9px]",class:"".concat(t.showSpark1?"opacity-100":"opacity-20"),attrs:{src:"/images/icons/atoms/spark.svg",alt:"spark"}}),t._v(" "),e("img",{staticClass:"absolute bottom-1 -right-2 w-[8px]",class:"".concat(t.showSpark2?"!opacity-100":"!opacity-20"),attrs:{src:"/images/icons/atoms/spark.svg",alt:"spark"}}),t._v(" "),e("img",{staticClass:"absolute top-0 -right-4 w-[12px]",class:"".concat(t.showSpark3?"!opacity-100":"!opacity-20"),attrs:{src:"/images/icons/atoms/spark.svg",alt:"spark"}})],1)])]),t._v(" "),t._m(2)]),t._v(" "),t._m(3)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-md md:row-span-3 lg:col-span-2 md:pr-10 xl:pr-16"},[e("div",{staticClass:"tn:mt-8 tn:mb-6 md:mb-9"},[e("img",{staticClass:"tn:h-[30px]",attrs:{src:"/images/navbar/brand_seakun.svg",alt:"tentang seakun"}})]),t._v(" "),e("p",{staticClass:"tn:text-sm md:text-base my-2 space-y-1"},[t._v("\n        Platform pertama di Indonesia yang memberikan layanan patungan untuk\n        menikmati fitur dan produk premium dengan konsep sharing price\n        sehingga dapat dinikmati dengan harga yang leih murah, serta aman dan\n        praktis.\n      ")]),t._v(" "),e("div",{staticClass:"flex space-x-2 xl:space-x-3 my-3"},[e("a",{attrs:{href:"https://instagram.com/seakun.id",target:"_blank"}},[e("img",{attrs:{src:"/images/footer/instagram.svg",alt:"instagram icon "}})]),t._v(" "),e("a",{attrs:{href:"https://twitter.com/OfficialSeakun",target:"_blank"}},[e("img",{attrs:{src:"/images/footer/twitter.svg",alt:"twitter icon"}})]),t._v(" "),e("a",{attrs:{href:"https://www.linkedin.com/company/seakun-id/",target:"_blank"}},[e("img",{attrs:{src:"/images/footer/linkedin.svg",alt:"linkedin icon"}})])]),t._v(" "),e("div",{},[e("p",{staticClass:"text-sm"},[t._v("\n          Sudah terdaftar sebagai penyedia media elektronik di Kominfo\n          "),e("span",[e("img",{staticClass:"inline-block",attrs:{src:"/images/footer/shield-check.svg",alt:"check"}})])])])])},function(){var t=this._self._c;return t("li",[t("a",{staticClass:"hover:no-underline",attrs:{href:"https://forms.gle/t1AbaxnjEtJr8NAPA",target:"_blank"}},[this._v("Laporan Kendala")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tn:my-4 lg:mt-0"},[e("h1",{staticClass:"font-bold tn:text-lg md:text-2xl tn:my-8 lg:mb-4 xl:mb-8"},[t._v("\n        Hubungi Kami\n      ")]),t._v(" "),e("div",{staticClass:"tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4"},[e("div",{staticClass:"flex space-x-2"},[e("img",{attrs:{src:"/images/footer/email-icon.svg",alt:"#"}}),t._v(" "),e("a",{attrs:{href:"mailto:admin@seakun.id"}},[e("p",[t._v("official@seakun.tech")])])]),t._v(" "),e("div",{staticClass:"flex space-x-2 items-center"},[e("img",{attrs:{src:"/images/footer/whatsapp.svg",alt:"#"}}),t._v(" "),e("a",{attrs:{href:"https://api.whatsapp.com/send?phone=6282124852232"}},[t._v("082124852232")])]),t._v(" "),e("div",{staticClass:"flex space-x-2 items-start"},[e("img",{staticClass:"ml-1",attrs:{src:"/images/footer/time-circle.svg",alt:"#"}}),t._v(" "),e("div",{staticClass:"space-y-1"},[e("p",{staticClass:"font-bold"},[t._v("Jam Operasional")]),t._v(" "),e("p",[t._v("Setiap Hari")]),t._v(" "),e("p",[t._v("09.00 - 21.00 WIB")])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"text-center text-white tn:py-2 lg:py-4"},[t("p",[this._v("© 2020 - 2024 PT Seakun Global Teknologi")])])}],!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n.r(e);var l=n(301),r={name:"navbar-blank",data:function(){return{}},props:{className:{typeof:String,default:"bg-third tn:shadow"}},components:{Logo:l.default}},o=(n(313),n(51)),component=Object(o.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"w-full fixed top-0 z-40 py-3 px-2",class:this.className,attrs:{id:"navbar"}},[t("div",{staticClass:"!container static z-0 w-full text-gray-700 md:px-10 lg:flex lg:justify-between"},[t("NuxtLink",{attrs:{to:"/"}},[t("img",{staticClass:"h-[30px]",attrs:{src:"/images/navbar/brand_seakun.svg",alt:"brand seakun"}})])],1)])}),[],!1,null,"ffb3c620",null);e.default=component.exports},336:function(t,e,n){var content=n(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("bf737cf2",content,!0,{sourceMap:!1})},337:function(t,e,n){var content=n(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("d4a6e11c",content,!0,{sourceMap:!1})},388:function(t,e,n){"use strict";n(336)},389:function(t,e,n){var l=n(111)((function(i){return i[1]}));l.push([t.i,'body{font-family:"DM Sans",sans-serif!important}',""]),l.locals={},t.exports=l},390:function(t,e,n){"use strict";n(337)},391:function(t,e,n){var l=n(111)((function(i){return i[1]}));l.push([t.i,".bg-wave-white{background-color:#fff;-webkit-clip-path:ellipse(54% 100% at 50% 0);clip-path:ellipse(54% 100% at 50% 0)}.bg-wave{background-color:#efefef}@media only screen and (min-width:500px){.bg-wave{-webkit-clip-path:ellipse(129% 100% at 50% 0);clip-path:ellipse(129% 100% at 50% 0)}}",""]),l.locals={},t.exports=l},454:function(t,e,n){var content=n(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("4bac03f0",content,!0,{sourceMap:!1})},470:function(t,e,n){"use strict";n.r(e);var l={},r=(n(388),n(51)),component=Object(r.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tn:w-full relative z-0"},[e("img",{staticClass:"tn:hidden md:block tn:w-full tn:absolute tn:z-0 tn:top-0 tn:right-0",attrs:{src:"/images/sekeranjang/bg-header.png",alt:"background header"}}),t._v(" "),e("img",{staticClass:"tn:w-full tn:absolute tn:z-0 tn:top-0 md:hidden",attrs:{src:"/images/sekeranjang/bg-header-mobile.png",alt:"background header"}}),t._v(" "),e("div",{staticClass:"!container relative tn:grid tn:grid-cols-1 md:grid-cols-2 tn:gap-6 tn:items-center tn:z-20 tn:pt-20 md:pt-24 xl:pt-64 tn:px-8 lg:px-10 xl:px-2"},[e("div",{staticClass:"tn:px-8 md:px-4 xl:px-0"},[e("h1",{staticClass:"tn:text-[36px] md:text-[40px] lg:text-[56px] font-bold"},[t._v("\n        Sekeranjang\n      ")]),t._v(" "),e("h2",{staticClass:"tn:text-[20px] md:text-[28px] lg:text-[40px] text-[#474747] tn:mt-1 md:mt-2 lg:mt-4"},[t._v("\n        Belanja bareng di\n        "),e("span",{staticClass:"text-secondary font-bold"},[t._v("Seakun")]),t._v("!\n      ")]),t._v(" "),e("p",{staticClass:"tn:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] tn:mt-4 lg:mt-8 text-[#A0A3BD] xl:tracking-wide xl:leading-8"},[t._v("\n        Temukan barang favoritmu dengan harga jauh lebih murah dari harga\n        normal dengan konsep beli barang secara bersama untuk mendapatkan\n        diskon lebih banyak.\n      ")])]),t._v(" "),e("div",{staticClass:"tn:px-3 md:px-0"},[e("img",{staticClass:"tn:w-full",attrs:{src:"/images/sekeranjang/header-illustration.png",alt:"header illustration"}})])])])}],!1,null,null,null);e.default=component.exports},471:function(t,e,n){"use strict";n.r(e);var l={},r=(n(390),n(51)),component=Object(r.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative z-0 tn:mt-20 tn:py-12 md:py-24 lg:py-28 xl:py-40 bg-wave"},[e("div",{staticClass:"tn:hidden md:block w-full h-[40px] bg-wave-white absolute top-0 z-20"}),t._v(" "),e("div",{staticClass:"relative z-10"},[e("h1",{staticClass:"tn:text-[28px] md:text-[32px] lg:text-[40px] font-bold text-center"},[t._v("\n      Alur Pesanan\n    ")]),t._v(" "),e("p",{staticClass:"tn:px-4 text-center text-[#A0A3BD] max-w-[730px] mx-auto tn:mt-3 md:mt-4"},[t._v("\n      Secara ringkas Alur Pesanan produk Sekeranjang mulai dari pilih barang\n      favoritmu, lakukan pemesanan, selesaikan pembayaran hingga terima\n      barang.\n    ")]),t._v(" "),e("div",{staticClass:"tn:px-6 tn:w-full md:w-[430px] md:mx-auto lg:w-full tn:space-y-6 lg:space-y-0 lg:flex tn:justify-center lg:space-x-4 lg:items-center tn:mt-8 md:mt-12"},[e("div",{staticClass:"tn:flex lg:block tn:space-x-4 lg:space-x-0 lg:text-center lg:w-[192px] lg:space-y-1"},[e("img",{staticClass:"lg:mx-auto w-[34px]",attrs:{src:"/images/sekeranjang/order flow/step-1.svg",alt:"step 1"}}),t._v(" "),e("div",[e("p",{staticClass:"text-secondary font-semibold"},[t._v("Pilih Barang")]),t._v(" "),e("p",{staticClass:"text-[#474747]"},[t._v("Pilih barang yang kamu inginkan")])])]),t._v(" "),e("div",{staticClass:"tn:hidden md:flex"},[e("img",{attrs:{src:"/images/sekeranjang/order flow/line.svg",alt:"separator"}})]),t._v(" "),e("div",{staticClass:"tn:flex lg:block tn:space-x-4 lg:space-x-0 lg:text-center lg:w-[192px] lg:space-y-1"},[e("img",{staticClass:"lg:mx-auto w-[34px]",attrs:{src:"/images/sekeranjang/order flow/step-2.svg",alt:"step 2"}}),t._v(" "),e("div",[e("p",{staticClass:"text-secondary font-semibold"},[t._v("Daftar")]),t._v(" "),e("p",{staticClass:"text-[#474747]"},[t._v("\n            Daftarkan data diri untuk proses lebih lanjut\n          ")])])]),t._v(" "),e("div",{staticClass:"tn:hidden md:flex"},[e("img",{attrs:{src:"/images/sekeranjang/order flow/line.svg",alt:"separator"}})]),t._v(" "),e("div",{staticClass:"tn:flex lg:block tn:space-x-4 lg:space-x-0 lg:text-center lg:w-[192px] lg:space-y-1"},[e("img",{staticClass:"lg:mx-auto w-[34px]",attrs:{src:"/images/sekeranjang/order flow/step-3.svg",alt:"step 3"}}),t._v(" "),e("div",[e("p",{staticClass:"text-secondary font-semibold"},[t._v("Menunggu")]),t._v(" "),e("p",{staticClass:"text-[#474747]"},[t._v("Menunggu grup belanja bareng full")])])]),t._v(" "),e("div",{staticClass:"tn:hidden md:flex"},[e("img",{attrs:{src:"/images/sekeranjang/order flow/line.svg",alt:"separator"}})]),t._v(" "),e("div",{staticClass:"tn:flex lg:block tn:space-x-4 lg:space-x-0 lg:text-center lg:w-[192px] lg:space-y-1"},[e("img",{staticClass:"lg:mx-auto w-[34px]",attrs:{src:"/images/sekeranjang/order flow/step-4.svg",alt:"step 4"}}),t._v(" "),e("div",[e("p",{staticClass:"text-secondary font-semibold"},[t._v("Bayar")]),t._v(" "),e("p",{staticClass:"text-[#474747]"},[t._v("Melakukan pembayaran barang")])])]),t._v(" "),e("div",{staticClass:"tn:hidden md:flex"},[e("img",{attrs:{src:"/images/sekeranjang/order flow/line.svg",alt:"separator"}})]),t._v(" "),e("div",{staticClass:"tn:flex lg:block tn:space-x-4 lg:space-x-0 lg:text-center lg:w-[192px] lg:space-y-1"},[e("img",{staticClass:"lg:mx-auto w-[34px]",attrs:{src:"/images/sekeranjang/order flow/step-5.svg",alt:"step 5"}}),t._v(" "),e("div",[e("p",{staticClass:"text-secondary font-semibold"},[t._v("Terima Barang")]),t._v(" "),e("p",{staticClass:"text-[#474747]"},[t._v("Konfirmasi barang sudah diterima")])])])])])])}],!1,null,null,null);e.default=component.exports},476:function(t,e,n){"use strict";n.r(e);var l={components:{Button:n(298).default}},r=n(51),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tn:mt-12 xl:mt-20 w-full md:py-12 lg:px-6"},[e("div",{staticClass:"tn:w-full xl:w-[1266px] mx-auto lg:rounded-md bg-[#499C8A] relative z-0 overflow-hidden"},[e("img",{staticClass:"absolute z-10 top-0 w-full tn:h-full md:h-auto",attrs:{src:"/images/sekeranjang/product/wave-1.png",alt:"wave 1"}}),t._v(" "),e("img",{staticClass:"absolute z-20 top-0 w-full tn:h-full md:h-auto",attrs:{src:"/images/sekeranjang/product/wave-2.png",alt:"wave 2"}}),t._v(" "),e("div",{staticClass:"relative z-40 md:flex md:justify-between md:items-center text-white tn:py-5 md:py-9 tn:px-5 md:px-16"},[e("div",{staticClass:"lg:w-[758px]"},[e("h1",{staticClass:"tn:text-[32px] lg:text-[48px] font-bold tn:text-center md:text-left"},[t._v("\n          Ajukan Produk\n        ")]),t._v(" "),t._m(0),t._v(" "),e("a",{attrs:{href:"https://api.whatsapp.com/send/?phone=6282124852232&text=%22Hi%20min,%20saya%20ingin%20mengajukan%20produk%20patungan%22&type=phone_number&app_absent=0"}},[e("Button",{staticClass:"tn:mt-6 tn:py-4 font-bold tn:w-full md:w-1/2 border border-white rounded",attrs:{variant:"primary",label:"Ajukan Sekarang"}})],1)]),t._v(" "),t._m(1)])])])}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"lg:text-[24px] tn:mt-4 font-base tn:text-center md:text-left lg:leading-8 text-[#efefef]"},[t._v("\n          Ajukan produk "),e("b",[t._v("buy 1 get 1")]),t._v(" atau produk\n          "),e("b",[t._v("barengan beli banyak")]),t._v(" untuk mendapatkan potongan harga lebih\n          banyak.\n        ")])},function(){var t=this._self._c;return t("div",{staticClass:"w-[350px] tn:hidden md:block"},[t("img",{staticClass:"mx-auto",attrs:{src:"/images/sekeranjang/product/submit-product.png",alt:"submit product illustration"}})])}],!1,null,null,null);e.default=component.exports},530:function(t,e,n){"use strict";n(454)},531:function(t,e,n){var l=n(111)((function(i){return i[1]}));l.push([t.i,'#sekeranjang{background-color:#fff;font-family:"DM Sans",sans-serif!important}',""]),l.locals={},t.exports=l},568:function(t,e,n){"use strict";n.r(e);var l=n(318),r=n(470),o=n(471),c=n(562),d=n(476),m=n(317),v={components:{Navbar:l.default,Header:r.default,OrderFlow:o.default,ProductList:c.default,ProductSubmitBanner:d.default,Footer:m.default}},f=(n(530),n(51)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"sekeranjang"}},[e("Navbar"),t._v(" "),e("Header"),t._v(" "),e("OrderFlow"),t._v(" "),e("ProductList"),t._v(" "),e("ProductSubmitBanner"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);