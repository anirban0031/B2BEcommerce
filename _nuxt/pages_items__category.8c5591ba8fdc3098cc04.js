webpackJsonp([3],{"9FZl":function(t,e,a){"use strict";var s=a("Xxa5"),r=a.n(s),i=a("exGp"),n=a.n(i),c=a("mtWM"),u=a.n(c),l=a("o0MI");e.a={components:{Query:l.a},validate:function(t){t.params;return!0},asyncData:function(){var t=n()(r.a.mark(function t(e){var a,s,i,n,c=e.params,l=e.error;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=12,s=(c.pageNo-1)*a,t.next=5,u.a.get("http://18.219.18.84:5000/api/cat_items/1/"+c.category+"?offset="+s+"&limit="+a);case 5:return i=t.sent,n=i.data,t.abrupt("return",{items:n,current_page:parseInt(c.pageNo),category:c.category});case 10:t.prev=10,t.t0=t.catch(0),l({message:"User not found",statusCode:404});case 13:case"end":return t.stop()}},t,this,[[0,10]])}));return function(e){return t.apply(this,arguments)}}()}},CFG0:function(t,e,a){"use strict";var s=a("D4B0");e.a={props:{items:{type:Object,required:!0},current_page:{type:Number,required:!0},category:{type:String,required:!0}},components:{PaginationList:s.a},data:function(){return{search_input:this.$route.params.category}}}},D4B0:function(t,e,a){"use strict";var s=a("NBQM"),r=a("YUm4"),i=a("VU/8")(s.a,r.a,!1,null,null,null);i.options.__file="components\\PaginationList.vue",e.a=i.exports},NBQM:function(t,e,a){"use strict";e.a={props:{query:{type:String,required:!0},current_page:{type:Number,required:!0},total_rec_count:{type:Number,required:!0}},data:function(){return{prevpage:null,nextpage:null,currentPage:null,pageNumbers:[],pageNumberCount:0,totalPageCount:0}},mounted:function(){this.setPageNumbers()},methods:{firstPage:function(){this.$router.push("/search/1/"+this.query)},prevPage:function(){this.$router.push("/search/"+(this.currentPage-1)+"/"+this.query)},nextPage:function(){this.$router.push("/search/"+(this.currentPage+1)+"/"+this.query)},lastPage:function(){this.$router.push("/search/"+this.totalPageCount+"/"+this.query)},setPages:function(t,e){this.prevpage=t>1?t-1:null,this.nextpage=e?t<e?parseInt(t)+1:null:this.current_page?parseInt(this.current_page)+1:2;for(var a=0;a<7;a++){var s=parseInt(t)-4+a;s>0&&s<=e?(this.pageNumbers.push(s),this.pageNumberCount++):this.pageNumbers.push(null)}console.log(this.pageNumbers)},setPageNumbers:function(){console.log(this.current_page),console.log(this.total_rec_count);var t=parseInt(this.total_rec_count/12)+1;this.pageNumberCount=t,this.totalPageCount=t,console.log("Total Page: "+t);var e=this.current_page?this.current_page:1;this.currentPage=e,this.setPages(e,t)}}}},Pdr9:function(t,e,a){"use strict";var s=function(){var t=this.$createElement;return(this._self._c||t)("Query",{attrs:{items:this.items,current_page:this.current_page,category:this.category}})};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},YUm4:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page-pagination"},[a("nav",{attrs:{id:"search-result-nav","aria-label":"Pagination"}},[a("ul",{staticClass:"pagination",staticStyle:{margin:"0"}},[a("li",{staticClass:"page-item",class:null===t.prevpage?"disabled":""},[a("a",{staticClass:"page-link",attrs:{href:"javascript:;",tabindex:"-1"},on:{click:function(e){t.firstPage()}}},[t._v("«")])]),a("li",{staticClass:"page-item",class:null===t.prevpage?"disabled":""},[a("a",{staticClass:"page-link",attrs:{href:"javascript:;",tabindex:"-1"},on:{click:function(e){t.prevPage()}}},[t._v("<")])]),t._l(this.pageNumbers,function(e){return null!=e?a("li",{key:e,staticClass:"page-item",class:e===t.currentPage?"active":""},[e==t.currentPage?a("a",{staticClass:"page-link",attrs:{href:"javascript:;",tabindex:"-1"}},[t._v(t._s(e))]):t._e(),e!=t.currentPage?a("nuxt-link",{staticClass:"page-link",attrs:{to:{path:"/search/"+e+"/"+t.query}}},[t._v(t._s(e))]):t._e()],1):t._e()}),a("li",{staticClass:"page-item ",class:null===t.nextpage?"disabled":""},[a("a",{staticClass:"page-link",attrs:{href:"javascript:;",tabindex:"-1"},on:{click:function(e){t.nextPage()}}},[t._v(">")])]),a("li",{staticClass:"page-item ",class:null===t.nextpage?"disabled":""},[a("a",{staticClass:"page-link",attrs:{href:"javascript:;",tabindex:"-1"},on:{click:function(e){t.lastPage()}}},[t._v("»")])])],2)])])])};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},gqxD:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("9FZl"),r=a("Pdr9"),i=a("VU/8")(s.a,r.a,!1,null,null,null);i.options.__file="pages\\items\\_category.vue",e.default=i.exports},o0MI:function(t,e,a){"use strict";var s=a("CFG0"),r=a("pNTp"),i=a("VU/8")(s.a,r.a,!1,null,null,null);i.options.__file="components\\Query.vue",e.a=i.exports},pNTp:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.items.result,function(e){return a("div",{key:e.id,staticClass:"col-sm-3"},[a("div",{staticClass:"product-image-wrapper"},[a("div",{staticClass:"single-products"},[a("div",{staticClass:"productinfo text-center"},[a("nuxt-link",{attrs:{to:{path:"/item/"+e.slug}}},[a("img",{attrs:{src:"http://18.219.18.84/api/item_image_thumb/"+e.item_image,alt:""+e.title}}),a("h2",[t._v("$"+t._s(e.start_price))]),a("p",[t._v("Lot Size: "+t._s(e.lot_size))]),a("p",[t._v(t._s(e.title))])]),t._m(0,!0)],1)])])])})),a("div",{staticClass:"row"},[a("PaginationList",{attrs:{query:t.category,total_rec_count:t.items.total,current_page:t.current_page}})],1)])};s._withStripped=!0;var r={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-default add-to-cart",attrs:{href:"javascript:;",onclick:"`add_to_cart('${ item.id }','${ item.title }',${ item.start_price }, '{ item.item_image }')`"}},[e("i",{staticClass:"fa fa-shopping-cart"}),this._v("Add to cart")])}]};e.a=r}});