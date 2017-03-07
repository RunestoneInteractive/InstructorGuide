.. qnum::
   :prefix: 2-7-
   :start: 1

Mixed-Up Lines - Parsons Problems
=====================================



..	index::
	single: mixed-up lines
	
The mixed-up lines feature allows you to break lines into blocks and have the learner assemble the blocks in the correct order. These types of problems are also called Parsons problems.  They can help students learn to identify syntax errors, learn particular algorithms, and uncover student misconceptions   

Order Correct Lines
----------------------

You can actually have the learner order any type of text including Python and Java code.

The following Python example is from the student CSP ebook at `poem <http://interactivepython.org/runestone/static/StudentCSP/CSPNameStrings/madlib.html>`_.

.. parsonsprob:: 4_4_4_Poem

   Put the blocks below into the correct order to print a twist on a famous poem.   
   -----
   print("Roses are red.")  	
   ===== 
   print("Violets are blue.)
   =====                
   print("Sugar is sweet.")
   =====
   print("And so is Sue.")
   
The following Java example is from the Java Review ebook at `Mixed-up-Java <http://interactivepython.org/runestone/static/JavaReview/VariableBasics/VariablePracticeParsons.html>`_.

.. parsonsprob:: ch3ex1muc
   :noindent:

   The following program segment should figure out the cost for each shirt if they are buy 2 and get the third free and they are originally $45 each.  But, the blocks have been mixed up.  Drag the blocks from the left and put them in the correct order on the right.  Click the <i>Check Me</i> button to check your solution.</p>
   -----
   double price = 45;
   =====
   double totalCost = price * 2;
   =====
   double pricePerShirt = totalCost / 3;
   =====
   System.out.println(pricePerShirt);

Distractors
------------

The mixed-up code problems can have one or more distractor blocks that are not needed in a correct solution.  

The following example is from the Java Review ebook at the following link `distractor <http://interactivepython.org/runestone/static/JavaReview/VariableBasics/changeVars.html>`_.

**Mixed up programs**

.. parsonsprob:: 2_swap
   :noindent:

   The following has the correct code to 'swap' the values in x and y (so that x ends up with y's initial value and y ends up with x's initial value), but the code is mixed up and contains <b>one extra block</b> which is not needed in a correct solution.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.
   -----
   int x = 3;
   int y = 5;
   int temp = 0;
   =====
   temp = x;
   =====
   x = y;
   =====
   y = temp;
   =====
   y = x; #distractor
   

Paired Distractors
---------------------

Distractors can either be shown like all other lines as we saw in the example above, or can be shown paired with the correct code so that the leaner can more easily pick between the two. 

This example is from the Java Review ebook.  You can see it by clicking on the following `Paired-Distractor <http://interactivepython.org/runestone/static/JavaReview/VariableBasics/declareVars.html>`_.

.. parsonsprob:: declareVars
   :noindent:

   The following method has the code to declare and initialize variables for storing a number of visits, a person's temperature, and if the person has insurance or not.  It also includes extra blocks that are not needed in a correct solution.  Drag the needed blocks from the left area into the correct order (declaring numVisits, temp, and hasInsurance in that order) in the right area.  Click on the "Check Me" button to check your solution.
   -----
   int numVisits = 5;
   =====
   Int numVisits = 5; #paired
   =====
   double temp = 101.2;
   =====
   Double temp = 101.2;  #paired
   =====
   boolean hasInsurance = false;
   =====
   Boolean hasInsurance = false; #paired 
  
Indenting the Blocks
--------------------- 

In Python indentation is used to show which lines of code are part of the same block.  

The following example is from the student CSP ebook.  You can see it by clicking on the following `Indent <http://interactivepython.org/runestone/static/StudentCSP/CSPRepeatStrings/mirror.html>`_.

.. parsonsprob:: 9_3_3_Palindrome

   <p>The phrase <code>"A but tuba"</code> is a <b>palindrome</b>.  The letters are the same forward and backward.  The below program generates the output: <code>"abut tub a<=>a but tuba"</code>  Put the lines in the right order with the right indentation.</p>
   -----
   newStr = "<=>"
   phrase = "a but tuba"
   =====
   for char in phrase:
   =====
       newStr = char + newStr + char
   =====
   print(newStr)


   