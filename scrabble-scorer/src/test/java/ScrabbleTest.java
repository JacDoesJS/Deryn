import jdk.nashorn.internal.ir.annotations.Ignore;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class ScrabbleTest {

    @Test
    @Ignore
    public void returnsZeroForEmptyWords() {
        Scrabble scrabble = new Scrabble("", false, false);
        assertEquals(scrabble.score(), 0);
    }

    @Test
    public void returnsZeroForNull() {
        Scrabble scrabble = new Scrabble(null, false, false);
        assertEquals(scrabble.score(), 0);
    }

    @Test
    public void returnsScoreForShortWord1() {
        Scrabble scrabble = new Scrabble("a", false, false);
        assertEquals(scrabble.score(), 1);
    }

    @Test
    public void returnsScoreForShortWord2() {
        Scrabble scrabble = new Scrabble("f", false, false);
        assertEquals(scrabble.score(), 4);
    }

    @Test

    public void returnsScoreForSimpleWord() {
        Scrabble scrabble = new Scrabble("street", false, false);
        assertEquals(scrabble.score(), 6);
    }

    @Test
    public void returnsScoreForComplicatedWord() {
        Scrabble scrabble = new Scrabble("quirky", false, false);
        assertEquals(scrabble.score(), 22);
    }

    @Test
    @Ignore
    public void returnsScoreForCaseInsensitiveWord() {
        Scrabble scrabble = new Scrabble("OXYPHENBUTAZONE", false, false);
        assertEquals(scrabble.score(), 41);
    }

    @Test
    public void returnsScoreForDoubleWord() {
        // Scrabble (String, boolean (doubleWord));
        Scrabble scrabble = new Scrabble("quirky", true, false);
        assertEquals(scrabble.score(), 44);
    }

    /*
    @Test
    @Ignore    
    public void returnsScoreForDoubleWord() {
        // Scrabble (String, Character[], Character[], boolean (doubleWord), boolean(tripleWord);
        Scrabble scrabble = new Scrabble("quirky", new Character[]{}, new Character[]{}, true, false);
        assertEquals(scrabble.score(), 44);
    }
    */

    @Test
    public void returnsScoreForTripleWord() {
        Scrabble scrabble = new Scrabble("quirky",false, true);
        assertEquals(scrabble.score(), 66);
    }

    /*

    // Scrabble (String, Character[] (double letters), Character[], boolean, boolean;
    @Test
    @Ignore
    public void returnsScoreForDoubleLetterWord() {
        //Scrabble scrabble = new Scrabble("a", new Character[]{'A'}, new Character[]{}, false, false);
        Scrabble scrabble = new Scrabble("a", new Character[]{'A'}, false, false);
        assertEquals(scrabble.score(), 2);
    }


    @Test
    @Ignore
    public void returnsScoreForDoubleLetterOnlyOnce() {
        Scrabble scrabble = new Scrabble("aa", new Character[]{'A'}, new Character[]{}, false, false);
        assertEquals(scrabble.score(), 3);
    }

    @Test
    @Ignore    
    public void returnsScoreForTripleLetterWord() {
        // Scrabble (String, Character[] , Character[] (triple letters), boolean, boolean;
        Scrabble scrabble = new Scrabble("a", new Character[]{}, new Character[]{'A'},false, false);
        assertEquals(scrabble.score(), 3);
    }

    @Test
    @Ignore    
    public void returnsScoreForTripleLetterOnlyOnce() {
        Scrabble scrabble = new Scrabble("aa", new Character[]{}, new Character[]{'A'},false, false);
        assertEquals(scrabble.score(), 4);
    }

    @Test
    @Ignore    
    public void returnsScoreForDoubleAndTripleLetter() {
        Scrabble scrabble = new Scrabble("aa", new Character[]{'A'}, new Character[]{'A'},false, false);
        assertEquals(scrabble.score(), 5);
    }
*/
}
