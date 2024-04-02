import axios from 'axios'
import Link from 'next/link'
import { cookies } from 'next/headers'


const fetchSpecialBlogs = async () => {
    try {
        const token = cookies().get('token')
        console.log('token', token)
        const response = await axios.get(
            `${process.env.STRAPI_BASE_URL}/api/special-blogs`,
            {
                headers:{
                    'Authorization': `Bearer ${token.value}`
                }
            }
        )

        return response.data.data
    } catch (e) {
        console.log('error', e)
        return []
    }
}

export default async function Page() {
    const blogs = await fetchSpecialBlogs()
    console.log('blogs', blogs)

    return (
        <div className='container mx-auto ml-24 m-12'>
            <div className='text-4xl font-medium mb-6'>
                Hello Special Page
            </div>

            <div className='grid grid-cols-3 gap-2 '>
                {
                    blogs.map((blog, index) => (
                        <div className='flex flex-col m-3 p-3 py-5 items-center bg-white border border-gray-200 rounded-lg drop-shadow-md hover:-translate-y-1' key={index}>
                            <div className='text-3xl m-2 mb-6'>{blog.attributes.title}</div>
                            <div className='text-l min-h-24 m-2 mb-4 line-clamp-3 overflow-hidden'>{blog.attributes.description}</div>
                            {/* <Link className='bg-violet-500 hover:bg-violet-600 text-slate-50 rounded-full p-2 w-32 text-center' href={`special-blog/${blog.id}`}>See more</Link> */}
                        </div>
                    ))
                }
            </div>

        </div>
    )
}