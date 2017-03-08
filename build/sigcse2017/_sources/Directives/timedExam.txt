.. qnum::
   :prefix: 2-11-
   :start: 1

Timed Exam
==========

..	index::
	single: timed exam
	
A timed exam can have a time limit or can just show how much time the learner has taken. The timed exam can give feedback after the exam is taken or not. 

You can include several different types of questions in a timed exam, but it is best to separate questions that should be centered like writing code questions from the left-justified questions like multiple-choice questions.  
	
The following example keeps track of the time used, but does not have a time limit.  It is from the *Student CSP* ebook.  It can be seen by clicking on the following link `Timed-Exam-Unlimited <http://interactivepython.org/runestone/static/StudentCSP/CSPrinTeasers/pretest.html>`_.

.. timed:: noTimeLimit1
    
    .. mchoice:: pre_1
       :answer_a: x = 7, y = 5, z = 0
       :answer_b: x = 5, y = 7, z = 7
       :answer_c: x = 5, y = 7, z = 0
       :answer_d: x = 5, y = 5, z = 7
       :answer_e: I don't know
       :correct: b
       :feedback_a: Those are the original values, but they change.
       :feedback_b: x is set to 7 but changed to the value of y which is 5.  y is set to 5 originally, but is changed to the value of z but after z has been set to the value of x which is 7.  z was set to 0 originally but changes to the the value of x which is 7.
       :feedback_c: This would be true if setting y to z reset z to 0, but that is not what happens.
       :feedback_d: y was set to 5 originally, but the value was changed.
       :feedback_e: That is okay.  We do not expect you to know this.

       What will be the values in x, y, and z after the following lines of code execute?

       ::
       
          x = 7;
          y = 5;
          z = 0;
          z = x;
          x = y;
          y = z;
         
           
    .. mchoice:: pre_2
       :answer_a: Mere morals cannot divide by zero.
       :answer_b: 1000 / 4
       :answer_c: 250.0
       :answer_d: Mere mortals cannot divide by zero. 250.
       :answer_e: I don’t know
       :correct: c
       :feedback_a: The sentence prints only if denominator is equal to 0, but it is not.  
       :feedback_b: It will print the result of the division.
       :feedback_c: It only prints the result of dividing 1000 by 4 which is 250.0.  
       :feedback_d: The sentence prints only if denominator is equal to 0, but it is not. 
       :feedback_e: That is okay.  We do not expect you to know this.

       What is the output from the program below?
       
       ::

          denominator = 4
          if denominator == 0:
              print ("Mere mortals cannot divide by zero.")
          else:
              print (1000 / denominator)
           
    .. mchoice:: pre_3
       :answer_a: Normal
       :answer_b: Hypertensive Crisis
       :answer_c: High Blood Pressure A
       :answer_d: Prehypertension
       :answer_e: I don’t know
       :correct: c
       :feedback_a: This will only print when both check_systolic and check_diastolic return 0 which is when check_systolic is passed a number less than 120 and check_diastolic is passed a number less than 80.
       :feedback_b: This will only print when either check_systolic or check_diastolic return 3 which is when check_systolic is passed a number greater or equal to 180 and check_diastolic is passed a number greater than or equal to 110.
       :feedback_c: This will print when check_systolic was 1 and check_diastolic was greater than 1 (but not 3).  
       :feedback_d: This will print when check_systolic was 1 and check_diastolic was less than or equal to 1.  
       :feedback_e: That is okay.  We do not expect you to know this.

       What is the output from the program below?
       
       ::

          def check_systolic(num1):
              if num1 < 120:
                  return 0
              elif num1 < 140:
                  return 1
              elif num1 < 180:
                  return 2
              else:
                  return 3

          def check_diastolic(num2):
              if num2 < 80:
                  return 0
              elif num2 < 90:
                  return 1
              elif num2 < 110:
                  return 2
              else:
                  return 3

          syst = 135
          dias = 100
          if check_systolic(syst) == 0 and check_diastolic(dias) == 0:
              print ("Normal")
          elif check_systolic(syst) == 3 or check_diastolic(dias) == 3:
              print ("Hypertensive Crisis")
          elif check_systolic(syst) == 1:
              if check_diastolic(dias) > 1:
                  print ("High Blood Pressure A")
              else:   
                  print ("Prehypertension")
                  
The following is an example where there is a time limit.  It comes from the *Java Review* ebook. See the original by clicking on the following `Timed-Exam <http://interactivepython.org/runestone/static/JavaReview/Tests/test1.html>`_.

.. timed:: timeLimit1
   :timelimit: 10

   .. mchoice:: pe1_1
      :answer_a: 50
      :answer_b: 20
      :answer_c: 60
      :answer_d: 10
      :answer_e: 30
      :correct: a
      :feedback_a: This is a recursive method.  It will return 10 when a is equal to 1, otherwise it will do a recursive call.  Each call adds 10.   
      :feedback_b: This would be true if the call was m(2).
      :feedback_c: This would be true if the call was m(6).
      :feedback_d: This would be true if the call was m(1).
      :feedback_e: This would be true if the call was m(3).

      Given the following method.  What is the output when ``m1(5)`` is called?
   
      .. code-block:: java

        public int m1 (int a)
        {     
           if (a == 1)          
              return 10;     
           else          
              return 10 + m1 (a – 1);
        }


   .. mchoice:: pe1_2
      :answer_a: 1 2 3 2 4 6
      :answer_b: 1 2 3 2 4 6 3 6 9
      :answer_c: 1 2 2 4 3 6
      :answer_d: 1 2 3 4 2 4 6 8 3 6 9 12
      :answer_e: 0 1 2 3 0 2 4 6 0 3 6 9
      :correct: b
      :feedback_a: This would be true if it was j < 3.  
      :feedback_b: The variable j will range from 1 to 3 and k will range from 1 to 3.  
      :feedback_c: This would be true if it was k <= 3.  
      :feedback_d: This would be true if it was k <= 4.  
      :feedback_e: This would be true if k started at 0 instead of 1.

      What will the following code print when it is executed?
   
      .. code-block:: java

        for (int j = 1; j <= 3; j++) { 
           for (int k = 1; k < 4; k++) 
              System.out.print(j * k + " "); 
        } 

   .. mchoice:: pe1_3
      :answer_a: 128
      :answer_b: 256
      :answer_c: 64
      :answer_d: 2
      :answer_e: 1
      :correct: a
      :feedback_a: This is the result of mystery(7) since this method is 2 to the nth power.  
      :feedback_b: This would be the result of mystery(8).
      :feedback_c: This would be the result of mystery(6).
      :feedback_d: This would be the result of mystery(1).
      :feedback_e: This would be the result of mystery(0).

      What value is returned as the result of ``mystery(7)``?
   
      .. code-block:: java

        public int mystery(int n) 
        { 
           if (n == 0) return 1;
           else return 2 * mystery (n - 1); 
        } 