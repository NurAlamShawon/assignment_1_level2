type Value = number | string | boolean;
const formatValue = (value: Value): Value => {
  if (typeof value === "number") {
    return value * 10;
  }

  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "boolean") {
    return !value;
  }

  return value;
};



type Value2 = string | number[];
type Output = number;
const getLength = (value: Value2): Output => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
};



class Person{
    name:string;
    age:number;
constructor( name :string, age:number){
    this.name=name;
    this.age=age;
}
getDetails(){
    return (`'Name: ${this.name}, Age: ${this.age}'`)
}
}




type Value3 = {
  title: string;
  rating: number;
};

const filterByRating = (value: Value3[]): Value3[] => {
  let newArr: Value3[] = [];

  newArr = value.reduce((acc: Value3[], work: Value3) => {
    if (work.rating > 4) {
      acc.push(work);
    }

    return acc;
  }, []);

  return newArr;
};



type Value4 = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (value: Value4[]): Value4[] => {
  let newArr: Value4[] = [];

  newArr = value.reduce((acc: Value4[], work: Value4) => {
    if (work.isActive === true) {
      acc.push(work);
    }

    return acc;
  }, []);

  return newArr;
};





interface Book {
  publishedYear: number;
  title: string;
  author: string;
  isAvailable: boolean;
}

const printBookDetails = (value: Book): null => {
  const set = value.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${value.title}, Author:  ${value.author}, Published:  ${value.publishedYear}, Available:  ${set}`
  );

  return null;
};





type Num = number[];

const getUniqueValues = (num1: Num, num2: Num): Num => {
  const set = new Set([...num1, ...num2]);

  const arr: Num = Array.from(set);

  return arr;
};





type Value5 = {
  price: number;
  name: string;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (value: Value5[]): number => {
  const bill = value.reduce((acc: number, work: Value5) => {

    const base= work.price * work.quantity
    if ("discount" in work) {
      acc = acc + (base - ((work.discount/100)*base));
      return acc;
    } else {
      acc = acc + base;
      return acc;
    }
  }, 0);

  return bill;
};