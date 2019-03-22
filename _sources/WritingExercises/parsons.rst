Mixed-Up Code (Parsons)
=========================

Mixed-up code or Parsons problems provide the correct code to solve a problem, but the code is broken into blocks and mixed up.

.. code-block:: rst

    .. parsonsprob:: unqiue_problem_id_here
       :maxdist:
       :order:
       :language:
       :noindent:
       :adaptive:
       :numbered: left

       Instructions for the user.  These can include a textual description of how to solve the problem.  You must leave a blank line before this.
       -----
       def findmax(alist):
       =====
          if len(alist) == 0:
             return None
       =====
          curmax = alist[0]
          for item in alist:
       =====
             if item &gt; curmax:
       =====
                curmax = item
       =====
          return curmax

Create a working program and then paste the code for it to create a Parsons problem.  Indent the code so that the left edge lines up with the options.  Indent each line with 4 spaces beyond the previous line.  Separate the blocks with "=====" which must line up under the options.  Put the instructions before the code after a blank line and then followed by "-----".

Parsons Options
-----------------

Options are indented under the Parsons directive (under the p).

.. csv-table:: Parsons Problems Options
   :header: "Option", "Description"

   "maxdist", "The maximum number of distractors to use.  They will be picked at random"
   "order", "The order for the lines, they are displayed in a random order normally"
   "language", "Specify the language: java, python"
   "noindent", "Provide the indentation for the user by adding spaces to the left of the code"
   "adaptive", "Provide help is the user is struggling and modify the difficulty of the problem based on the user's performance on the previous problem"
   "numbered", "Show numbered labels to the left of the code if you add left or to the right when you add right"

Parsons Distractor Types
--------------------------
You can include distractor blocks in the problem. A distractor is code that isn't needed in a correct solution, such as code with a syntax error. Add a distractor block after the correct code block.  Distractors can either be paired or unpaired.  For paired distractors use #paired at end of the first line of code in the distractor block.  For unpaired distractors add #distractor.

Example with Paired Distractors
---------------------------------

Here is an example with paired distractors from a data oriented intermediate programming course in Python.

.. parsonsprob:: mt1dict1ex
   :numbered: left

   Complete the function greater_dictionary. Given a dictionary d and an integer cutoff, return a dictionary that contains only the key-value pairs where they key is greater than or equal to cutoff.
   -----
   def greater_dictionary(d, cutoff):
   =====
   def greater_dictionary(self, d, cutoff): #paired
   =====
       result = {}
   =====
       for key in d.keys():
   =====
       for key in range(d): #paired
   =====
           if key >= cutoff:
   =====
           if key > cutoff: #paired
   =====
               result[key] = d[key]
   =====
               d[key] = result[key] #paired
   =====
       return result

The source code for this problem is shown here:

.. code-block:: rst

   .. parsonsprob:: mt1dict1ex
      :numbered: left

      Complete the function greater_dictionary. Given a dictionary d and an integer cutoff, return a dictionary that contains only the key-value pairs where they key is greater than or equal to cutoff.
      -----
      def greater_dictionary(d, cutoff):
      =====
      def greater_dictionary(self, d, cutoff): #paired
      =====
          result = {}
      =====
          for key in d.keys():
      =====
          for key in range(d): #paired
      =====
              if key >= cutoff:
      =====
              if key > cutoff: #paired
      =====
                  result[key] = d[key]
      =====
                  d[key] = result[key] #paired
      =====
          return result

Example with Unpaired Distractor
---------------------------------

Here is an example with an unpaired distractor.

.. parsonsprob:: 2_swapex
   :noindent:

   The following has the correct code to 'swap' the values in x and y (so that x ends up with y's initial value and y ends up with x's initial value), but the code is mixed up and contains <b>one extra block</b> which is not needed in a correct solution.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.
   -----
   int x = 3;
   int y = 5;
   int temp = 0;
   =====
   temp = x;
   =====
   x = y;
   =====
   y = temp;
   =====
   y = x; #distractor

The source code for this problem is shown here.

.. code-block:: rst

   .. parsonsprob:: 2_swapex
      :noindent:

      The following has the correct code to 'swap' the values in x and y (so that x ends up with y's initial value and y ends up with x's initial value), but the code is mixed up and contains <b>one extra block</b> which is not needed in a correct solution.  Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me</i> button.  You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.
      -----
      int x = 3;
      int y = 5;
      int temp = 0;
      =====
      temp = x;
      =====
      x = y;
      =====
      y = temp;
      =====
      y = x; #distractor
