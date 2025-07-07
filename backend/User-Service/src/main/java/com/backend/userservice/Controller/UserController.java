package com.backend.userservice.Controller;

import com.backend.userservice.Model.User;
import com.backend.userservice.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@CrossOrigin
public class UserController
{
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user)
    {
        return userService.Register(user);
    }

    @GetMapping("/getuser")
    public List<User> getUser()
    {
        return userService.getAllUsers();
    }

    @PostMapping("/login")
    public String login(@RequestBody User user)
    {
        return userService.Login(user);
    }
}
