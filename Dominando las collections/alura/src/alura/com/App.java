package alura.com;

import java.util.Collection;
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

        students.forEach(
            student -> System.out.println(student)
        );
    }
}