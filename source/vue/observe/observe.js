import { observe } from "./index";

function defineReactive(data, key, value) {
  //定义响应式 数据变化
  observe(value);
  Object.defineProperty(data, key, {
    get() {
      console.log('获取值',value)
      return value;
    },
    set(newValue) {
      console.log('设置',newValue)
      if (value === newValue) return;
      value = newValue;
    },
  });
}

class Observer {
  constructor(data) {
    this.walk(data);
  }

  walk(data) {
    let keys = Object.keys(data);
    keys.forEach((key) => {
      defineReactive(data, key, data[key]);
    });
  }
}

export default Observer;
