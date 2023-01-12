import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Score {
    ArrayList<Character> arrayListJ = new ArrayList<Character>();
    HashMap<Character[],Integer> letterScores = new HashMap<Character[],Integer>();
    Integer score = 0;
    String wordToScore;
   // Integer key;
    //String val;

    public Score(String wordToScore) {

        this.wordToScore = wordToScore;
    }

    public static void populateScoreList(HashMap<Character[], Integer> hashMap) {
        hashMap.put(new Character[]{'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'}, 1);
        hashMap.put(new Character[]{'d', 'g'}, 2);
        hashMap.put(new Character[]{'b','c','m', 'p'}, 3);
        hashMap.put(new Character[]{'f', 'h', 'v', 'w', 'y'}, 4);
        hashMap.put(new Character[]{'k'}, 5);
        hashMap.put(new Character[]{'j', 'x'}, 8);
        hashMap.put(new Character[]{'q','z'}, 10);
    }

    public static void main(String[] args) {
        Score scoreWord = new Score("a");
        populateScoreList(scoreWord.letterScores);
        score(scoreWord.letterScores);

    }

    public static void score(HashMap<Character[], Integer> hashMap) {
        for (Map.Entry<Character[], Integer> mapElement : hashMap.entrySet()) {
            Character[] key = mapElement.getKey();
            for (int j = 0; j < key.length; j++) {
                //System.out.println(key[j]);
                if (key[j] == 'h') {
                    System.out.println("It's found h");
                    System.out.println(("h is worth " + mapElement.getValue()));

                    //score += mapElement.getValue();
                    break;
                }
            }
        }
    }

    /*public Integer setScore(String wordToScore) {
        Integer val = (Integer) letterScores.get(wordToScore);
        score += val;
        System.out.println("Here it is " + val);
        return val;

        }
        */

        public Integer getScore() {
        return this.score;
        }

    };

