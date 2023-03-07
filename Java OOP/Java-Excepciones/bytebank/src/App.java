public class App {
    public static void main(String[] args) {

        Account acc = new SavingAccount(1);
        acc.depositar(200);

        try {
            acc.withdraw(10);
            acc.withdraw(200);
        } catch (InsufficientBalanceException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }
}
