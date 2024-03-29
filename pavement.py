import paver
from paver.easy import *
import paver.setuputils

paver.setuputils.install_distutils_tasks()
import os, sys
from runestone.server import get_dburl
from sphinxcontrib import paverutils
import pkg_resources
from socket import gethostname

sys.path.append(os.getcwd())

home_dir = os.getcwd()
project_name = "instructorguide"

master_url = None
doctrees = None

if master_url is None:
    if gethostname() in ["web407.webfaction.com", "rsbuilder"]:
        master_url = "http://interactivepython.org"
        if os.path.exists("../../custom_courses/{}".format(project_name)):
            doctrees = "../../custom_courses/{}/doctrees".format(project_name)
        else:
            doctrees = "./build/{}/doctrees".format(project_name)
    else:
        master_url = "http://127.0.0.1:8000"
        doctrees = "./build/{}/doctrees".format(project_name)

dynamic_pages = True
master_app = "runestone"
serving_dir = "./build/instructorguide"
if dynamic_pages:
    dest = "./published"
else:
    dest = "../../static"

options(
    sphinx=Bunch(
        docroot=".",
    ),
    build=Bunch(
        builddir="./build/instructorguide",
        sourcedir="_sources",
        outdir="./build/instructorguide",
        confdir=".",
        project_name=project_name,
        template_args={
            "course_id": "instructorguide",
            "login_required": "false",
            "appname": master_app,
            "dynamic_pages": dynamic_pages,
            "loglevel": 10,
            "course_url": master_url,
            "use_services": "false",
            "python3": "true",
            "dburl": "",
            "basecourse": "instructorguide",
            "downloads_enabled": "false",
            "default_ac_lang": "python",
            "enable_chatcodes": "false",
            "allow_pairs": "false",
        },
    ),
)

version = pkg_resources.require("runestone")[0].version
options.build.template_args["runestone_version"] = version

# p If DBUSER etc. are in the environment override dburl
# options.build.template_args["dburl"] = get_dburl(outer=locals())

from runestone import build  # build is called implicitly by the paver driver.

template_args = {
    "course_id": "instructorguide",
    "login_required": "false",
    "appname": master_app,
    "dynamic_pages": dynamic_pages,
    "loglevel": 10,
    "course_url": master_url,
    "use_services": "false",
    "python3": "true",
    "dburl": "",
    "basecourse": "instructorguide",
    "downloads_enabled": "false",
    "default_ac_lang": "python",
    "enable_chatcodes": "false",
    "allow_pairs": "false",
}
