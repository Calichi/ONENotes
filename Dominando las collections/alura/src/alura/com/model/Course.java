package alura.com.model;

import java.util.LinkedList;
import java.util.List;

public class Course /*implements Comparable<Course>*/ {
  
  private String name;
  private int time;
  private List<Module> modules = new LinkedList<>();
  
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
    return modules;
  }

  public void setModules(List<Module> modules) {
    this.modules = modules;
  }

  public void addModule(Module m) {
    this.modules.add(m);
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

  /*@Override
  public int compareTo(Course o) {
    return this.name.compareTo(o.getName());
  }*/
}
