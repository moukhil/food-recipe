package com.foodrecipe.backend.entite;

import jakarta.persistence.*;

@Entity
public class Foodrecipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Title")
    private String title;

    @Column(name = "Instructions", columnDefinition = "TEXT")
    private String instructions;

    @Column(name = "Ingredients", columnDefinition = "TEXT")
    private String ingredients;

    @Column(name = "Image_URL")
    private String imageUrl;

    public Foodrecipe() {
    }

    public Foodrecipe(Long id, String title, String instructions, String ingredients, String imageUrl) {
        this.id = id;
        this.title = title;
        this.instructions = instructions;
        this.ingredients = ingredients;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "Foodrecipe [id=" + id +
                ", title=" + title +
                ", instructions=" + instructions +
                ", ingredients=" + ingredients +
                ", imageUrl=" + imageUrl + "]";
    }
}