Adding an Exercise to the Exercise Bank
=======================================

.. youtube:: l84cb4wtM8g
    :height: 315
    :width: 560
    :align: left

Although all of the Runestone books have a pretty good selection of exercises, you can never have too many exercises.  We hope to crowd source an enormous collection of questions and problems in our Exercise database.   You can help by adding custom exercises for your own course to the database!  Once your exercise is in the database it is available for others to find using the search feature on the create assignment page.

Since the most common exercises are programming exercises let's look at the activecode directive in detail.   Here is the full directive with every possible option.  This is what you would see if you add an activecode exercise from the web interface.   Let's not get bogged down in the details here, let's look at a much simpler example.

.. code-block:: rst

    .. activecode:: uniqueid   'nocanvas': directives.flag,
        :nopre: do not create an output component
        :above: put the canvas above the code
        :autorun: run this activecode as soon as the page is loaded
        :autograde:  typically unittest
        :caption: caption under the active code
        :include: invisibly include code from another activecode
        :hidecode: Don:t show the editor initially
        :language: python, html, javascript, java, python2, python3
        :tour_1: audio tour track
        :tour_2: audio tour track
        :tour_3: audio tour track
        :tour_4: audio tour track
        :tour_5: audio tour track
        :nocodelens: Do not show the codelens button
        :coach: Show the codecoach button
        :timelimit: set the time limit for this program
        :stdin: : A file to simulate stdin (java, python2, python3)
        :datafile: : A datafile for the program to read (java, python2, python3)
        :sourcefile: : source files (java, python2, python3)
        :available_files: : other additional files (java, python2, python3)

        If this is a homework problem instead of an example in the text
        then the assignment text should go here.  The assignment text ends with
        the line containing four tilde ~
        ~~~~
        print("hello world")
        ====
        print("Hidden code, such as unit tests come after the four = signs")

Let's make an exercise to have the student compute the sum of the first N numbers.

.. activecode:: sigcse_ex1
    :language: python

    Write a Python function to sum the first N numbers starting with 0.  So if N is 4 then your function should add 0 + 1 + 2 + 3
    ~~~~
    def sum_first_n(N):
        # your code here

The source code for the above looks like this:

.. code-block:: rst

    .. activecode:: sigcse_ex1
        :language: python

        Write a Python function to sum the first N numbers starting with 0.  So if N is 4 then your function should add 0 + 1 + 2 + 3
        ~~~~
        def sum_first_n(N):
            # your code here

Indentation and whitespace is important.  In the previous example, you will see that the optional directive ``:language:`` is indented by four spaces.  from the previous line.   It must be indented at least three spaces to line up with the "a" in activecode, but using 4 keeps it consistent with my own personal python indentation style.   Everything else in the body of the directive must also be indented to match the indentation of the optional parameters.

You can enter this into a textbox by clicking on the "Write" button under the Problems area.

.. image:: Figures/enter_rst.png


After you enter the text you need to compile and render the text.  You can get a preview of your question on the right of the page.

.. image:  Figures/preview_rst.png

The first part of the directive body are the instructions for the student.  You can use any valid restructured text (rst) in this part of the directive including embedded images.  You separate the instructions from any code you want to give the student with ``~~~~`` thats four tildes.  The next part of the body is any code you want to provide.  Just put in your Python or other language as you would normally write it.

To keep an exercise page looking a bit neater you can substitute the ``.. actex::`` directive for the ``.. activecode::`` directive.  Making that substitution gives us the following:

.. actex:: sigcse_ex2
    :language: python

    Write a Python function to sum the first N numbers starting with 0.  So if N is 4 then your function should add 0 + 1 + 2 + 3
    ~~~~
    def sum_first_n(N):
        # your code here



Unit Testing exercises
----------------------

Of course, as you have learned in the previous section, the real killer feature of these exercises is to be able to create your own unit tests, and have the grader autograde the assignment.

Let's expand our example to include some simple unittests.  We can do this by adding a hidden block of code to our previous example that uses the standard Python unittest framework.

.. code-block:: python

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(add(2,2),4,"A feedback string when the test fails")
            self.assertAlmostEqual(add(2.0,3.0), 5.0, 1, "Try adding your parmeters")

    myTests().main()

If you are not familiar with Python unittests they are pretty easy to write.  You create your own class that is a subclass of TestCase, or in our work TestCaseGui so we get some graphical output. Your tests are all methods of the class and must start with the word "test".  There are a host of assertXXXX functions that you can use.  Check out the `unittest documentation here <https://docs.python.org/2/library/unittest.html#assert-methods>`_

The second important addition in this example is the :autograde: option.  This will allow the grade to make use of your unittests and assign a grade automatically for this particular problem.


.. activecode:: sigcse_ex3
    :language: python
    :autograde: unittest

    Write a Python function to sum the first N numbers starting with 0.  So if N is 4 then your function should add 0 + 1 + 2 + 3
    ~~~~
    def sum_first_n(N):
        # your code here
    ====
    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(sum_first_n(4),6,feedback="0 + 1 + 2 + 3 == 6")
            self.assertEqual(sum_first_n(0),0,feedback="summing 0 numbers should be 0")

    myTests().main()

Let's try to add another test to the example above.  This time we'll show the unittests in the active code window to make it easy for us to test.  I strongly recommend you do this in a scratch activecode window when you are writing a question.  It will save lots of frustrating wait time as you work out the details of your testing.


Let's try to add another test to the example above.  This time we'll show the unittests in the active code window to make it easy for us to test.  I strongly recommend you do this in a scratch activecode window when you are writing a question.  It will save lots of frustrating wait time as you work out the details of your testing.

.. activecode:: sigcse_ex4
    :language: python

    Write a Python function to sum the first N numbers starting with 0.  So if N is 4 then your function should add 0 + 1 + 2 + 3
    ~~~~
    def sum_first_n(N):
        # your code here

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

        def testOne(self):
            self.assertEqual(sum_first_n(4),6,feedback="0 + 1 + 2 + 3 == 6")
            self.assertEqual(sum_first_n(0),0,feedback="summing 0 numbers should be 0")

    myTests().main()


Advanced activecode Options
---------------------------

* :include:  -- This option lets you include other activecodes in the current

* :timelimit: seconds -- What to do when students create an infinite loop and lock up their browser?  Just wait a bit, every run of Python has a built in time limit of 30 seconds.  Some things might take longer than this, so if you know an example or assignment is going to take longer, then you can set a higher time limit with this option.

* :nocodelens: -- codelens is an awesome addition, but it does not work with very many libraries.  This is part of the sandboxed security of the codelens server.   The most common one to be aware of is the turtle module.  If you are doing a turtle example or assigning a turtle problem then you should set this flag so the "Show Codelens" button is hidden.

For languages outside the browser
---------------------------------

* :language: -- As you saw earlier, Runestone supports Java, python2, and python3 in a sandboxed server environment environment.

If you choose any of the above, the code from the window is packaged up and set to a separate server for compilation and execution.  There are a few options to activecode that only apply to these languages.

* :datafile:  You can provide an id to a datafile that will be sent along with your Java code

* :sourcefile: You can provide additional source files that should be compiled along with the java file you upload.

* :available_files: You can provide additional binary files to link into the final executable.
