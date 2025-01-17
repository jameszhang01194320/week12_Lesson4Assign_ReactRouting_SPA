Lesson 4: Assignment | React Routing and Single-Page Applications
________________________________________
1. Building a Comic Book Library with React Router

Task 1: Install and Setup React Router
•	Initialize a new React project or use the previous Marvel Comics API comic project and install the latest version of the React Router.
•	Set up React Router in your application.
Expected Outcome:
•	A set up React project with the React Router installed.
•	Basic configuration of React Router in the application's main file.
==========================================================================
npx create-vite Lesson4AssignReactRouting_SPA --template react
cd Lesson4AssignReactRouting_SPA
npm install react-router-dom

=============================================================================


Task 2: Create Route Components
•	Create four new components: Home, BrowseCharacters, CharacterDetails, and Comics. The home & comic components can be empty for now, with just a simple return statement and you can reuse your browse & detail components from the previous assignment.
Code Example:
// src/components/Comics.jsx
const Comics = () => {
    return (
        <div>
            <h2>Comics</h2>
            <p>This component is under construction. Check back later!</p>
        </div>
    );
};

export default Comics;
Expected Outcome:
•	Four components created and ready to be used in routing.

Task 3: Setting Up Routes
•	In your application's main file, set up routes using BrowserRouter and Route from React Router. Assign each route to the corresponding component.
Expected Outcome:
•	The application should have a basic routing setup with Home, BrowseCharacters, CharacterDetails, and Comics accessible via different paths.
•	Navigating to these paths should display the corresponding component
________________________________________



2. Enhancing Comic Book Library with Advanced Routing
Objective: The objective of this assignment is to deepen your understanding of advanced routing techniques in React using React Router. You will enhance the Comic Book Library by adding navigational links, dynamic routes with parameters, and managing error pages for undefined routes.
Problem Statement: Expand on the Comic Book Library Management System by implementing navigation between different pages, handling dynamic parameters for character details, and creating an error handling route for undefined paths.

Task 1: Implement Navigation Links
•	Add Link and NavLink components from React Router to navigate between the Home, Browse Characters, and Comics pages.
•	Highlight the active link using NavLink.
Expected Outcome:
•	Functional navigation links in the application.
•	The active link is visually differentiated from others.

Task 2: Dynamic Routes for Character Details
•	Modify the CharacterDetails component to accept a character ID as a route parameter.
•	Update the BrowseCharacters component to link each character to its details page using the character ID.
Expected Outcome:
•	Clicking on a character in BrowseCharacters navigates to the CharacterDetails page with the correct character ID.
•	The CharacterDetails page dynamically displays information based on the character ID.

Task 3: Error Page Management
•	Create a new component NotFound to handle undefined routes.
•	Configure your routing to display the NotFound component for any undefined paths.
Expected Outcome:
•	Navigating to an undefined path displays the NotFound component.
•	Users are informed that the page they are looking for does not exist.

