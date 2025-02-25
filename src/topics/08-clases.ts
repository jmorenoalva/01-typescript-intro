

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

const ironman = new Person('Tony', 'New York');

console.log(ironman);