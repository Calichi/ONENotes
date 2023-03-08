package alura.com;

import java.util.ArrayList;
import alura.com.model.Module;
import alura.com.model.Course;

public class App {
    public static void main(String[] args) throws Exception {
        ArrayList<Course> list = new ArrayList<Course>();
        Course course = new Course("Java", 30);
        course.addModule(new Module("ArrayList"));
        course.addModule(new Module("LinkedList"));
        course.addModule(new Module("List"));

        list.add(course);

        System.out.println(list.get(0).getModules());
    }
}
