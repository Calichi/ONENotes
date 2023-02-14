public class App {

    public static void main(String[] args) throws Exception {

        for(int row = 1; row <= 10; row++) {
            for(int column = 1; column < row; column++) {

                System.out.print("* ");
            }
            System.out.println();
        }

    }

    public static void print(Object obj) {
        System.out.printf("%1s", obj);
        System.out.println();
    }

    public static void print(int multiplicand, int multiplier) {
        int product = multiplicand * multiplier;
        System.out.printf("%1s por %2s es igual a %3s", multiplicand, multiplier, product);
        System.out.println();
    }

}
