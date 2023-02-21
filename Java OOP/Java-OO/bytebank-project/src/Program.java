public class Program {

  public static void main(String[] args) {

    Account account = new Account();
    account.balance = 200;
    account.retirar(300);
    account.balance -= 300;

    account.print();
  }

}
