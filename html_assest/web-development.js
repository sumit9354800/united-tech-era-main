
let showMore1 = document.querySelector(".showMore1");
let showMore2 = document.querySelector(".showMore2");
let showMore3 = document.querySelector(".showMore3");
let showMore4 = document.querySelector(".showMore4");
let showMore5 = document.querySelector(".showMore5");
let showMore6 = document.querySelector(".showMore6");
let showMore7 = document.querySelector(".showMore7");
let showMore8 = document.querySelector(".showMore8");
let showMore9 = document.querySelector(".showMore9");
let showMore10 = document.querySelector(".showMore10");
let showMore11 = document.querySelector(".showMore11");
let viewMore = document.querySelector(".viewMore");
let viewLess = document.querySelector(".viewLess");

let run = true;



function show() {
    showMore1.innerHTML = `
    <div class="heading">
    jQuery
    </div>
    <div class="contents border-contents">
    <div class="row mt-2 justify-content-between align-items-start">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">JS Libraries & jQuery (Short Notes)</b></h5>
    <span class="accordion-text d-block">Library: Pre-written code to simplify tasks.</span>
    <span class="accordion-text d-block">jQuery: JavaScript library for easy DOM manipulation,
    events, and effects</span>
    <span class="accordion-text d-block">code. jQuery.com</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Core jQuery Concepts</b></h5>
    <span class="accordion-text d-block">Selectors: $("#id"), $(".class"), $("tag")</span>
    <span class="accordion-text d-block">Events: .click(), .hover(), .submit()</span>
    <span class="accordion-text d-block">HTML Methods: .html(), .text(), .val(), .css()</span>
    <span class="accordion-text d-block">Functions: Run after page loads using
    $(document).ready()</span>
    <span class="accordion-text d-block">Dimensions: .width(), .height()</span>
    <span class="accordion-text d-block">Traversal: .parent(), .children(), .next(),
    .prev()</span>
    </div>
    </div>
    <div class="row mt-4 justify-content-between align-items-start">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading"> jQuery Plugins</b></h5>
    <span class="accordion-text d-block">Owl Carousel: Create responsive sliders.</span>
    <span class="accordion-text d-block">Lightbox: Show images/videos in a popup modal.</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Animation Libraries</b></h5>
    <span class="accordion-text d-block">GSAP: Advanced animations</span>
    <span class="accordion-text d-block">gsap.to(".box", { x: 100 });</span>
    <span class="accordion-text d-block">Locomotive: Smooth scrolling and parallax
    effects</span>
    </div>
    </div>
    <div class="row mt-4 justify-content-between align-items-start">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Bonus Features</b></h5>
    <span class="accordion-text d-block">addClass() / .removeClass() – Dynamic styling</span>
    <span class="accordion-text d-block">toggleClass() – Add/remove class</span>
    <span class="accordion-text d-block">animate() – Custom animations</span>
    <span class="accordion-text d-block">on() / .off() – Advanced event binding</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Accounting Reports</b></h5>
    <span class="accordion-text d-block">Lesson 10.1 Basic Features of Displaying Reports</span>
    </div>
    </div>
    </div>
`
    showMore2.innerHTML = `
    <div class="heading">
    Bootstrap 5 Quick Guide
    </div>
    <div class="contents border-contents">
    <div class="row mt-2 justify-content-between align-items-start">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Basics</b>
    </h5>
    <span class="accordion-text d-block">Bootstrap: A CSS framework for responsive, mobile-first
    design.</span>
    <span class="accordion-text d-block">Setup: Add Bootstrap via CDN to your HTML file.</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Layout & Grid</b>
    </h5>
    <span class="accordion-text d-block">Containers: .container, .container-fluid for layout
    padding.</span>
    <span class="accordion-text d-block">Grid System: Use .row and .col for column
    layouts.</span>
    <span class="accordion-text d-block">Breakpoints: Responsive classes like col-sm-6,
    d-md-none.</span>
    </div>
    </div>
    <div class="row mt-4 justify-content-between align-items-start">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Text & Styling</b></h5>
    <span class="accordion-text d-block">Typography: .text-center, .fw-bold,
    .text-danger.</span>
    <span class="accordion-text d-block">Colors & Backgrounds: .bg-primary, .text-white.</span>
    <span class="accordion-text d-block">Borders & Buttons: .btn, .btn-outline-*,
    .border.</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Forms</b></h5>
    <span class="accordion-text d-block">Styled inputs: .form-control, .form-check,
    .form-label.</span>
    </div>
    </div>
    <div class="row mt-4 justify-content-between align-items-start">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Components</b></h5>
    <span class="accordion-text d-block">Navbar: Responsive header with .navbar.</span>
    <span class="accordion-text d-block">Carousel: Image slider.</span>
    <span class="accordion-text d-block">Card: Content boxes.</span>
    <span class="accordion-text d-block">Accordion: Expand/collapse content.</span>
    <span class="accordion-text d-block">Modal / Alert: Popups and messages.</span>
    <span class="accordion-text d-block">Tooltip / Popover: Hover/click tooltips</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Utilities</b></h5>
    <span class="accordion-text d-block">Spacing: .m-3, .p-4 for margin/padding.</span>
    <span class="accordion-text d-block">Display: .d-flex, .d-grid, .d-none.</span>
    <span class="accordion-text d-block">Position: .fixed-top, .position-relative.</span>
    </div>
    </div>
    </div>
`;
    showMore3.innerHTML = `
        <div class="heading">
        Tailwind CSS Quick Guide
        </div>
        <div class="contents border-contents">
        <div class="row justify-content-between align-items-start mt-2">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">Introduction</b></h5>
        <span class="accordion-text d-block">A utility-first CSS framework for fast, custom
            designs.</span>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">Setup</b></h5>
        <span class="accordion-text d-block">Add via CDN or npm for full customization.</span>
        </div>
        </div>
        <div class="row justify-content-between align-items-start mt-4">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">Breakpoints</b></h5>
        <span class="accordion-text d-block">Use responsive classes: sm, md, lg, xl.</span>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">Layouts</b></h5>
        <span class="accordion-text d-block">Grid: grid, grid-cols-3.</span>
        <span class="accordion-text d-block">Flexbox: flex, justify-between, items-center.</span>
        </div>
        </div>
        <div class="row justify-content-between align-items-start mt-4">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">Spacing & Sizing</b></h5>
        <span class="accordion-text d-block">Margin/Padding: m-4, p-6.</span>
        <span class="accordion-text d-block">Width/Height: w-1/2, h-12.</span>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">Typography</b></h5>
        <span class="accordion-text d-block">Text styles: text-3xl, font-bold, text-center.</span>
        </div>
        </div>
        <div class="row mt-4 justify-content-between align-items-start">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">Backgrounds & Colors</b></h5>
        <span class="accordion-text d-block">Colors: bg-blue-500, text-white</span>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">Shadows & Effects</b></h5>
        <span class="accordion-text d-block">Shadows: shadow-lg.</span>
        <span class="accordion-text d-block">Opacity: opacity-50.</span>
        </div>
        </div>
        <div class="row mt-4 justify-content-between align-items-start">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">Transforms & Animations</b></h5>
        <span class="accordion-text d-block">Transforms: scale-105, rotate-6.</span>
        <span class="accordion-text d-block">Animations: animate-bounce</span>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">Custom Components</b></h5>
        <span class="accordion-text d-block">Build sections (hero, footer) with utility
            classes</span>
        </div>
        </div>
        <div class="row mt-4 justify-content-between align-items-start">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">Bonus</b></h5>
        <span class="accordion-text d-block">Customize via tailwind.config.js.</span>
        <span class="accordion-text d-block">Dark mode: dark:bg-gray-900</span>
        </div>
        </div>
        </div>
`;
    showMore4.innerHTML = `
    <div class="heading">
    Git and GitHub
    </div>
    <div class="contents border-contents">
    <div class="row justify-content-between align-items-start mt-2">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">What is Version Control?</b></h5>
    <span class="accordion-text d-block">Definition and importance of version control.</span>
    <span class="accordion-text d-block">Types of version control systems (VCS): Centralized and
    Distributed.</span>
    <span class="accordion-text d-block">Benefits of using Git</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Introduction to Git</b></h5>
    <span class="accordion-text d-block">What is Git? Why use Git?</span>
    <span class="accordion-text d-block">Git vs other version control systems (e.g.,
    SVN).</span>
    <span class="accordion-text d-block">Git's distributed architecture</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Installing Git</b></h5>
    <span class="accordion-text d-block">How to install Git on different operating systems
    (Windows, macOS, Linux).</span>
    <span class="accordion-text d-block">Configuring Git (username, email).</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Basic Git Configuration</b></h5>
    <span class="accordion-text d-block">Git global configuration.</span>
    <span class="accordion-text d-block">Set up default text editor.</span>
    <span class="accordion-text d-block">SSH key setup for GitHub</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Git Workflow</b></h5>
    <span class="accordion-text d-block">Initializing a Git repository: git init</span>
    <span class="accordion-text d-block">Basic Git commands: git status, git add, git
    commit</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Viewing Changes</b></h5>
    <span class="accordion-text d-block">Viewing the commit history: git log.</span>
    <span class="accordion-text d-block">Viewing file differences: git diff.</span>
    <span class="accordion-text d-block">Working with branches.</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Branching in Git</b></h5>
    <span class="accordion-text d-block">What are branches?</span>
    <span class="accordion-text d-block">Creating branches: git branch
    &lt;branch-name&gt;</span>
    <span class="accordion-text d-block">Switching branches: git checkout
    &lt;branch-name&gt;</span>
    <span class="accordion-text d-block">Merging branches: git merge &lt;branch-name&gt;</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Resolving Merge Conflicts</b></h5>
    <span class="accordion-text d-block">How to resolve merge conflicts.</span>
    <span class="accordion-text d-block">Strategies for merging effectively</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Introduction to GitHub</b></h5>
    <span class="accordion-text d-block">What is GitHub? Benefits of using GitHub for hosting
    code.</span>
    <span class="accordion-text d-block">Setting up a GitHub account.</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Connecting Git to GitHub</b></h5>
    <span class="accordion-text d-block">Creating a remote repository on GitHub.</span>
    <span class="accordion-text d-block">Linking local Git repository to GitHub: git remote add
    origin &lt;repo-url&gt;.</span>
    <span class="accordion-text d-block">Pushing local code to GitHub: git push -u origin
    master.</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Cloning a Repository</b></h5>
    <span class="accordion-text d-block">How to clone a GitHub repository to your local
    machine.</span>
    <span class="accordion-text d-block">git clone &lt;repo-url&gt;.</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Forking and Pull Requests</b></h5>
    <span class="accordion-text d-block">Forking a repository on GitHub.</span>
    <span class="accordion-text d-block">Making changes in a forked repo and submitting a pull
    request.</span>
    <span class="accordion-text d-block">Code review and merging pull requests.</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Collaborating with Others</b></h5>
    <span class="accordion-text d-block">Introduction to GitHub Pages for hosting static
    websites.</span>
    <span class="accordion-text d-block">Creating and deploying a personal website with GitHub
    Pages</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Using GitHub Issues</b></h5>
    <span class="accordion-text d-block">Creating and managing issues.</span>
    <span class="accordion-text d-block">Assigning labels, milestones, and due dates.</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">GitHub Pages</b></h5>
    <span class="accordion-text d-block">Collaborating with teams using GitHub.</span>
    <span class="accordion-text d-block">Branching strategy in teams.</span>
    <span class="accordion-text d-block">Best practices for collaboration</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">GitHub Actions</b></h5>
    <span class="accordion-text d-block">Introduction to CI/CD with GitHub Actions.</span>
    <span class="accordion-text d-block">Automating workflows with GitHub Actions.</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Git Rebase</b></h5>
    <span class="accordion-text d-block">What is rebase? Why is it used?</span>
    <span class="accordion-text d-block">Difference between merge and rebase.</span>
    <span class="accordion-text d-block">How to use git rebase effectively</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Stashing Changes</b></h5>
    <span class="accordion-text d-block">Saving changes temporarily with git stash.</span>
    <span class="accordion-text d-block">Applying and dropping stashes.</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Undoing Changes</b></h5>
    <span class="accordion-text d-block">Reverting commits: git revert.</span>
    <span class="accordion-text d-block">Resetting changes: git reset.</span>
    <span class="accordion-text d-block">Checkout vs reset vs revert.</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Writing Commit Messages</b></h5>
    <span class="accordion-text d-block">Importance of clear, concise commit messages.</span>
    <span class="accordion-text d-block">Best practices for writing commit messages</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Git Workflow Strategies</b></h5>
    <span class="accordion-text d-block">Centralized workflow.</span>
    <span class="accordion-text d-block">Feature branch workflow.</span>
    <span class="accordion-text d-block">Gitflow workflow.</span>
    <span class="accordion-text d-block">Forking workflow.</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Managing Large Repositories</b></h5>
    <span class="accordion-text d-block">Git LFS (Large File Storage) for managing large
    files.</span>
    <span class="accordion-text d-block">Handling large binary files with GitHub</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Resolving Merge Conflicts</b></h5>
    <span class="accordion-text d-block">Hands-on exercises for resolving conflicts</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Handling Common Git Errors</b></h5>
    <span class="accordion-text d-block">Fixing common issues like detached HEAD, errors with
    merge conflicts, and more.</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Recovery and Backup Strategies</b></h5>
    <span class="accordion-text d-block">Using Git to recover lost commits.</span>
    <span class="accordion-text d-block">Creating backups with git bundle</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Project Assignments</b></h5>
    <span class="accordion-text d-block">Personal GitHub Repository: Set up your own GitHub
    repository, push your project to GitHub, and create issues for tracking tasks.</span>
    <span class="accordion-text d-block">Collaborative Project: Fork a repository, contribute to
    it, and create pull requests to merge your changes.</span>
    <span class="accordion-text d-block">GitHub Pages Project: Build and deploy a personal
    website using GitHub Pages.</span>
    <span class="accordion-text d-block">Git Workflow Simulation: Collaborate with others using
    Gitflow or feature-branch workflows.</span>
    </div>
    </div>
    </div>
`;
    showMore5.innerHTML = `
    <div class="heading">
    ReactJS
    </div>
    <div class="contents border-contents">
    <div class="row justify-content-between align-items-start mt-2">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Important JavaScript Concepts for ReactJS</b></h5>
    <span class="accordion-text d-block">Revisiting Functions and Parameters: Understanding the
    role of functions and their parameters in React.</span>
    <span class="accordion-text d-block">Revisiting Variables and Values: How variables and
    values work in React components</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Key Features of ReactJS</b></h5>
    <span class="accordion-text d-block">Introduction to ReactJS: A JavaScript library for
    building user interfaces.</span>
    <span class="accordion-text d-block">Benefits of Using ReactJS: Fast, reusable components,
    virtual DOM for performance, and strong community support.</span>
    <span class="accordion-text d-block">Flow and Cycle of React App: From initial render to
    updates, React’s reactivity system.</span>
    <span class="accordion-text d-block">Bidirectional Data Flow: Using state and props to
    manage data in React components.</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">ReactJS Basics and Setup</b></h5>
    <span class="accordion-text d-block">Creating ReactJS Project: Setting up a React project
    with create-react-app.</span>
    <span class="accordion-text d-block">Import and Export: How modules are handled in React
    (importing components and functions).</span>
    <span class="accordion-text d-block">JSX and JavaScript Integration: Mixing HTML with
    JavaScript in JSX syntax.</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Key React Concepts</b></h5>
    <span class="accordion-text d-block">Arrow Functions: Simplified function syntax in
    React.</span>
    <span class="accordion-text d-block">React Components: Class-based vs Functional
    components.</span>
    <span class="accordion-text d-block">React Component Life Cycle: Lifecycle methods like
    componentDidMount, componentDidUpdate.</span>
    <span class="accordion-text d-block">List Rendering: Looping over data to create lists
    dynamically in JSX.</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Advanced ReactJS Concepts</b></h5>
    <span class="accordion-text d-block">JavaScript Destructuring: Extracting values from
    objects/arrays for cleaner code.</span>
    <span class="accordion-text d-block">Context API: For managing global state across
    components.</span>
    <span class="accordion-text d-block">Redux Toolkit: Simplified state management for larger
    apps.</span>
    <span class="accordion-text d-block">React Router DOM: Handling navigation and routing in
    React applications</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Integrating with Firebase</b></h5>
    <span class="accordion-text d-block">Installing Firebase: Setting up Firebase in your React
    app.</span>
    <span class="accordion-text d-block">Fetching External API in React: Using fetch or axios to
    get data from external APIs.</span>
    <span class="accordion-text d-block">Adding & Fetching Data to Firebase: Real-time
    interaction with Firebase Realtime Database.</span>
    <span class="accordion-text d-block">Firebase Social Login: Implementing social media
    authentication (Google, Facebook, etc.).</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">ReactJS Project Building</b></h5>
    <span class="accordion-text d-block">To-Do List App: Simple app to manage tasks with
    React.</span>
    <span class="accordion-text d-block">User Management with Firebase: Creating authentication
    and user profiles using Firebase.</span>
    <span class="accordion-text d-block">Creating E-commerce Project: Building an online store
    with React, Firebase, and Redux.</span>
    <span class="accordion-text d-block">Weather Search App: Displaying weather data using
    external APIs in React.</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">ReactJS Styling and UI Components</b></h5>
    <span class="accordion-text d-block">Styled Components: Using the React package for scoped
    CSS styling.</span>
    <span class="accordion-text d-block">External Styling Libraries: Integrating libraries like
    Bootstrap or Material UI into React projects.</span>
    <span class="accordion-text d-block">Slick Slider in React: Adding image or content sliders
    to your React app.</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Form Handling and CRUD Operations</b></h5>
    <span class="accordion-text d-block">Controlled Components: Handling form inputs as React
    state.</span>
    <span class="accordion-text d-block">Form Handling in ReactJS: Managing form data and
    validation.</span>
    <span class="accordion-text d-block">CRUD Operations Using APIs: Create, Read, Update,
    Delete data from external APIs.</span>
    <span class="accordion-text d-block">Local Storage in React: Storing app data locally in the
    browser (e.g., To-do list and User Dashboard).</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Other ReactJS Applications</b></h5>
    <span class="accordion-text d-block">Creating Quiz App: Building a quiz app with dynamic
    question rendering.</span>
    <span class="accordion-text d-block">Show/Hide Modal with useState: Managing UI visibility
    with React's state hook.</span>
    <span class="accordion-text d-block">Show/Hide Password Feature: Using useState for password
    visibility toggle.</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Introduction to NextJS</b></h5>
    <span class="accordion-text d-block">NextJS Folder Structure: Understanding NextJS framework
    structure.</span>
    <span class="accordion-text d-block">Server-Side Rendering (SSR): Benefits of SSR in React
    for SEO and performance.</span>
    <span class="accordion-text d-block">Discussing LMS Project Development: How to build a
    Learning Management System with React and NextJS.</span>
    </div>
    </div>
    </div>
`;
    showMore6.innerHTML = `
        <div class="heading">
        NodeJS & ExpressJS Essentials
        </div>
        <div class="contents border-contents">
        <div class="row justify-content-between align-items-start mt-2">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">NodeJS & ExpressJS Essentials</b></h5>
        <span class="accordion-text d-block">Introduction to NodeJS: JavaScript runtime for
        server-side applications.</span>
        <span class="accordion-text d-block">How NodeJS Works: Non-blocking, event-driven
        architecture for scalability.</span>
        <span class="accordion-text d-block">Package.json: Configure project settings and
        dependencies.</span>
        <span class="accordion-text d-block">Nodemon: Automatically restarts server during
        development.</span>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">ExpressJS Overview</b></h5>
        <span class="accordion-text d-block">ExpressJS Introduction: Lightweight framework for
        building web apps.</span>
        <span class="accordion-text d-block">Node Server: Set up a basic server using
        Express.</span>
        <span class="accordion-text d-block">Routing: Handle HTTP requests with Express
        routes.</span>
        <span class="accordion-text d-block">Request & Response: Manage incoming data and send
        responses.</span>
        </div>
        </div>
        <div class="row justify-content-between align-items-start mt-4">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">API & Database Interaction</b></h5>
        <span class="accordion-text d-block">Create a Simple API: Build a basic REST API.</span>
        <span class="accordion-text d-block">EJS Template Engine: Render dynamic HTML pages.</span>
        <span class="accordion-text d-block">Raw SQL Queries: Interact with databases directly using
        SQL.</span>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">Advanced Concepts</b></h5>
        <span class="accordion-text d-block">Async Programming: Handle non-blocking operations with
        callbacks, promises, or async/await.</span>
        <span class="accordion-text d-block">Middleware: Implement route-level and Express
        middleware for tasks like authentication.</span>
        </div>
        </div>
        <div class="row justify-content-between align-items-start mt-4">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">ReactJS & Admin Panel Integration</b></h5>
        <span class="accordion-text d-block">Admin Panel Modules: Build modules for video, course
        management, and transactions.</span>
        <span class="accordion-text d-block">Password Reset: Implement password recovery
        functionality.</span>
        <span class="accordion-text d-block">Payment Gateway Integration: Connect with payment APIs
        in ReactJS and NodeJS.</span>
        <span class="accordion-text d-block">JWT Authentication: Secure login/logout functionality
        with JWT.</span>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
        <h5><b class="contents-heading">File & Data Handling</b></h5>
        <span class="accordion-text d-block">File Management: Display and manage file lists in the
        admin panel.</span>
        <span class="accordion-text d-block">Rendering HTML & JSON: Send both HTML and JSON
        responses based on requests.</span>
        </div>
        </div>
        </div>
`;
    showMore7.innerHTML = `
    <div class="heading">
    MongoDB Essentials
    </div>
    <div class="contents border-contents">
    <div class="row justify-content-between align-items-start mt-2">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">MongoDB Essentials</b></h5>
    <span class="accordion-text d-block">Introduction: MongoDB is a NoSQL database for handling
    unstructured data.</span>
    <span class="accordion-text d-block">Installation: Set up MongoDB locally for
    development.</span>
    <span class="accordion-text d-block">CRUD Operations: Perform Create, Read, Update, and
    Delete actions in MongoDB.</span>
    <span class="accordion-text d-block">POST API: Insert data.</span>
    <span class="accordion-text d-block">GET API: Retrieve data.</span>
    <span class="accordion-text d-block">PUT API: Update data.</span>
    <span class="accordion-text d-block">DELETE API: Remove data.</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Mongoose with MongoDB</b></h5>
    <span class="accordion-text d-block">Mongoose Overview: ODM library to interact with
    MongoDB.</span>
    <span class="accordion-text d-block">CRUD with Mongoose: Perform CRUD operations using
    Mongoose.</span>
    <span class="accordion-text d-block">GET/PUT/DELETE with Mongoose: Manage data with Mongoose
    in APIs.</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Advanced MongoDB Features</b></h5>
    <span class="accordion-text d-block">Connecting MongoDB with NodeJS: Integrate MongoDB in
    your Node.js app.</span>
    <span class="accordion-text d-block">Select Query Methods: Use MongoDB queries to filter
    documents.</span>
    <span class="accordion-text d-block">REPL: Use MongoDB shell for real-time
    interaction.</span>
    <span class="accordion-text d-block">Events & Event Emitter: Handle MongoDB events in
    Node.js.</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Additional Features</b></h5>
    <span class="accordion-text d-block">File Upload with Multer: Handle file uploads in
    Node.js.</span>
    <span class="accordion-text d-block">NodeMailer: Send emails from your Node.js app</span>
    </div>
    </div>
    </div>
`;
    showMore8.innerHTML = `
    <div class="heading">
    AWS
    </div>
    <div class="contents border-contents">
    <div class="row justify-content-between align-items-start mt-2">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Introduction to AWS</b></h5>
    <span class="accordion-text d-block">
        Amazon Web Services (AWS) provides cloud computing solutions like computing power,
        storage, and databases to host and manage applications and services.
    </span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Working with EC2</b></h5>
    <span class="accordion-text d-block">Creating EC2 Instance: Launch a virtual server (EC2) to
        run applications or services on AWS.</span>
    <span class="accordion-text d-block">Security Groups in AWS: Set up rules to control inbound
        and outbound traffic to/from your EC2 instances, acting as a virtual firewall.</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Deploying Projects on AWS</b></h5>
    <span class="accordion-text d-block">
        Deploying Projects on AWS: Steps to host a web or software application on AWS, typically
        using EC2 for the backend and other services like S3 for storage, RDS for databases,
        etc.
    </span>
    </div>
    </div>
    </div>
`;
    showMore9.innerHTML = `
    <div class="heading">
    PHP and MySQL
    </div>
    <div class="contents border-contents">
    <div class="row justify-content-between align-items-start mt-2">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Introduction to Web Development & PHP</b></h5>
    <span class="accordion-text d-block">Basics of web development: Frontend vs Backend</span>
    <span class="accordion-text d-block">Installation: Set up MongoDB locally for
    development.</span>
    <span class="accordion-text d-block">What is PHP? Introduction to server-side
    scripting</span>
    <span class="accordion-text d-block">Overview of MySQL and relational databases</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">PHP Fundamentals for Beginners</b></h5>
    <span class="accordion-text d-block">PHP syntax, variables, and data types</span>
    <span class="accordion-text d-block">Arrays (indexed, associative) and control structures
    (if, loops)</span>
    <span class="accordion-text d-block">Functions in PHP: Writing reusable code</span>
    <span class="accordion-text d-block">Handling user input and integrating PHP with HTML
    forms</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Introduction to MySQL Database</b></h5>
    <span class="accordion-text d-block">Setting up a MySQL database with phpMyAdmin</span>
    <span class="accordion-text d-block">Basic SQL commands: SELECT, INSERT, UPDATE,
    DELETE</span>
    <span class="accordion-text d-block">Understanding tables, columns, and data types</span>
    <span class="accordion-text d-block">Introduction to SQL queries and relational database
    concepts</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Building Forms & Handling Data in PHP</b></h5>
    <span class="accordion-text d-block">GET vs POST methods in PHP forms</span>
    <span class="accordion-text d-block">Validating user input and preventing security
    risks</span>
    <span class="accordion-text d-block">Storing form data in MySQL databases</span>
    <span class="accordion-text d-block">Sanitizing and securing data from SQL injection</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Building Forms & Handling Data in PHP</b></h5>
    <span class="accordion-text d-block">GET vs POST methods in PHP forms</span>
    <span class="accordion-text d-block">Validating user input and preventing security
    risks</span>
    <span class="accordion-text d-block">Storing form data in MySQL databases</span>
    <span class="accordion-text d-block">Sanitizing and securing data from SQL injection</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">MySQL Integration in PHP Projects</b></h5>
    <span class="accordion-text d-block">Connecting PHP to a MySQL database using mysqli and
    PDO</span>
    <span class="accordion-text d-block">Executing SELECT and CRUD operations</span>
    <span class="accordion-text d-block">Fetching and displaying data dynamically from the
    database</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Working with Sessions and Cookies</b></h5>
    <span class="accordion-text d-block">PHP sessions: Storing user-specific data</span>
    <span class="accordion-text d-block">Using cookies for persistent user login sessions</span>
    <span class="accordion-text d-block">Securing session data in web applications</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">File Handling in PHP</b></h5>
    <span class="accordion-text d-block">Working with file uploads in PHP</span>
    <span class="accordion-text d-block">Reading and writing files using PHP</span>
    <span class="accordion-text d-block">Understanding file permissions and file security best
    practices</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Object-Oriented Programming (OOP) in PHP</b></h5>
    <span class="accordion-text d-block">Introduction to OOP concepts: Classes, objects,
    inheritance</span>
    <span class="accordion-text d-block">Encapsulation and abstraction in PHP</span>
    <span class="accordion-text d-block">Real-world OOP applications: Structuring your code
    efficiently</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Advanced SQL Queries and Database Optimization</b></h5>
    <span class="accordion-text d-block">Writing complex SQL queries: JOINS, Subqueries, and
    UNIONs</span>
    <span class="accordion-text d-block">Optimizing queries for better performance</span>
    <span class="accordion-text d-block">Indexing, database normalization, and
    relationships</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Securing PHP Applications</b></h5>
    <span class="accordion-text d-block">Preventing SQL injection attacks with prepared
    statements</span>
    <span class="accordion-text d-block">Password encryption and safe user authentication</span>
    <span class="accordion-text d-block">Protecting against Cross-Site Scripting (XSS) and CSRF
    attacks</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Introduction to MVC Frameworks</b></h5>
    <span class="accordion-text d-block">Overview of the MVC (Model-View-Controller)
    architecture</span>
    <span class="accordion-text d-block">Benefits of using PHP frameworks like Laravel and
    CodeIgniter</span>
    <span class="accordion-text d-block">Structure your projects efficiently with MVC
    frameworks</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Securing PHP Applications</b></h5>
    <span class="accordion-text d-block">Preventing SQL injection attacks with prepared
    statements</span>
    <span class="accordion-text d-block">Password encryption and safe user authentication</span>
    <span class="accordion-text d-block">Protecting against Cross-Site Scripting (XSS) and CSRF
    attacks</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Introduction to MVC Frameworks</b></h5>
    <span class="accordion-text d-block">Overview of the MVC (Model-View-Controller)
    architecture</span>
    <span class="accordion-text d-block">Benefits of using PHP frameworks like Laravel and
    CodeIgniter</span>
    <span class="accordion-text d-block">Structure your projects efficiently with MVC
    frameworks</span>
    </div>
    </div>
    </div>
`;
    showMore10.innerHTML = `
    <div class="heading">
    WordPress Development
    </div>
    <div class="contents border-contents">
    <div class="row justify-content-between align-items-start mt-2">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Setting Up Your First Site</b></h5>
    <span class="accordion-text d-block">Install WordPress locally or on a live server</span>
    <span class="accordion-text d-block">Explore the dashboard and basic settings</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Customizing Themes</b></h5>
    <span class="accordion-text d-block">Install and customize free/premium themes.</span>
    <span class="accordion-text d-block">Use the Customizer and create a child theme.</span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Content Creation</b></h5>
    <span class="accordion-text d-block">Create Posts, Pages, and add media (images,
        videos).</span>
    <span class="accordion-text d-block">Organize content with categories and tags</span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Building Navigation</b></h5>
    <span class="accordion-text d-block">Create and customize navigation menus.</span>
    <span class="accordion-text d-block">Set up drop-down and multi-level menus</span>
    </div>
    </div>
    </div>
`;
    showMore11.innerHTML = `
    <div class="heading">
    SEO (Search Engine Optimization)
    </div>
    <div class="contents border-contents">
    <div class="row justify-content-between align-items-start mt-2">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">SEO Basics</b></h5>
    <span class="accordion-text d-block">
    <ul>
    <li>SEO (Search Engine Optimization):br
        Improves website visibility in search engines to gain organic traffic.</li>
    </ul>
    <ul>
    <li>Why It Matters: <br>
        Higher ranking = more traffic, trust, and conversions.
    </li>
    </ul>
    <ul>
    <li>How Search Engines Work: <br>
        Crawl → Index → Rank web pages based on relevance and quality.
    </li>
    </ul>
    <ul>
    <li>SERP (Search Engine Results Page): <br>
        Search results page showing links, snippets, images, and more.</li>
    </ul>
    <ul>
    <li>SERP Features: <br>
        Featured snippets, local packs, knowledge panels, etc.</li>
    </ul>
    <ul>
    <li>Types of SEO Practices:</li>
    </ul>
    <ul>
    <li>White Hat: Ethical methods (quality content, mobile-friendly).</li>
    </ul>
    <ul>
    <li>Black Hat: Risky tricks (keyword stuffing, hidden text).</li>
    </ul>
    <ul>
    <li>Gray Hat: Borderline tactics (some risk involved).</li>
    </ul>
    <ul>
    <li>Other Key Terms:</li>
    </ul>
    <ul>
    <li>On-page SEO</li>
    </ul>
    <ul>
    <li>Off-page SEO</li>
    </ul>
    <ul>
    <li>Technical SEO</li>
    </ul>
    <ul>
    <li>Keyword research</li>
    </ul>
    <ul>
    <li>SEO tools (Google Analytics, Search Console)</li>
    </ul>
    </span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">SEO Keywords – Quick Guide</b></h5>
    <span class="accordion-text d-block">
    <ul>
    <li>What Are Keywords?</li>
    <span class="accordion-text d-block">
        Words users type into search engines; crucial for ranking.
        <br> Why They Matter? <br> Drive targeted traffic, guide content strategy, and
        improve visibility.
    </span>
    </ul>
    </span>
    <h5><b class="contents-heading">Types of Keywords</b></h5>
    <span class="accordion-text d-block">
    <ul>
    <li>Short-Tail: Broad, high traffic (e.g., "shoes")</li>
    <li>Long-Tail: Specific, low competition (e.g., "best shoes for running")LSI
        Keywords: Related supporting terms</li>
    <li>Search Intent: Informational, Navigational, Transactional</li>
    <li>Branded vs Non-Branded</li>
    </ul>
    </span>
    <h5><b class="contents-heading">Keyword Research Essentials</b></h5>
    <span class="accordion-text d-block">
    <ul>
    <li>Steps: Brainstorm → Use tools → Analyze competitors → Group keywords</li>
    <li>Top Tools: Google Keyword Planner, Ubersuggest, SEMrush, Ahrefs</li>
    <li>Focus On: Search volume, difficulty, user intent</li>
    <li>Long-Tail Discovery: Use autocomplete, related searches</li>
    <li>Reverse Research: Analyze competitor keywords</li>
    </ul>
    </span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">On-Page SEO (Quick Overview)</b></h5>
    <span class="accordion-text d-block">
    <ul>
    <li>Definition: SEO changes made on your site (content, tags, structure).</li>
    <li>Importance: Improves visibility, ranking, and user experience.</li>
    </ul>
    </span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Core Elements</b></h5>
    <span class="accordion-text d-block">
    <ul>
    <li>Meta Title & Description: Keyword-rich, clear, and compelling.</li>
    <li>Headings (H1–H6): Organize content logically.</li>
    <li>Image SEO: Use ALT text and compressed formats.</li>
    <li>Internal Linking: Connect relevant pages for better navigation.</li>
    <li>Anchor Text: Use relevant and natural keywords in links.</li>
    </ul>
    </span>
    </div>
    </div>
    <div class="row justify-content-between align-items-start mt-4">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Advanced Tips</b></h5>
    <span class="accordion-text d-block">
    <ul>
    <li>Voice SEO: Optimize with natural language and FAQs.</li>
    <li>URL Structure: Keep short, keyword-based, and clean.</li>
    <li>Subdomain vs Directory: Directories are better for SEO.</li>
    <li>Website Structure: Use clear, crawlable navigation.</li>
    </ul>
    </span>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
    <h5><b class="contents-heading">Quick Checklist</b></h5>
    <span class="accordion-text d-block">
    <ul>
    <li>Optimized titles/descriptions</li>
    <li>Mobile-friendly & fast</li>
    <li>Image SEO: Use ALT text and compressed formats.</li>
    <li>Internal Linking: Connect relevant pages for better navigation.</li>
    <li>Anchor Text: Use relevant and natural keywords in links.</li>
    </ul>
    </span>
    </div>
    </div>
    </div>
`;

}



viewMore.addEventListener("click", () => {
        show(); // Yeh tab chalega jab viewMore click hoga
        viewMore.classList.add("d-none");
        viewLess.classList = "view-more viewLess d-block";
});

viewLess.addEventListener("click", () => {
        viewMore.classList = "view-more viewLess d-block";
        viewLess.classList.add("d-none");
        showMore1.innerHTML = "";
        showMore2.innerHTML = "";
        showMore3.innerHTML = "";
        showMore4.innerHTML = "";
        showMore5.innerHTML = "";
        showMore6.innerHTML = "";
        showMore7.innerHTML = "";
        showMore8.innerHTML = "";
        showMore9.innerHTML = "";
        showMore10.innerHTML = "";
        showMore11.innerHTML = "";
});



