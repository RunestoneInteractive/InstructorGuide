.. qnum::
   :prefix: 2-5-
   :start: 1

Fill in the Blank
====================

..	index::
	single: fill in the blank
	
The fill in the blank feature allows the student to type an answer and check the answer.  It can be used to make students predict the result of running some code as shown below.  

The following example is from the student CSP ebook.  

.. fillintheblank:: Shape_fill

    .. blank:: 1_5_2_Shape
        :correct: ^square$|^Square$|^SQUARE$
        :feedback1: ('.*','Did you actually run the program?')

        What shape will the program below draw when you click on the Run button? 

.. activecode:: Turtle_Shape
    :nocodelens:
	
    from turtle import *	# use the turtle library
    space = Screen()    	# create a turtle screen (space)
    zari = Turtle()   		# create a turtle named zari
    zari.setheading(90) 	# Point due north
    zari.forward(100)   	# tell zari to move forward by 100 units
    zari.right(90)       	# turn by 90 degrees
    zari.forward(100)   	# tell zari to move forward by 100 units
    zari.right(90)       	# turn by 90 degrees
    zari.forward(100)   	# tell zari to move forward by 100 units
    zari.right(90)      	# turn by 90 degrees
    zari.forward(100)    	# tell zari to move forward by 100 units
    zari.right(90)       	# turn by 90 degrees
   

