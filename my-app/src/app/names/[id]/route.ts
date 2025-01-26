import { NextUrlWithParsedQuery } from "next/dist/server/request-meta";
import { data } from "../data";
import { NextRequest } from "next/server";

// export async function GET(_request:Request,{params}: {params: {id:string}}) {
//     const name = data.find(name => name.id === parseInt(params.id))
//     return Response.json(name)
    
// }

export async function PATCH(
    request:Request,
    {params}: {params : {id:string}}
) {
   const body = await request.json()
   const {text} = body
   const index = data.findIndex(
        user => user.id === parseInt(params.id)
   )
   data[index].name = text
   return Response.json(data[index])
}

export async function DELETE(
    request:Request,
    {params}: {params : {id:string}}
) {
    // pega o index
    const index = data.findIndex(
        user => user.id === parseInt(params.id)
    )
    const deletedUser = data[index]
    data.splice(index,1)
    return Response.json(deletedUser)
}

export async function GET(request:NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')

    const filteredNames = query ? data.filter(name => name.name.includes(query)): data

    return Response.json(filteredNames)

}