'use client'
import { useState } from 'react'
import { useEffect } from 'react'
import Cartao from '../Cartao'

export default function CardList(){

    const [cards, setCards] = useState([])

    useEffect(()=>{
        const bearerToken = process.env.NEXT_PUBLIC_API_TOKEN

        async function getData() {
            await fetch('http://localhost:1337/api/receitas?populate=*', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${bearerToken}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json(response))
            .then(response => setCards(response.data))
            .catch(error => console.log(error))
        }

        getData()
    }, [])

    return(
        <div className='flex flex-wrap flex-col m-8'>
            <div>Quantidade de Receitas: {cards.length}</div>
            <div className='flex flex-wrap'>
                {cards.map(c =>(
                    <Cartao
                    key={c.id}
                    id={c.documentId}
                    imagem = {`${process.env.NEXT_PUBLIC_STRAPI_URL}${c.Capa.formats.thumbnail.url}`}
                    titulo = {c.Titulo}
                    tempo = {c.Preparo}
                    serve = {c.Porcoes}
                    />
                ))}
            </div>
        </div>
    )
}