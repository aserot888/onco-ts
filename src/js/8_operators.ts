// вспомогательные операторы из ts помогающие
// взаимодействовать с типами
interface Person {
    name: string
    age: number
}

// создаем отдельный тип состоящий из ключей
// созданного нами интерфейса
type PersonKeys = keyof Person // 'name'|'age'

let key: PersonKeys = 'name'
key = 'age'

// воспользоваться данным типом и при этом создать
// новый тип но не включающий в себя некоторые поля
// например _id и createdAt
// можно это сделать 2 способами
type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}
// 1 способ применение спец ключевого слово Exclude
// в <> пишем что надо сделать
// в первую очередь пробегаемся с помощью оператора
// keyof по типу User и через запятую объясняем ему
// что нужно исключить например нужно исключить
// поле _id и поле createdAt
// <keyof User, '_id' | 'createdAt'>
// и теперь в данном типе присутствуют только поля name и email
type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'

// 2 способ
// в < > указываем какие поля необходимо забрать
// type UserKeysNoMeta = Pick<User, 'name' | 'email'>
let u1: UserKeysNoMeta = 'name'

// взято с канала ВладиленМинин
// https://www.youtube.com/watch?v=nyIpDs2DJ_c&t=63s







