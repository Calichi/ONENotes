public class InternalSystem {

  private String key = "12345";

  public boolean autenticar(Authenticatable manager) {
    boolean canLogin = manager.login(this.key);
    if(canLogin) {
      System.out.println("Login exitoso");
    } else {
      System.out.println("Error en el login");
    }

    return canLogin;
  }
  
}
