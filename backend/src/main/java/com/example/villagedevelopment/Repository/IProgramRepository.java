package com.example.villagedevelopment.Repository;

import com.example.villagedevelopment.modal.Program;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface IProgramRepository extends JpaRepository<Program,Long> {
    @Query("select p from Program p where p.volunteer.id = :volunteerId")
    List<Program> findAllProgramByVolunteer(@Param("volunteerId") Long volunteerId);

    List<Program> findAllProgramByVillage(Long villageId);
}
