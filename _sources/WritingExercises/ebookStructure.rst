The Structure of a Runestone eBook
==================================


::

    index.rst
    Chapter1
        section1.rst
        section2.rst
        section3.rst
    Chapter2
        section1.rst
        section2.rst
        section3.rst

Here is the index.rst file for this book:

.. code-block:: rst

    SECTION 1: Introduction
    :::::::::::::::::::::::

    The Runestone platform allows you to create, modify, use, and serve interactive ebooks.

    You can:

    * Use any of the existing ebooks that are listed at the following link `here <http://runestoneinteractive.org/library.html>`_.
    * Create a private custom course for your students as shown in the following link `custom-course <http://runestoneinteractive.org/customcourse.html>`_.  Your custom course will have to have a unique name and your students can register for the course using the unique name.

    SECTION 2: Interactive Features
    :::::::::::::::::::::::::::::::::

    The ebooks allow learners to run and edit code using ActiveCode, visualize code execution,
    answer multiple-choice questions, answer fill in the blank questions, solve mixed up code
    problems, solve clickable code problems, match definitions to concepts, listen to audio tours of
    code, and more.

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
