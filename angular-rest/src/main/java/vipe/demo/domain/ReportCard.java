package vipe.demo.domain;

import javax.persistence.*;

@Entity
@Table(name = "report")
public class ReportCard {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String year;

    @Column
    private Long averageMark;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="student_id")
    private Student student;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public Long getAverageMark() {
        return averageMark;
    }

    public void setAverageMark(Long averageMark) {
        this.averageMark = averageMark;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
}
