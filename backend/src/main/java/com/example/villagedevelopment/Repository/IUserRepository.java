package com.example.villagedevelopment.Repository;

import com.example.villagedevelopment.modal.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserRepository extends JpaRepository<Users,Long> {
    Users findByEmailAndPassword(String email, String password);

    List<Users> findByVolunteers_id(Long volunteerId);
}
