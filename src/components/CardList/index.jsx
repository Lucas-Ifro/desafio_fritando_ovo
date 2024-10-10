'use client'
import { useState } from 'react'
import Cartao from '../Cartao'

export default function CardList(){

    const [cards, setCards] = useState([
        {id: 1, titulo: "ovo com arroz e pepino", tempo:10, serve:2 ,imagem:"ovo_pepino.png"},
        {id: 2, titulo: "ovo com ovo",            tempo:20, serve:1 ,imagem:"ovo_pepino.png"},
        {id: 3, titulo: "ovo com pão",            tempo:30, serve:4 ,imagem:"ovo_pepino.png"},
        {id: 4, titulo: "ovo com mexido",         tempo:5,  serve:1 ,imagem:"ovo_pepino.png"}
    ])

    return(
        <div className='flex flex-wrap flex-col m-8'>
            <div>Quantidade de Receitas: {cards.length}</div>
            <div className='flex flex-wrap'>
                {cards.map(c =>(
                    <Cartao
                    imagem = {c.imagem}
                    titulo = {c.titulo}
                    tempo = {c.tempo}
                    serve = {c.serve}
                    />
                ))}
            </div>
        </div>
    )
}