import React from 'react'

class test {
    protected _fullName: string;
    private passcode: string;
    constructor(passcode: string) {
        this.passcode = passcode;
    }
    get fullName() {
        return this._fullName
    }

    set fullName(newName: string) {
        if (this.passcode === 'test') {
            this._fullName = newName
        } else {
            console.error('passcode error!')
        }
    }
}

class test2 extends test {
    constructor(num: string) {
        super(num);
        this._fullName = '111'
        console.log(this._fullName)
    }
}

class test_static {
    static origin = { x: 1, y: 2 }
    test(point: { x: number, y: number }) {
        return (point.x + test_static.origin.x) / (point.y + test_static.origin.y)
    }
}

// let Test = new test('test1');
// let Test2 = new test2('test');
// Test.fullName = '123'
// console.log(Test.fullName)
let test3 = new test_static()
console.log(test3.test({ x: 1, y: 3 }))

export default class extends React.Component {
    componentDidMount() {
        const handler: ProxyHandler<any> = {
            construct(t, args) {
                var a = Object.create([]);
                return a
            },

            get(target, name) {
                console.log(48, target, name)
                console.log(this)
                return target[name]
            },

            set(target, name, val) {
                target[name] = val;
                return true
            }
        }

        var o = Object.create(null)

        let p = new Proxy(function () { }, handler)
        new p(1)
        console.log(p)
    }
    render() {
        return <div> 首页 </div>
    }
}