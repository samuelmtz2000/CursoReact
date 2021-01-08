import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css';

//setup vars
const Libro ={
  img: "https://m.media-amazon.com/images/I/91zzQmzB2-L._AC_UL320_.jpg",
  title: 'Sherlock Holmes',
  author: 'Sir Arthur Conan Doyle'
}

function BookList(){

  return  (
    <section className="booklist">
      <Book img={Libro.img} title={Libro.title} author={Libro.author}/>
    </section>
  );
}
//Decontruring 2 opciones, dentro de las propiedades o como una variable
const Book = ({img, title, author}) => {
  //const {img, title, author} = props;
  return (
    <article className="book"> 
      <img src={img}alt="img-slk"/>
      <h1>{title}</h1>
      <h5 className="author">{author.toUpperCase()}</h5>
    </article>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));    