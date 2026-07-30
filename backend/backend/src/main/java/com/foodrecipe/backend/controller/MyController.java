package com.foodrecipe.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.foodrecipe.backend.entite.Foodrecipe;
import com.foodrecipe.backend.service.FoodrecipeService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MyController {

    @Autowired
    private FoodrecipeService foodrecipeService;

    @GetMapping("/home")
    public String home() {
        return "hello backend";
    }

    @GetMapping("/recipe")
    public List<Foodrecipe> getrecipe() {
        return this.foodrecipeService.getrecipe();
    }

    @GetMapping("/recipe/{recipeName}")
    public List<Foodrecipe> getRecipeByName(@PathVariable String recipeName) {
        System.out.println("Searching for: " + recipeName);
        return this.foodrecipeService.getRecipeByName(recipeName);
    }

    @PostMapping("/recipe")
    public Foodrecipe addRecipe(@RequestBody Foodrecipe foodrecipe) {
        return this.foodrecipeService.addRecipe(foodrecipe);
    }

    @GetMapping("/recipe/id/{id}")
    public Foodrecipe getRecipeById(@PathVariable Long id) {
        return this.foodrecipeService.getRecipeById(id);
    }

    @GetMapping("/recipes/popular")
    public List<Foodrecipe> getPopularRecipes() {
        return this.foodrecipeService.getPopularRecipes();
    }

}
