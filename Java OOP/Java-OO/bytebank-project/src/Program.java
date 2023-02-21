public class Program {

  public static void main(String[] args) {

    Account account = new Account();
    Client client = new Client();

    client.setName("Carlos");
    client.setDocument("90909090");

    account.setTitular(client);

    account.print();
  }

}
