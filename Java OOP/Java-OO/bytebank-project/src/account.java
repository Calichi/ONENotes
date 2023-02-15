public class Account {

  double balance;
  int agency;
  int number;
  String titular;

  public void print() {
    print("Balance", balance);
    print("Agency", agency);
    print("Number", number);
    print("Titular", titular);
  }

  private void print(String attribute, Object value) {
    System.out.printf("%1s: %2s", attribute, value);
    System.out.println();
  }

}
