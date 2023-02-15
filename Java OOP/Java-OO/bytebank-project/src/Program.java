public class Program {

  public static void main(String[] args) {

    Account account = new Account();
    Account accountB = new Account();

    account.balance = 100;
    accountB.balance = 500;

    account.print();
    System.out.println();
    accountB.print();

  }

}
