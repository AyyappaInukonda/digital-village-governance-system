package com.example.villagedevelopment.Service;

import com.example.villagedevelopment.modal.Users;
import com.example.villagedevelopment.modal.Volunteers;

import java.util.List;

public interface IVolunteersService
{
    void addVolunteer(Volunteers volunteers);

    Volunteers volunteerLogin(String email,String password);

    List<Volunteers> getAllVolunteers();

    void deleteVolunteerById(Long id);

    Volunteers findByVolunteerId(Long volunteerId);

    List<Volunteers> findAllUsersByVillageId(Long villageId);
}
