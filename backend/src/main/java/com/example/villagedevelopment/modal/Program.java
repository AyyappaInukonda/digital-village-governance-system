package com.example.villagedevelopment.modal;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Builder
public class Program {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String programName;
    private String startDate;
    private String endDate;
    private String description;
    @ManyToOne
    @JoinColumn(name = "volunteer")
    private Volunteers volunteer;

    @OneToOne
    private Village village;

    @ElementCollection
    private List<String> images;
}
