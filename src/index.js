import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css';

//setup vars
const Libro1 ={
  img: "https://m.media-amazon.com/images/I/91zzQmzB2-L._AC_UL320_.jpg",
  title: 'Sherlock Holmes',
  author: 'Sir Arthur Conan Doyle'
}
const Libro2 ={
  img: "https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg",
  title: 'Atomic Habits',
  author: 'James Clear'
}

function BookList(){

  return  (
    <section className="booklist">
      <Book img={Libro1.img} title={Libro1.title} author={Libro1.author}>
        {/* Children props se agregan dentro del contenedor */}
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, consequatur quasi laboriosam dolorem sequi tempora enim explicabo repellendus. Voluptatum, sequi.</p>
      </Book>
      <Book img={Libro2.img} title={Libro2.title} author={Libro2.author}/>

    </section>
  );
}
//La variable childres se pasa como un objeto de prop por eso la decotrur como las otras propiedades
const Book = ({img, title, author, children}) => {
  //const {img, title, author} = props;
  return (
    <article className="book"> 
      <img src={img}alt="img-slk"/>
      <h1>{title}</h1>
      <h5 className="author">{author.toUpperCase()}</h5>
      {children}
    </article>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));    