package com.example.villagedevelopment.Service;

import com.example.villagedevelopment.modal.Program;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

public interface IProgramService {

    void addProgram( Program program);

    List<Program> getAllPrograms();

    List<Program> getProgramByVolunteer(Long volunteer);

    void deleteProgramById(Long id);

    List<Program> getProgramByVillage(Long villageId);
}
