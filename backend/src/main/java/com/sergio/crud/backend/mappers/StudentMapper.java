package com.sergio.crud.backend.mappers;

import com.sergio.crud.backend.dtos.StudentDto;
import com.sergio.crud.backend.entities.Student;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface StudentMapper {

    Student toStudent(StudentDto studentDto);

    StudentDto toStudentDto(Student student);

    List<StudentDto> toStudentDtos(List<Student> students);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "created", ignore = true)
    @Mapping(target = "modified", ignore = true)
    void updateStudentFromDto(StudentDto studentDto, @MappingTarget Student student);
}