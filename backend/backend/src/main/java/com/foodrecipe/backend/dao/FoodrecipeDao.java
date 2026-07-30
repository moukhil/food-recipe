package com.foodrecipe.backend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodrecipe.backend.entite.Foodrecipe;

public interface FoodrecipeDao extends JpaRepository<Foodrecipe, Long> {

    List<Foodrecipe> findByTitleContainingIgnoreCase(String title);

}