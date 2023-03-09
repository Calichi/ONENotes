package alura.com.model;

public class Student {

  private String name;
  private String code;

  public Student(String name, String code) {
    this.name = name;
    this.code = code;
  }

  public String getName() {
    return name;
  }

  public String getCode() {
    return code;
  }

  @Override
  public int hashCode() {
    return name.hashCode();
  }

  @Override
  public boolean equals(Object obj) {
    if(obj == null || obj.getClass() != this.getClass()) return false;

    Student other = (Student)obj;
    return name.equals(other.name);
  }

}
