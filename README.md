SignTyp Imaging Project -- sgn_typ_presentation
===============================================

A node.js application front-end for the SignTyp Imaging Project. This is what the user will actually see.

Getting started:
================

A database backend is needed and will be provided separately. An installer package will be provided
at a later date to do all the required software installation for the users. If you want to manually
install this application, follow these steps.

Initial Setup (do this one time only):

 1. Download and install the latest node.js software for your platform from nodejs.org.
 2. Download and install the latest git software for your platform from http://git-scm.com/
 3. Download (git clone) the database backend which is also on Github as https://github.com/BobCochran/sgntyp_db.git
 4. Follow the installation instructions in that project. The database server must be running for this
    project to run correctly.
 5. Download (git clone) this package.
 6. In a terminal window or a command prompt, navigate to the sgn_typ_presentation directory.
 7. type 'npm install' without the quotes, and press the <enter> key. There will be quite a lot of
    text output on the screen as software components are downloaded and installed into the
    node_modules directory. This is normal.

Normal application startup (done each time you wish to start the application)

 1. To start the application, type 'node app.js' from the sgn_typ_presentation directory.
 2. Open the Firefox or Chrome web browsers and in the address bar, type


    http://localhost:3000/

Application Updates:
====================

To receive application updates, first stop the application server if it is running.

Navigate to the sgn_typ_presentation directory in a command prompt or terminal window and type


git pull

Restart the application server using the procedure for "normal application startup".

For support, please contact Bob Cochran on r2cochran2@gmail.com.

