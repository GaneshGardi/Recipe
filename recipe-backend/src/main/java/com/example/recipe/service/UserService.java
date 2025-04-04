package com.example.recipe.service;

import com.example.recipe.model.User;
import com.example.recipe.request.LoginRequest;

public interface UserService {


    public User addUser(User user);

    public User loginUser(LoginRequest loginRequest);   
}
