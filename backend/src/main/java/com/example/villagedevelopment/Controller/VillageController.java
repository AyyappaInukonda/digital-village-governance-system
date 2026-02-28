package com.example.villagedevelopment.Controller;

import com.example.villagedevelopment.Service.IVillageService;
import com.example.villagedevelopment.modal.Village;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/village")
@CrossOrigin("*")
public class VillageController
{
    @Autowired
    private IVillageService service;

    @PostMapping
    public ResponseEntity<?> addVillage(@RequestParam("name") String name,
                                        @RequestParam("email") String email,
                                        @RequestParam("password") String password,
                                        @RequestParam("district") String district,
                                        @RequestParam("pinCode") Integer pinCode,
                                        @RequestParam("area") Double area,
                                        @RequestParam("majorProfession") String majorProfession,
                                        @RequestParam("location") String location,
                                        @RequestParam("tehsil") String tehsil,
                                        @RequestParam("state") String state,
                                        @RequestParam("population") Integer population,
                                        @RequestParam("famous") String famous,
                                        @RequestParam("majorCrop") String majorCrop,
                                        @RequestParam("nearestMarket") String nearestMarket,
                                        @RequestParam("images") List<MultipartFile> images) {
        HashMap<String, Object> res = new HashMap<>();
        try {
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

            Village village = Village.builder()
                    .name(name)
                    .email(email)
                    .password(password)
                    .district(district)
                    .pinCode(pinCode)
                    .area(area)
                    .majorProfession(majorProfession)
                    .location(location)
                    .tehsil(tehsil)
                    .state(state)
                    .population(population)
                    .majorCrop(majorCrop)
                    .famous(famous)
                    .nearestMarket(nearestMarket)
                    .images(imageUrls)
                    .build();

            service.addVillage(village);
            res.put("success", true);
            res.put("msg", "Village Added Successfully");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        } catch (Exception e) {
            res.put("success", false);
            res.put("msg", "Failed to add the villages");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping
    private ResponseEntity<?> getAllVillages()
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            List<Village> villages = service.getAllVillages();
            res.put("success",true);
            res.put("villages",villages);
            return ResponseEntity.ok(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to fetch the available villages");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<?> deleteVillageById(@PathVariable Long id)
    {
        HashMap<String,Object> res = new HashMap<>();
        try
        {
            service.deleteVillageById(id);
            res.put("success",true);
            res.put("msg","Village deleted Successfully");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        }
        catch (Exception e)
        {
            res.put("success",false);
            res.put("msg","Failed to delete the village by provided id is"+id);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }
}
