public class Program {

  public static void main(String[] args) {

    Account account = new Account();
    Account accountB = account;

    account.balance = 200;
    accountB.balance = 500;

    account.print();

    System.out.println(); 

    accountB.print();

  }

}
