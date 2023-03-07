public class Administrator extends Funcionario implements Authenticatable {

  private String key;
  private AuthenticationUtility utility;

  public Administrator() {
    this.utility = new AuthenticationUtility();
  }

  @Override
  public double getBonus() {
    return 0;
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
