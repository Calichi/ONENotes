public class Test {
  public static void main(String[] args) {
    try {
      Account a = new Account();
      a.deposita();
    } catch(Exception e) {
      e.printStackTrace();
    }
  }
}
