(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{467:function(t,e,r){var content=r(556);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(112).default)("3bb47ec0",content,!0,{sourceMap:!1})},554:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yMy40MTQgMjEuNDE0IDYuNTg2LTYuNTg2djI5LjE3MmMwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi0yOS4xNzJsNi41ODYgNi41ODZjLjM5LjM5MS45MDIuNTg2IDEuNDE0LjU4NnMxLjAyNC0uMTk1IDEuNDE0LS41ODZjLjc4MS0uNzgxLjc4MS0yLjA0NyAwLTIuODI4bC0xMC0xMGMtLjc4LS43ODEtMi4wNDgtLjc4MS0yLjgyOCAwbC0xMCAxMGMtLjc4MS43ODEtLjc4MSAyLjA0NyAwIDIuODI4Ljc4Ljc4MSAyLjA0OC43ODEgMi44MjggMHoiLz48cGF0aCBkPSJtNTAgNDBjLTEuMTA0IDAtMiAuODk2LTIgMnY4YzAgMS4xMDMtLjg5NyAyLTIgMmgtMjhjLTEuMTAzIDAtMi0uODk3LTItMnYtOGMwLTEuMTA0LS44OTYtMi0yLTJzLTIgLjg5Ni0yIDJ2OGMwIDMuMzA5IDIuNjkxIDYgNiA2aDI4YzMuMzA5IDAgNi0yLjY5MSA2LTZ2LThjMC0xLjEwNC0uODk2LTItMi0yeiIvPjwvc3ZnPg=="},555:function(t,e,r){"use strict";r(467)},556:function(t,e,r){var n=r(111)((function(i){return i[1]}));n.push([t.i,".form-content.svg{height:auto;width:16px;fill:#a0a3bd}.icon-left{position:absolute;right:.75rem;top:1.25rem}.label-upload{border:1px dashed #a0a3bd;border-radius:.3rem;cursor:pointer;font-family:sans-serif;margin-top:1rem}.label-upload,svg{display:inline-block}svg{fill:#a0a3bd;height:auto;margin-right:12px;width:18px}",""]),n.locals={},t.exports=n},581:function(t,e,r){"use strict";r.r(e);r(41),r(204);var n=r(554),o={name:"Input",components:{UploadIcon:r.n(n).a},props:{value:{type:String|Number},label:{type:String,default:""},name:{type:String,default:""},error:{type:Object,default:function(){return{isError:!1,message:""}}},placeholder:{type:String,default:""},type:{type:String,default:"text"}},methods:{getImage:function(t){var e=t.target.files;this.$emit("get-image",e[0])}},model:{prop:"value",event:"update"}},l=(r(555),r(51)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-4"},[e("div",[e("p",[t._v(t._s(t.label))])]),t._v(" "),e("input",{class:{"border border-red-500":t.error.isError},attrs:{type:"file",id:t.name,accept:"image/png, image/jpg, image/jpeg,.pdf",hidden:""},on:{change:t.getImage}}),t._v(" "),e("label",{staticClass:"label-upload w-full py-3 px-4 text-center text-gray-500",attrs:{for:t.name}},[e("span",[e("UploadIcon")],1),t._v(" Bukti Pembayaran\n  ")]),t._v(" "),t.error.isError?e("p",{staticClass:"text-red-500 text-xs italic"},[t._v("\n    "+t._s(t.error.message)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);