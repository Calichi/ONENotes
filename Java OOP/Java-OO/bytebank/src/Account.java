public abstract class Account {

  private static int instances = 0;

  public static int getInstances() {
    return instances;
  }

  protected double balance;
  private int agency;
  private int number;
  private Client titular = new Client();

  public Account(int agency) {
    this.agency = this.validateAgency(agency);
    instances++;
    System.out.printf("Instancias creadas: %1s", instances);
    System.out.println();
  }

  public abstract void depositar(double value);

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


  public double getBalance() {
    return this.balance;
  }

  private int validateAgency(int agency) {
    return agency > 0 ? agency : 1;
  }

  public int getAgency() {
    return this.agency;
  }

  public void setNumber(int number) {
    this.number = number;
  }

  public void setTitular(Client titular) {
    this.titular = titular;
  }


  public void print() {
    print("Titular", this.titular.getName());
    print("Agency", this.agency);
    print("Number", this.number);
    print("Balance", this.balance);
  }

  private void print(String attribute, Object value) {
    System.out.printf("%1s: %2s", attribute, value);
    System.out.println();
  }

}
