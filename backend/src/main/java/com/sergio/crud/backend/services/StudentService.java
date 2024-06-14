package com.sergio.crud.backend.services;

import com.sergio.crud.backend.dtos.StudentDto;
import com.sergio.crud.backend.entities.Student;
import com.sergio.crud.backend.exceptions.AppException;
import com.sergio.crud.backend.mappers.StudentMapper;
import com.sergio.crud.backend.repositories.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor // This will handle creating the constructor
public class StudentService {

    private final StudentRepository studentRepository;
    private final StudentMapper studentMapper;

    // *** REMOVE ANY OTHER CONSTRUCTORS FROM THIS CLASS ***

    public List<StudentDto> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        return studentMapper.toStudentDtos(students);
    }

    public StudentDto createStudent(StudentDto studentDto) {
        Student student = studentMapper.toStudent(studentDto);
        Student savedStudent = studentRepository.save(student);
        return studentMapper.toStudentDto(savedStudent);
    }

    public StudentDto getStudentById(Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new AppException("Student not found", HttpStatus.NOT_FOUND));
        return studentMapper.toStudentDto(student);
    }

    public StudentDto updateStudent(Long id, StudentDto studentDto) {
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new AppException("Student not found", HttpStatus.NOT_FOUND));

        studentMapper.updateStudentFromDto(studentDto, existingStudent);
        Student updatedStudent = studentRepository.save(existingStudent);
        return studentMapper.toStudentDto(updatedStudent);
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}