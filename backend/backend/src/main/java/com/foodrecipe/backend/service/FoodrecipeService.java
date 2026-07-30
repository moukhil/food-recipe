package com.foodrecipe.backend.service;

import java.util.List;

import com.foodrecipe.backend.entite.Foodrecipe;

public interface FoodrecipeService {
    public List<Foodrecipe> getrecipe();

    public List<Foodrecipe> getRecipeByName(String recipeName);

    public Foodrecipe addRecipe(Foodrecipe foodrecipe);

    public Foodrecipe getRecipeById(Long id);

    public List<Foodrecipe> getPopularRecipes();
}
