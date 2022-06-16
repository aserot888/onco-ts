const str: string = 'Hello!'

console.log(str)

function sayMtName(name: string): void {
    console.log(name)
}

sayMtName('hi')

function throwError(message: string): never {
    throw new Error(message)
}

// бесконечная фия - ставим тип never
// function infinite():never {
//     while (true) {
//
//     }
// }

// Type - позволяет создавать свои собственные типы
// например можем использовать примитивные типы и создавать для них элиасы
type Login = string
const login: Login = 'admin'
// const login2: Login = 2 // так нельзя так как login по типу данных явл строкой
// удобно для разраотки тк именнованные типы больше понимания дают того что происходит

// потенциально различные типы данных для одной и той же переменной
type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true - неправильно

// type SomeType = string | null | undefined










