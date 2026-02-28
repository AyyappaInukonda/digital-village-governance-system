package com.example.villagedevelopment.Repository;


import com.example.villagedevelopment.modal.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProblemRepository extends JpaRepository<Problem,Long>
{
    List<Problem> findByUser_Id(Long userId);

    List<Problem> findByVillage_Id(Long villageId);

    List<Problem> findByVolunteers_Id(Long volunteerId);

}
