package com.sergio.crud.backend.services;

import com.sergio.crud.backend.dtos.DisasterEventDto;
import com.sergio.crud.backend.entities.DisasterEvent;
import com.sergio.crud.backend.exceptions.AppException;
import com.sergio.crud.backend.mappers.DisasterEventMapper;
import com.sergio.crud.backend.repositories.DisasterEventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DisasterEventService {

    private final DisasterEventRepository disasterEventRepository;
    private final DisasterEventMapper disasterEventMapper;

    public List<DisasterEventDto> getAllDisasterEvents() {
        return disasterEventMapper.toDisasterEventDtos(disasterEventRepository.findAll());
    }

    public DisasterEventDto createDisasterEvent(DisasterEventDto disasterEventDto) {
        DisasterEvent disasterEvent = disasterEventMapper.toDisasterEvent(disasterEventDto);
        DisasterEvent savedEvent = disasterEventRepository.save(disasterEvent);
        return disasterEventMapper.toDisasterEventDto(savedEvent);
    }

    public DisasterEventDto getDisasterEvent(Long id) {
        DisasterEvent event = disasterEventRepository.findById(id)
                .orElseThrow(() -> new AppException("Disaster event not found", HttpStatus.NOT_FOUND));
        return disasterEventMapper.toDisasterEventDto(event);
    }

    public DisasterEventDto updateDisasterEvent(Long id, DisasterEventDto eventDto) {
        DisasterEvent event = disasterEventRepository.findById(id)
                .orElseThrow(() -> new AppException("Disaster event not found", HttpStatus.NOT_FOUND));

        disasterEventMapper.updateDisasterEventFromDto(eventDto, event); // Use MapStruct for updating

        DisasterEvent savedEvent = disasterEventRepository.save(event);
        return disasterEventMapper.toDisasterEventDto(savedEvent);
    }

    public DisasterEventDto partiallyUpdateDisasterEvent(Long id, DisasterEventDto eventDto) {
        return disasterEventRepository.findById(id)
                .map(existingEvent -> {
                    if (eventDto.getType() != null) {
                        existingEvent.setType(eventDto.getType());
                    }
                    if (eventDto.getAddress() != null) {
                        existingEvent.setAddress(eventDto.getAddress());
                    }
                    if (eventDto.getDate() != null) {
                        existingEvent.setDate(eventDto.getDate()); // Assign directly (both are LocalDate)
                    }
                    if (eventDto.getSeverityLevel() != null) {
                        existingEvent.setSeverityLevel(eventDto.getSeverityLevel());
                    }
                    if (eventDto.getDescription() != null) {
                        existingEvent.setDescription(eventDto.getDescription());
                    }
                    return disasterEventMapper.toDisasterEventDto(disasterEventRepository.save(existingEvent));
                })
                .orElseThrow(() -> new AppException("Disaster event not found", HttpStatus.NOT_FOUND));
    }

    public void deleteDisasterEvent(Long id) {
        disasterEventRepository.deleteById(id);
    }
}
