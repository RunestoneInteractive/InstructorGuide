.. qnum::
   :prefix: 2-7-
   :start: 1

Mixed-Up Code - Parsons Problems
=====================================



..	index::
	  single: mixed-up lines

The mixed-up code feature allows you to break code lines into blocks and have the learner assemble the blocks in the correct order. These types of problems are also called Parsons problems.  They can help students learn to identify syntax errors, learn particular algorithms, and uncover student misconceptions

Put the Blocks in Order
--------------------------------

You can actually have the learner order any type of text including Python and Java code.

The following Python example is from the student CSP ebook at `poem <https://runestone.academy/runestone/static/StudentCSP/CSPNameStrings/madlib.html>`_.

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

The following Java example is from the Java Review ebook at `Mixed-up-Java <https://runestone.academy/runestone/static/JavaReview/VariableBasics/VariablePracticeParsons.html>`_.

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

The following example is from the Java Review ebook at the following link `distractor <https://runestone.academy/runestone/static/JavaReview/VariableBasics/changeVars.html>`_.

**Mixed-up Code**

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

Distractors can either be mixed in randomly with the correct code blocks as seen in the example above, or can be shown paired with the correct code so that the learner can more easily pick between the two.

This example is from the Java Review ebook.  You can see it by clicking on the following `Paired-Distractor <https://runestone.academy/runestone/static/JavaReview/VariableBasics/declareVars.html>`_.

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

In Python indentation is used to show which lines of code are part of the same block.  Parsons problems can require indentation or not.  The problem below requires indentation.  Notice that there is a line in the solution area on the right that indicates that blocks can be indented.

The following example is from the student CSP ebook.  You can see it by clicking on the following `Indent <https://runestone.academy/runestone/static/StudentCSP/CSPRepeatStrings/mirror.html>`_.

.. parsonsprob:: 9_3_3_Palindrome

   <p>The phrase "A but tuba" is a <b>palindrome</b>.  The letters are the same forward and backward.  The below program generates the output: "abut tub a<=>a but tuba".  Put the lines in the right order with the right indentation.</p>
   -----
   newStr = "<=>"
   phrase = "a but tuba"
   =====
   for char in phrase:
   =====
       newStr = char + newStr + char
   =====
   print(newStr)


Adding a Help Button
---------------------

If you add the option :adaptive: to a mixed-up code problem, it will add a help button.  If the learner has attempted at least 3 solutions and sill hasn't solved the problem then an alert will show saying that help is available.  If the learner clicks on the help button it will make the problem easier by removing a distractor, providing indentation, and/or combining blocks.  The result from one mixed-up code problem can also change the difficulty of the next adaptive mixed-up code problem.  If the learner struggled to solve the last problem, the next will be made easier by paring distractors or getting rid of distractors.  If the learner solved the last problem in just one attempt, the next problem will be made harder by adding distractors or mixing distractors in randomly with the correct code blocks.

The following example is from the student CSP ebook. You can see it by clicking on the following `Help <https://runestone.academy/runestone/static/StudentCSP/CSPRepeatTurtles/turtleGeom.html>`_.

.. parsonsprob:: 10_2_2_Triangle
   :adaptive:

   The following program uses a turtle to draw a triangle as shown to the left, <img src="../_static/TurtleTriangle.png" width="150" align="left" hspace="10" vspace="5"/> but the lines are mixed up.  The program should do all necessary set-up and create the turtle.  After that, iterate (loop) 3 times, and each time through the loop the turtle should go forward 100 pixels, and then turn left 120 degrees.<br /><br /><p>Drag the needed blocks of statements from the left column to the right column and put them in the right order with the correct indention.  There may be additional blocks that are not needed in a correct solution.  Click on <i>Check Me</i> to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.</p>
   -----
   from turtle import *
   =====
   space = Screen()
   =====
   space = screen() #paired
   =====
   marie = Turtle()
   =====
   # repeat 3 times
   for i in range(3):
   =====
   # repeat 3 times
   for i in range(3) #paired
   =====
       marie.forward(100)
   =====
       marie.forward(100 #paired
   =====
       marie.left(120)
   =====
       marie.turn(120) #paired

Adding Labels For Group Work
-----------------------------

If you add the option :numbered: left the mixed-up code problems will have numbered labels on the left side of the code blocks.  You can also put the labels on the right side using :numbered: right.  These labels make it easier for groups of learners to work together to solve mixed-up code problems.  They also make is easy to use mixed-up code problems on paper exams.  The students can write the labels in the correct order, which speeds grading.  If you use labels, encourage students to write enough of the code after the label so that they don't have to try to remember what the labels mean.

.. parsonsprob:: 10_2_2_labels
   :adaptive:
   :numbered: left

   The following program uses a turtle to draw a triangle as shown to the left, <img src="../_static/TurtleTriangle.png" width="150" align="left" hspace="10" vspace="5"/> but the lines are mixed up.  The program should do all necessary set-up and create the turtle.  After that, iterate (loop) 3 times, and each time through the loop the turtle should go forward 100 pixels, and then turn left 120 degrees.<br /><br /><p>Drag the needed blocks of statements from the left column to the right column and put them in the right order with the correct indention.  There may be additional blocks that are not needed in a correct solution.  Click on <i>Check Me</i> to see if you are right. You will be told if any of the lines are in the wrong order or are the wrong blocks.</p>
   -----
   from turtle import *
   =====
   space = Screen()
   =====
   space = screen() #paired
   =====
   marie = Turtle()
   =====
   # repeat 3 times
   for i in range(3):
   =====
   # repeat 3 times
   for i in range(3) #paired
   =====
       marie.forward(100)
   =====
       marie.forward(100 #paired
   =====
       marie.left(120)
   =====
       marie.turn(120) #paired
