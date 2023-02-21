public class Account {

  private double balance;
  int agency;
  int number;
  Client titular = new Client();

  public void depositar(double value) {
    this.balance += value;
  }

  public boolean retirar(double value) {
    boolean balanceStatus = value <= this.balance;

    if(balanceStatus) {
      this.balance -= value;
    }

    return balanceStatus;
  }

  public boolean transferir(double value, Account account) {
    boolean feasibleOperation = this.balance >= value;
    if(feasibleOperation) {
      this.balance -= value;
      account.depositar(value);
    }

    return feasibleOperation;
  }

  public void print() {
    print("Titular", this.titular.name);
    print("Agency", this.agency);
    print("Number", this.number);
    print("Balance", this.balance);
  }

  private void print(String attribute, Object value) {
    System.out.printf("%1s: %2s", attribute, value);
    System.out.println();
  }

}
