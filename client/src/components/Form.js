import React, {useState , useEffect} from "react"
import axios from "axios"

export default (props)=> {
    const {initialName , initialType , initialDescription , initialFirstSkill, initialSecSkill , initialThirdSkill , onSuccess , buttonValue} = props;
    const [name , setName] = useState(initialName);
    const [type , setType] = useState(initialType);
    const [description, setDescription] = useState(initialDescription);
    const[firstSkill , setFirstSkill] = useState(initialFirstSkill);
    const[secSkill , setSecSkill] = useState(initialSecSkill);
    const[thirdSkill , setThirdSkill] = useState(initialThirdSkill);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSuccess({name , type , description , firstSkill , secSkill , thirdSkill});
    }
    const styles= {
        form :{
            "margin" : "15px",
            "font-style" : 'oblique' ,
            "font-weight": "60px",
            
        }
    }






    return(
        <div className="container" >
    <form style={styles.form} onSubmit={onSubmitHandler}>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01">Name</label>
      <input type="text" className="form-control" value={name} onChange={(e)=> setName(e.target.value)} />
      <label for="validationCustom02">Type</label>
      <input type="text" className="form-control"  value={type} onChange={(e)=> setType(e.target.value)}   />
      <label for="validationCustom01">Description</label>
      <input type="text" className="form-control" value={description} onChange={(e)=> setDescription(e.target.value)} />
      <p>Skills (optional)</p>
      <label for="validationCustom02">Skill 1</label>
      <input type="text" className="form-control"  value={firstSkill} onChange={(e)=> setFirstSkill(e.target.value)}  />
      <label for="validationCustom02">Skill 2</label>
      <input type="text" className="form-control"  value={secSkill} onChange={(e)=> setSecSkill(e.target.value)}/>
      <label for="validationCustom02">Skill 3</label>
      <input type="text" className="form-control"  value={thirdSkill} onChange={(e)=> setThirdSkill(e.target.value)} />
      <button type="submit" className="btn btn-primary" >{buttonValue}</button>
      
     </div>
     </div>
    
    
   
  
    </form>

        </div>
    )
}