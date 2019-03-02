Multiple Choice Questions
=========================

Another common question type is the multiple choice question.

.. code-block:: rst

    .. mchoice:: uniqueid
        :multiple_answers: boolean  [optional]
        :random: boolean [optional]
        :answer_a: possible answer  -- what follows _ is label
        :answer_b: possible answer
        :answer_c: possible answer
        :answer_d: possible answer
        :answer_e: possible answer
        :correct: letter of correct answer or list of correct answer letters (in case of multiple answe
        rs)
        :feedback_a: displayed if a is picked
        :feedback_b: displayed if b is picked
        :feedback_c: displayed if c is picked
        :feedback_d: displayed if d is picked
        :feedback_e: displayed if e is picked

        Question text   ...


Here is an example from a Data Structures class:

.. mchoice:: stack_2
   :answer_a: 'x'
   :answer_b: the stack is empty
   :answer_c: an error will occur
   :answer_d: 'z'
   :correct: c
   :feedback_a: You may want to check out the docs for isEmpty
   :feedback_b: There is an odd number of things on the stack but each time through the loop 2 things are popped.
   :feedback_c: Good Job.
   :feedback_d: You may want to check out the docs for isEmpty

   Given the following sequence of stack operations, what is the top item on the stack when the sequence is complete?

   .. code-block:: python

     m = Stack()
     m.push('x')
     m.push('y')
     m.push('z')
     while not m.isEmpty():
        m.pop()
        m.pop()

The source code is here:

.. code-block:: rst

    .. mchoice:: stack_2
        :answer_a: 'x'
        :answer_b: the stack is empty
        :answer_c: an error will occur
        :answer_d: 'z'
        :correct: c
        :feedback_a: You may want to check out the docs for isEmpty
        :feedback_b: There is an odd number of things on the stack but each time through the loop 2 things are popped.
        :feedback_c: Good Job.
        :feedback_d: You may want to check out the docs for isEmpty

        Given the following sequence of stack operations, what is the top item on the stack when the sequence is complete?

        .. code-block:: python

            m = Stack()
            m.push('x')
            m.push('y')
            m.push('z')
            while not m.isEmpty():
                m.pop()
                m.pop()
