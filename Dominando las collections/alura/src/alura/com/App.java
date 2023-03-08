package alura.com;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class App {

    public static final List<List<Integer>> lists = new ArrayList<List<Integer>>() {{
        add(new LinkedList<Integer>());
        add(new ArrayList<Integer>());
    }};

    public static void main(String[] args) throws Exception {
        for(List<Integer> list : lists) {
            final String implementName = list.getClass().getSimpleName();
            long begin = System.currentTimeMillis();
            for(int i = 0; i < 100000; i++) {
                list.add(i);
            }
            long end = System.currentTimeMillis();
            long duration = end - begin;
            System.out.println(implementName + " add: " + duration);

            //get

            begin = System.currentTimeMillis();
            for(int i = 0; i < 100000; i++) {
                list.get(i);
            }
            end = System.currentTimeMillis();
            duration = end - begin;
            System.out.println(implementName + " get: " + duration);

            //remove

            begin = System.currentTimeMillis();
            for(int i = 99999; i >= 0; i--) {
                list.remove(i);
            }
            end = System.currentTimeMillis();
            duration = end - begin;
            System.out.println(implementName + " remove: " + duration);
        }
    }
}