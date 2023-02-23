public class Manager extends Funcionario {

  @Override
  public double getBonus() {
    return this.getSalary() * 2;
  }
  
}
