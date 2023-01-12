import java.util.ArrayList;
import java.util.Collections;

public class StringSplit {

    static int shortest = 0;
    static int time = 0;
    static Integer shortIndex = 0;

    static int n = 0;
    static ArrayList<Integer> tills = new ArrayList<>(n);

    public static void main(String[] args) {
//        int[] custs = {7, 8, 1, 4};
        solveSuperMarketQueue(new int[] {2, 3},2);
    }
    public static void findMin(ArrayList<Integer> array) {
        shortest += Collections.min(array);
        shortIndex = array.indexOf(shortest);
        System.out.println("The shortest queue is at till number " + shortIndex + " where there are only " + shortest + " waiting.");
        System.out.println(tills + " tills array list");
    }

    public static int solveSuperMarketQueue(int[] customers, int n) {

        if (customers.length != 0) {
            for (int i = 0; i < n; i++) {
                tills.add(customers[i]);
                System.out.println(customers[i] + " has been added");
            }

            for (int j = n; j < customers.length; j++) {
                findMin(tills);
                System.out.println("adding " + customers[j]);
                int adding = tills.get(shortIndex);
                adding += customers[j];
                tills.set(shortIndex, adding);
                shortIndex = 0;
                shortest = 0;
            }

            System.out.println(tills);
            time = Collections.max(tills);
        }
        System.out.println(time);
        return time;

    }

};