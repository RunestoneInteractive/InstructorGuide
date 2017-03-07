.. qnum::
   :prefix: 2-2-
   :start: 1

ActiveCode - Other
====================

..	index::
	single: activecode
	
The ActiveCode Feature also allows you to execute JavaScript, or HTML directly on the client.  Other languages like Java are run on a backend server, which means that you must have internet access to run those programs.

Running JavaScript 
--------------------

.. activecode:: jstest1
   :language: javascript
   :nocodelens:

   for(i = 0; i < 10; i++) {
       writeln("the number is " + i)
   }
   
You can see this example in the Fundamentals of Web Programming ebook at `JavaScript1 <http://interactivepython.org/runestone/static/webfundamentals/Javascript/iteration.html>`_.
   
Running HTML
-----------------

.. activecode:: htmltest1
   :language: htmlmixed
   :nocodelens:

   <ul>
   <li>This is an unordered list</li>
   <li>The <code>li</code> tags come between two <code>ul</code> tags
   </ul>
   
You can see this example in the Fundamentals of Web Programming ebook at `HTML1 <http://interactivepython.org/runestone/static/webfundamentals/HTML/advanced.html#unordered-lists>`_.

Running HTML with JavaScript
--------------------------------

.. activecode:: jstest1
   :language: htmlmixed
   :nocodelens:

   <html>
      <body>
         <h1>Hello World!!</h1>
         <button onclick="changeThisPageFunc();">Click Me!</button>
         <script type="text/javascript">
            changeThisPageFunc = function() {
               document.body.style.backgroundColor = "lightblue";
               document.body.innerHTML = "<h1>I am a little blue today</h1>";
            }
         </script>
      </body>
   </html>
   
You can see this example in the Fundamentals of Web Programming ebook at `HTML+JavaScript <http://interactivepython.org/runestone/static/webfundamentals/Javascript/intro.html>`_.

Running Java
-----------------

You can run Java code as well.  It will be sent to a backend server (Jobe) and executed and then the results will be displayed in the browser window.  

.. activecode:: java1
   :language: java
   
   public class Test1
   {
      public static void main(String[] args)
      {
        int score = 0;
        System.out.println(score);
        score = score + 1;
        System.out.println(score);
      }
   }
  
Editing Java
---------------------

Students can edit the code and run it again.  Change the code below to print a countdown from 10 to 1.  

.. activecode:: while_loop_ex1
   :language: java
   
   public class Test
   {
      public static void main(String[] args)
      {
          int x = 3;
          while (x > 0)
          {
             System.out.println(x);
             x = x - 1;
          }
      }
   }
   
You can see this example in the Java Review ebook at `While <activepython.org/runestone/static/JavaReview/LoopBasics/lbasics.html>`_.

Stepping Through Java Code using the Java Visualizer
----------------------------------------------------------------------

You can embed links to Phillip Guo's Java Visualizer which will allow you to preload the code.  To see an example click on the following `VisEx <http://cscircles.cemc.uwaterloo.ca/java_visualize/#code=public+class+Test%0A%7B%0A+++public+static+void+main(String%5B%5D+args)%0A+++%7B%0A++++++int+x+%3D+3%3B%0A++++++while+(x+%3E+0)%0A++++++%7B%0A+++++++++System.out.println(x)%3B%0A+++++++++x+%3D+x+-+1%3B%0A++++++%7D%0A+++%7D%0A%7D&mode=display&curInstr=0>`_.

We hope to embed the Java Visualizer in the ebook in the future in the same way the Python Visualizer is embedded.

Audio Tours of Code
---------------------

You can have audio tours of any language.  See the following link for an example in the Java Review ebook at 
  `Java-Audio-Tour <http://interactivepython.org/runestone/static/JavaReview/JavaBasics/firstClass.html>`_.


 