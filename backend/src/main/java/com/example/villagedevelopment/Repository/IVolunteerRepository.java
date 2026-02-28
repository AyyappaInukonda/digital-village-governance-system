package com.example.villagedevelopment.Repository;

import com.example.villagedevelopment.modal.Users;
import com.example.villagedevelopment.modal.Volunteers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IVolunteerRepository extends JpaRepository<Volunteers,Long> {
    Volunteers findByEmailAndPassword(String email, String password);

    List<Volunteers> findByVillage_Id(Long villageId);
}
