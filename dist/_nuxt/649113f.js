(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{368:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("12a190a6",content,!0,{sourceMap:!1})},369:function(t,e,n){var o=n(19)(!1);o.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),t.exports=o},370:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("2e2bc7da",content,!0,{sourceMap:!1})},371:function(t,e,n){var o=n(19)(!1);o.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=o},375:function(t,e,n){"use strict";n.r(e);var o=n(75),r=n.n(o),l={layout:"default",data:function(){return{newTodoTitle:"",isActive:!0,todos:[],createBoolean:!1,todoEditMessage:"",todoEditID:null}},components:{EditModal:n(156).default},mounted:function(){this.getAllTodo()},methods:{editTodo:function(t,e){this.todoEditMessage=t.title,this.todoEditID=t.id,this.$refs.dlg.open().then((function(t){console.log("Result:",t)}))},sortTodo:function(data){var t=data;return t.sort((function(a,b){return a.completed-b.completed})),t},getAllTodo:function(){var t=this;r.a.get("https://jsonplaceholder.typicode.com/todos/").then((function(e){t.todos=t.sortTodo(e.data)})).catch((function(t){console.log(t)}))},openCreateTodo:function(){if(1==this.createBoolean){var body={title:this.newTodoTitle,completed:!1,userId:1};r.a.post("https://jsonplaceholder.typicode.com/todos/",body,{headers:{"Content-type":"application/json; charset=UTF-8"}}).catch((function(t){console.log(t)})),this.newTodoTitle=""}this.createBoolean=!this.createBoolean},checkedTodo:function(t){var body={completed:!t.completed};r.a.patch("https://jsonplaceholder.typicode.com/todos/"+t.id,body,{headers:{"Content-type":"application/json; charset=UTF-8"}}).catch((function(t){console.log(t)}))},deleteTodo:function(t){r.a.delete("https://jsonplaceholder.typicode.com/todos/"+t.id,{},{headers:{"Content-type":"application/json; charset=UTF-8"}}).catch((function(t){console.log(t)}))}}},c=n(45),d=n(83),h=n.n(d),v=n(346),f=n(152),m=n(89),_=(n(8),n(7),n(10),n(14),n(9),n(15),n(2)),x=(n(13),n(62),n(368),n(370),n(216)),y=n(59),k=n(123),C=n(0),w=C.a.extend({name:"rippleable",directives:{ripple:k.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),T=n(1),V=C.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:T.h}}}),I=n(5);function j(t){t.preventDefault()}function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var E=Object(I.a)(y.a,w,V).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=y.a.options.methods.genLabel.call(this);return label?(label.data.on={click:j},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:j},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}).extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return S(S({},y.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(x.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",S(S({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),A=n(373),D=n(374),$=n(345),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("h1",[t._v("Simple CRUD app")]),t._v(" "),n("v-card",{staticStyle:{margin:"10px 0px"}},[n("v-card-title",{staticClass:"headline"},[t._v(" Create a todo ")]),t._v(" "),t.createBoolean?n("div",{staticStyle:{padding:"16px"}},[n("v-text-field",{attrs:{label:"Todo",placeholder:"Title"},model:{value:t.newTodoTitle,callback:function(e){t.newTodoTitle=e},expression:"newTodoTitle"}})],1):t._e(),t._v(" "),n("v-card-actions",{staticStyle:{padding:"8px 16px"}},[n("v-btn",{attrs:{color:"success",nuxt:"",to:"/"},on:{click:function(e){return t.openCreateTodo()}}},[t._v("\n          Create\n        ")])],1)],1),t._v(" "),t._l(t.todos,(function(e){return n("v-card",{key:e.id,staticStyle:{margin:"10px 0px"}},[n("v-card-title",{staticClass:"headline"},[n("v-checkbox",{on:{click:function(n){return t.checkedTodo(e)}},model:{value:e.completed,callback:function(n){t.$set(e,"completed",n)},expression:"t.completed"}}),t._v("\n        "+t._s(e.title)+"\n      ")],1),t._v(" "),n("v-card-actions",{staticStyle:{padding:"8px 16px"}},[n("v-btn",{attrs:{color:"primary",nuxt:"",to:"/"},on:{click:function(n){return t.editTodo(e)}}},[t._v(" Edit ")]),t._v(" "),n("v-btn",{attrs:{color:"error",nuxt:"",to:"/"},on:{click:function(n){return t.deleteTodo(e)}}},[t._v("\n          Delete\n        ")])],1)],1)}))],2),t._v(" "),n("EditModal",{ref:"dlg",attrs:{title:"Edit",todoTitle:t.todoEditMessage,todoID:t.todoEditID}})],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{EditModal:n(156).default}),h()(component,{VBtn:v.a,VCard:f.a,VCardActions:m.a,VCardTitle:m.b,VCheckbox:E,VCol:A.a,VRow:D.a,VTextField:$.a})}}]);