package vipe.demo.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vipe.demo.domain.Student;
import vipe.demo.exception.SmsException;
import vipe.demo.service.StudentService;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Student> saveStudent(@RequestBody Student student) throws SmsException {
        return new ResponseEntity(studentService.save(student), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteStudent(@PathVariable("id") Long studentId) throws SmsException {
        studentService.delete(studentId);
        return new ResponseEntity(null, HttpStatus.OK);
    }

    @ExceptionHandler(SmsException.class)
    public ResponseEntity<ErrorResponse> exceptionHandler(Exception ex) {
        ErrorResponse error = new ErrorResponse();
        error.setErrorCode(HttpStatus.BAD_REQUEST.value());
        error.setMessage(ex.getMessage());
        return new ResponseEntity(error, HttpStatus.BAD_REQUEST);
    }

}