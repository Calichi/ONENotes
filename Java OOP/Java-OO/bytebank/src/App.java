public class App {
    public static void main(String[] args) throws Exception {

        Funcionario victoria = new Funcionario();
        Manager carlos = new Manager();

        victoria.setName("Victoria");
        victoria.setDocument("88888888");
        victoria.setSalary(1200);

        carlos.setName("Carlos");
        carlos.setDocument("88888888");
        carlos.setSalary(2000);

        System.out.println(victoria.getSalary());
        System.out.println(victoria.getBonus());

        System.out.println(carlos.getSalary());
        System.out.println(carlos.getBonus());
    }
}
