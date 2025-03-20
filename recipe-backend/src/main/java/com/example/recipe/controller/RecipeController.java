package com.example.recipe.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.service.annotation.GetExchange;

import com.example.recipe.model.Recipe;
import com.example.recipe.model.User;
import com.example.recipe.service.RecipeServiceImpl;
import com.example.recipe.service.UserServiceImpl;

@RestController
public class RecipeController {

    @Autowired
    private RecipeServiceImpl recipeService;

    @Autowired
    private UserServiceImpl userService;


    @PostMapping("/addRecipe/{userId}")
    public ResponseEntity<?> addRecipe(@PathVariable Long userId,@RequestBody Recipe recipe){
        Recipe currRecipe = recipeService.addRecipe(userId, recipe);
        return new ResponseEntity<>("Recipe Added",HttpStatus.valueOf(201));
    }

    @GetExchange("/getAllRecipes")
    public ResponseEntity<List<Recipe>> getAllRecipes(){
        List<Recipe> recipes = recipeService.getAllRecipes();
        return new ResponseEntity<>(recipes, HttpStatus.valueOf(200));
    }

    @GetMapping("/getRecipeById/{userId}/{recipeId}")
    public ResponseEntity<Recipe> getRecipeByUserID(@PathVariable Long userId, @PathVariable int recipeId){
        Recipe recipe = recipeService.getRecipeById(userId, recipeId);
        return new ResponseEntity<>(recipe, HttpStatus.valueOf(200));
    }

    @DeleteMapping("/deleteRecipe/{userId}/{recipeId}")
    public ResponseEntity<String> deleteRecipe(@PathVariable Long userId, @PathVariable int recipeId) {
        recipeService.deleteRecipe(userId, recipeId);
        return ResponseEntity.ok("Recipe deleted successfully");
}


}
