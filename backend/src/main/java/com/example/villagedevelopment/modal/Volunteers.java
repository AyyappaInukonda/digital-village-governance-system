package com.example.villagedevelopment.modal;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Volunteers {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String confirmPassword;
    private String education;
    private String mobileNumber;
    private String address;
    private String image;

    @ManyToOne
    @JoinColumn(name = "village_id")
    private Village village;

}
