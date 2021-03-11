Privacy and Runestone
=====================

In this week's update I want to tell you about some new account management features I added to Runestone, and give you some idea about how you could set up your class if you don't want Runestone to capture any Personally Identifiable Information (PII) about your students.

Runestone collects a lot of data.  I think it is all justified, and if you are an instructor you can gain some real insight into how your students are doing based on the data we collect and the reports we create for you. None of that requires any PII about your students.  Yet we do collect some... what do we collect? and why?

Here is what we we ask for when a student registers:

1. username - this can be anything and it is easy for this to NOT contain PII
2. email - This is the only reliable way to do password recovery.
3. First Name and Last Name - this has always been just for the instructors so that when they are grading assignments or looking at analytic reports, they know who they are looking at.
4. Password - encrypted and stored securely.
5. Name of the course.  The instructor has full control over this call it whatever you want.

Setting up a class with no PII
------------------------------

We will walk through two strategies for managing a Runestone Course that doesn't store any PII about a student.  The first strategy has the students register themselves following the instructions I'll tell you about.  The second strategy puts you in complete control and allows you to create all of the usernames for your students!

The way to use Runestone without PII is to ensure that your students choose a username that they remember but has nothing to do with their real identity.  They can also put in fake first names and last names.

The real trick is how to manage **password recovery**  Thats where this cool email alias trick comes in.  Most email systems (including gmail) support the `username+alias` convention.  That is you can add a `+` and an additional alias to your email address.  For example ``runestone+support@gmail.com`` or ``runestone+info@gmail.com`` both of those emails will end up in the ``runestone`` mailbox, but I can also see the alias.  We can use this feature so that students don't have to enter their real email address, they enter **yours** plus their username as the alias.  This means that you will end up fielding the password reset emails.  If you are an email whiz you can set up some rules to forward these to the right student.

Experience has shown that having students register themselves and get all of those pieces correct is a losing battle.  So why not put you in charge of registering them?  Get out your favorite spreadsheet app and prepare a file with your students information.

You can upload a CSV file with the following format:  One row for each student
::

    username,email,first_name,last_name,password,course

In order to protect your students privacy you can create a spreadsheet like the following:

::

    hogwarts-1,dumbledore+hogwarts1@gmail.com,F1,L1,owls4all,potions_fall19
    hogwarts-2,dumbledore+hogwarts1@gmail.com,F2,L2,owls4all,potions_fall19
    hogwarts-3,dumbledore+hogwarts1@gmail.com,F2,L2,owls4all,potions_fall19

.. admonition:: Note

    It is important that you check your CSV file and make sure there are NO SPACES before or after the commas!

From the Manage Students tab on the Instructor's Page, you can now upload this CSV file using the interface.

.. Figure:: Figures/student_management.png
    :width: 600

Once you have uploaded the CSV, you can add some columns to the spreadsheet that contain the real student information to help you remember.  You will probably learn quickly who your made up names correspond to, and can probably think of something anonymous that will help you remember who F1 L1 really is.  On the first day of class you may want to hand out paper for the students with their username, and walk them through changing the password, or maybe you want to assign each student a unique password when you are making up the spreadsheet.  I just would not recommend a scenario where all the students have the same password.

Of course all of this is optional.  You can also create a csv file with usernames of your choice and include the real email addresses and real first / last names of your students, or you can have them register themselves as students have been doing on Runestone since 2012.


Password and Account Management
-------------------------------

There is no doubt about it, password management is a headache for everyone.  Runestone handles *hundreds* of password reset requests each week.  But that does not always work.  Some schools (inexplicably) block email from Runestone.  Other schools run software that simply mangles the URL's found in emails that look like they are password reset emails.  This is understandable to some degree as Phishing scams are so common, and its important to protect the students.  I've done everything I can do from my side to validate the runestone.academy email domain.  But, other times students simply type in their email incorrectly.

When the email system for password resets do not work, I have now given instructors the ability to change the passwords for the students in their class.  Hopefully, this will eliminate the emails asking me to manually reset passwords when the reset emails are now flowing.  Runestone has gotten too big for me to deal with these requests, and I don't have any minions for that 😀.

Instructors cannot change their own passwords through this mechanism.  who among us hasn't walked away from the computer and left ourselves logged into Runestone?  As an instructor, you will still have to use the normal email password reset mechanism.  If your school blocks emails then I suggest you just get a free gmail address to use for this purpose.

One final note on account management.  When you use the Remove Student button, you are not actually deleting the student.  What I do is move the student out of your course so they do not clutter your gradebook or Student Progress page.  They are moved into the public version of the course you based your own course on.  This allows them to keep their username, as well as retrieve any of their work they did. If a student wants to truly delete themselve they do have that capability! From the 👤 menu select edit profile and from there the student can really delete themselves and all of their work.



What other Data Does Runestone Collect
--------------------------------------

Here is  a graph of all of the events that runestone has collected in the last 4 weeks.

.. Figure:: Figures/rsevents.png
    :width: 600

As you can see that is a lot of activecode and a lot of pages loaded.  Also over 1 million multiple choice questions answered! I would love to see more clickable area questions and more fill in the blanks.  Some of our preliminary research shows that those kinds of questions are much more effective at getting students to review the content in order to get a correct answer, rather than simply clicking on different answers until they guess correctly for multiple choice. All of these events are captured and tied to a username.  So the more anonymous your username the better as far as I'm concerned.

What I'm really interested in is figuring out how to apply machine learning algorithms to help identify students that may struggle, to help weed out bad questions, to help us write better questions, to help us order the textbook in different ways, to adapt to each student to help them achieve their maximum potential.

Runestone also collects the source code each time your student changes and runs the code in an activecode activity.  This is to provide a timeline for the student as well as for yourself.

* Make sure you explain the timeline to your students.  Sometimes there is great fear in them about changing code that is working.  Having this timeline present encourages them to experiment, knowing that they can always get back to a good working version.

* For you the timeline can be an invaluable tool for talking through an assignment with a student.  You can see their progress and if they make a wrong turn you can usually see that in the timeline and talk to them about why they decided to a particular direction.

* The timeline is also available in the scratch activecode which some students like to use as a notebook for the course.

