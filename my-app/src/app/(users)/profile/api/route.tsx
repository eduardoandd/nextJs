import { NextRequest } from "next/server"
import { headers, cookies } from "next/headers"

export async function  GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers)
    const headerList = headers()
    cookies().set('token','123abc')
    const theme = request.cookies.get("theme")


    console.log(requestHeaders.get('Authorization'));
    console.log(headerList.get('Authorization'));
    console.log(cookies().get('token'));
    console.log(theme);
    

    return new Response('<h1>Profile Route</h1>',
        { headers:{
            "Content-Type":"text/html",
            "Set-Cookie": "theme=dark"
        }}
    )

    
}