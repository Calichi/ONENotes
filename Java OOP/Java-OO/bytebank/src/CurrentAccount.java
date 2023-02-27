public class CurrentAccount extends Account {

  public CurrentAccount(int agency) {
    super(agency);
  }

  @Override
  public boolean transferir(double valor, Account target) {
    return super.transferir(valor*1.02, target);
  }

  @Override
  public void depositar(double value) {
    this.balance += value;
  }
  
}
