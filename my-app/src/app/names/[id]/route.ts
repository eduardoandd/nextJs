import { data } from "../data";

export async function GET(_request,{params}: {params: {id:string}}) {
    const name = data.find(name => name.id === parseInt(params.id))
    return Response.json(name)
    
}