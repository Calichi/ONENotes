package mx.alura.com;

public class Course /*implements Comparable<Course>*/ {
  
  private String name;
  private int time;
  
  public Course(String name, int time) {
    this.name = name;
    this.time = time;
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
