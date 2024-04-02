'use client'

import { useFormState } from 'react-dom'
import { login } from './action'

export default function Page() {
    const iniState = {
        message: null
    }

    const [state, formAction] = useFormState(login, iniState)

    return (
        <div className='m-auto my-36 border border-grey-200 w-80 p-12 grid justify-items-center bg-white rounded-lg drop-shadow-md '>
            <form action={formAction}>
                <div className='text-2xl uppercase font-bold mb-4 grid justify-items-center'>
                    Login
                </div>
                <div className='mb-4'>
                    <div className=''>Email</div> 
                    <input name="email" className='border border-grey-900' />
                </div>
                <div className='mb-4'>
                    <div className=''>Password</div> 
                    <input type="password" name="password" className='border border-grey-900' />
                </div>
                <div className='mb-4'>
                Message: 
                <div className='text-md text-red-500 font-bold'>
                    {state?.message}
                    </div>
                </div>
                <div className='grid justify-items-center'>
                <button className='bg-indigo-400 hover:bg-indigo-500 text-slate-50 rounded-full p-2 w-32 text-center'>Login</button>
                </div>
            </form>
        </div>

    )
}