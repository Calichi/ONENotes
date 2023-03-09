package alura.com;

import java.util.ArrayList;
import java.util.Collection;

import alura.com.model.Student;

public class App {
    public static void main(String[] args) throws Exception {

        Collection<Student> students = new ArrayList<>();

        students.add(new Student("Luis Miguel", "001"));
        students.add(new Student("Pepito los palotes", "002"));
        students.add(new Student("Juan Carlos", "003"));
        students.add(new Student("Gustavo Sanchez", "004"));
        students.add(new Student("Pedro Pedrito", "005"));
        students.add(new Student("Marcia Maria", "006"));
        students.add(new Student("Claudia Patricia", "007"));

        System.out.println();
    }
}