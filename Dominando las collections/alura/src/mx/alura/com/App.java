package mx.alura.com;

import java.util.ArrayList;

public class App {
    public static void main(String[] args) throws Exception {
        ArrayList<Course> list = new ArrayList<Course>();
        
        list.add(new Course("Geometría", 30));
        list.add(new Course("Física", 10));
        list.add(new Course("Química", 20));
        list.add(new Course("Historia", 50));

        System.out.println(list);
    }
}
