import React, { useEffect, useState } from 'react'  // Combined imports
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({})  // Fixed typo and initialized as an empty object

    // useEffect(() => {
    //     fetch('https://api.github.com/users/jayshikha')
    //         .then((res) => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    //         .catch(err => console.error(err))  // Added error handling
    // }, [])

    return (
        <div className='m-4 bg-gray-600 text-white text-3xl'>
        <h1 className='text-center '>GitHub Id</h1>
        <div className='grid grid-cols-2 gap-8 p-8 items-center'>
    <img src={data?.avatar_url} alt="git picture" className="w-72 rounded-lg" />
    <div>
        <p>Name: {data?.name}</p>  
        <p>Company: {data?.company}</p>  
        <p>Location: {data?.location}</p>  
        <p>Bio: {data?.bio}</p>  
        <p>Public Repos: {data?.public_repos}</p>  
    </div>
</div>

        </div>
    )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/jayshikha')
    return response.json()
}