import {observe} from '../observe/index'
export function initState(vm) {
    const opts = vm.$options
    if (opts.props) {
        initProps(vm)
    }
    if (opts.methods) {
        initMethods(vm)
    }
    if (opts.data) {
        initData(vm)
    }
    if (opts.computed) {
        initComputed(vm)
    }
    if (opts.watch) {
        initWatch(vm)
    }
}

function initProps() {
    console.log('初始化props')
}

function initMethods() {
    console.log('初始化方法')
}

function initData(vm) {
    let data = vm.$options.data
    data = vm._data = typeof data === 'function' ? data.call(vm) : data
    observe(data)//响应式
}

function initComputed() {
    console.log('初始化计算属性')
}

function initWatch() {
    console.log('初始化watch')
}
