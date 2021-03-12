Exams and Quizzes in Runestone
==============================


.. figure:: Figures/assignmentMain.png
    :width: 800px
    :align: center
    :alt: Check the timed exam checkbox
    :figclass: align-center
    
    Figure 1: Creating an exam from an assignment


If you look at Figure 1 on this page again, you will see there is a checkbox labelled "Show as Timed Assessment"  This turns a problem assignment into an exam.  There are severall things to note about this.  First is the appearance to the students, when the students first see a timed exam it looks like this:

.. figure:: Figures/timedExamStart.png
    :width: 800px
    :align: center
    :alt: Check the timed exam checkbox
    :figclass: align-center

They cannot see any of the questions until they click the start button.  When the start button is clicked the timer (if selected) is also started.

During an exam the students see just one question at a time. They can navigate the questions by number or they can use the prev/next buttons to go from question to question.

When the student navigates to the new question the question they were on is evaluated and the results are sent to the server. Questions that a student has attempted are marked as grey on the numbered interface so students know which questions they have answered.

During an exam the student will not see any feedback on whether they answered the questions right or wrong.  Once the exam is completed they will see that feedback unless you have checked the don't show feedback checkbox.

It is important to remind students that if they close the tab or their browser or navigate away from the page or even try to refresh the page, the exam is over and they will not be able to answer any more questions.  Once they click the finish exam button they are done.  As an instructor you can reset a students exam from the instructors page, but they will be forced to start over. 

When a student submits their exam with the finish exam button or when the exam is automatically submitted due to time expiring, the autograder is run on the server and a score is recorded.  If all your questions are autogradable you're done!  If not you can use the grading interface to manually grade any questions.

.. figure:: Figures/timedExamUI.png
    :width: 800px
    :align: center
    :alt: Check the timed exam checkbox
    :figclass: align-center


Resetting an Exam
-----------------

The instructor interface allows you to reset an exam for any student.

.. figure:: Figures/timedExamReset.png
    :width: 800px
    :align: center
    :alt: resetting an exam
    
You just select the student and the assignment name and then press the red button.
    