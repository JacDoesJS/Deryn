import java.util.*;

public class Scrabble {
   // ArrayList<Character> arrayListJ = new ArrayList<Character>();
    HashMap<Character, Integer> letterScores = new HashMap<>();

    char[] wordArray;
    String word;
    boolean isDouble;
    boolean isTriple;
    int score = 0;
    int scoreMultiplier = 1;

    public Scrabble(String word, boolean doubleWord, boolean tripleWord) {
        this.score = 0;
        this.isDouble = false;
        this.isTriple = false;

        if (doubleWord == true) {
            this.scoreMultiplier = 2;
        };

        if (tripleWord == true) {
            this.scoreMultiplier = 3;
        };

        if(word == null){
            this.word = "";
        } else {
            this.word = word.toLowerCase();
            this.wordArray = this.word.toCharArray();
        }
        populateLetterValues();

    }

//    public static void populateScoreList(HashMap<Character[], Integer> hashMap) {
//        hashMap.put(new Character[]{'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'}, 1);
//        hashMap.put(new Character[]{'d', 'g'}, 2);
//        hashMap.put(new Character[]{'b', 'c', 'm', 'p'}, 3);
//        hashMap.put(new Character[]{'f', 'h', 'v', 'w', 'y'}, 4);
//        hashMap.put(new Character[]{'k'}, 5);
//        hashMap.put(new Character[]{'j', 'x'}, 8);
//        hashMap.put(new Character[]{'q', 'z'}, 10);
//    }


    public void populateLetterValues(){
        letterScores.put('a', 1);
        letterScores.put('e', 1);
        letterScores.put('i', 1);
        letterScores.put('o', 1);
        letterScores.put('u', 1);
        letterScores.put('l', 1);
        letterScores.put('n', 1);
        letterScores.put('r', 1);
        letterScores.put('s', 1);
        letterScores.put('t', 1);
        letterScores.put('a', 1);
        letterScores.put('d', 2);
        letterScores.put('g', 2);
        letterScores.put('b', 3);
        letterScores.put('c', 3);
        letterScores.put('m', 3);
        letterScores.put('p', 3);
        letterScores.put('f', 4);
        letterScores.put('h', 4);
        letterScores.put('v', 4);
        letterScores.put('w', 4);
        letterScores.put('y', 4);
        letterScores.put('k', 5);
        letterScores.put('j', 8);
        letterScores.put('x', 8);
        letterScores.put('q', 10);
        letterScores.put('z', 10);
    }

    public int score() {
        if (this.word == "") {
            return 0;
        }

        for (char letter : this.wordArray) {
            this.score += letterScores.get(letter);
        }

        System.out.println("Your score is  " + this.score + " with a multiplier of " + this.scoreMultiplier);

        return this.score *= scoreMultiplier;
    }

    public void makeWordArray(String word) {
        wordArray = word.toLowerCase().toCharArray();
        System.out.println(Arrays.toString(wordArray));
    }


/*

    /*public int getValues(HashMap<Character[], Integer> hashMap, String word) {
            for (Map.Entry<Character[], Integer> mapElement : hashMap.entrySet()) {
                Character[] key = mapElement.getKey();
                System.out.println(key);
                for (int j = 0; j < key.length; j++) {
                    if (key[j] == k) {
                        System.out.println("Adding " + mapElement.getValue() +" to the score.");
                        score += mapElement.getValue();
                        System.out.println("I found the letter " + k + " and scored it with this value " + mapElement.getValue());
                    }

                }
            }
        }
        return score;

    }
/*
    public int getValues(HashMap<Character[], Integer> hashMap, char[] array) {
        for(int k = 0; k<array.length; k++) {
            for (Map.Entry<Character[], Integer> mapElement : hashMap.entrySet()) {
                Character[] key = mapElement.getKey();
                for (int j = 0; j < key.length; j++) {
                    //System.out.println(key[j]);
                    if (key[j] == 'h') {
                        System.out.println("It's found h");
                        System.out.println(("h is worth " + mapElement.getValue()));

                        //score += mapElement.getValue();
                        break;
                    } else {
                        score += 0;
                    }
                }

            }
        }
        return score;
    }

 */


};




