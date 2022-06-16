// // создаем тип где указываем какие поля какие функции и какие элементы должны присутствовать у объектов и классов
// interface Rect {
//     // поле объекта только для чтения с модификатором readonly
//     readonly id: string
//     // необязательное поле потому что знак вопроса добавили
//     color?: string
//     size: {
//         width: number
//         height: number
//     }
// } // после создания Rect можем создавать различные объекты которые будут явл типом Rect
//
// const rect1:Rect = {
//     id: '1234',
//     size: {
//         width: 5,
//         height: 3
//     },
//     color: '#ccc'
// }
//
// const rect2:Rect = {
//     id: '1234',
//     size: {
//         width: 5,
//         height: 3
//     },
// }
//
// // если это объект или массив то можем изменять их внутреннее состояние но нельзя писать равно
// rect2.color = 'blue'
//
// // можно указать к какому типу будет относиться объект
// //const rect3 = {} as Rect // пустой объект строго приводим к типу Rect
// //const rect4 = <Rect>{}   // тоже самое но старый тип записи
//
// /////////// наследование интерфейсов ////////////
// interface RectWithArea extends Rect {
//     getArea: () => number
// }
//
// const rect5: RectWithArea = {
//     id: '123',
//     size: {
//         width: 30,
//         height: 30
//     },
//     getArea(): number {
//         return this.size.width * this.size.height
//     }
// }
//
// ///////////
// interface IClock {
//     time: Date
//     setTime(date: Date): void
// }
//
// class Clock implements IClock {
//     time: Date = new Date()
//
//     setTime(date: Date): void {
//         this.time = date
//     }
// }
// ////////// бывают ситуации когда необходимо создать интерфейс для объекта у которого будет большое количество динаминческих ключей
// ////
// interface Styles {
//     [key: string]:string // тип ключа string а как значение будет string
//     // [key: string]:string данная запись относится к конструкциям border marginTop borderRadius
//     // а string после квадратных скобок относится к значениям border marginTop borderRadius
// }
//
// const css: Styles = {
//     border: 'apx solid black',
//     marginTop: '2px',
//     borderRadius: '5px'
// }
//
// ////////// enum позволяет лучше структурировать код если есть некоторые однотипные элементы
// ////
// enum Membership {
//     // значения
//     Simple,
//     Standart,
//     Premium
// }
//
// const membership = Membership.Standart
// console.log(membership) // по умолчанию присваивает порядковый номер значения из enum Membership
//
// // однако есть возможность получить строковое значение любого элемента Enum
// // это называется ReverseEnum - например создать переменную и сказать что интересует Membership по ключу 2
// const membershipReverse = Membership[2]
// console.log(membershipReverse) // получим строчку Premium - не значение а именно строчку
//
// enum SocialMedia {
//     VK = 'VK',     // если явно указать значение тут то при выводе получим это значение
//     FB = 'FB',
//     IN ='IN'
// }
// const social = SocialMedia.IN
// console.log(social)
//
// //// функции
// function add(a: number, b:number): number {
//     return a + b
// }
//
// function toUpperCase(str: string): string {
//     return str.trim().toUpperCase()
// }
//
// // можем перегружать определенные параметры и перегружать функцию
// // если данная функция на вход ничего не будет получать то будет возвращать интерфейс MyPosition
// // теперь надо создать интерфейс MyPosition
// interface MyPosition {
//     x: number | undefined
//     y: number | undefined
// }
// interface MyPositionWidthDefault extends MyPosition {
//     default: string
// }
// function position(): MyPosition
// function position(a: number): MyPositionWidthDefault // перегрузка фии
// function position(a: number, b: number): MyPosition  // перегрузка фии
//
// // реализация
// // function position(a?: number, b?:number) {
// //
// // }
var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '12345',
    size: {
        width: 22,
        height: 3
    }
};
rect2.color = 'black';
var rect3 = {};
var rect5 = {
    id: '12345',
    size: {
        width: 22,
        height: 3
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
