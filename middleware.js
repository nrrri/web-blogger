import { NextResponse } from "next/server";

export async function middleware(request) {
    try {
        const token = request.cookies.get('token')
        let response = await fetch(`${process.env.STRAPI_BASE_URL}/api/users/me`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.value}`
                }
            })

        if (!response.ok) {
            throw new Error('Login fail')
        }

        const responseJSON = await response.json()
        console.log('response', responseJSON)
        return  NextResponse.next()
    } catch (e) {
        console.log('error', e)
        return NextResponse.redirect(new URL('/', request.url))
    }
}

export const config = {
    matcher: '/special-blogs/:path*',
}