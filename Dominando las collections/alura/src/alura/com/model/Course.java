package alura.com.model;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class Course {
  
  private String name;
  private int time;
  private List<Module> modules = new LinkedList<>();
  private Collection<Student> students = new LinkedHashSet<Student>();
  private Map<String, Student> studentsMap = new HashMap<>();

  public Course(String name, int time, List<Module> modules) {
    this.name = name;
    this.time = time;
    this.modules = modules;
  }

  public Course(String name, int time) {
    this.name = name;
    this.time = time;
  }

  public List<Module> getModules() {
    return Collections.unmodifiableList(modules);
  }

  public void setModules(List<Module> modules) {
    this.modules = modules;
  }

  public void addModule(Module m) {
    this.modules.add(m);
  }

  public void addStudent(Student student) {
    students.add(student);
    studentsMap.put(student.getCode(), student);
  }

  public boolean studentContains(Student student) {
    return students.contains(student);
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getTime() {
    return time;
  }

  public void setTime(int time) {
    this.time = time;
  }

  @Override
  public String toString() {
    return "Course [name=" + name + "]";
  }

  public Collection<Student> getStudents() {
    return students;
  }

  public Map<String, Student> getStudentsMap() {
    return studentsMap;
  }
}
