package com.backend.userservice.Service;

import com.backend.userservice.Model.User;
import com.backend.userservice.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService  {
    @Autowired
    private UserRepository userRepository;
    private JWTService jwtService;
    public User Register(User user) {
        if(userRepository.existsByUsername(user.getUsername()))
        {
            throw new RuntimeException("Username is already taken");
        }
        return userRepository.save(user);
    }

    public String Login(User user) {
        User founduser = userRepository.findByUsername(user.getUsername()).orElse(null);
        if(founduser == null)
        {
            throw new RuntimeException("User not found");
        }
        try
        {
            Authentication auth = new UsernamePasswordAuthenticationToken(founduser.getUsername(), founduser.getPassword());
            if (auth.isAuthenticated())
            {
                return jwtService.tokenGenrator(user.getUsername());
            }
        }
        catch(Exception e)
        {
            throw new RuntimeException(e);
        }
        return null;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
