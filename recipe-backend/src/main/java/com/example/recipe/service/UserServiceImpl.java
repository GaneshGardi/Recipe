package com.example.recipe.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.recipe.model.User;
import com.example.recipe.repository.UserRepo;
import com.example.recipe.request.LoginRequest;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public User addUser(User user) {
        return userRepo.save(user);
    }

    public Boolean loginUser(LoginRequest loginRequest){

        User user = userRepo.findByEmail(loginRequest.getEmail());

        if(user == null){
            return false;
        }

        if( user.getPassword().equals(loginRequest.getPassword())){
            return true;
        }
        return false;
    }
    

}
