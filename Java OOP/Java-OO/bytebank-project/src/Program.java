public class Program {

  public static void main(String[] args) {

    Account account = new Account();
    Account accountB = account;
    Account accountC = new Account();

    account.balance = 200;
    accountB.balance = 500;
    accountC.balance = 100;

    account.print();
    System.out.println(); 
    accountB.print();
    System.out.println(); 
    accountC.print();

    if(account == accountB) System.out.println("Es la misma cuenta");
    if(account != accountC) System.out.println("Son cuentas distintas");

  }

}
