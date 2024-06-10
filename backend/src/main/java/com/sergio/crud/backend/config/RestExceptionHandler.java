package com.sergio.crud.backend.config;

import com.sergio.crud.backend.dtos.ErrorDto;
import com.sergio.crud.backend.exceptions.AppException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(AppException.class) // You might want to create specific exceptions for Disaster Events
    @ResponseBody
    public ResponseEntity<ErrorDto> handleAppException(AppException ex) {
        return ResponseEntity
                .status(ex.getStatus())
                .body(new ErrorDto(ex.getMessage()));
    }
}
