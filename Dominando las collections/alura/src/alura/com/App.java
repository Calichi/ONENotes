package alura.com;

import java.util.ArrayList;
import alura.com.model.Course;

public class App {
    public static void main(String[] args) throws Exception {
        ArrayList<Course> courses = new ArrayList<Course>();
        courses.add(new Course("Historia", 30));
        courses.add(new Course("Algebra", 10));
        courses.add(new Course("Aritmetica", 20));
        courses.add(new Course("Geometria", 50));

        int time = 0;
        for(Course course : courses) {
            time += course.getTime();
        }

        System.out.println(time);

        //stream

        System.out.println(
            courses
                .stream()
                .filter(course -> !course.getName().equalsIgnoreCase("Historia"))
                .mapToInt(Course::getTime)
                .max()
                .getAsInt()
        );
    }
}