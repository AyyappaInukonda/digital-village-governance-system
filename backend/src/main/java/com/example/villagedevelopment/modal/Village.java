package com.example.villagedevelopment.modal;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Village
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String district;
    private Integer pinCode;
    private Double area;
    private String majorProfession;
    private String location;
    private String tehsil;
    private String state;
    private Integer population;
    private String famous;
    private String majorCrop;
    private String nearestMarket;
    @ElementCollection
    private List<String> images;
}
