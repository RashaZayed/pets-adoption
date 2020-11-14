import React, {useState , useEffect} from "react"
import axios from "axios";
import {Link} from "@reach/router"
export default (props)=> {

    const[pets , setPets] = useState([]);
    const [loaded , setLoaded] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/pets")
        .then(pets=> { 
            setPets(pets.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))

    },[]);

    const displayTable = ()=>  {
        return(
     <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Actions</th>
                    </tr>
             </thead>
                    
                    <tbody>{displayPets} </tbody>

      </table>
        
        )};

    const displayPets = pets.map((pet ,i) => {
        return (
            <tr>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
            <td> 
                <Link to={"/pets/"+ pet._id +"/edit"} > edit |</Link>
                <Link to={"/pets/"+pet._id}> details</Link>
            </td>
            </tr>
        )})



    return (
        <div className="container">
            
            
            <div>{ displayTable()}</div>
        </div>


    )

    
}