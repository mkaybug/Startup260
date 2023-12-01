# Specification
## Elevator Pitch
As a computer science major with a passion for family history, I've noticed a need in the genealogy world. Professional genealogists want a space where they can work on a project, somewhere seperate from FamilySearch where their work can't be undone by a well meaning FamilyTree co-editor. There is software available that does this in part, but it's outdated, and doesn't have all the functionality I'd like to include. My Startup project is the start of that application. I will build a research log that is easy to use.

## Key Features
The first page the user sees is the login/create an account screen. If the user does not have an account, there is an option for them to create one. Clicking the "create an account" button will lead them to another screen where they can input a new username (the program will check to make sure that username hasn't been used), password, and confirmation of that password.

After login/account creation, the user is taken to the home page which displays their research log. The application prompts the user with fields to enter research information and adds it to a research table.

## Technologies
### Authentication
The default screen is the login screen. The program will associate a user's data with the username and password created by the user.

### Database Data
Certain data will need to be stored after the user exits the program, namely, the user's username, password, and research log information.

### WebSocket data:
There is also data that will need to be generated by the program for the user to see. The program will calculate the time the user has spent on a project as well as the date they entered information. For now the user will manually enter the date.

## Sketches - Budgeting Website
![thumbnail_IMG_1205](https://github.com/mkaybug/startup/assets/144390772/77762f13-2eed-4076-9a9e-898f5e944533)
![thumbnail_IMG_1204](https://github.com/mkaybug/startup/assets/144390772/9d46d367-f29b-4cba-a789-cfa32231affd)

# HTML - Budgeting Website
I kept most things the same in my HTML implementation of my sketches. But, I did add another page for Expenses. I decided I wanted to be able to display all the expenses a user had entered, and that made more sense on a seperate page. I also haven't decided whether to include a progress bar for the savings tool. I may add that later. And I changed the layout of the MyPi page a little.

# CSS - Budgeting Website
I had to change my HTML **a lot**, turns out it wasn't functional, but I learned a lot. I completely changed my header, and decided it made more sense for my "MyPi" and "Expenses" tabs to be combined. Here are the Canva templates I made for myself before I started building the CSS. I may exclude the Pi chart completely, at the moment it isn't included in my CSS, if I can get it working, I'll include it later.
![Budgeting Tool](https://github.com/mkaybug/startup/assets/144390772/be203a83-5a21-40e3-be3a-9f3758ac5996)
![Budgeting Tool (1)](https://github.com/mkaybug/startup/assets/144390772/ed8b1cf3-79eb-4a72-84ef-6c37e2dbf573)
![Budgeting Tool (2)](https://github.com/mkaybug/startup/assets/144390772/32a3cf78-cde0-450b-ad09-7304c99bd3b5)
![Budgeting Tool (3)](https://github.com/mkaybug/startup/assets/144390772/88c5a317-7767-4e8f-b1b3-4f31a8055a8a)
![Budgeting Tool (4)](https://github.com/mkaybug/startup/assets/144390772/5f09f229-5866-4955-9be1-40c3586302e4)
![Budgeting Tool (5)](https://github.com/mkaybug/startup/assets/144390772/ace6775a-8a5c-4d8b-b907-c27dc42d3fdb)

# Service
Honestly have no idea if I did this properly, but I've tried to set up support for backend service and endpoints.
# JavaScript - Research Log Website
The biggest change I made was converting my budgeting website to a research log for genealogists. I worked out the login page to take the username and password so later I can store them in a database. I also added errors that display if the username/password is not long enough. I also added the create an account page. I implemented JavaScript on the research log page to add rows to the research log table. If I have time later I'll make it so the user can delete/edit rows as well.
