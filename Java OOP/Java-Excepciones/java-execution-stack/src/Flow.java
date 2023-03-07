public class Flow {
    public static void main(String[] args) {
        System.out.println("Inicio de main");
        method1();
        System.out.println("Fin de main");
    }

    private static void method1() {
        System.out.println("Inicio del método 1");
        try {
            method2();
        } catch(MyException e) {
            e.printStackTrace();
        }
        System.out.println("Fin del método 1");
    }

    private static void method2() throws MyException{
        System.out.println("Inicio del método 2");
        throw new MyException("Mi excepción fue lanzada");
    }

}
