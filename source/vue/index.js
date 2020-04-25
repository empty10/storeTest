import {initState} from './observe/index'

function Vue(options) {

    this._init(options)
}


Vue.prototype._init=function (options) {
    //vue 初始化，this.$options 表示的是vue中参数
    let vm = this;
    vm.$options = options;

    //mvvm 原理，需要重新初始化
     initState(vm)
}


export default Vue;