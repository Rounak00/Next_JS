

import Link from "next/link";

const index= ()=> {
  return (
    <>
    <nav>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
    </nav>
      <p>Hello </p> 
    </>
  );
};
export default index;
// this index go to app.js and return there as component
