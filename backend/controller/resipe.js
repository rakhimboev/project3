const Recipes = require("../models/recipe");

const getRecipes = async (req, res) => {
  const recipes = await Recipes.find();
  return res.json(recipes);
};

const getRecipe = async (req, res) => {
  const recipe = await Recipes.findById(req.params.id);
  res.json(recipe);
};

const addRecipe = async (req, res) => {
  const { title, ingredients, instructions, time } = req.body;

  if (!title || !ingredients || !instructions) {
    return res.json({ message: "Please fill all fields" });
  }

  const newRecipe = await Recipes.create({
    title,
    ingredients,
    instructions,
    time,
  });
  return res.json(newRecipe);
};

const editRecipe = async (req, res) => {
  const { title, ingredients, instructions, time } = req.body;
  let recipe = await Recipes.findById(req.params.id);
  try {
    if (recipe) {
      await Recipes.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ title, ingredients, instructions, time });
    }
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

const deleteRecipe = (req, res) => {
  res.json({ message: "Hello from the server!" });
};

module.exports = { getRecipes, addRecipe, editRecipe, deleteRecipe, getRecipe };
