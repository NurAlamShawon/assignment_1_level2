- What are some differences between interfaces and types in TypeScript? <br>
= Here in type we can only define types of anything like,<br>
type Num = number[]; <br>
const arr: Num = Array.from(set);<br>
<br>
here the the arr type is number array.<br>
<br>
In interface we can define types and also define the structure of anything like class.<br>
<br>
interface Book {<br>
  publishedYear: number;<br>
  title: string;<br>
  author: string;<br>
  isAvailable: boolean;<br>
}<br>
<br>
const obj : Book ={ <br>
  publishedYear: 2025,<br>
  title: "hello" ,<br>
  author: 52,<br>
  isAvailable: true<br>
  }<br>
<br>
here if any object type is this Book then the obj element types will be check and also the structure must follow with Book. If don't then it will given error that the structure is not same like Book.
<br>
<br>
- What is the use of the keyof keyword in TypeScript? Provide an example.<br>
= Here, keyof will give the keys of the type. like,<br>
type User={<br>
User:string;<br>
Admin:string;<br>
}<br>
if I user const user = keyof User; it will give me this user = User|Admin means the keys of the type of User with Union.<br>
<br>
<br>
- Explain the difference between any, unknown, and never types in TypeScript.<br>
= In "any" type the type can be anything and that is not define at first, after first value come then type implecitly assign. And it will change after add differnt type. Typscript won't check the type before using it.<br>
  In "unknown" type it is like any but we should check the type before using where the type is assign as unknown.<br>
  In "never" type it used in where nothing is return and it is sure that nothing will return in future. It used on some function return type that those function will never return anything.<br>
<br>




