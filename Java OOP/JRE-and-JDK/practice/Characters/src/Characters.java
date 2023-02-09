public class Characters {
    public static void main(String[] args) throws Exception {
        char _char = 'a';
        print(_char);

        char value = 65;
        print(value);

        value = (char)(value + 1);
        print(value);

        String word = "Alura cursos online de tecnología";
        print(word);

        word += " 2023";
        print(word);
    }

    public static void print(Object obj) {
        System.out.printf("%1s", obj);
        System.out.println();
    }
}
