# To-do Web Application

Create create a Todo List web application with user authentication features. Users should be able to sign up for an account, log in, and manage their tasks.
Instead of a backend server and database, I used local storage to simulate user accounts

#### take a look

hosted link1 - https://to-do-web-application.netlify.app

hosted link2 - https://master--to-do-web-application.netlify.app/


## Features

#### 1. User Authentication :

```
- Implement user registration (signup) and login functionality.

- Users should be able to sign up with a username and password.

- Users should be able to log in with their credentials.

- Use forms for both registration and login.
```

#### 2. Authentication State :

```
- Manage user authentication state using React state.

- Implement protected routes to ensure that only authenticated users can access certain parts
  of the application (e.g., the todo list).
```

#### 3. Task Management :
```
- Users should be able to create, edit, mark as completed, and delete tasks.

- Tasks should be associated with the logged-in user.

- Tasks should persist in local storage, so they are not lost on page refresh.
```

#### 4. Logout :
```
 - Implement a logout button that allows users to log out of their accounts.
```

#### 5. User Interface :
```
- Create an intuitive user interface with a clean design for both the authentication and todo list
  parts of the application.

- Display a list of tasks, each with options to edit, mark as completed, and delete.
```

#### 6. Error Handling :
```
- Provide user-friendly error messages for scenarios such as incorrect login credentials, registration errors, or failed task updates.

- Security Considerations:
```

#### 7. User-Specific Data :
```
- Ensure that each user can only see and manage their own tasks after logging in.

- Tasks should be associated with the user who created them.
```


## How to setup on local machine

1. To use this repository your machine should have [node](https://nodejs.org/en/), npm,  and git . Now check for this things is install or not :

```go
node --version
npm --version
git --version
```

2. Clone repository :

```go
git clone  https://github.com/Honeshwar/todo-web-application.git

cd todo-web-application
```

3. Install dependencies :

```go
npm install
```

4. Now, run the application using this command :

```go
npm start
```

# " Now , Website is running "

## how to add user

```
1. Use signUp page  to register user (you can user add as many as you want).

2. Using that user credentials, go to signin page and singin yourself there,

3. Than when you hit signin button, a session is created in local storage,

4. Now, your are at home page of todo web application.
```



## Project Screenshots

- SignIn and SignUp pages Screenshots

  ![App Screenshot](https://honeshwar.github.io/todo-web-application/src/assets/images/1.png)
  ![App Screenshot](https://honeshwar.github.io/todo-web-application/src/assets/images/2.png)

- Home page Screenshots

  ![App Screenshot](https://honeshwar.github.io/todo-web-application/src/assets/images/3.png)
  ![App Screenshot](https://honeshwar.github.io/todo-web-application/src/assets/images/4.png)
