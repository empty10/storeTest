

function initState(vm) {
    console.log('+++',vm)
    //做不同的初始化工作
    let opts = vm.$options;

    if(opts.date){
        initData();
    }
    if(opts.computed){
        initComputed();
    }
    if(opts.watch){
        initWatch();
    }
}

function initData(params) {
    
}

function initComputed(params) {
    
}

function initWatch(params) {
    
}


export  {initState}