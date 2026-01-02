var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "prose-philosophy",
  "level": "1",
  "url": "prose-philosophy.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Runestone Philosophy",
  "body": " The Runestone Philosophy  The primary reason that Runestone was created was to be an interactive eBook server that would motivate students to actually read and experiment with the content provided by the author. This idea was born in my head in the fall of 2010 as I was suffering from a serious case of writers block while trying to work on a second edition of a paper textbook. Why should textbooks be static? Especially computer science textbooks!? From this frustration I stopped working on the update and started trying to create an interactive computer science textbook. My primary motivation was to make every example runnable and editable so that students could read code, run code, and then modify that code to see how it behaved differently with their changes.  Having come to Luther College from the and an internet startup company, I also knew the value of collecting data. So I also set out to make sure that every action a student took within the textbook was captured. I had no idea what we were going do with the data, but my intuition was that we could learn valuable lessons about how students were learning if we captured and analyzed enough data. Collect the data first and then figure out how to make use of it later.  Everything else you see about Runestone Academy today came later, and I'll cover more of that evolution in . But the takeway is that for us the student experience is always foremost in our minds. Everything that you as an instructor can do with Runestone follows from that philosophy of collect the data first and then see what we can do with it.  I had never heard of the term Learning Engineering until the summer of 2021, but that is really what Runestone is and has always been about.  Learning Engineering is the systematic application of evidence-based principles and methods from educational technology and the learning sciences to create engaging and effective learning experiences, support the difficulties and challenges of learners as they learn, and come to better understand learners and learning. It emphasizes the use of a human-centered design approach in conjunction with analyses of rich data sets to iteratively develop and improve those designs to address specific learning needs, opportunities, and problems, often with the help of technology. Today (August 2022) if you asked me I would say that Runestone is a LEAP . A learning Engineering and Analytics Portal. Many of the innovative features in Runestone have come from first class pedagogical research. All of Runestone has been evolved over the years by paying attention to the data we collect and the feedback we get from instructors and students. All of this has been possible because we realized early on that most instructors do not want to run and manage their own servers, and that we could provide a valuable service by providing a portal to free, high quality interactive textbooks.  The diagram below illustrates what we are trying to create. Which is a virtuous circle whereby students learn more effectively, teachers can learn to teach more effectively, and authors can learn to write better textbooks.   All of this is to say that although Runestone supports many of the functions of an LMS, Runestone was never designed to be an LMS. Runestone is much more, and in order for you as an instructor to get the most out of Runestone you may need to adjust your thinking and expectations. Hopefully this guide will help you do that.  "
},
{
  "id": "prose-philosophy-5",
  "level": "2",
  "url": "prose-philosophy.html#prose-philosophy-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Learning Engineering "
},
{
  "id": "Introduction-4",
  "level": "1",
  "url": "Introduction-4.html",
  "type": "Section",
  "number": "1.2",
  "title": "Courses Versus Books",
  "body": " Courses Versus Books  The first thing to understand about Runestone is the difference between a book and a course. This has long been a point of confusion. Runestone was originally conceived of as a system for building interactive textbooks. But, as soon as you start to include interactive things like coding and multiple choice questions the next logical step is for someone (likely you - dear reader) to want to evaluate that work and record a grade. A grade only makes sense in the context of a course, so we created the ability for you to make a course for your students. But because the central notion always was a book there has always been the limitation that a course can only be tied to a single book. This limitation continues, but is something we are thinking about how to relax in the future. In the meantime will guide you through the process of creating a course around your chosen textbook.  The fact that Runestone allows you to do many of the things that you would normally do in an LMS like Canvas or Moodle has led many people to think of Runestone as an LMS like system. We reject that label and claim that Runestone is much more than an LMS. Runestone is a LEAP Learning Engineering and Analytics Portal. Briefly, Learning Engineering is is the systematic application of evidence-based principles and methods from educational technology and the learning sciences to create engaging and effective learning experiences, support the difficulties and challenges of learners as they learn, and come to better understand learners and learning. See   Because a book and a course are so tightly coupled we can do many things that an LMS cannot. We can collect much more fine-grained data about what your students are doing. Your students can do their homework by answering questions as they read them in context, or they can answer them on a homework page that has only the questions. In fact it does not matter where they do their work if they answer the question in one place it will also appear in the other. Runestone captures every interaction your students have with a question whether they answer the question before you assign it or after its assigned or even long after a homework assignment is due we save that interaction and timestamp it. This gives you a lot of flexibility over accepting late work (or not) For every question you can see the time of your students first interaction with that question as well as their last, you can see their entire history of interactions with that question. For programming assignments this can be a powerful learning tool for both you and your student.  "
},
{
  "id": "Introduction-5",
  "level": "1",
  "url": "Introduction-5.html",
  "type": "Section",
  "number": "1.3",
  "title": "Privacy",
  "body": " Privacy  In order to do things like remember work in progress, record scores, etc. Runestone needs a student to have a persistent user id. In 2022 we realize it is quite common to use one's email address as that persistent identifier, but we do not. We still use usernames so that you or your student can make up something completely disconnected from a students personal information. In fact one can successfully use runestone with a random username, a fake email address, and a fake first and last name. The only caveat to that is that if you forget your password you won't be able to reset it with a fake email address! See for more information.  We urge you to read our and our We understand that in 2022 it is common, especially for high schools, to want us to sign a data privacy agreement. Please understand that as an open source project we do not have a lot of resources for reading legalese. Thankfully many states have now adopted the National Data Privacy Agreement ( NDPA ) We have studied and are very happy to sign the NDPA. In fact for many states we only have to sign the agreement once and all you have to do is sign and send us Exhibit E. This blog post explains more about   One of the strengths of Runestone is that many of our features have been created and tested and validated by published research! That is good news for your students. It also means that we do cooperate with a small number of highly trusted research partners at major universities. We give them access to fully de-identified data from our database to help them conduct experiements on new features. This makes the experience better for everyone while keeping your student's work anonymous.  "
},
{
  "id": "Introduction-5-3",
  "level": "2",
  "url": "Introduction-5.html#Introduction-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "National Data Privacy Agreement "
},
{
  "id": "Introduction-6",
  "level": "1",
  "url": "Introduction-6.html",
  "type": "Section",
  "number": "1.4",
  "title": "Why am I seeing Ads",
  "body": " Why am I seeing Ads  Our mission is to make high quality textbooks available to all students for free. But, servers cost money, development takes time and money. One way that we support the mission of Runestone is to show ads to a some of our visitors. Specifically we only show ads to people who have not created an account. That means that the vast majority of ads are actually served to people who land on one of our pages because of a search. Generally speaking these are not students in a class.  If you want to make the ads go away it is easy, just create an account. Don't worry, we don't sell your email address, or give away your name. Feel free to use a fake email and fake name. Although if you forget your password you won't be able to reset it without a working email. As an instructor you should read if you want to set your students up to use Runestone Academy anonymously.  If every class that used Runestone could pay $100 for the semester regardless of the size of the class we would have enough money to be fully sustainable, and not show any ads to anyone. We would love that. We are not huge fans of ads either. So maybe you can help us figure out how to do that.  "
},
{
  "id": "Introduction-7",
  "level": "1",
  "url": "Introduction-7.html",
  "type": "Section",
  "number": "1.5",
  "title": "A Word about Scale",
  "body": " A Word about Scale  This section added in September 2023.  As you will see in our history, Runestone came out of a small liberal arts college. Class sizes were around 30 students. A huge number of our courses are high school AP CS courses using the CSAwesome book. Those courses tend to be in the 10 -- 50 student range. For courses that size Runestone has worked well for many years. In fact here is a histogram of course sizes over the last two years.   Recently Runestone Academy has become a tool for courses at much larger institutions and consequently we are seeing course sizes grew. I was totally taken off guard in August of 2023 when three courses containing 1000+ students were created.  We have architected the website to be horizontally scalable. Which means we can support many thousands of courses at the same time. So, we can support many thousands of courses, but not many thousands of students in a single course. We are working on that, but it is a big job. The good news is that the parts that suffer are the parts for the instructor interface. The student experience is not affected. So, if you are teaching a course of 1000+ students, your students will not notice any problems. But you will. Further good news, the instructor interface is undergoing a major rewrite, so know that we are working on it, and are now aware that 1000+ student courses are a thing.  If you are teaching a course of 500+ students here are some things to keep in mind:  Things like the gradebook or student progress tabs, are likely to time out (502 Gateway timeout). The grader itself is probably something you should start when you can just let it run for an hour or more.  If you want to use the practice tool for a very large course then you should definitely set the option to have flashcards generated when a student starts a page or the option for when they complete a page. If you try to have it generate flashcards for the students when you mark a section as complete you are going to be frustrated!  You may also wish to consider breaking a very large course into multiple courses corresponding to different sections. You can set up one section as a master and then your TAs can copy assignments from the master course.  If you are from an institution that has classes of 1000+ then I would ask that you really make an effort to support Runestone Academy. Either directly from your department, or stating on your syllabus that students should donate. Please recognize that a course of 1000+ puts a lot of additional demand on our servers. We strive to give you a great experience so as more students register we add more servers. Every server we add costs money. In the future we may be forced to institute a small fee for very large courses just to help us cover our costs.    If your course is in the 100-300 student range you may notice that things are a bit slower than you would like, but generally it should all work.  "
},
{
  "id": "a-brief-history",
  "level": "1",
  "url": "a-brief-history.html",
  "type": "Section",
  "number": "1.6",
  "title": "A Brief History of Runestone",
  "body": " A Brief History of Runestone  The Runestone project began in on my sabbatical in 2011. I've already mentioned that I had serious writers block because I wanted computer science textbooks to be interactive. The first stage in fixing that problem was finding a way to run Python in the browser. This led me to the Scottie Graham had implemented Python 2.6-ish by re-implementing CPython in Javascript. While the core was there Skulpt was missing many pieces, such as a turtle graphics module. Since I loved using turtle graphics as a way for students to get fun, immediate feedback on their code I set about trying to add turtle graphics to skulpt. Since I knew very little about Javascript that sucked up a couple of months of my Sabbatical, but was a lot more fun than updating a textbook. With turtle graphics in hand I knew I had hit on something!  The next problem was that I knew that as an author I didn't want to have to write a 100 lines of custom javascript for every example! I needed a way, ideally a really simple way of just surrounding some python code with a wrapper and letting a tool build the html and javascript needed to create a widget on the webpage that ran the Python. This led me to Sphinx is a wonderful writing tool, widely used in the Python community. It also has a rich collection of extensions, and a syntax that is just what I was looking for! With sphinx I could write something like:  .. activecode:: some_id print(\"hello world\")  Sphinx would turn that into html that looked like:  <div class=\"runestone explainer ac_section \"> <div data-component=\"activecode\" id=over_ac_example1 data-question_label=\"1.1.1\"> <div id=over_ac_example1_question class=\"ac_question col-md-12\"> <\/div> <textarea data-lang=\"python\" id=\"over_ac_example1_editor\" data-timelimit=25000 data-coach=\"true\" data-codelens=\"true\" data-audio='' data-wasm=\/_static style=\"visibility: hidden;\"> print(\"My first program adds a list of numbers\") myList = [2, 4, 6, 8, 10] total = 0 for num in myList: total = total + num print(total) <\/textarea> <\/div> <\/div> <\/pre>  Stir in some javascript and you have a working runnable example! That looks like this:   print(\"My first program adds a list of numbers\") myList = [2, 4, 6, 8, 10] total = 0 for num in myList: total = total + num print(total)   With Sphinx I had a way to write large documents in a very simple markup language called and a way to extend the markup with interactive textbook elements, which at that time was still only running python. But it gave me a huge sense of optimism that my goal of having an interactive textbook was achievable.  The next problem was to translate our textbook called Python Programming in Context from LaTeX to restructuredText and converting the examples to be runnable. But Jones and Bartlett publishers had different ideas. I had signed away the digital rights to the book in our original contract and Jones and Bartlett were not willing to let me convert the book. They were going to sells PDFs along with some kind of digital code to a code practice system online. I was really depressed, I loved that book and its approach. I hated the publisher (and still do) for their greed and short sightedness. I didn't want to start over and write yet another intro to CS book from scratch. So I started looking for something else to start with. This led me to by and This book had a GNU Free Documentation License, and was already in restructuredText!! So I remixed that book and added interactive examples which led to the interactive edition of that book.  The publisher of My other book, Problem Solving with Algorithms and Data Structures using Python was . I'll never forget the conversation I had with Jim Leisy, our publisher, at SIGCSE. I had just given him a demo of a couple chapters of the interactive How to Think book and asked him if we could do the same thing with our data structures book. He said, I've always wanted to change the world, and this looks like my chance, lets do it!   In the Summer of 2011 I was at the ACM Awards ceremony in San Jose, I was there as part of the team accepting the . At the banquet I started a conversation with Mark Guzdial and Barb Ericson who were accepting the Karl Karlstrom outstanding educator award. I told them about Runestone and that conversation started a pivotal partnership that has lasted to this day. Their reaction was this is wonderful and the kind of research tool we have been looking for. Now can you add multiple choice questions? fill in the blank? And many many more ideas including Parsons problems, which were the subject of Barb's PhD research.  The next several years were super busy, I managed to find money to get Luther students to work with me on Runestone during the summer months. In the summer of 2014 we had the first Runestone Hackathon at the University of Michigan. This workshop was pivotal because it was the beginning of the instructor interface. I had always resisted adding too many instructor facing features to Runestone, I did not want Runestone to become another crappy LMS!! But Paul Resnick and Barb Ericson convinced me that adding features to make the lives of instructors better was necessary, and that we could do things that LMS could never dream of doing to help teachers understand their students better. We did a lot of whiteboard designing that year and worked on it until it all really came together in the summer of 2016 when we had the second hackathon at Luther College.  By the late Fall of 2017 I was developing a real desire to focus all of my efforts on Runestone. But I wasn't sure how to make that happen until Luther announced an early retirement incentive. Anyone with 15 years of service to the college was eligible and could get a years salary and stay on the college health plan for five years. This was a dream come true, I just met the 15 year criteria and the years salary would give me time to figure out how to make Runestone sustainble in a way that could pay me some kind of salary.  Things got even more interesting in the Spring of 2018 when I was offered a consulting gig with Google. They wanted to use Runestone as a platform for their applied computing program. In a nutshell the program's goals were to introduce computer science to colleges with underserved student populations that had not offered computer science before. I basically got to work on Runestone and coach professors from the participating colleges in how to use Runestone and how to teach introductory CS. The program expanded into a second course to introduce Data Science to those colleges, which resulted in the How to Think like a Data Scientist book. My gig at Google was supposed to last 5 months, but it ended up lasting two years.  Sometime in the early2019 I received an email from Oscar Levin that read as follows  On behalf of the workshop organizers, Jim Fowler, Mitch Keller, Matthew Leingang, and Oscar Levin, we would like to invite you to participate in the workshop \"Interactive assessments in open source textbooks\" from December 9 to December 13, 2019.  I didn't know anything about AIM , and I had never met Oscar but the workshop sounded interesting. So I said yes. When I arrived at the first day of the workshop and listened to the introductory talk, I knew that I had found a group of people I wanted to work with more. Many of the people in this workshop were authors of open source math textbooks written in . A project started by Rob Beezer at about the same time I had started Runestone.  It was early in the afternoon of the first day of the workshop when I found myself in a room with David Farmer, and after I had given a quick demonstration of Runestone and its capabilities he said something like: This is great, but I don't know why you would want to keep developing this Runestone Markup language when you could just use PreTeXt and focus your efforts on other more valuable work. It was one of those direct statements that hit me hard, should I be offended? embarrased? honored? It took me a couple of days and getting to know both David and Rob better to realize the wisdom of that statement. But by the end of the workshop we were able to host a version of Rob's book A First Course in Linear Algebra on a Runestone Server. We also realized that our goals were very well aligned and that we could accomplish more by working together than we could by continuing to work separately.  It took an entire global pandemic for Rob and I to really integrate the Runestone Components into PreTeXt . And it took me a Summer to cook up a conversion process that turned restructuredText into PreTeXt . But that explains why this instructor guide looks a bit different than the Runestone books you may be used to seeing. I converted the instructor guide to PreTeXt and have been working on adding it and making it more useful. What you see in this book is a little glimpse of the future. Whats more is that students really benefit from this partnership. Books in PreTeXt are far more accessible than anything we have done with restructuredText and they are far more mobile ready as well.  Building a system like Runestone is a lot of work, and I am amazed at what we have accomplished with very little funding. The future looks very exciting Runestone Academy has incorporated and is operating as a non-profit. We have applied for and are waiting approval of the formal 501(c)(3) tax status with the IRS. I am hopeful that I will be able to announce some significant support from an NSF program designed to help open source projects like Runestone and PreTeXt become sustainable long term. I think I did a pretty good job of outlining our vision in . We have an exciting and necessary mission and if you are inspired to help us out in any way we would welcome your efforts!  "
},
{
  "id": "registration_register-for-this-course-2",
  "level": "1",
  "url": "registration_register-for-this-course-2.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction",
  "body": " Introduction  There are two kinds of courses on Runestone Academy:  Courses that are open to anyone to view without logging in or for anyone to enroll in if they choose to create an account. We call these books base courses. These courses are very large and have no instructor to guide the students, eveyone just proceeds at their own pace.  Smaller courses at a a high school, college, or university, that are guided by an instructor like yourself also use these books. We often refer to these as custom courses   You can think of the base courses as a template for custom courses, something like classes and instances in object oriented programming.  Although the base course books are open to the public, to save your work, you will need to register for an account on Runestone Academy. When you first regigister you will have the privileges of a student. You do not become an instructor until your create your own course. Lets walk through the registration process now.  "
},
{
  "id": "registration_register-for-this-course-2-2",
  "level": "2",
  "url": "registration_register-for-this-course-2.html#registration_register-for-this-course-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base courses. custom courses "
},
{
  "id": "registration_register-for-this-course-2-3",
  "level": "2",
  "url": "registration_register-for-this-course-2.html#registration_register-for-this-course-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "student. instructor "
},
{
  "id": "registration_first-time-registration",
  "level": "1",
  "url": "registration_first-time-registration.html",
  "type": "Section",
  "number": "2.2",
  "title": "First-time Registration",
  "body": " First-time Registration  When you register you must select a course. The right side of the page contains a list of names of the base courses (registration codes) for the most common courses. If you do not see the one you want on this list you can look in the library. We are working on a way to harmonize the various places to discover books and their names.   Register yourself       Open the following url in another tab: https:\/\/runestone.academy\/runestone\/default\/user\/register . The form is pretty self-explanatory, except for the Course Name field. There is information about that on the right side. You can specify one of the strings that identify one of the public courses that the server knows about: thinkcspy, pythonds, etc. Or you can enter the string for a course that someone else has created and provided you with.    Click Register    If you are on the login page instead at https:\/\/runestone.academy\/runestone\/default\/user\/login then click the Register button which is near the bottom of the page to get to the registration page.     "
},
{
  "id": "reg_yourself",
  "level": "2",
  "url": "registration_first-time-registration.html#reg_yourself",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " Register yourself   "
},
{
  "id": "registration_add-an-additional-course",
  "level": "1",
  "url": "registration_add-an-additional-course.html",
  "type": "Section",
  "number": "2.3",
  "title": "Add an Additional Course",
  "body": " Add an Additional Course  When you are logged in and looking at an eBook, click on the person icon in the upper right and select Change Course . That will take you to the course selection page.   Change Courses    Click on the Enroll in a Course button, which takes you to a page that looks a lot like the registration page. Don't change any of the fields except Course Name . There, you can enter any string that identifies another course.  As an instructor you may find that the list of courses can get quite long. You can use the Remove Course button to unenroll yourself from that course. Please note it does NOT delete the course it only takes you out of it. You can always re-enroll at a later time.  "
},
{
  "id": "choose_course_page",
  "level": "2",
  "url": "registration_add-an-additional-course.html#choose_course_page",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": " Change Courses   "
},
{
  "id": "custom-courses_what-is-a-custom-course",
  "level": "1",
  "url": "custom-courses_what-is-a-custom-course.html",
  "type": "Section",
  "number": "3.1",
  "title": "What is a course?",
  "body": " What is a course?  As an instructor, you can make a course with a unique name on the Runestone server from an existing Runestone book. Your students will register for your course using the unique name, and then their activities will be securely saved for you to use. You will then be able to:     View summaries of student activity for particular questions or pages    Assemble custom assignments and lab sessions from:     existing activities that are built into the book    new activities that you author yourself using a markup language (rst)        When you create a course you become the instructor for that course. We at Runestone Academy have no magical way of knowing who is and who isn't an instructor. Furthermore it would take time for us to try to validate everyone who claims to be an instructor. But keep in mind that:  As an instructor you only have access to the work of the students in the course you create.  We do not publish answer keys for instructors on Runestone. Note: those may be available to you through Google Groups or other media affiliated with the textbook, so check with the author of the book you are using.    If you have multiple sections of your course there are two ways of dealing with it. 1) You can create a single course for all of your sections (most often recommended), or 2) you can create a course for each section. If your choose option 2 covers how to copy assignments between your courses.  "
},
{
  "id": "custom-courses_how-to-create-a-custom-course",
  "level": "1",
  "url": "custom-courses_how-to-create-a-custom-course.html",
  "type": "Section",
  "number": "3.2",
  "title": "How to Create a course",
  "body": " How to Create a course      Log in to the runestone server at https:\/\/runestone.academy if you already have an account with Runestone Academy. If you don't have an account then you can create one at https:\/\/runestone.academy\/runestone\/default\/user\/register . When you register, it will ask to enter the name of an ebook. You can enter the name for any of the existing ebooks.  Figure 1: The login screen for Runestone Academy       Go to the Build a course Page at https:\/\/runestone.academy\/runestone\/designer\/index . Fill in a unique name for your course. You may want to include a semester and year as part of the unique name. Enter a description and the name of your institution. Scroll down and check the other options and then click Submit .  Figure 2: The Build a course Page     Of special note is the checkbox just above the submit button. This says that you would like to support Runestone at the rate of $10 \/ student from your department or school. This is totally VOLUNTARY! If you check the box you will get an invoice from us about a week after the starting date you entered for your course. If you can't pay or do not wish to pay simply do not check the box. It is fine either way, but we would love your support if you are able.   Support Runestone      Success!  Build Successful     The successful build page reminds you of some resources that you can use to get help. Please do not use email. Please check for and file problems on Github. Many problems are duplicates and have already have workarounds or explanations.    Your students can register for your course by using the unique name that you used when you created your course when they register at https:\/\/runestone.academy\/runestone\/default\/user\/register .. If they already have a login on Runestone Academy, they can simply add another course using the new course name by going to https:\/\/runestone.academy\/runestone\/default\/courses . and then clicking on Add Another Course .  Figure 4: The page that allows the user to add another course or switch courses        We will also cover how you can pre-register your students with a CSV file in another section.  "
},
{
  "id": "login_screen_fig",
  "level": "2",
  "url": "custom-courses_how-to-create-a-custom-course.html#login_screen_fig",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " Figure 1: The login screen for Runestone Academy   "
},
{
  "id": "custom_course_fig",
  "level": "2",
  "url": "custom-courses_how-to-create-a-custom-course.html#custom_course_fig",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " Figure 2: The Build a course Page   "
},
{
  "id": "support_runestone_fig",
  "level": "2",
  "url": "custom-courses_how-to-create-a-custom-course.html#support_runestone_fig",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " Support Runestone   "
},
{
  "id": "id5",
  "level": "2",
  "url": "custom-courses_how-to-create-a-custom-course.html#id5",
  "type": "Figure",
  "number": "3.2.4",
  "title": "",
  "body": " Build Successful   "
},
{
  "id": "id6",
  "level": "2",
  "url": "custom-courses_how-to-create-a-custom-course.html#id6",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": " Figure 4: The page that allows the user to add another course or switch courses   "
},
{
  "id": "registration_adding-students-to-your-course",
  "level": "1",
  "url": "registration_adding-students-to-your-course.html",
  "type": "Section",
  "number": "4.1",
  "title": "Managing Students in your Course",
  "body": " Managing Students in your Course    Student Self Registration  When you created the course, you chose a unique course name. Give your course name to students. They will register on the site and enter that string as their course name. If you've forgotten what your course name is, you can see it displayed on the Course selection page https:\/\/runestone.academy\/runestone\/default\/courses . You can access that page by clicking on the person icon at the top right of the window and then selecting Change Course .   Students will register for a course following the same procedures that were described . You just need to provide them with the text string for the course name.     Pre-register your students  You can also pre-register your students by creating a CSV file and uploading that file through the instructor interface. Pull down the 👤 menu and select Instructor Dashboard then open the Student Management area and click on Manage Students.   Instructor Dashboard: Manage Students    You will see a page like this:   Register your Students    You can create a csv file in your favorite spreadsheet program and then export it to a csv or you can simply edit a textfile, whatever works for you. But note that some versions of Excel add a lot of empty columns and rows that really confuse our importer! Please check the csv file in a text editor before you upload it to runestone. Also note that if the csv file has any problems, like a duplicate username, nothing will be changed on the runestone server. The format of the file MUST be as shown in the figure.  username,email,first_name,last_name,password,course user1,user@school.com,Jane,Smith,xxxx,foocourse  Notice – There are no spaces after the commas. Excel is horrible at exporting it will add extra blank fields and lines that look like ,,,,,,,, Once you export from excel its best to clean things up in your favorite text editor. Also if you are using Excel make sure to export it as a UTF-8 encoded file, otherwise excel adds unreadable characters at the beginning.  When the file is created you can choose it and upload it to Runestone. It will verify the fields and if there are no errors it will register the students. The most common error is that the username is a duplicate. Usernames are the primary way we identify students and they must be unique. With over 120,000 students in the database there are bound to be duplicates. This is not a bug, it is a sign of growth.  If you add students to your class later you need to create a new CSV file just for them (or have them register themselves). Adding students to the end of your previous spreadsheet will result in lots of error messages about duplicate usernames.    Removing Students  You may also have noticed the \"Remove Student(s)\" button in This allows you to remove a student from your course. Although it seems self explanatory the reason to bring this up is to explain what happens to the student account when you remove them. The account is not deleted but rather the student and their work is moved to the base course. This allows a student to have access to their work and to continue working independently if they wish. As an instructor you do not have the capability to delete a student account. But anyone can delete their account and all of the information saved for that account by using the 👤 menu choosing edit profile.    Resetting Passwords  There is no doubt about it, password management is a headache for everyone. Runestone handles hundreds of password reset requests each week. But that does not always work. Some schools (inexplicably) block email from Runestone. Other schools run software that simply mangles the URL's found in emails that look like they are password reset emails. This is understandable to some degree as Phishing scams are so common, and its important to protect the students. I've done everything I can do from my side to validate the runestone.academy email domain. But, other times students simply type in their email incorrectly.  You may be get around some of these problems by asking your school to allow mail from runestoneinteractive@gmail.com to go through. If your IT department is not cooperative then your students will have to come to you to have their password changed. You can reset the password for any of the students in your course. Just select the student from the list and click the reset password button. I cannot respond to emails asking me to reset passwords, I don't have the time to do that, and I do not have a reliable way to verify that those requests are legitimate. Yes many high schoolers think it is funny to try to trick me into resetting the password on one of their friends.  Instructors cannot change their own passwords through this mechanism. who among us hasn't walked away from the computer and left ourselves logged into Runestone? As an instructor, you will still have to use the normal email password reset mechanism. If your school blocks emails then I suggest you just get a free gmail address to use for this purpose.   "
},
{
  "id": "registration_adding-students-to-your-course-3-3",
  "level": "2",
  "url": "registration_adding-students-to-your-course.html#registration_adding-students-to-your-course-3-3",
  "type": "Note",
  "number": "4.1.1",
  "title": "",
  "body": " Students will register for a course following the same procedures that were described . You just need to provide them with the text string for the course name.  "
},
{
  "id": "registration_adding-students-to-your-course-4-3",
  "level": "2",
  "url": "registration_adding-students-to-your-course.html#registration_adding-students-to-your-course-4-3",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": " Instructor Dashboard: Manage Students   "
},
{
  "id": "reg_your_students_fig",
  "level": "2",
  "url": "registration_adding-students-to-your-course.html#reg_your_students_fig",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": " Register your Students   "
},
{
  "id": "registration_privacy-and-runestone",
  "level": "1",
  "url": "registration_privacy-and-runestone.html",
  "type": "Section",
  "number": "4.2",
  "title": "Privacy and Runestone",
  "body": " Privacy and Runestone   In this week's update I want to tell you about some new account management features I added to Runestone, and give you some idea about how you could set up your class if you don't want Runestone to capture any Personally Identifiable Information (PII) about your students.  Runestone collects a lot of data. I think it is all justified, and if you are an instructor you can gain some real insight into how your students are doing based on the data we collect and the reports we create for you. None of that requires any PII about your students. Yet we do collect some… what do we collect? and why?  Here is what we we ask for when a student registers:     username - this can be anything and it is easy for this to NOT contain PII    email - This is the only reliable way to do password recovery.    First Name and Last Name - this has always been just for the instructors so that when they are grading assignments or looking at analytic reports, they know who they are looking at.    Password - encrypted and stored securely.    Name of the course. The instructor has full control over this call it whatever you want.       Setting up a class with no PII  We will walk through two strategies for managing a Runestone Course that doesn't store any PII about a student. The first strategy has the students register themselves following the instructions I'll tell you about. The second strategy puts you in complete control and allows you to create all of the usernames for your students!  The way to use Runestone without PII is to ensure that your students choose a username that they remember but has nothing to do with their real identity. They can also put in fake first names and last names.  The real trick is how to manage password recovery Thats where this cool email alias trick comes in. Most email systems (including gmail) support the username+alias convention. That is you can add a + and an additional alias to your email address. For example runestone+support@gmail.com or runestone+info@gmail.com both of those emails will end up in the runestone mailbox, but I can also see the alias. We can use this feature so that students don't have to enter their real email address, they enter yours plus their username as the alias. This means that you will end up fielding the password reset emails. If you are an email whiz you can set up some rules to forward these to the right student.  Experience has shown that having students register themselves and get all of those pieces correct is a losing battle. So why not put you in charge of registering them? Get out your favorite spreadsheet app and prepare a file with your students information.  You can upload a CSV file with the following format: One row for each student  username,email,first_name,last_name,password,course  In order to protect your students privacy you can create a spreadsheet like the following:  hogwarts-1,dumbledore+hogwarts1@gmail.com,F1,L1,owls4all,potions_fall19 hogwarts-2,dumbledore+hogwarts1@gmail.com,F2,L2,owls4all,potions_fall19 hogwarts-3,dumbledore+hogwarts1@gmail.com,F2,L2,owls4all,potions_fall19   Note  It is important that you check your CSV file and make sure there are NO SPACES before or after the commas!   From the Manage Students tab on the Instructor's Page, you can now upload this CSV file using the interface.     Once you have uploaded the CSV, you can add some columns to the spreadsheet that contain the real student information to help you remember. You will probably learn quickly who your made up names correspond to, and can probably think of something anonymous that will help you remember who F1 L1 really is. On the first day of class you may want to hand out paper for the students with their username, and walk them through changing the password, or maybe you want to assign each student a unique password when you are making up the spreadsheet. I just would not recommend a scenario where all the students have the same password.  Of course all of this is optional. You can also create a csv file with usernames of your choice and include the real email addresses and real first \/ last names of your students, or you can have them register themselves as students have been doing on Runestone since 2012.    What other Data Does Runestone Collect  Here is a graph of all of the events that runestone has collected in the last 4 weeks.     As you can see that is a lot of activecode and a lot of pages loaded. Also over 1 million multiple choice questions answered! I would love to see more clickable area questions and more fill in the blanks. Some of our preliminary research shows that those kinds of questions are much more effective at getting students to review the content in order to get a correct answer, rather than simply clicking on different answers until they guess correctly for multiple choice. All of these events are captured and tied to a username. So the more anonymous your username the better as far as I'm concerned.  What I'm really interested in is figuring out how to apply machine learning algorithms to help identify students that may struggle, to help weed out bad questions, to help us write better questions, to help us order the textbook in different ways, to adapt to each student to help them achieve their maximum potential.  Runestone also collects the source code each time your student changes and runs the code in an activecode activity. This is to provide a timeline for the student as well as for yourself.     Make sure you explain the timeline to your students. Sometimes there is great fear in them about changing code that is working. Having this timeline present encourages them to experiment, knowing that they can always get back to a good working version.    For you the timeline can be an invaluable tool for talking through an assignment with a student. You can see their progress and if they make a wrong turn you can usually see that in the timeline and talk to them about why they decided to a particular direction.    The timeline is also available in the scratch activecode which some students like to use as a notebook for the course.      "
},
{
  "id": "registration_setting-up-a-class-with-no-pii-4",
  "level": "2",
  "url": "registration_privacy-and-runestone.html#registration_setting-up-a-class-with-no-pii-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "password recovery yours "
},
{
  "id": "registration_setting-up-a-class-with-no-pii-10",
  "level": "2",
  "url": "registration_privacy-and-runestone.html#registration_setting-up-a-class-with-no-pii-10",
  "type": "Note",
  "number": "4.2.1",
  "title": "Note.",
  "body": " Note  It is important that you check your CSV file and make sure there are NO SPACES before or after the commas!  "
},
{
  "id": "registration_setting-up-a-class-with-no-pii-12",
  "level": "2",
  "url": "registration_privacy-and-runestone.html#registration_setting-up-a-class-with-no-pii-12",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": "  "
},
{
  "id": "registration_what-other-data-does-runestone-collect-3",
  "level": "2",
  "url": "registration_privacy-and-runestone.html#registration_what-other-data-does-runestone-collect-3",
  "type": "Figure",
  "number": "4.2.3",
  "title": "",
  "body": "  "
},
{
  "id": "lti_integration",
  "level": "1",
  "url": "lti_integration.html",
  "type": "Section",
  "number": "4.3",
  "title": "Integrating with your LMS Using LTI 1.1",
  "body": " Integrating with your LMS Using LTI 1.1   Introduction   Runestone provides two methods of LTI integration. LTI 1.1 and LTI 1.3. LTI 1.3 is the newer standard and is more secure and more flexible. However, it requires setup by an administrator of your Learning Management System (LMS). LTI 1.1 can be set up by an individual instructor without LMS admin support. If you are using an LMS that your institution administers, we recommend you explore using LTI 1.3. If you are using something like Canvas Free-for-Teacher that does not provide administrator access, you will need to use LTI 1.1.  If you wish to use LTI 1.3, skip to the instructions in . If you are using LTI 1.1 then follow the instructions in this section.   Runestone provides a rudimentary LTI integration using LTI 1.1. So far we have made this work very successfully with Canvas, Moodle, and Brightspace D2L. Others may or may not work. I call this a community supported feature of Runestone because LTI is a huge pain to work with, and it is very difficult to get access to and test against whatever LMS your school has chosen. Community support is available on the #lti_community_support channel of the Runestone Discord Server .  When you use LTI your students do NOT and should not register on Runestone Academy , the LTI interface registers your student with Runestone the first time they access it from your LMS. In addition, Instructors need to use one of the LTI links to your book in order for grades to transfer.     Phase 1 (All LMS platforms)  Generate a shared\/secret key pair for use with Canvas:  Browse to the and log in, then select your course (you must be the Instructor).   Browse to the , then click on “LTI Integration” in the Admin tab.    Click on the Create LTI Key and Secret button. Click the Show Secret button. You will use these in the next phase. Note that there is also a Remove LTI Key and Secret if you can't get LTI working with your LMS or just decide you don't want to use it you should remove the keys. This will allow your students to access assignments from the regular assignments page.  Once the LTI Key and Secret have been set up, your course is in LTI mode, and the assignments will only be accessible from your LTI, so you must do Phase 2, below, or your students won't have access to any assignments.      Phase 2 (LMS-specific Steps)   Follow instructions for your LMS:           Canvas   Follow the to add an external app: :Name: Runestone :Consumer key: Enter this from Phase 1. :Shared Secret: Enter this from Phase 1. :Launch URL: ``https:\/\/runestone.academy\/runestone\/lti`` :Domain: Leave blank. :Privacy: Select Public; otherwise, Runestone won’t work. :Custom Fields: Depends on the installation type: - For a site-wide installation, or for installing the Runestone external app for use across multiple courses, leave this blank. - If installing for a single course, add ``custom_course_id=xxx``, where ``xxx`` is the Runestone ID of the course (visible in the upper lefthand corner of each page in your Runestone course). :Description: Interactive textbooks from Runestone Academy    Add an assignment in Canvas that uses the Runestone external tool:  At `Runestone Academy`_, create an assignment; be sure you’ve checked the “Visible to Students” box and saved that change.  Still on the assignments page, copy the LTI link.  In Canvas, add an assignment. For the submission type, select “External Tool.” For the External Tool URL, use the LTI link you just copied. You’ll have to manually enter the same due date\/time and a similar assignment name; these aren’t copied automatically. You must be sure the Load This Tool In A New Tab checkbox is checked.    Students can now click on this assignment and work it. **If they don’t click on the assignment, they won’t receive a grade.**  When the assignment is due, go to Runestone directly from your Canvas course by using an assignment link . Otherwise, grade reporting won’t work .  In the grading tab of the instructor interface, grade the assignment, then click the “Release Grades” button. Doing this will push all grades to Canvas. (If you need to regrade later, you can always click the “Hide Grades” button, and then do “Release Grades” again.)      Moodle    The following instructions are for Moodle, but should work for any LMS with LTI Support. Please note that certain items may have naming variations (ie. Moodle External Tool \/ Canvas External App).   In Moodle, create a new external tool called \"LTI Login Link\".  :Name: Login to Runestone :Tool URL: https:\/\/yourHost.blahblah.edu\/runestone\/lti :Consumer key: Enter the key you copied for `consumer` from Phase 1 :Shared secret: Enter the key you copied for `secret` from Phase 1 :Icon URL: https:\/\/yourHost.blahblah.edu\/runestone\/static\/images\/logo_small.png :Share Email: True :Share Name: True :Custom params: custom_course_id=xxx, where xxx is the Runestone ID of the course (visible in the upper lefthand corner of each page in your Runestone course).   Login to your Runestone instance with the tool just created, and create your class as well as your assignments.   In Moodle, create a new enrollment external app directly to your course and assignment. You will need to repeat this for each assignment. You will also need the database values for your course ID, and assignment ID. Get these from step 2.2. Please note that in order to receive roles and grades, \"Accept Grades\" must be checked in Moodle. In other LMS's this may be referenced by a \"Share IMS Names and Roles\" or similar.  Note: in order for students to have access to the assignment from moodle, the visible checkbox for the assignment on runestone must be checked.  :Name: Assignment 1 :Tool URL: https:\/\/runestone.colorado.edu\/runestone\/lti?assignment_id=&custom_course_id :Consumer key: Enter the key you copied for `consumer` from Phase 1 :Shared secret: Enter the key you copied for `secret` from Phase 1 :Icon URL: https:\/\/yourHost.blahblah.edu\/runestone\/static\/images\/logo_small.png :Share Email: True :Share Name: True :Custom params: :Accept Grades: True   Copy the tool as many times as you need within your Moodle Course, updating the Name and Tool URL each time.  Students can now click on these external tool assignments to be enrolled\/logged directly into your Runestone course and assignment. The grades should appear in Moodle once they are released in Runestone through the Instructor interface using the “Release Grades” button. (If you need to regrade later, you can always click the “Hide Grades” button, and then do “Release Grades” again.)  The course instructor must also be an LTI sourced user, so use the \"LTI Login Link\" URL . This can be hidden for users.      Brightspace D2L  Depending on how D2L is set up, you may need to be an administrator in order to set up your links for class. However, in some setups, instructors have permission to make their own LTI links.    To check, while in your class on D2L, you can go to Course Admin - External Learning Tools , then click the Manage Tool Links (Legacy) . From there, click the New Link button.    If that is successful, then here are the settings. (Otherwise, talk to your LMS Admin to configure this for you)     Title  Enter either the Textbook Name or the assignment name on Runestone  URL  copy this from the LTI configuration panel for the textbook login https:\/\/runestone.academy\/runestone\/lti or from the individual assignment in the Assignments tab of the Instructor's Page.  Description  Leave blank or add a description.  Visibility  Allow users to view the link should be checked.  Key\/Secret   Signature  check Sign messages with key\/secret with  select Link key\/secret then fill in  Key  Enter this from Phase 1.  Secret  Enter this from Phase 1.    Click the Save button before adding custom parameters.   Custom Parameters    click the Add custom parameters link.  Name   custom_course_id  Value  the Runestone ID of the course (visible in the upper lefthand corner of each page in your Runestone course).  Security Settings  Select use link security settings  Make sure at least the following settings are checked:   Send tool consumer information to tool provider  Send context information to tool provider  Send LTI user ID and LTI role list to tool provider  Send user name to tool provider  Send user email to tool provider  Send link title to tool provider  Send link description to tool provider    Once everything is selected, click Save and Close   Now, from anywhere in your course, you can select Existing Activities - External Learning Tools and then the link you created. After adding this link, make sure that you make sure the link is configured to Open as External Resource . That way the right information will be passed to the textbook.  Students will be able to click on this link when you make it available to them as long a the Visible to Students checkbox is checked on the assignment in runestone.  When the assignment is due, go to Runestone directly from your D2L course by using an assignment link . Otherwise, grade reporting won't work .  In the grading tab of the instructor interface click the Release Grades button. Doing this will push all grades to D2L. (If you need to regrade later, you can always click the “Hide Grades” button, and then do “Release Grades” again.)     "
},
{
  "id": "lti_integration-2-2",
  "level": "2",
  "url": "lti_integration.html#lti_integration-2-2",
  "type": "Note",
  "number": "4.3.1",
  "title": "",
  "body": " Runestone provides two methods of LTI integration. LTI 1.1 and LTI 1.3. LTI 1.3 is the newer standard and is more secure and more flexible. However, it requires setup by an administrator of your Learning Management System (LMS). LTI 1.1 can be set up by an individual instructor without LMS admin support. If you are using an LMS that your institution administers, we recommend you explore using LTI 1.3. If you are using something like Canvas Free-for-Teacher that does not provide administrator access, you will need to use LTI 1.1.  If you wish to use LTI 1.3, skip to the instructions in . If you are using LTI 1.1 then follow the instructions in this section.  "
},
{
  "id": "lti_integration-3-2",
  "level": "2",
  "url": "lti_integration.html#lti_integration-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Create LTI Key and Secret Show Secret Remove LTI Key and Secret "
},
{
  "id": "lms-d2l-setup-3-1-1",
  "level": "2",
  "url": "lti_integration.html#lms-d2l-setup-3-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Course Admin External Learning Tools Manage Tool Links (Legacy) New Link "
},
{
  "id": "lms-d2l-setup-3-2-2-2-2",
  "level": "2",
  "url": "lti_integration.html#lms-d2l-setup-3-2-2-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "https:\/\/runestone.academy\/runestone\/lti "
},
{
  "id": "lms-d2l-setup-3-2-2-6-2",
  "level": "2",
  "url": "lti_integration.html#lms-d2l-setup-3-2-2-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sign messages with key\/secret with "
},
{
  "id": "lms-d2l-setup-3-2-2-6-3",
  "level": "2",
  "url": "lti_integration.html#lms-d2l-setup-3-2-2-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Link key\/secret "
},
{
  "id": "lms-d2l-setup-3-3-1",
  "level": "2",
  "url": "lti_integration.html#lms-d2l-setup-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Save "
},
{
  "id": "lms-d2l-setup-3-3-2-3-2",
  "level": "2",
  "url": "lti_integration.html#lms-d2l-setup-3-3-2-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "custom_course_id "
},
{
  "id": "lms-d2l-setup-3-3-2-5-2",
  "level": "2",
  "url": "lti_integration.html#lms-d2l-setup-3-3-2-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "use link security settings "
},
{
  "id": "lti1p3_integration",
  "level": "1",
  "url": "lti1p3_integration.html",
  "type": "Section",
  "number": "4.4",
  "title": "Integrating with your LMS Using LTI 1.3",
  "body": " Integrating with your LMS Using LTI 1.3   Introduction   Runestone provides two methods of LTI integration. LTI 1.1 and LTI 1.3. LTI 1.3 is the newer standard and is more secure and more flexible. However, it requires setup by an administrator of your Learning Management System (LMS). LTI 1.1 can be set up by an individual instructor without LMS admin support.  If you are using LTI 1.3 you should follow the instructions in this section. If you are using LTI 1.1 then follow the instructions in .   Runestone's LTI 1.3 integration has been tested against Canvas, Moodle, and D2L. Others LMS systems that support LTI 1.3 may or may not work. We welcome reports of successful use with other LMS systems and code pull requests to add any necessary support for other LMS systems. Community driven support is available on the #lti_community_support channel of the Runestone Discord Server .    LTI1.3 Integration Basic Information  LTI1.3 integration can include syncing user's names and emails from the LMS platform or be done anonymously. The Runestone Privacy Policy specifies how any synchronized data is used and protected.  Integration must be setup one time by someone with administrator authority on your LMS. Once setup, Runestone can be added to a course by any instructor. (Depending on the LMS, instructors may need a piece of information from the LMS admin to do so.)  When using LTI integration between Runestone and an LMS, students should NOT sign up for an account on Runestone. They should only access the Runestone book through the LMS, which will automatically create an account for them. Instructors will need to create an account with Runestone to set up their course and to link to the LMS.    LTI1.3 Setup - LMS Administrator   The following must be completed one time by an LMS administrator. Once complete, instructors can link Runestone textbooks to their courses without further assistance from the LMS administrator. If you have run into issues with the setup or have questions, please open an issue on the Runestone github page . Specify LTI 1.3 Integration as the issue type. Make sure to include your contact information, the LMS platform you are using, the domain your LMS runs on, and any other relevant information.  Runestone supports the LTI Dynamic Registration protocol. (We do not support manual registration of LTI 1.3 tools via manual key exchange.) This means you will just need to enter one URL into your LMS and the two systems will negotiate the rest of the details:   Runestone LTI 1.3 Registration URL  https:\/\/runestone.academy\/admin\/lti1p3\/register   For Runestone to properly function, you will likely need to ensure specific settings in your LMS system. See the subsections below for details on particular platforms. Please note that user interfaces on LMS platforms change over time and the shown screenshots and described options may not perfectly match what you see.     It is likely Runestone will work with other LMS platforms that support LTI 1.3, but we have not tested it with them. Refer to the notes below for platforms that have been tested for ideas on what kind of settings you might need to enable for Runestone to work properly.    LTI 1.3 Admin Setup - Canvas  Global settings for LTI features are available in Site Admin > Settings > Feature Options . Runestone relies on being able to create Deep Linking Line Items. To ensure proper functioning, check for the following settings. If they are available (options available there will depend on Canvas version) ensure that they are enabled:  Deep Linking for Module Index Menu  Deep Linking Line Items     To register Runestone as an available app, go to Site Admin > Apps > Manage and select Install a New App . Select 1.3 as the LTI version, Dynamic Registration as the method, and use the the URL listed above ( ). After pressing OK, you should get a confirmation message with a close button. Press that to continue to configure the App.  All the settings on the Permissions screen should be left on. (If you wish to configure Runestone to not share Personally Identifying Information about users, you will get a chance to do so in the next step.)  On the Data Sharing screen, leave the User Data Shared With This App setting as the default ( All user data ) to share user emails and names with Runestone. If you wish to disable doing so, you can change this to None .   From this point on, you should leave all settings as default - they just control what Runestone is titled within the LMS and what links are available to make use of it.  For an instructor to add Runestone to their course, they will need to know the ClientID that was assigned to Runestone. This can be found at Site Admin > Apps > Manage . Click the three dots next to the Runestone app and select Copy Client ID .     LTI 1.3 Admin Setup - Moodle  To register Runestone as an available app, go to Site administration > Plugins > External tool > Manage tools . Use the URL listed above ( ) as the Tool URL and press Add LTI Advantage . After pressing OK, you should get a confirmation message with a close button.  Next, activate the app by Clicking Activate on its card in the Tools list.   Finally, click on the gear icon on the Runestone card in the tools list to configure the app. Under Tool Settings sure to confirm these two settings:  Tool configuration usage is set to Show as preconfigured tool...  Default launch container is set to New Window (Runestone will display in embedded iframes but is much harder to read and navigate in that format.)  Then, under Privacy , you can choose to share user data with Runestone or not. If you wish to disable sharing user data, you can change Share launcher's name with tool and Share launcher's email with tool  Never . Make sure to leave Accept grades from the tool set to the default or to Always .     LTI 1.3 Admin Setup - D2L  To add a new LTI 1.3 tool go to Admin Tools > Manage Extensibility . Then select the LTI Advantage tab and click on Register Tool .   Once Runestone is registered, under Manage Extensibility ensure that the settings look something like the following. In particular, make sure that Send Institution Role is enabled.   The deployment of Runestone should include the settings below. In particular, make sure that the following settings are enabled:  Org Unit Information under security settings  Open as External Resource , Grades created by LTI will be included in Final Grade , and Auto Create Grade Items under configuration settings  For an anonymous deployment, you can disable the name and email fields.   Finally, configure a Deep Linking Quicklink type Link for the Runestone deployment. Make sure the URL points to https:\/\/runestone.academy\/deep_linking .      LTI1.3 Setup - Instructor    To use LTI 1.3 integration with a course, the domain of your LMS must be approved by a Runestone administrator. If your institution required Runestone to complete any paperwork as part of the setup of Runestone as an LTI 1.3 tool, this should already be complete. If your institution did not contact Runestone during setup, you will need to make a request for approval. You can do so by making a new issue on the Runestone github page . Select Request for LTI 1.3 Approval as the issue type and make sure to specify your contact information, and the domain your LMS runs on.   First make sure that you have a Runestone account. If you don't have one, you can create one at Runestone Academy . Create a Runestone course to link to your LMS course. You may also wish to set up assignments in Runestone at this point, although you can always link new ones later. Before you try to link your LMS to a course and\/or assignments, you should make sure you are logged into Runestone and currently viewing the course you want to link to.  Depending on how your LMS reports your identity to Runestone, when you access Runestone from the LMS by clicking a link to your RS course or book, you may or may not be logged into Runestone as the same user as the account you created. (If your LMS reports your email, and you set up your RS account with the same email, then you should be logged in as the same user.) If you end up with a different identity in Runestone, you will likely want to add that user as an instructor. You can do this by adding the user as a TA . See for more information.  Each RS course can be linked to only one LMS course. This means that if you have multiple courses in your LMS for multiple sections or some other reason, you will need to create different RS courses for each LMS course. You can link multiple RS courses to the same LMS course (if you are using multiple books in one course.) If you need to unlink Runestone from an LMS, you can use the Remote LTI 1.3 Association button from the Admin > LTI Integration screen. Doing so will NOT remove any assignments or grades from the LMS, but it will prevent new grades from being sent to the LMS. You can then relink the course with the same LMS course or a new one.  There are some settings available in each Runestone course that affect LTI integration:  Under Admin > Course Settings , Show Points in Gradebook will affect how scores are reported to the LMS. If you want assignments reported to the LMS as points (3 \/ 4) instead of percent (75%), make sure this is checked. Note that settings in your LMS grade book may allow you to weight scores or change their display in other ways that override the way Runestone reports them to the LMS.  Under Admin > LTI Integration , checking Ignore LTI1.3 Date Changes will prevent Runestone from updating due dates on assignments.  Under Admin > LTI Integration , checking Do not auto update LTI grades will prevent Runestone from trying to automatically send grade updates as a user completes activities. This may be desirable if your assignments contain lots of items that need to be hand graded and you do not want users to see misleading low grades for assignments that have not been fully scored yet.    Find the subsection below for details on how to add Runestone to your course:         LTI 1.3 Instructor Setup - Canvas  You will need the Client ID of the Runestone installation on your LMS. Ask your LMS administrator for this piece of information. Refer them to for information on how to find this.  In your Canvas course, go to Settings > Apps and look for View App Configurations and click on it:   Then click on the + App button. For the Configuration Type , choose Client ID and then type the Client ID given to you by the LMS admin.   You should now see Runestone listed under the External apps    LTI 1.3 Instructor Setup - Moodle  If your LMS administrator has set up Runestone, you should see it displayed under More > LTI External Tools in your course settings. If you do not see it, ask your LMS admin to confirm that Runestone was set up to display as a preconfigured tool. You just need to toggle the Show in activity chooser to the on state.     LTI 1.3 Instructor Setup - D2L  Once your LMS administrator has set up Runestone LTI 1.3 support, you'll need to make sure that your course has access to it. There are 2 places that you might see a way to create links. The first is in the content area under Existing Activities > Runestone Links . The other is in the html page editor under the Insert Stuff icon. There would be a Runestone Insert Stuff item. Either of those will bring you to the Content Linking page described below.   If you don't see either of those links. Please, contact your LMS administrator and ask them to add the links for your course.     LTI1.3 Instructional Use   Content Linking  There are two kinds of links that can be generated from Runestone:  Book Page Links These are links to a particular page in the book. When a user uses one of these links, they will automatically be logged into Runestone. If you wish to provide a generic Log in to book link, you can use one of these that points at the book entry page (index.html). Or you can generate links to any page in the book.  Assignment Links These are links to a particular assignment in the RS course. When you want a LMS assignment that is linked to a RS assignment, you must use this kind of link.  User activity is tracked and scores updated regardless of which form of link is used to access the Runestone content. The only difference other than where they link to is that Book Page Links do not create an entry in the LMS grade book.  Begin by setting up assignments you wish to link to in Runestone. Do not make LMS assignments they will be created for you when you link to the Runestone assignments. (See for coverage of making Runestone assignments.) For students to access a Runestone assignment (after clicking a link in the LMS), the RS assignment must be marked Visible to Students . This property is not linked to the LMS. If you want assignments to be rolled out gradually in the course, you will have to manage the process separately in your LMS and in RS by changing the visibility of assignments in both places.  To add content to your course, look for the Runestone option in whatever allows you to add content items to a module\/course etc... in your LMS (see subsections below for LMS specific notes).  When you open the Runestone Content Linking panel, you will see two sections. First you will see a section to generate New Book Page Links . Click Add book link as many times as you like to generate dropdowns that can be used to select book pages. Use the dropdown to select the page(s) you want to make links to. Each will be generated as a separate content item in your LMS.  Below that is the Assignment Links area. Here a table is displayed with each Runestone assignment. For each one, the current LMS assignment (if any) that it is linked to is displayed. If the RS assignment is linked to an assignment in the current LMS course, that will be displayed and you will not be able to perform any action. To delete the assignment, do some from your LMS. For unlinked assignment, you will be given three options:  No action : do not link this assignment.  Create new LMS Activity : creates a new LMS assignment linked to this RS assignment.  Link to existing assignment : this should only be used after copying a course to relink orphaned items. See for details.    Finally, the Submit Form button will update Runestone to link the RS course to this LMS course (so it knows where to send grades) and will send a message to your LMS to generate the desired content links. Your LMS may or may not give you a chance to confirm the changes after this point.  If you ever need to, it is safe to delete an assignment in the LMS. No RS data will be deleted. If desired, you can then readd the assignment in the LMS and re-push any available grades.    Grade Reporting  Grades are normally sent by Runestone to the LMS at the following times:  A learner interacts with any graded element of the course that is part of an active assignment with released grades. (Grade updates should happen whether the user is viewing the problem in context or in the assignment view).  The instructor goes to the Grading tab of the admin interface, selects an assignment and presses the Push Grades to LTI button. This will send score updates for that assignment for all users in the course regardless of whether or not scores are released in Runestone.  The instructor goes to the Grading tab of the admin interface, selects an assignment and a particular Student , then enters a manual override grade and presses Push Grade to LMS . This will send the grade for that one user, regardless of whether or not scores are released in Runestone.  This means that if you want users to see score updates as they complete work, you should release the assignment scores in Runestone as soon as assignments are created.    Date Syncing  Your LMS is considered the authority on due dates. By default, Runestone assignments will update their due dates to match the LMS. To disable this behavior, you can check the Ignore LTI1.3 Date Changes box in the Admin > LTI Integration settings for your course. (Automatically syncing from Runestone to the LMS is not an option.)  Syncing behavior:  When you create a new assignment in your LMS by linking to a Runestone assignment, the due date in your LMS will be set to the due date in Runestone.  When linking an existing LMS assignment to a Runestone assignment, the due date in Runestone will be updated to match the due date in the LMS (unless you have checked the Ignore LTI1.3 Date Changes ).  When an assignment's due date is changed in the LMS, the due date in Runestone will be updated to match (unless you have checked the Ignore LTI1.3 Date Changes ). This will not happen until a user (instructor or student) uses the assignment link in the LMS to launch the assignment in Runestone. So, to force an update after modifying a due date, open the assignment.      Copying an LTI1.3 Course  To reuse course content that you linked in one course for a new course, you will generally want to do the following:  Use your LMS to copy the assignments from your old course to your new course. They will not be linked to Runestone.  In Runestone, make a new course. Copy all of the assignments from your old course to your new course. If you want to make sure the due dates are synced, do not check the Ignore LTI1.3 Date Changes box in the Admin > LTI Integration settings for your new course before finishing the linking process.  Do you want to have due dates in Runestone set to match those in your LMS for the copied assignments?   If Yes , make sure the Ignore LTI1.3 Date Changes is not checked. (Should be the default)  Then, set up due dates in the LMS before linking the assignments.   If No , check the Ignore LTI1.3 Date Changes box in the Admin > LTI Integration settings for your new course.     Assignments in Runestone and the LMS will be matched by name. If the assignment names do not match, change the name(s) on either platform so corresponding assignments are identically named.   Now you are ready to link the copies on the two platforms. Make sure you are still logged into the new course in Runestone as you complete the linking.  In your LMS, use the add content feature and select the Runestone tool. Assuming your assignments in the two platforms have matching names, the default actions suggested for each RS assignment will be to link to the existing LMS assignment with the same name.  Submit the form to complete the linking process. You may get a message like Tool returned no content as there were no new assignments sent from Runestone back to the LMS. But, the selected assignments should now be linked. Click one to verify.       Canvas Notes for LTI 1.3  The best way to create new content items (especially multiple at one time) is in the Modules area. Use the three dot menu and select Runestone.     Moodle Notes for LTI 1.3  To add content items, use one of the Add an activity or resource links in your course. Select Runestone from the available tools. You will be taken to a form adding one activity, but you can still add as many Runestone links as you like. Click the Select content button. When you finish selecting content, if you selected just one new RS item, you will return to the form to finish editing that activity and save it in your LMS. If you selected multiple items, you will return to a page that lists the items being added. If your actions do not add any new content (you are remapping copied assignments), you will be returned to a blank form but Runestone will have updated your selected items.     LTI 1.3 D2L Notes  To add Content items, use the Existing Activities > Runestone Links button in the Content area of your course.   To add a link to an HTML page, use the Insert Quicklink > Runestone Links button when your cursor is where you want the link to be on the page. Then select a single link to add.   To add a link to an HTML page, you could alternatively use the Insert Stuff > Runestone Insert Stuff button when your cursor is where you want the link to be on the page. Then select a single link to add.   Note: You will only be able to make one link at a time. If there are multiple assignments that you can link, then you'll need to either leave the other assignments as they were or set them as No Action before clicking Submit Form so that the system only tries to make one link. (Otherwise it will fail.)   Note: your browser needs to allow cross-site tracking if you want to add a link to a page. If you are creating a link from the Content tab, then you can have cross-site tracking off, but you'll navigate to another page to make the link, and you'll need to verify that the link was created by going back to D2L.    "
},
{
  "id": "lti1p3_integration-2-2",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3_integration-2-2",
  "type": "Note",
  "number": "4.4.1",
  "title": "",
  "body": " Runestone provides two methods of LTI integration. LTI 1.1 and LTI 1.3. LTI 1.3 is the newer standard and is more secure and more flexible. However, it requires setup by an administrator of your Learning Management System (LMS). LTI 1.1 can be set up by an individual instructor without LMS admin support.  If you are using LTI 1.3 you should follow the instructions in this section. If you are using LTI 1.1 then follow the instructions in .  "
},
{
  "id": "lti1p3-registration-url",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-registration-url",
  "type": "Note",
  "number": "4.4.2",
  "title": "Runestone LTI 1.3 Registration URL.",
  "body": " Runestone LTI 1.3 Registration URL  https:\/\/runestone.academy\/admin\/lti1p3\/register  "
},
{
  "id": "lti1p3-lmsadmin-canvas-2",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lmsadmin-canvas-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Site Admin > Settings > Feature Options "
},
{
  "id": "lti1p3-lmsadmin-canvas-4",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lmsadmin-canvas-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Site Admin > Apps > Manage Install a New App "
},
{
  "id": "lti1p3-lmsadmin-canvas-5",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lmsadmin-canvas-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Permissions "
},
{
  "id": "lti1p3-lmsadmin-canvas-6",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lmsadmin-canvas-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data Sharing User Data Shared With This App "
},
{
  "id": "lti1p3-lmsadmin-canvas-8",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lmsadmin-canvas-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Runestone "
},
{
  "id": "lti1p3-lmsadmin-canvas-9",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lmsadmin-canvas-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ClientID Site Admin > Apps > Manage Copy Client ID "
},
{
  "id": "lti1p3-lmsadmin-moodle-2",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lmsadmin-moodle-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Site administration > Plugins > External tool > Manage tools Tool URL "
},
{
  "id": "lti1p3-lmsadmin-moodle-3",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lmsadmin-moodle-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Activate "
},
{
  "id": "lti1p3-lmsadmin-moodle-5",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lmsadmin-moodle-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Tool Settings Tool configuration usage Default launch container Privacy Share launcher's name with tool Share launcher's email with tool Accept grades from the tool "
},
{
  "id": "lti1p3-lmsadmin-D2L-2",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lmsadmin-D2L-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Admin Tools > Manage Extensibility LTI Advantage Register Tool "
},
{
  "id": "lti1p3-lmsadmin-D2L-4",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lmsadmin-D2L-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Manage Extensibility Send Institution Role "
},
{
  "id": "lti1p3-lmsadmin-D2L-6",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lmsadmin-D2L-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Org Unit Information Open as External Resource Grades created by LTI will be included in Final Grade Auto Create Grade Items "
},
{
  "id": "lti1p3-lmsadmin-D2L-8",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lmsadmin-D2L-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Deep Linking Quicklink Link URL "
},
{
  "id": "lti1p3-instructor-setup-2-1",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-setup-2-1",
  "type": "Warning",
  "number": "4.4.3",
  "title": "",
  "body": " To use LTI 1.3 integration with a course, the domain of your LMS must be approved by a Runestone administrator. If your institution required Runestone to complete any paperwork as part of the setup of Runestone as an LTI 1.3 tool, this should already be complete. If your institution did not contact Runestone during setup, you will need to make a request for approval. You can do so by making a new issue on the Runestone github page . Select Request for LTI 1.3 Approval as the issue type and make sure to specify your contact information, and the domain your LMS runs on.  "
},
{
  "id": "lti1p3-instructor-setup-2-4",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-setup-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Remote LTI 1.3 Association Admin > LTI Integration "
},
{
  "id": "lti1p3-instructor-setup-2-5",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-setup-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Admin > Course Settings Show Points in Gradebook Admin > LTI Integration Ignore LTI1.3 Date Changes Admin > LTI Integration Do not auto update LTI grades "
},
{
  "id": "lti1p3-lms-instructor-setup-canvas-2",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lms-instructor-setup-canvas-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Client ID "
},
{
  "id": "lti1p3-lms-instructor-setup-canvas-3",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lms-instructor-setup-canvas-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Settings > Apps View App Configurations "
},
{
  "id": "lti1p3-lms-instructor-setup-canvas-5",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lms-instructor-setup-canvas-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Configuration Type Client ID "
},
{
  "id": "lti1p3-lms-instructor-setup-moodle-2",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lms-instructor-setup-moodle-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "More > LTI External Tools Show in activity chooser "
},
{
  "id": "lti1p3-lms-instructor-setup-D2L-2",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-lms-instructor-setup-D2L-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Existing Activities > Runestone Links Insert Stuff Runestone Insert Stuff "
},
{
  "id": "lti1p3-instructor-use-2-2",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Book Page Links Assignment Links Book Page Links "
},
{
  "id": "lti1p3-instructor-use-2-3",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Visible to Students "
},
{
  "id": "lti1p3-instructor-use-2-4",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Runestone "
},
{
  "id": "lti1p3-instructor-use-2-5",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Runestone Content Linking New Book Page Links Add book link "
},
{
  "id": "lti1p3-instructor-use-2-6",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Assignment Links No action Create new LMS Activity Link to existing assignment "
},
{
  "id": "lti1p3-instructor-use-2-7",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Submit Form "
},
{
  "id": "lti1p3-instructor-use-3-2",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Grading assignment Push Grades to LTI Grading assignment Student Push Grade to LMS "
},
{
  "id": "lti1p3-instructor-use-4-2",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ignore LTI1.3 Date Changes Admin > LTI Integration "
},
{
  "id": "lti1p3-instructor-use-4-3",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ignore LTI1.3 Date Changes Ignore LTI1.3 Date Changes "
},
{
  "id": "lti1p3_copy-2",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3_copy-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ignore LTI1.3 Date Changes Admin > LTI Integration Ignore LTI1.3 Date Changes Ignore LTI1.3 Date Changes Admin > LTI Integration "
},
{
  "id": "lti1p3-instructor-use-6-2",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Modules "
},
{
  "id": "lti1p3-instructor-use-7-2",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Add an activity or resource Runestone Select content "
},
{
  "id": "lti1p3-instructor-use-8-2",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-8-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Content Existing Activities > Runestone Links Content "
},
{
  "id": "lti1p3-instructor-use-8-4",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-8-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Insert Quicklink > Runestone Links "
},
{
  "id": "lti1p3-instructor-use-8-6",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-8-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Insert Stuff > Runestone Insert Stuff "
},
{
  "id": "lti1p3-instructor-use-8-8",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-8-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "No Action Submit Form "
},
{
  "id": "lti1p3-instructor-use-8-10",
  "level": "2",
  "url": "lti1p3_integration.html#lti1p3-instructor-use-8-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Content "
},
{
  "id": "add_instructor",
  "level": "1",
  "url": "add_instructor.html",
  "type": "Section",
  "number": "4.5",
  "title": "Add and Instructor or TA",
  "body": " Add and Instructor or TA  Runestone supports multiple instructors or TAs for a course. We do not make any real distinction between a TA and an instructor so keep in mind they they both have all of the same privileges that you do. Adding a another instructor is quite easy. The process is as follows.  Make sure that your co-instructor has registered for your course as a student.  Go to the instructor page and select the Add TA tab as shown below    Select the co-instructor or TA from the list of students on the right then click the + button below the list. You should see the name appear in the list of instructors on the left.   To \"demote\" a co-instructor or TA back to a student just select them in the list of instructors on the left and click the - button below the box.   "
},
{
  "id": "course_settings",
  "level": "1",
  "url": "course_settings.html",
  "type": "Section",
  "number": "4.6",
  "title": "Course Settings",
  "body": " Course Settings  There are some settings that you can control for your course that effect how the interactive components work. You can modify these on the course settings tab of the instructor interface.      Term Start Date  You can change your course start date. This is important if you copy assignments from a past term. Runestone will try to make the assignment due the same number of days from the start of the term. We also do analysis of student performance based on the week of the course, so it helps our analysis if this date is accurate.   Enable ActiveCode Downloads  If this box is checked then each activecode will have a download button that will allow your students to download a text file with the appropriate extension containing the code in the editor.   Allow Pairs  This enables a simple pair programming feature that allows a student to type in the username of a partner. When the student clicks the Save and Run button the code will be saved for both students with a comment added that indicates they were working with a partner and who that partner was.   Enable Compare Me Button  Questions such as multiple choice may let students see how they did compared to other students in the class. This button pops up a dialog that shows the percent of students that answered a question for each option. For a fill in the blank question it shows the top 10 answers.    "
},
{
  "id": "instructor-interface_the-instructor-interface",
  "level": "1",
  "url": "instructor-interface_the-instructor-interface.html",
  "type": "Section",
  "number": "5.1",
  "title": "The Instructor Dashboard",
  "body": " The Instructor Dashboard   The Runestone Instructor Dashboard, updated in 2025, provides a variety of tools for instructors to monitor student progress, create assignments, create new exercises, and analyze performa.  One of the primary goals of the Runestone Instructor Dashboard is to help you understand where your students are at, and to help you to prepare and make the best use of classtime. We set out to create an interface where you could see at a glance which concepts your students clearly got and which concepts they were struggling with so that you can spend your valuable class time on the topics that were confusing rather than boring them by covering material they clearly understand. To really be effective with this strategy you should use reading assignments as described in .  As an instructor, you can access a variety of instructor features. To get to the Instructor Dashboard follow these steps:     Make sure you are logged in to a course for which you are an instructor. If necessary, click on the person icon at top right and select Change Course to get to a course that you are instructor for, or logout and login with a different account.    Click on the person icon on the top right of the window and select Instructor Dashboard   Figure 1: How to get to the instructor's page      You will see the Instructor Dashboard as shown below.     Figure 2: The Instructor's Page       "
},
{
  "id": "nav_to_ii_fig",
  "level": "2",
  "url": "instructor-interface_the-instructor-interface.html#nav_to_ii_fig",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": " Figure 1: How to get to the instructor's page   "
},
{
  "id": "main_ii_fig",
  "level": "2",
  "url": "instructor-interface_the-instructor-interface.html#main_ii_fig",
  "type": "Figure",
  "number": "5.1.2",
  "title": "",
  "body": " Figure 2: The Instructor's Page   "
},
{
  "id": "instructor-interface_view-student-activity",
  "level": "1",
  "url": "instructor-interface_view-student-activity.html",
  "type": "Section",
  "number": "5.2",
  "title": "View Student Activity",
  "body": " View Student Activity   Introduction  In the new Instructor Dashboard, you can view student activity reports such as Chapter Activity and Exercise Metrics in the Course Analytics menu. You can also download the course logs and csv files.   Instructor Dashboard: Course Analytics    The following student activities are logged:     Loading a book page    Answering a multiple choice question    Answering a mixed-up code (Parsons) problem    Running code in an ActiveCode window    Editing code in an ActiveCode window    Playing a video     The following video provides an overview of the various student activity reports (in the older interface):     Students Online  Under Student Management, you can add and remove students from your class, reset their passwords, manage accommodations, and view students online and what page they are working on in real time.   Instructor Dashboard: Students Online      Chapter Activity  One very easy to use report that allows you to quickly see how much work your students are doing on each page is the Chapter Activity report found under Course Analytics.   Instructor Dashboard: Chapter Activity    On the Chapter Activity (Student Progress) page, pull down the first menu to select a chapter and pull down the second menu to see different reports on the count of activities that students have completed and how many were correct, as well as their first and last interaction date\/times. These reports can be downloaded as CSV files and can be opened as spreadsheets. You can also filter by chapter or any other search criteria using the down arrow next to the column headers.   Chapter Activity Report    .  The numbers in each cell are clickable so you can drill down into a particular page for a particular student to see what they have done and the number of interactions with each element.     You can even click the view button to see a preview of the activity. Clicking on the Question link will bring you the summary page for that activity where you can see an aggregate of how all students performed on that question. We'll see more about that report shortly.    Student Progress: Exercise Metrics  The instructor interface lets you see summaries of some of these activities that may be useful to you. To get started, from the instructor Dashboard, click on Course Analytics and then Exercise Metrics.  If you have assigned students to read a particular chapter prior to (or after) class, you can see at a glance what percentage of them have looked at each of the pages in a chapter. In the upper right hand corner, you can select a chapter. Then look at the left side.   Figure 1: Page to view student progress    You can see how students did on the multiple choice problems in the chapter. Some instructors have found it useful to focus in class on those questions where many students got the question wrong initially. Currently, the interface sorts the questions in order of the percentage of students who got them right the first time, so you may want to scroll down to find the ones they had trouble with.   Figure 2: Viewing multiple choice results     Figure 3: Viewing multiple choice results     Showing aggregate results for a question    This page is further drilldown on an individual question. You can see a histogram of the number of attempts made on the question across the class, you can see the frequency with which each option was selected, and you can see the first four responses of each student. You can also see a preview of the question.   "
},
{
  "id": "activity_intro-3",
  "level": "2",
  "url": "instructor-interface_view-student-activity.html#activity_intro-3",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": " Instructor Dashboard: Course Analytics   "
},
{
  "id": "instructor-interface_students-online-3",
  "level": "2",
  "url": "instructor-interface_view-student-activity.html#instructor-interface_students-online-3",
  "type": "Figure",
  "number": "5.2.2",
  "title": "",
  "body": " Instructor Dashboard: Students Online   "
},
{
  "id": "instructor-interface_chapter-progress-3",
  "level": "2",
  "url": "instructor-interface_view-student-activity.html#instructor-interface_chapter-progress-3",
  "type": "Figure",
  "number": "5.2.3",
  "title": "",
  "body": " Instructor Dashboard: Chapter Activity   "
},
{
  "id": "instructor-interface_chapter-progress-5",
  "level": "2",
  "url": "instructor-interface_view-student-activity.html#instructor-interface_chapter-progress-5",
  "type": "Figure",
  "number": "5.2.4",
  "title": "",
  "body": " Chapter Activity Report   "
},
{
  "id": "instructor-interface_chapter-progress-8",
  "level": "2",
  "url": "instructor-interface_view-student-activity.html#instructor-interface_chapter-progress-8",
  "type": "Figure",
  "number": "5.2.5",
  "title": "",
  "body": "  "
},
{
  "id": "student_prog_fig",
  "level": "2",
  "url": "instructor-interface_view-student-activity.html#student_prog_fig",
  "type": "Figure",
  "number": "5.2.6",
  "title": "",
  "body": " Figure 1: Page to view student progress   "
},
{
  "id": "view_mc_fig",
  "level": "2",
  "url": "instructor-interface_view-student-activity.html#view_mc_fig",
  "type": "Figure",
  "number": "5.2.7",
  "title": "",
  "body": " Figure 2: Viewing multiple choice results   "
},
{
  "id": "view_mc_restuls_fig",
  "level": "2",
  "url": "instructor-interface_view-student-activity.html#view_mc_restuls_fig",
  "type": "Figure",
  "number": "5.2.8",
  "title": "",
  "body": " Figure 3: Viewing multiple choice results   "
},
{
  "id": "agg_results_fig",
  "level": "2",
  "url": "instructor-interface_view-student-activity.html#agg_results_fig",
  "type": "Figure",
  "number": "5.2.9",
  "title": "",
  "body": " Showing aggregate results for a question   "
},
{
  "id": "instructor-interface_assignments",
  "level": "1",
  "url": "instructor-interface_assignments.html",
  "type": "Section",
  "number": "6.1",
  "title": "Understanding Assignments",
  "body": " Understanding Assignments  Runestone supports two different kinds of assignments. Reading Assignments and Problem Sets . Understanding the difference between these two kinds of assignments is very important so lets discuss each before moving on to creating assignments.   Reading Assignments  In Runestone, a reading assignment is by design a formative exercise, low stakes activities to encourage your students to prepare and help them learn. They are not meant to evaluate their progress. As such points are based on the students interaction with the textbook regardless of correctness. Points are assigned based on the number of interactive activities on each page. One activity is simply opening the page. Other activities are based on answering questions or running programs or trying out visualizations that are in on each page. The grading is set up to be all or nothing for each page. If a student interacts with roughly 80% of the activities on the page they will get full credit. If they do not then they get zero points. You can change that threshold to be whatever you want when you are setting up the assignment. It is worth repeating that they get credit for interacting with each thing not for getting it right.  When you create a reading assignment it will appear on the Assignments page, and each page of the reading assignment will have a link to the next page in the assignment. This allows you to encourage your students to read the pages in the order you choose rather than the order they appear in the book.    Problem Sets  In Runestone a problem set is a group of exercises that are graded for correctness. These can be programming problems, fill in the blank questions, multiple choice or any other gradeable activity. The problems may come from anywhere.  The body of the text  From exercises at the end of the chapter  Problems that you create yourself  Problems from a question bank or from another book  When you create a problem set the problems appear on the assignment page and the student can either work on them there or in the context of the book. To the Runestone system it does not matter where they work on the problem, just that they do work on the problem.   Overloading Assignments  Besides regular problem sets, a problem set can also be used to create two other student experiences.  Timed Assessments -- See .  Peer Instruction Work -- See        Assignments and Student Work  Because the Runestone Server and the textbooks are so tightly coupled, the primary job of the server is to capture the work your students do. As your students interact with the book, the book and the server work together to capture the clicks, the answers to questions, the code your students write, etc. All of this is captured regardless of whether the activities are part of an assignment. When you make an assignment that is a layer on top of all of the data collection that simply tells the software what actions to group together when you want to assign a grade.  The separation of data collection from assignments can be a bit confusing at first. It has important implications that you should understand.  If you use the same question in multiple assignments the student only has to do the work once.  If you delete an assignment, your students do not lose any work.  There is no need for your students to submit an assignment. When it comes time to grade the software simply uses the data collected for each of the questions in the assignment.      Assignments and LTI  If you have LTI configured ( ) Then your students will see a message on the assignment page that says that Assignments can only be accessed through the LMS. This is so grades can be properly passed back to the LMS.  If you decide you don't want to use LTI you can remove that message and display the student assignments as usual by deleting the LTI keys you created when you set up LTI.    Assignment Status  The choose assignment page shows the status of the assignment. Students are encouraged to use this to keep themselves organized. They can mark an assignment as in progress or submitted But marking an assignment as submitted is advisory only. They can continue to work on the assignment and Runestone will continue to record what they do. When you grade the assignment you have the flexibility to decide what to grade and how to grade it. You can enforce your deadlines, or relax your deadlines. You can grade your students best response, their last response or their first.  The image below shows the choose assignment page. The student can see that two assignments have been graded and one assignment is \"in progress.\" This makes it easier for students to know where they are it with each homework assignment, but to repeat has no actual bearing on grading.   While Runestone is not (yet) smart enough to automatically mark a students assignment in progress, the student can set toggle through the status values by clicking the button at the bottom of the assignment page.   The values for the status will toggle through the following options:  Not Started  In Progress  Complete     "
},
{
  "id": "instructor-interface_assignments-2",
  "level": "2",
  "url": "instructor-interface_assignments.html#instructor-interface_assignments-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reading Assignments Problem Sets "
},
{
  "id": "instructor-interface_assignments-4-3",
  "level": "2",
  "url": "instructor-interface_assignments.html#instructor-interface_assignments-4-3",
  "type": "Remark",
  "number": "6.1.1",
  "title": "Overloading Assignments.",
  "body": " Overloading Assignments  Besides regular problem sets, a problem set can also be used to create two other student experiences.  Timed Assessments -- See .  Peer Instruction Work -- See     "
},
{
  "id": "instructor-interface_assignments-7-2",
  "level": "2",
  "url": "instructor-interface_assignments.html#instructor-interface_assignments-7-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "in progress submitted "
},
{
  "id": "instructor-interface_create-an-assignment",
  "level": "1",
  "url": "instructor-interface_create-an-assignment.html",
  "type": "Section",
  "number": "6.2",
  "title": "Create an Assignment",
  "body": " Create an Assignment   Introduction       To create an assignment, go to Instructor Dashboard and click on the new Assignment Builder button under Assignments & Grading   Instructor Dashboard Assignment Builder     This will take you to a list of assignments that you have created or copied. Click on + Create New Assignment button on the top right corner of the page.   Create New Assignment Button     Fill in the basic information for the new assignment such as a name, description, and due date. Then, click on the Next button. The builder will give an error message if the name of the assignment is not unique among your assignments.   Enter a unique name for the assignment      There are 3 types of assignments that you can create: Regular, Quiz\/Exam, or Peer Instruction. Choose Regular for an ordinary assignment and then click on the Create button. See the next chapters for information on quizzes and peer instruction.   Select Assignment Type     You will be put into the assignment page with three tabs on the left: Basic Info, Readings, and Exercises. Readings allow you to select whole chapters or parts of chapters for your students to read. You can assign points to the readings by tracking the number of activities they attempt in each subchapter. In readings, these are only graded for interaction, not correctness. Exercises are individual problems for students to solve that can be graded for correctness, including active code, short answer, multiple choice, parsons problems, etc. These can be from the ebook that you are using or even problems that you write yourself. An assignment can have just readings, just exercises, or both. See the subsections below for setting up Readings and Exercises.     This Scribe document illustrates how to create, edit and grade assignments in Runestone step by step with screenshots.    Adding Readings  Click on the Readings tab and then the Choose Readings button. Choose subchapters or pages that you want your students to read. Click on a white space below the pop up menu to close it when you are done selecting readings.   Choose Readings Button    There are 2 things you can change for each reading:     # required: How many of the activities on the page do you students need to do in order to get the points for this section. These are only graded for interaction or attempts, not correctness. They will get 1 activity for visiting the page. By default, this is set to 75% of the number of activities on the page. Please remember that the number required for the points is all or nothing, so if they miss one they will not get the points. This is why it may be better to leave it at 75% or a little below the number of activities in case they miss one.    Points: How many points for completing this section. You can click on the pencil button at the top if you want to change the number of points for all the readings at once.       Adding Exercises  Click on the Exercises tab on the left to add individual exercises for students to do that can be graded for correctness. Then, click on the + Add Exercises button on the right. You will see 3 choices: Browse Chapter Exercises, Search Exercise, and Create New Exercise. Click on Browse Chapter Exercises to choose exercises.   Choose Exercises Button    Scroll to the chapter and subchapters that you want and click on the triangles next to them to expand them. When you see the exercises, you can click to choose them or click the eye to preview them before choosing. Exercises can be from the ebook that you are using, written by its author, or contributed by the community. If the exercise has a name that starts with the ebook's name like \"csawesome2__\" and has a book icon under the source column, then it is from the ebook, shown in the red box below. If it has a percon icon under Source, it is contributed by another teacher in the community, shown in the purple box below. There are also controls in the green box below that can be used to filter by problem type or to just show the problems from the book. After selecting problems, click on the orange Choose exercises button to add them to the assignment.   Browse Exercises    After adding the exercisee to the assignment, you will see the list of exercises you have chosen. You can drag to reorder them. And there are 3 things you can change for each exercise:   Exercise List       Autograde: options here are % correct, All or nothing, Interaction, or manual. If the exercise has unit test autograding code, it will be set to \"% correct\". If it does not have autograding, it will be set to manual, where you will need to grade it.    Which to Grade: Best Answer, first answer or last answer    Points: how many points for this question. The pencil button at the top of each column can be used to change the number of points for all the exercises at once.     Some books have large quizbanks of community contributed questions. However, some of these community contributed exercises might have errors. If you are previewing a question and it is obviously bad, or incorrect, or just someone experimenting, use the Flag Question button to let us know. We have volunteer editors that help us clear out or correct these bad questions.  You can also Search Exercises by name or keyword or author if you are looking for something specific. Click on Add Exercises button and then select Search Exercises instead of Browse Chapter Exercises. Type in a search word and enter in the search box. You can filter by type. The default is to search for exercises associated with the ebook that you are in, but you can toggle \"Book Exercises\" to \"All Exercises\" to search for exercises in other books. You can then click to select or preview exercises from the results and then click on the orange Choose Exercises button to add them to the assignment. You can also Copy Exercises to change them.   Search Exercises    When you are done adding exercises, click on the back arrow by the assignment name or on the Assignment Builder button at the top to return to the main assignment list page. By default, the new assignment will not be visible to students.   Make it Visible  Please make sure that you slide the visibility toggle of an assignment in the assignments list to visible when you want your students to see it. If you forget to toggle this to visible, then the assignment will not show up in the list that your students can see on the assignment page.     Accommodations   Runestone allows you to create accommodations for students who need them. You can create an accommodation for a student in the Instructor Dashboard by clicking on Manage Accommodations under the Student Management menu or use the link from the course home page. There are three kinds of accommodations that you can create:  Extra Time on Timed Assessments  Extended Due Date  Allow student to see\/access assignments not visible to others     Creating Accommodations      Extra Exam Time  When you create an accommodation for extra time on timed assessments, you can specify a multiplier for the extra time that the student will receive. Normally this is something like 1.5 or 2.0 for the student. This extra time will be added to the time limit for any timed assessments that the student takes. The student will see the extra time on the exam page.  You can set this accommodation for a specific student or for a group of students. If you set it for a group of students, then all students in that group will receive the extra time. If you set it for a specific student, then only that student will receive the extra time. You can set it once by just selecting one or more students and setting the multiplier value. This will then apply to ALL assignments. It can be ovverridden for a specific assignment at any time, as a specific assignment will take priority over the general accommodation.    Extended Due Date  When you create an accommodation for an extended due date, you specify the number of extra days that the student will have to complete the assignment. This can be set for a specific student or for a group of students. If you set it for a group of students, then all students in that group will receive the extra time. If you set it for a specific student, then only that student will receive the extra time. You can set it once by just selecting one or more students and setting the number of extra days. This will then apply to ALL assignments. It can be ovverridden for a specific assignment at any time, as a specific assignment will take priority over the general accommodation.  If you need to grant a further extension, you can do so by creating a new accommodation with more days. If you gave them 3 days at first, but that wasn't enough, you can enter 5 days to give them an additional 2 days.    Visibility  This is for situations where the assignment is not visible to the students, but you would like to mail the student a link to an exam, maybe a makeup exam. Or an extra assignment, or whatever. This accommodation requires both a student and an assignment. When the accommodation is saved, then the assignment will show up for the student in their assignment list, or you can email the student a link to the assignment and they will have access.    "
},
{
  "id": "new_assign_fig",
  "level": "2",
  "url": "instructor-interface_create-an-assignment.html#new_assign_fig",
  "type": "Figure",
  "number": "6.2.1",
  "title": "",
  "body": " Instructor Dashboard Assignment Builder   "
},
{
  "id": "create_assign_fig",
  "level": "2",
  "url": "instructor-interface_create-an-assignment.html#create_assign_fig",
  "type": "Figure",
  "number": "6.2.2",
  "title": "",
  "body": " Create New Assignment Button   "
},
{
  "id": "unique_assign_fig",
  "level": "2",
  "url": "instructor-interface_create-an-assignment.html#unique_assign_fig",
  "type": "Figure",
  "number": "6.2.3",
  "title": "",
  "body": " Enter a unique name for the assignment   "
},
{
  "id": "assign_type_fig",
  "level": "2",
  "url": "instructor-interface_create-an-assignment.html#assign_type_fig",
  "type": "Figure",
  "number": "6.2.4",
  "title": "",
  "body": " Select Assignment Type   "
},
{
  "id": "choose_readings_fig",
  "level": "2",
  "url": "instructor-interface_create-an-assignment.html#choose_readings_fig",
  "type": "Figure",
  "number": "6.2.5",
  "title": "",
  "body": " Choose Readings Button   "
},
{
  "id": "choose_exercises_fig",
  "level": "2",
  "url": "instructor-interface_create-an-assignment.html#choose_exercises_fig",
  "type": "Figure",
  "number": "6.2.6",
  "title": "",
  "body": " Choose Exercises Button   "
},
{
  "id": "browse_exercises_fig",
  "level": "2",
  "url": "instructor-interface_create-an-assignment.html#browse_exercises_fig",
  "type": "Figure",
  "number": "6.2.7",
  "title": "",
  "body": " Browse Exercises   "
},
{
  "id": "exercise_list_fig",
  "level": "2",
  "url": "instructor-interface_create-an-assignment.html#exercise_list_fig",
  "type": "Figure",
  "number": "6.2.8",
  "title": "",
  "body": " Exercise List   "
},
{
  "id": "instructor-interface_creating-a-problem-assignment-9",
  "level": "2",
  "url": "instructor-interface_create-an-assignment.html#instructor-interface_creating-a-problem-assignment-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Flag Question "
},
{
  "id": "search_exercises_fig",
  "level": "2",
  "url": "instructor-interface_create-an-assignment.html#search_exercises_fig",
  "type": "Figure",
  "number": "6.2.9",
  "title": "",
  "body": " Search Exercises   "
},
{
  "id": "instructor-interface_creating-a-problem-assignment-13",
  "level": "2",
  "url": "instructor-interface_create-an-assignment.html#instructor-interface_creating-a-problem-assignment-13",
  "type": "Warning",
  "number": "6.2.10",
  "title": "Make it Visible.",
  "body": " Make it Visible  Please make sure that you slide the visibility toggle of an assignment in the assignments list to visible when you want your students to see it. If you forget to toggle this to visible, then the assignment will not show up in the list that your students can see on the assignment page.  "
},
{
  "id": "accommodations-builder",
  "level": "2",
  "url": "instructor-interface_create-an-assignment.html#accommodations-builder",
  "type": "Figure",
  "number": "6.2.11",
  "title": "",
  "body": " Creating Accommodations   "
},
{
  "id": "instructor-interface_copying-assignments",
  "level": "1",
  "url": "instructor-interface_copying-assignments.html",
  "type": "Section",
  "number": "6.3",
  "title": "Copying Assignments",
  "body": " Copying Assignments   Copying from your previous courses  You may have multiple sections where you want to share assignments, or you may simply want to copy your assignments from the last time you taught a course to your current course. Choose \"Copy Assignment\" from the Instructor Dashboard under the \"Assignments & Grading\" menu. Before copying assignments, it is a good idea to make sure that the course settings has the correct start date in the \"Course Settings\" in the \"Course Administration\" menu of the Instructor Dashboard so that the due dates are adjusted properly.   Copying an assignment.    At the copy assignment page, select any of your old or current courses that use the same book or the base course if the author has created base course assignments.  Once the course is selected you can copy one or all of the assignments to your course. If you do this multiple times courses with the same name will be ignored on the second copy. This makes it a little easier if you just want to keep one course in sync with another so you don't have to remember and pick and choose.   Select course and one or all assignments to copy.    The system will add the assignments to your current course and make its best guess to adjust the due date, based on the number of days from the beginning of each course set in the Course Settings in the \"Course Administration\" menu of the Instructor Dashboard. This is going to get you in the ballpark, but you will probably have to manually adjust it due to differences in the calendar from year to year.    Copying Base Course Assignments from the Author  Some authors have provided a pre-made set of assignments. You can copy these from the \"base course\" after you have created your course. The \"base course\" is the code for the book that you chose when you created your own course. Not all authors have done this yet, so your results will vary.    Copying from a different Instructor  Help, this is my first time teaching this class and I want to copy assignments from another instructor. This is very possible if the instructor is still available. You simply need to enroll in their course and have them make you a TA. Then you will be able to copy the assignments from their course to yours.  If the previous instructor is not available then we can still probably make it happen, but you are going to have to go out of your way to prove that your request is legit. Sorry, we cannot just take your word for it over email. A link to your faculty page, that verifies your email as a legitimate instructor at the same institution of the instructor of the course you want to copy. We would love to just trust everyone, but data privacy laws are strict and we have to to treat data privacy very carefully. Thanks for understanding.   "
},
{
  "id": "copy_assign_fig",
  "level": "2",
  "url": "instructor-interface_copying-assignments.html#copy_assign_fig",
  "type": "Figure",
  "number": "6.3.1",
  "title": "",
  "body": " Copying an assignment.   "
},
{
  "id": "fig_select_assign",
  "level": "2",
  "url": "instructor-interface_copying-assignments.html#fig_select_assign",
  "type": "Figure",
  "number": "6.3.2",
  "title": "",
  "body": " Select course and one or all assignments to copy.   "
},
{
  "id": "instructor-interface_exams-and-quizzes-in-runestone",
  "level": "1",
  "url": "instructor-interface_exams-and-quizzes-in-runestone.html",
  "type": "Section",
  "number": "6.4",
  "title": "Exams and Quizzes in Runestone",
  "body": " Exams and Quizzes in Runestone   Creating a Quiz\/Exam Assignment   In the new Assignment Builder in the Instructor Dashboard, you can choose to make a new assignment a Quiz\/Exam like below where you can select whether there is a time limit and whether pauses and feedback are allowed.   Creating an exam from an assignment    When the students first see a timed exam, it looks like this:     They cannot see any of the questions until they click the start button. When the start button is clicked the timer (if selected) is also started.  During an exam the students see just one question at a time. They can navigate the questions by number or they can use the prev\/next buttons to go from question to question.  When the student navigates to the new question the question they were on is evaluated and the results are sent to the server. Questions that a student has attempted are marked as grey on the numbered interface so students know which questions they have answered.  During an exam the student will not see any feedback on whether they answered the questions right or wrong. Once the exam is completed they will see that feedback unless you have checked the don't show feedback checkbox.  It is important to remind students that if they close the tab or their browser or navigate away from the page or even try to refresh the page, the exam is over and they will not be able to answer any more questions. Once they click the finish exam button they are done. As an instructor you can reset a students exam from the instructors page, but they will be forced to start over.  When a student submits their exam with the finish exam button or when the exam is automatically submitted due to time expiring, the autograder is run on the server and a score is recorded. If all your questions are autogradable you're done! If not, you can use the grading interface to manually grade any questions.       Resetting an Exam  The instructor dashboard allows you to reset an exam for any student.   Reset Exams    You just select the student and the assessment name and then press the red reset button.   Resetting an exam for a student     "
},
{
  "id": "create_exam_fig",
  "level": "2",
  "url": "instructor-interface_exams-and-quizzes-in-runestone.html#create_exam_fig",
  "type": "Figure",
  "number": "6.4.1",
  "title": "",
  "body": " Creating an exam from an assignment   "
},
{
  "id": "create_quiz_intro-6",
  "level": "2",
  "url": "instructor-interface_exams-and-quizzes-in-runestone.html#create_quiz_intro-6",
  "type": "Figure",
  "number": "6.4.2",
  "title": "",
  "body": "  "
},
{
  "id": "create_quiz_intro-13",
  "level": "2",
  "url": "instructor-interface_exams-and-quizzes-in-runestone.html#create_quiz_intro-13",
  "type": "Figure",
  "number": "6.4.3",
  "title": "",
  "body": "  "
},
{
  "id": "instructor-interface_resetting-an-exam-3",
  "level": "2",
  "url": "instructor-interface_exams-and-quizzes-in-runestone.html#instructor-interface_resetting-an-exam-3",
  "type": "Figure",
  "number": "6.4.4",
  "title": "",
  "body": " Reset Exams   "
},
{
  "id": "instructor-interface_resetting-an-exam-5",
  "level": "2",
  "url": "instructor-interface_exams-and-quizzes-in-runestone.html#instructor-interface_resetting-an-exam-5",
  "type": "Figure",
  "number": "6.4.5",
  "title": "",
  "body": " Resetting an exam for a student   "
},
{
  "id": "instructor-interface_grading",
  "level": "1",
  "url": "instructor-interface_grading.html",
  "type": "Section",
  "number": "6.5",
  "title": "Grading",
  "body": " Grading   Introduction   To grade student performance, go back to the instructor's interface and click on the grading tab. You'll see something like this.   Typically, you will select an assignment from the first dropdown. This will show you summary of the elements that are automatically graded. The other option is Chapter and you can use this to drill in on a chapter and look at a students work on any problem in the textbook regardless of whether it was part of an assignment.   From here you can also select a question or questions as well as a student or students to manually grade a problem. You can also use this to view a students answer to an automatically graded problem if they have a question about their score.   You will see the last version of code that the student ran prior to the assignment deadline. Click run to execute it. Drag the little scrubber across the timeline next to the Run button to see other versions of the code that the student ran.  You can assign a number grade (number of points) and, optionally, leave a comment. As you tab out of the grade box you will see it turn green to indicate that the grade has been updated in the database. Similarly if you leave a comment it will automatically update the database with the comment for the student.  If you prefer to work on one question at a time there is a save and next button that will automatically move on the next item to grade.    Autograde  Some questions have been configured for auto-grading, in particular coding problems with unit tests and some multiple choice problems. If you click on the Autograde button on the left side, the autograder will run. It will pop up an alert box to give you a diagnostic about how many question-student pairs were autograded.  Some things to note about the autograder:     If a question is selected, the autograder will run only for that question.    If a student is also selected, the autograder will run for only that question-student combination.    To run the autograder for all the questions and students for a particular assignment, refresh the page, select the assignment, and click the autograde button before selecting a question or student.    You can manually override the grade assigned by the autograder using the grading form on the right side. Be sure to change the comment as well.    If you rerun the autograder, it will not run on any student-question pair where you have changed the comment.       Calculate Totals  Once you have graded all the questions on an assignment, click the Caclulate Totals button to compute the total scores for the whole assignment, or to recalculate them after updating a grade. Again, an alert box will pop up to provide diagnostics about the min and max scores that were calculated.     Release Grades  When you are satisfied that the grade totals have been calculated correctly, click on the Release Grades button at the bottom left. This makes them visible to students. If you make any subsequent changes to grades, you will need to click Calculate Totals again, but you will not need to click on Release Grades again: once released, they stay released.    How a Student Sees Grades and Comments  When viewing an assignment, a student can click on the Show Feedback button to see a score and any instructor comments.   In addition the user menu allows the student to see a summary of their progress.    "
},
{
  "id": "instructor-interface_the-practice-interface",
  "level": "1",
  "url": "instructor-interface_the-practice-interface.html",
  "type": "Section",
  "number": "6.6",
  "title": "The Practice Interface",
  "body": " The Practice Interface  How often have you had a student ask you how they could get more practice? One theory that supports this is spaced repetition That is, a method to have students go back and answer existing questions but a couple of weeks after the material was brand new. Its harder, because its now out of the immediate context of the reading they just did, but this type of review helps solidify a student's understanding of the concept.  There is a paper about this in the ACM Digital Library from the 2019 proceedings. Speed and Studying: Gendered Pathways to Success, Iman Yeckehzaare and Paul Resnick.  This feature is available in most books on Runestone Academy. The exercises need to be tagged and in some cases categorized. Other books will follow as we do the work to update the source.  The first thing you will need to do is configure practice for your course. Most of the options on the configuration are pretty self explanatory, but here are a few notes.  If you choose to assign points for practice they will show up in a special column in the gradebook.labelled \"Practice\"  Do not forget to come back to the practice interface after you have covered a topic so that you can enable practice questions for that topic.     Set up the practice feature for your course.    Once you have enabled the practice feature for the course, you enable the sections you want practice questions to come from.     The students can access the practice tool from the 👤 menu, The practice practice looks like this:     "
},
{
  "id": "practice_if_fig",
  "level": "2",
  "url": "instructor-interface_the-practice-interface.html#practice_if_fig",
  "type": "Figure",
  "number": "6.6.1",
  "title": "",
  "body": " Set up the practice feature for your course.   "
},
{
  "id": "instructor-interface_the-practice-interface-8",
  "level": "2",
  "url": "instructor-interface_the-practice-interface.html#instructor-interface_the-practice-interface-8",
  "type": "Figure",
  "number": "6.6.2",
  "title": "",
  "body": "  "
},
{
  "id": "instructor-interface_the-practice-interface-10",
  "level": "2",
  "url": "instructor-interface_the-practice-interface.html#instructor-interface_the-practice-interface-10",
  "type": "Figure",
  "number": "6.6.3",
  "title": "",
  "body": "  "
},
{
  "id": "writing-exercises_adding-an-exercise-to-the-exercise-bank",
  "level": "1",
  "url": "writing-exercises_adding-an-exercise-to-the-exercise-bank.html",
  "type": "Section",
  "number": "7.1",
  "title": "Adding an Exercise to the Exercise Bank",
  "body": " Adding an Exercise to the Exercise Bank   Create New Exercises   The new Assignment Builder makes it easy to write your own exercises! Although all of the Runestone books have a pretty good selection of exercises, you can never have too many exercises. We hope to crowd source an enormous collection of questions and problems in our Exercise database. You can help by adding custom exercises for your own course to the database! Once your exercise is in the database, it is available for others to find using the search feature on the create assignment page. Community contributed exercises are shown with a person icon instead of a book icon under the source column.  To create new exercises, start or go to any assignment in the Instructor Dashboard \"Assignment Builder\". In the Exercises section of the assignment, click on \"Add Exercise\" and select \"+ Create New Exercise\".   Create new exercise    There are many different types of exercises that you can create as shown below. Some of these are discussed further in the sections below.   Exercise Types    Here are some examples of these different types of exercises. In the next pages, we will go through the steps to create some of these exercises.  Here is an example Multiple Choice Exercise:    What does the following code print?   System.out.println(2 + 3 * 5 - 1);       24    This would be true if it was System.out.println(((2 + 3) * 5) - 1), but without the parentheses the multiplication is done first.      14    This would be true if it was System.out.println(2 + (3 * (5 - 1))), but without the parentheses the multiplication is done first and the addition and subtraction are handled from left to right.      This will give a compile time error.    This will compile and run. Try it in DrJava. Look up operator precedence in Java.      16    Correct! Remember PEMDAS. The multiplication is done first (3 * 5 = 15) and then the addition (2 + 15 = 17) and finally the subtraction (17 - 1 = 16).      Parsons (Mixed up Code) Problem:    The following has all the correct Java code to print out “Hi there!” when the code is run, but the code is mixed up and contains some extra blocks with errors. Drag the needed blocks from left to right and put them in the correct order. Click on the “Check Me” button to check your solution.      public class Hello  {    public Class Hello  {      public static void main(String[] args)  {    public static void main()  {      System.out.println(\"Hi there!\");    System.out.println(\"Hi there!\")      }  }     Here is an example of a simple Active Code exercise in Python:    Write a Python function that takes two numbers as input and returns their sum.    def add(a, b): # complete this function to add a and b and return the sum  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(add(2,2),4,\"Call to add(2,2) should return 4\") self.assertAlmostEqual(add(2.0,3.0), 5.0, 1, \"Call to add(2.0,3.0) should return 5.0\") myTests().main()    Here is an example of a Drag and Drop matching questions. You can also have Matching questions where you draw lines to match many to many objects.    Drag the definition from the left and drop it on the correct concept on the right. Click the \"Check Me\" button to see if you are correct.    Review the summaries above.     a specific instance of a class with defined attributes  object    defines a new data type with instance variables and methods  class    define the behaviors or functions for objects  methods    code that is used to create new objects and initialize the object's attributes  constructors    the values or data passed to an object's method  parameters     Clickable Area:    Click on the constructor headers (signatures)    Constructors are public and have the same name as the class. Click on the constructor headers which are the first line of the constructors showing their name and parameters.    public class Date {    private int year;   private int month;   private int day;    public Date()   { \/** Implementation not shown *\/ }    public Date(int year, int month, int day)   { \/** Implementation not shown *\/ }    public void print()   { \/** Implementation not shown *\/ }   }    Fill in the Blank:    What Java data type should you use for a shoe size like 8.5?          Correct. Any variable that needs to values after the decimal point should be declared as a double.     What type allows for a decimal value?      Short Answer    Write an algorithm for someone (maybe a robot) to make a peanut butter and jelly sandwich. Be sure to include at least 5 precise steps in order. Have someone (maybe your instructor) act it out. Were your instructions precise enough?     Poll    I am a     beginner programmer    intermediate programmer    expert programmer    prefer not to answer     Select Questions allow the students to choose between already existing questions:  Runestone-only: a toggle question where the question graded is always the first of , or .   "
},
{
  "id": "create_new_exercise_fig",
  "level": "2",
  "url": "writing-exercises_adding-an-exercise-to-the-exercise-bank.html#create_new_exercise_fig",
  "type": "Figure",
  "number": "7.1.1",
  "title": "",
  "body": " Create new exercise   "
},
{
  "id": "exercise_types_fig",
  "level": "2",
  "url": "writing-exercises_adding-an-exercise-to-the-exercise-bank.html#exercise_types_fig",
  "type": "Figure",
  "number": "7.1.2",
  "title": "",
  "body": " Exercise Types   "
},
{
  "id": "java_mcq_1",
  "level": "2",
  "url": "writing-exercises_adding-an-exercise-to-the-exercise-bank.html#java_mcq_1",
  "type": "Checkpoint",
  "number": "7.1.3",
  "title": "",
  "body": "  What does the following code print?   System.out.println(2 + 3 * 5 - 1);       24    This would be true if it was System.out.println(((2 + 3) * 5) - 1), but without the parentheses the multiplication is done first.      14    This would be true if it was System.out.println(2 + (3 * (5 - 1))), but without the parentheses the multiplication is done first and the addition and subtraction are handled from left to right.      This will give a compile time error.    This will compile and run. Try it in DrJava. Look up operator precedence in Java.      16    Correct! Remember PEMDAS. The multiplication is done first (3 * 5 = 15) and then the addition (2 + 15 = 17) and finally the subtraction (17 - 1 = 16).     "
},
{
  "id": "mixed-hi-paired",
  "level": "2",
  "url": "writing-exercises_adding-an-exercise-to-the-exercise-bank.html#mixed-hi-paired",
  "type": "Checkpoint",
  "number": "7.1.4",
  "title": "",
  "body": "  The following has all the correct Java code to print out “Hi there!” when the code is run, but the code is mixed up and contains some extra blocks with errors. Drag the needed blocks from left to right and put them in the correct order. Click on the “Check Me” button to check your solution.      public class Hello  {    public Class Hello  {      public static void main(String[] args)  {    public static void main()  {      System.out.println(\"Hi there!\");    System.out.println(\"Hi there!\")      }  }    "
},
{
  "id": "active_code_example",
  "level": "2",
  "url": "writing-exercises_adding-an-exercise-to-the-exercise-bank.html#active_code_example",
  "type": "Checkpoint",
  "number": "7.1.5",
  "title": "",
  "body": "  Write a Python function that takes two numbers as input and returns their sum.    def add(a, b): # complete this function to add a and b and return the sum  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(add(2,2),4,\"Call to add(2,2) should return 4\") self.assertAlmostEqual(add(2.0,3.0), 5.0, 1, \"Call to add(2.0,3.0) should return 5.0\") myTests().main()   "
},
{
  "id": "java_matching",
  "level": "2",
  "url": "writing-exercises_adding-an-exercise-to-the-exercise-bank.html#java_matching",
  "type": "Checkpoint",
  "number": "7.1.6",
  "title": "",
  "body": "  Drag the definition from the left and drop it on the correct concept on the right. Click the \"Check Me\" button to see if you are correct.    Review the summaries above.     a specific instance of a class with defined attributes  object    defines a new data type with instance variables and methods  class    define the behaviors or functions for objects  methods    code that is used to create new objects and initialize the object's attributes  constructors    the values or data passed to an object's method  parameters    "
},
{
  "id": "date_constructor",
  "level": "2",
  "url": "writing-exercises_adding-an-exercise-to-the-exercise-bank.html#date_constructor",
  "type": "Checkpoint",
  "number": "7.1.7",
  "title": "",
  "body": "  Click on the constructor headers (signatures)    Constructors are public and have the same name as the class. Click on the constructor headers which are the first line of the constructors showing their name and parameters.    public class Date {    private int year;   private int month;   private int day;    public Date()   { \/** Implementation not shown *\/ }    public Date(int year, int month, int day)   { \/** Implementation not shown *\/ }    public void print()   { \/** Implementation not shown *\/ }   }   "
},
{
  "id": "fillDecVar2",
  "level": "2",
  "url": "writing-exercises_adding-an-exercise-to-the-exercise-bank.html#fillDecVar2",
  "type": "Checkpoint",
  "number": "7.1.8",
  "title": "",
  "body": "  What Java data type should you use for a shoe size like 8.5?          Correct. Any variable that needs to values after the decimal point should be declared as a double.     What type allows for a decimal value?     "
},
{
  "id": "pbj",
  "level": "2",
  "url": "writing-exercises_adding-an-exercise-to-the-exercise-bank.html#pbj",
  "type": "Checkpoint",
  "number": "7.1.9",
  "title": "",
  "body": "  Write an algorithm for someone (maybe a robot) to make a peanut butter and jelly sandwich. Be sure to include at least 5 precise steps in order. Have someone (maybe your instructor) act it out. Were your instructions precise enough?    "
},
{
  "id": "toggle1",
  "level": "2",
  "url": "writing-exercises_adding-an-exercise-to-the-exercise-bank.html#toggle1",
  "type": "Checkpoint",
  "number": "7.1.10",
  "title": "",
  "body": "Runestone-only: a toggle question where the question graded is always the first of , or . "
},
{
  "id": "writing-exercises_multiple-choice-questions",
  "level": "1",
  "url": "writing-exercises_multiple-choice-questions.html",
  "type": "Section",
  "number": "7.2",
  "title": "Multiple Choice Questions",
  "body": " Multiple Choice Questions  A common question type is the multiple choice question like below.    What does the following code print?   System.out.println(2 + 3 * 5 - 1);       24    This would be true if it was System.out.println(((2 + 3) * 5) - 1), but without the parentheses the multiplication is done first.      14    This would be true if it was System.out.println(2 + (3 * (5 - 1))), but without the parentheses the multiplication is done first and the addition and subtraction are handled from left to right.      This will give a compile time error.    This will compile and run. Try it in DrJava. Look up operator precedence in Java.      16    Correct! Remember PEMDAS. The multiplication is done first (3 * 5 = 15) and then the addition (2 + 15 = 17) and finally the subtraction (17 - 1 = 16).      To create multiple choice questions, start or go to any assignment in the Instructor Dashboard \"Assignment Builder\". In the Exercises section of the assignment, click on \"Add Exercise\" and select \"+ Create New Exercise\" and then select \"Multiple Choice\".   Choose Multiple Choice Exercise    Enter the question. Type in \/ and press enter to see the menu to format the text and add in images, tables, code blocks, etc. You can also just use Markdown syntax directly ( Markdown Cheat Sheet ) and put code in between backticks (`) for inline code or triple backticks (```) for code blocks.   Create a Multiple Choice Question    Click on Next or 2 to move to the Options tab and enter the multiple choice options. Click on Add Option to add more options. Click on the checkmark next to \"Correct\" to mark a correct option. You can mark more than one answer as correct. You can also add feedback for each choice that will be shown to the student after they answer the question. Do \/ and enter to see the format menu or use markdown for each option.   Enter Multiple Choice Options    Click on Next or 3 to move to the Settings tab. Here you can set the chapter and section where you want the exercise stored in the assignment builder (where it will show when browsing chapters in the assignment builder), the author, the topic, the number of points for the question, and add tags to help you find the question later. If you change the name of the exercise, make sure it is unique! Some authors put their author names in the exercise name too to make them easier to find. You can also choose to make the exercise private or contribute it to the question bank for other teachers to use. Please make experimental questions private.   Set Multiple Choice Question Settings    Make sure that you Preview the exercise in step 4 and test it before saving it. Although there is no way to delete an exercise once it is saved, you can always edit it later to fix mistakes, make it private, or flag it for the volunteers to fix or delete.  "
},
{
  "id": "java_mcq_2",
  "level": "2",
  "url": "writing-exercises_multiple-choice-questions.html#java_mcq_2",
  "type": "Checkpoint",
  "number": "7.2.1",
  "title": "",
  "body": "  What does the following code print?   System.out.println(2 + 3 * 5 - 1);       24    This would be true if it was System.out.println(((2 + 3) * 5) - 1), but without the parentheses the multiplication is done first.      14    This would be true if it was System.out.println(2 + (3 * (5 - 1))), but without the parentheses the multiplication is done first and the addition and subtraction are handled from left to right.      This will give a compile time error.    This will compile and run. Try it in DrJava. Look up operator precedence in Java.      16    Correct! Remember PEMDAS. The multiplication is done first (3 * 5 = 15) and then the addition (2 + 15 = 17) and finally the subtraction (17 - 1 = 16).     "
},
{
  "id": "mcq_fig",
  "level": "2",
  "url": "writing-exercises_multiple-choice-questions.html#mcq_fig",
  "type": "Figure",
  "number": "7.2.2",
  "title": "",
  "body": " Choose Multiple Choice Exercise   "
},
{
  "id": "mcq_edit_fig",
  "level": "2",
  "url": "writing-exercises_multiple-choice-questions.html#mcq_edit_fig",
  "type": "Figure",
  "number": "7.2.3",
  "title": "",
  "body": " Create a Multiple Choice Question   "
},
{
  "id": "mcq_options_fig",
  "level": "2",
  "url": "writing-exercises_multiple-choice-questions.html#mcq_options_fig",
  "type": "Figure",
  "number": "7.2.4",
  "title": "",
  "body": " Enter Multiple Choice Options   "
},
{
  "id": "mcq_settings_fig",
  "level": "2",
  "url": "writing-exercises_multiple-choice-questions.html#mcq_settings_fig",
  "type": "Figure",
  "number": "7.2.5",
  "title": "",
  "body": " Set Multiple Choice Question Settings   "
},
{
  "id": "writing-exercises_mixed-up-code-parsons",
  "level": "1",
  "url": "writing-exercises_mixed-up-code-parsons.html",
  "type": "Section",
  "number": "7.3",
  "title": "Mixed-Up Code (Parsons)",
  "body": " Mixed-Up Code (Parsons)   Parsons problems, also known as mixed-up code problems, are a type of coding exercise where students are presented with a set of code blocks that are mixed up or out of order. The goal is for students to rearrange these blocks into the correct sequence to form a functioning program or solve a specific problem. This type of exercise helps students develop their understanding of code structure, logic, and flow control. They can also be used for pseudocode or mathematical proofs.    Example Parsons Problems  Here is an example:    The following has the correct code to ‘swap' the values in x and y (so that x ends up with y's initial value and y ends up with x's initial value), but the code is mixed up and contains <b>one extra block<\/b> which is not needed in a correct solution. Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me<\/i> button. You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.     int x = 3;  int y = 5;  int temp = 0;    temp = x;    x = y;    y = temp;    y = x;     You can include distractor blocks in the problem. A distractor is code that isn't needed in a correct solution, such as code with a syntax error. Distractors can either be paired or unpaired.  Here is an example with paired distractors from a data oriented intermediate programming course in Python.    Complete the function greater_dictionary. Given a dictionary d and an integer cutoff, return a dictionary that contains only the key-value pairs where they key is greater than or equal to cutoff.      def greater_dictionary(d, cutoff):    def greater_dictionary(self, d, cutoff):     result = {}     for key in d.keys():    for key in range(d):      if key >= cutoff:    if key > cutoff:      result[key] = d[key]    d[key] = result[key]     return result       Writing your own Parsons Problems  To create your own Parsons problems, start or go to any assignment in the Instructor Dashboard \"Assignment Builder\". In the Exercises section of the assignment, click on \"Add Exercise\" and select \"+ Create New Exercise\" and then select \"Parsons Prob\".  In step 1, select the coding language or text content for English or another natural language content.  In Step 2, write the instructions for the students using Markup or enter \/ for formatting options.  In Step 3, type in code or text into blocks as shown below. Create the correct solution for the problem. It will be randomly mixed up when presented to students. Click the \"Add block\" button at the top right or the + at the end of the blue line in between blocks to create new blocks. Click the copy button to create distractors and choose the correct one.   Create a Parsons Problem    In Step 4, you can change the settings to set the chapter and section where you want the exercise stored in the assignment builder (where it will show when browsing chapters in the assignment builder), the author, the topic, the number of points for the question, and add tags to help you find the question later. If you change the name of the exercise, make sure it is unique! You can also choose to make the exercise private or contribute it to the question bank for other teachers to use. Please make experimental questions private..  In Step 5, you can preview and test the problem before saving the problem.   "
},
{
  "id": "swapex",
  "level": "2",
  "url": "writing-exercises_mixed-up-code-parsons.html#swapex",
  "type": "Checkpoint",
  "number": "7.3.1",
  "title": "",
  "body": "  The following has the correct code to ‘swap' the values in x and y (so that x ends up with y's initial value and y ends up with x's initial value), but the code is mixed up and contains <b>one extra block<\/b> which is not needed in a correct solution. Drag the needed blocks from the left into the correct order on the right. Check your solution by clicking on the <i>Check Me<\/i> button. You will be told if any of the blocks are in the wrong order or if you need to remove one or more blocks.     int x = 3;  int y = 5;  int temp = 0;    temp = x;    x = y;    y = temp;    y = x;    "
},
{
  "id": "mt1dict1ex",
  "level": "2",
  "url": "writing-exercises_mixed-up-code-parsons.html#mt1dict1ex",
  "type": "Checkpoint",
  "number": "7.3.2",
  "title": "",
  "body": "  Complete the function greater_dictionary. Given a dictionary d and an integer cutoff, return a dictionary that contains only the key-value pairs where they key is greater than or equal to cutoff.      def greater_dictionary(d, cutoff):    def greater_dictionary(self, d, cutoff):     result = {}     for key in d.keys():    for key in range(d):      if key >= cutoff:    if key > cutoff:      result[key] = d[key]    d[key] = result[key]     return result    "
},
{
  "id": "parsons_edit_fig",
  "level": "2",
  "url": "writing-exercises_mixed-up-code-parsons.html#parsons_edit_fig",
  "type": "Figure",
  "number": "7.3.3",
  "title": "",
  "body": " Create a Parsons Problem   "
},
{
  "id": "writing-exercises_active-code-exercises",
  "level": "1",
  "url": "writing-exercises_active-code-exercises.html",
  "type": "Section",
  "number": "7.4",
  "title": "Writing your own Active Code Exercises",
  "body": " Writing your own Active Code Exercises   Active Code Exercises  Active Code exercises are coding exercises that allow students to write and run code directly within the ebook. These exercises provide an interactive way for students to practice coding skills, receive immediate feedback, and enhance their understanding of programming concepts. Active Code exercises can be created in various programming languages, including Python, JavaScript, Java, C++, and others supported by the Runestone platform.  Here is an example of a simple Active Code exercise in Python:    Write a Python function that takes two numbers as input and returns their sum.    def add(a, b): # complete this function to add a and b and return the sum  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(add(2,2),4,\"Call to add(2,2) should return 4\") self.assertAlmostEqual(add(2.0,3.0), 5.0, 1, \"Call to add(2.0,3.0) should return 5.0\") myTests().main()    To write your own Active Code exercises, start or go to any assignment in the Instructor Dashboard \"Assignment Builder\". In the Exercises section of the assignment, click on \"Add Exercise\" and select \"+ Create New Exercise\" and then select \"Active Code\".    In step 1 Language, select the coding language for the exercise.    In Step 2 Instructions, write the instructions for the students using Markup or enter \/ for formatting options.    In Step 3 Hidden Prefix, you can optionally provide hidden code that is run before the students code. This is usually left blank.    In Step 4 Starter Code, write the code that you want the students to complete in the code editor. You can provide starter code or just comments or leave it blank for students to fill in.  Create an Active Code Exercise       In Step 5 Hidden Prefix, you can optionally add unit tests to automatically grade the students' code. These tests will run when the student clicks the \"Submit\" button, and they will receive feedback based on the results of the tests. The next section will explain how to write unit tests.    In Step 6, you can optionally provide standard input that the student's code can read from if needed. This is usually left blank.    In Step 7, you can change the settings to set the chapter and section where you want the exercise stored in the assignment builder (where it will show when browsing chapters in the assignment builder), the author, the topic, the number of points for the question, and add tags to help you find the question later. If you change the name of the exercise, make sure it is unique! You can also choose to make the exercise private or contribute it to the question bank for other teachers to use. Please make experimental questions private.   Then, you can preview and test the problem before saving the problem.      Python Unit Tests for Autograding  The real killer feature of these exercises is to be able to create your own unit tests and have the exercise be autograded.  Let's expand our example to include some simple unittests. We can do this by adding a hidden block of code to our previous example in step 5 Hidden Prefix that uses the standard Python unittest framework. Be careful with using the correct indentation when typing in Python.   from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(add(2,2),4,\"Call to add(2,2) should return 4\") self.assertAlmostEqual(add(2.0,3.0), 5.0, 1, \"Call to add(2.0,3.0) should return 5.0\") myTests().main()   If you are not familiar with Python unittests they are pretty easy to write. You create your own class that is a subclass of TestCase, or in our work TestCaseGui so we get some graphical output. Your tests are all methods of the class and must start with the word test . There are a host of assertXXXX functions that you can use. Check out the unittest documentation here .    Java Unit Tests for Autograding  You can create Active Code exercises in other languages supported by Runestone and use their unit testing libraries. For Java, there is the JUnit library as well as a custom library developed by Kate McDonnell for CSAwesome that makes it easy to write autograding unit tests. Here is an example:    Complete the method called square that takes an integer as input and returns its square. Then, call the square method in the main method to print out the square of 6.    public class SquareMethod { public static int square(int number) { \/\/ TO DO: complete this method to return the square of number } public static void main(String[] args) { System.out.println(\"5 squared is \" + square(5)); \/\/ TO DO: Call the square method to print out the square of 6 } }  import static org.junit.Assert.*; import org.junit.*; import java.io.*; public class RunestoneTests extends CodeTestHelper { @Test public void containsCall() { boolean passed = checkCodeContains(\"square(6)\", \"square(6)\"); assertTrue(passed); } @Test public void testMain() throws IOException { String output = getMethodOutput(\"main\"); String expect = \"36\"; boolean passed = getResults(expect, output, \"Expected output from main\"); assertTrue(passed); } @Test public void testSquare() { Object[] args = {9}; String output = getMethodOutput(\"square\", args); String expect = \"81\"; boolean passed = getResults(expect, output, \"square(9)\"); assertTrue(passed); } }    The unit test code which would be put in the hidden suffix section in step 4 is as follows:   import static org.junit.Assert.*; import org.junit.*; import java.io.*; public class RunestoneTests extends CodeTestHelper { @Test public void containsCall() { boolean passed = checkCodeContains(\"square(6)\", \"square(6)\"); assertTrue(passed); } @Test public void testMain() throws IOException { String output = getMethodOutput(\"main\"); String expect = \"36\"; boolean passed = getResults(expect, output, \"Expected output from main\"); assertTrue(passed); } @Test public void testSquare() { Object[] args = {9}; String output = getMethodOutput(\"square\", args); String expect = \"81\"; boolean passed = getResults(expect, output, \"square(9)\"); assertTrue(passed); } }   In this example, we have three tests. The first test checks that the student's code contains a call to square(6). The second test runs the main method and checks that the output contains 36 (the square of 6). The third test calls the square method with an argument of 9 and checks that the return value is 81.  This document provides more details on writing Java unit tests for Active Code exercises using the CodeTestHelper library.   "
},
{
  "id": "ac_ex1",
  "level": "2",
  "url": "writing-exercises_active-code-exercises.html#ac_ex1",
  "type": "Checkpoint",
  "number": "7.4.1",
  "title": "",
  "body": "  Write a Python function that takes two numbers as input and returns their sum.    def add(a, b): # complete this function to add a and b and return the sum  from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(add(2,2),4,\"Call to add(2,2) should return 4\") self.assertAlmostEqual(add(2.0,3.0), 5.0, 1, \"Call to add(2.0,3.0) should return 5.0\") myTests().main()   "
},
{
  "id": "activecode_edit_fig",
  "level": "2",
  "url": "writing-exercises_active-code-exercises.html#activecode_edit_fig",
  "type": "Figure",
  "number": "7.4.2",
  "title": "",
  "body": " Create an Active Code Exercise   "
},
{
  "id": "java_ac_ex1",
  "level": "2",
  "url": "writing-exercises_active-code-exercises.html#java_ac_ex1",
  "type": "Checkpoint",
  "number": "7.4.3",
  "title": "",
  "body": "  Complete the method called square that takes an integer as input and returns its square. Then, call the square method in the main method to print out the square of 6.    public class SquareMethod { public static int square(int number) { \/\/ TO DO: complete this method to return the square of number } public static void main(String[] args) { System.out.println(\"5 squared is \" + square(5)); \/\/ TO DO: Call the square method to print out the square of 6 } }  import static org.junit.Assert.*; import org.junit.*; import java.io.*; public class RunestoneTests extends CodeTestHelper { @Test public void containsCall() { boolean passed = checkCodeContains(\"square(6)\", \"square(6)\"); assertTrue(passed); } @Test public void testMain() throws IOException { String output = getMethodOutput(\"main\"); String expect = \"36\"; boolean passed = getResults(expect, output, \"Expected output from main\"); assertTrue(passed); } @Test public void testSquare() { Object[] args = {9}; String output = getMethodOutput(\"square\", args); String expect = \"81\"; boolean passed = getResults(expect, output, \"square(9)\"); assertTrue(passed); } }   "
},
{
  "id": "peer_instruction-3",
  "level": "1",
  "url": "peer_instruction-3.html",
  "type": "Section",
  "number": "8.1",
  "title": "Peer instruction in Runestone",
  "body": " Peer instruction in Runestone  Support for peer instruction in Runestone was developed as part of a research project by Barb Ericson at the Universit of Michigan. The interface consists of two parts, an instructor interface that allows the instructor to move the class through the steps outlined above and a student interface for answering the questions and participating in a live chat with one or more peers.  As an instructor you access the peer instruction feature from the 👤 menu and choose the Peer Instruction (instructor) option. This will bring you to a page that allows you to select the peer instruction assignment you want to use. When click on the link it starts the peer instruction session. During a peer instruction session students answers are not restored from their history if they have answered them before.   The peer instruction assignment selector     shows the interface for controlling a peer instruction session. It is pretty self explanatory, and consists of 4 steps. Note that when your students go to the student page they will see the first question and they will be able to answer the question right away. You will be able to see the number of students that have answered the question to the right of the question. This will allow you to guage when it is time to stop the vote.   Stop Vote 1  This will change the students display so that they see a countdown timer indicating that they have 5 - 4 - 3 - 2 - 1 seconds left to answer the question. Once the timer reaches 0 the students question will be disabled so they can no longer answer.    Enable Discussion  clicking this button tells the system to select partners for each student. Ideally it will choose a partner that has answered the question differently. It will then open up a chat box on the students page where they can engage in conversation with their peers. During this time you will be able to consult the page labeled \"Extra\" in This page is designed to be simple so you can bring it up on your phone or table and lets you monitor the percent of students that have answered the question correctly.    Start Vote 2  This will clear the students previous answer and enable the question so the student can answer again. During the voting period you can keep an eye on the number of answers to guage when to stop voting. You can also consult the second instructor display labelled extra in    Stop Vote 2  This begins a countdown timer to stop the second vote.    Next Question  Clicking this button changes the question displayed on your screen as well as your students.      The instructor interface for peer instruction     "
},
{
  "id": "peer_assignment_selector",
  "level": "2",
  "url": "peer_instruction-3.html#peer_assignment_selector",
  "type": "Figure",
  "number": "8.1.1",
  "title": "",
  "body": " The peer instruction assignment selector   "
},
{
  "id": "pi_instructor",
  "level": "2",
  "url": "peer_instruction-3.html#pi_instructor",
  "type": "Figure",
  "number": "8.1.2",
  "title": "",
  "body": " The instructor interface for peer instruction   "
},
{
  "id": "peer_instruction-4",
  "level": "1",
  "url": "peer_instruction-4.html",
  "type": "Section",
  "number": "8.2",
  "title": "Creating Peer instruction Assignments",
  "body": " Creating Peer instruction Assignments  We covered creating assignments in . There are a couple of things to note about using that interface to create a peer instruction assignment.  You need to check the peer instruction box to make it a peer instruction assignment  Peer instruction assignments can only have multiple choice questions. We may add other question types in the future but for now this limit exists.  You are not limited to the question in your textbook, we have loaded a couple of question banks designed to be used with peer instruction. You can search for questions in the question banks by unchecking the box that limits your search to your course and searching for \"peerwiseqb\" for the PeerWise question bank, or \"canterburyqb\" for question in the Canterbury Question bank. More questions are being added all the time.  If you want to grade your peer instruction assignment you must set up your questions correctly.  You must set the Auto-Grade column to either Peer or Peer+Chat . Setting this column to Peer will give the student credit if they have answered both vote1 and vote2. Setting it to Peer+Chat will give them credit if they have voted for vote1, interacted with their parter(s) through chat, and voted in vote2.  The Which to grade field must be set to All Answers This is because peer assignment grading is unique in that the student is getting credit based on multiple interactions with a question not just a single check for correctness.      "
},
{
  "id": "peer_instruction-5",
  "level": "1",
  "url": "peer_instruction-5.html",
  "type": "Section",
  "number": "8.3",
  "title": "Virtual Peer Instruction Workshop",
  "body": " Virtual Peer Instruction Workshop  In the Spring of 2022 we hosted a virtual workshop on using the peer instruction interface. You may find the video useful in seeing peer instruction in action from both the instructor as well as the student perspective.   "
},
{
  "id": "InstructorGuide-12-1",
  "level": "1",
  "url": "InstructorGuide-12-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "  "
},
{
  "id": "help-and-support",
  "level": "1",
  "url": "help-and-support.html",
  "type": "Section",
  "number": "A.1",
  "title": "Help and Support",
  "body": " Help and Support  There is a help and documentation area built into the Instructors Page on Runestone Academy. That may be where you found this Instructors Guide . This is a good place to start. If you can't find the answer to your question here or in one of the videos then that is a bug that needs to be fixed.  The implementation of Runestone is opinionated that is, it is informed by my own expereiences and preferences as a teacher, as well as the experiences and preferences of some core contributors. It is difficult for a system like this to be all things to all people without imploding on itself under the weight of a thousand different configuration options that make many things possible, but almost nothing good, and nobody happy. It may not work the way you think it should but over the years it has proven do be able to do most of what people really want. So maybe give it a chance.  There are a few ways to get help besides this guide.   There are various Google Groups with more or less activity for many of the books. Asking in one of those groups is great. Searching the group to see if someone has already asked the question is also good.                            This is very low volume – legacy group.      Join our . There is almost always someone live and available on the discord. So if you have something truly urgent that might be a good option.    "
},
{
  "id": "drop-in",
  "level": "1",
  "url": "drop-in.html",
  "type": "Section",
  "number": "A.2",
  "title": "Weekly Drop-Ins",
  "body": " Weekly Drop-Ins  There are two opportunities each week to ask questions of the development team. You can find our current schedule on . The link is always the same and is always provided as a reminder in the discord channel. The Zoom meeting is at .  Since May 2020 there has been a standing weekly online gathering of PreTeXt and Runestone authors and developers. It runs on Friday afternoons for three hours and is announced Friday mornings on the pretext-announce Google Group. Sometimes there are scheduled discussions on development topics or seminars on topics of interest to authors and developers; but mostly there is no agenda and no schedule. Come late, leave early, drop-in, drop-out. If you are present, then you are implicitly available to help someone with questions, even if you are working on something yourself. The rest of us may lurk and\/or join in. We can use break-out rooms if a subgroup wants to run a discussion, work on a targeted project, or help somebody get started one-on-one. The model is the hotel lobby after dinner at a workshop, but you provide your own contraband.  So this is a great place to discuss a support question (likely with the person who wrote the code!) or a place to get involved with development.  "
},
{
  "id": "github-issues",
  "level": "1",
  "url": "github-issues.html",
  "type": "Section",
  "number": "A.3",
  "title": "Feature Requests and Reporting Problems",
  "body": " Feature Requests and Reporting Problems  We welcome feature requests and of course problem reports. The best way to make Runestone Academy better is to listen to the people who are using it every day.  We use the extensively for proposing and discussing new features as well as for reporting and investigating bugs. This is the place to report problems. Github is well known and trusted and it is free to sign up. Please do not use personal email to report problems .  It is not that we do not like to engage with people one-on-one it is simply a matter of trying to optimize our time. Many many bug reports are duplicates, for which there are already documented workarounds on Github if you just take the time to search.  Part of being an open source project is that we do our work in the open, and try to leverage the efforts and knowledge of the entire community. Sending a personal email to me may be satisfying or easy for you, but in many cases there are others who can help and fix the problem just as fast or faster than I can.  For every problem that can be fixed by someone else that leaves me more time to work on the really hard problems that other people cannot.    When reporting a problem please please take the time to give us some context and some details. Telling me that X does not work doesn’t really help. The truth is runestone.academy gets over 500,000 page views a day from people around the world. So most of the time when someone says “X does not work” it does in fact work fine for most people. This does not make it your fault, it just means I need more information to try to make sense of what is going on. Here are a few tips.  What Task are you trying to accomplish? Understanding your goals is really important as sometimes its not obvious how to do something on Runestone  What steps did you take to try to accomplish that task? Walking me through the steps gives me valuable context and saves me TONS of time in trying to recreate what went wrong.  Specifically what went wrong? What error message did you see? What exactly did happen that you think should not have happened. You can speculate about what you think is broken, but often you will be wrong and misleading. Just the facts is a great policy.  Give some context about your environment. What course are you in? What is your username? What page of the course? Specifically what exercise does not work? Each activity has a unique identifier. please include that. What browser are you using? What version of the browser. (Runestone relies on many modern features of Javascript that are only present in new-ish browsers) We can not test every browser so if you are using something outside of Chrome, Firefox, Safari, or maybe Edge it is likely that I have not tested it there.  If there is a traceback on the page, please copy it and include it in your Github Issue. Many many errors can be quickly diagnosed from the Javascript Console error log.  Chrome: View --> Developer --> Javascript Console  Safari: ⌥⌘i or Develop --> Show Web Inspector  Firefox: Tools --> Web Developer --> Toggle Tools       Please note, I'm not trying to be rude, but years of observation have taught me that CS teachers are pretty bad bug reporters! Imagine if a student sent you the following email:  Hey, You know problem 2 for the homework next week. My program just doesn't work. I'm pretty sure I've done everything right. Can you tell me how to fix it? Thanks, Student  You wouldn't be able to help this student very much, in fact you probably wouldn't have any idea what program that student was even asking about without spending your own valuable time figuring it out. Sadly, It is a pretty good representation of thousands of bug reports I've received. So please, take a few seconds and read or re-read Filing an effective bug report. Thanks.  "
},
{
  "id": "contributing",
  "level": "1",
  "url": "contributing.html",
  "type": "Section",
  "number": "A.4",
  "title": "Contributing",
  "body": " Contributing  As a project that is licensed openly, we welcome contributions. And this does not necessarily mean you need to learn Javascript or Python or XSL. For ideas, find the issues on GitHub that have the label good first issue and\/or help wanted . Upating this guide, recording screen casts to replace the 11 year old screen casts in some of our books are examples of non-coding tasks that would be amazing.  "
},
{
  "id": "faq",
  "level": "1",
  "url": "faq.html",
  "type": "Section",
  "number": "B.1",
  "title": "Frequently Asked Questions",
  "body": " Frequently Asked Questions   Why Can’t I access the Instructor Page?    How do I become an instructor?     I seem to have a student account, how can I get\/create an instructor account?    I created an instructor account but…     First lets clear up a couple of misconcptions. There is no way for me to know, just by your email address that you are an instructor. You could be anyone. So, there is no such thing as an instructor account. Accounts can have various roles including: student, instructor, author, editor, and administrator.  You get the instructor role by creating a course. This gives you the privileges associated with being an instructor but ONLY for that course and any other course(s) you create. You are not an instructor for any of the open courses or anyone else’s course. There is a really nice video to help you get started in the Instructors Guide Please check it out as it will answer many other questions and help you make the most of Runestone.    How do I learn more about the instructor interface  I have made a very informal set of videos for just this purpose.  We also have a nice new Instructor Guide     Help! I cannot log in. Every time I try to log in, I have to reset my password!  In 99.99% of the cases, this is because you are confusing your email address with the username you were forced to enter when you register. So, go through the password reset process and get yourself logged in again. Then look in the upper right hand corner of the page and pull down the user menu (the one that looks like a person.) Your username will be displayed at the top of that menu. We use username instead of email address to protect the privacy of our users.    I’m not getting the password reset email, can you reset my password?  Technically, I can. But I won’t. Runestone handles over 100 password resets a day automatically. It can handle yours as well. There are two things you should check.     Check your SPAM folder for the password reset email. and\/or add runestone to your contacts list to avoid that in the future.    Talk to your IT folks and make sure they are not blocking Runestone. We’re a small group, but we did everything right with our email setup to make the military academies happy, so I think your folks ought to be happy too. However some schools disallow any external email that is not whit-elisted. Please ask them to white-list runestoneinteractive@gmail.com as well as info@runestone.academy     If you are a student, talk to your instructor. Your instructor can reset your password in the case where the email system is failing us.       I can’t log in to my Coursera course, what do I do?  Sorry, but we do not have control over Coursera and especially the courses from UMSI. Those courses are designed for you to access through Canvas. If that is not working please contact your coursera instructor.    How do I add students to my course?  See this post for a detailed description: Privacy and Runestone You invite them, either in class or with an email. Tell them to register at runestone.academy and then give them the name of the course you created. During the registration process they type in the name you used, and they are registered. I usually just do this the first day of class to make sure everyone gets registered and then give them a little tour of the book and all of the things they can do.  In the future, we may look into importing a class from some LMS system like Moodle and others.    What do those green checkmarks and orange circles mean?  A green checkmark for a page means that you have completed that page, either you have satisfied yourself that you are done OR you have attempted all of the interactive activities on that page. It does NOT mean you got everything correct. Clicking the button bottom of the page WILL NOT give you full credit on a reading assignment, you still need to do the work.  Historically this was ONLY for your own personal benefit to help you keep track of the things you had read and the things you were currently reading. It has evolved and with that evolution comes some confusion. Hopefully this clears it up.    How come there is no Green Checkmark for the Exercises pages?  Some exercises pages have over 300 problems. Do you really think we expect you to do ALL of them? We expect your instructor to use some discretion when assigning you homework. You will not find green checkmarks for Exercises or for table of contents pages.  Sorry if that freaks you out, but that is just how we do it.    Where do I find answers to all the homework questions?  In my years of teaching computer science I was always learning something new and trying to stay ahead of the students. I understand that for many of you this might be a first time teaching a CS course, and that for many you are overworked and underpaid. I hear you, and I feel your pain.  But just as I tell my students, you can’t really learn this stuff just by reading the answer, you have to do it.  We have many books on Runestone Academy written by many authors. Whether or not authors provide an instructor guide or answers to all the questions is up to them. So there is no blanket answer to the question.  For myself there are several reasons:     Writing an instructor guide that contains all of the answers to the questions essentially doubles the work of writing a book, and even more so maintaining the book. In all the textbooks I’ve used over the years for CS I’ve only ever had one that had a solution guide and that was largely for all of the math in a networking text.    For 99% of the questions there is no one right answer. Very likely if I give you an answer there is a better one out there, and I really don’t want to get into arguments about what is better. Especially since a lot of it comes down to style.    Doing the work is the best way to prepare to teach it. You are smarter, wiser, and a better problem solver than your students. Its actually good for them to see how you approach solving the problem rather consulting some answer key.    From a practical perspective it would be very hard for me to decide who gets the materials. How do I know you are an instructor? I can’t possibly take the time to go check out every user that claims to be an instructor to see if they are legit. Right now the only benefit of being an instructor is that you get to see and grade the work of your students. If you are a student pretending to be an instructor this gives you no advantage.    As I think about how best to invest the hours of my day that I have to work on this, I have very little energy or excitement for writing an answer key. So I choose to spend my time elsewhere. If others were to do so, and want to publish it somehow, I would be very happy to accept a PR!    I wold much rather put my energy into developing good unit tests, so that you know when you are right and when you are not there yet without me giving you solution.    With all of that, behind me, I’m still thinking about it, and trying to find a way to do it where its NOT a huge amount of extra work, and I can keep things in sync. I’ve thought about charging for the instructor guide as one way to both disuade casual cheaters and to help fund Runestone development. Stay tuned…       Can I build my own course and host it here?  Yes, we are currently hosting many courses for many different institutions around the world. In fact in 2013 one large institution had 800 students using one of the books.  The best approach is to use our system to build your own textbook. This gives you several advantages as an instructor including:     a simple grading interface for homework problems at the end of each chapter    some simple reports on your students activities within the textbook.    at a glance information about the multiple choice and fill in the blank questions embedded in the text.       How do I build my own course?   Steps to Build     First you should register yourself as a user on this site. When you register you must pick a course. Just use thinkcspy or pythonds, it doesn’t matter as that will change when you build your own.    Then go to the instructors page .    On this page you will see the links for listing and grading assignments and lots of other things. Right now those won’t show you anything, so move along to the Create a Custom Course link.    Fill in the Project Name. This should be a short one word description of your course like luther150a. When your students register for the course this is the name they will have to type in to join your particular course. No Spaces allwed in this name.    The description can say a bit more about the course.    Choose one of the ready-made books for your course.    Its probably just fine to leave this at today’s date. If you set it into the future and then do some experimenting with assignments and quizzes today you won’t be able to see your results because you are only shown things that come after the start date.        Is this site reliable enough to use in class?  Yes. We host this on a very reliable service and we monitor our traffic constantly. We use a content distribution network for increased scalability and reliability. In the Fall of 2020 we serve over 50,000 students a day with no downtime. Runestone is also used for a couple of courses on coursera which have hundreds of thousands of students, and by many large Universities.    Why did you change domain names?  The old domain name, “interactivepython.org” was becoming quite inacurate. Although we started with Python we have a lot of users that are using the AP CS Review book (Java) and my Java for Python programmers book. There is also at least one statistics textbook written in runestone as well. I saw the domain name “runestone.academy” and thought that would be cool.    I want to reuse my course from last year, what should I do?  You should create a new course and then from the instructor page in the new course copy the assignments from your old course. The assignment dates will be adjusted based on the class start date.  The instructor interface allows you to copy all your assignments from a past course into your current course, so re-using an old assignment is pretty simple. It even re-calculates a due date for your based on the delta between your old term start date and when you had the assignment due that term.    How do I update my course to get the latest bug fixes?  Nothing. Bug fixes are automatically deployed weekly.    I was just experimenting and I want to delete my course  Once you are done experimenting please delete your course from the instructors interface. If this does not happen I may have to invent a way to go back and remove courses that were clearly created as an experiment but never really used by students.    What if I want to add a new section or chapter?  That would be awesome. This whole book is open source. You can grab a copy of the source on github . The source for thinkcspy and pythonds is in the source folder and there is a subfolder for each chapter. If you want to make a whole new chapter then create a folder and follow the conventions of one of the other chapters. There is full documentation for the markup language at PreTeXt Guide . When you are finished make a pull request and we’ll review your material and incorporate them into the book.    What if I want to add my own exercises?  You can add your own custom exercises by editing the assignments.rst file. This file is meant for the descriptive or question text for a programming exercise. Adding an exercise to this file does not automatically add it to the grading interface for your course, you still need to do that from the instructors interface. See this blog post for more information.  New exercises are always welcome and we would love to expand the number of exercises. The simplest way is to go to the github issues page and file a new issue. In the description simply include the text for the exercise and which chapter you think it should go in. We’ll take it from there. After we’ve added the exercise you can rebuild your book and it will be there.    My students are completing work but it is not showing up. Help!  There are many answers to this, as the question itself is very vague. Where is it not showing up? What is not showing up? The first thing to say is that Runestone goes to great lengths to save everything! It is extremely rare for an action to go unrecorded. With that said here are things to check.     Make sure your students are logged in to YOUR course and not the open course that you based yours on. If your student is logged in to your course they will see the name of your course in the upper left corner of the browser window.    Make sure they are paying attention to the progress bar. If the progress bar is gray they are not logged in! If it is green they are. The progress bar will show how many of their activities have been recorded for that page.    Check the assignment page and click on the self grade button. This is yet another way that students can verify their work has been saved.    For students work to show up in the gradebook you will need to use the grading interface to run the autograder which tabulates the scores for the assignment and saves them in the database. You also need to release the grades in order for the students to see them on the student progress page. If you haven’t released them then they will not see their progress.    Make sure your assignment deadlines are set up correctly or that you have unchecked the box to only count activities before the deadline.    From the student progress page you can click on the name of any student and see the raw log details. You can also click on the overview reports link from that page and download a CSV file that you can import into your favorite spreadsheet. This will show you counts of activities for each student, the timestamp of the first time a student interacts with anything in runestone and more.       How do I change courses or register for an additional course?  Under the 👤 menu you will find the Change Course option. click on that and then at the bottom of the page click on the Enroll in a Course button. From there you can just enter the new course in the Course Name field.    What course name should I use when I register?  If you are enrolled in a course at a high school, college or university your instructor should give you the name. If they didn’t you need to ask them. If you are learning on your own, The registration page gives you the full list as does our library page. But here are the legal, open, courses that anyone can sign up for. Since you are here you didn’t see that so here is the list:     apcsareview    cpp4python    cppds    csawesome    fopp    httlads    java4python    JS4Python    learnwebgl2    overview    pythonds    pythoned    StudentCSP    TeacherCSP    thinkcspy    webfundamentals       What version of Python does your book use?  Ok, this is a question that has the potential to start nasty religious wars. The technical answer is that this book uses a version of Python called Skulpt . It is entirely written in Javascript so that it runs right in the browser. We think this is very cool. Now some people get all crazy about whether they should teach Python 3 or Python 2. The truth is that for CS1 and CS2 it really does not matter. Skulpt can do print with or without parenthesis, and \/ can do true division or integer division and lets face it for CS1 that is really all that matters. Sure, there are differences, but are you really going to start out by teaching your students about dict_keys and how they are different from a list . If so, I think you are cruel and you should teach your students APL. If you want to slant your teaching toward Python 3, you can do that with this book. If you want to lean towards 2, you can do that too. When you build your course there is a configuration parameter that lets you choose Python3, this forces you to use parenthesis when you print, and it makes python \/ default to true division, and \/\/ to integer division.    I think there is a bug in your book what should I do?  Please let us know! You can file bug reports on our github issues page . Thanks! If you don't have a github account then join us on our Discord channel.    I have a question that is not covered here!   Contact     Tweet me @iRunestone    Post the question on our google group    Send me a private email. runestoneinteractive@gmail.com         My Internet is slow, I want to use Runestone offline  This might require a little extra learning on your part but here is what you need to do. If you can’t get this to work on your own ask your teacher for some help.     Install Python    Use pip to install runestone (pip install runestone)    Download or use git to clone the repository for your book from https:\/\/github.com\/RunestoneInteractive     Edit the pavement.py file for your book and set dynamic_pages = False and useRunestoneServices=False    In the folder created for your book run runestone build –all     6. Run the command runestone serve and then in your browser go to http:\/\/localhost:8000 This will let you access your book from a webserver running on your own computer, It will save your work locally, as long as you use the same browser.  But it will NOT share or sync any information with Runestone.academy    Why can’t I just get a PDF?  Because what we are focused on is building great interactive textbooks, pdfs are not interactive. Update!! Our partnership with the PreTeXt team allows us to build books in many formats including PDF. If your book has been converted there is a good chance we can get you a PDF.    How does Runestone handle timezones?  Very well thank you! Every student interaction is logged to the runestone database using UTC time. When you create an assignment with a deadline store the time in the timezone of the instructor making the assignment as the deadline. Given that we can fairly judge whether a student has completed their work on time. Trust me we have figured this out over the years and learned a lot about time zones. Did you know there are places in the world where there are half or quarter hour differences between two timezones??!!  I realize that students will often complain that they had their work done on time but the darn Runestone would not give them credit. Usually they are wrong. But you have several ways of checking out their claim including downloading the log for your course or looking at the Student Activity report and checking their first and last interactions with the problem. The software has proven itself to be correct way more often than the students and we use one of the most reliable databases in the world (Postgresql) to keep track of student activities!   "
},
{
  "id": "_what-do-those-green-checkmarks-and-orange-circles-mean-2",
  "level": "2",
  "url": "faq.html#_what-do-those-green-checkmarks-and-orange-circles-mean-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "attempted "
},
{
  "id": "_how-do-i-build-my-own-course-2",
  "level": "2",
  "url": "faq.html#_how-do-i-build-my-own-course-2",
  "type": "Note",
  "number": "B.1.1",
  "title": "Steps to Build.",
  "body": " Steps to Build     First you should register yourself as a user on this site. When you register you must pick a course. Just use thinkcspy or pythonds, it doesn’t matter as that will change when you build your own.    Then go to the instructors page .    On this page you will see the links for listing and grading assignments and lots of other things. Right now those won’t show you anything, so move along to the Create a Custom Course link.    Fill in the Project Name. This should be a short one word description of your course like luther150a. When your students register for the course this is the name they will have to type in to join your particular course. No Spaces allwed in this name.    The description can say a bit more about the course.    Choose one of the ready-made books for your course.    Its probably just fine to leave this at today’s date. If you set it into the future and then do some experimenting with assignments and quizzes today you won’t be able to see your results because you are only shown things that come after the start date.     "
},
{
  "id": "_i-have-a-question-that-is-not-covered-here-2",
  "level": "2",
  "url": "faq.html#_i-have-a-question-that-is-not-covered-here-2",
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
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
