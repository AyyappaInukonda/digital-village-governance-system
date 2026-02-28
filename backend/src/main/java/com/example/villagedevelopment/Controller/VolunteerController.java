package com.example.villagedevelopment.Controller;

import com.example.villagedevelopment.Service.IVillageService;
import com.example.villagedevelopment.Service.IVolunteersService;
import com.example.villagedevelopment.modal.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/volunteer")
@CrossOrigin(origins = "*")
public class VolunteerController {
    @Autowired
    private IVolunteersService service;

    @Autowired
    private IVillageService villageService;

    @PostMapping
    private ResponseEntity<?> addUser(Long villageId,
                                      String name,
                                      String email,
                                      String password,
                                      String confirmPassword,
                                      String education,
                                      String mobileNumber,
                                      String address,
                                      MultipartFile image)
    {
        HashMap<String, Object> res = new HashMap<>();
        try {
            String filepath = Paths.get("").toAbsolutePath().toString();
            Path imageFilePath = Paths.get(filepath, "src", "main", "resources", "static", "images", image.getOriginalFilename());
            String imageUrl = "http://localhost:8081/images/" + image.getOriginalFilename();
            image.transferTo(imageFilePath);

            Village village = villageService.getVillageById(villageId);
            if (village == null)
            {
                res.put("success", false);
                res.put("error", "Village is not found for provided id is" + villageId);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
            }

            Volunteers volunteers = Volunteers.builder()
                    .name(name)
                    .email(email)
                    .password(password)
                    .confirmPassword(confirmPassword)
                    .education(education)
                    .mobileNumber(mobileNumber)
                    .address(address)
                    .village(village)
                    .image(imageUrl)
                    .build();

            service.addVolunteer(volunteers);
            res.put("success", true);
            res.put("msg", "Volunteer added successfully");
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            res.put("success", false);
            res.put("msg", "Failed to add the volunteer");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping
    private ResponseEntity<?> getAllVolunteers() {
        HashMap<String, Object> res = new HashMap<>();
        try {
            List<Volunteers> volunteers = service.getAllVolunteers();
            res.put("success", true);
            res.put("volunteers", volunteers);
            return ResponseEntity.ok(res);
        } catch (Exception e) {
            res.put("success", false);
            res.put("error", "Failed to fetch the available volunteers");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping("/{id}")
    private ResponseEntity<?> getVillagesByVolunteerId(@PathVariable Long id)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            Volunteers volunteers = service.findByVolunteerId(id);
            res.put("success",true);
            res.put("village",volunteers);
            return ResponseEntity.ok(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("error","Volunteer is not found for provided id is"+id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }

    @GetMapping("/get/{villageId}")
    private ResponseEntity<?> getAllUsersByVillageId(@PathVariable Long villageId)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            List<Volunteers> volunteers = service.findAllUsersByVillageId(villageId);
            res.put("success",true);
            res.put("volunteers",volunteers);
            return ResponseEntity.ok(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("error","Failed to fetch the available users by provided id is"+ villageId);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<?> deleteVolunteerById(@PathVariable Long id)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            service.deleteVolunteerById(id);
            res.put("success",true);
            res.put("msg","Volunteer Deleted Successfully");
            return ResponseEntity.ok(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("error","Volunteer is not found for provided id is"+id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }

}



