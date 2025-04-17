package com.backend.userservice.Model;

public class User
{
    private int user_id;
    private String user_name;
    private String password;
    private String email;
    private String phone;

    public String getPassword()
    {
        return password;
    }

    public String getUsername() {
        return user_name;
    }
}
