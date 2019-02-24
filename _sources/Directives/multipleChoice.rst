.. qnum::
   :prefix: 2-8-
   :start: 1

Multiple-Choice
=======================

..	index::
	single: multiple-choice
	
The multiple-choice feature allows the student to answer a multiple-choice question and get immediate feedback.  The questions can have one correct answer or multiple correct answers.

The following Python example from the *Student Computer Science Principles* ebook has only one correct answer.  You can see it when you click the following link `Multiple-Choice-One-Answer <https://runestone.academy/runestone/static/StudentCSP/CSPWhileAndForLoops/whileCount.html>`_.

.. mchoice:: NegativeCounter-Python
   :answer_a: 5 4 3 2 1
   :answer_b: -5 -4 -3 -2 -1
   :answer_c: -4 -3 -2 -1
   :correct: c
   :feedback_a: If x starts at -5 how can the first value printed be 5?
   :feedback_b: This would be true if the print statement was before we incremented x.
   :feedback_c: The value of x is incremented before it is printed so the first value printed is -4.  

   What does the following code print?
   
   :: 
      
      output = ""
      x = -5
      while x < 0:
          x = x + 1
          output = output + str(x) + " "
      print(output)
      
The following Java example from the *Java Review* ebook has only one correct answer.  You can see it when you click on the following link `Java-Ex-One-Answer <https://runestone.academy/runestone/static/JavaReview/VariableBasics/vEasyMC.html>`_.

.. mchoice:: JavaMC-easy1
   :answer_a: 2
   :answer_b: 0
   :answer_c: 3
   :answer_d: 1
   :correct: a
   :feedback_a: Whenever the first number is smaller than the second, the remainder is the first number.  Remember that % is the remainder and 3 goes into 2 0 times with a remainder of 2.  
   :feedback_b: This is the number of times that 3 goes into 2 but the % operator gives you the remainder.  
   :feedback_c: Try it.  Remember that % gives you the remainder after you divide the first number by the second one.
   :feedback_d: This would be correct if it was 3 % 2 since 2 would go into 3 one time with a remainder of 1.

   What does the following code print?
   
   .. code-block:: java 

     System.out.println(2 % 3);

The following Python example from the *How to Think Like a Computer Scientist* ebook requires more than one answer to be correct.  You can see it at the bottom of the page when you click the following link `Multiple-Choice-Multiple-Answer <https://runestone.academy/runestone/static/thinkcspy/Selection/BooleanValuesandBooleanExpressions.html>`_.

.. mchoice:: Boolean1
   :multiple_answers:
   :answer_a: True
   :answer_b: 3 == 4
   :answer_c: 3 + 4
   :answer_d: 3 + 4 == 7
   :answer_e: &quot;False&quot;
   :correct: a,b,d
   :feedback_a: True and False are both Boolean literals.
   :feedback_b: The comparison between two numbers via == results in either True or False (in this case False),  both Boolean values.
   :feedback_c:  3 + 4 evaluates to 7, which is a number, not a Boolean value.
   :feedback_d: 3 + 4 evaluates to 7.  7 == 7 then evaluates to True, which is a Boolean value.
   :feedback_e: With the double quotes surrounding it, False is interpreted as a string, not a Boolean value.  If the quotes had not been included, False alone is in fact a Boolean value.

   Which of the following is a Boolean expression?  Select all that apply.