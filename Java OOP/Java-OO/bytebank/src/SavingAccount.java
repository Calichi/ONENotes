public class SavingAccount extends Account {

  public SavingAccount(int agency) {
    super(agency);
  }

  @Override
  public void depositar(double value) {
    this.balance += value;
  }
  
}
