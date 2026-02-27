
# omega-orion-assignment

Setup Instructions
     • Installation: Created React app using "npm create vite@latest" and installed the necessary dependencies, including React Router, Tailwind CSS, and Lucide React.
     • Execution: Started the development server by running  npm run dev (Vite) to view the application on localhost.
     • Build: Used Netlify for hosting the Project.

Tech Stack Used
    • Frontend: Build with React for a component-based architecture and React Router Dom for managing dashboard sub-routes.
    • Styling:  UsedTailwind CSS to handle the flexible grid system, custom rounded "island" UI, and smooth sidebar  transitions.
    • Icons & Logic: Utilized Lucide React for modern iconography and React Hooks to manage real-time search filtering and layout states.

Any Assumptions Made
 • Layout Flow: Assumed a fixed sidebar on desktop that "pushes" content, requiring a dynamic margin to ensure the Navbar and   People grid occupy 100% of the remaining screen.
 • Data Structure: Modeled the employee list as a local array of 16 objects, assuming unique IDs are provided for the search and mapping functions.
 • Responsiveness: Assumed the UI should transition from a 5-column grid on ultra-wide screens to a single-column list on mobile for optimal readability.
