package com.example.villagedevelopment.Service.impl;

import com.example.villagedevelopment.Dto.VolunteerLoginDto;
import com.example.villagedevelopment.Repository.*;
import com.example.villagedevelopment.Service.IVolunteersService;
import com.example.villagedevelopment.modal.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VolunteersService implements IVolunteersService
{
    @Autowired
    private IVolunteerRepository repository;

    @Override
    public void addVolunteer(Volunteers volunteers) {
        repository.save(volunteers);
    }

    @Override
    public Volunteers volunteerLogin(String email, String password) {
        return repository.findByEmailAndPassword(email, password);
    }

    @Override
    public List<Volunteers> getAllVolunteers() {
        return repository.findAll();
    }

    @Override
    public void deleteVolunteerById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public Volunteers findByVolunteerId(Long volunteerId) {
        return repository.findById(volunteerId).get();
    }

    @Override
    public List<Volunteers> findAllUsersByVillageId(Long villageId) {
        return repository.findByVillage_Id(villageId);
    }
}
