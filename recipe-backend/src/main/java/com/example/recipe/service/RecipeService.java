package com.example.recipe.service;

import java.util.List;

import com.example.recipe.model.Recipe;

public interface RecipeService {

    Recipe addRecipe(Long userId, Recipe recipe);

    List<Recipe> getAllRecipes();

    Recipe getRecipeById(Long userId, int recipeId);

    Recipe updateRecipe(Long userId, int recipeid, Recipe updatedRecipe);

    void deleteRecipe(Long userId, int recipeId);

}
