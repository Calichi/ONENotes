public class App {

    public static void main(String[] args) throws Exception {

        int age = 17;
        int quantity = 2;

        if (age >= 18) {
            print("Usted puede entrar");
            print("Bienvenido");
        } else {
            if (quantity >= 2) {
                print("Usted es menor de edad pero tiene permitido entrar");
            }
            print("Usted no tiene permitido entrar");
        }

    }

    public static void print(Object obj) {
        System.out.printf("%1s", obj);
        System.out.println();
    }

}
