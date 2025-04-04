package com.example.recipe.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.recipe.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    User findByEmail(String email);
    // User findByUsernameAndPassword(String username, String password);
}
