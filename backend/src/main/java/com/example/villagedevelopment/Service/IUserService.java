package com.example.villagedevelopment.Service;


import com.example.villagedevelopment.modal.Users;

import java.util.List;

public interface IUserService {

    void addUser(Users users);

    Users userLogin(String email,String password);

    Users getUserById(Long id);

    List<Users> getAllUsers();
    void deleteUserById(Long id);

    List<Users> getUserByVolunteerId(Long volunteerId);
}

