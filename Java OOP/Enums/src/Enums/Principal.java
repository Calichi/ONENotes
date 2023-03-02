package Enums;

public class Principal {
  public static void main(String[] args) {
    for(Day day : Day.values()) {
      System.out.println("El día de la semana es: " + day);
    }
    Day domingo = Day.DOMINGO;
    System.out.println(domingo.name());
    System.out.println(domingo.ordinal());
    System.out.println(domingo.toString());
  }
}
