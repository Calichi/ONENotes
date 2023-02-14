public class App {

    public static void main(String[] args) throws Exception {

        for(int multiplicand = 1; multiplicand <= 10; multiplicand++) {
            for(int multiplier = 1; multiplier <= 10; multiplier++) {
                print(multiplicand, multiplier);
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
