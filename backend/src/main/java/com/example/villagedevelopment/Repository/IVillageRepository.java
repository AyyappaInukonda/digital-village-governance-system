package com.example.villagedevelopment.Repository;

import com.example.villagedevelopment.modal.Village;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IVillageRepository extends JpaRepository<Village,Long>
{
    Village findByEmailAndPassword(String email,String password);
}
