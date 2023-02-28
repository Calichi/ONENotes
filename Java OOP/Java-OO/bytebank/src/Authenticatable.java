public abstract interface Authenticatable {

  public abstract void setKey(String key);

  public abstract boolean login(String key);
  
}
