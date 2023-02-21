public class Program {

  public static void main(String[] args) {

    Client carlos  = new Client();
    Account account = new Account();

    carlos.name = "Carlos";
    carlos.document = "55555555";
    carlos.phone = "8991903658";

    account.agency = 1;
    account.titular = carlos;

    account.print();
  }

}
