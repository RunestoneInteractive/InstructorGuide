Grading
=======

To grade student performance, go back to the instructor's interface and click on the grading tab. You'll see something like this.

.. image:: Figures/gradingTab.JPG

Typically, you will select an assignment from the first dropdown, then a question from the second, and a student from the third, though there are some other options for the order in which to specify which work to grade.

.. image:: Figures/questionToGrade.JPG

You will see the last version of code that the student ran prior to the assignment deadline. Click run to execute it. Drag the little scrubber across the timeline next to the Run button to see other versions of the code that the student ran.

You can assign a number grade (number of points) and, optionally, leave a comment.

Click Save and Next to automatically move on the next item to grade. If you have students in the rightmost column, that would be the next student's work for the same problem. If you have questions in the righmost column, it would move to the next question for the current student.

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

When you are satisfied that the grade totals have been calculated correctly, click on the Release Grades button at the bottom left. This makes them visible to students. If you make any subsequent changes to grades, you will need to click Calulate Totals again, but you will not need to click on Release Grades again: once released, they stay released.

How a Student Sees Grades and Comments
--------------------------------------

When viewing an assignment, a student can click on the "Show Feedback" button to see a score and any instructor comments.

.. image:: Figures/studentFeedback.JPG