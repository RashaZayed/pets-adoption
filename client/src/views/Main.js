import React, {useState , useEffect} from "react"
import axios from "axios"
import PetList from "../components/PetList"
import {Link} from "@reach/router"

export default(props)=> {
 const styles={
     sideLink:{
        //  "margin-left" :"300px"
         

     }
 }
    return(
        <div className="container">
            <h1>Pet shelter</h1>
            <Link style={styles.sideLink} className="homeLink" to="/pets/new">add a pet to the shelter</Link>
            <h3>This pets are looking for agood home</h3>

        <PetList />
        </div>
    )
}