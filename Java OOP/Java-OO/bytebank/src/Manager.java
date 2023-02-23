public class Manager extends Funcionario {

  private String key;

  public String getKey() {
    return this.key;
  }

  public void setKey(String key) {
    this.key = key;
  }

  public boolean login(String key) {
    return this.key == key;
  }

  @Override
  public double getBonus() {
    return this.getSalary();
  }

}
