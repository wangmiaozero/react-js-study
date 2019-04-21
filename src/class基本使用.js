console.log(`
1.创建一个空对象
2.让this 指向刚刚创建好的空对象
3.执行构造函数内的代码 (为相关的属性和方法赋值)
4.返回创建好的对象`)
// 1.创建一个空对象
// 2.让this 指向刚刚创建好的空对象
// 3.执行构造函数内的代码 (为相关的属性和方法赋值)
// 4.返回创建好的对象
// new 一个对象的过程 就是实例 
function Person(name,age){
    this.name = name
    this.age = age
}
// info 属性，直接挂载给了构造函数，所以它是静态属性
Person.info = 'aaaa'
//实例方法
Person.prototype.say = function(){
    console.log("这是Person的实例方法");
    
}
Person.show = function(){
    console.log("这是Person的静态show方法");
    
}
const p1 = new Person("许三多",18)
console.log(p1)//实例属性
console.log(Person.info);//静态属性
//通过 new 出来的实例,访问到的属性,叫做[实例属性]
//通过构造函数,直接访问到的属性,叫做[静态属性]
console.log(p1.name);
p1.say();//实例方法
Person.show();//静态方法

console.log('=================class===================');
// 
// 实例成员:使用实例对象(实例)来调用的属性和方法(只能使用new创建出来的对象)
// 静态成员:只能使用构造函数名进行 调用和 创建的 属性或者方法
// class ----------------------------------------------------
//创建一个动物类
// 注意1：在 class 的 { } 区间内，只能写 构造器、静态方法和静态属性、实例方法
// 注意2：class 关键字内部，还是用 原来的配方实现的；所以说，我们把 class 关键字，称作 语法糖；
class Animal {
    //这是勒种的构造器
    //每个类中都有一个构造器如果程序员没有手动指定构造器,那么,可以认为类内部有一个隐形的构造器
    //类似如: constructor(){}
     // 构造器的作用，就是，每当 new 这个类的时候，必然会优先执行 构造器中的代码
    constructor(name,age){
        //实例属性
        this.name = name
        this.age = age 
    }
    // 在 class 内部，通过 static 修饰的属性，就是静态属性
    static info = "eeeee"
    static show(){
        console.log("这是动物的静态方法"); 
    }
    wow(){
        console.log("动物的实例方法");
    }
}
const a1 = new Animal("黄",3)
console.log(a1);
console.log(a1.name);//实例属性
a1.wow();//实例方法
console.log('====================================');
console.log(Animal.info);//info 是Animal静态属性
Animal.show();
console.log('====================================');

