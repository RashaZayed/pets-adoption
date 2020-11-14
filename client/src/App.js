import AddPet from "./views/AddPet"
import './App.css';
import {Router} from "@reach/router"
import UpdatePet from "./views/UpdatePet"
import Main from "./views/Main"
import Details from "./views/Details"

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
     <AddPet path="/pets/new" />
     <UpdatePet path="/pets/:id/edit" />
     <Details path="/pets/:id" />
     </Router>
    </div>
  );
}

export default App;
