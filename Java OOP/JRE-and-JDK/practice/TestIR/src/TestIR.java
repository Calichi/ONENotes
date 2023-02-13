public class TestIR {
    public static void main(String[] args) throws Exception {
        double salary = 3300.0;

        if(salary > 1900.0 && salary < 2800.0) {
            showMessage(7.5, 142);
        } else if (salary > 2800.01 && salary < 3751.0) {
            showMessage(15.0, 350);
        } else if (salary > 3751.01 && salary < 4664.0) {
            showMessage(22.5, 636);
        }
    }

    static void print(String f, Object... args) {
        System.out.printf(f, args);
        System.out.println();
    }

    static void showMessage(double _IR, int deduction) {
        System.out.println();
        print("Tasa: %1s%%", _IR);
        print("Monto deducible: $ %1s", deduction);
        System.out.println();
    }
}