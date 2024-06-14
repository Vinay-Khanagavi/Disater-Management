package com.sergio.crud.backend.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
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
    @Pattern(regexp = "\\d+", message = "Roll number must be a number")
    private String rollNumber;

    @NotBlank(message = "Department is mandatory")
    private String department;

    @NotBlank(message = "Batch is mandatory")
    private String batch;

    @NotNull(message = "Date of Joining is mandatory")
    private Date dateOfJoining;

    @NotBlank(message = "Contact Info is mandatory")
    private String contactInfo;

    @NotBlank(message = "Total Attendance is mandatory")
    private int totalAttendance;

    @Email(message = "Please provide a valid email address")
    private String email;
}