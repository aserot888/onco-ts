// гуарды вспомогательные конструкции помогающие работать с типами
// например в зависимости от типа переменной надо
// сделать новый функционал
function strip(x: string | number) {
    if(typeof x === 'number') {
        return x.toFixed(2)
    }
    // если надо вернуть строку то юзаем trim
    return x.trim()
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

//====== еще один подобный пример
type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    // ...
}

setAlertType('success')
setAlertType('warning')

// setAlertType('default')