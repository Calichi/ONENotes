public class BonusManagement {

  private static double sum;

  public static double registerSalary(Funcionario funcionario) {
    sum += funcionario.getBonus();
    System.out.printf("Calculo actual: %1s", sum);
    System.out.println();
    return sum;
  }

  public static double registerSalary(Manager manager) {
    return registerSalary((Funcionario)manager);
  }
  
}
