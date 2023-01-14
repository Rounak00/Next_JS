import React from 'react'

export const getStaticProps= async()=> {
   const res=await fetch("link");
   const data=await res.json();

   return {
    props:{
        data:data,
    },
   };
};

const apifetchingPage = ({data}) => {
  return (
    <div>apifetchingPage</div>
    {data.map((ele)=>{
        return <div key={ele.id}>
          <p>{ele.id}</p>
          <Link href={`/apiitem/${ele.id}`}></Link>
        </div>
    })}
  )
}

export default apifetchingPage