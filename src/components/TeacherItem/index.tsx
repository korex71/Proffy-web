import React from 'react';
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatarfiles.alphacoders.com/873/thumb-87368.jpg" alt=""/>
      <div>
        <strong>Gabriel A.</strong>
        <span>Matemática</span>
      </div>
    </header>
    <p>
      Entusiasta do profundo conhecimento da matemática.
      <br/>
      Apaixonado por ensinar pessoas que cálculo faz parte da vida.
    </p>
    <footer>
      <p>Preço/hora 
        <strong>R$ 80,00</strong>
      </p>
      <button>
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
    );
}

export default TeacherItem;