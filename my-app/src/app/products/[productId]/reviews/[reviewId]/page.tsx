import { Metadata } from 'next'
import {notFound} from 'next/navigation'

interface ReviewParams {
    params: {
        productId:number
        reviewId:string
    }
}

export const metadata:Metadata ={
    title:{
        absolute:'Review X'
    }
}

export default function ReviewInfo( {params}:ReviewParams ){
    if(parseInt(params.reviewId) > 1000){
        notFound()
    }
    if(parseInt(params.reviewId) === 900){
        throw Error('Invalid 900 Id.')
    }



    return(
        <div className="">
            <p>Produto {params.productId}</p>
            <p>Review {params.reviewId}</p>
        </div>
    )
}