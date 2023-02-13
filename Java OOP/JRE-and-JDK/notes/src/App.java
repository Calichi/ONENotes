public class App {

    public static void main(String[] args) throws Exception {

        int age = 21;
        int personQuantity = 2;
        boolean isPar = personQuantity > 1;
        boolean canInput = age >= 18 && isPar;

        if (canInput) {
            print("Usted puede entrar");
            print("Bienvenido");
        } else {
            print("Usted no tiene permitido entrar");
        }

    }

    public static void print(Object obj) {
        System.out.printf("%1s", obj);
        System.out.println();
    }

}
