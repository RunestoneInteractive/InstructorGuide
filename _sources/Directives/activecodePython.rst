.. qnum::
   :prefix: 2-1-
   :start: 1

ActiveCode - Python
====================

..	index::
	single: activecode
	
The ActiveCode Feature allows you to execute Python code.  The Python code is translated to JavaScript and then run on the client. 


Running Python 
----------------

The following example calculates the body mass index (BMI) in Python for a person who is 5 feet tall and weighs 110 pounds.  Click on the *Run* button to run this code.

This example is from the *Student Computer Science Principles* ebook.  You can find it by clicking on the following `bmi <https://runestone.academy/runestone/static/StudentCSP/CSPrinTeasers/computeNumbers.html>`_.

.. activecode:: BMI2
    :nocodelens:
    
    height = 60    # in inches (60 inches is 5 feet)
    weight = 110   # in pounds
    heightSquared = height * height
    BMI = weight / heightSquared
    BMImetric = BMI * 703
    print("BMI:")
    print(BMImetric)
    
In Python you can also run programs that use Turtles which are similar turtles in Seymour Papert's LOGO programing language.  

This example in the *Student Computer Science Principles* ebook. You can find it by clicking on the following `turtle1 <https://runestone.academy/runestone/static/StudentCSP/CSPrinTeasers/computeTurtles.html>`_.

.. activecode:: Turtle_1
    :nocodelens:
	
    from turtle import *	# use the turtle library
    space = Screen()		# create a turtle space
    alex = Turtle()   		# create a turtle named alex
    alex.forward(150)		# move forward by 150 units
    alex.left(90)   		# turn by 90 degrees
    alex.forward(75)		# move forward by 75 units 
    
You can even manipulate the pixels in a picture. The code below removes all the red from the picture below. 

This example is from the *Student Computer Science Principles* ebook. You can find it by clicking on the following `image1 <https://runestone.academy/runestone/static/StudentCSP/CSPrinTeasers/computeImages.html>`_.

.. raw:: html

    <img src="../_static/arch.jpg" id="arch.jpg" >

.. activecode:: Images_1
    :nocodelens:

    from image import *

    # CREATE AN IMAGE FROM A FILE
    img = Image("arch.jpg")
    win = ImageWin(img.getWidth(),img.getHeight())

    img.draw(win)
    img.setDelay(1,15)

    # LOOP THROUGH ALL THE PIXELS
    pixels = img.getPixels()
    for p in pixels:

        # CLEAR THE RED
        p.setRed(0)
        img.updatePixel(p)

    # SHOW THE CHANGED IMAGE
    img.draw(win)    
    
Editing Python
---------------

Students can edit the code and run it again.  Try modifying the code below to calculate the BMI for a person who is 5 feet 7 inches tall and weighs 140 pounds and then run the code again.  Notice that the answer changes. 

This example is from the *Student Computer Science Principles* ebook.  You can find it by clicking on the following `bmi-edit <https://runestone.academy/runestone/static/StudentCSP/CSPrinTeasers/computeNumbers.html>`_.

.. activecode:: BMI-Edit2
    :nocodelens:
    
    height = 60    # in inches (60 inches is 5 feet)
    weight = 110   # in pounds
    heightSquared = height * height
    BMI = weight / heightSquared
    BMImetric = BMI * 703
    print("BMI:")
    print(BMImetric)
    
Stepping through Python Code using the CodeLens (Python Visualizer)
----------------------------------------------------------------------

You can also visualize the execution of the code in an active code step by step using Phillip Guo's Python Visualizer.  Click on the *Show Codelens* button in the example below.  Then click on the *Forward* button to execute the next line.

You can see this example in the *Student Computer Science Principles*  ebook by clicking on the following `mirror <https://runestone.academy/runestone/static/StudentCSP/CSPRepeatStrings/mirror.html>`_.

.. activecode:: Copy_Mirror
	
    # STEP 1: INITIALIZE ACCUMULATOR 
    newString = ""
    # STEP 2: GET DATA
    phrase = "This is a test"
    # STEP 3: LOOP THROUGH THE DATA
    for letter in phrase:
      	# STEP 4: ACCUMULATE
      	newString = letter + newString + letter
    # STEP 5: PROCESS RESULT
    print(newString)
    
Audio Tours of Code
---------------------

Audio tours use audio to describe the code.  When you start an audio tour it will highlight one or more lines of code as it explains the code.  It uses standard audio buttons to go forward, back, to the first, or to the last.  Click the *Audio Tour* button for an example, then click on *Lines of Code* to play that tour. You can create line by line tours or structural tours.  A structural tour would highlight all the lines that declare variables for example.  
  
You can try an example in the student CSP ebook by clicking on the following `mirror-audio <https://runestone.academy/runestone/static/StudentCSP/CSPRepeatStrings/mirror.html>`_.

Unit Tests of Code
----------------------

You can add unit tests to Python code.  These tests can be visible as shown below.

In the example below fix the code so that it passes both tests.

.. activecode:: units1
   :nocodelens:

   def add(a,b):
      return 4

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(add(2,2),4,"Sum a and b")
           self.assertAlmostEqual(add(2.0,3.0), 5.0, 5, "Sum a and b")

   myTests().main()
   
Or the tests can be invisible to the user as shown below.

This example is from the *How to Think Like a Computer Scientist* ebook.  See exercise 8 at the following link `Ex-8 <https://runestone.academy/runestone/static/thinkcspy/Selection/Exercises.html>`_.  Complete the code so that all the tests pass.

Write the function ``is_odd(n)`` that returns ``True`` when ``n`` is odd and ``False`` otherwise.

.. activecode:: odd
   :nocodelens:

   def is_odd(n):
       # your code here


   ====
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):
       def testOne(self):
           self.assertEqual(is_odd(10),False,"Tested is_odd on input of 10")
           self.assertEqual(is_odd(5),True,"Tested is_odd on input of 5")
           self.assertEqual(is_odd(1),True,"Tested is_odd on input of 1")
           self.assertEqual(is_odd(0),False,"Tested is_odd on input of 0")

   myTests().main()




 