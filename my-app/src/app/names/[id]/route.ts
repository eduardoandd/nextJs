import { data } from "../data";
import { redirect } from "next/navigation";

export async function GET(_request:Request,{params}: {params: {id:string}}) {

    if(parseInt(params.id) > data.length){
        redirect('/names')
    }

    const name = data.find(name => name.id === parseInt(params.id))
    return Response.json(name)
    
}

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

