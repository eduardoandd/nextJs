interface ProductParams{
    params: {
        productId:number
    }
}

export default function Info({ params}: ProductParams){
    return(
        <div className="">
            <p>Informações do produto {params.productId}</p>
        </div>
    )
}