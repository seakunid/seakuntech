(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{367:function(t,e,r){var content=r(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(112).default)("294cff7b",content,!0,{sourceMap:!1})},450:function(t,e,r){"use strict";r(367)},451:function(t,e,r){var n=r(111)((function(i){return i[1]}));n.push([t.i,'.font-nunito[data-v-2464222d]{font-family:"Nunito Sans",sans-serif}@media (max-width:425px){.categoryWidth[data-v-2464222d]{max-width:320px}}@media (max-width:375px){.categoryWidth[data-v-2464222d]{max-width:300px}}@media (max-width:320px){.categoryWidth[data-v-2464222d]{max-width:260px}}',""]),n.locals={},t.exports=n},527:function(t,e,r){"use strict";r.r(e);r(87),r(41),r(88),r(204),r(16),r(27),r(35),r(66);var n={props:{data:{typeof:Object,default:function(){}},id:{typeof:Number,default:1},zapUid:{typeof:String,default:""}},mounted:function(){this.data&&this.toCamelCase("lolll")},data:function(){return{filteredCategory:[],category:[{name:"Zap Series 199K",value:"Beauty Care, Beauty Care, Hair Removal, Beauty Care, Body Treatment, Beauty Care"},{name:"Zap Series 299K",value:"Beauty Care, Beauty Care, Hair Removal, Beauty Care, Body Treatment, Beauty Care"},{name:"Zap Series 449K",value:"Beauty Care, Beauty Care, Hair Removal, Beauty Care, Body Treatment, Beauty Care"}]}},methods:{toCamelCase:function(t){return t.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g,(function(t,e){return 0==+t?"":0===e?t.toLowerCase():t.toUpperCase()})).replace(/\s+/g,"")},convertToNormalPrice:function(t){return 32*(t/8)/.85/32},toRupiah:function(t){return t?"Rp"+t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."):"Rp0"}}},o=(r(450),r(51)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white p-3 rounded-[6px] w-full"},[e("NuxtLink",{attrs:{to:"/seglowup"}},[e("header",{staticClass:"bg-cover w-full h-[106px]",style:"background-image: url(/images/seglowup/background/series-".concat(t.id,".webp)")},[e("div",{staticClass:"font-nunito text-green-seakun-secondary-dark leading-normal pt-[26px] pl-4 md:pl-[23px]"},[e("p",{staticClass:"text-base"},[t._v("Series Pricelist")]),t._v(" "),e("p",{staticClass:"font-[800] text-[21px] pt-1"},[t._v("\n          "+t._s(t.toRupiah(t.convertToNormalPrice(t.data.price)))+"\n        ")])])]),t._v(" "),e("section",{staticClass:"space-y-2 mt-2 text-xs"},[e("div",{staticClass:"flex justify-between items-center"},[e("p",{staticClass:"text-main text-xs"},[t._v("Harga Paket 32x Treatment")]),t._v(" "),e("p",{staticClass:"text-sm font-bold text-green-seakun-secondary-dark lg:text-sm"},[t._v("\n          "+t._s(t.toRupiah(t.convertToNormalPrice(32*t.data.price)))+"\n        ")])]),t._v(" "),e("div",{staticClass:"flex justify-between items-center"},[e("p",{staticClass:"text-main text-xs"},[t._v("Harga Normal Per Treatment")]),t._v(" "),e("p",{staticClass:"text-sm font-bold text-green-seakun-secondary-dark lg:text-sm"},[t._v("\n          "+t._s(t.toRupiah(t.convertToNormalPrice(t.data.price)))+"\n        ")])]),t._v(" "),e("div",{staticClass:"flex justify-between items-center"},[e("p",{staticClass:"text-main text-xs"},[t._v("Harga Patungan Per Treatment")]),t._v(" "),e("p",{staticClass:"text-sm font-bold text-green-seakun-secondary-dark lg:text-sm"},[t._v("\n          "+t._s(t.toRupiah(t.data.price/8))+"\n        ")])]),t._v(" "),e("div",{staticClass:"flex justify-between items-center"},[e("p",{staticClass:"text-main text-xs"},[t._v("Hemat Hingga")]),t._v(" "),e("p",{staticClass:"text-sm font-bold text-green-seakun-secondary-dark lg:text-sm"},[t._v("\n          "+t._s(t.toRupiah(t.convertToNormalPrice(t.data.price)-t.data.price/8))+"\n        ")])])]),t._v(" "),e("section",{staticClass:"relative w-full mt-2"},[e("div",{staticClass:"bg-[#F6F6F6] w-full h-[1px]"}),t._v(" "),e("div",{staticClass:"text-xs mt-2"},[e("p",{staticClass:"text-[#66738F]"},[t._v("Kategori Perawatan:")]),t._v(" "),t._l(t.category,(function(r,n){return e("div",{key:n},[r.name.includes(t.data.notes)?e("div",[e("p",{staticClass:"truncate md:pr-3 pt-2 categoryWidth"},[t._v("\n              "+t._s(r.value)+"\n            ")])]):t._e()])}))],2)])])],1)}),[],!1,null,"2464222d",null);e.default=component.exports}}]);