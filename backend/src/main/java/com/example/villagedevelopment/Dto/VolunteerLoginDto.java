package com.example.villagedevelopment.Dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Getter
@Setter
public class VolunteerLoginDto {


    private String email;
    private String password;

    public VolunteerLoginDto(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
