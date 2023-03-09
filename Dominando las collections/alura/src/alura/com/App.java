package alura.com;

import java.util.Collection;
import java.util.Comparator;
import java.util.HashSet;

public class App {
    public static void main(String[] args) throws Exception {

        Collection<String> students = new HashSet<>();
        students.add("Luis Miguel");
        students.add("Pepito los palotes");
        students.add("Juan Carlos");
        students.add("Gustavo Sanchez");
        students.add("Pedro Pedrito");
        students.add("Marcia Maria");
        students.add("Marcia Maria");
        students.add("Gustavo Sanchez");

        System.out.println(
            students
                .stream()
                .max(Comparator.comparingInt(String::length))
                .get()
                .length()
        );

        System.out.println(students.contains("Pedro Pedrito"));

        students.removeIf(
            student -> "Pedro Pedrito".equalsIgnoreCase(student)
        );

        students.forEach(
            student -> System.out.println(student)
        );
    }
}