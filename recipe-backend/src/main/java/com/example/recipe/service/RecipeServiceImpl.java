package com.example.recipe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.recipe.ResourceNotFoundException;
import com.example.recipe.model.Recipe;
import com.example.recipe.model.User;
import com.example.recipe.repository.RecipeRepo;
import com.example.recipe.repository.UserRepo;

@Service
public class RecipeServiceImpl implements RecipeService {

    

    @Autowired
    private RecipeRepo recipeRepo;

    @Autowired
    private UserRepo userRepo;

   

    @Override
    public Recipe addRecipe(Long userId, Recipe recipe) {
        Optional<User> user = userRepo.findById(userId);
        if(user.isEmpty()){
            throw new RuntimeException("User not found with ID: "+ userId);
        }
        // User currentUser = user.get();
        recipe.setUserId(userId);
        return recipeRepo.save(recipe);
    }

    @Override
    public List<Recipe> getAllRecipes() {
        return recipeRepo.findAll();
    }

    @Override
    public Recipe getRecipeById(Long userId, int recipeId) {
        if(!userRepo.existsById(userId)){
            throw new ResourceNotFoundException("User not found with Id: "+ userId);
        }
        Recipe recipe = recipeRepo.findById(recipeId)
        .orElseThrow(() -> new ResourceNotFoundException("Recipe not found with Id: "+ recipeId));

        if(!recipe.getUserId().equals(userId)){
            throw new RuntimeException("Unauthorized: Cannot assess the recipe");
        }

        return recipe;
    }


    @Override
    public Recipe updateRecipe(Long userId, int recipeid, Recipe updatedRecipe) {
        return null;
    }


    @Override
public void deleteRecipe(Long userId, int recipeId) {
    
    Recipe recipe = recipeRepo.findById(recipeId)
            .orElseThrow(() -> new ResourceNotFoundException("Recipe Not Found with ID: " + recipeId));

    //--------------Debugging--------------------------------
    // System.out.println("Provided UserID: " + userId);
    // System.out.println("Recipe's UserID: " + recipe.getUserId());

    // Ensure the recipe belongs to the correct user before deleting
    if (!recipe.getUserId().equals(userId)) {
        throw new RuntimeException("Unauthorized: Recipe does not belong to the user with ID: " + userId);
    }

  
    recipeRepo.delete(recipe);
}



    

}
