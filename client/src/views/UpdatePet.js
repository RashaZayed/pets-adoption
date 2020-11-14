import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "../components/Form";
import {Link, navigate} from "@reach/router"

export default (props) => {
  const [pets, setPets] = useState("");
  const [errors, setErrors] = useState([]);
  const [load , setLoad] = useState(false)
  const { id } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets/" + id)
      .then((res) => {
        setPets(res.data);
        setLoad(true)
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updatePet = ({name , type , description , firstSkill , secSkill , thirdSkill}) => {
      axios.put("http://localhost:8000/api/pets/"+ id , {name , type , description , firstSkill , secSkill , thirdSkill} )
      .then(res=> {
          console.log(res)
          navigate("/")
        })
      .catch((err) => {
        const errRes = err.response.data.errors;
        const errArr = [];
        for (const key of Object.keys(errRes)) {
          errArr.push(errRes[key].message);
        }
        setErrors(errArr);
        
      });
  };
  const displayValidator = errors.map((error, i) =>{
      return(
        <p className="alert alert-warning alert-dismissible fade show" key={i}>{error}</p>
      )
  });

      

      



  return (
    <div className="container">

        <h1>Pet Shelter</h1>           
        <h2>Edit {pets.name} <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
        </h2>
        <Link to="/">Back to home   </Link>
        {displayValidator}
     {load && <Form
        initialName={pets.name}
        initialType={pets.type}
        initialDescription={pets.description}
        initialFirstSkill={pets.firstskill}
        initialSecSkill={pets.secskill}
        initialThirdSkill={pets.thirdskill}
        buttonValue="Edit Pet"
        onSuccess={updatePet}
      />} 
      
    </div>
  )
}
