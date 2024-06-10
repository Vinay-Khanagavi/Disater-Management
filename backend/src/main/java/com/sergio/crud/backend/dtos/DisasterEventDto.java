package com.sergio.crud.backend.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import java.util.Date;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DisasterEventDto {

    private Long id;
    @NotNull(message = "Disaster name is mandatory")
    private String name;

    @NotNull(message = "Disaster type is mandatory")
    private String type;

    @NotNull(message = "Address is mandatory")
    private String address;

    @NotNull(message = "Date is mandatory")
    private LocalDate date;

    @NotNull(message = "Severity level is mandatory")
    private String severityLevel;

    private String description;
}
