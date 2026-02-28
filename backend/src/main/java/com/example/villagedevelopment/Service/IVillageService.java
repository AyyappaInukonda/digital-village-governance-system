package com.example.villagedevelopment.Service;

import com.example.villagedevelopment.modal.Village;

import java.util.List;

public interface IVillageService {

    void addVillage(Village village);

    Village getVillageById(Long id);

    Village villageLogin(String email,String password);

    List<Village> getAllVillages();

    void deleteVillageById(Long id);

    void updateVillage(Village village);


}
