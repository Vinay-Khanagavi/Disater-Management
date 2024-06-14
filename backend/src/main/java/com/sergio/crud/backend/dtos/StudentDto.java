package com.sergio.crud.backend.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StudentDto {

    private Long id;

    @NotBlank(message = "Student name is mandatory")
    private String name;

    @NotBlank(message = "Roll number is mandatory")
    private String rollNumber;

    @NotBlank(message = "Department is mandatory")
    private String department;

    @NotBlank(message = "Batch is mandatory")
    private String batch;

    @NotNull(message = "Date of Joining is mandatory")
    private Date dateOfJoining;

    @NotBlank(message = "Contact Info is mandatory")
    private String contactInfo;

    @NotNull(message = "Total attendance is required") // Correct validation for Integer
    private Integer totalAttendance;

    @Email(message = "Please provide a valid email address")
    private String email;

    public int getTotalAttendance() {
        return this.totalAttendance;
    }
}