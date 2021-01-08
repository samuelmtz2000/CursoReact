import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css';


function BookList(){
  return (
    <section className="booklist">
      
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
}

const Book = () => {
  return (
    <article className="book"> 
      <Imagen/>
      <Titulo/>
      <Autor/>
    </article>
  );
}

const Titulo = () => <h1>Sherlock holmes</h1>;
const Imagen = () =>{
  return(<img src="https://m.media-amazon.com/images/I/91zzQmzB2-L._AC_UL320_.jpg" alt="img-slk"/>);
} 
const Autor = () => <h5 style={{color:'#617d98',fontSize:'0.75rem', marginTop:'.25rem'}}>Sir Arthur Conan Doyle</h5>;

ReactDom.render(<BookList/>,document.getElementById('root'));