package com.example.villagedevelopment.Controller;

import com.example.villagedevelopment.Service.IFeedbackService;
import com.example.villagedevelopment.Service.IUserService;
import com.example.villagedevelopment.Service.IVillageService;
import com.example.villagedevelopment.modal.Feedback;
import com.example.villagedevelopment.modal.Users;
import com.example.villagedevelopment.modal.Village;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/feedback")
@CrossOrigin("*")
public class FeedbackController
{
    @Autowired
    private IFeedbackService service;

    @Autowired
    private IVillageService villageService;

    @Autowired
    private IUserService userService;

    @PostMapping("/{userId}/{villageId}")
    private ResponseEntity<?> addFeedbacks(@PathVariable Long userId,@PathVariable Long villageId,@RequestBody Feedback feedback)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            Village village = villageService.getVillageById(villageId);
            if (village == null)
            {
                res.put("success",false);
                res.put("error","Village is not found for provided id is"+villageId);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
            }

            Users users = userService.getUserById(userId);
            if (users == null) {
                res.put("success", false);
                res.put("msg", "User not found for provided id: " + userId);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
            }
            feedback.setVillage(village);
            feedback.setUsers(users);
            feedback.setDate(LocalDate.now());
            service.sendFeedback(feedback);
            res.put("success",true);
            res.put("msg","Feedback Provided successfully");
            return ResponseEntity.ok(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to add the feedbacks to the selected  village");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
    }

    @GetMapping("/{villageId}")
    private ResponseEntity<?> getAllFeedbacksByVillageId(@PathVariable Long villageId)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            List<Feedback> feedbacks = service.getFeedBackByVillageId(villageId);
            res.put("success",true);
            res.put("feedbacks",feedbacks);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to fetch the feedbacks by provided villageId is"+villageId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }

    @GetMapping("/get/{userId}")
    private ResponseEntity<?> getAllFeedbacksByUserId(@PathVariable Long userId)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            List<Feedback> feedbacks = service.getFeedBackByUserId(userId);
            res.put("success",true);
            res.put("feedbacks",feedbacks);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to fetch the feedbacks by provided user is"+userId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }

    @GetMapping
    private ResponseEntity<?> getAllFeedbacks()
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            List<Feedback> feedbacks = service.getAllFeedbacks();
            res.put("success",true);
            res.put("feedbacks",feedbacks);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to fetch the available feedbacks");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }
}
