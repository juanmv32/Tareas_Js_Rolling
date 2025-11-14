import { useState } from "react"
import { data } from "../data/db.js"
import ProfilesCards from "./profilescards.jsx"

const ListProfileCard = () => {
    const [usuarios, setusuarios] = useState([])
  return (
    <div>
      {/* aqui pasa data a ser user como propiedad */}
        {data.map((user)=>(
            <ProfilesCards key={user.id} user={user}/>
        ))}

    </div>
  )
}

export default ListProfileCard