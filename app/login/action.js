'use server'

import axios from 'axios'
import { cookies } from 'next/headers'

export async function login(prevState, formData) {

    try {
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await axios.post(
            `${process.env.STRAPI_BASE_URL}/api/auth/local`,
            {
                identifier: email,
                password
            }
        )

        cookies().set('token', response.data.jwt)
        return { message: 'Login OK!'}
    } catch (e) {
        console.log('error', e)
        let errMessage = ''

        if (e.response && e.response.data.error.message) {
            errMessage = e.response.data.error.message
        }
        return { message: errMessage || 'Login fail' }
    }
}