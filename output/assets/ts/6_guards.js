// гуарды вспомогательные конструкции помогающие работать с типами
// например в зависимости от типа переменной надо
// сделать новый функционал
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    // если надо вернуть строку то юзаем trim
    return x.trim();
}
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = 'response header';
        this.result = 'response result';
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'error header';
        this.message = 'error message';
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}
function setAlertType(type) {
    // ...
}
setAlertType('success');
setAlertType('warning');
// setAlertType('default')
