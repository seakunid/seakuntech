(window.webpackJsonp=window.webpackJsonp||[]).push([[22,17],{301:function(t,e,r){"use strict";r.r(e);var n={name:"Logo",props:{label:{type:String,default:""}}},o=r(51),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center"},[e("img",{staticClass:"mr-2",attrs:{src:"/images/navbar/seakun_logo.png",width:"40",height:"40",alt:"logo seakun"}}),t._v(" "),e("span",{staticClass:"text-primary font-bold"},[t._v(t._s(t.label))])])}),[],!1,null,null,null);e.default=component.exports},515:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{isOpen:!1,isLoggedin:!0}},components:{Logo:r(301).default},computed:{},mounted:function(){if(this.$cookies.get("username")){if(!this.avatar){var t=this.$cookies.get("avatar"),e=t||"default";this.setUserAvatar(e)}this.isLoggedin=!0}else this.isLoggedin=!1},methods:{}},o=r(51),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full h-max md:!h-auto fixed z-50 bg-white shadow-md md:shadow-none"},[e("div",{staticClass:"md:container bg-white block md:flex md:justify-between md:items-center py-3 border-b md:border-none"},[e("div",{staticClass:"flex justify-between items-center px-[20px] md:px-0 md:container"},[e("NuxtLink",{attrs:{to:"/"}},[e("img",{staticClass:"h-[40px]",attrs:{src:"/images/navbar/brand_seakun.svg",alt:"brand seakun"}})]),t._v(" "),e("div",{staticClass:"md:hidden",attrs:{role:"button"},on:{click:function(e){t.isOpen=!t.isOpen,t.$emit("toggleMenu",t.isOpen)}}},[t.isOpen?e("img",{staticClass:"w-[24px]",attrs:{src:"/images/icons/atoms/close-menu.svg",alt:"tutup menu"}}):e("img",{staticClass:"w-[22px]",attrs:{src:"/images/icons/atoms/hamburger.svg",alt:"menu"}})])],1),t._v(" "),e("div",[t.isLoggedin?e("NuxtLink",{attrs:{to:"/"}},[e("img",{staticClass:"rounded-full w-[42px] h-[42px] hidden md:block border border-[#D8EDEE]",attrs:{src:"/images/profile-page/avatar/".concat(t.avatar,".svg"),alt:"profile"}})]):e("div",{staticClass:"hidden md:flex items-center gap-[16px]"},[e("NuxtLink",{staticClass:"w-full md:w-[120px] h-[36px] md:h-[46px] font-bold flex justify-center items-center border border-primary bg-white text-primary rounded-[4px] md:rounded-[8px]",attrs:{to:"/login"}},[e("p",[t._v("Masuk")])]),t._v(" "),e("NuxtLink",{staticClass:"w-full md:w-[120px] h-[36px] md:h-[46px] font-bold flex justify-center items-center border border-primary bg-primary text-white rounded-[4px] md:rounded-[8px]",attrs:{to:"/register"}},[e("p",[t._v("Daftar")])])],1)],1)]),t._v(" "),e("div",{staticClass:"md:hidden overflow-hidden transition-all ease-in-out duration-300 shadow-md",class:"".concat(t.isOpen?"h-auto opacity-100 mt-0":"max-h-0 opacity-0 -mt-20")},[t.isLoggedin?e("div",{staticClass:"py-3 border-b"},[e("NuxtLink",{attrs:{to:"/"}},[e("div",{staticClass:"mx-auto w-[321px] md:w-full flex items-center gap-3"},[e("img",{staticClass:"rounded-full w-[42px] h-[42px] border border-[#D8EDEE]",attrs:{src:"/images/profile-page/avatar/".concat(t.avatar,".svg"),alt:"profile"}}),t._v(" "),e("p",[t._v("Profil")])])])],1):e("div",{staticClass:"grid grid-cols-2 items-center gap-3 mt-5 mx-auto w-[321px]"},[e("NuxtLink",{staticClass:"w-full h-[36px] font-bold flex justify-center items-center border border-primary bg-white text-primary rounded-[4px]",attrs:{to:"/login"}},[e("p",[t._v("Masuk")])]),t._v(" "),e("NuxtLink",{staticClass:"w-full h-[36px] font-bold flex justify-center items-center border border-primary bg-primary text-white rounded-[4px]",attrs:{to:"/register"}},[e("p",[t._v("Daftar")])])],1),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[e("div",{staticClass:"my-4 flex items-center gap-1 mx-auto w-[321px] md:w-full"},[e("img",{attrs:{src:"/images/icons/atoms/home.svg",alt:"kembali"}}),t._v(" "),e("p",[t._v("Kembali ke Beranda")])])])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);