public class Test {
  public static void main(String[] args) {
    Connection c = new Connection();
    try{
      c.leerDatos();
    } catch(IllegalStateException e) {
      System.out.println("Recibiendo Excepción");
      e.printStackTrace();
    } finally {
      System.out.println("Ejecutando finally");
      c.cerrar();
    }

  }
}
