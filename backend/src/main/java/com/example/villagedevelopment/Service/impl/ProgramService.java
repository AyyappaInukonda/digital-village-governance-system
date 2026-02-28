package com.example.villagedevelopment.Service.impl;

import com.example.villagedevelopment.Repository.IProgramRepository;
import com.example.villagedevelopment.Service.IProgramService;
import com.example.villagedevelopment.modal.Program;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ProgramService implements IProgramService {

    @Autowired
    private IProgramRepository repository;

    @Override
    public void addProgram(Program program) {
        repository.save(program);
    }

    @Override
    public List<Program> getAllPrograms() {
        return repository.findAll();
    }

    @Override
    public List<Program> getProgramByVolunteer(Long volunteer) {
        return repository.findAllProgramByVolunteer(volunteer);
    }


    @Override
    public void deleteProgramById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<Program> getProgramByVillage(Long villageId) {
        return repository.findAllProgramByVillage(villageId);
    }
}
