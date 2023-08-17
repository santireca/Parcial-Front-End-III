import React, { useState } from 'react';
import Card from './Card';
import style from './Form.module.css'

function Form() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [showCard, setShowCard] = useState(false);
    const [error, setError] = useState('');

    const handleInput1Change = (event) => {
        setInput1(event.target.value);
    };

    const handleInput2Change = (event) => {
        setInput2(event.target.value);
    };

    const handleInput3Change = (event) => {
        setInput3(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (input2.length === 0 || input1.length === 0) {
            setError('Los campos no pueden estar vacíos')
        } else if (input1.trim().length < 3 || input1.trim() !== input1) {
            setError('El primer campo debe contener al menos 3 caracteres');
        } else if (input2.length < 6) {
            setError('El segundo campo debe contener al menos 6 caracteres');
        } else if (input3.toLowerCase() !== "messi") {
            setError('El mejor jugador del mundo es Messi 🐐')
        } else {
            setError('');
            setShowCard(true);
        }
    };

    return (
        <div className={style.formContainer}>
            <form onSubmit={handleSubmit} className={style.form}>
                <label className={style.labels} >
                    Ingrese su nombre
                </label>
                <input type="text" value={input1} onChange={handleInput1Change} className={style.inputs}/>

                <label className={style.labels} >
                    Ingrese su apellido
                </label>
                <input type="text" value={input2} onChange={handleInput2Change} className={style.inputs}/>

                <label className={style.labels} >
                    ¿Quién es el mejor jugador del mundo?
                </label>
                <input type="text" value={input3} onChange={handleInput3Change} className={style.inputs}/>
                <button type="submit" className={style.button} >ENVIAR</button>
            </form>
        {error && <p className={style.error}>{error}</p>}
        {showCard && <Card input1={input1} input2={input2} input3={input3} />}
        </div>
    );
}

export default Form;