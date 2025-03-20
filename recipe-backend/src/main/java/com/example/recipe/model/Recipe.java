package com.example.recipe.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int recipeId;

    private String title;

    private String ingredients;

    private String description;

    @Column(name = "cooking_procedure")
    private String cookingProcedure;

    private int timeToCook;
    

    @Column(name = "userId", nullable = false)
    private Long userId;

}
