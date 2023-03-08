package alura.com;

import java.util.ArrayList;
import java.util.List;

import alura.com.model.Module;
import alura.com.model.Course;

public class App {
    public static void main(String[] args) throws Exception {
        ArrayList<Course> list = new ArrayList<Course>();
        Course course = new Course("Collections", 30);

        course.addModule(new Module("ArrayList"));
        course.addModule(new Module("LinkedList"));
        course.addModule(new Module("List"));
        course.addModule(new Module("Inmutable"));

        List<Module> modules = course.getModules();

        list.add(course);

        System.out.println(modules);
    }
}
