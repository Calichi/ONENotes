package alura.com;

/*import java.util.ArrayList;
import java.util.Collection;*/

import alura.com.model.Course;
import alura.com.model.Student;

public class App {
    public static void main(String[] args) throws Exception {

        //Collection<Student> students = new ArrayList<>();
        Course course = new Course("Historia", 30);
        Student newStudent = new Student("Luis Miguel", "001");

        course.addStudent(new Student("Luis Miguel", "001"));
        course.addStudent(new Student("Pepito los palotes", "002"));
        course.addStudent(new Student("Juan Carlos", "003"));
        course.addStudent(new Student("Gustavo Sanchez", "004"));
        course.addStudent(new Student("Pedro Pedrito", "005"));
        course.addStudent(new Student("Marcia Maria", "006"));
        course.addStudent(new Student("Claudia Patricia", "007"));
        
        System.out.println(course.studentContains(newStudent));
    }
}