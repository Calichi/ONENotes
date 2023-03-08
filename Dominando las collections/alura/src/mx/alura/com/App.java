package mx.alura.com;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class App {
    public static void main(String[] args) throws Exception {
        ArrayList<Course> list = new ArrayList<Course>();
        
        list.add(new Course("Java", 30));
        list.add(new Course("JavaScript", 10));
        list.add(new Course("HTML", 20));
        list.add(new Course("CSS", 50));

        System.out.println(list);
        //Collections.sort(list);
        //Collections.sort(list, Collections.reverseOrder());
        list.sort(Comparator.comparing(Course::getName));
        Collections.sort(list, Comparator.comparing(Course::getName).reversed());
        List<Course> newList = list.stream().filter(item -> !item.getName().equalsIgnoreCase("CSS")).sorted(Comparator.comparing(Course::getTime)).collect(Collectors.toList());
        System.out.println(list);
        System.out.println(newList);
    }
}
