import Vue from 'vue'; //会默认查找source下的index 文件

let vm = new Vue({
    el:'#app',
    data(){
        return {
            msg:'hello',
            school:{name:'zf',age:10},
            arr:[1,2,3]
        }
    },
    computed:{

    },
    watch:{

    }
})

console.log(vm.msg=100)