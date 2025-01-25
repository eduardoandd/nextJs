import { Metadata } from "next"
import Link from 'next/link'


export const metadata: Metadata ={
    title: 'Produtos'
}

export default function Products(){
    return(
        <div className="">
            <Link href={"/products/1"}>Produto 1</Link>
            <Link href={"/products/2"}>Produto 2</Link>
            <Link href={"/products/3"} replace>Produto 3</Link>
        </div>
    )
}