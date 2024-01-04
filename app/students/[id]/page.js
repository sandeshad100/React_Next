
import {redirect} from "next/navigation"
const Students = ({params}) => {

    if(params.id == 4){
        redirect("/login")
    }
  return (
    <div>
        ID
<h1 className="text-4xl">{params.id}</h1>
    </div>
  )
}
export default Students