import React, {useState , useEffect} from "react"
import axios from "axios"

export default(props) => {
    const {petId , onSuccess ,petName} = props;
    const onClickHandler = e => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/pets/"+ petId)
        .then(pet => {
        onSuccess()
    })
}


    return(
        <button type="button" onClick={onClickHandler} class="btn btn-danger">Adopt {petName}</button>
    )
}
