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

The index file will contain regular restructuredText (rst) markup plus a table of contents.  Using rst you can get most of the normal things you want when writing.  Sections, subsections, and subsubsections are indicated by "underlining" titles with different characters.  In the example below you see SECTION 1: Introduction is underlined with :::.   To make a subsection of section 1 you could underline the next heading with ==== .   You can make **bold text** by surrounding text with two asterisks like this:  ``**bold text**`` *Italicised text* uses a single asterisk:  ``*Italicised text`` and ``code or verbatim`` text can be displayed inline using double backticks ````code````.

Bulleted lists are created using asterisks or dashes:

* bullet 1
* bullet 2
* bullet 3

  * sub-bullets must be indented and aligned with their parent
  

::
  
    * bullet 1
    * bullet 2
    * bullet 3

      * sub-bullets must be indented and aligned with their parent

Numbered lists work the same but use a number followed by a period.

1. number 1
1. number 2
1. number 3

   1. an indented number

::

    1. number 1
    1. number 2
    1. number 3

       1. an indented number

You can include images using an image Directive

::

    .. image:: /path/to/file.jpg

And you can statically format large blocks of code with the ``.. code-block:: language`` directive.

::

    .. code-block:: python

        for i in range(5):
            print("hello world")

directives create block level html and all of them have the same template:

::

    .. directive_name:: requiredArg1 requiredArg2 ...
        :optional arg1:
        :optional arg2:
        ....

        body of the directive

.. attention:: 
    
    Just like Python, indentation is important for directives!


In the next section we will look specifically at a few of the directives you may want to use in an assignment.

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
