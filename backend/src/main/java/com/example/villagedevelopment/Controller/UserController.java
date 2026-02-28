package com.example.villagedevelopment.Controller;

import com.example.villagedevelopment.Service.IUserService;
import com.example.villagedevelopment.Service.IVolunteersService;
import com.example.villagedevelopment.modal.Users;
import com.example.villagedevelopment.modal.Volunteers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private IUserService userService;

    @Autowired
    private IVolunteersService volunteersService;

    @PostMapping("/{volunteerId}")
    private ResponseEntity<?> addUser(@PathVariable Long volunteerId,
                                      String name,
                                      String email,
                                      String password,
                                      String confirmPassword,
                                      String mobileNumber,
                                      String address,
                                      MultipartFile image) throws IOException {
        HashMap<String,Object> res = new HashMap<>();
        try {
            String filepath = Paths.get("").toAbsolutePath().toString();
            Path imageFilePath = Paths.get(filepath, "src", "main", "resources", "static", "images", image.getOriginalFilename());
            String imageUrl = "http://localhost:8081/images/"+image.getOriginalFilename();
            image.transferTo(imageFilePath);

            Volunteers volunteers = volunteersService.findByVolunteerId(volunteerId);
            if (volunteers == null) {
                res.put("success", false);
                res.put("error", "Village is not found for provided id is" + volunteerId);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
            }

            Users users = Users.builder()
                    .name(name)
                    .email(email)
                    .password(password)
                    .confirmPassword(confirmPassword)
                    .mobileNumber(mobileNumber)
                    .address(address)
                    .volunteers(volunteers)
                    .image(imageUrl)
                    .build();

            userService.addUser(users);
            res.put("success",true);
            res.put("msg","User added successfully");
            return ResponseEntity.ok(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to add the user");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping
    private ResponseEntity<?> getAllUsers()
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            List<Users> users = userService.getAllUsers();
            res.put("success",true);
            res.put("users",users);
            return ResponseEntity.ok(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("error","Failed to fetch the available users");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping("/get/{volunteerId}")
    private ResponseEntity<?> getAllUsersByVolunteerId(@PathVariable Long volunteerId)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            List<Users> users = userService.getUserByVolunteerId(volunteerId);
            res.put("success",true);
            res.put("users",users);
            return ResponseEntity.ok(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("error","Failed to fetch the available users by provided id is"+ volunteerId);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<?> deleteVolunteerById(@PathVariable Long id)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            volunteersService.deleteVolunteerById(id);
            res.put("success",true);
            res.put("msg","Volunteer Deleted Successfully");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("error","Volunteer not found for provided id is"+id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }

}
