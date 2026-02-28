package com.example.villagedevelopment.modal;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Problem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;

    @ElementCollection
    private List<String> images;

    @ManyToOne
    @JoinColumn(name = "village_id")
    private Village village;

    @ManyToOne
    @JoinColumn(name = "volunteers_id")
    private Volunteers volunteers;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;

    private LocalDate date;

    @ElementCollection
    private List<String> replies;

}
