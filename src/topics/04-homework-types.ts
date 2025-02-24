interface Address {
  street: string;
  country: string;
  city: string;
}

interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: ()=>{}
}

const superHeroe: SuperHero={
  name: 'Spiderman',
  age: 30,
  address:{
    street: 'Main St',
    country: 'USA',
    city: 'NY'
  },
  showAddress(){
    return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
  }
}

const address = superHeroe.showAddress();
console.log(address);

export {};