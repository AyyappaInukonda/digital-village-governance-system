package com.example.villagedevelopment.modal;

import lombok.*;

import javax.management.relation.Role;
import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Users  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String confirmPassword;
    private String mobileNumber;
    private String address;
    private String image;

    @ManyToOne
    @JoinColumn(name = "volunteers_id")
    private Volunteers volunteers;
}

