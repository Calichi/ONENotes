public class AuthenticationUtility {

  private String key = "12345";

  public void setKey(String key) {
    this.key = key;
  }

  public boolean login(String key) {
    return this.key == key;
  }
  
}
