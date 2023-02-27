public class App {
    public static void main(String[] args) throws Exception {

        CurrentAccount currentAccount = new CurrentAccount(1);
        SavingAccount savingAccount = new SavingAccount(1);

        currentAccount.depositar(2000);
        currentAccount.transferir(1000, savingAccount);

        currentAccount.print();
        savingAccount.print();

    }
}
