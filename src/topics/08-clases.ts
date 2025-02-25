

export class Person{
  // public name: string;
  // private address: string;

  // constructor(name: string, address: string){
  //   this.name = name;
  //   this.address= address;
  // }

  constructor(
    public name: string,
    private address: string = 'No Address'
  ){}

}


export class Hero extends Person {

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
  ){
    super(realName, 'New York');
  }
}



const ironman = new Hero('Ironman', 45, 'Tony');

console.log(ironman);