package alura.com;

import java.util.HashSet;
import java.util.Set;

public class App {
    public static void main(String[] args) throws Exception {

        Set<String> students = new HashSet<>();
        students.add("Luis Miguel");
        students.add("Pepito los palotes");
        students.add("Juan Carlos");
        students.add("Pedro Pedrito");
        students.add("Marcia Maria");

        for(String student : students) {
            System.out.println(student);
        }
    }
}