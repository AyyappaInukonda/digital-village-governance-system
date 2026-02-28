package com.example.villagedevelopment.Service.impl;

import com.example.villagedevelopment.Repository.IVillageRepository;
import com.example.villagedevelopment.Service.IVillageService;
import com.example.villagedevelopment.modal.Village;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class VillageService implements IVillageService
{
    @Autowired
    private IVillageRepository repository;

    @Override
    public void addVillage(Village village) {
        repository.save(village);
    }

    @Override
    public Village getVillageById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public Village villageLogin(String email, String password) {
        return repository.findByEmailAndPassword(email, password);
    }

    @Override
    public List<Village> getAllVillages() {
        return repository.findAll();
    }

    @Override
    public void deleteVillageById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void updateVillage(Village village) {
        repository.save(village);
    }
}
