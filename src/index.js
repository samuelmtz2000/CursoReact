import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css';

//setup vars
const Libros =[{
  img: "https://m.media-amazon.com/images/I/91zzQmzB2-L._AC_UL320_.jpg",
  title: 'Sherlock Holmes',
  author: 'Sir Arthur Conan Doyle'
},
 {
  img: "https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg",
  title: 'Atomic Habits',
  author: 'James Clear'
}];
//En react puedes renderizar arrays de strings solamente, con objetos te va a arrojar un error
//Ejemplo aqui renderiza la lista de nombres que mapeamos para que sean objetos (nombresH1) <h1>

const nombres = [ 'juan','jose','jesus'];
const nombresH1 = nombres.map((nombre)=> {
return <h1>  {nombre}  </h1>;
});

console.log(nombresH1);
function BookList(){

  return  (
    <section className="booklist">
      {/* Se muestra simplemente agregando el array de objetos (h1) como return */}
      {nombresH1}
    </section>
  )
}
//La variable childres se pasa como un objeto de prop por eso la decotrur como las otras propiedades
const Book = ({img, title, author}) => {
  //const {img, title, author} = props;
  return (
    <article className="book"> 
      <img src={img} alt="img-slk"/>
      <h1>{title}</h1>
      <h5 className="author">{author.toUpperCase()}</h5>
      
    </article>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));    