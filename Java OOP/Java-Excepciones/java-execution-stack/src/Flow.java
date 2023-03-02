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
        System.out.println("Inicio del método 2");
        for(int i = 1; i <= 5; i++) {
            int num = 0;
            System.out.println(i);
            System.out.println(i/num);
        }
        System.out.println("Fin del método 2");
    }

}
