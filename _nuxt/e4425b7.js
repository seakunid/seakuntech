(window.webpackJsonp=window.webpackJsonp||[]).push([[79,11],{297:function(t,n,e){var content=e(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(112).default)("6e4d3b88",content,!0,{sourceMap:!1})},298:function(t,n,e){"use strict";e.r(n);e(85);var l={name:"Button",props:{variant:{type:String,default:null},size:{type:String,default:null},label:{type:String,default:""},isLoading:{type:Boolean,default:!1},shape:{type:String,default:""},addClass:{type:String,default:""},classWrapper:{type:String,default:""}},data:function(){return{classBtn:"btn btn-".concat(this.variant," ").concat(this.size?"btn-"+this.size:""," ").concat("pill"===this.shape?"!rounded-full":""," ").concat(this.addClass?this.addClass:"")}},methods:{handleOnClick:function(t){this.$emit("click",t)}}},o=(e(299),e(51)),component=Object(o.a)(l,(function(){var t=this,n=t._self._c;return n("button",t._b({class:t.classWrapper,attrs:{type:"button",disabled:t.isLoading},on:{click:t.handleOnClick}},"button",t.$props,!1),[t.isLoading?n("div",[t._m(0)]):t.label?n("div",[t._v("\n    "+t._s(t.label)+"\n  ")]):n("div",[t._t("default")],2)])}),[function(){var t=this._self._c;return t("div",[t("i",{staticClass:"fa-solid fa-circle-notch fa-spin"}),this._v("\n      Loading...\n    ")])}],!1,null,"b2985172",null);n.default=component.exports},299:function(t,n,e){"use strict";e(297)},300:function(t,n,e){var l=e(111)((function(i){return i[1]}));l.push([t.i,"button[data-v-b2985172]:disabled,button[data-v-b2985172]:hover:disabled{background-color:#a9e0d5!important;border:1px solid #a9e0d5!important;color:#fff!important}.fa[data-v-b2985172]{margin-left:-12px;margin-right:8px}",""]),l.locals={},t.exports=l},320:function(t,n,e){t.exports=e.p+"img/checked-box.6bc87e6.svg"},321:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMyIgcng9IjMuNSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI0Q5RDlEOSIvPgo8L3N2Zz4K"},369:function(t,n,e){"use strict";e.r(n);var l=e(320),o=e.n(l),r=e(321),c=e.n(r),d=e(298),f={components:{CheckedBox:o.a,UncheckBox:c.a,Button:d.default},props:{product:{type:Object,default:function(){return{}}}},data:function(){return{isAgreeTos:!1}},computed:{linkProduct:function(){},isAvailable:function(){return 0===this.product.promoEndAt||0!==this.product.promoEndAt}},methods:{onClickShareLink:function(t){if("facebook"===t){var n="https://www.facebook.com/sharer/sharer.php?u=".concat(this.linkProduct);window.open(n,"_blank")}else if("twitter"===t){var e="https://www.twitter.com/share?url=".concat(encodeURIComponent(this.linkProduct));window.open(e,"_blank","left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0")}else if("whatsapp"===t){var l="https://api.whatsapp.com/send?text=".concat(this.linkProduct);window.open(l,"_blank")}else if("telegram"===t){var o="https://t.me/share/url?url=".concat(this.linkProduct);window.open(o,"_blank")}else if("email"===t){var r="https://mail.google.com/mail?fs=1&tf=cm&su=link+sekeranjang&body=".concat(this.linkProduct);window.open(r,"_blank")}}}},h=e(51),component=Object(h.a)(f,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"w-full h-full relative z-0 tn:mt-8"},[n("div",{staticClass:"sticky top-20"},[n("div",{staticClass:"w-full bg-white rounded-lg tn:px-6 tn:py-5 tn:mt-6 lg:mt-0"},[n("p",{staticClass:"font-bold text-[#66738F]"},[t._v("Bagikan link produk")]),t._v(" "),n("div",{staticClass:"rounded-md overflow-hidden border-2 border-[#A0A3BD] flex justify-between tn:mt-2"},[n("div",{staticClass:"hide-scrollbar w-full overscroll-auto overflow-x-auto tn:py-4 tn:pl-4"},[n("div",{staticClass:"min-w-max h-full flex-none"},[n("p",{staticClass:"text-[#A0A3BD] w-full h-full"},[t._v("\n              "+t._s(t.linkProduct)+"\n            ")])])]),t._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"w-4 h-full"}),t._v(" "),n("div",{staticClass:"bg-primary w-[50px] h-full flex justify-center items-center cursor-pointer",on:{click:function(n){return t.$emit("clickCopy","Link produk",t.linkProduct)}}},[n("img",{staticClass:"w-[20px] h-[20px]",attrs:{src:"/images/icons/atoms/copy.svg",alt:"copy link"}})])])]),t._v(" "),n("div",{staticClass:"tn:mt-5 flex justify-between items-center"},[n("img",{staticClass:"w-[42px] h-[42px] cursor-pointer",attrs:{role:"button",src:"/images/sekeranjang/social/facebook.svg",alt:"facebook icon"},on:{click:function(n){return t.onClickShareLink("facebook")}}}),t._v(" "),n("img",{staticClass:"w-[42px] h-[42px] cursor-pointer",attrs:{role:"button",src:"/images/sekeranjang/social/twitter.svg",alt:"twitter icon"},on:{click:function(n){return t.onClickShareLink("twitter")}}}),t._v(" "),n("img",{staticClass:"w-[42px] h-[42px] cursor-pointer",attrs:{role:"button",src:"/images/sekeranjang/social/whatsapp.svg",alt:"whatsapp icon"},on:{click:function(n){return t.onClickShareLink("whatsapp")}}}),t._v(" "),n("img",{staticClass:"w-[42px] h-[42px] cursor-pointer",attrs:{role:"button",src:"/images/sekeranjang/social/telegram.svg",alt:"telegram icon"},on:{click:function(n){return t.onClickShareLink("telegram")}}}),t._v(" "),n("img",{staticClass:"w-[42px] h-[42px] cursor-pointer",attrs:{role:"button",src:"/images/sekeranjang/social/email.svg",alt:"email icon"},on:{click:function(n){return t.onClickShareLink("email")}}})])]),t._v(" "),n("div",{staticClass:"w-full bg-white rounded-2xl tn:p-6 tn:mt-4"},[n("div",{staticClass:"flex justify-between items-center"},[n("p",{staticClass:"font-medium text-[#66738F]"},[t._v("Total harga")]),t._v(" "),n("p",{staticClass:"text-[24px] font-bold text-[#417465]"},[t._v("\n          "+t._s(t.product.finalPrice)+"\n        ")])]),t._v(" "),n("p",{staticClass:"font-medium text-[#66738F] text-[13px] tn:mt-2"},[t._v("\n        *Total harga belum termasuk ongkir\n      ")]),t._v(" "),n("hr",{staticClass:"tn:my-2"}),t._v(" "),t.isAvailable?n("div",{staticClass:"flex items-start space-x-2 tn:pt-2"},[n("div",{staticClass:"cursor-pointer w-[24px]",on:{click:function(n){t.isAgreeTos=!t.isAgreeTos}}},[t.isAgreeTos?n("CheckedBox"):n("UncheckBox")],1),t._v(" "),t._m(0)]):t._e(),t._v(" "),t.isAvailable?n("Button",{staticClass:"w-full tn:mt-4",attrs:{label:"Ikut patungan",variant:"primary","add-class":"tn:py-4 font-bold",disabled:!t.isAgreeTos},on:{click:function(n){return t.$emit("onClickOrder")}}}):n("div",{staticClass:"tn:mt-4 w-full rounded-lg bg-red-100 text-red-500 tn:p-4 text-center font-bold"},[t._v("\n        Masa promo berakhir\n      ")])],1)])])}),[function(){var t=this,n=t._self._c;return n("p",[t._v("\n          Saya menyetujui\n          "),n("a",{staticClass:"text-green-seakun ml-0",attrs:{href:"",target:"_blank"}},[t._v("syarat & ketentuan")]),t._v("\n          Seakun\n        ")])}],!1,null,null,null);n.default=component.exports}}]);