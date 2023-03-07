public class Manager extends Funcionario implements Authenticatable {

  private String key;

  public double getBonus() {
    return 2000;//this.getSalary() * 1.05;
  }

  @Override
  public void setKey(String key) {
    this.key = key;
  }

  @Override
  public boolean login(String key) {
    return this.key == key;
  }

}
