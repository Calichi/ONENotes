public class Program {

  public static void main(String[] args) {

    Account account = new Account();

    account.titular = new Client();
    //account.titular.name = "Carlos";

    account.print();
  }

}
