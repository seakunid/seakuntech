(window.webpackJsonp=window.webpackJsonp||[]).push([[1,11,16,25,26,27],{297:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("6e4d3b88",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";n.r(e);n(85);var d={name:"Button",props:{variant:{type:String,default:null},size:{type:String,default:null},label:{type:String,default:""},isLoading:{type:Boolean,default:!1},shape:{type:String,default:""},addClass:{type:String,default:""},classWrapper:{type:String,default:""}},data:function(){return{classBtn:"btn btn-".concat(this.variant," ").concat(this.size?"btn-"+this.size:""," ").concat("pill"===this.shape?"!rounded-full":""," ").concat(this.addClass?this.addClass:"")}},methods:{handleOnClick:function(t){this.$emit("click",t)}}},l=(n(299),n(51)),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("button",t._b({class:t.classWrapper,attrs:{type:"button",disabled:t.isLoading},on:{click:t.handleOnClick}},"button",t.$props,!1),[t.isLoading?e("div",[t._m(0)]):t.label?e("div",[t._v("\n    "+t._s(t.label)+"\n  ")]):e("div",[t._t("default")],2)])}),[function(){var t=this._self._c;return t("div",[t("i",{staticClass:"fa-solid fa-circle-notch fa-spin"}),this._v("\n      Loading...\n    ")])}],!1,null,"b2985172",null);e.default=component.exports},299:function(t,e,n){"use strict";n(297)},300:function(t,e,n){var d=n(111)((function(i){return i[1]}));d.push([t.i,"button[data-v-b2985172]:disabled,button[data-v-b2985172]:hover:disabled{background-color:#a9e0d5!important;border:1px solid #a9e0d5!important;color:#fff!important}.fa[data-v-b2985172]{margin-left:-12px;margin-right:8px}",""]),d.locals={},t.exports=d},323:function(t,e,n){var content=n(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("d27f27a2",content,!0,{sourceMap:!1})},363:function(t,e,n){"use strict";n(323)},364:function(t,e,n){var d=n(111)((function(i){return i[1]}));d.push([t.i,".label{background:#e9faf5;border-radius:39px;color:#00ba88;font-size:14px;font-weight:500;padding:3px 0!important;text-align:center;width:63px}",""]),d.locals={},t.exports=d},365:function(t,e,n){var content=n(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("2f26f577",content,!0,{sourceMap:!1})},374:function(t,e,n){"use strict";n.r(e);var d={props:{label:{type:String,default:"Baru"}}},l=(n(363),n(51)),component=Object(l.a)(d,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"label"},[t._v(t._s(t.label))])}),[],!1,null,null,null);e.default=component.exports},446:function(t,e,n){"use strict";n(365)},447:function(t,e,n){var d=n(111)((function(i){return i[1]}));d.push([t.i,'.provider-card{box-shadow:0 0 16px rgba(0,0,0,.06)}.cloud{border-radius:10px;height:10.5px;position:relative;width:38px;z-index:10}.cloud,.cloud:before{background-color:#f5f5f5!important}.cloud:before{border-radius:50%;content:"";height:14px;left:50%;position:absolute;top:-8px;transform:translateX(-50%);width:14px;z-index:15}@media screen and (min-width:600px){.cloud{height:21px;width:76px}.cloud:before{height:28px;top:-14px;width:28px}}',""]),d.locals={},t.exports=d},522:function(t,e,n){"use strict";n.r(e);n(41);var d=n(298),l=n(374),r={components:{Button:d.default,Label:l.default},props:{product:{type:Object,default:{}}}},o=n(51),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full h-full border-[1px] border-[#8DCABE] max-w-[166px] bg-[#8DCABE] bg-opacity-5 md:rounded-2xl tn:rounded-lg overflow-hidden relative z-0",class:"".concat(t.product.isActive?"md:border-opacity-100 tn:border-opacity-20":"border-opacity-20")},[e("div",{staticClass:"relative tn:h-full tn:w-full overflow-hidden flex-nowrap justify-center items-center"},[e("div",{staticClass:"md:mt-[26.5px] tn:mt-3 md:h-[100px] tn:h-16",class:"".concat(t.product.isActive?"opacity-100":"opacity-30")},[t.product.variants?e("img",{staticClass:"block object-cover min-h-full min-w-full",attrs:{src:"/images/product/".concat(t.product.slug,".png"),alt:"provider"}}):e("img",{staticClass:"justify-center mx-auto tn:h-9 tn:w-[45px] md:h-[45px] md:w-[48px]",attrs:{src:"/images/product/on demand/new/".concat(t.product.slug,".png"),alt:"provider"}}),t._v(" "),e("div",{class:"".concat("semabar"===t.product.slug?"md:mt-3 tn:mt-1":"md:mt-4 tn:mt-2")},[e("h1",{staticClass:"font-bold text-[#8DCABE] md:text-lg tn:text-sm justify-center text-center"},[t._v("\n          "+t._s(t.product.name)+"\n        ")]),t._v(" "),e("p",{staticClass:"text-[#8DCABE] text-sm text-center"},[t._v("\n          "+t._s(t.product.preview)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"mt-4 md:mb-[25px] mb-3 text-center"},[e("Button",{staticClass:"md:w-[90px] tn:w-[76px] font-bold py-[4.5px]",attrs:{variant:"primary","class-wrapper":"bg-[#08A081] !text-white !rounded-[6px] !text-sm md:!text-base lg:!text-lg ",label:"Pesan",disabled:!t.product.isActive},on:{click:function(e){return t.$emit("on-click-product",t.product)}}})],1),t._v(" "),e("div",{staticClass:"absolute top-0 right-0"},[t.product.isActive?t._e():e("img",{staticClass:"md:h-full tn:h-[72px]",attrs:{src:"/images/product/coming-soon.svg",alt:"coming-soon"}})])])])}),[],!1,null,"a0aa651e",null);e.default=component.exports},523:function(t,e,n){"use strict";n.r(e);n(41);var d={components:{Button:n(298).default},props:{dataProvider:{type:Object,default:function(){}}},methods:{}},l=(n(446),n(51)),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tn:w-full md:w-[268px] bg-white !rounded-[8px] tn:p-2 md:p-[14px] provider-card relative z-0"},[t.checkIsNewProduct(t.dataProvider.createdAt)?e("div",{staticClass:"absolute top-0 tn:left-2 md:left-[10px] z-10 bg-[#FDCD22] tn:!font-bold tn:text-[10px] md:text-base tn:px-[8px] md:px-[16px] tn:py-[2px] md:py-[4px] tn:rounded-b-[2px] md:rounded-b-[8px]"},[t._v("\n    Baru\n  ")]):t._e(),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"flex tn:my-2 md:mb-0 tn:gap-2 items-center tn:h-[30px] md:h-[60px]"},[e("div",{staticClass:"tn:w-[30px] tn:h-[30px] md:w-[60px] md:h-[60px] flex justify-center items-center tn:rounded-md"},[e("img",{staticClass:"tn:w-full md:w-3/4",attrs:{src:"/images/icons/".concat(t.dataProvider.slug,".svg"),alt:"provider icon"}})]),t._v(" "),e("h4",{staticClass:"tn:!font-bold tn:text-[14px] md:text-base tn:m-0 text-left tn:!leading-[18px] md:!leading-5 max-w-[70%]"},[t._v("\n      "+t._s(t.dataProvider.name)+"\n    ")])]),t._v(" "),e("div",{staticClass:"bg-[#f6f6f6] h-[0.5px] w-full"}),t._v(" "),e("div",{staticClass:"tn:my-2 tn:min-h-[80px] md:min-h-[92px]"},t._l(t.dataProvider.variants,(function(n,d){return e("div",{key:d,staticClass:"tn:my-[3px] md:-space-y-2"},[e("p",{staticClass:"tn:text-[12px] md:text-[14px] md:!text-medium"},[t._v("\n        "+t._s(n.packageName)+"\n      ")]),t._v(" "),e("div",{staticClass:"tn:text-[11px] md:text-[14px] flex justify-between items-center"},[12===n.duration?e("p",{staticClass:"tn:!font-bold"},[t._v("\n          "+t._s(t.formatMoneyRupiah(n.grandTotal))+"\n          "),e("span",{staticClass:"!font-normal text-[#66738F] md:hidden"},[t._v("/thn")]),e("span",{staticClass:"!font-normal text-[#66738F] tn:hidden md:inline-block"},[t._v("/tahun")])]):n.duration>1?e("p",{staticClass:"tn:!font-bold"},[t._v("\n          "+t._s(t.formatMoneyRupiah(n.grandTotal))+"\n          "),e("span",{staticClass:"!font-normal text-[#66738F] md:hidden"},[t._v("/"+t._s(n.duration)+" bln")]),e("span",{staticClass:"!font-normal text-[#66738F] tn:hidden md:inline-block"},[t._v("/"+t._s(n.duration)+" bulan")])]):e("p",{staticClass:"tn:!font-bold"},[t._v("\n          "+t._s(t.formatMoneyRupiah(n.grandTotal))+"\n          "),e("span",{staticClass:"!font-normal text-[#66738F] md:hidden"},[t._v("/bln")]),e("span",{staticClass:"!font-normal text-[#66738F] tn:hidden md:inline-block"},[t._v("/bulan")])]),t._v(" "),"netflix"===t.dataProvider.slug?e("div",{staticClass:"tn:text-[8px] md:text-[10px] text-[#00BA88] bg-[#E9FAF5] tn:p-1 md:px-3 md:py-2 tn:rounded-[8px] md:rounded-[20px]"},[t._v("\n          1 "),e("span",{staticClass:"md:hidden"},[t._v("Bln")]),e("span",{staticClass:"tn:hidden md:inline-block"},[t._v("Bulan")])]):"canva"===t.dataProvider.slug||"microsoft-365"===t.dataProvider.slug?e("div",[12===n.duration?e("div",{staticClass:"tn:text-[8px] md:text-[10px] text-[#00BA88] bg-[#E9FAF5] tn:p-1 md:px-3 md:py-2 tn:rounded-[8px] md:rounded-[20px]"},[t._v("\n            1 "),e("span",{staticClass:"md:hidden"},[t._v("Thn")]),e("span",{staticClass:"tn:hidden md:inline-block"},[t._v("Tahun")])]):e("div",{staticClass:"tn:text-[8px] md:text-[10px] text-[#00BA88] bg-[#E9FAF5] tn:p-1 md:px-3 md:py-2 tn:rounded-[8px] md:rounded-[20px]"},[t._v("\n            1, 3, 6 "),e("span",{staticClass:"md:hidden"},[t._v("Bln")]),e("span",{staticClass:"tn:hidden md:inline-block"},[t._v("Bulan")])])]):"12"===n.durations?e("div",{staticClass:"tn:text-[8px] md:text-[10px] text-[#00BA88] bg-[#E9FAF5] tn:p-1 md:px-3 md:py-2 tn:rounded-[8px] md:rounded-[20px]"},[t._v("\n          1 "),e("span",{staticClass:"md:hidden"},[t._v("Thn")]),e("span",{staticClass:"tn:hidden md:inline-block"},[t._v("Tahun")])]):e("div",{staticClass:"tn:text-[8px] md:text-[10px] text-[#00BA88] bg-[#E9FAF5] tn:p-1 md:px-3 md:py-2 tn:rounded-[8px] md:rounded-[20px]"},[t._v("\n          "+t._s(n.durations)+" "),e("span",{staticClass:"md:hidden"},[t._v("Bln")]),e("span",{staticClass:"tn:hidden md:inline-block"},[t._v("Bulan")])])])])})),0),t._v(" "),e("div",{staticClass:"w-full tn:h-[77px] md:h-[100px]"}),t._v(" "),e("div",{staticClass:"w-full absolute z-10 bottom-0 left-0 tn:p-2 md:p-[14px]"},[e("div",{staticClass:"w-full"},[e("div",{staticClass:"bg-[#f6f6f6] h-[0.5px] w-full"}),t._v(" "),e("div",{staticClass:"tn:mt-2 tn:px-1 flex justify-between items-center"},[e("div",{staticClass:"text-[#4BAC99] flex items-center tn:gap-1",attrs:{role:"button"},on:{click:function(e){return t.showPriceScheme(t.dataProvider.slug,t.dataProvider.name)}}},[t._m(1),t._v(" "),e("p",{staticClass:"tn:text-[10px] md:text-[14px] md:!font-medium"},[t._v("\n            Lihat skema harga\n          ")])])]),t._v(" "),e("Button",{staticClass:"w-full tn:mt-2 md:mt-3",attrs:{label:t.dataProvider.active?"Pesan":"Segera hadir",disabled:!t.dataProvider.active,variant:"primary","add-class":"!rounded-[8px] py-2 md:py-3"},on:{click:function(e){return t.$emit("on-click-product",t.dataProvider)}}})],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"tn:pt-2 md:pt-4 flex justify-center items-center"},[t("div",{staticClass:"cloud"})])},function(){var t=this._self._c;return t("div",{staticClass:"md:w-[16px] md:h-[16px] flex justify-center items-center"},[t("img",{staticClass:"md:w-full",attrs:{src:"/images/icons/atoms/eye.svg",alt:"open scheme"}})])}],!1,null,null,null);e.default=component.exports},524:function(t,e,n){"use strict";n.r(e);n(41);var d={components:{Button:n(298).default},props:{propose:{type:Object,default:{}}}},l=n(51),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full h-full border-none max-w-[166px] bg-[#08A0810D] !text-[#08A081] bg-opacity-5 rounded-2xl relative z-0"},[e("div",{staticClass:"text-center md:pt-[26px] tn:pt-4"},[e("div",{staticClass:"md:px-[10.5px] tn:px-[6px]"},[e("img",{staticClass:"mx-auto mb-2 tn:h-9 tn:w-[45px] md:w-auto",attrs:{src:"".concat(t.propose.img),alt:"propose your business"}}),t._v(" "),e("h1",{staticClass:"md:text-lg tn:text-xs !text-[#08A081]"},[t._v("\n        "+t._s(t.propose.name)+" "),e("br"),t._v(" "),e("span",{},[t._v(" "+t._s(t.propose.preview)+" ")])])]),t._v(" "),e("div",{staticClass:"md:mt-4 mt-[11px] md:mb-[25px] tn:mb-3"},[e("NuxtLink",{attrs:{to:"/vote"}},[e("Button",{staticClass:"text-base text-[#08A081] mx-auto border-[1px] border-[#08A081] md:block tn:hidden px-[15px] py-1 rounded-[6px]",attrs:{label:"Ajukan layanan"}}),t._v(" "),e("Button",{staticClass:"text-sm text-[#08A081] border-[1px] border-[#08A081] md:hidden px-[15px] py-1 rounded-[6px]",attrs:{label:"Ajukan"}})],1)],1)])])}),[],!1,null,"2a97c2d8",null);e.default=component.exports},566:function(t,e,n){"use strict";n.r(e);var d=n(522),l=n(523),r=n(524),o={components:{ProductCard:d.default,ProviderCard:l.default,ProposeCard:r.default},data:function(){return{showModalScheme:!1,dataDetailProvider:{list:{},slug:"",name:""},dataProductOnDemand:[{name:"Semabar",slug:"semabar",img:"/images/product/on demand/new/semabar.png",isActive:!0,preview:"(Main Bareng)"},{name:"SeGlowUp",slug:"seglowup",img:"/images/product/on demand/new/seglowup.png",isActive:!0},{name:"Sekurban",slug:"sekurban",img:"/images/product/on demand/new/sekurban.png",isActive:!0},{name:"Sekeranjang",slug:"sekeranjang",img:"/images/product/on demand/new/sekeranjang.png",isActive:!0}],dataProposeProvider:{name:"Layananmu",preview:"belum terdaftar?",img:"/images/product/propose-new.svg"},isShowModalPackages:!1,choosedProvider:{},choosedSlugProvider:"",isShowCategoryList:!1,isShowProductTypeList:!1,categoryButton:"Kategori produk",productTypeButton:"Tipe produk",productTypeList:[{text:"All",value:0},{text:"Ready",value:1},{text:"Pre-order",value:2}]}}},c=n(51),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container tn:pt-6",attrs:{id:"provider"}},[e("div",{},[t._m(0),t._v(" "),e("div",{staticClass:"tn:mt-7"},[e("div",{staticClass:"w-full h-full grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-4 tn:grid-cols-3 tn:gap-3 md:gap-4 lg:gap-8 px-0 justify-center place-items-stretch items-stretch"},t._l(t.dataProductOnDemand,(function(t,n){return e("div",{key:n},[e("NuxtLink",{attrs:{to:t.slug}},[e("ProductCard",{staticClass:"md:w-full md:h-full",attrs:{product:t}})],1)],1)})),0)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"md:py-4 pt-5",attrs:{id:"product-ondemand"}},[t("h1",{staticClass:"tn:text-xl md:text-[30px] xl:text-[36px] font-bold"},[this._v("\n        Layanan Patungan\n      ")])])}],!1,null,"d67b4314",null);e.default=component.exports}}]);