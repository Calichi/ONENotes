public class App {

    public static void main(String[] args) throws Exception {

        char _char = 'a';
        char _char2 = (char)(_char + 1);
        String word = "Alura cursos online";

        _char = 65 + 1;
        word += " 2023";

        print(_char2);
        print(word);

    }

    public static void print(Object obj) {
        System.out.printf("%1s", obj);
        System.out.println();
    }

}
