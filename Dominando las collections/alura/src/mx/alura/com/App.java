package mx.alura.com;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class App {
    public static void main(String[] args) throws Exception {
        ArrayList<String> list = new ArrayList<String>();

        list.add("Geometría");
        list.add("Fisica");
        list.add("Quimica");
        list.add("Historia");

        System.out.println();

        System.out.println(list);
        Collections.sort(list);
        System.out.println(list);
        Collections.sort(list, Collections.reverseOrder());
        System.out.println(list);

        System.out.println();
        
        list.sort(Comparator.reverseOrder());
        System.out.println(list);
        list.sort(Comparator.naturalOrder());
        System.out.println(list);

        System.out.println();

        List<String> newList = list.stream().sorted().collect(Collectors.toList());
        System.out.println(newList);

        System.out.println();

    }
}
