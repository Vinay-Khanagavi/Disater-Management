package com.sergio.crud.backend.controllers;

import com.sergio.crud.backend.dtos.DisasterEventDto;
import com.sergio.crud.backend.services.DisasterEventService; // Update the service
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/disaster-events") // Change the base path
@RequiredArgsConstructor
public class DisasterEventController {

    private final DisasterEventService disasterEventService; // Use the updated service

    @GetMapping
    public ResponseEntity<List<DisasterEventDto>> getAllDisasterEvents() {
        return ResponseEntity.ok(disasterEventService.getAllDisasterEvents());
    }

    @PostMapping
    public ResponseEntity<DisasterEventDto> createDisasterEvent(@Valid @RequestBody DisasterEventDto eventDto) {
        DisasterEventDto createdEvent = disasterEventService.createDisasterEvent(eventDto);
        return ResponseEntity.created(URI.create("/api/disaster-events/" + createdEvent.getId())).body(createdEvent);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DisasterEventDto> getDisasterEvent(@PathVariable Long id) {
        return ResponseEntity.ok(disasterEventService.getDisasterEvent(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DisasterEventDto> updateDisasterEvent(@PathVariable Long id, @Valid @RequestBody DisasterEventDto eventDto) {
        return ResponseEntity.ok(disasterEventService.updateDisasterEvent(id, eventDto));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<DisasterEventDto> partiallyUpdateDisasterEvent(@PathVariable Long id, @RequestBody DisasterEventDto eventDto) {
        return ResponseEntity.ok(disasterEventService.partiallyUpdateDisasterEvent(id, eventDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDisasterEvent(@PathVariable Long id) {
        disasterEventService.deleteDisasterEvent(id);
        return ResponseEntity.noContent().build();
    }
}
