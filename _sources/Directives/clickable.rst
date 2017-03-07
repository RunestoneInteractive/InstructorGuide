.. qnum::
   :prefix: 2-3-
   :start: 1

Clickable Code
====================

..	index::
	single: clickable code
	
The clickable code feature allows the student to click on particular lines of code and check if they have clicked on the correct lines.  It can be useful for helping students identify particular parts of code. It works with any text. 

The following example is from the *Java Review* ebook.  You can see it by clicking on the following link `Click-Variable <http://interactivepython.org/runestone/static/JavaReview/VariableBasics/declareVars.html>`_.

.. clickablearea:: var_declare
    :question: Click on all of the variable declarations in the following code.
    :iscode:
    :feedback: Variable declarations start with a type and then a name.  
    
    :click-incorrect:public class Test2:endclick:
    :click-incorrect:{:endclick:
        :click-incorrect:public static void main(String[] args):endclick:
        :click-incorrect:{:endclick:
            :click-correct:int numLives;:endclick:
            :click-incorrect:numLives = 0;:endclick:
            :click-incorrect:System.out.println(numLives);:endclick:
            :click-correct:double health;:endclick:
            :click-incorrect:health = 8.5;:endclick:
            :click-incorrect:System.out.println(health);:endclick:
            :click-correct:boolean powerUp;:endclick:
            :click-incorrect:powerUp = true;:endclick:
            :click-incorrect:System.out.println(powerUp);:endclick:
        :click-incorrect:}:endclick:
    :click-incorrect:}:endclick: 
    
You can also use clickable code to identify particular indices in an array.

The following example is from the *Java Review* ebook.  You can see it by clicking on the following link `Click-Array <http://interactivepython.org/runestone/static/JavaReview/ArrayBasics/abasics.html>`_.

.. clickablearea:: arrayClick2
        :question: Click on the values at index 0 and 2 in the following array.
        :feedback: Remember that the first value is at index 0.  Click on an area again to unselect it and try again.
        :table:
        :correct: 1,1;1,3
        :incorrect: 1,2;1,4;
        
        +----+----+----+----+
        | 4  | -2 |  8 | 7  |
        +----+----+----+----+

