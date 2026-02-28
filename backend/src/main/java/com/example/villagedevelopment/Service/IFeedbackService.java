package com.example.villagedevelopment.Service;

import com.example.villagedevelopment.modal.Feedback;

import java.util.List;


public interface IFeedbackService {

    void sendFeedback(Feedback feedback );

    List<Feedback> getFeedBackByVillageId(Long villageId);


    List<Feedback> getFeedBackByUserId(Long userId);

    List<Feedback> getAllFeedbacks();
}
