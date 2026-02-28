package com.example.villagedevelopment.Controller;

import com.example.villagedevelopment.Service.IProblemService;
import com.example.villagedevelopment.Service.IUserService;
import com.example.villagedevelopment.Service.IVillageService;
import com.example.villagedevelopment.Service.IVolunteersService;
import com.example.villagedevelopment.modal.Problem;
import com.example.villagedevelopment.modal.Users;
import com.example.villagedevelopment.modal.Village;
import com.example.villagedevelopment.modal.Volunteers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/problem")
@CrossOrigin("*")
public class ProblemController
{
    @Autowired
    private IProblemService service;

    @Autowired
    private IUserService userService;

    @Autowired
    private IVillageService villageService;

    @Autowired
    private IVolunteersService volunteersService;

    @PostMapping("/add/{userId}/{volunteerId}")
    private ResponseEntity<?> addProblem(@PathVariable Long userId,@PathVariable Long volunteerId,
                                         @RequestParam String title, @RequestParam String description,
                                         @RequestParam("images") List<MultipartFile> images)
    {
        HashMap<String, Object> res = new HashMap<>();
        try {
            Users users = userService.getUserById(userId);
            if (users == null) {
                res.put("success", false);
                res.put("msg", "User not found for provided id: " + userId);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
            }

            Volunteers volunteers = volunteersService.findByVolunteerId(volunteerId);
            if (volunteers == null) {
                res.put("success", false);
                res.put("msg", "Volunteer is not found for provided id: " + volunteerId);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
            }

            Village village = villageService.getVillageById(volunteers.getVillage().getId());
            if (village == null) {
                res.put("success", false);
                res.put("msg", "Village not found for provided id: " + volunteers.getVillage().getId());
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
            }

            // Create the directory if it does not exist
            String filepath = Paths.get("").toAbsolutePath().toString();
            Path imageDirPath = Paths.get(filepath, "src", "main", "resources", "static", "images");
            if (!Files.exists(imageDirPath)) {
                Files.createDirectories(imageDirPath);
            }

            List<String> imageUrls = new ArrayList<>();
            for (MultipartFile image : images) {
                String imageFilename = image.getOriginalFilename();
                assert imageFilename != null;
                Path imageFilePath = imageDirPath.resolve(imageFilename);
                image.transferTo(imageFilePath.toFile());
                String imageUrl = "http://localhost:8081/images/" + imageFilename;
                imageUrls.add(imageUrl);
            }

            Problem problem = Problem.builder()
                    .title(title)
                    .description(description)
                    .village(village)
                    .user(users)
                    .volunteers(volunteers)
                    .date(LocalDate.now())
                    .images(imageUrls)
                    .build();

            service.addProblem(problem);

            res.put("success", true);
            res.put("msg", "Problem added successfully.");
            res.put("problem", problem);
            return ResponseEntity.status(HttpStatus.CREATED).body(res);

        } catch (Exception e) {
            res.put("success", false);
            res.put("msg", "Error occurred: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping
    private ResponseEntity<?> getAllProblems()
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            List<Problem> problems = service.getAllProblems();
            res.put("success",true);
            res.put("problem",problems);
            return ResponseEntity.ok(problems);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to fetch the problems");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping("/{userId}")
    private ResponseEntity<?> getProblemByUserId(@PathVariable Long userId) {
        HashMap<String, Object> res = new HashMap<>();
        try {
            List<Problem> problems = service.getAllProblemByUserId(userId);
            res.put("success", true);
            res.put("problem", problems);
            return ResponseEntity.ok(problems);
        } catch (Exception e) {
            res.put("success", false);
            res.put("msg", "Failed to fetch the problems for provided user id is"+userId);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping("/get/{volunteerId}")
    private ResponseEntity<?> getProblemByVolunteerId(@PathVariable Long volunteerId) {
        HashMap<String, Object> res = new HashMap<>();
        try {
            List<Problem> problems = service.getAllProblemByVolunteerId(volunteerId);
            res.put("success", true);
            res.put("problem", problems);
            return ResponseEntity.ok(problems);
        } catch (Exception e) {
            res.put("success", false);
            res.put("msg", "Failed to fetch the problems by provided volunteer Id is "+ volunteerId);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping("/get/village/{villageId}")
    private ResponseEntity<?> getProblemByVillageId(@PathVariable Long villageId) {
        HashMap<String, Object> res = new HashMap<>();
        try {
            List<Problem> problems = service.getAllProblemByVillageId(villageId);
            res.put("success", true);
            res.put("problem", problems);
            return ResponseEntity.ok(problems);
        } catch (Exception e) {
            res.put("success", false);
            res.put("msg", "Failed to fetch the problems for provided village id is"+villageId);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @PostMapping("/reply/{problemId}")
    private ResponseEntity<?> sendReplies(@PathVariable Long problemId,@RequestParam String reply)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            Problem problem = service.getProblemById(problemId);
            if (problem == null)
            {
                res.put("success",false);
                res.put("error","Problem is not found for provided id is"+problemId);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
            }

            problem.getReplies().add(reply);
            service.addProblem(problem);

            res.put("success",true);
            res.put("msg","Reply successfully provided by volunteer is "+problem.getVolunteers().getName());
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Reply is not recorded");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<?> deleteProblemById(@PathVariable Long id)
    {
        HashMap<String,Object> res = new HashMap<>();
        try {
            service.deleteProblemById(id);
            res.put("success",true);
            res.put("msg","Problem Deleted Successfully");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success", true);
            res.put("msg","Failed to delete the problem by provided id is"+id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }
}
