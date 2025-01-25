import { Metadata } from 'next'
import {notFound} from 'next/navigation'

interface ProductParams{
    params: {
        productId:string
    }
}

export const metadata:Metadata ={
    title:{
        absolute:'Produto X'
    }
}

export default function Info({ params}: ProductParams){

    if(parseInt(params.productId) > 100){
        notFound()
    }

    return(
        <div className="">
            <p>Informações do produto {params.productId}</p>
        </div>
    )
}