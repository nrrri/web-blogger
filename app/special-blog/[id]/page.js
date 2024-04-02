import axios from 'axios'

const fetchSpecialBlog = async (id) => {
    try {
        const response = await axios.get(`${process.env.STRAPI_BASE_URL}/api/special-blogs/${id}?populate=thumbnail,author`)

        return response.data.data
    } catch (e) {
        console.log('error', e)
        return []
    }
}

export default async function Page({ params }) {
    const blogId = params.id
    const blog = await fetchSpecialBlog(blogId)
    console.log(blog.id)
    return (
        <div className='mx-24 my-12'>
            <div>Special blog content</div>
            <div>TO BE UPDATED</div>

            <div>
                {/* <img className='my-3' width="800px" src={`${process.env.STRAPI_BASE_URL}${blog.attributes.thumbnail.data.attributes.url}`} /> */}
            </div>
            <div className='ml-12 mt-5'>
                <div className='text-2xl font-bold uppercase mb-2'>
                    {/* {blog.attributes.title} */}
                </div>
                <div className='mb-3 ml-5'>
                    {/* {`"${blog.attributes.description}"`} */}
                </div>
                <div className='text-sm text-gray-400 italic ml-24'>
                    {/* Author by: {blog.attributes.author.data ? blog.attributes.author.data.attributes.name : `Anonymous`} */}
                </div>
            </div>

        </div>
    )
}