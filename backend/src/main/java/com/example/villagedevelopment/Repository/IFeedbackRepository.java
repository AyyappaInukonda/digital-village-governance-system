package com.example.villagedevelopment.Repository;

import com.example.villagedevelopment.modal.Feedback;
import com.example.villagedevelopment.modal.Users;
import com.example.villagedevelopment.modal.Village;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IFeedbackRepository extends JpaRepository<Feedback, Long> {

    List<Feedback> findFeedbacksByVillage_Id(Long villageId);

    List<Feedback> findFeedbacksByUsers_id(Long userId);
}
