import java.util.ArrayList;
import java.util.Collections;

public class Block {
    static int shortest = 0;
    static Integer shortIndex = 0;
    static int time = 0;
    static boolean zeroBool = false;
    static boolean moreTillsBool = false;

    static ArrayList<Integer> tills = new ArrayList<>();

    public static void main(String[] args) {

        time = 0;
        checkZero(new int[] { 2, 2, 3, 3, 4 }, 100);
//        solveSuperMarketQueue(new int[] { 2, 2, 3, 3, 4, 4 }, 2);
        tills.clear();
    }

    public static boolean checkZero(int[] customers, int n) {
        if (customers.length == 0) {
            time +=0;
            System.out.println("empty array");
            zeroBool=true;
        }
        System.out.println("there is something in the array");
        checkTills(new int[] { 2, 2, 3, 3, 4 }, 100);
        return zeroBool;
    }

    public static int checkTills(int[] customers, int n) {
        if(n>customers.length) {
            System.out.println("loads of tills");
            for(int cust: customers) {
                tills.add(cust);
            }
            moreTillsBool = true;
            time +=Collections.max(tills);
        }
        else {
            System.out.println("fewer tills than customers");
            makeArray(new int[] { 2, 2, 3, 3, 4 }, 100);
        }
        System.out.println("waiting time with more tills than needed is: " + time);
        return time;
    }

    public static void makeArray(int[] customers, int n) {

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
        findMin(tills);
    }

    public static void findMin(ArrayList<Integer> array) {
        shortest += Collections.min(array);
        shortIndex = array.indexOf(shortest);
        System.out.println("The shortest queue is at till number " + shortIndex + " where there are only " + shortest + " waiting.");
        System.out.println(tills + " tills array list");
        solveSuperMarketQueue(new int[] { 2, 2, 3, 3, 4 }, 100);
    }

    public static int solveSuperMarketQueue(int[] customers, int n) {

        System.out.println("length of customers array is " + customers.length);
        System.out.println("number of tills is "+ n);

        if(customers.length == 1) {
            time+=customers[0];
            System.out.println("one customer only");
            return time;

        }
        else  {
            System.out.println(tills);
            time = Collections.max(tills);
            System.out.println(time);
        }

        return time;

    }

};