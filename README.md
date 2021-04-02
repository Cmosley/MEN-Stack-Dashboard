# MEN-Stack-Dashboard
Unit 2 MEN Stack CRUD App - Business Dashboard for Auto Repair company

# Introduction

*Auto-Mastery*, is a business dashboard, primarily targeted to the Auto Repair Industry. The end goal of this app is to provide the business owner and key management with easy access to key KPI's 

This app was made during General Assembly's Software Engineering Immersive program.  

# Table of Contents
- [MEN-Stack-Dashboard](#men-stack-dashboard)
- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [Instructions for Use](#instructions-for-use)
    - [Methodology](#methodology)
- [Version Notes](#version-notes)
- [Tech Framework](#tech-framework)
    - [This app uses:](#this-app-uses)
    - [This app is hosted at:](#this-app-is-hosted-at)
- [APIs](#apis)
    - [Weather API](#weather-api)
- [Future Plans](#future-plans)
- [Special Thanks](#special-thanks)
- [Appendices](#appendices)
  - [Appendix A: Unit 1 Project Assignment from General Assembly](#appendix-a-unit-1-project-assignment-from-general-assembly)
    - [Overview](#overview)
    - [Presentation](#presentation)
    - [Technical Requirements](#technical-requirements)
    - [Necessary Deliverables](#necessary-deliverables)
  - [Appendix B: Product Screenshots & Planning Images](#appendix-b-product-screenshots--planning-images)
    - [Dashboard](#dashboard)
    - [Create Store](#create-store)
    - [Wireframe Mockup](#wireframe-mockup)
    - [ERD Mockup](#erd-mockup)

<a id='instructions-for-use'></a>

# Instructions for Use

<a id='instructions-methodology'></a>

### Methodology

The primary function of this early version is to accept user relayed sales input and display that data on the dashboard for easy viewing. 


<a id='version-notes'></a>

# Version Notes

The first version of this app is currently uploaded. My goal was to establish a base MVP level of functionality and styling. Not all of the dashboard data is dynamically loaded at this moment, but the KPI elements were made to show future goals for functionality. 


<a id='tech-framework'></a>

# Tech Framework

### This app uses:
* HTML5 and CSS
* JavaScript ES6
* Node
* MongoDB
* Express
* Chart.js

### This app is hosted at:
* [GitHub Repo](https://github.com/Cmosley/MEN-Stack-Dashboard)
* [Heroku Hosted Site](https://auto-mastery.herokuapp.com/)

<a id='apis'></a>

# APIs

### Weather API
Weather data was supplied by the [Weather API](https://www.weatherapi.com/docs/). I utilized the FREE plan for this API, that allows up to one million API calls a month. An API key was provided and has been neatly tucked away in my .env file. 


<a id='future-plans'></a>

# Future Plans

* **My goal for this app is to turn it into a professional grade business dashboard that can be marketed and sold to Auto Repair professionals**
  **In order for that to happen significant progress must be made in several areas:**
* Dynamic data load from Customer supplied data 
* Authentication control for individual stores to prevent data leakage
* Robust KPI tracking system with goals, trends, and actionable intelligent feedback loop 
* User messaging and communication methods
* Refactor of app for use on mobile and different desktop browser sizes
* Refactor of app with React front end components to allow for more scalability
* KPI learning platform

**and many more features that help make the life a business owner more simple by providing an accurate feedback loop for management**


<a id='special-thanks'></a>

# Special Thanks

* Instructors and peers from the General Assembly SEIR-EC-2-22 cohort for collaboration in developing this app. While this app represents my own original work we gave each other assistance in developing our own versions thereof.

* Formatting and structure of this `README.md` was largely adapted from cohort mate Marty Smith's beautiful Unit 1 Project readme (https://github.com/mhsmith321) 



<a id='appendices'></a>

# Appendices

<a id='appendix-a-assignment'></a>

## Appendix A: Unit 1 Project Assignment from General Assembly

Information in this section was reproduced with the permission of General Assembly.  Please do not copy or republish without the direct permission from General Assembly to do so.

### Overview

This second project is your first foray into **building a full-stack application.** You’ll be **building a Node/Express/MongoDB app** from the ground up yourself!

You get to decide what you want to build 🥳 - as long as it meets the technical requirements outlined below.

**You will be working individually on this project.** You’ll be designing and coding the app yourself.

Additionally, as part of the project’s requirements, you’ll be required to take and pass a Project Assessment.

### Presentation

You will have an **absolute maximum of 8 minutes** to present your project following these guidelines:

1. **Introduce the Project:**

  * Intro your app by paraphrasing the README.

2. **Demonstrate the Project:**

  * Launch the app by clicking the link in the README.

  * Sign up a new user, then immediately log out.
  
  * Log in with your preferred user and demonstrate the features of the app.
  
  * Be sure to demo full-CRUD data operations.

3. **Show/discuss your code:**

  * Show the “main” Mongoose model.

  * Show your favorite EJS template.
  
  * Show the controller for the main model

4. **Share the experience:**

  * What was your biggest challenge?

  * What are your key learnings/takeaways?

**Q & A + Feedback** may also follow your presentation but is not part of the time structure.

How you structure your presentation is ultimately up to you as long as you cover the above points, but others have found success by following the above order and spending a roughly equal amount of time speaking to the above 4 points.

### Technical Requirements

**Your App MUST:**

* **Have at least 2 data entities in addition to the “User” Model. One of these entities will represent the main functional idea for your app and another with a 1:M or M:M relationship with that main entity (embedded or referenced).**

* **Use OAuth authentication.**

* Implement basic **authorization** that restricts access to features that need a logged-in user to work (typically CUD data operations) by “protecting” those routes (using the isLoggedIn middleware from the OAuth lesson) from anonymous users. Also, ensure that editing and deletion of data can only be done by the user that created that data (this is done in the controller - refer to the Guide to User-Centric CRUD).

* Have **full-CRUD data operations** somewhere within the app’s features. For example, you can have functionality that Creates & Updates a post and satisfy Delete functionality by implementing the ability to delete comments.

* Be styled such that the app looks and feels similar to apps we use daily - in other words it **should have a consistent and polished user interface.**

* Be **deployed online** (Heroku or elsewhere - however, we will troubleshoot non-Heroku deployments on a minimal basis).
  
* Have functions and variables that are named sensibly. Remember, functions should typically be verbs and variables (data) named as nouns.

* **Have consistent code choices**. For example, choose between your preference for function declarations vs. function expressions.

* **Be deployed online** so that the rest of the world can use it!

**Optionally, Your App May:**
* Consume a third-party API.
  
* Expose its own API where it returns data resources as JSON.


### Necessary Deliverables


* **A working full-stack app that meets or exceeds the above technical requirements, built by you, and hosted on the internet**

* **A `README.md` file** with these sections:

  * **<Your app’s title>**: A description of your app. What was your inspiration?

  * **Getting Started**: Include a link to your deployed app and any instructions you deem important.

  * **Screenshot(s):** Images of your actual app.

  * **Technologies Used**: List of the technologies used, e.g., JavaScript, HTML, CSS…

  * **Next Steps**: Planned future enhancements (icebox items).

    *  Don’t underestimate the value of a well crafted README.md. The README.md introduces your project to prospective employers and forms their first impression of your work!

* **Frequent commits that date back to the very beginning of the project**. Never delete your repo to “start over”. Commit messages should be in the present tense. **Be sure to create the repo on your personal GitHub account and ensure that it is public.**


<a id='appendix-b-pictures'></a>

## Appendix B: Product Screenshots & Planning Images

### Dashboard

![Dashboard view](public/images/dashboard-view.png 'screenshot of dashboard')

### Create Store 

![Create Store](public/images/store-create.png 'screenshot of store creation form')

### Wireframe Mockup

![Wireframe Mockup](public/images/wireframe.png 'pre-development wireframe mockup of app')

### ERD Mockup

![ERD Mockup](public/images/ERD.png 'pre-development ERD mockup of database models')