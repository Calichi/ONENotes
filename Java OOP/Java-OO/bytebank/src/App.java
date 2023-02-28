public class App {
    public static void main(String[] args) throws Exception {

       InternalSystem sys = new InternalSystem();
       Manager manager1 = new Manager();
       Administrator admin = new Administrator();

       sys.autenticar(manager1);
       sys.autenticar(admin);

    }
}
