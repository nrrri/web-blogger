import axios from 'axios'
import Link from 'next/link'

const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/blogs`)

    return response.data.data
  } catch (e) {
    console.log('error', e)
    return []
  }
}

export default async function Page() {
  const blogs = await fetchBlogs()
  console.log('blogs', blogs)

  return (
    <div className='container mx-auto ml-24 m-12'>
      <div className='text-4xl font-medium mb-6'>
      Hello Page
      </div>
      
      <div className='grid grid-cols-3 gap-2 '>
        {
          blogs.map((blog, index) => (
            <div className='flex flex-col m-3 p-3 py-5 items-center bg-white border border-gray-200 rounded-lg drop-shadow-md hover:-translate-y-1' key={index}>
              <div className='text-3xl m-2 mb-6'>{blog.attributes.title}</div>
              <div className='text-l m-2 mb-4 min-h-24 line-clamp-4 overflow-hidden'>{blog.attributes.description}</div>
              <Link className='bg-indigo-400 hover:bg-indigo-500 text-slate-50 rounded-full p-2 w-32 text-center' href={`blog/${blog.id}`}>See more</Link>
            </div>
          ))
        }
      </div>

    </div>
  )
}