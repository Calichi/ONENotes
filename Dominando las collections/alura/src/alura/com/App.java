package alura.com;

import java.util.Iterator;

import alura.com.model.Course;
import alura.com.model.Student;

public class App {
    public static void main(String[] args) throws Exception {

        Course course = new Course("Historia", 30);

        course.addStudent(new Student("Luis Miguel", "001"));
        course.addStudent(new Student("Pepito los palotes", "002"));
        course.addStudent(new Student("Juan Carlos", "003"));
        course.addStudent(new Student("Gustavo Sanchez", "004"));
        course.addStudent(new Student("Pedro Pedrito", "005"));
        course.addStudent(new Student("Marcia Maria", "006"));
        course.addStudent(new Student("Claudia Patricia", "007"));

        Iterator<Student> studentIterator = course.getStudents().iterator();
        
        while(studentIterator.hasNext()) {
            System.out.println(studentIterator.next());
        }
    }
}