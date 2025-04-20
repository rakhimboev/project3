const express = require("express");
const {
  getRecipes,
  addRecipe,
  editRecipe,
  deleteRecipe,
  getRecipe,
} = require("../controller/resipe");
const router = express.Router();

router.get("/", getRecipes); //Get all recipes
router.get("/:id", getRecipe); //Get recipe by id
router.post("/", addRecipe); //add recipe
router.put("/:id", editRecipe); //Edit recipe
router.delete("/:id", deleteRecipe); //Delete recipe

module.exports = router;
