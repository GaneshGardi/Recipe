package com.example.recipe.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.recipe.model.Recipe;

@Repository
public interface RecipeRepo extends JpaRepository<Recipe, Integer> {

    List<Recipe> findByUserId(Long userId);

}
