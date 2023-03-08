package mx.alura.com;

import java.util.ArrayList;

public class App {
    public static void main(String[] args) throws Exception {
        String var1 = "Ejemplo 1";
        String var2 = "Ejemplo 2";
        String var3 = "Ejemplo 3";
        String var4 = "Ejemplo 4";
        ArrayList<String> list = new ArrayList<String>();

        list.add(var1);
        list.add(var2);
        list.add(var3);
        list.add(var4);

        System.out.println(list);
        System.out.println(list.size());
    }
}
