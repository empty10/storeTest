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

function initData(vm) {
  let data = vm.$options.data;
  data = vm._data = typeof data === "function" ? data.call(vm) : data || {};

  observe(vm._data);
}

function initComputed(params) {}

function initWatch(params) {}

export { initState ,observe};
