package vipe.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vipe.demo.domain.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

}
