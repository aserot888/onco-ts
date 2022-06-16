class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}


// class Car {
//     readonly model: string
//     readonly numberofWheels: number = 4
//
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }
// аналогично выше записанному классу
class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

// ===== Модификаторы
class Animal {
    protected voice: string= ''
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void{
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')
// cat.voice
console.log(cat.color)

//==== абстрактные классы нужны чтобы от них наследоваться
abstract class Component {
    abstract render(): void
    abstract info(): void
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }

    info(): string {
        return "This is info";
    }
}