public class App {
    public static void main(String[] args) throws Exception {

        Funcionario victoria = new Manager();
        Manager carlos = new Manager();

        victoria.setName("Victoria");
        victoria.setSalary(2000);
        carlos.setName("Carlos");
        carlos.setSalary(10000);

    }
}
