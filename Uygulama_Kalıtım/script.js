//person constructorı
function Person(name)
{
    this.name=name;
}

//Person içerisine tanımlanan Introduce methodu
Person.prototype.Introduce=function ()
{
    console.log("hello my name is " + this.name);
} 


//Teacher Constructor

function Teacher(name,branch)
{
    Person.call(this,name);
    this.branch=branch;
}

Teacher.prototype=Object.create(Person.prototype); //Person cons. ait Introduce prototype'ı teacher a tanımladık.
Teacher.prototype.constructor=Teacher;

//Teacher cons. ait teach methodu tanımlanıyor.
Teacher.prototype.Teach= function() 
{
    console.log("I teach "+ this.branch);

}

//Student Constructor

function Student(name,number )
{
 Person.call(this,name);
 this.number=number;
}

Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;

Student.prototype.Study= function () {
    console.log("My student number "+ this.number +" I ve already studied hard.");
}


//headMaster Constructor

function HeadMaster(name,branch) 
{
    Teacher.call(this,name,branch);

}

HeadMaster.prototype=Object.create(Teacher.prototype);
HeadMaster.prototype.constructor=HeadMaster;

HeadMaster.prototype.shareTask=function () 
{
    console.log("I ve already shared all the work");

}

let p1= new Person("Emel");
p1.Introduce();

let t1=new Teacher("Sümeyye", "Math");
t1.Introduce();
t1.Teach();


let s1=new Student("Ali",123);
s1.Introduce();
s1.Study();

let h1=new HeadMaster("İbrahim", "English");
h1.Introduce(); //person dan geliyor.
h1.Teach(); // teach den geliyor
h1.shareTask();// Headmaster a özel