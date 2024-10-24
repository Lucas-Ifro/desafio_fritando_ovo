import { Clock, Soup } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Cartao({id, imagem, titulo, tempo, serve}) {
    return(
        <div className="m-4 rounded border-2 border-solid border-rose-400 max-w-[387px]">
            <Link href={`/receitas/${id}`}>
            <Image 
                className="bg-cover bg-center" 
                src={imagem} 
                width={387} 
                height={297} 
                alt={titulo}/>
            <h2 className="p-2 bg-rose-300 text-gray-800">
                {titulo}
            </h2>
            <div className="p-2 text-xs flex items-center gap-2">
                <Clock />
                {tempo} minuto(s)
            </div>
            <div className="p-2 text-xs flex items-center gap-2">
                <Soup />
                serve {serve} pessoa(s)
            </div>
            </Link>
        </div>
    ) 
}