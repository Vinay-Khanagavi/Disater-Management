package com.sergio.crud.backend.services; // Make sure the package is correct

import com.sergio.crud.backend.dtos.StudentDto;
import com.sergio.crud.backend.entities.Student;
import com.sergio.crud.backend.mappers.StudentMapper;
import com.sergio.crud.backend.repositories.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;
    private final StudentMapper studentMapper;

    public StudentService(StudentRepository studentRepository, StudentMapper studentMapper) {
        this.studentRepository = studentRepository;
        this.studentMapper = studentMapper;
    }

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
        Optional<Student> student = studentRepository.findById(id);
        return student.map(studentMapper::toStudentDto).orElseThrow(() -> new RuntimeException("Student not found"));
    }

    public StudentDto updateStudent(Long id, StudentDto studentDto) {
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        studentMapper.updateStudentFromDto(studentDto, existingStudent);
        Student updatedStudent = studentRepository.save(existingStudent);
        return studentMapper.toStudentDto(updatedStudent);
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }
}