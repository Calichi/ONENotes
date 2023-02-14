public class App {

    public static void main(String[] args) throws Exception {

        int count = 0;

        while(count < 10) {
            count++;
            print(count);
        }

    }

    public static void print(Object obj) {
        System.out.printf("%1s", obj);
        System.out.println();
    }

}
