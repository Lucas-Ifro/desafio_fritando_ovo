'use client'
import { useState } from 'react'
import Cartao from '../Cartao'

export default function CardList(){

    const [cards, setCards] = useState([
        {id: 1, titulo: "ovo com arroz e pepino", tempo:10, serve:2},
        {id: 2, titulo: "ovo com ovo", tempo:20, serve:1},
        {id: 3, titulo: "ovo com pão", tempo:30, serve:4},
        {id: 4, titulo: "ovo com mexido", tempo:5, serve:1}
    ])

    return(
        <div className='flex flex-wrap flex-col m-8'>
            <div>Quantidade de Receitas: {cards.length}</div>
            <ul className='list-disc'>
                {
                    cards.map(c => (
                        <li>{c.titulo} serve {c.serve} pessoa(s).</li>
                    ))
                }
            </ul>
        </div>
    )
}