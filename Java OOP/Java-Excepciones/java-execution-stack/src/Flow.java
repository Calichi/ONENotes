public class Flow {
    public static void main(String[] args) {
        System.out.println("Inicio de main");
        method1();
        System.out.println("Fin de main");
    }

    private static void method1() {
        System.out.println("Inicio del método 1");
        method2();
        System.out.println("Fin del método 1");
    }

    private static void method2() {
        /*System.out.println("Inicio del método 2");
        throw new ArithmeticException();*/
        method2();
    }

}
