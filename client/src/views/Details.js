import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";
import {Link , navigate } from "@reach/router";

export default(props)=> {
    const {id} =props;
    const [name , setName] = useState("");
    const [type , setType] = useState("");
    const [description, setDescription] = useState("");
    const[firstSkill , setFirstSkill] = useState("");
    const[secSkill , setSecSkill] = useState("");
    const[thirdSkill , setThirdSkill] = useState("");
    
useEffect(()=>{
    axios.get("http://localhost:8000/api/pets/"+ id)
    .then(res =>{
        setName(res.data.name)
        setType(res.data.type)
        setDescription(res.data.description)
        setFirstSkill(res.data.firstskill)
        setSecSkill(res.data.secSkill)
        setThirdSkill(res.data.thirdSkill)
        
    })
    .catch(err => console.log(err));

},[])




    return(
        <div className="container" >
            
            <h1>Pet Shelter</h1>
    <h3 >Details about: {name}</h3> 
    
    <DeleteButton petId={id}  onSuccess={()=> navigate("/") }petName={name}  />
    <div >
    <p>pet type: </p>
    <div class="alert alert-primary" role="alert">{type}</div>
    <p>description: </p>
    <div class="alert alert-primary" role="alert">{description}</div>
     <div>Skills: </div> <div class="alert alert-primary" role="alert">{firstSkill}
                         <p>{secSkill}</p>
                         <p>{thirdSkill}</p>
     </div>


    </div>
            
    <Link to="/">Back to home   </Link>
            </div>
    )
}