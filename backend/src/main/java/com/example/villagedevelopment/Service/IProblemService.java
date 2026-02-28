package com.example.villagedevelopment.Service;

import com.example.villagedevelopment.modal.Problem;

import java.util.List;

public interface IProblemService
{
    void addProblem(Problem problem);

    List<Problem> getAllProblems();

    Problem getProblemById(Long id);

    List<Problem> getAllProblemByUserId(Long userId);

    List<Problem> getAllProblemByVillageId(Long villageId);

    List<Problem> getAllProblemByVolunteerId(Long volunteerId);

    void deleteProblemById(Long id);
}
