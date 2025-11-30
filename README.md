- What are some differences between interfaces and types in TypeScript? <br>
= Here in type we can only define types of anything like,
type Num = number[]; 
const arr: Num = Array.from(set);

here the the arr type is number array.

In interface we can define types and also define the structure of anything like class.

interface Book {
  publishedYear: number;
  title: string;
  author: string;
  isAvailable: boolean;
}

const obj : Book ={ 
  publishedYear: 2025,
  title: "hello" ,
  author: 52,
  isAvailable: true
  }

here if any object type is this Book then the obj element types will be check and also the structure must follow with Book. If don't then it will given error that the structure is not same like Book.


- What is the use of the keyof keyword in TypeScript? Provide an example.
= Here, keyof will give the keys of the type. like,
type User={
User:string;
Admin:string;
}
if I user const user = keyof User; it will give me this user = User|Admin means the keys of the type of User with Union.


- Explain the difference between any, unknown, and never types in TypeScript.
= In "any" type the type can be anything and that is not define at first, after first value come then type implecitly assign. And it will change after add differnt type. Typscript won't check the type before using it.
  In "unknown" type it is like any but we should check the type before using where the type is assign as unknown.
  In "never" type it used in where nothing is return and it is sure that nothing will return in future. It used on some function return type that those function will never return anything.

- What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
= 



