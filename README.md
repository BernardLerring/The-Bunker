# The Bunker

## The Bunker Website

This is the main website for the golf photography website The Bunker. This website was inspired by my favourite hobby, and the fact that the design and colours on golf courses can make for some beautiful photos!

![Responsive Images](/readme_images/responsive.png "Responsive Images")

## User Experience

### Site Aims

![Flow Diagram of User Experience](/readme_images/flowchart.png "User Experience")

### User Stories

![User Stories](/readme_images/userstories.png "User Stories")

### First time user goals

- First time users should be able to easily navigate the site and view the content on any device.

- 

- 

- First time users should be able to view the post in more detail

- First time users should be able to sign up to the site and create an account.

### Returning user goals:

- As a returning user I want to be able to like and comment on posts.

### Frequent user goals:

- I would like to see regular new content from users.

- I would like to see new features added by the admin from time to time.

- I want to see only comments that are appropriate for a golf website.

## Design

### Colour scheme:

The main colours used are pastel shades of green and brown. These are coupled with a light yellow that serves as the light background for much of the site. It gives the site a more organic feel than clinical bright colours, and they are colours associated with a golf course. I found the palettes for this at [iColorPalette] (https://icolorpalette.com/palette-by-themes/golf-course).

### Fonts/Typography:

The main font used across the whole site is Barlow. It fits well with the colour scheme, and again, is less clinical than some more modern looking typefaces. It's fallback font is Sans Serif.

### Images:

Being a photo website, images of the courses/holes are important. However, as the posts will be created by users of the site, it will be dependent on the quality of photo taken by the user as to the finished result.

## Wireframes/Sketches

- Desktop Site



- Mobile Site



- Post Detail page



## Features

- Responsive on a variety of devices.

- Regularly updated content.

- Commenting and liking features for signed up users.

### Header/Navigation

- Logo/site title is in the top left of the screen. Pressing on it will link you back to the top of the homepage.

- To the right of the bar is the remaining navigation links. Home, Register and Login. Once the user is logged in, this changes to Home and Logout. On smaller devices, the navbar drops down to a hamburger menu for better user experience on mobile. 

- The background colour, and the font colours chosen stand out well making it easy for the user to see where they are and what they are doing.

- The navigation makes it clear to the user what can be accessed on the site.

![Header and Navigation](/readme_images/navbar.png "Header/Navbar")

### Recipes

- The recipes load 6 to a page, with pagination to allow users to move to "next" and "previous" pages once 6 has been reached.

![Recipes](/readme_images/recipesmain.png "Recipes")

- When a recipe is clicked on you get the recipe detail, including the ability to comment and like a recipe (if registered/signed in)

![Recipe Detail](/readme_images/recipedetail.png "Recipe Detail")

### Pagination

- The site has infinite scroll with no buttons, and once 10 posts are loaded, you can just continue scrolling to the next post.

### Sign Up 

- The form indicates the required fields of Username, Email (optional), a password and then to re-enter password to confirm they match.

![Registration/Sign-up page](/readme_images/register.png "Registration/Sign-up page")

### Sign In

-

## Technology used

### Languages used

- HTML 5 

- CSS

- Python 3.8

- Django

- Bootstrap 4

### Frameworks, libraries and programs used:

- Google Fonts. Both main fonts used throughout the site are from the [Google Fonts](https://fonts.google.com/) repository.

- Font Awesome. All icons used through the site are imported from the directory at [FontAwesome](https://fontawesome.com/).

- [GitHub](https://github.com/) was used to host the repositories and for site deployment.

- [GitPod](https://gitpod.io/) was used for all writing of code.

- :hover and :active pseudo classes were used to change colours on links adding to the User Experience.

- Cloudinary

## Testing

- I confirmed that the site is responsive on a variety of device sizes through DevTools.

- I confirm that the colours and fonts all contrast and allow the user to easily navigate the site.

- I confirm that multiple users can be signed up to the site.

- I confirm that both the comments and like features function as expected.

- I confirm that the site works in both Safari and Chrome.

- Images below show the sign-up process

![Registration page](/readme_images/register.png "Register")

![Registration page completed](/readme_images/registrationpagecompleted.png "Registration page completed for submission")

- Once the user is signed up, they have the ability to comment or like recipes

![Comment Box](/readme_images/comment.png "Comment Box")

- They can also "like" recipes

![Likes](/readme_images/likes.png "Likes")

- The comment, once approved by Admin appears on the site

![Approved Comment](/readme_images/approved.png "Approved Comment")

- Users can sign out of their account

![Sign Out Page](/readme_images/signout.png "Sign Out")

- Returning users can sign in

![Sign In Page](/readme_images/signin.png "Sign In")

## Fixed Bugs

- All Bootstrap classes resolve flow and sizing issues on smaller devices.

- Users cannot submit empty fields on the registration form.

## Unfixed Bugs

- HTML errors from W3C validator that don't affect site functionality.

- Having removed the inline styling on the masthead image, the size of this image changed.

## Creation and Deployment

The site was created in Django using the following steps:

1. In the terminal window, of the CI template, install Django and gunicorn using the command "pip3 install 'django<4' gunicorn"

2. Install supporting libraries using the command "pip3 install dj_database_url psycopg2"

3. Install Cloudinary to store image files using the command "pip3 install dj3-cloudinary-storage"

4. Create a requirements.txt file using the command "pip3 freeze --local > requirements.txt"

5. Create the project and give it a name using the command "django-admin startproject PROJ_NAME ." The . is important!!

6. Create the app and name it using the command "python3 manage.py startapp APP_NAME"

7. in your settings.py file, add to the installed apps section: 

INSTALLED_APPS = [
    …
    'APP_NAME',
]

8. Save your file

9. Back in the terminal window, migrate your changes using the command "python3 manage.py makemigrations" followed by "python3 manage.py migrate"

10. Run the server to test that your app had built using the command "python3 manage.py runserver"

To deploy the app to Heroku, use the following steps:

1. Sign up to Heroku

2. Click on the "create new app" button.

3. Create a new app with the format "APP_NAME". Don't forget to pick your location as Europe.

4. Add a database to app resources by clicking on the resources tab on your app dashboard and search for and add "Heroku PostGres".

5. Copy the DATABASE_URL value into your config vars section located under the settings tab in your app dashboard byt clicking "Reveal Config Vars".

6. Back in gitpod, create a new env.py file in the top level directory.

7. Inside the env.py file, import os library byt writing "import os" at the top of your code.

8. Set environment variables using the following syntax: os.environ["DATABASE_URL"] = "Paste in Heroku DATABASE_URL Link"

9. Add in a secret key using the following syntax: os.environ["SECRET_KEY"] = "Make up your own randomSecretKey"

10. Back in your heroku dashboard, add the secret key to your config vars by using "SECRET_KEY, “randomSecretKey”" and giving your secret key a set of numbers for a value.

11. Back in settings.py, reference env.py using the following syntax: 

from pathlib import Path
import os
import dj_database_url

if os.path.isfile("env.py"):
   import env

12. Remove the insecure secret key and replace with the secret key from Heroku. 

SECRET_KEY = os.environ.get('SECRET_KEY')

13. Comment out the old DataBases Section.

14. Add in a new databases section using: 

DATABASES = {
   'default': dj_database_url.parse(os.environ.get("DATABASE_URL"))
}

15. Back in the terminal window, make your migrations again using the "python3 manage.py migrate" command

16. In the Cloudinary app that you have been signed into, copy the URL you have been given from the Cloudinary dashboard.

17. Back in env.py, add it using the following syntax: os.environ["CLOUDINARY_URL"] = "cloudinary://************************"

18. In Heroku, add the Cloudinary URL to config vars in the settings tab. 

19. Add "DISABLE_COLLECTSTATIC" to the Heroku config vars. This will be removed before final deployment.

20. In settings.py, add the Cloudinary libraries to installed apps: 

INSTALLED_APPS = [
    …,
    'cloudinary_storage',
    'django.contrib.staticfiles',
    'cloudinary',
    …,
]

The order in which these are written is important.

21. Tell Django to use Cloudinary to store media and static files
Place under the Static files Note: STATIC_URL = '/static/'

STATICFILES_STORAGE = 'cloudinary_storage.storage.StaticHashedCloudinaryStorage'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

MEDIA_URL = '/media/'
DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'

22. Link your fiule to the templates directory in Heroku. Place it under the BASE_DIR line. 

TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')

23. Change the templates directory to TEMPLATES_DIR and place within the TEMPLATES array. 

TEMPLATES = [
    {
        …,
        'DIRS': [TEMPLATES_DIR],
       …,
            ],
        },
    },
]

24. Add Heroku Hostname to ALLOWED_HOSTS: 

ALLOWED_HOSTS = ["PROJ_NAME.herokuapp.com", "localhost"]

25. Back in GitPod create 3 new folders at the top level directory for Media, Static and Templates.

26. Create a procfile on the top level directory. 

27. In you procfile, add the following code: web: gunicorn PROJ_NAME.wsgi

28. Back in the GitPod terminal window, Add, Commit and Push your code. 

git add .
git commit -m “Deployment Commit”
git push

29. Back in Heroku, deploy the content manually through Heroku by using GitHub as the main deployment method on the main branch.

30. Once you have then built your app, styled it, and written all code, go back to Heroku and click on "Deploy Branch"

31. The build will happen in front of you, and once it has successfully built your app, you can click on "Open App" to take you to your live site.
TheRoad live site, click here [ThymeOnTheRoad](https://thymeontheroad.herokuapp.com/)

## Credits

### Content

- All images on the site are the work of Ariel Rose Wright

- All icons on the site are taken from [FontAwesome](https://fontawesome.com/).

- The font used on the site is from [Google Fonts](https://fonts.google.com/).

- The framework used for the recipe site is from the Blog Walkthrough at [Code Institute](https://codeinstitute.net/).

### Media

- The pagination idea is taken from the Code Institute Blog Walkthrough Project.

### Future Development Opportunities

## User Focused

- A form could be added so that users can submit their own recipes in the same format as the site, for future addition to the site with admin approval.

- The site could have further sections for types of cuisine, time taken to cook recipes so users could make a simpler journey round the site to choose what/how they want to cook.

- Videos could be added to each recipe of the cooking method.

- Clicking on the "Recipes from time spent travelling and cooking" could link to an "About" section with info about the site oweners.

## Developer Focused

- Automated tests could be written and used to test site functionality.

### Thanks

- My wife for being my UX companion for the site and for helping test it for me, as well as providing the artwork.

- My mentor Chris for his feedback and encouragement throughout the project.