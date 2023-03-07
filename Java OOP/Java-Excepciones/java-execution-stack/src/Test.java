public class Test {
  public static void main(String[] args) throws Exception {
    try(Connection c = new Connection()) {
      c.leerDatos();
    } catch(IllegalStateException e) {
      System.out.println("Ejecutando catch");
      e.printStackTrace();
    }

  }
}
