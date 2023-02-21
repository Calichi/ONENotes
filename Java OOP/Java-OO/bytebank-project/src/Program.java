public class Program {

  public static void main(String[] args) {

    Account account = new Account();
    account.depositar(100);
    account.retirar(300);

    account.print();
  }

}
