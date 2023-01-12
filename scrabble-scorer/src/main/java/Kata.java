import java.sql.Array;
import java.util.Arrays;
import java.util.ArrayList;

public class Kata {
    static String[] eachWord;


    public static void main(String[] args) {
        Kata testing = new Kata();
        encryptThis("Peter has a big head");
    }

    public static String encryptThis(String text) {
        String first = "";
        String second = "";
        String last = "";

        String[] eachWord = text.split(" ");
        ArrayList<String> words = new ArrayList<>(Arrays.asList(eachWord));

        String answer = "";
        int i = 0;
        while(i<words.size()){
            String word = words.get(i);
            System.out.println(word.substring(2));
            i++;
            for(int j=0; j<word.length(); j++) {

                if(j==0) {
                    first += (int) word.charAt(j);
                    System.out.print("\nfirst " + first);
                }
                else if(j==1) {
                    second += word.charAt(j);
                    System.out.print(", second " + second);
                }
                else if(j==word.length()-1) {
                    last += word.charAt(word.length()-1);
                    System.out.print(", last " + last);
                }

            }

        }

//        for(int i=0; i< words.size(); i++) {
//            System.out.println(words.get(i));
//
//        }

//        for (String word : eachWord) {
//        String[] testing = word.split("");
//
//            int first = (int) (word.charAt(0));
//            String firstStr = String.valueOf(first);
//            System.out.println("firstStr: " + firstStr);
//
//            ArrayList<String> letters = new ArrayList<String>(Arrays.asList(word));
//
//            String second = letters.get(1);
//            String last = letters.get(letters.size() - 1);
//
//            letters.set(1, last);
//            letters.set(letters.size() - 1, second);
//
//            System.out.print(first);
//            for (int i = 1; i < letters.size(); i++) {
//                System.out.print(letters.get(i));
//            }
//
//            ArrayList<String> lettersPart = new ArrayList<String>(1);
//            System.out.println("d");
//

            return "answer";


        }
//        return "answer";

};