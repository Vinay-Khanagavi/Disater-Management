package com.sergio.crud.backend.mappers;

import com.sergio.crud.backend.dtos.DisasterEventDto;
import com.sergio.crud.backend.entities.DisasterEvent;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;

@Mapper(componentModel = "spring")
public interface DisasterEventMapper {

    // Correct mapping in toDisasterEvent
    @Mapping(target = "type", source = "type")
    @Mapping(target = "name", source = "name")
    DisasterEvent toDisasterEvent(DisasterEventDto disasterEventDto);

    // Correct mapping in toDisasterEventDto
    @Mapping(target = "type", source = "type") // Removed incorrect mapping
    DisasterEventDto toDisasterEventDto(DisasterEvent disasterEvent);

    List<DisasterEventDto> toDisasterEventDtos(List<DisasterEvent> disasterEvents);

    // Corrected mapping in updateDisasterEventFromDto
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "created", ignore = true)
    @Mapping(target = "modified", ignore = true)
    @Mapping(target = "date", source = "date", dateFormat = "yyyy-MM-dd")
    void updateDisasterEventFromDto(DisasterEventDto disasterEventDto, @MappingTarget DisasterEvent disasterEvent);

    // Custom Method to handle Date to LocalDateTime conversion
    default LocalDateTime mapDateToLocalDateTime(LocalDate date) {
        return date.atStartOfDay(ZoneId.systemDefault()).toLocalDateTime();
    }

    // Custom Method to handle LocalDateTime to Date conversion
    default LocalDate mapLocalDateTimeToDate(LocalDateTime dateTime) {
        return dateTime.toLocalDate();
    }
}