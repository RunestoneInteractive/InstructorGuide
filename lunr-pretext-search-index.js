var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-1",
  "level": "1",
  "url": "frontmatter-1.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Brad Miller, PhD. Professor Emeritus Luther College  Founder, President, Runestone Academy     "
},
{
  "id": "Introduction",
  "level": "1",
  "url": "Introduction.html",
  "type": "Chapter",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction   Welcome to the Runestone Academy instructor interface. This guide will try to help you navigate the various tasks that you can do with Runestone. Your first question might be what are those tasks?  Create a Course  Add and remove students  Add and remove TAs or co-instructors  Create homework assignments  Grade the homework assignments  Prepare for class by understanding where my students are confused  Configure the spaced practice tool for my students  Prepare an assessment for my students to take online with Runestone  Use Peer Instruction during class  Configure Runestone to work with Canvas or Moodle  While that is a long list of things that you can do there is very little that you must do. Many instructors use Runestone Academy very minimally at first and then do more the next time.    The Runestone Philosophy  The primary reason that Runestone was created was to be an interactive eBook server that would motivate students to actually read and experiment with the content provided by the author. This idea was born in my head in the fall of 2010 as I was suffering from a serious case of writers block while trying to work on a second edition of a paper textbook. Why should textbooks be static? Especially computer science textbooks!? From this frustration I stopped working on the update and started trying to create an interactive computer science textbook. My primary motivation was to make every example runnable and editable so that students could read code, run code, and then modify that code to see how it behaved differently with their changes.  Having come to Luther College from the and an internet startup company, I also knew the value of collecting data. So I also set out to make sure that every action a student took within the textbook was captured. I had no idea what we were going do with the data, but my intuition was that we could learn valuable lessons about how students were learning if we captured and analyzed enough data. Collect the data first and then figure out how to make use of it later.  Everything else you see about Runestone Academy today came later, and I'll cover more of that evolution in . But the takeway is that for us the student experience is always foremost in our minds. Everything that you as an instructor can do with Runestone follows from that philosophy of collect the data first and then see what we can do with it.  I had never heard of the term Learning Engineering until the summer of 2021, but that is really what Runestone is and has always been about.  Learning Engineering is the systematic application of evidence-based principles and methods from educational technology and the learning sciences to create engaging and effective learning experiences, support the difficulties and challenges of learners as they learn, and come to better understand learners and learning. It emphasizes the use of a human-centered design approach in conjunction with analyses of rich data sets to iteratively develop and improve those designs to address specific learning needs, opportunities, and problems, often with the help of technology. Today (August 2022) if you asked me I would say that Runestone is a LEAP . A learning Engineering and Analytics Portal. Many of the innovative features in Runestone have come from first class pedagogical research. All of Runestone has been evolved over the years by paying attention to the data we collect and the feedback we get from instructors and students. All of this has been possible because we realized early on that most instructors do not want to run and manage their own servers, and that we could provide a valuable service by providing a portal to free, high quality interactive textbooks.  The diagram below illustrates what we are trying to create. Which is a virtuous circle whereby students learn more effectively, teachers can learn to teach more effectively, and authors can learn to write better textbooks.   All of this is to say that although Runestone supports many of the functions of an LMS, Runestone was never designed to be an LMS. Runestone is much more, and in order for you as an instructor to get the most out of Runestone you may need to adjust your thinking and expectations. Hopefully this guide will help you do that.    Courses Versus Books  The first thing to understand about Runestone is the difference between a book and a course. This has long been a point of confusion. Runestone was originally conceived of as a system for building interactive textbooks. But, as soon as you start to include interactive things like coding and multiple choice questions the next logical step is for someone (likely you - dear reader) to want to evaluate that work and record a grade. A grade only makes sense in the context of a course, so we created the ability for you to make a course for your students. But because the central notion always was a book there has always been the limitation that a course can only be tied to a single book. This limitation continues, but is something we are thinking about how to relax in the future. In the meantime will guide you through the process of creating a course around your chosen textbook.  The fact that Runestone allows you to do many of the things that you would normally do in an LMS like Canvas or Moodle has led many people to think of Runestone as an LMS like system. We reject that label and claim that Runestone is much more than an LMS. Runestone is a LEAP Learning Engineering and Analytics Portal. Briefly, Learning Engineering is is the systematic application of evidence-based principles and methods from educational technology and the learning sciences to create engaging and effective learning experiences, support the difficulties and challenges of learners as they learn, and come to better understand learners and learning. See   Because a book and a course are so tightly coupled we can do many things that an LMS cannot. We can collect much more fine-grained data about what your students are doing. Your students can do their homework by answering questions as they read them in context, or they can answer them on a homework page that has only the questions. In fact it does not matter where they do their work if they answer the question in one place it will also appear in the other. Runestone captures every interaction your students have with a question whether they answer the question before you assign it or after its assigned or even long after a homework assignment is due we save that interaction and timestamp it. This gives you a lot of flexibility over accepting late work (or not) For every question you can see the time of your students first interaction with that question as well as their last, you can see their entire history of interactions with that question. For programming assignments this can be a powerful learning tool for both you and your student.    Privacy  In order to do things like remember work in progress, record scores, etc. Runestone needs a student to have a persistent user id. In 2022 we realize it is quite common to use one's email address as that persistent identifier, but we do not. We still use usernames so that you or your student can make up something completely disconnected from a students personal information. In fact one can successfully use runestone with a random username, a fake email address, and a fake first and last name. The only caveat to that is that if you forget your password you won't be able to reset it with a fake email address! See for more information.  We urge you to read our and our We understand that in 2022 it is common, especially for high schools, to want us to sign a data privacy agreement. Please understand that as an open source project we do not have a lot of resources for reading legalese. Thankfully many states have now adopted the National Data Privacy Agreement ( NDPA ) We have studied and are very happy to sign the NDPA. In fact for many states we only have to sign the agreement once and all you have to do is sign and send us Exhibit E. This blog post explains more about   One of the strengths of Runestone is that many of our features have been created and tested and validated by published research! That is good news for your students. It also means that we do cooperate with a small number of highly trusted research partners at major universities. We give them access to fully de-identified data from our database to help them conduct experiements on new features. This makes the experience better for everyone while keeping your student's work anonymous.    Why am I seeing Ads  Our mission is to make high quality textbooks available to all students for free. But, servers cost money, development takes time and money. One way that we support the mission of Runestone is to show ads to a some of our visitors. Specifically we only show ads to people who have not created an account. That means that the vast majority of ads are actually served to people who land on one of our pages because of a search. Generally speaking these are not students in a class.  If you want to make the ads go away it is easy, just create an account. Don't worry, we don't sell your email address, or give away your name. Feel free to use a fake email and fake name. Although if you forget your password you won't be able to reset it without a working email. As an instructor you should read if you want to set your students up to use Runestone Academy anonymously.  If every class that used Runestone could pay $100 for the semester regardless of the size of the class we would have enough money to be fully sustainable, and not show any ads to anyone. We would love that. We are not huge fans of ads either. So maybe you can help us figure out how to do that.    A Word about Scale  This section added in September 2023.  As you will see in our history, Runestone came out of a small liberal arts college. Class sizes were around 30 students. A huge number of our courses are high school AP CS courses using the CSAwesome book. Those courses tend to be in the 10 -- 50 student range. For courses that size Runestone has worked well for many years. In fact here is a histogram of course sizes over the last two years.   Recently Runestone Academy has become a tool for courses at much larger institutions and consequently we are seeing course sizes grew. I was totally taken off guard in August of 2023 when three courses containing 1000+ students were created.  We have architected the website to be horizontally scalable. Which means we can support many thousands of courses at the same time. So, we can support many thousands of courses, but not many thousands of students in a single course. We are working on that, but it is a big job. The good news is that the parts that suffer are the parts for the instructor interface. The student experience is not affected. So, if you are teaching a course of 1000+ students, your students will not notice any problems. But you will. Further good news, the instructor interface is undergoing a major rewrite, so know that we are working on it, and are now aware that 1000+ student courses are a thing.  If you are teaching a course of 500+ students here are some things to keep in mind:  Things like the gradebook or student progress tabs, are likely to time out (502 Gateway timeout). The grader itself is probably something you should start when you can just let it run for an hour or more.  If you want to use the practice tool for a very large course then you should definitely set the option to have flashcards generated when a student starts a page or the option for when they complete a page. If you try to have it generate flashcards for the students when you mark a section as complete you are going to be frustrated!  You may also wish to consider breaking a very large course into multiple courses corresponding to different sections. You can set up one section as a master and then your TAs can copy assignments from the master course.  If you are from an institution that has classes of 1000+ then I would ask that you really make an effort to support Runestone Academy. Either directly from your department, or stating on your syllabus that students should donate. Please recognize that a course of 1000+ puts a lot of additional demand on our servers. We strive to give you a great experience so as more students register we add more servers. Every server we add costs money. In the future we may be forced to institute a small fee for very large courses just to help us cover our costs.    If your course is in the 100-300 student range you may notice that things are a bit slower than you would like, but generally it should all work.    A Brief History of Runestone  The Runestone project began in on my sabbatical in 2011. I've already mentioned that I had serious writers block because I wanted computer science textbooks to be interactive. The first stage in fixing that problem was finding a way to run Python in the browser. This led me to the Scottie Graham had implemented Python 2.6-ish by re-implementing CPython in Javascript. While the core was there Skulpt was missing many pieces, such as a turtle graphics module. Since I loved using turtle graphics as a way for students to get fun, immediate feedback on their code I set about trying to add turtle graphics to skulpt. Since I knew very little about Javascript that sucked up a couple of months of my Sabbatical, but was a lot more fun than updating a textbook. With turtle graphics in hand I knew I had hit on something!  The next problem was that I knew that as an author I didn't want to have to write a 100 lines of custom javascript for every example! I needed a way, ideally a really simple way of just surrounding some python code with a wrapper and letting a tool build the html and javascript needed to create a widget on the webpage that ran the Python. This led me to Sphinx is a wonderful writing tool, widely used in the Python community. It also has a rich collection of extensions, and a syntax that is just what I was looking for! With sphinx I could write something like:  .. activecode:: some_id print(\"hello world\")  Sphinx would turn that into html that looked like:  <div class=\"runestone explainer ac_section \"> <div data-component=\"activecode\" id=over_ac_example1 data-question_label=\"1.1.1\"> <div id=over_ac_example1_question class=\"ac_question col-md-12\"> <\/div> <textarea data-lang=\"python\" id=\"over_ac_example1_editor\" data-timelimit=25000 data-coach=\"true\" data-codelens=\"true\" data-audio='' data-wasm=\/_static style=\"visibility: hidden;\"> print(\"My first program adds a list of numbers\") myList = [2, 4, 6, 8, 10] total = 0 for num in myList: total = total + num print(total) <\/textarea> <\/div> <\/div> <\/pre>  Stir in some javascript and you have a working runnable example! That looks like this:   print(\"My first program adds a list of numbers\") myList = [2, 4, 6, 8, 10] total = 0 for num in myList: total = total + num print(total)   With Sphinx I had a way to write large documents in a very simple markup language called and a way to extend the markup with interactive textbook elements, which at that time was still only running python. But it gave me a huge sense of optimism that my goal of having an interactive textbook was achievable.  The next problem was to translate our textbook called Python Programming in Context from LaTeX to restructuredText and converting the examples to be runnable. But Jones and Bartlett publishers had different ideas. I had signed away the digital rights to the book in our original contract and Jones and Bartlett were not willing to let me convert the book. They were going to sells PDFs along with some kind of digital code to a code practice system online. I was really depressed, I loved that book and its approach. I hated the publisher (and still do) for their greed and short sightedness. I didn't want to start over and write yet another intro to CS book from scratch. So I started looking for something else to start with. This led me to by and This book at a GNU Free Documentation License, and was alread in restructuredText!! So I remixed that book and added interactive examples which led to the interactive edition of that book.  The publisher of My other book, Problem Solving with Algorithms and Data Structures using Python was . I'll never forget the conversation I had with Jim Leisy, our publisher, at SIGCSE. I had just given him a demo of a couple chapters of the interactive How to Think book and asked him if we could do the same thing with our data structures book. He said, I've always wanted to change the world, and this looks like my chance, lets do it!   In the Summer of 2011 I was at the ACM Awards ceremony in San Jose, I was there as part of the team accepting the . At the banquet I started a conversation with Mark Guzdial and Barb Ericson who were accepting the Karl Karlstrom outstanding educator award. I told them about Runestone and that conversation started a pivotal partnership that has lasted to this day. Their reaction was this is wonderful and the kind of research tool we have been looking for. Now can you add multiple choice questions? fill in the blank? And many many more ideas including Parsons problems, which were the subject of Barb's PhD research.  The next several years were super busy, I managed to find money to get Luther students to work with me on Runestone during the summer months. In the summer of 2014 we had the first Runestone Hackathon at the University of Michigan. This workshop was pivotal because it was the beginning of the instructor interface. I had always resisted adding too many instructor facing features to Runestone, I did not want Runestone to become another crappy LMS!! But Paul Resnick and Barb Ericson convinced me that adding features to make the lives of instructors better was necessary, and that we could do things that LMS could never dream of doing to help teachers understand their students better. We did a lot of whiteboard designing that year and worked on it until it all really came together in the summer of 2016 when we had the second hackathon at Luther College.  By the late Fall of 2017 I was developing a real desire to focus all of my efforts on Runestone. But I wasn't sure how to make that happen until Luther announced an early retirement incentive. Anyone with 15 years of service to the college was eligible and could get a years salary and stay on the college health plan for five years. This was a dream come true, I just met the 15 year criteria and the years salary would give me time to figure out how to make Runestone sustainble in a way that could pay me some kind of salary.  Things got even more interesting in the Spring of 2018 when I was offered a consulting gig with Google. They wanted to use Runestone as a platform for their applied computing program. In a nutshell the program's goals were to introduce computer science to colleges with underserved student populations that had not offered computer science before. I basically got to work on Runestone and coach professors from the participating colleges in how to use Runestone and how to teach introductory CS. The program expanded into a second course to introduce Data Science to those colleges, which resulted in the How to Think like a Data Scientist book. My gig at Google was supposed to last 5 months, but it ended up lasting two years.  Sometime in the early2019 I received an email from Oscar Levin that read as follows  On behalf of the workshop organizers, Jim Fowler, Mitch Keller, Matthew Leingang, and Oscar Levin, we would like to invite you to participate in the workshop \"Interactive assessments in open source textbooks\" from December 9 to December 13, 2019.  I didn't know anything about AIM , and I had never met Oscar but the workshop sounded interesting. So I said yes. When I arrived at the first day of the workshop and listened to the introductory talk, I knew that I had found a group of people I wanted to work with more. Many of the people in this workshop were authors of open source math textbooks written in . A project started by Rob Beezer at about the same time I had started Runestone.  It was early in the afternoon of the first day of the workshop when I found myself in a room with David Farmer, and after I had given a quick demonstration of Runestone and its capabilities he said something like: This is great, but I don't know why you would want to keep developing this Runestone Markup language when you could just use PreTeXt and focus your efforts on other more valuable work. It was one of those direct statements that hit me hard, should I be offended? embarrased? honored? It took me a couple of days and getting to know both David and Rob better to realize the wisdom of that statement. But by the end of the workshop we were able to host a version of Rob's book A First Course in Linear Algebra on a Runestone Server. We also realized that our goals were very well aligned and that we could accomplish more by working together than we could by continuing to work separately.  It took an entire global pandemic for Rob and I to really integrate the Runestone Components into PreTeXt . And it took me a Summer to cook up a conversion process that turned restructuredText into PreTeXt . But that explains why this instructor guide looks a bit different than the Runestone books you may be used to seeing. I converted the instructor guide to PreTeXt and have been working on adding it and making it more useful. What you see in this book is a little glimpse of the future. Whats more is that students really benefit from this partnership. Books in PreTeXt are far more accessible than anything we have done with restructuredText and they are far more mobile ready as well.  Building a system like Runestone is a lot of work, and I am amazed at what we have accomplished with very little funding. The future looks very exciting Runestone Academy has incorporated and is operating as a non-profit. We have applied for and are waiting approval of the formal 501(c)(3) tax status with the IRS. I am hopeful that I will be able to announce some significant support from an NSF program designed to help open source projects like Runestone and PreTeXt become sustainable long term. I think I did a pretty good job of outlining our vision in . We have an exciting and necessary mission and if you are inspired to help us out in any way we would welcome your efforts!   "
},
{
  "id": "p-5",
  "level": "2",
  "url": "Introduction.html#p-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Learning Engineering "
},
{
  "id": "p-12",
  "level": "2",
  "url": "Introduction.html#p-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "National Data Privacy Agreement "
},
{
  "id": "registration_register-for-this-course",
  "level": "1",
  "url": "registration_register-for-this-course.html",
  "type": "Chapter",
  "number": "2",
  "title": "Register for a Course",
  "body": " Register for a Course   Introduction  There are two kinds of courses on Runestone Academy:  Courses that are open to anyone to view without logging in or for anyone to enroll in if they choose to create an account. We call these books base courses. These courses are very large and have no instructor to guide the students, eveyone just proceeds at their own pace.  Smaller courses at a a high school, college, or university, that are guided by an instructor like yourself also use these books. We often refer to these as custom courses   You can think of the base courses as a template for custom courses, something like classes and instances in object oriented programming.  Although the base course books are open to the public, to save your work, you will need to register for an account on Runestone Academy. When you first regigister you will have the privileges of a student. You do not become an instructor until your create your own course. Lets walk through the registration process now.    First-time Registration  When you register you must select a course. The right side of the page contains a list of names of the base courses (registration codes) for the most common courses. If you do not see the one you want on this list you can look in the library. We are working on a way to harmonize the various places to discover books and their names.   Register yourself       Open the following url in another tab: https:\/\/runestone.academy\/runestone\/default\/user\/register . The form is pretty self-explanatory, except for the Course Name field. There is information about that on the right side. You can specify one of the strings that identify one of the public courses that the server knows about: thinkcspy, pythonds, etc. Or you can enter the string for a course that someone else has created and provided you with.    Click Register    If you are on the login page instead at https:\/\/runestone.academy\/runestone\/default\/user\/login then click the Register button which is near the bottom of the page to get to the registration page.       Add an Additional Course  When you are logged in and looking at an eBook, click on the person icon in the upper right and select Change Course . That will take you to the course selection page.   Change Courses    Click on the Enroll in a Course button, which takes you to a page that looks a lot like the registration page. Don't change any of the fields except Course Name . There, you can enter any string that identifies another course.  As an instructor you may find that the list of courses can get quite long. You can use the Remove Course button to unenroll yourself from that course. Please note it does NOT delete the course it only takes you out of it. You can always re-enroll at a later time.   "
},
{
  "id": "p-39",
  "level": "2",
  "url": "registration_register-for-this-course.html#p-39",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base courses. custom courses "
},
{
  "id": "p-40",
  "level": "2",
  "url": "registration_register-for-this-course.html#p-40",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "student. instructor "
},
{
  "id": "reg_yourself",
  "level": "2",
  "url": "registration_register-for-this-course.html#reg_yourself",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " Register yourself   "
},
{
  "id": "choose_course_page",
  "level": "2",
  "url": "registration_register-for-this-course.html#choose_course_page",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": " Change Courses   "
},
{
  "id": "chapter-3",
  "level": "1",
  "url": "chapter-3.html",
  "type": "Chapter",
  "number": "3",
  "title": "Creating a Course",
  "body": " Creating a Course   What is a course?  As an instructor, you can make a course with a unique name on the Runestone server from an existing Runestone book. Your students will register for your course using the unique name, and then their activities will be securely saved for you to use. You will then be able to:     View summaries of student activity for particular questions or pages    Assemble custom assignments and lab sessions from:     existing activities that are built into the book    new activities that you author yourself using a markup language (rst)        When you create a course you become the instructor for that course. We at Runestone Academy have no magical way of knowing who is and who isn't an instructor. Furthermore it would take time for us to try to validate everyone who claims to be an instructor. But keep in mind that:  As an instructor you only have access to the work of the students in the course you create.  We do not publish answer keys for instructors on Runestone. Note: those may be available to you through Google Groups or other media affiliated with the textbook, so check with the author of the book you are using.    If you have multiple sections of your course there are two ways of dealing with it. 1) You can create a single course for all of your sections (most often recommended), or 2) you can create a course for each section. If your choose option 2 covers how to copy assignments between your courses.    How to Create a course      Log in to the runestone server at https:\/\/runestone.academy if you already have an account with Runestone Academy. If you don't have an account then you can create one at https:\/\/runestone.academy\/runestone\/default\/user\/register . When you register, it will ask to enter the name of an ebook. You can enter the name for any of the existing ebooks.  Figure 1: The login screen for Runestone Academy       Go to the Build a course Page at https:\/\/runestone.academy\/runestone\/designer\/index . Fill in a unique name for your course. You may want to include a semester and year as part of the unique name. Enter a description and the name of your institution. Scroll down and check the other options and then click Submit .  Figure 2: The Build a course Page     Of special note is the checkbox just above the submit button. This says that you would like to support Runestone at the rate of $10 \/ student from your department or school. This is totally VOLUNTARY! If you check the box you will get an invoice from us about a week after the starting date you entered for your course. If you can't pay or do not wish to pay simply do not check the box. It is fine either way, but we would love your support if you are able.   Support Runestone      Success!  Build Successful     The successful build page reminds you of some resources that you can use to get help. Please do not use email. Please check for and file problems on Github. Many problems are duplicates and have already have workarounds or explanations.    Your students can register for your course by using the unique name that you used when you created your course when they register at https:\/\/runestone.academy\/runestone\/default\/user\/register .. If they already have a login on Runestone Academy, they can simply add another course using the new course name by going to https:\/\/runestone.academy\/runestone\/default\/courses . and then clicking on Add Another Course .  Figure 4: The page that allows the user to add another course or switch courses        We will also cover how you can pre-register your students with a CSV file in another section.   "
},
{
  "id": "login_screen_fig",
  "level": "2",
  "url": "chapter-3.html#login_screen_fig",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " Figure 1: The login screen for Runestone Academy   "
},
{
  "id": "custom_course_fig",
  "level": "2",
  "url": "chapter-3.html#custom_course_fig",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " Figure 2: The Build a course Page   "
},
{
  "id": "support_runestone_fig",
  "level": "2",
  "url": "chapter-3.html#support_runestone_fig",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " Support Runestone   "
},
{
  "id": "id5",
  "level": "2",
  "url": "chapter-3.html#id5",
  "type": "Figure",
  "number": "3.2.4",
  "title": "",
  "body": " Build Successful   "
},
{
  "id": "id6",
  "level": "2",
  "url": "chapter-3.html#id6",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": " Figure 4: The page that allows the user to add another course or switch courses   "
},
{
  "id": "chapter-4",
  "level": "1",
  "url": "chapter-4.html",
  "type": "Chapter",
  "number": "4",
  "title": "Managing Your Course",
  "body": " Managing Your Course   Managing Students in your Course    Student Self Registration  When you created the course, you chose a project name. Give that text string to students. They will register on the site and enter that string as their course name. If you've forgotten what the string is, you can see it displayed on the Course selection page https:\/\/runestone.academy\/runestone\/default\/courses . You can access that page by clicking on the person icon at the top right of the window and then selecting Change Course .   Students will register for a course following the same procedures that were described . You just need to provide them with the text string for the course name.     Pre-register your students  You can also pre-register your students by creating a CSV file and uploading that file through the instructor interface. Pull down the 👤 menu and Choose Instructor Page then click on the button for Manage Students. You will see a page like this:   Register your Students    You can create a csv file in your favorite spreadsheet program and then export it to a csv or you can simply edit a textfile, whatever works for you. But note that some versions of Excel add a lot of empty columns and rows that really confuse our importer! Please check the csv file in a text editor before you upload it to runestone. Also note that if the csv file has any problems, like a duplicate username, nothing will be changed on the runestone server. The format of the file MUST be as shown in the figure.  username,email,first_name,last_name,password,course user1,user@school.com,Jane,Smith,xxxx,foocourse  Notice – There are no spaces after the commas. Excel is horrible at exporting it will add extra blank fields and lines that look like ,,,,,,,, Once you export from excel its best to clean things up in your favorite text editor.  When the file is created you can choose it and upload it to Runestone. It will verify the fields and if there are no errors it will register the students. The most common error is that the username is a duplicate. Usernames are the primary way we identify students and they must be unique. With over 120,000 students in the database there are bound to be duplicates. This is not a bug, it is a sign of growth.  If you add students to your class later you need to create a new CSV file just for them (or have them register themselves). Adding students to the end of your previous spreadsheet will result in lots of error messages about duplicate usernames.    Removing Students  You may also have noticed the \"Remove Student(s)\" button in This allows you to remove a student from your course. Although it seems self explanatory the reason to bring this up is to explain what happens to the student account when you remove them. The account is not deleted but rather the student and their work is moved to the base course. This allows a student to have access to their work and to continue working independently if they wish. As an instructor you do not have the capability to delete a student account. But anyone can delete their account and all of the information saved for that account by using the 👤 menu choosing edit profile.    Resetting Passwords  There is no doubt about it, password management is a headache for everyone. Runestone handles hundreds of password reset requests each week. But that does not always work. Some schools (inexplicably) block email from Runestone. Other schools run software that simply mangles the URL's found in emails that look like they are password reset emails. This is understandable to some degree as Phishing scams are so common, and its important to protect the students. I've done everything I can do from my side to validate the runestone.academy email domain. But, other times students simply type in their email incorrectly.  You may be get around some of these problems by asking your school to allow mail from runestoneinteractive@gmail.com to go through. If your IT department is not cooperative then your students will have to come to you to have their password changed. You can reset the password for any of the students in your course. Just select the student from the list and click the reset password button. I cannot respond to emails asking me to reset passwords, I don't have the time to do that, and I do not have a reliable way to verify that those requests are legitimate. Yes many high schoolers think it is funny to try to trick me into resetting the password on one of their friends.  Instructors cannot change their own passwords through this mechanism. who among us hasn't walked away from the computer and left ourselves logged into Runestone? As an instructor, you will still have to use the normal email password reset mechanism. If your school blocks emails then I suggest you just get a free gmail address to use for this purpose.     Privacy and Runestone   In this week's update I want to tell you about some new account management features I added to Runestone, and give you some idea about how you could set up your class if you don't want Runestone to capture any Personally Identifiable Information (PII) about your students.  Runestone collects a lot of data. I think it is all justified, and if you are an instructor you can gain some real insight into how your students are doing based on the data we collect and the reports we create for you. None of that requires any PII about your students. Yet we do collect some… what do we collect? and why?  Here is what we we ask for when a student registers:     username - this can be anything and it is easy for this to NOT contain PII    email - This is the only reliable way to do password recovery.    First Name and Last Name - this has always been just for the instructors so that when they are grading assignments or looking at analytic reports, they know who they are looking at.    Password - encrypted and stored securely.    Name of the course. The instructor has full control over this call it whatever you want.       Setting up a class with no PII  We will walk through two strategies for managing a Runestone Course that doesn't store any PII about a student. The first strategy has the students register themselves following the instructions I'll tell you about. The second strategy puts you in complete control and allows you to create all of the usernames for your students!  The way to use Runestone without PII is to ensure that your students choose a username that they remember but has nothing to do with their real identity. They can also put in fake first names and last names.  The real trick is how to manage password recovery Thats where this cool email alias trick comes in. Most email systems (including gmail) support the username+alias convention. That is you can add a + and an additional alias to your email address. For example runestone+support@gmail.com or runestone+info@gmail.com both of those emails will end up in the runestone mailbox, but I can also see the alias. We can use this feature so that students don't have to enter their real email address, they enter yours plus their username as the alias. This means that you will end up fielding the password reset emails. If you are an email whiz you can set up some rules to forward these to the right student.  Experience has shown that having students register themselves and get all of those pieces correct is a losing battle. So why not put you in charge of registering them? Get out your favorite spreadsheet app and prepare a file with your students information.  You can upload a CSV file with the following format: One row for each student  username,email,first_name,last_name,password,course  In order to protect your students privacy you can create a spreadsheet like the following:  hogwarts-1,dumbledore+hogwarts1@gmail.com,F1,L1,owls4all,potions_fall19 hogwarts-2,dumbledore+hogwarts1@gmail.com,F2,L2,owls4all,potions_fall19 hogwarts-3,dumbledore+hogwarts1@gmail.com,F2,L2,owls4all,potions_fall19   Note  It is important that you check your CSV file and make sure there are NO SPACES before or after the commas!   From the Manage Students tab on the Instructor's Page, you can now upload this CSV file using the interface.     Once you have uploaded the CSV, you can add some columns to the spreadsheet that contain the real student information to help you remember. You will probably learn quickly who your made up names correspond to, and can probably think of something anonymous that will help you remember who F1 L1 really is. On the first day of class you may want to hand out paper for the students with their username, and walk them through changing the password, or maybe you want to assign each student a unique password when you are making up the spreadsheet. I just would not recommend a scenario where all the students have the same password.  Of course all of this is optional. You can also create a csv file with usernames of your choice and include the real email addresses and real first \/ last names of your students, or you can have them register themselves as students have been doing on Runestone since 2012.    What other Data Does Runestone Collect  Here is a graph of all of the events that runestone has collected in the last 4 weeks.     As you can see that is a lot of activecode and a lot of pages loaded. Also over 1 million multiple choice questions answered! I would love to see more clickable area questions and more fill in the blanks. Some of our preliminary research shows that those kinds of questions are much more effective at getting students to review the content in order to get a correct answer, rather than simply clicking on different answers until they guess correctly for multiple choice. All of these events are captured and tied to a username. So the more anonymous your username the better as far as I'm concerned.  What I'm really interested in is figuring out how to apply machine learning algorithms to help identify students that may struggle, to help weed out bad questions, to help us write better questions, to help us order the textbook in different ways, to adapt to each student to help them achieve their maximum potential.  Runestone also collects the source code each time your student changes and runs the code in an activecode activity. This is to provide a timeline for the student as well as for yourself.     Make sure you explain the timeline to your students. Sometimes there is great fear in them about changing code that is working. Having this timeline present encourages them to experiment, knowing that they can always get back to a good working version.    For you the timeline can be an invaluable tool for talking through an assignment with a student. You can see their progress and if they make a wrong turn you can usually see that in the timeline and talk to them about why they decided to a particular direction.    The timeline is also available in the scratch activecode which some students like to use as a notebook for the course.        Integrating with your LMS   Introduction  Runestone provides a rudimentary LTI integration using LTI 1.1. So far we have made this work very successfully with Canvas, Moodle, and Brightspace D2L. Others may or may not work. I call this a community supported feature of Runestone because LTI is a huge pain to work with, and it is very difficult to get access to and test against whatever LMS your school has chosen.  When you use LTI your students do NOT and should not register on Runestone Academy , the LTI interface registers your student with Runestone the first time they access it from your LMS. In addition, Instructors need to use one of the LTI links to your book in order for grades to transfer.     Phase 1 (All LMS platforms)  Generate a shared\/secret key pair for use with Canvas:  Browse to the and log in, then select your course (you must be the Instructor).   Browse to the , then click on “LTI Integration” in the Admin tab.    Click on the Create LTI Key and Secret button. Click the Show Secret button. You will use these in the next phase.      Phase 2 (LMS-specific Steps)   Follow instructions for your LMS:           Canvas   Follow the to add an external app: :Name: Runestone :Consumer key: Enter this from Phase 1. :Shared Secret: Enter this from Phase 1. :Launch URL: ``https:\/\/runestone.academy\/runestone\/lti`` :Domain: Leave blank. :Privacy: Select Public; otherwise, Runestone won’t work. :Custom Fields: Depends on the installation type: - For a site-wide installation, or for installing the Runestone external app for use across multiple courses, leave this blank. - If installing for a single course, add ``custom_course_id=xxx``, where ``xxx`` is the Runestone ID of the course (visible in the upper lefthand corner of each page in your Runestone course). :Description: Interactive textbooks from Runestone Academy    Add an assignment in Canvas that uses the Runestone external tool:  At `Runestone Academy`_, create an assignment; be sure you’ve checked the “Visible to Students” box and saved that change.  Still on the assignments page, copy the LTI link.  In Canvas, add an assignment. For the submission type, select “External Tool.” For the External Tool URL, use the LTI link you just copied. You’ll have to manually enter the same due date\/time and a similar assignment name; these aren’t copied automatically. You must be sure the Load This Tool In A New Tab checkbox is checked.    Students can now click on this assignment and work it. **If they don’t click on the assignment, they won’t receive a grade.**  When the assignment is due, go to Runestone directly from your Canvas course by using an assignment link. Otherwise, grade reporting won’t work.  In the grading tab of the instructor interface, grade the assignment, then click the “Release Grades” button. Doing this will push all grades to Canvas.      Moodle    The following instructions are for Moodle, but should work for any LMS with LTI Support. Please note that certain items may have naming variations (ie. Moodle External Tool \/ Canvas External App).   In Moodle, create a new external tool called \"LTI Login Link\".  :Name: Login to Runestone :Tool URL: https:\/\/yourHost.blahblah.edu\/runestone\/lti :Consumer key: Enter the key you copied for `consumer` from Phase 1 :Shared secret: Enter the key you copied for `secret` from Phase 1 :Icon URL: https:\/\/yourHost.blahblah.edu\/runestone\/static\/images\/logo_small.png :Share Email: True :Share Name: True :Custom params: custom_course_id=xxx, where xxx is the Runestone ID of the course (visible in the upper lefthand corner of each page in your Runestone course).   Login to your Runestone instance with the tool just created, and create your class as well as your assignments.   In Moodle, create a new enrollment external app directly to your course and assignment. You will need to repeat this for each assignment. You will also need the database values for your course ID, and assignment ID. Get these from step 2.2. Please note that in order to receive roles and grades, \"Accept Grades\" must be checked in Moodle. In other LMS's this may be referenced by a \"Share IMS Names and Roles\" or similar.  :Name: Assignment 1 :Tool URL: https:\/\/runestone.colorado.edu\/runestone\/lti?assignment_id=&custom_course_id :Consumer key: Enter the key you copied for `consumer` from Phase 1 :Shared secret: Enter the key you copied for `secret` from Phase 1 :Icon URL: https:\/\/yourHost.blahblah.edu\/runestone\/static\/images\/logo_small.png :Share Email: True :Share Name: True :Custom params: :Accept Grades: True   Copy the tool as many times as you need within your Moodle Course, updating the Name and Tool URL each time.  Students can now click on these external tool assignments to be enrolled\/logged directly into your Runestone course and assignment. The grades should appear in Moodle once they are released in Runestone through the Instructor interface.  The course instructor must also be an LTI sourced user, so use the \"LTI Login Link\" URL. This can be hidden for users.      Brightspace D2L  Depending on how D2L is set up, you may need to be an administrator in order to set up your links for class. However, in some setups, instructors have permission to make their own LTI links.    To check, while in your class on D2L, you can go to Course Admin - External Learning Tools , then click the Manage Tool Links (Legacy) . From there, click the New Link button.    If that is successful, then here are the settings. (Otherwise, talk to your LMS Admin to configure this for you)     Title  Enter either the Textbook Name or the assignment name on Runestone  URL  copy this from the LTI configuration panel for the textbook login https:\/\/runestone.academy\/runestone\/lti or from the individual assignment in the Assignments tab of the Instructor's Page.  Description  Leave blank or add a description.  Visibility  Allow users to view the link should be checked.  Key\/Secret   Signature  check Sign messages with key\/secret with  select Link key\/secret then fill in  Key  Enter this from Phase 1.  Secret  Enter this from Phase 1.    Click the Save button before adding custom parameters.   Custom Parameters    click the Add custom parameters link.  Name   custom_course_id  Value  the Runestone ID of the course (visible in the upper lefthand corner of each page in your Runestone course).  Security Settings  Select use link security settings  Make sure at least the following settings are checked:   Send tool consumer information to tool provider  Send context information to tool provider  Send LTI user ID and LTI role list to tool provider  Send user name to tool provider  Send user email to tool provider  Send link title to tool provider  Send link description to tool provider    Once everything is selected, click Save and Close   Now, from anywhere in your course, you can select Existing Activities - External Learning Tools and then the link you created. After adding this link, make sure that you make sure the link is configured to Open as External Resource . That way the right information will be passed to the textbook.  Students will be able to click on this link when you make it available to them. If they don't click on the assignment, they won't receive a grade, so when you make the assignment on runestone, you probably want the Visible to Students checkbox to remain unchecked. This way it will only be available from the D2L link.  When the assignment is due, go to Runestone directly from your D2L course by using an assignment link. Otherwise, grade reporting won't work.  In the grading tab of the instructor interface, grade the assignment, then click the Release Grades button. Doing this will push all grades to D2L.       Add and Instructor or TA  Runestone supports multiple instructors or TAs for a course. We do not make any real distinction between a TA and an instructor so keep in mind they they both have all of the same privileges that you do. Adding a another instructor is quite easy. The process is as follows.  Make sure that your co-instructor has registered for your course as a student.  Go to the instructor page and select the Add TA tab as shown below    Select the co-instructor or TA from the list of students on the right then click the + button below the list. You should see the name appear in the list of instructors on the left.   To \"demote\" a co-instructor or TA back to a student just select them in the list of instructors on the left and click the - button below the box.     Course Settings  There are some settings that you can control for your course that effect how the interactive components work. You can modify these on the course settings tab of the instructor interface.      Term Start Date  You can change your course start date. This is important if you copy assignments from a past term. Runestone will try to make the assignment due the same number of days from the start of the term. We also do analysis of student performance based on the week of the course, so it helps our analysis if this date is accurate.   Enable ActiveCode Downloads  If this box is checked then each activecode will have a download button that will allow your students to download a text file with the appropriate extension containing the code in the editor.   Allow Pairs  This enables a simple pair programming feature that allows a student to type in the username of a partner. When the student clicks the Save and Run button the code will be saved for both students with a comment added that indicates they were working with a partner and who that partner was.   Enable Compare Me Button  Questions such as multiple choice may let students see how they did compared to other students in the class. This button pops up a dialog that shows the percent of students that answered a question for each option. For a fill in the blank question it shows the top 10 answers.     "
},
{
  "id": "note-1",
  "level": "2",
  "url": "chapter-4.html#note-1",
  "type": "Note",
  "number": "4.1.1",
  "title": "",
  "body": " Students will register for a course following the same procedures that were described . You just need to provide them with the text string for the course name.  "
},
{
  "id": "reg_your_students_fig",
  "level": "2",
  "url": "chapter-4.html#reg_your_students_fig",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": " Register your Students   "
},
{
  "id": "p-88",
  "level": "2",
  "url": "chapter-4.html#p-88",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "password recovery yours "
},
{
  "id": "note-2",
  "level": "2",
  "url": "chapter-4.html#note-2",
  "type": "Note",
  "number": "4.2.1",
  "title": "Note.",
  "body": " Note  It is important that you check your CSV file and make sure there are NO SPACES before or after the commas!  "
},
{
  "id": "figure-9",
  "level": "2",
  "url": "chapter-4.html#figure-9",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": "  "
},
{
  "id": "figure-10",
  "level": "2",
  "url": "chapter-4.html#figure-10",
  "type": "Figure",
  "number": "4.2.3",
  "title": "",
  "body": "  "
},
{
  "id": "p-106",
  "level": "2",
  "url": "chapter-4.html#p-106",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Create LTI Key and Secret Show Secret "
},
{
  "id": "p-114",
  "level": "2",
  "url": "chapter-4.html#p-114",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Course Admin External Learning Tools Manage Tool Links (Legacy) New Link "
},
{
  "id": "p-117",
  "level": "2",
  "url": "chapter-4.html#p-117",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "https:\/\/runestone.academy\/runestone\/lti "
},
{
  "id": "p-121",
  "level": "2",
  "url": "chapter-4.html#p-121",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sign messages with key\/secret with "
},
{
  "id": "p-122",
  "level": "2",
  "url": "chapter-4.html#p-122",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Link key\/secret "
},
{
  "id": "p-126",
  "level": "2",
  "url": "chapter-4.html#p-126",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Save "
},
{
  "id": "p-128",
  "level": "2",
  "url": "chapter-4.html#p-128",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "custom_course_id "
},
{
  "id": "p-130",
  "level": "2",
  "url": "chapter-4.html#p-130",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "use link security settings "
},
{
  "id": "chapter-5",
  "level": "1",
  "url": "chapter-5.html",
  "type": "Chapter",
  "number": "5",
  "title": "Monitoring your Student’s Learning",
  "body": " Monitoring your Student's Learning   The Instructor Interface   One of the primary goals of the Runestone Instructor Interface is to help you understand where your students are at, and to help you to prepare and make the best use of classtime. We set out to create an interface where you could see at a glance which concepts your students clearly got and which concepts they were struggling with so that you can spend your valuable class time on the topics that were confusing rather than boring them by covering material they clearly understand. To really be effective with this strategy you should use reading assignments as described in .  As an instructor, you can access a variety of instructor features. To get to the instructors page follow these steps:     Make sure you are logged in to a course for which you are an instructor. If necessary, click on the person icon at top right and select Change Course to get to a course that you are instructor for, or logout and login with a different account.    Click on the person icon on the top right of the window and select Instructor's Page   Figure 1: How to get to the instructor's page      You will see the instructor page as shown below. You may be on a different tab that what is shown below.     Figure 2: The Instructor's Page         View Student Activity   Introduction   Many actions that students take are logged. These include:     Loading a book page    Answering a multiple choice question    Answering a mixed-up code (Parsons) problem    Running code in an ActiveCode window    Editing code in an ActiveCode window    Playing a video     There are many ways to monitor student progress. Starting at the main instructor page here are two of them.       Chapter Progress  One very easy to use report that allows you to quickly see how much work your students are doing on each page is the Chapter Progress Report. It looks like this:     It can quickly show you the number of elements on each page that your students have interacted with. The dropdown menu gives you other options such viewing the first time a student interacted with an element, the last time a student interacted with the element, and an overview of the number of times a student has interacted. You can also filter by chapter or any other search criteria using the popup menu on the chapter_label column. Just experiement a bit.  The numbers in each cell are clickable so you can drill down into a particular page for a particular student to see what they have done and the number of interactions with each element.     You can even click the view button to see a preview of the activity. Clicking on the Question link will bring you the summary page for that activity where you can see an aggregate of how all students performed on that question. We'll see more about that report shortly.    Student Progress Tab  The instructor interface lets you see summaries of some of these activities that may be useful to you. To get started, from the instructor interface, click on the Student Progress tab.     If you have assigned students to read a particular chapter prior to (or after) class, you can see at a glance what percentage of them have looked at each of the pages in a chapter. In the upper right hand corner, you can select a chapter. Then look at the left side.      Figure 1: Page to view student progress       You can see how students did on the multiple choice problems in the chapter. Some instructors have found it useful to focus in class on those questions where many students got the question wrong initially. Currently, the interface sorts the questions in order of the percentage of students who got them right the first time, so you may want to scroll down to find the ones they had trouble with.      Figure 2: Viewing multiple choice results     Figure 3: Viewing multiple choice results     Showing aggregate results for a question    This page is further drilldown on an individual question. You can see a histogram of the number of attempts made on the question across the class, you can see the frequency with which each option was selected, and you can see the first four responses of each student. You can also see a preview of the question.    "
},
{
  "id": "nav_to_ii_fig",
  "level": "2",
  "url": "chapter-5.html#nav_to_ii_fig",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": " Figure 1: How to get to the instructor's page   "
},
{
  "id": "main_ii_fig",
  "level": "2",
  "url": "chapter-5.html#main_ii_fig",
  "type": "Figure",
  "number": "5.1.2",
  "title": "",
  "body": " Figure 2: The Instructor's Page   "
},
{
  "id": "figure-13",
  "level": "2",
  "url": "chapter-5.html#figure-13",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": "  "
},
{
  "id": "figure-14",
  "level": "2",
  "url": "chapter-5.html#figure-14",
  "type": "Figure",
  "number": "5.2.2",
  "title": "",
  "body": "  "
},
{
  "id": "figure-15",
  "level": "2",
  "url": "chapter-5.html#figure-15",
  "type": "Figure",
  "number": "5.2.3",
  "title": "",
  "body": "  "
},
{
  "id": "student_prog_fig",
  "level": "2",
  "url": "chapter-5.html#student_prog_fig",
  "type": "Figure",
  "number": "5.2.4",
  "title": "",
  "body": " Figure 1: Page to view student progress   "
},
{
  "id": "view_mc_fig",
  "level": "2",
  "url": "chapter-5.html#view_mc_fig",
  "type": "Figure",
  "number": "5.2.5",
  "title": "",
  "body": " Figure 2: Viewing multiple choice results   "
},
{
  "id": "view_mc_restuls_fig",
  "level": "2",
  "url": "chapter-5.html#view_mc_restuls_fig",
  "type": "Figure",
  "number": "5.2.6",
  "title": "",
  "body": " Figure 3: Viewing multiple choice results   "
},
{
  "id": "agg_results_fig",
  "level": "2",
  "url": "chapter-5.html#agg_results_fig",
  "type": "Figure",
  "number": "5.2.7",
  "title": "",
  "body": " Showing aggregate results for a question   "
},
{
  "id": "working-with-assignments-chap",
  "level": "1",
  "url": "working-with-assignments-chap.html",
  "type": "Chapter",
  "number": "6",
  "title": "Working with Assignments",
  "body": " Working with Assignments   Understanding Assignments  Runestone supports two different kinds of assignments. Reading Assignments and Problem Sets . Understanding the difference between these two kinds of assignments is very important so lets discuss each before moving on to creating assignments.   Reading Assignments  In Runestone, a reading assignment is by design a formative exercise, low stakes activities to encourage your students to prepare and help them learn. They are not meant to evaluate their progress. As such points are based on the students interaction with the textbook regardless of correctness. Points are assigned based on the number of interactive activities on each page. One activity is simply opening the page. Other activities are based on answering questions or running programs or trying out visualizations that are in on each page. The grading is set up to be all or nothing for each page. If a student interacts with roughly 80% of the activities on the page they will get full credit. If they do not then they get zero points. You can change that threshold to be whatever you want when you are setting up the assignment. It is worth repeating that they get credit for interacting with each thing not for getting it right.  When you create a reading assignment it will appear on the Assignments page, and each page of the reading assignment will have a link to the next page in the assignment. This allows you to encourage your students to read the pages in the order you choose rather than the order they appear in the book.    Problem Sets  In Runestone a problem set is a group of exercises that are graded for correctness. These can be programming problems, fill in the blank questions, multiple choice or any other gradeable activity. The problems may come from anywhere.  The body of the text  From exercises at the end of the chapter  Problems that you create yourself  Problems from a question bank or from another book  When you create a problem set the problems appear on the assignment page and the student can either work on them there or in the context of the book. To the Runestone system it does not matter where they work on the problem, just that they do work on the problem.   Overloading Assignments  Besides regular problem sets, a problem set can also be used to create two other student experiences.  Timed Assessments -- See .  Peer Instruction Work -- See        Assignments and Student Work  Because the Runestone Server and the textbooks are so tightly coupled, the primary job of the server is to capture the work your students do. As your students interact with the book, the book and the server work together to capture the clicks, the answers to questions, the code your students write, etc. All of this is captured regardless of whether the activities are part of an assignment. When you make an assignment that is a layer on top of all of the data collection that simply tells the software what actions to group together when you want to assign a grade.  The separation of data collection from assignments can be a bit confusing at first. It has important implications that you should understand.  If you use the same question in multiple assignments the student only has to do the work once.  If you delete an assignment, your students do not lose any work.  There is no need for your students to submit an assignment. When it comes time to grade the software simply uses the data collected for each of the questions in the assignment.      Assignment Status  The choose assignment page shows the status of the assignment. Students are encouraged to use this to keep themselves organized. They can mark an assignment as in progress or submitted But marking an assignment as submitted is advisory only. They can continue to work on the assignment and Runestone will continue to record what they do. When you grade the assignment you have the flexibility to decide what to grade and how to grade it. You can enforce your deadlines, or relax your deadlines. You can grade your students best response, their last response or their first.  The image below shows the choose assignment page. The student can see that two assignments have been graded and one assignment is \"in progress.\" This makes it easier for students to know where they are it with each homework assignment, but to repeat has no actual bearing on grading.   While Runestone is not (yet) smart enough to automatically mark a students assignment in progress, the student can set toggle through the status values by clicking the button at the bottom of the assignment page.   The values for the status will toggle through the following options:  Not Started  In Progress  Complete       Create an Assignment   Introduction      To create an assignment, whether graded or ungraded, start by going to the Assignments tab on the instructor interface. Click on the Add button to start creating a new assignment. On the popup that appears you will notice that you can also copy an old assignment as a starting point.   Figure 1: Click on the Add button to create a new assignment      Provide a name for the assignment.   Figure 2: Enter a unique name for the assignment      Add a description and check the other options.    Click on Save to save the assignment. It will show an alert as shown below. Click on Ok .   Make it Visible  Please take note of the visible to students check box. If you forget to check this box then the assignment will not show up in the list that your students (or you) can see on the assignment page.    Figure 4: The save alert box.       There are two primary kinds of assignments. Reading Assignments and Problems Sets. Reading assignments allow you to select whole chapters or parts of chapters for your students to read. You can assign points to the reading assignment by tracking the number of activities they attempt in each subchapter. Problem sets are mainly for you to select short programming problems for the students to solve, but could also include short answer, multiple choice, etc. Or even problems that you write yourself. More on that later.  In either case the primary way you will add questions is through the tree picker interface. This interface is accessed by expanding either the Readings or Problems accordion and allows you to drill down from chapter to section to individual problems. There are several icons associated with problems to help you know what you are looking at.  The 📘 icon indicates that a particular problem was written by the author.  The 🏫 icon indicates that a problem was contributed by another instructor.  The ✔️ icon tells you that the problem can be automatically graded.  In any case you can click on a problem to see a preview. If you are previewing a question and it is obviously bad, or incorrect, or just someone experimenting, use the Flag Question button to let us know. We have volunteer editors that help us clear out or correct these bad questions.     Creating a Reading Assignment  Let's create a reading assignment and add a few sections for our students to read. As you add sections you will see that are shown in a table under the Readings tab.   There are four things you can change for each section:     # required - How many of the components on the page do you students need to do in order to get the points for this section.    How many points for completing this section?    Auto-grade - interaction means that the students have done something    which to grade - first answer, best answer, or last answer       Creating a Problem Assignment  Creating a problem assignment is similar. You will most often use the tree picker, but you can also search for problems or write your own. When selecting a problem if you click on the name of the problem the interface will display the problem on the page remind you what it is about.   Problems have a different set of configurations     Points - how many points for this question    Auto-grade – options here are % correct, All or nothing, Interaction, or manual.    which to grade – Best Answer, first answer or last answer     Problems with the book icon next to them are written by the author. Problems with the schoolhouse are contributed by the community. If a problem has a checkmark next to it then you know it can be automatically graded.     Copying Assignments   Copying from your previous courses  You may have multiple sections where you want to share assignments, or you may simply want to copy your assignments from the last time you taught a course to your current course. You can do this.   Figure 1: Copying an assignment.    The copy assignment tab lets you select any of your old or current courses that use the same book.   Figure 2: Select the Course    Once the course is selected you can copy one or all of the assignments to your course. If you do this multiple times courses with the same name will be ignored on the second copy. This makes it a little easier if you just want to keep one course in sync with another so you don't have to remember and pick and choose.   Figure 3: Select one or all assignments to copy.    The system will add the assignments to your current course and make its best guess to adjust the due date, based on the number of days from the beginning of each course. This is going to get you in the ballpark but you will probably have to manually adjust it due to differences in the calendar from year to year.    Copying from a different Instructor  Help, this is my first time teaching this class and I want to copy assignments from another instructor. This is very possible if the instructor is still available. You simply need to enroll in their course and have them make you a TA. Then you will be able to copy the assignments from their course to yours.  If the previous instructor is not available then we can still probably make it happen, but you are going to have to go out of your way to prove that your request is legit. Sorry, we cannot just take your word for it over email. A link to your faculty page, that verifies your email as a legitimate instructor at the same institution of the instructor of the course you want to copy. We would love to just trust everyone, but data privacy laws are strict and we have to to treat data privacy very carefully. Thanks for understanding.    Copying a Course Pack from the Author  Some authors have provided a pre-made set of assignments. You can copy these from the \"base course\" after you have created your course. The \"base course\" is the code for the book that you chose when you created your own course. Not all authors have done this yet, so your results will vary.     Exams and Quizzes in Runestone   Introduction   Figure 1: Creating an exam from an assignment    If you look at Figure 1 on this page again, you will see there is a checkbox labelled Show as Timed Assessment This turns a problem assignment into an exam. There are severall things to note about this. First is the appearance to the students, when the students first see a timed exam it looks like this:     They cannot see any of the questions until they click the start button. When the start button is clicked the timer (if selected) is also started.  During an exam the students see just one question at a time. They can navigate the questions by number or they can use the prev\/next buttons to go from question to question.  When the student navigates to the new question the question they were on is evaluated and the results are sent to the server. Questions that a student has attempted are marked as grey on the numbered interface so students know which questions they have answered.  During an exam the student will not see any feedback on whether they answered the questions right or wrong. Once the exam is completed they will see that feedback unless you have checked the don't show feedback checkbox.  It is important to remind students that if they close the tab or their browser or navigate away from the page or even try to refresh the page, the exam is over and they will not be able to answer any more questions. Once they click the finish exam button they are done. As an instructor you can reset a students exam from the instructors page, but they will be forced to start over.  When a student submits their exam with the finish exam button or when the exam is automatically submitted due to time expiring, the autograder is run on the server and a score is recorded. If all your questions are autogradable you're done! If not you can use the grading interface to manually grade any questions.       Resetting an Exam  The instructor interface allows you to reset an exam for any student.     You just select the student and the assignment name and then press the red button.     Grading   Introduction   To grade student performance, go back to the instructor's interface and click on the grading tab. You'll see something like this.   Typically, you will select an assignment from the first dropdown. This will show you summary of the elements that are automatically graded. The other option is Chapter and you can use this to drill in on a chapter and look at a students work on any problem in the textbook regardless of whether it was part of an assignment.   From here you can also select a question or questions as well as a student or students to manually grade a problem. You can also use this to view a students answer to an automatically graded problem if they have a question about their score.   You will see the last version of code that the student ran prior to the assignment deadline. Click run to execute it. Drag the little scrubber across the timeline next to the Run button to see other versions of the code that the student ran.  You can assign a number grade (number of points) and, optionally, leave a comment. As you tab out of the grade box you will see it turn green to indicate that the grade has been updated in the database. Similarly if you leave a comment it will automatically update the database with the comment for the student.  If you prefer to work on one question at a time there is a save and next button that will automatically move on the next item to grade.    Autograde  Some questions have been configured for auto-grading, in particular coding problems with unit tests and some multiple choice problems. If you click on the Autograde button on the left side, the autograder will run. It will pop up an alert box to give you a diagnostic about how many question-student pairs were autograded.  Some things to note about the autograder:     If a question is selected, the autograder will run only for that question.    If a student is also selected, the autograder will run for only that question-student combination.    To run the autograder for all the questions and students for a particular assignment, refresh the page, select the assignment, and click the autograde button before selecting a question or student.    You can manually override the grade assigned by the autograder using the grading form on the right side. Be sure to change the comment as well.    If you rerun the autograder, it will not run on any student-question pair where you have changed the comment.       Calculate Totals  Once you have graded all the questions on an assignment, click the Caclulate Totals button to compute the total scores for the whole assignment, or to recalculate them after updating a grade. Again, an alert box will pop up to provide diagnostics about the min and max scores that were calculated.     Release Grades  When you are satisfied that the grade totals have been calculated correctly, click on the Release Grades button at the bottom left. This makes them visible to students. If you make any subsequent changes to grades, you will need to click Calculate Totals again, but you will not need to click on Release Grades again: once released, they stay released.    How a Student Sees Grades and Comments  When viewing an assignment, a student can click on the Show Feedback button to see a score and any instructor comments.   In addition the user menu allows the student to see a summary of their progress.      The Practice Interface  How often have you had a student ask you how they could get more practice? One theory that supports this is spaced repetition That is, a method to have students go back and answer existing questions but a couple of weeks after the material was brand new. Its harder, because its now out of the immediate context of the reading they just did, but this type of review helps solidify a student's understanding of the concept.  There is a paper about this in the ACM Digital Library from the 2019 proceedings. Speed and Studying: Gendered Pathways to Success, Iman Yeckehzaare and Paul Resnick.  This feature is available in most books on Runestone Academy. The exercises need to be tagged and in some cases categorized. Other books will follow as we do the work to update the source.  The first thing you will need to do is configure practice for your course. Most of the options on the configuration are pretty self explanatory, but here are a few notes.  If you choose to assign points for practice they will show up in a special column in the gradebook.labelled \"Practice\"  Do not forget to come back to the practice interface after you have covered a topic so that you can enable practice questions for that topic.     Set up the practice feature for your course.    Once you have enabled the practice feature for the course, you enable the sections you want practice questions to come from.     The students can access the practice tool from the 👤 menu, The practice practice looks like this:       Exercises  this page left intentionally blank   "
},
{
  "id": "p-167",
  "level": "2",
  "url": "working-with-assignments-chap.html#p-167",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reading Assignments Problem Sets "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "working-with-assignments-chap.html#remark-1",
  "type": "Remark",
  "number": "6.1.1",
  "title": "Overloading Assignments.",
  "body": " Overloading Assignments  Besides regular problem sets, a problem set can also be used to create two other student experiences.  Timed Assessments -- See .  Peer Instruction Work -- See     "
},
{
  "id": "p-174",
  "level": "2",
  "url": "working-with-assignments-chap.html#p-174",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "in progress submitted "
},
{
  "id": "new_assign_fig",
  "level": "2",
  "url": "working-with-assignments-chap.html#new_assign_fig",
  "type": "Figure",
  "number": "6.2.1",
  "title": "",
  "body": " Figure 1: Click on the Add button to create a new assignment   "
},
{
  "id": "unique_assign_fig",
  "level": "2",
  "url": "working-with-assignments-chap.html#unique_assign_fig",
  "type": "Figure",
  "number": "6.2.2",
  "title": "",
  "body": " Figure 2: Enter a unique name for the assignment   "
},
{
  "id": "warning-1",
  "level": "2",
  "url": "working-with-assignments-chap.html#warning-1",
  "type": "Warning",
  "number": "6.2.3",
  "title": "Make it Visible.",
  "body": " Make it Visible  Please take note of the visible to students check box. If you forget to check this box then the assignment will not show up in the list that your students (or you) can see on the assignment page.  "
},
{
  "id": "save_alert_fig",
  "level": "2",
  "url": "working-with-assignments-chap.html#save_alert_fig",
  "type": "Figure",
  "number": "6.2.4",
  "title": "",
  "body": " Figure 4: The save alert box.   "
},
{
  "id": "p-184",
  "level": "2",
  "url": "working-with-assignments-chap.html#p-184",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reading Assignments Problems Sets. "
},
{
  "id": "p-185",
  "level": "2",
  "url": "working-with-assignments-chap.html#p-185",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Flag Question "
},
{
  "id": "copy_assign_fig",
  "level": "2",
  "url": "working-with-assignments-chap.html#copy_assign_fig",
  "type": "Figure",
  "number": "6.3.1",
  "title": "",
  "body": " Figure 1: Copying an assignment.   "
},
{
  "id": "select_course_fig",
  "level": "2",
  "url": "working-with-assignments-chap.html#select_course_fig",
  "type": "Figure",
  "number": "6.3.2",
  "title": "",
  "body": " Figure 2: Select the Course   "
},
{
  "id": "fig_select_assign",
  "level": "2",
  "url": "working-with-assignments-chap.html#fig_select_assign",
  "type": "Figure",
  "number": "6.3.3",
  "title": "",
  "body": " Figure 3: Select one or all assignments to copy.   "
},
{
  "id": "create_exam_fig",
  "level": "2",
  "url": "working-with-assignments-chap.html#create_exam_fig",
  "type": "Figure",
  "number": "6.4.1",
  "title": "",
  "body": " Figure 1: Creating an exam from an assignment   "
},
{
  "id": "figure-27",
  "level": "2",
  "url": "working-with-assignments-chap.html#figure-27",
  "type": "Figure",
  "number": "6.4.2",
  "title": "",
  "body": "  "
},
{
  "id": "figure-28",
  "level": "2",
  "url": "working-with-assignments-chap.html#figure-28",
  "type": "Figure",
  "number": "6.4.3",
  "title": "",
  "body": "  "
},
{
  "id": "figure-29",
  "level": "2",
  "url": "working-with-assignments-chap.html#figure-29",
  "type": "Figure",
  "number": "6.4.4",
  "title": "",
  "body": "  "
},
{
  "id": "practice_if_fig",
  "level": "2",
  "url": "working-with-assignments-chap.html#practice_if_fig",
  "type": "Figure",
  "number": "6.6.1",
  "title": "",
  "body": " Set up the practice feature for your course.   "
},
{
  "id": "figure-31",
  "level": "2",
  "url": "working-with-assignments-chap.html#figure-31",
  "type": "Figure",
  "number": "6.6.2",
  "title": "",
  "body": "  "
},
{
  "id": "figure-32",
  "level": "2",
  "url": "working-with-assignments-chap.html#figure-32",
  "type": "Figure",
  "number": "6.6.3",
  "title": "",
  "body": "  "
},
{
  "id": "peer_instruction",
  "level": "1",
  "url": "peer_instruction.html",
  "type": "Chapter",
  "number": "7",
  "title": "Peer Instruction",
  "body": " Peer Instruction   Peer instruction was created by Eric Mazure to improve student understanding in Physics, but it has been used in many areas of study including Computer Science and Mathematics. The peer instruction process is defined as follows:  Students read material before lecture  There is a short assessment before or at the beginning of lecture   The instructor displays a hard multiple-choice question every 15-20 minutes.  Students answer individually  Students discuss answers with peers  Students answer individually again  Instructor shows the results of both answers and leads a discussion         Peer instruction in Runestone  Support for peer instruction in Runestone was developed as part of a research project by Barb Ericson at the Universit of Michigan. The interface consists of two parts, an instructor interface that allows the instructor to move the class through the steps outlined above and a student interface for answering the questions and participating in a live chat with one or more peers.  As an instructor you access the peer instruction feature from the 👤 menu and choose the Peer Instruction (instructor) option. This will bring you to a page that allows you to select the peer instruction assignment you want to use. When click on the link it starts the peer instruction session. During a peer instruction session students answers are not restored from their history if they have answered them before.   The peer instruction assignment selector     shows the interface for controlling a peer instruction session. It is pretty self explanatory, and consists of 4 steps. Note that when your students go to the student page they will see the first question and they will be able to answer the question right away. You will be able to see the number of students that have answered the question to the right of the question. This will allow you to guage when it is time to stop the vote.   Stop Vote 1  This will change the students display so that they see a countdown timer indicating that they have 5 - 4 - 3 - 2 - 1 seconds left to answer the question. Once the timer reaches 0 the students question will be disabled so they can no longer answer.    Enable Discussion  clicking this button tells the system to select partners for each student. Ideally it will choose a partner that has answered the question differently. It will then open up a chat box on the students page where they can engage in conversation with their peers. During this time you will be able to consult the page labeled \"Extra\" in This page is designed to be simple so you can bring it up on your phone or table and lets you monitor the percent of students that have answered the question correctly.    Start Vote 2  This will clear the students previous answer and enable the question so the student can answer again. During the voting period you can keep an eye on the number of answers to guage when to stop voting. You can also consult the second instructor display labelled extra in    Stop Vote 2  This begins a countdown timer to stop the second vote.    Next Question  Clicking this button changes the question displayed on your screen as well as your students.      The instructor interface for peer instruction       Creating Peer instruction Assignments  We covered creating assignments in . There are a couple of things to note about using that interface to create a peer instruction assignment.  You need to check the peer instruction box to make it a peer instruction assignment  Peer instruction assignments can only have multiple choice questions. We may add other question types in the future but for now this limit exists.  You are not limited to the question in your textbook, we have loaded a couple of question banks designed to be used with peer instruction. You can search for questions in the question banks by unchecking the box that limits your search to your course and searching for \"peerwiseqb\" for the PeerWise question bank, or \"canterburyqb\" for question in the Canterbury Question bank. More questions are being added all the time.  If you want to grade your peer instruction assignment you must set up your questions correctly.  You must set the Auto-Grade column to either Peer or Peer+Chat . Setting this column to Peer will give the student credit if they have answered both vote1 and vote2. Setting it to Peer+Chat will give them credit if they have voted for vote1, interacted with their parter(s) through chat, and voted in vote2.  The Which to grade field must be set to All Answers This is because peer assignment grading is unique in that the student is getting credit based on multiple interactions with a question not just a single check for correctness.        Virtual Peer Instruction Workshop  In the Spring of 2022 we hosted a virtual workshop on using the peer instruction interface. You may find the video useful in seeing peer instruction in action from both the instructor as well as the student perspective.    "
},
{
  "id": "peer_assignment_selector",
  "level": "2",
  "url": "peer_instruction.html#peer_assignment_selector",
  "type": "Figure",
  "number": "7.1.1",
  "title": "",
  "body": " The peer instruction assignment selector   "
},
{
  "id": "pi_instructor",
  "level": "2",
  "url": "peer_instruction.html#pi_instructor",
  "type": "Figure",
  "number": "7.1.2",
  "title": "",
  "body": " The instructor interface for peer instruction   "
},
{
  "id": "chapter-8",
  "level": "1",
  "url": "chapter-8.html",
  "type": "Chapter",
  "number": "8",
  "title": "Writing your own Exercises",
  "body": " Writing your own Exercises   Adding an Exercise to the Exercise Bank   Introduction   Although all of the Runestone books have a pretty good selection of exercises, you can never have too many exercises. We hope to crowd source an enormous collection of questions and problems in our Exercise database. You can help by adding custom exercises for your own course to the database! Once your exercise is in the database it is available for others to find using the search feature on the create assignment page.  Since the most common exercises are programming exercises let's look at the activecode directive in detail. Here is the full directive with every possible option. This is what you would see if you add an activecode exercise from the web interface. Let's not get bogged down in the details here, let's look at a much simpler example.   .. activecode:: uniqueid 'nocanvas': directives.flag, :nopre: do not create an output component :above: put the canvas above the code :autorun: run this activecode as soon as the page is loaded :autograde: typically unittest :caption: caption under the active code :include: invisibly include code from another activecode :hidecode: Don:t show the editor initially :language: python, html, javascript, java, python2, python3 :tour_1: audio tour track :tour_2: audio tour track :tour_3: audio tour track :tour_4: audio tour track :tour_5: audio tour track :nocodelens: Do not show the codelens button :coach: Show the codecoach button :timelimit: set the time limit for this program :stdin: : A file to simulate stdin (java, python2, python3) :datafile: : A datafile for the program to read (java, python2, python3) :sourcefile: : source files (java, python2, python3) :available_files: : other additional files (java, python2, python3) If this is a homework problem instead of an example in the text then the assignment text should go here. The assignment text ends with the line containing four tilde ~ ~~~~ print(\"hello world\") ==== print(\"Hidden code, such as unit tests come after the four = signs\")   Let's make an exercise to have the student compute the sum of the first N numbers.   Write a Python function to sum the first N numbers starting with 0. So if N is 4 then your function should add 0 + 1 + 2 + 3   def sum_first_n(N): # your code here   The source code for the above looks like this:   .. activecode:: sigcse_ex1 :language: python Write a Python function to sum the first N numbers starting with 0. So if N is 4 then your function should add 0 + 1 + 2 + 3 ~~~~ def sum_first_n(N): # your code here   Indentation and whitespace is important. In the previous example, you will see that the optional directive :language: is indented by four spaces. from the previous line. It must be indented at least three spaces to line up with the a in activecode, but using 4 keeps it consistent with my own personal python indentation style. Everything else in the body of the directive must also be indented to match the indentation of the optional parameters.  You can enter this into a textbox by clicking on the Write button under the Problems area.   After you enter the text you need to compile and render the text. You can get a preview of your question on the right of the page.   The first part of the directive body are the instructions for the student. You can use any valid restructured text (rst) in this part of the directive including embedded images. You separate the instructions from any code you want to give the student with ~~~~ thats four tildes. The next part of the body is any code you want to provide. Just put in your Python or other language as you would normally write it.  To keep an exercise page looking a bit neater you can substitute the .. actex:: directive for the .. activecode:: directive. Making that substitution gives us the following:   Write a Python function to sum the first N numbers starting with 0. So if N is 4 then your function should add 0 + 1 + 2 + 3   def sum_first_n(N): # your code here     Unit Testing exercises  Of course, as you have learned in the previous section, the real killer feature of these exercises is to be able to create your own unit tests, and have the grader autograde the assignment.  Let's expand our example to include some simple unittests. We can do this by adding a hidden block of code to our previous example that uses the standard Python unittest framework.   from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(add(2,2),4,\"A feedback string when the test fails\") self.assertAlmostEqual(add(2.0,3.0), 5.0, 1, \"Try adding your parmeters\") myTests().main()   If you are not familiar with Python unittests they are pretty easy to write. You create your own class that is a subclass of TestCase, or in our work TestCaseGui so we get some graphical output. Your tests are all methods of the class and must start with the word test . There are a host of assertXXXX functions that you can use. Check out the unittest documentation here   The second important addition in this example is the :autograde: option. This will allow the grade to make use of your unittests and assign a grade automatically for this particular problem.   Write a Python function to sum the first N numbers starting with 0. So if N is 4 then your function should add 0 + 1 + 2 + 3   def sum_first_n(N): # your code here ==== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(sum_first_n(4),6,feedback=\"0 + 1 + 2 + 3 == 6\") self.assertEqual(sum_first_n(0),0,feedback=\"summing 0 numbers should be 0\") myTests().main()   Let's try to add another test to the example above. This time we'll show the unittests in the active code window to make it easy for us to test. I strongly recommend you do this in a scratch activecode window when you are writing a question. It will save lots of frustrating wait time as you work out the details of your testing.  Let's try to add another test to the example above. This time we'll show the unittests in the active code window to make it easy for us to test. I strongly recommend you do this in a scratch activecode window when you are writing a question. It will save lots of frustrating wait time as you work out the details of your testing.   Write a Python function to sum the first N numbers starting with 0. So if N is 4 then your function should add 0 + 1 + 2 + 3   def sum_first_n(N): # your code here from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(sum_first_n(4),6,feedback=\"0 + 1 + 2 + 3 == 6\") self.assertEqual(sum_first_n(0),0,feedback=\"summing 0 numbers should be 0\") myTests().main()     Advanced activecode Options       include   – This option lets you include other activecodes in the current         timelimit   seconds – What to do when students create an infinite loop and lock up their browser? Just wait a bit, every run of Python has a built in time limit of 30 seconds. Some things might take longer than this, so if you know an example or assignment is going to take longer, then you can set a higher time limit with this option.         nocodelens   – codelens is an awesome addition, but it does not work with very many libraries. This is part of the sandboxed security of the codelens server. The most common one to be aware of is the turtle module. If you are doing a turtle example or assigning a turtle problem then you should set this flag so the Show Codelens button is hidden.          For languages outside the browser       language   – As you saw earlier, Runestone supports Java, python2, and python3 in a sandboxed server environment environment.        If you choose any of the above, the code from the window is packaged up and set to a separate server for compilation and execution. There are a few options to activecode that only apply to these languages.       datafile   You can provide an id to a datafile that will be sent along with your Java code         sourcefile   You can provide additional source files that should be compiled along with the java file you upload.         available_files   You can provide additional binary files to link into the final executable.           Multiple Choice Questions  Another common question type is the multiple choice question.   .. mchoice:: uniqueid :multiple_answers: boolean [optional] :random: boolean [optional] :answer_a: possible answer -- what follows _ is label :answer_b: possible answer :answer_c: possible answer :answer_d: possible answer :answer_e: possible answer :correct: letter of correct answer or list of correct answer letters (in case of multiple answe rs) :feedback_a: displayed if a is picked :feedback_b: displayed if b is picked :feedback_c: displayed if c is picked :feedback_d: displayed if d is picked :feedback_e: displayed if e is picked Question text ...   Here is an example from a Data Structures class:   3-1-1: Given the following sequence of stack operations, what is the top item on the stack when the sequence is complete?   m = Stack() m.push('x') m.push('y') m.push('z') while not m.isEmpty(): m.pop() m.pop()      'x'    You may want to check out the docs for isEmpty      the stack is empty    There is an odd number of things on the stack but each time through the loop 2 things are popped.      an error will occur    Good Job.      'z'    You may want to check out the docs for isEmpty     The source code is here:   .. mchoice:: stack_2 :answer_a: 'x' :answer_b: the stack is empty :answer_c: an error will occur :answer_d: 'z' :correct: c :feedback_a: You may want to check out the docs for isEmpty :feedback_b: There is an odd number of things on the stack but each time through the loop 2 things are popped. :feedback_c: Good Job. :feedback_d: You may want to check out the docs for isEmpty Given the following sequence of stack operations, what is the top item on the stack when the sequence is complete? .. code-block:: python m = Stack() m.push('x') m.push('y') m.push('z') while not m.isEmpty(): m.pop() m.pop()     Mixed-Up Code (Parsons)   Mixed-up code or Parsons problems provide the correct code to solve a problem, but the code is broken into blocks and mixed up.  .. parsonsprob:: unqiue_problem_id_here :maxdist: :order: :language: :noindent: :adaptive: :numbered: left Instructions for the user. These can include a textual description of how to solve the problem. You must leave a blank line before this. ----- def findmax(alist): ===== if len(alist) == 0: return None ===== curmax = alist[0] for item in alist: ===== if item &gt; curmax: ===== curmax = item ===== return curmax  Create a working program and then paste the code for it into the editor. Indent the code so that the left edge lines up with the options. Indent each line with 4 spaces beyond the previous line. Separate the blocks with ===== which must line up under the options. Put the instructions before the code after a blank line and then followed by ---- .    Parsons Options  Options are indented under the Parsons directive (under the p).    Parsons Problems Options   Option  Description    maxdist  The maximum number of distractors to use. They will be picked at random    order  The order for the lines, they are displayed in a random order normally    language  Specify the language: java, python    noindent  Provide the indentation for the user by adding spaces to the left of the code    adaptive  Provide help is the user is struggling and modify the difficulty of the problem based on the user's performance on the previous problem    numbered  Show numbered labels to the left of the code if you add left or to the right when you add right       Parsons Distractor Types  You can include distractor blocks in the problem. A distractor is code that isn't needed in a correct solution, such as code with a syntax error. Add a distractor block after the correct code block. Distractors can either be paired or unpaired. For paired distractors use #paired at end of the first line of code in the distractor block. For unpaired distractors add #distractor.    Example with Paired Distractors  Here is an example with paired distractors from a data oriented intermediate programming course in Python.   Complete the function greater_dictionary. Given a dictionary d and an integer cutoff, return a dictionary that contains only the key-value pairs where they key is greater than or equal to cutoff.     def greater_dictionary(d, cutoff):    def greater_dictionary(self, d, cutoff):     result = {}     for key in d.keys():    for key in range(d):      if key >= cutoff:    if key > cutoff:      result[key] = d[key]    d[key] = result[key]     return result    The source code for this problem is shown here:  .. parsonsprob:: mt1dict1ex :numbered: left Complete the function greater_dictionary. Given a dictionary d and an integer cutoff, return a dictionary that contains only the key-value pairs where they key is greater than or equal to cutoff. ----- def greater_dictionary(d, cutoff): ===== def greater_dictionary(self, d, cutoff): #paired ===== result = {} ===== for key in d.keys(): ===== for key in range(d): #paired ===== if key >= cutoff: ===== if key > cutoff: #paired ===== result[key] = d[key] ===== d[key] = result[key] #paired ===== return result    Example with Unpaired Distractor  Here is an example with an unpaired distractor.   The following has the correct code to ‘swap' the values in x and y (so that x ends up with y's initial value and y ends up with x's initial value), but the code is mixed up and contains <b>one extra block<\/b> which is not needed in a correct solution. Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me<\/i> button. You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.    int x = 3;  int y = 5;  int temp = 0;    temp = x;    x = y;    y = temp;    y = x;    The source code for this problem is shown here.  .. parsonsprob:: 2_swapex :noindent: The following has the correct code to 'swap' the values in x and y (so that x ends up with y's initial value and y ends up with x's initial value), but the code is mixed up and contains <b>one extra block<\/b> which is not needed in a correct solution. Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me<\/i> button. You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks. ----- int x = 3; int y = 5; int temp = 0; ===== temp = x; ===== x = y; ===== y = temp; ===== y = x; #distractor     Pro Tip – Test Your Exercises Locally  This is definitey an advanced topic If you are not comfortable with the command line you can definitely skip this section. But if you are at least somewhat comfortable with the command line and an editor then this can save you a bunch of time! The workflow is simple, edit your questions locally, then paste them into the interface once you have them working and debugged.  Here is a short video that demonstrates how to install the runestone command in under two minutes.     Here are the steps I go through in the video. This assumes you already have python installed on your system.     virtualenv runestone - Creates a python virtual environment so you don't need administrator privileges to install the rest of what you need. If virtualenv is not installed you should do pip install virtualenv (Python 2.7.x) or python -m venv runestone (Python > 3.5). If the pip command is not found then you should upgrade your version of Python to something newer. All modern version of Python come with pip pre-installed.    . runestone\/bin\/activate – this activates the virtual environment you created in the previous step.    mkdir assignments – Create an assignment to do your runestone work in.    cd assignments – Make assignments your working directory.    runestone init – Create a new project with some template directives    runestone build – Convert the restructuredText to html    runestone serve – start a simple web server so you can access your new project in your browser at http:\/\/localhost:8000\/index.html     Once the works you can simply edit the index.rst file created by runestone init, and run runestone build again to check your work.    Add your own Question  In the final exercise for the night, add your own question to the exercise bank using the web interface.  You can make it any kind of question you would like, but it would be great if it was a real exercise that you like to use in one of your own courses.  To keep the build system from bogging down, you can let me know once you have saved an exercise and I'll pull it into the sigcse2019 book and build it for you.   Make sure you assign at least 0 points to your question before you press done. If everything works, you will get a popup telling you that the question has been added successfully.     Exercises  this page left intentionally blank   "
},
{
  "id": "sigcse_ex1",
  "level": "2",
  "url": "chapter-8.html#sigcse_ex1",
  "type": "Checkpoint",
  "number": "8.1.1",
  "title": "",
  "body": " Write a Python function to sum the first N numbers starting with 0. So if N is 4 then your function should add 0 + 1 + 2 + 3   def sum_first_n(N): # your code here  "
},
{
  "id": "sigcse_ex2",
  "level": "2",
  "url": "chapter-8.html#sigcse_ex2",
  "type": "Checkpoint",
  "number": "8.1.2",
  "title": "",
  "body": " Write a Python function to sum the first N numbers starting with 0. So if N is 4 then your function should add 0 + 1 + 2 + 3   def sum_first_n(N): # your code here  "
},
{
  "id": "sigcse_ex3",
  "level": "2",
  "url": "chapter-8.html#sigcse_ex3",
  "type": "Checkpoint",
  "number": "8.1.3",
  "title": "",
  "body": " Write a Python function to sum the first N numbers starting with 0. So if N is 4 then your function should add 0 + 1 + 2 + 3   def sum_first_n(N): # your code here ==== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(sum_first_n(4),6,feedback=\"0 + 1 + 2 + 3 == 6\") self.assertEqual(sum_first_n(0),0,feedback=\"summing 0 numbers should be 0\") myTests().main()  "
},
{
  "id": "sigcse_ex4",
  "level": "2",
  "url": "chapter-8.html#sigcse_ex4",
  "type": "Checkpoint",
  "number": "8.1.4",
  "title": "",
  "body": " Write a Python function to sum the first N numbers starting with 0. So if N is 4 then your function should add 0 + 1 + 2 + 3   def sum_first_n(N): # your code here from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(sum_first_n(4),6,feedback=\"0 + 1 + 2 + 3 == 6\") self.assertEqual(sum_first_n(0),0,feedback=\"summing 0 numbers should be 0\") myTests().main()  "
},
{
  "id": "stack_2",
  "level": "2",
  "url": "chapter-8.html#stack_2",
  "type": "Checkpoint",
  "number": "8.2.1",
  "title": "",
  "body": " 3-1-1: Given the following sequence of stack operations, what is the top item on the stack when the sequence is complete?   m = Stack() m.push('x') m.push('y') m.push('z') while not m.isEmpty(): m.pop() m.pop()      'x'    You may want to check out the docs for isEmpty      the stack is empty    There is an odd number of things on the stack but each time through the loop 2 things are popped.      an error will occur    Good Job.      'z'    You may want to check out the docs for isEmpty    "
},
{
  "id": "writing-exercises_id1",
  "level": "2",
  "url": "chapter-8.html#writing-exercises_id1",
  "type": "Table",
  "number": "8.3.1",
  "title": "",
  "body": "  Parsons Problems Options   Option  Description    maxdist  The maximum number of distractors to use. They will be picked at random    order  The order for the lines, they are displayed in a random order normally    language  Specify the language: java, python    noindent  Provide the indentation for the user by adding spaces to the left of the code    adaptive  Provide help is the user is struggling and modify the difficulty of the problem based on the user's performance on the previous problem    numbered  Show numbered labels to the left of the code if you add left or to the right when you add right    "
},
{
  "id": "mt1dict1ex",
  "level": "2",
  "url": "chapter-8.html#mt1dict1ex",
  "type": "Checkpoint",
  "number": "8.3.2",
  "title": "",
  "body": " Complete the function greater_dictionary. Given a dictionary d and an integer cutoff, return a dictionary that contains only the key-value pairs where they key is greater than or equal to cutoff.     def greater_dictionary(d, cutoff):    def greater_dictionary(self, d, cutoff):     result = {}     for key in d.keys():    for key in range(d):      if key >= cutoff:    if key > cutoff:      result[key] = d[key]    d[key] = result[key]     return result   "
},
{
  "id": "2_swapex",
  "level": "2",
  "url": "chapter-8.html#2_swapex",
  "type": "Checkpoint",
  "number": "8.3.3",
  "title": "",
  "body": " The following has the correct code to ‘swap' the values in x and y (so that x ends up with y's initial value and y ends up with x's initial value), but the code is mixed up and contains <b>one extra block<\/b> which is not needed in a correct solution. Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me<\/i> button. You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.    int x = 3;  int y = 5;  int temp = 0;    temp = x;    x = y;    y = temp;    y = x;   "
},
{
  "id": "p-306",
  "level": "2",
  "url": "chapter-8.html#p-306",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "advanced topic "
},
{
  "id": "warning-2",
  "level": "2",
  "url": "chapter-8.html#warning-2",
  "type": "Warning",
  "number": "8.5.1",
  "title": "",
  "body": " Make sure you assign at least 0 points to your question before you press done. If everything works, you will get a popup telling you that the question has been added successfully.  "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "  "
},
{
  "id": "welcome",
  "level": "1",
  "url": "welcome.html",
  "type": "Appendix",
  "number": "A",
  "title": "Welcome to the Runestone Community",
  "body": " Welcome to the Runestone Community   The mission of Runestone Academy is simple: We want to democratize textbooks for the 21st century. There is a lot of meaning packed into that short sentence that I would be happy to unpack for you. Thank-you for your interest in Runestone and PreTeXt , and welcome! This appendix is meant to answer some questions you may have about how these open-source projects are organized, how you can get help, and how you can contribute back.  The first thing you should understand is that Runestone and PreTeXt started out as separate projects, but have been working together since late 2019. We realized that we can do more by combining forces than we could if we stayed independent. If you have a related project of your own, we hope you will have a similar sentiment.  Most instructors start out using Runestone Academy and one of the books we provide pretty much as is. As you get used to using Runestone and get comfortable with its ways and quirks you may find yourself wanting to add new questions to your course. After that you may find yourself wondering about how you might customize some of the courses content. Or you may find yourself wanted to add some functionality to the instructors interface. These are all great things and we welcome that evolution of your involvement. You should not feel like you have to be an expert author or coder to contribute. Its actually very enjoyable to see people continue their learning journey by helping develop the platform that helped them start!    Help and Support  There is a help and documentation area built into the Instructors Page on Runestone Academy. That may be where you found this Instructors Guide . This is a good place to start. If you can't find the answer to your question here or in one of the videos then that is a bug that needs to be fixed.  The implementation of Runestone is opinionated that is, it is informed by my own expereiences and preferences as a teacher, as well as the experiences and preferences of some core contributors. It is difficult for a system like this to be all things to all people without imploding on itself under the weight of a thousand different configuration options that make many things possible, but almost nothing good, and nobody happy. It may not work the way you think it should but over the years it has proven do be able to do most of what people really want. So maybe give it a chance.  There are a few ways to get help besides this guide.   There are various Google Groups with more or less activity for many of the books. Asking in one of those groups is great. Searching the group to see if someone has already asked the question is also good.                            This is very low volume – legacy group.      Join our . There is almost always someone live and available on the slack. So if you have something truly urgent that might be a good option.      Weekly Drop-Ins  There are two opportunities each week to ask questions of the development team. Tuesday afternoons from 1PM Central to 3PM Central on Zoom. The link is always the same and is always provided as a reminder in the slack channel. The Zoom meeting number is RUNESTONE1 on your telephone keypad.  The link is:    Since May 2020 there has been a standing weekly online gathering of PreTeXt and Runestone authors and developers. It runs on Friday afternoons for three hours and is announced Friday mornings on the pretext-announce Google Group. Sometimes there are scheduled discussions on development topics or seminars on topics of interest to authors and developers; but mostly there is no agenda and no schedule. Come late, leave early, drop-in, drop-out. If you are present, then you are implicitly available to help someone with questions, even if you are working on something yourself. The rest of us may lurk and\/or join in. We can use break-out rooms if a subgroup wants to run a discussion, work on a targeted project, or help somebody get started one-on-one. The model is the hotel lobby after dinner at a workshop, but you provide your own contraband.  So this is a great place to discuss a support question (likely with the person who wrote the code!) or a place to get involved with development.    Feature Requests and Reporting Problems  We welcome feature requests and of course problem reports. The best way to make Runestone Academy better is to listen to the people who are using it every day.  We use the Github issue tracker extensively for proposing and discussing new features as well as for reporting and investigating bugs. This is the place to report problems. Github is well known and trusted and it is free to sign up. Please do not use personal email to report problems .  It is not that we do not like to engage with people one-on-one it is simply a matter of trying to optimize our time. Many many bug reports are duplicates, for which there are already documented workarounds on Github if you just take the time to search.  Part of being an open source project is that we do our work in the open, and try to leverage the efforts and knowledge of the entire community. Sending a personal email to me may be satisfying or easy for you, but in many cases there are others who can help and fix the problem just as fast or faster than I can.  For every problem that can be fixed by someone else that leaves me more time to work on the really hard problems that other people cannot.    When reporting a problem please please take the time to give us some context and some details. Telling me that X does not work doesn’t really help. The truth is runestone.academy gets over 500,000 page views a day from people around the world. So most of the time when someone says “X does not work” it does in fact work fine for most people. This does not make it your fault, it just means I need more information to try to make sense of what is going on. Here are a few tips.  What Task are you trying to accomplish? Understanding your goals is really important as sometimes its not obvious how to do something on Runestone  What steps did you take to try to accomplish that task? Walking me through the steps gives me valuable context and saves me TONS of time in trying to recreate what went wrong.  Specifically what went wrong? What error message did you see? What exactly did happen that you think should not have happened. You can speculate about what you think is broken, but often you will be wrong and misleading. Just the facts is a great policy.  Give some context about your environment. What course are you in? What is your username? What page of the course? Specifically what exercise does not work? Each activity has a unique identifier. please include that. What browser are you using? What version of the browser. (Runestone relies on many modern features of Javascript that are only present in new-ish browsers) We can not test every browser so if you are using something outside of Chrome, Firefox, Safari, or maybe Edge it is likely that I have not tested it there.  If there is a traceback on the page, please copy it and include it in your Github Issue. Many many errors can be quickly diagnosed from the Javascript Console error log.  Chrome: View --> Developer --> Javascript Console  Safari: ⌥⌘i or Develop --> Show Web Inspector  Firefox: Tools --> Web Developer --> Toggle Tools       Please note, I'm not trying to be rude, but years of observation have taught me that CS teachers are pretty bad bug reporters! Imagine if a student sent you the following email:  Hey, You know problem 2 for the homework next week. My program just doesn't work. I'm pretty sure I've done everything right. Can you tell me how to fix it? Thanks, Student  You wouldn't be able to help this student very much, in fact you probably wouldn't have any idea what program that student was even asking about without spending your own valuable time figuring it out. Sadly, It is a pretty good representation of thousands of bug reports I've received. So please, take a few seconds and read or re-read Filing an effective bug report. Thanks.    Contributing  As a project that is licensed openly, we welcome contributions. And this does not necessarily mean you need to learn Javascript or Python or XSL. For ideas, find the issues on GitHub that have the label good first issue and\/or help wanted . Upating this guide, recording screen casts to replace the 11 year old screen casts in some of our books are examples of non-coding tasks that would be amazing.   "
},
{
  "id": "faq_appendix",
  "level": "1",
  "url": "faq_appendix.html",
  "type": "Appendix",
  "number": "B",
  "title": "Frequently Asked Questions",
  "body": " Frequently Asked Questions   Frequently Asked Questions   Why Can’t I access the Instructor Page?    How do I become an instructor?     I seem to have a student account, how can I get\/create an instructor account?    I created an instructor account but…     First lets clear up a couple of misconcptions. There is no way for me to know, just by your email address that you are an instructor. You could be anyone. So, there is no such thing as an instructor account. Accounts can have various roles including: student, instructor, author, editor, and administrator.  You get the instructor role by creating a course. This gives you the privileges associated with being an instructor but ONLY for that course and any other course(s) you create. You are not an instructor for any of the open courses or anyone else’s course. There is a really nice video to help you get started in the Instructors Guide Please check it out as it will answer many other questions and help you make the most of Runestone.    How do I learn more about the instructor interface  I have made a very informal set of videos for just this purpose.  We also have a nice new Instructor Guide     Help! I cannot log in. Every time I try to log in, I have to reset my password!  In 99.99% of the cases, this is because you are confusing your email address with the username you were forced to enter when you register. So, go through the password reset process and get yourself logged in again. Then look in the upper right hand corner of the page and pull down the user menu (the one that looks like a person.) Your username will be displayed at the top of that menu. We use username instead of email address to protect the privacy of our users.    I’m not getting the password reset email, can you reset my password?  Technically, I can. But I won’t. Runestone handles over 100 password resets a day automatically. It can handle yours as well. There are two things you should check.     Check your SPAM folder for the password reset email. and\/or add runestone to your contacts list to avoid that in the future.    Talk to your IT folks and make sure they are not blocking Runestone. We’re a small group, but we did everything right with our email setup to make the military academies happy, so I think your folks ought to be happy too. However some schools disallow any external email that is not whit-elisted. Please ask them to white-list runestoneinteractive@gmail.com as well as info@runestone.academy     If you are a student, talk to your instructor. Your instructor can reset your password in the case where the email system is failing us.       I can’t log in to my Coursera course, what do I do?  Sorry, but we do not have control over Coursera and especially the courses from UMSI. Those courses are designed for you to access through Canvas. If that is not working please contact your coursera instructor.    How do I add students to my course?  See this post for a detailed description: Privacy and Runestone You invite them, either in class or with an email. Tell them to register at runestone.academy and then give them the name of the course you created. During the registration process they type in the name you used, and they are registered. I usually just do this the first day of class to make sure everyone gets registered and then give them a little tour of the book and all of the things they can do.  In the future, we may look into importing a class from some LMS system like Moodle and others.    What do those green checkmarks and orange circles mean?  A green checkmark for a page means that you have completed that page, either you have satisfied yourself that you are done OR you have attempted all of the interactive activities on that page. It does NOT mean you got everything correct. Clicking the button bottom of the page WILL NOT give you full credit on a reading assignment, you still need to do the work.  Historically this was ONLY for your own personal benefit to help you keep track of the things you had read and the things you were currently reading. It has evolved and with that evolution comes some confusion. Hopefully this clears it up.    How come there is no Green Checkmark for the Exercises pages?  Some exercises pages have over 300 problems. Do you really think we expect you to do ALL of them? We expect your instructor to use some discretion when assigning you homework. You will not find green checkmarks for Exercises or for table of contents pages.  Sorry if that freaks you out, but that is just how we do it.    Where do I find answers to all the homework questions?  In my years of teaching computer science I was always learning something new and trying to stay ahead of the students. I understand that for many of you this might be a first time teaching a CS course, and that for many you are overworked and underpaid. I hear you, and I feel your pain.  But just as I tell my students, you can’t really learn this stuff just by reading the answer, you have to do it.  We have many books on Runestone Academy written by many authors. Whether or not authors provide an instructor guide or answers to all the questions is up to them. So there is no blanket answer to the question.  For myself there are several reasons:     Writing an instructor guide that contains all of the answers to the questions essentially doubles the work of writing a book, and even more so maintaining the book. In all the textbooks I’ve used over the years for CS I’ve only ever had one that had a solution guide and that was largely for all of the math in a networking text.    For 99% of the questions there is no one right answer. Very likely if I give you an answer there is a better one out there, and I really don’t want to get into arguments about what is better. Especially since a lot of it comes down to style.    Doing the work is the best way to prepare to teach it. You are smarter, wiser, and a better problem solver than your students. Its actually good for them to see how you approach solving the problem rather consulting some answer key.    From a practical perspective it would be very hard for me to decide who gets the materials. How do I know you are an instructor? I can’t possibly take the time to go check out every user that claims to be an instructor to see if they are legit. Right now the only benefit of being an instructor is that you get to see and grade the work of your students. If you are a student pretending to be an instructor this gives you no advantage.    As I think about how best to invest the hours of my day that I have to work on this, I have very little energy or excitement for writing an answer key. So I choose to spend my time elsewhere. If others were to do so, and want to publish it somehow, I would be very happy to accept a PR!    I wold much rather put my energy into developing good unit tests, so that you know when you are right and when you are not there yet without me giving you solution.    With all of that, behind me, I’m still thinking about it, and trying to find a way to do it where its NOT a huge amount of extra work, and I can keep things in sync. I’ve thought about charging for the instructor guide as one way to both disuade casual cheaters and to help fund Runestone development. Stay tuned…       Can I build my own course and host it here?  Yes, we are currently hosting many courses for many different institutions around the world. In fact in 2013 one large institution had 800 students using one of the books.  The best approach is to use our system to build your own textbook. This gives you several advantages as an instructor including:     a simple grading interface for homework problems at the end of each chapter    some simple reports on your students activities within the textbook.    at a glance information about the multiple choice and fill in the blank questions embedded in the text.       How do I build my own course?   Steps to Build     First you should register yourself as a user on this site. When you register you must pick a course. Just use thinkcspy or pythonds, it doesn’t matter as that will change when you build your own.    Then go to the instructors page .    On this page you will see the links for listing and grading assignments and lots of other things. Right now those won’t show you anything, so move along to the Create a Custom Course link.    Fill in the Project Name. This should be a short one word description of your course like luther150a. When your students register for the course this is the name they will have to type in to join your particular course. No Spaces allwed in this name.    The description can say a bit more about the course.    Choose one of the ready-made books for your course.    Its probably just fine to leave this at today’s date. If you set it into the future and then do some experimenting with assignments and quizzes today you won’t be able to see your results because you are only shown things that come after the start date.        Is this site reliable enough to use in class?  Yes. We host this on a very reliable service and we monitor our traffic constantly. We use a content distribution network for increased scalability and reliability. In the Fall of 2020 we serve over 50,000 students a day with no downtime. Runestone is also used for a couple of courses on coursera which have hundreds of thousands of students, and by many large Universities.    Why did you change domain names?  The old domain name, “interactivepython.org” was becoming quite inacurate. Although we started with Python we have a lot of users that are using the AP CS Review book (Java) and my Java for Python programmers book. There is also at least one statistics textbook written in runestone as well. I saw the domain name “runestone.academy” and thought that would be cool.    I want to reuse my course from last year, what should I do?  You should create a new course and then from the instructor page in the new course copy the assignments from your old course. The assignment dates will be adjusted based on the class start date.  The instructor interface allows you to copy all your assignments from a past course into your current course, so re-using an old assignment is pretty simple. It even re-calculates a due date for your based on the delta between your old term start date and when you had the assignment due that term.    How do I update my course to get the latest bug fixes?  Nothing. Bug fixes are automatically deployed weekly.    I was just experimenting and I want to delete my course  Once you are done experimenting please delete your course from the instructors interface. If this does not happen I may have to invent a way to go back and remove courses that were clearly created as an experiment but never really used by students.    What if I want to add a new section or chapter?  That would be awesome. This whole book is open source. You can grab a copy of the source on github . The source for thinkcspy and pythonds is in the source folder and there is a subfolder for each chapter. If you want to make a whole new chapter then create a folder and follow the conventions of one of the other chapters. There is full documentation for the markup language at PreTeXt Guide . When you are finished make a pull request and we’ll review your material and incorporate them into the book.    What if I want to add my own exercises?  You can add your own custom exercises by editing the assignments.rst file. This file is meant for the descriptive or question text for a programming exercise. Adding an exercise to this file does not automatically add it to the grading interface for your course, you still need to do that from the instructors interface. See this blog post for more information.  New exercises are always welcome and we would love to expand the number of exercises. The simplest way is to go to the github issues page and file a new issue. In the description simply include the text for the exercise and which chapter you think it should go in. We’ll take it from there. After we’ve added the exercise you can rebuild your book and it will be there.    My students are completing work but it is not showing up. Help!  There are many answers to this, as the question itself is very vague. Where is it not showing up? What is not showing up? The first thing to say is that Runestone goes to great lengths to save everything! It is extremely rare for an action to go unrecorded. With that said here are things to check.     Make sure your students are logged in to YOUR course and not the open course that you based yours on. If your student is logged in to your course they will see the name of your course in the upper left corner of the browser window.    Make sure they are paying attention to the progress bar. If the progress bar is gray they are not logged in! If it is green they are. The progress bar will show how many of their activities have been recorded for that page.    Check the assignment page and click on the self grade button. This is yet another way that students can verify their work has been saved.    For students work to show up in the gradebook you will need to use the grading interface to run the autograder which tabulates the scores for the assignment and saves them in the database. You also need to release the grades in order for the students to see them on the student progress page. If you haven’t released them then they will not see their progress.    Make sure your assignment deadlines are set up correctly or that you have unchecked the box to only count activities before the deadline.    From the student progress page you can click on the name of any student and see the raw log details. You can also click on the overview reports link from that page and download a CSV file that you can import into your favorite spreadsheet. This will show you counts of activities for each student, the timestamp of the first time a student interacts with anything in runestone and more.       How do I change courses or register for an additional course?  Under the 👤 menu you will find the Change Course option. click on that and then at the bottom of the page click on the Enroll in a Course button. From there you can just enter the new course in the Course Name field.    What course name should I use when I register?  If you are enrolled in a course at a high school, college or university your instructor should give you the name. If they didn’t you need to ask them. If you are learning on your own, The registration page gives you the full list as does our library page. But here are the legal, open, courses that anyone can sign up for. Since you are here you didn’t see that so here is the list:     apcsareview    cpp4python    cppds    csawesome    fopp    httlads    java4python    JS4Python    learnwebgl2    overview    pythonds    pythoned    StudentCSP    TeacherCSP    thinkcspy    webfundamentals       What version of Python does your book use?  Ok, this is a question that has the potential to start nasty religious wars. The technical answer is that this book uses a version of Python called Skulpt . It is entirely written in Javascript so that it runs right in the browser. We think this is very cool. Now some people get all crazy about whether they should teach Python 3 or Python 2. The truth is that for CS1 and CS2 it really does not matter. Skulpt can do print with or without parenthesis, and \/ can do true division or integer division and lets face it for CS1 that is really all that matters. Sure, there are differences, but are you really going to start out by teaching your students about dict_keys and how they are different from a list . If so, I think you are cruel and you should teach your students APL. If you want to slant your teaching toward Python 3, you can do that with this book. If you want to lean towards 2, you can do that too. When you build your course there is a configuration parameter that lets you choose Python3, this forces you to use parenthesis when you print, and it makes python \/ default to true division, and \/\/ to integer division.    I think there is a bug in your book what should I do?  Please let us know! You can file bug reports on our github issues page . Thanks! If you don't have a github account then join us on our Discord channel.    I have a question that is not covered here!   Contact     Tweet me @iRunestone    Post the question on our google group    Send me a private email. runestoneinteractive@gmail.com         My Internet is slow, I want to use Runestone offline  This might require a little extra learning on your part but here is what you need to do. If you can’t get this to work on your own ask your teacher for some help.     Install Python    Use pip to install runestone (pip install runestone)    Download or use git to clone the repository for your book from https:\/\/github.com\/RunestoneInteractive     Edit the pavement.py file for your book and set dynamic_pages = False and useRunestoneServices=False    In the folder created for your book run runestone build –all     6. Run the command runestone serve and then in your browser go to http:\/\/localhost:8000 This will let you access your book from a webserver running on your own computer, It will save your work locally, as long as you use the same browser.  But it will NOT share or sync any information with Runestone.academy    Why can’t I just get a PDF?  Because what we are focused on is building great interactive textbooks, pdfs are not interactive. Update!! Our partnership with the PreTeXt team allows us to build books in many formats including PDF. If your book has been converted there is a good chance we can get you a PDF.    How does Runestone handle timezones?  Very well thank you! Every student interaction is logged to the runestone database using UTC time. When you create an assignment with a deadline store the time in the timezone of the instructor making the assignment as the deadline. Given that we can fairly judge whether a student has completed their work on time. Trust me we have figured this out over the years and learned a lot about time zones. Did you know there are places in the world where there are half or quarter hour differences between two timezones??!!  I realize that students will often complain that they had their work done on time but the darn Runestone would not give them credit. Usually they are wrong. But you have several ways of checking out their claim including downloading the log for your course or looking at the Student Activity report and checking their first and last interactions with the problem. The software has proven itself to be correct way more often than the students and we use one of the most reliable databases in the world (Postgresql) to keep track of student activities!    "
},
{
  "id": "p-362",
  "level": "2",
  "url": "faq_appendix.html#p-362",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "attempted "
},
{
  "id": "note-3",
  "level": "2",
  "url": "faq_appendix.html#note-3",
  "type": "Note",
  "number": "B.1.1",
  "title": "Steps to Build.",
  "body": " Steps to Build     First you should register yourself as a user on this site. When you register you must pick a course. Just use thinkcspy or pythonds, it doesn’t matter as that will change when you build your own.    Then go to the instructors page .    On this page you will see the links for listing and grading assignments and lots of other things. Right now those won’t show you anything, so move along to the Create a Custom Course link.    Fill in the Project Name. This should be a short one word description of your course like luther150a. When your students register for the course this is the name they will have to type in to join your particular course. No Spaces allwed in this name.    The description can say a bit more about the course.    Choose one of the ready-made books for your course.    Its probably just fine to leave this at today’s date. If you set it into the future and then do some experimenting with assignments and quizzes today you won’t be able to see your results because you are only shown things that come after the start date.     "
},
{
  "id": "note-4",
  "level": "2",
  "url": "faq_appendix.html#note-4",
  "type": "Note",
  "number": "B.1.2",
  "title": "Contact.",
  "body": " Contact     Tweet me @iRunestone    Post the question on our google group    Send me a private email. runestoneinteractive@gmail.com      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
