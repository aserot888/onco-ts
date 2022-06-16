function add(a: number, b: number):number {
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionWidthDefault extends MyPosition {
    default: string
}
// overload function
function position(): MyPosition
function position(a: number): MyPositionWidthDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }

    if (a && !b) {
        // undefined не тип а переменная тк мы находимся внутри объекта
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}

console.log('Empty: ', position())
console.log('One param: ', position(23))
console.log('Two params: ', position(36,53))
