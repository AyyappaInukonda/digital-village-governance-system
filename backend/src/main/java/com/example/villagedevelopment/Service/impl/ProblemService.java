package com.example.villagedevelopment.Service.impl;

import com.example.villagedevelopment.Repository.IProblemRepository;
import com.example.villagedevelopment.Service.IProblemService;
import com.example.villagedevelopment.modal.Problem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProblemService implements IProblemService
{
    @Autowired
    private IProblemRepository repository;

    @Override
    public void addProblem(Problem problem)
    {
        repository.save(problem);
    }

    @Override
    public List<Problem> getAllProblems() {
        return repository.findAll();
    }

    @Override
    public Problem getProblemById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Problem> getAllProblemByUserId(Long userId) {
        return repository.findByUser_Id(userId);
    }

    @Override
    public List<Problem> getAllProblemByVillageId(Long villageId) {
        return repository.findByVillage_Id(villageId);
    }

    @Override
    public List<Problem> getAllProblemByVolunteerId(Long volunteerId) {
        return repository.findByVolunteers_Id(volunteerId);
    }

    @Override
    public void deleteProblemById(Long id) {
        repository.deleteById(id);
    }
}
