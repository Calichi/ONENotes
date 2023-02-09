public class App {

    public static void main(String[] args) throws Exception {

        int number1 = 5;
        int number2 = 9;

        print(number2);

        number2 = number1;

        print(number2);

        number1 = 88;

        print(number2);

    }

    public static void print(Object obj) {
        System.out.printf("%1s", obj);
        System.out.println();
    }

}
