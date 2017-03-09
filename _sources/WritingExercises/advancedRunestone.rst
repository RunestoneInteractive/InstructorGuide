Pro Tip -- Test Your Exercises Locally
======================================

This is definitey an **advanced topic**  If you are not comfortable with the command line you can definitely skip this section.  But if you are at least somewhat comfortable with the command line and an editor then this can save you a bunch of time!  The workflow is simple, edit your questions locally, then paste them into the interface once you have them working and debugged.

Here is a short video that demonstrates how to install the runestone command in under two minutes.

        .. youtube:: QWX1eIpDBe0
            :align: left

Here are the steps I go through in the video.  This assumes you already have python installed on your system.

1.  ``virtualenv runestone``  - Creates a python virtual environment so you don't need administrator privileges to install the rest of what you need.  If virtualenv is not installed you should do ``pip install virtualenv`` (Python 2.7.x) or ``python -m venv runestone`` (Python > 3.5).  If the pip command is not found then you should upgrade your version of Python to something newer.  All modern version of Python come with pip pre-installed.

2.  ``. runestone/bin/activate`` -- this activates the virtual environment you created in the previous step.

3.  ``mkdir assignments`` -- Create an assignment to do your runestone work in.

4.  ``cd assignments``  -- Make assignments your working directory.

5.  ``runestone init`` -- Create a new project with some template directives

6.  ``runestone build`` -- Convert the restructuredText to html

7.  ``runestone serve`` -- start a simple web server so you can access your new project in your browser at ``http://localhost:8000/index.html``


Once the works you can simply edit the index.rst file created by runestone init, and run ``runestone build`` again to check your work.

