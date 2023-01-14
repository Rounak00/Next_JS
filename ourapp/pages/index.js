

import Image from "next/image";
import Nav from "@/components/Nav";

const index= ()=> {
  return (
    <>
    <Nav />
      <p>Hello </p> 
      <Image src="/pic.jpg" height="20" width="20"></Image> { /* add height width or layout  */}
    </>
  );
};
export default index;
// this index go to app.js and return there as component


//for adding online image link we need to write code in next.config.js
/*
 images:{
   domains:["doman name"] //example ["image.pixels.com"]
 }
*/