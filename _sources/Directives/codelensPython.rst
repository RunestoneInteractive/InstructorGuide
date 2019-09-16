.. qnum::
   :prefix: 2-4-
   :start: 1

Codelens in Python
====================

..	index::
	single: codelens
	
The codelens feature allows the learner to step through Python code using the Python Visualizer from Philip Guo and see the values of the variables change as the code executes.  

The following example in Python is from the *Student Computer Science Principles*.  You can see the following example by click on the following link `Codelens-Python <https://runestone.academy/runestone/static/StudentCSP/CSPNameNumbers/driving.html>`_.

.. codelens:: Chicago_2_Dallas_Cost

   distance = 924.7
   mpg = 35.5
   gallons = distance / mpg
   costPerGallon = 3.65
   costTrip = gallons * costPerGallon
   
Codelens with Questions
========================

You can embed questions in a Python codelens so that the learner is asked a question before a particular line executes.  

.. codelens:: codelens_question_line
    :question: After the line with the red arrow is executed, which will be next?
    :breakline: 3
    :feedback: Remember that in an if/else statement only one block is executed.
    :correct: line

    x = 2
    y = 0
    if x % 2 == 1:
        print('x is odd')
        y = y + x
    else:
        print('x is even')
        y = y - x
   
Codelens in Java
====================

Currently we can not easily embed the Java Visualizer in an ebook.  We can embed a link to the Java Visualizer that has the code preloaded.  
   
The following example is from the *Java Review* ebook.  Click on the following link to step through the example `Arrays-in-Java <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Test+%7B%0A+++%0A+++private+int%5B+%5D+a+%3D+%7B-10,+-5,+1,+4,+8,+30%7D%3B%0A%0A+++public+void+doubleLast()%0A+++%7B%0A++++%0A+++++++for+(int+i+%3D+a.length+/+2%3B+i+%3C+a.length%3B+i%2B%2B)%0A+++++++%7B%0A+++++++++++a%5Bi%5D+%3D+a%5Bi%5D+*+2%3B%0A+++++++%7D%0A+++%7D%0A+++%0A+++%0A+++public+static+void+main(String%5B%5D+args)+%7B%0A++++++%0A++++++Test+myTest+%3D+new+Test()%3B%0A++++++myTest.doubleLast()%3B%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.
