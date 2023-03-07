public class CurrentAccount extends Account {

  public CurrentAccount(int agency) {
    super(agency);
  }

  @Override
  public void transferir(double valor, Account target) throws InsufficientBalanceException {
    super.transferir(valor*1.02, target);
  }

  @Override
  public void depositar(double value) {
    this.balance += value;
  }
  
}
