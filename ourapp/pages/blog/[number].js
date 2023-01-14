//example of dynamic routing
import {useRouter} from "next/router";

const number = () => {
    const router=useRouter();
    const blognumber=router.query.number;// here we need to write same name that we write as our filename -> router.query.fliname; (ignore []);
  return (
    <div>blog number : {blognumber}</div>
  )
}

export default number