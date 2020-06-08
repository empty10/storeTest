import Observer from "./observe";

function initState(vm) {
  //做不同的初始化工作
  let opts = vm.$options;

  if (opts.data) {
    initData(vm); //初始化数据
  }
  if (opts.computed) {
    initComputed(vm);
  }
  if (opts.watch) {
    initWatch(vm);
  }
}

function observe(data) {
  if (typeof data !== "object" || data === null) {
    return;
  }

  return new Observer(data);
}

function proxy(vm,source,key){ //代理数据 vm.msg=vm._data.msg
   Object.defineProperty(vm,key,{
     get(){
          return vm[source][key]
     },
     set(newValue){
          vm[source][key] = newValue;
     }
   })
}


function initData(vm) {
  let data = vm.$options.data;
  data = vm._data = typeof data === "function" ? data.call(vm) : data || {};

  for(let key in data){
    proxy(vm,'_data',key)  //将vm 上的取值 赋值操作代理给vm._data属性
  }
  observe(vm._data);
}

function initComputed(params) {}

function initWatch(params) {}

export { initState ,observe};