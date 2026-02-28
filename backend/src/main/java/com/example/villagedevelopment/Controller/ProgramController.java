package com.example.villagedevelopment.Controller;


import com.example.villagedevelopment.Service.IProgramService;
import com.example.villagedevelopment.Service.IVillageService;
import com.example.villagedevelopment.Service.IVolunteersService;
import com.example.villagedevelopment.modal.Program;
import com.example.villagedevelopment.modal.Village;
import com.example.villagedevelopment.modal.Volunteers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/programs")
@CrossOrigin("*")
public class ProgramController
{
    @Autowired
    private IProgramService service;

    @Autowired
    private IVolunteersService volunteersService;

    @Autowired
    private IVillageService villageService;

    @PostMapping("/add/{volunteerId}/{villageId}")
    private ResponseEntity<?> addProgramsToVillage(@PathVariable Long volunteerId,
                                                   @PathVariable Long villageId,
                                                   String programName,
                                                   String startDate,
                                                   String endDate,
                                                   List<MultipartFile> images,
                                                   String description) throws IOException {
        HashMap<String, Object> res = new HashMap<>();
        try
        {
            Volunteers volunteer = volunteersService.findByVolunteerId(volunteerId);
            if (volunteer == null)
            {
                res.put("success",false);
                res.put("msg","Volunteer is not found for provided id is"+volunteerId);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
            }

            Village village = villageService.getVillageById(villageId);
            if (village == null)
            {
                res.put("success",true);
                res.put("msg","Volunteer is not found for provided id is"+volunteerId);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res);
            }

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

            Program program = Program.builder()
                    .volunteer(volunteer)
                    .village(village)
                    .programName(programName)
                    .description(description)
                    .startDate(startDate)
                    .endDate(endDate)
                    .images(imageUrls)
                    .build();

            service.addProgram(program);
            res.put("success",true);
            res.put("msg","Program Added Successfully");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("error","Failed to add the program");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping
    private ResponseEntity<?> getAllPrograms()
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            List<Program> programs = service.getAllPrograms();
            res.put("success",true);
            res.put("programs",programs);
            return ResponseEntity.ok(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to fetch the available programs");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping("/{volunteerId}")
    private ResponseEntity<?> getProgramsByVolunteerId(@PathVariable Long volunteerId)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            List<Program> programs = service.getProgramByVolunteer(volunteerId);
            res.put("success",true);
            res.put("programs",programs);
            return ResponseEntity.ok(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to fetch the available programs by volunteer id"+ volunteerId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }

    @GetMapping("/get/{villageId}")
    private ResponseEntity<?> getProgramsByVillageId(@PathVariable Long villageId)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            List<Program> programs = service.getProgramByVillage(villageId);
            res.put("success",true);
            res.put("programs",programs);
            return ResponseEntity.ok(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to fetch the available programs by volunteer id"+ villageId);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<?> deleteProgramById(@PathVariable Long id)
    {
        HashMap<String ,Object> res = new HashMap<>();
        try
        {
            service.deleteProgramById(id);
            res.put("success",true);
            res.put("msg","Program Deleted successfully");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("error","Program is not found for provided id is"+id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
        }
    }
}
