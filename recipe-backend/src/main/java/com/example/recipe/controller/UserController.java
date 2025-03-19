package com.example.recipe.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.recipe.model.User;
import com.example.recipe.request.LoginRequest;
import com.example.recipe.service.UserServiceImpl;

@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/addUser")
    public ResponseEntity<User> addUser(@RequestBody User user){
        User user1 = userService.addUser(user);
        if(user1 != null){
            return new ResponseEntity<>(user1, HttpStatus.valueOf(201));
        }
        else{
            return new ResponseEntity<>(HttpStatus.valueOf(500));
        }
    } 

//     @PostMapping("/login")
//     public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
//     Boolean isAuthenticated = userService.loginUser(loginRequest);

//     if (isAuthenticated == null) {
//         return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
//     } else if (isAuthenticated) {
//         return ResponseEntity.ok("Login Successful"); // 200 OK
//     } else {
//         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong Credentials");
//     }
// }
     @PostMapping("/login")
        public Boolean loginUser(@RequestBody LoginRequest loginRequest){
         return userService.loginUser(loginRequest);
    }   


}
