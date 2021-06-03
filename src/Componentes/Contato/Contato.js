import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import {useState} from 'react'
import './contato.css'

const Contato = () => {

    const [inputUsuario, setInputUsuario] = useState("")

    const limpar = (event) => {
        event.preventDefault();
    }   
    
    const digitar = (valor) => {
        console.log(valor.target.value);
        setInputUsuario(valor.target.value)
    }

 


    return (
        <div className="divContato">
            <h1 className="formAnim">Contato</h1>
            <img className="formImg" src="https://i.ytimg.com/vi/5iVkgLgFOIs/hqdefault.jpg"></img>
            <form className="forms">
                <div className="textNome">
                    <Input htmlFor="name" noChange={digitar} tipo="text" name="name">Nome:</Input>
                </div>
                <div className="textEmail">
                    <Input htmlFor="email" noChange={digitar} tipo="text" name="email">Email:</Input>
                </div>
                <div className="textMensagem">
                    <label htmlFor="message" className="labelInput">Mensagem:</label>
                    <textarea className="textArea" onChange={digitar} name="message" />
                </div>
                <div>
                    <Button estilo="botao" noClick={limpar} titulo="Enviar" />
                </div>
            </form>
        </div>
    )
}

export default Contato