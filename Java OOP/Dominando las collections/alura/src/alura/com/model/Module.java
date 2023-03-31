package alura.com.model;

public class Module {

  String name;

  public Module(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  @Override
  public String toString() {
    return "Module [name=" + name + "]";
  }
  
}
