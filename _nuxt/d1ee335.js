(window.webpackJsonp=window.webpackJsonp||[]).push([[24,17],{301:function(t,n,o){"use strict";o.r(n);var e={name:"Logo",props:{label:{type:String,default:""}}},l=o(51),component=Object(l.a)(e,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"flex items-center"},[n("img",{staticClass:"mr-2",attrs:{src:"/images/navbar/seakun_logo.png",width:"40",height:"40",alt:"logo seakun"}}),t._v(" "),n("span",{staticClass:"text-primary font-bold"},[t._v(t._s(t.label))])])}),[],!1,null,null,null);n.default=component.exports},351:function(t,n,o){var content=o(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(112).default)("5dd64847",content,!0,{sourceMap:!1})},421:function(t,n,o){"use strict";o(351)},422:function(t,n,o){var e=o(111)((function(i){return i[1]}));e.push([t.i,".bg-nav{background-color:#fff!important;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)!important}.bg-nav,.bg-none{transition:all 1s ease}.bg-none{background-color:transparent!important;box-shadow:none!important}@media (min-width:800px){.bg-nav{background-color:#fff!important;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)!important;padding-bottom:8px!important;padding-top:8px!important}.bg-nav,.bg-none{transition:all 1s ease}.bg-none{background-color:transparent!important;box-shadow:none!important;padding-bottom:0!important;padding-top:30px!important}}@media (max-width:800px){nav{text-transform:uppercase}}",""]),e.locals={},t.exports=e},507:function(t,n,o){"use strict";o.r(n);var e={data:function(){return{showSpark1:!1,showSpark2:!1,showSpark3:!1,open:!1,navbarLink:[{id:1,label:"Benefit",tag:"benefit-semabar"},{id:2,label:"Info Layanan",tag:"service-information"},{id:3,label:"Flow",tag:"flow-semabar"},{id:4,label:"Testimoni",tag:"testimony-semabar"},{id:5,label:"FAQ",tag:"qna-semabar"}]}},components:{Logo:o(301).default},mounted:function(){},methods:{scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"}),this.open=!1},scrollToSection:function(menu){this.scrollToElementWithOffset(menu.tag,100),this.open=!1},scrollToElementWithOffset:function(t,n){var o=document.getElementById(t).getBoundingClientRect().top+window.pageYOffset-n;window.scrollTo({top:o,behavior:"smooth"})}}},l=(o(421),o(51)),component=Object(l.a)(e,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"w-full fixed z-40 py-3 bg-white shadow",attrs:{id:"navbar"}},[t.open?n("div",{staticClass:"opacity-20 fixed inset-0 z-90 bg-black",on:{click:function(n){t.open=!1}}}):t._e(),t._v(" "),n("div",{staticClass:"static z-0 w-full text-gray-700"},[n("div",{staticClass:"container lg:flex lg:justify-between lg:items-center"},[n("NuxtLink",{attrs:{to:"/"}},[n("div",{on:{click:t.scrollToTop}},[n("img",{staticClass:"tn:h-[40px]",attrs:{src:"/images/navbar/brand_seakun.svg",alt:"brand seakun"}})])]),t._v(" "),n("div",{staticClass:"absolute tn:top-1 tn:right-1 tn:py-4 tn:px-4 md:px-4 lg:top-0 lg:right-0 lg:relative z-100 flex flex-col tn:w-3/5 md:w-1/2 lg:w-4/5 rounded-xl lg:p-0 lg:justify-end lg:flex-row lg:items-center",class:{shadow:t.open,"bg-white":t.open}},[n("div",{staticClass:"items-center"},[n("button",{staticClass:"lg:hidden rounded-lg focus:outline-none float-right",on:{click:function(n){t.open=!t.open}}},[n("svg",{staticClass:"w-6 h-6 primary",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[n("path",{directives:[{name:"show",rawName:"v-show",value:!t.open,expression:"!open"}],attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z","clip-rule":"evenodd"}}),t._v(" "),n("path",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),t._l(t.navbarLink,(function(o,e){return n("nav",{key:e,staticClass:"tn:flex-col tn:pr-4 md:pr-4 lg:pr-0 tn:mt-2 md:p-0 lg:mt-0 lg:flex lg:justify-end lg:flex-row",class:{flex:t.open,hidden:!t.open}},[n("NuxtLink",{attrs:{to:"/semabar#".concat(o.tag)}},[n("div",{staticClass:"cursor-pointer tn:text-right tn:my-3 lg:my-4 tn:text-sm md:text-[14px] font-semibold md:font-bold text-secondary rounded-lg md:py-0 md:mt-0 hover:opacity-50 focus:opacity-50 lg:ml-8 xl:ml-12 relative"},[n("p",[t._v("\n                "+t._s(o.label)+"\n              ")])])])],1)}))],2)],1)])])}),[],!1,null,null,null);n.default=component.exports}}]);