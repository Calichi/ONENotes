public class Program {

  public static void main(String[] args) {

    Account account = new Account();
    Account accountB = new Account();

    account.depositar(1000);

    System.out.println();
    System.out.printf("Estado de la transferencia: %1s", account.transferir(400, accountB));
    System.out.println();
    account.print();
    System.out.println();
    accountB.print();
    System.out.println();

  }

}
