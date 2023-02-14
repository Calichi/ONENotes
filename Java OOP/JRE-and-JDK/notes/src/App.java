public class App {

    public static void main(String[] args) throws Exception {

        int count = 0;
        int sum = 0;

        while(count < 10) {
            count++;
            sum += count;
            print(count);
        }

        print(sum);

    }

    public static void print(Object obj) {
        System.out.printf("%1s", obj);
        System.out.println();
    }

}
