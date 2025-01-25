interface ReviewParams {
    params: {
        productId:number
        reviewId:number
    }
}

export default function Review( {params}:ReviewParams ){
    return(
        <div className="">
            <p>Produto {params.productId}</p>
            <p>Review {params.reviewId}</p>
        </div>
    )
}