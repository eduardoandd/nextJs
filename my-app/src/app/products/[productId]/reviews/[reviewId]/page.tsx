import {notFound} from 'next/navigation'

interface ReviewParams {
    params: {
        productId:number
        reviewId:string
    }
}

export default function Review( {params}:ReviewParams ){
    if(parseInt(params.reviewId) > 1000){
        notFound()
    }
    return(
        <div className="">
            <p>Produto {params.productId}</p>
            <p>Review {params.reviewId}</p>
        </div>
    )
}