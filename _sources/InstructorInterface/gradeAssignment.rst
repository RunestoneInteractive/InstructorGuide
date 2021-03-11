Grading
=======

.. youtube:: ArghLTeeSvc
    :height: 315
    :width: 560
    :align: left

To grade student performance, go back to the instructor's interface and click on the grading tab. You'll see something like this.

.. image:: Figures/grading_tab.png

Typically, you will select an assignment from the first dropdown.  This will show you summary of the elements that are automatically graded.  The other option is Chapter and you can use this to drill in on a chapter and look at a students work on any problem in the textbook regardless of whether it was part of an assignment.

.. image:: Figures/assignment_selected.png

From here you can also select a question or questions as well as a student or students to manually grade a problem.  You can also use this to view a students answer to an automatically graded problem if they have a question about their score.

.. image:: Figures/manual_grading.png

You will see the last version of code that the student ran prior to the assignment deadline. Click run to execute it. Drag the little scrubber across the timeline next to the Run button to see other versions of the code that the student ran.

You can assign a number grade (number of points) and, optionally, leave a comment.  As you tab out of the grade box you will see it turn green to indicate that the grade has been updated in the database. Similarly if you leave a comment it will automatically update the database with the comment for the student.


If you prefer to work on one question at a time there is a save and next button that will automatically move on the next item to grade. 



Autograde
---------

Some questions have been configured for auto-grading, in particular coding problems with unit tests and some multiple choice problems. If you click on the Autograde button on the left side, the autograder will run. It will pop up an alert box to give you a diagnostic about how many question-student pairs were autograded.

Some things to note about the autograder:

* If a question is selected, the autograder will run only for that question.
* If a student is also selected, the autograder will run for only that question-student combination.
* To run the autograder for all the questions and students for a particular assignment, refresh the page, select the assignment, and click the autograde button before selecting a question or student.
* You can manually override the grade assigned by the autograder using the grading form on the right side. Be sure to change the comment as well.
* If you rerun the autograder, it will not run on any student-question pair where you have changed the comment.

Calculate Totals
----------------

Once you have graded all the questions on an assignment, click the Caclulate Totals button to compute the total scores for the whole assignment, or to recalculate them after updating a grade. Again, an alert box will pop up to provide diagnostics about the min and max scores that were calculated.

.. image:: Figures/calculate_totals.png

Release Grades
--------------

When you are satisfied that the grade totals have been calculated correctly, click on the Release Grades button at the bottom left. This makes them visible to students. If you make any subsequent changes to grades, you will need to click Calculate Totals again, but you will not need to click on Release Grades again: once released, they stay released.

How a Student Sees Grades and Comments
--------------------------------------

When viewing an assignment, a student can click on the "Show Feedback" button to see a score and any instructor comments.

.. image:: Figures/studentFeedback.JPG

In addition the user menu allows the student to see a summary of their progress.

.. image:: Figures/student_progress.png
