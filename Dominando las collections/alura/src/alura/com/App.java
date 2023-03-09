package alura.com;

import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.List;
import java.util.Map;

import alura.com.model.Course;

public class App {
    public static void main(String[] args) throws Exception {
        ArrayList<Course> courses = new ArrayList<Course>();
        courses.add(new Course("Historia", 30));
        courses.add(new Course("Algebra", 10));
        courses.add(new Course("Aritmetica", 20));
        courses.add(new Course("Geometria", 50));
        courses.add(new Course("Fisica", 60));
        courses.add(new Course("Quimica", 80));
        courses.add(new Course("Quimica", 70));
        courses.add(new Course("Fisica", 30));

        //stream

        System.out.println(
            courses
                .stream()
                .filter(course -> !course.getName().equalsIgnoreCase("Historia"))
                .mapToInt(Course::getTime)
                .max()
                .getAsInt()
        );

        System.out.println(
            courses
                .stream()
                .mapToInt(Course::getTime)
                .average()
                .getAsDouble()
        );

        System.out.println(
            courses
                .stream()
                .mapToInt(Course::getTime)
                .max()
                .getAsInt()
        );

        System.out.println(
            courses
                .stream()
                .mapToInt(Course::getTime)
                .min()
                .getAsInt()
        );

        Map<String, List<Course>> courseGroup = courses
            .stream()
            .collect(Collectors.groupingBy(Course::getName));

        courseGroup.forEach((key, value) -> System.out.println(key + " : " + value.size()));

        System.out.println(
            courses
                .parallelStream()
                .mapToInt(Course::getTime)
                .sum()
        );
    }
}