import {initState} from "./init/initState";

export function init(Vue) {
    Vue.prototype._init = function (options) {
        const vm=this
        vm.$options=options
        initState(vm)
        if(vm.$options.el){
            vm.$mount(vm.$options.el)
        }
    }
    Vue.prototype.$mount=function (el) {
        const vm =this
        el=document.querySelector(el)
        console.log(el)
    }
}
