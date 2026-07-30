package com.foodrecipe.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.foodrecipe.backend.dao.FoodrecipeDao;
import com.foodrecipe.backend.entite.Foodrecipe;

@Service
public class FoodrecipeServiceImpl implements FoodrecipeService {

    @Autowired
    private FoodrecipeDao foodrecipeDao;

    @Override
    public List<Foodrecipe> getrecipe() {
        return foodrecipeDao.findAll();
    }

    @Override
    public List<Foodrecipe> getRecipeByName(String recipeName) {
        return foodrecipeDao.findByTitleContainingIgnoreCase(recipeName);
    }

    @Override
    public Foodrecipe addRecipe(Foodrecipe foodrecipe) {
        return foodrecipeDao.save(foodrecipe);
    }

    @Override
    public Foodrecipe getRecipeById(Long id) {
        return foodrecipeDao.findById(id).orElse(null);
    }

    @Override
    public List<Foodrecipe> getPopularRecipes() {
        return foodrecipeDao.findAll(PageRequest.of(0, 5)).getContent();
    }

}
