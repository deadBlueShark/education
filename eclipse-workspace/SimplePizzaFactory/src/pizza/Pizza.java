package pizza;

public abstract class Pizza {
    protected String name;
    protected String dough;
    protected String sauce;
    
    public void prepare() {
    	System.out.println(name + " prepare " + dough + ", " + sauce);
    }
    
    public void bake() {
    	System.out.println("Bake");
    }
    
    public void cut() {
    	System.out.println("Cut");
    }
    
    public void box() {
    	System.out.println("Box");
    }
}
