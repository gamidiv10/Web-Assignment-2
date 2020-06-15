# Assignment 2

* Date Created: 10 06 2020
* Last Modification Date: 14 06 2020


## Author

* Vamsi Gamidi (vamsi.gamidi@dal.ca)


## Getting Started

### Pages and Functionalities Impemented

* Login - https://web-assignment2-vg.herokuapp.com/
* Register - https://web-assignment2-vg.herokuapp.com/register
* Reset Password - https://web-assignment2-vg.herokuapp.com/resetPassword
* Home - https://web-assignment2-vg.herokuapp.com/home
* Create Project - https://web-assignment2-vg.herokuapp.com/createProject
* Invite User - https://web-assignment2-vg.herokuapp.com/addUser
* People - https://web-assignment2-vg.herokuapp.com/people

 

### Directory Structure

`src` - source folder contains all of our code

`components` - Components directory has directories of all the components, each component directory contains a javascript and a css file

`components/images` - This folder contains all the images used in the application.

`components/login` - This folder contains files related to login feature

`components/register` - This folder contains files related to register feature

`components/home` - This folder contains files related to home screen after logging in feature

`components/add_people` - This folder contains files related to inviting users feature

`components/create_project` - This folder contains files related to project creation feature

`components/header` - This folder contains files related to navigation bar

`components/home_header` - This folder contains files related to navigation bar for some screens

`components/role_management` - This folder contains files related to role management feature

### File Structure

`server.js`
    
    The configuration of the node server is given in this file. It contains details such as port number on which the server is supposed to run, build directory of the react application.

`index.js` 

 	It is the main file of the Single page application, which contains the "App" component

 `App.js`

 	All the remaining components are imported and used in this file


### Prerequisites

It needs NodeJS to be installed in the computer

### Installing

* Clone the repository by using the provided GitLab link
* Open the terminal and go to the directory where package.json is located
* Install the node modules using the following command
	 ```npm install``` or ```npm i ```
* Start the react application by using the following command
	 ```npm start```


## Deployment

App is deployed on heroku by linking github repository. Automatic deploy is enabled so that it builds as soon as a commit has been made.

### GitLab Link


### Github Link

https://github.com/gamidiv10/Web-Assignment-2

### Heroku Link

https://web-assignment2-vg.herokuapp.com/


## Built With

