import java.util.ArrayList;
import java.util.Arrays;

public class Prac {
    public static void main(String[] args) {
//        int[] collection = {3, -1, -1};
//        mostFrequentItemCount(collection);
        hello("horrible");
    }

    public static void hello(String word) {
        float h;
//        System.out.println("\tI am testing some escape characters.\nNow I am on a new line. I did a tab on the first line and now...\nI am trying something else.");
        String zz = "\n\n";
        System.out.println("boop" + "\n\n".indexOf("n"));
//        String s = "zap";
//        System.out.format("I am going to %syou!", s);
        String zippy = "zip";
        System.out.println(zippy.concat("py"));
        System.out.println(zippy.concat("oops"));
        System.out.println(zippy);
        System.out.println(zippy.toUpperCase());
        System.out.println(zippy);
        System.out.println(zippy.charAt(1));
        String testing = "Hello you how are you doing you today";
        System.out.println(testing.lastIndexOf("you"));
        String numbers = "1234";

        System.out.println(numbers.substring(2, 3));
//        System.out.println(zippy.replace('z', 'l'));
//        System.out.println(zippy);
//        System.out.println(zippy.concat("py").trim().concat("!").toUpperCase());
//        System.out.println(zippy.equalsIgnoreCase("ziP"));
//
//        char c = 320;
//        System.out.println(c);
        System.out.println(!(10>20) || true) ;




    }


    public static int mostFrequentItemCount(int[] collection) {
        int element = Integer.MIN_VALUE, max = 1, count = 1;

        Arrays.sort(collection);

        for (int m = 1; m < collection.length; m++) {

            if (collection[m] == collection[m - 1]) {
                count++;

                if (collection[m] != collection[m - 1] || m == collection.length - 1) {
                    //compare the count with max_count
                    if (count > max) {
                        max = count;
                        element = collection[m - 1];
                    }
                    count = 1;
                }



            }
            System.out.println(element+": "+max);
        }
        return 0;
    }
}
