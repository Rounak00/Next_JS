import React from 'react'
import {useRouter} from 'next/router'

const ErrorPage = () => {
  const router=useRouter();
  return (
    <>
    <div>Error Page : 404 </div> 
    {/* //in 404 page we need to write 404 as file name it will automatically convertas our 404 page */}
    <a onClick={()=>{router.push("/")}}>Home</a>{/*  // we can also do this using a simple link */}
    </>
  )
}

export default ErrorPage

/*Automatic render of 404 page

useEffect(()=>{
 setTimeout(()=>{
  router.push("/home");
 },3000)
},[])
*/