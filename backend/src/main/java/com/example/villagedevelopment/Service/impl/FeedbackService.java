package com.example.villagedevelopment.Service.impl;


import com.example.villagedevelopment.Repository.IFeedbackRepository;
import com.example.villagedevelopment.Service.IFeedbackService;
import com.example.villagedevelopment.modal.Feedback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService implements IFeedbackService {

    @Autowired
    private IFeedbackRepository feedbackRepository;

    @Override
    public void sendFeedback(Feedback feedback) {
        feedbackRepository.save(feedback);
    }

    @Override
    public List<Feedback> getFeedBackByVillageId(Long villageId) {
        return feedbackRepository.findFeedbacksByVillage_Id(villageId);
    }

    @Override
    public List<Feedback> getAllFeedbacks(){
        return feedbackRepository.findAll();
    }

    @Override
    public List<Feedback> getFeedBackByUserId(Long userId) {
        return feedbackRepository.findFeedbacksByUsers_id(userId);
    }

}
