public class App {
    public static void main(String[] args) throws Exception {

        Funcionario carlos = new Funcionario();
        Manager victoria = new Manager();
        Counter reyli = new Counter();

        carlos.setSalary(2000);
        victoria.setSalary(10000);
        reyli.setSalary(5000);

        BonusManagement.registerSalary(carlos);
        BonusManagement.registerSalary(victoria);
        BonusManagement.registerSalary(reyli);

    }
}
