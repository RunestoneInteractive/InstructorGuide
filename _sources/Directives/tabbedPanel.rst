.. qnum::
   :prefix: 3-2-
   :start: 1

Tabbed Panel
=================

..	index::
	single: tabbed panel
	
A tabbed panel can have several tabs.  It is often used to show a problem and an answer.  
                
The following is from the *Java Review* ebook.  See it at the following link `JavaTimed <http://interactivepython.org/runestone/static/JavaReview/VariableBasics/VariablePractice.html>`_.

.. tabbed:: Java1

        .. tab:: Question

           
           The following code should calculate the cost of a trip that is 300 miles if gas is $2.50 a gallon and your car gets 36 miles per gallon.  However, the code has syntax errors, like missing semicolons, wrong case on names, or unmatched ``"`` or ``(``.  Fix the code so that it compiles and runs correctly.  
           
           .. activecode::  Java1q
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int tripMiles = 300
                      Double price = 2.50;
                      int milesPerGallon = 36;
                      double numberOfGallons = tripmiles / milesPerGallon;
                      double totalCost = numberOfGallons * price;
                      System.out.println(totalCost);
                  }
              }


        .. tab:: Answer
        
           Line 5 is missing a semicolon.  Line 6 has ``Double`` instead of ``double``.  Remember that the primitive types all start with a lowercase letter.  Line 8 has ``tripmiles`` instead of ``tripMiles``.  Remember that you should uppercase the first letter of each new word to make the variable name easier to read (use camel case).
        
           .. activecode::  Java1a
              :language: java
   
              public class Test1
              {
                  public static void main(String[] args)
                  {
                      int tripMiles = 300;
                      double price = 2.50;
                      int milesPerGallon = 36;
                      double numberOfGallons = tripMiles / milesPerGallon;
                      double totalCost = numberOfGallons * price;
                      System.out.println(totalCost);
                  }
              }
              
The following example is from the *How to Think Like a Computer Scientist* ebook.  See the following link `Tabbed <http://interactivepython.org/runestone/static/thinkcspy/Lists/Exercises.html>`_.

.. question:: tabex

   .. tabbed:: q7

        .. tab:: Question


           .. actex:: count_odd

              Write a function to count how many odd numbers are in a list.

              ~~~~

              def countOdd(lst):
                  # your code here

              ====
              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(countOdd([1,3,5,7,9]),5,"Tested countOdd on input [1,3,5,7,9]")
                      self.assertEqual(countOdd([1,2,3,4,5]),3,"Tested countOdd on input [-1,-2,-3,-4,-5]")
                      self.assertEqual(countOdd([2,4,6,8,10]),0,"Tested countOdd on input [2,4,6,8,10]")
                      self.assertEqual(countOdd([0,-1,12,-33]),2,"Tested countOdd on input [0,-1,12,-33]")

              myTests().main()



        .. tab:: Answer

            .. activecode:: q7_answer

                import random

                def countOdd(lst):
                    odd = 0
                    for e in lst:
                        if e % 2 != 0:
                            odd = odd + 1
                    return odd

                # make a random list to test the function
                lst = []
                for i in range(100):
                    lst.append(random.randint(0, 1000))

                print(countOdd(lst))
