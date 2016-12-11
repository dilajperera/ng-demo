package vipe.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vipe.demo.domain.ReportCard;
import vipe.demo.domain.Student;
import vipe.demo.exception.SmsException;
import vipe.demo.repository.StudentRepository;

import java.util.List;

@Service("studentService")
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student save(Student student) throws SmsException {
        try {
            ReportCard report1 = new ReportCard();
            report1.setStudent(student);
            report1.setYear("2016");
            student.getReportCards().add(report1);
            return studentRepository.save(student);
        } catch (Exception e) {
            throw new SmsException(e.getMessage(), e);
        }
    }

    @Transactional
    @Override
    public void delete(Long id) {
        Student student = studentRepository.findOne(id);
        studentRepository.delete(student);
    }

}
