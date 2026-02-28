package com.example.villagedevelopment.Service.impl;

import com.example.villagedevelopment.Repository.IUserRepository;
import com.example.villagedevelopment.Service.IUserService;
import com.example.villagedevelopment.modal.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService
{
    @Autowired
    private IUserRepository repository;

    @Override
    public void addUser(Users users) {
        repository.save(users);
    }

    @Override
    public Users userLogin(String email, String password) {
        return repository.findByEmailAndPassword(email, password);
    }

    @Override
    public Users getUserById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Users> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public void deleteUserById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<Users> getUserByVolunteerId(Long volunteerId) {
        return repository.findByVolunteers_id(volunteerId);
    }
}
