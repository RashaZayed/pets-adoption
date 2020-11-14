const PetController = require("../controllers/pet.controller")


module.exports = (app) => {
    app.get("/pets" , PetController.getAllPets);
    app.post("/pets/new" , PetController.createPet);
    app.get("/pets/:id" , PetController.getOnePet);
    app.put("/pets/:id" , PetController.updatePet);
    app.delete("/pets/:id" , PetController.deletePet);
}