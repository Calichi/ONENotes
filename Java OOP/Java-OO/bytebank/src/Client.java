public class Client implements Authenticatable {

  private String name;
  private String document;
  private String phone;
  private String key;
  private AuthenticationUtility utility;

  public Client() {
    this.utility = new AuthenticationUtility();
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDocument() {
    return this.document;
  }

  public void setDocument(String document) {
    this.document = document;
  }

  public String getPhone() {
    return this.phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  @Override
  public void setKey(String key) {
    this.key = key;
  }

  @Override
  public boolean login(String key) {
    return this.utility.login(key);
  }

}
