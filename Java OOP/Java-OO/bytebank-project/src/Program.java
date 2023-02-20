public class Program {

  public static void main(String[] args) {

    Account account = new Account();

    account.balance = 100;
    account.depositar(10);

    System.out.println();
    System.out.println(account.retirar(30));
    account.print();
    System.out.println();

  }

}
