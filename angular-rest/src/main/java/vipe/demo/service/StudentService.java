package vipe.demo.service;


import vipe.demo.domain.Student;
import vipe.demo.exception.SmsException;

import java.util.List;

public interface StudentService {

    List<Student> getAllStudents();

    Student save(Student student) throws SmsException;

    void delete(Long id);
}
