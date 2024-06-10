package com.sergio.crud.backend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "disaster_event")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)

public class DisasterEvent {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // Assuming ID is a Long in your database

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private String address; // Use address to match frontend

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private String severityLevel;

    @Column(length = 1000)
    private String description;

    @CreatedDate
    private LocalDateTime created;

    @LastModifiedDate
    private LocalDateTime modified;
}
