import {isObject} from "../util/index";
import {arrayMethods} from "../array/array";

//数据拦截
export function observe(data) {
    // 不是对象不劫持
    if(!isObject(data)){
        return
    }
    // 返回劫持过的数据
    return new Observer(data);
}
class Observer {
    constructor(value) {
        if(Array.isArray(value)){
            this.observerArray(value)
        }else {
            // 对象劫持
            this.walk(value)
        }
    }
    observerArray(value){
        value.forEach(val=>{
            observe(val)
        })
    }
    walk(data){
        let keys=Object.keys(data)
        //针对对象每一个key去劫持
        keys.forEach(key=>{
            defineReactive(data,key,data[key])
        })
    }
}
//劫持核心方法
function defineReactive(data,key,value) {
    // 如果value也是对象继续递归劫持
    observe(value)
    Object.defineProperty(data,key,{
        get(){
            return value
        },
        set(newValue){
            if(newValue!==value){
                // 如果新值是对象
                observe(newValue)
                value=newValue
            }
        }
    })
}
