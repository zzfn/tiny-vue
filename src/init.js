import {initState} from "./init/initState";

export function init(Vue) {
    Vue.prototype._init = function (options) {
        const vm=this
        vm.$options=options
        initState(vm)
        console.log(options)
    }
}
