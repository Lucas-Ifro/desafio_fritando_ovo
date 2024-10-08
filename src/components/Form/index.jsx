'use client'

import { useState } from "react"

export default function Form(){

    const [nome, setNome] = useState("")

    return(
        <div className="m-8">
            <h2>Nome: {nome}</h2>
            <form>
                <input 
                type="text" 
                className="bg-red-500"
                value={nome}
                onChange={(e) => setNome(e.target.value)}/>
            </form>
        </div>
    )
}