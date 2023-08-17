//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import style from './Card.module.css'

function Card({ input1, input2, input3 }) {
  return (
    <div className={style.card}>
      <p className={style.message}>Nos complace informar que {input1} {input2} sabe que {input3} es el mejor jugador del mundo </p>
      <img src="https://fotos.perfil.com/2023/01/18/trim/720/410/messi-1493877.jpg" alt="" className={style.messi}/>
    </div>
  );
}

export default Card;
