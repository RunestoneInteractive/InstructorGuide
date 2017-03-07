=============================================
Interactive eBooks on Runestone Interactive
=================================================

.. Here is were you specify the content and order of your new book.

.. Each section heading (e.g. "SECTION 1: A Random Section") will be
   a heading in the table of contents. Source files that should be
   generated and included in that section should be placed on individual
   lines, with one line separating the first source filename and the
   :maxdepth: line.

.. Sources can also be included from subfolders of this directory.
   (e.g. "DataStructures/queues.rst").

SECTION 1: Introduction
:::::::::::::::::::::::

The Runestone platform allows you to create, modify, use, and serve interactive ebooks.

You can:

* Use any of the existing ebooks that are listed at the following link `here <http://runestoneinteractive.org/library.html>`_.
* Create a private custom course for your students as shown in the following link `custom-course <http://runestoneinteractive.org/customcourse.html>`_.  Your custom course will have to have a unique name and your students can register for the course using the unique name.

SECTION 2: Interactive Features
:::::::::::::::::::::::::::::::::

The ebooks allow learners to run and edit code using ActiveCode, visualize code execution, answer multiple-choice questions, answer fill in the blank questions, solve mixed up code problems, solve clickable code problems, match definitions to concepts, listen to audio tours of code, and more.

.. toctree::
      :maxdepth: 2

      Directives/activecodePython.rst
      Directives/activecodeOther.rst
      Directives/clickable.rst
      Directives/codelensPython.rst
      Directives/fillBlank.rst
      Directives/matching.rst
      Directives/mixedUp.rst
      Directives/multipleChoice.rst
      Directives/poll.rst
      Directives/shortAnswer.rst
      Directives/timedExam.rst

SECTION 3: Other Features
:::::::::::::::::::::::::::::::::::::::

.. toctree::
      :maxdepth: 2

      Directives/disqus.rst
      Directives/tabbedPanel.rst
      Directives/reveal.rst
      Directives/video.rst

SECTION 4: Creating a Custom Course
:::::::::::::::::::::::::::::::::::::::

SECTION 5: Using the Instructor Dashboard
::::::::::::::::::::::::::::::::::::::::::::
      
Section 6: Additional Useful Links
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Runestone uses the ``restructuredText`` (rst) markup language.  We chose this over markdown largely because rst is extensible.  Nearly all of the basic markup tasks are already handled by restructuredText.  You should check out the docs for the basics of restructuredText (link below). Our extensions are all for the interactive elements.  One key hint about restructuredText:  Its like **Python** -- *indentation matters!*

* `restructuredText Docs <http://docutils.sourceforge.net/rst.html>`_
* `Runestone Docs <http://runestoneinteractive.org/build/html/index.html>`_
* Join the discussion on our `Google Group <https://groups.google.com/forum/#!forum/runestone_instructors>`_
* Tell us about problems on `Github <https://github.com/RunestoneInteractive/RunestoneComponents>`_


