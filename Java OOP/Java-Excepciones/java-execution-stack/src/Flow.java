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
            try {
                
                if(i == 3) {
                    int num = 0;
                    System.out.println(i);
                    System.out.println(i/num);
                } else {
                    String test = null;
                    System.out.println(test.toString());                   
                }


            } catch(ArithmeticException | NullPointerException exception) {
                System.out.println("Atrapo una Exception");
                System.out.println(exception.getMessage());
                exception.printStackTrace();
            }


        }
        System.out.println("Fin del método 2");
    }

}
