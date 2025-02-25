

export class Person{
  public name: string;
  private address: string;

  constructor(){
    this.name = 'Jose';
    this.address='New York'
  }
}

const ironman = new Person();

console.log(ironman.address);