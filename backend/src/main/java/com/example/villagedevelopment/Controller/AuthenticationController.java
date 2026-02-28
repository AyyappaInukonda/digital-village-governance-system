package com.example.villagedevelopment.Controller;

import com.example.villagedevelopment.Dto.UserLoginDto;
import com.example.villagedevelopment.Dto.VolunteerLoginDto;
import com.example.villagedevelopment.Service.IUserService;
import com.example.villagedevelopment.Service.IVillageService;
import com.example.villagedevelopment.Service.IVolunteersService;
import com.example.villagedevelopment.modal.Users;
import com.example.villagedevelopment.modal.Village;
import com.example.villagedevelopment.modal.Volunteers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class AuthenticationController
{
    @Autowired
    private IVolunteersService volunteersService;

    @Autowired
    private IUserService userService;

    @Autowired
    private IVillageService villageService;

    @PostMapping("/admin")
    private ResponseEntity<?> adminLogin(@RequestBody HashMap<String,String> admin) {

        HashMap<String,Object> res = new HashMap<>();
        try {
            String email = admin.get("email");
            String password = admin.get("password");


            if (email.equals("admin@gmail.com") && password.equals("admin"))
            {
                res.put("success",true);
                res.put("message", "admin Login Successful");
                return ResponseEntity.ok(res);
            }
            res.put("success",false);
            res.put("error","Invalid Credentials");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
        } catch (Exception e) {
            res.put("success",false);
            res.put("message","Admin Not Found");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(res);
        }
    }

    @PostMapping("/volunteer")
    private ResponseEntity<?> volunteerLogin(@RequestBody VolunteerLoginDto volunteer) {
        HashMap<String, Object> res = new HashMap<>();
        try {
            if (volunteer.getEmail().isEmpty() && volunteer.getPassword().isEmpty()) {
                res.put("msg", "please enter the details");
            }
            Volunteers volunteers = volunteersService.volunteerLogin(volunteer.getEmail(), volunteer.getPassword());
            if (volunteers != null)
            {
                res.put("success",true);
                res.put("msg", "Volunteer Login successful");
                res.put("volunteer",volunteers);
                return ResponseEntity.ok(res);
            }
            res.put("success",false);
            res.put("error", "Invalid credentials");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("error", "Unauthorized Request");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(res);
        }
    }

    @PostMapping("/user")
    private ResponseEntity<?> volunteerLogin(@RequestBody UserLoginDto user) {
        HashMap<String, Object> res = new HashMap<>();
        try {
            if (user.getEmail().isEmpty() && user.getPassword().isEmpty()) {
                res.put("msg", "please enter the details");
            }

            Users users = userService.userLogin(user.getEmail(), user.getPassword());

            if (users != null)
            {
                res.put("success",true);
                res.put("msg", "User Login successful");
                res.put("user", users);
                return ResponseEntity.ok(res);
            }
            res.put("success",false);
            res.put("error", "Invalid credentials");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
        } catch (Exception e) {
            res.put("success", false);
            res.put("error", "Unauthorized Request");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(res);
        }
    }

    @PostMapping("/village")
    private ResponseEntity<?> villageLogin(@RequestBody HashMap<String,String> village) {
        HashMap<String, Object> res = new HashMap<>();
        try {

            String email = village.get("email");
            String password = village.get("password");

            if (email.isEmpty() && password.isEmpty()) {
                res.put("msg", "please enter the details");
            }

            Village village1 = villageService.villageLogin(email,password);

            if (village1 != null)
            {
                res.put("success",true);
                res.put("msg", "Village Login successful");
                res.put("village", village1);
                return ResponseEntity.ok(res);
            }
            res.put("success",false);
            res.put("error", "Invalid credentials");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
        } catch (Exception e) {
            res.put("success", false);
            res.put("error", "Unauthorized Request");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(res);
        }
    }
}
