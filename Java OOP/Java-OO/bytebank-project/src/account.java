public class Account {

  double balance;
  int agency;
  int number;
  String titular;

  public void Depositar(double value) {
    this.balance += value;
  }

  public void print() {
    print("Titular", titular);
    print("Agency", agency);
    print("Number", number);
    print("Balance", balance);
  }

  private void print(String attribute, Object value) {
    System.out.printf("%1s: %2s", attribute, value);
    System.out.println();
  }

}
