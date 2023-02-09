public class App {

    public static void main(String[] args) throws Exception {

        double __double = 230.89;
        int __integer = (int)__double; //Cast
        long __long = 12L;
        short __short = 13555;
        byte __byte = 127;
        float __float = 2.5F;

        //Este método imprime en consola
        print(__double);
        print(__integer);
        print(__long);
        print(__short);
        print(__byte);
        print(__float);

    }

    public static void print(Object obj) {
        System.out.printf("%1s", obj);
        System.out.println();
    }

}