* [React](https://reactjs.org/): It is a JavaScript library to develop frontend of web applications. It helps us to create single page applications. 

* [Visual Studio code](https://code.visualstudio.com/): It is a code-editor to build and debug web based applications.

* [Node.js](https://nodejs.org/en/download/): It is an Open-source, cross-platform, javascript runtime environment. 

* [Express](https://expressjs.com/): It is a framework for Node.js for the developent of backend, that handles all the interactions between the frontend and database ensuring a smooth tranfer of data to the end user.

* [npm](https://www.npmjs.com/) - Dependency Management.

* [Bootstrap](https://getbootstrap.com/) - Styling Framework.

## Sources Used

[1] "How to Add React Form Validation", Telerik Blogs, 2020. [Online]. Available: https://www.telerik.com/blogs/up-and-running-with-react-form-validation. [Accessed: 12- Jun- 2020].

[2] N. Raboy, "Use RegEx To Test Password Strength In JavaScript", The Polyglot Developer, 2020. [Online]. Available: https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/. [Accessed: 12- Jun- 2020].

[3] a. Mark Otto, "Cards", Getbootstrap.com, 2020. [Online]. Available: https://getbootstrap.com/docs/4.0/components/card/. [Accessed: 11- Jun- 2020].

[4] a. Mark Otto, "Navbar", Getbootstrap.com, 2020. [Online]. Available: https://getbootstrap.com/docs/4.0/components/navbar/. [Accessed: 11- Jun- 2020].

### /src/components/header/Header.js, /src/components/home_header/HomeHeader.js

Lines 25 - 46
---------------
```js
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <form className="form-inline" action="/register">
        <section className="form-group website-label">
          <a className="navbar-brand" href="/home">
            Taskatic
          </a>
        </section>
        <section className="form-group">
          <button className="btn btn-dark login-btn" onClick={handleLogin}>Login</button>
        </section>
        <section className="form-group register-btn">
          <button className="btn btn-dark" onClick={handleRegister}>Register</button>
        </section>
          <section className="form-group">
          <button className="btn btn-dark login-btn" onClick={handleAbout}>About</button>
        </section>
        <section className="form-group">
          <button className="btn btn-dark login-btn" onClick={handleContactUs}>Contact Us</button>
        </section>

      </form>
    </nav>
```
The code above was created by adapting from [4](https://getbootstrap.com/docs/4.0/components/navbar/) as shown below: 

```js
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>

```

- [How] The code in [4](https://getbootstrap.com/docs/4.0/components/navbar/) was implemented by Marc Otto
- [Why] [4](https://getbootstrap.com/docs/4.0/components/navbar/) Code was used to create a custom navigation bar for the application.
- [How] [4](https://getbootstrap.com/docs/4.0/components/navbar/) Code was modified by Vamsi Gamidi


### /src/components/home/Home.js, /src/components/role_management/People.js

Lines 50 - 67
---------------
```js
<section className="container home-container">
        {projects.map((project) => (
            <section key={project.key} className="card text-white bg-dark mb-3">
            <section className="card-header">{project.projectName}</section>
            <section className="card-body">
        <h5 className="card-title">{project.key}</h5>
        <p className="card-text">{project.manager}</p>
                <a href="/project" className="stretched-link"> </a>
            </section>
            </section>
            ))}
            <section className="card text-white bg-secondary mb-3">
            <section className="card-body create-card">
                <h5>Create New Project</h5>
                <a href="/createProject" className="stretched-link"> </a>
            </section>
            </section>
      </section>
```
The code above was created by adapting from [3](https://getbootstrap.com/docs/4.0/components/card/) as shown below: 

```js
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

```

- [How] The code in [3](https://getbootstrap.com/docs/4.0/components/card/) was implemented by Marc Otto
- [Why] [3](https://getbootstrap.com/docs/4.0/components/card/) Code was used to create a card layout for the application.
- [How] [3](https://getbootstrap.com/docs/4.0/components/card/) Code was modified by Vamsi Gamidi

### /src/components/login/Login.js

Lines 12 - 31
---------------
```js
const EmailRegex = 
    RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
if(EmailRegex.test(email) && PwdRegex.test(pwd))
{
    setEmailError("")
    setPwdError("")
    history.push('/home')
}
if(!EmailRegex.test(email))
{
setEmailError("Please Enter valid Email ID");
}
````
The code above was created by adapting from [1](https://www.telerik.com/blogs/up-and-running-with-react-form-validation) as shown below: 

```js
const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
case 'email': 
  errors.email = 
    validEmailRegex.test(value)
      ? ''
      : 'Email is not valid!';
  break;

```

- [How] The code in [1](https://www.telerik.com/blogs/up-and-running-with-react-form-validation) was implemented by Eric Bishard
- [Why] [1](https://www.telerik.com/blogs/up-and-running-with-react-form-validation) Code was used to validate whether the email entered by the user is valid.
- [How] [1](https://www.telerik.com/blogs/up-and-running-with-react-form-validation) Code was modified by Vamsi Gamidi

### /src/components/login.js

Lines 14 - 34
---------------
```js
const PwdRegex = 
        new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*])(?=.{8,})");

const history = useHistory();

const handleLoginClick = (e) => {
    e.preventDefault();
    if(EmailRegex.test(email) && PwdRegex.test(pwd))
    {
        setEmailError("")
        setPwdError("")
        history.push('/home')
    }
    if(!EmailRegex.test(email))
    {
    setEmailError("Please Enter valid Email ID");
    }
    if(!PwdRegex.test(pwd))
    {
    setPwdError("Please Enter Valid Password: Atleast 1 Upper Case, 1 Lower Case, 1 Numeric, 1 Special Symbol");
}
}
````
The code above was created by adapting from [2](https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/) as shown below: 

```js
var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
```

- [How] The code in [2](https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/) was implemented by Nic Raboy
- [Why] [2](https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/) Code was used to validate whether the password entered by the user meets all the requirements
- [How] [2](https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/) Code was modified by Vamsi Gamidi


## Acknowledgments

* https://getbootstrap.com/
* https://www.w3schools.com/css/
* https://www.traversymedia.com/

## References for Images

[1] Delete Icon. [image] Available at: <https://icons8.com/icons/set/delete> [Accessed 13 June 2020].

[2] Background Image. [image] Available at: <https://www.netpremacy.com/google-cloud-premier-partner/background-website-01/> [Accessed 12 June 2020].  

[3] Blank Profile. [Image] Available at: <https://aesusdesign.com/about-us/mans-blank-profile/> [Accessed 13 June 2020].

[4] Blank Profile. [Image] Available at: <https://www.vippng.com/preview/hxiixhw_empty-profile-picture-blank-avatar-image-circle/> [Accessed 13 June 2020].                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 