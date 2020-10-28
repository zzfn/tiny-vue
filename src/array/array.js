let oldArrayMethods = Array.prototype
export let arrayMethods = Object.create(oldArrayMethods)
const methods = [
    'push',
    'shift',
    'unshift',
    'pop',
    'sort',
    'splice',
    'reverse',
]

methods.forEach(method => {
    arrayMethods[method] = function (...args) {
        console.log(method, args)
        let inserted;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
            default:
                break
        }
        return oldArrayMethods[method].apply(this, args)
    }
})
