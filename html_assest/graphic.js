let photoshopBtn = document.querySelector("#photoshop");
let illustratorBtn = document.querySelector("#illustrator");
let corelDrawBtn = document.querySelector("#corelDraw");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
let img5 = document.querySelector("#img5");
let img6 = document.querySelector("#img6");
let content1 = document.querySelector("#content1");
let content2 = document.querySelector("#content2");
let content3 = document.querySelector("#content3");
let content4 = document.querySelector("#content4");
let content5 = document.querySelector("#content5");
let content6 = document.querySelector("#content6");

function photoshop() {
    img1.src = "assest/graphic/Assignments you will handel/photoshop/photoshop1.webp";
    img2.src = "assest/graphic/Assignments you will handel/photoshop/photoshop2.webp";
    img3.src = "assest/graphic/Assignments you will handel/photoshop/photoshop3.webp";
    img4.src = "assest/graphic/Assignments you will handel/photoshop/photoshop4.webp";
    img5.src = "assest/graphic/Assignments you will handel/photoshop/photoshop5.webp";
    img6.src = "assest/graphic/Assignments you will handel/photoshop/photoshop6.webp";

    content1.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Surreal Photo Manipulation</b></h5>
    <p class="card-text">
    Goal: Create a dreamlike or impossible scene using multiple images. Skills/Tools
    Used: Layer masks & blending modes Adjustment layers (color grading, exposure)
    Puppet Warp & Liquify Custom brushes and textures
    </p>
    `
    content2.innerHTML = `
    <h5 class="card-title"><b class="card-heading"> Cinematic Poster Creation</b>
    </h5>
    <p class="card-text">
    Goal: Design a high-impact, Hollywood-style poster for a fictional film.
    Skills/Tools Used: Typography & font pairing Blending multiple images seamlessly
    Creating dramatic lighting effects Using smart objects for non-destructive edits
    </p>
    `
    content3.innerHTML = `
    <h5 class="card-title"><b class="card-heading"> Digital Painting from Scratch</b></h5>
    <p class="card-text">
    Goal: Paint a realistic or stylized portrait using only Photoshop brushes.
    Skills/Tools Used: Custom brushes & brush settings Smudge Tool, Dodge & Burn Layers
    for underpainting and detail work Use of a reference photo
    </p>
    `
    content4.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Double Exposure Effect</b>
    </h5>
    <p class="card-text">
    Goal: Combine two images into one dramatic composition. Skills/Tools Used: Layer
    masks
    Gradient maps Camera Raw filter for color gradingBlending modes for silhouette work
    </p>
    `
    content5.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Magazine or Editorial Spread</b></h5>
    <p class="card-text">
    Goal: Create a 2-page spread with text and images. Skills/Tools Used: Grids and
    guides
    Paragraph and character styles Image masking and composition Color harmony and
    typography hierarchy
    </p>
    `
    content6.innerHTML = `
    <h5 class="card-title"><b class="card-heading"> Fantasy Creature or Character Concept
    Art</b>
    </h5>
    <p class="card-text">
    Goal: Design a fantasy creature or original character.
    Skills/Tools Used: Layered sketch-to-painting process
    Texture overlays 3D models (optional) Lighting and atmospheric depth techniques
    </p>
    `

}

function illustrator() {
    img1.src = "assest/graphic/Assignments you will handel/Illustrator/Illustrator1.webp";
    img2.src = "assest/graphic/Assignments you will handel/Illustrator/Illustrator2.webp";
    img3.src = "assest/graphic/Assignments you will handel/Illustrator/Illustrator3.webp";
    img4.src = "assest/graphic/Assignments you will handel/Illustrator/Illustrator4.webp";
    img5.src = "assest/graphic/Assignments you will handel/Illustrator/Illustrator5.webp";
    img6.src = "assest/graphic/Assignments you will handel/Illustrator/Illustrator6.webp";

    content1.innerHTML = `
    <h5 class="card-title"><b class="card-heading"> Logo Design</b></h5>
    <p class="card-text">
    Goal: Design a detailed isometric city scene from scratch. Skills/Tools Used: Isometric grid setup3D Extrude & Bevel Pathfinder for building shapes
    Global colors and symbols for reusability
    </p>
    `
    content2.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Card Design</b>
    </h5>
        <p class="card-text">
   Goal: Create your own unique display or full alphabet typeface. Skills/Tools Used: Pen Tool and shape builder Glyphs panel (if working with font software too) Guidelines for x-height and baselines
Export to font software like Fontself or FontForge
    </p>
    `
    content3.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Customer Relationship Management (CRM) System</b></h5>
        <p class="card-text">
    Goal: Create your own unique display or full alphabet typeface. Skills/Tools Used: Pen Tool and shape builder Glyphs panel (if working with font software too) Guidelines for x-height and baselines
    Export to font software like Fontself or FontForge
    </p>
    `
    content4.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Infographic Design</b>
    </h5>
    <p class="card-text">
    Goal: Design a complex character or creature in a cartoon or realistic style. Skills/Tools Used: Layered drawing techniques Mesh Tool or Gradient Tool for shading Pathfinder and Compound Shapes
    Symbol sprayer for textures/details
    </p>
    `
    content5.innerHTML = `
    <h5 class="card-title"><b class="card-heading"> Portrait Illustration</b></h5>
    <p class="card-text">
    Goal: Build a data-driven infographic from scratch. Skills/Tools Used: Charts (via Illustrator or Excel import) Custom icon sets Alignment and layout grids
    Color coding and visual hierarchy
    </p>
    `
    content6.innerHTML = `
    <h5 class="card-title"><b class="card-heading"> Packaging Design</b></h5>
    <p class="card-text">
    Goal: Create a Heads-Up Display (HUD) for a game or sci-fi interface. Skills/Tools Used: Grids and symmetry tools Stroke effects and glow techniques Opacity masks Radial repeat for circular elements
    </p>
    `

}

function corelDraw() {
    img1.src = "assest/graphic/Assignments you will handel/Corel DRAW/Corel-DRAW1.webp";
    img2.src = "assest/graphic/Assignments you will handel/Corel DRAW/Corel-DRAW2.webp";
    img3.src = "assest/graphic/Assignments you will handel/Corel DRAW/Corel-DRAW3.webp";
    img4.src = "assest/graphic/Assignments you will handel/Corel DRAW/Corel-DRAW4.webp";
    img5.src = "assest/graphic/Assignments you will handel/Corel DRAW/Corel-DRAW5.webp";
    img6.src = "assest/graphic/Assignments you will handel/Corel DRAW/Corel-DRAW6.webp";

    content1.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Brand Identity Display</b></h5>
    <p class="card-text">
  Code Your Own UI Components" involves creating custom, reusable interface elements using HTML, CSS, and JavaScript for flexibility, control, and optimized performance in web or mobile applications
    </p>
    `
    content2.innerHTML = `
    <h5 class="card-title"><b class="card-heading"> Product Packaging Design</b>
    </h5>
       <p class="card-text">
 A Learning Management System (LMS) is a software platform for delivering, tracking, and managing educational content, facilitating online courses, assessments, and learner engagement in a structured and efficient manner.
    </p>
    `
    content3.innerHTML = `
    <h5 class="card-title"><b class="card-heading"> Digital Portrait Creation</b></h5>
       <p class="card-text">
  A Customer Management System (CMS) is software that helps businesses manage customer interactions, track sales, support services, and analyze data to improve relationships, streamline processes, and enhance customer satisfaction.
    </p>
    `
    content4.innerHTML = `
    <h5 class="card-title"><b class="card-heading"> Infographic Design</b>
    </h5>
      <p class="card-text">
A Todo List Application with API allows users to create, manage, and track tasks through a web interface, while interacting with a backend API for data storage, retrieval, and synchronization.
    </p>
    `
    content5.innerHTML = `
    <h5 class="card-title"><b class="card-heading"> Event Poster or Magazine Cover</b></h5>
       <p class="card-text">
  An E-Commerce Store is an online platform where businesses sell products or services, enabling customers to browse, purchase, and pay for items securely while managing inventory, orders, and customer data.
    </p>
    `
    content6.innerHTML = `
    <h5 class="card-title"><b class="card-heading"> Interactive PDF Design</b></h5>
       <p class="card-text">
   A Real-Time Chat Application enables instant messaging between users, allowing seamless communication with features like notifications, group chats, and media sharing, powered by real-time data synchronization and low-latency technology.
    </p>
    `
}



photoshopBtn.addEventListener("click", () => {
    photoshop();
   photoshopBtn.classList.add("js-photoshop");
   illustratorBtn.classList.remove("js-illustrator");
   corelDrawBtn.classList.remove("js-CorelDraw");
})

illustratorBtn.addEventListener("click", () => {
    illustrator();
   photoshopBtn.classList.remove("js-photoshop");
   illustratorBtn.classList.add("js-illustrator");
   corelDrawBtn.classList.remove("js-CorelDraw");
})

corelDrawBtn.addEventListener("click", () => {
    corelDraw();
   photoshopBtn.classList.remove("js-photoshop");
   illustratorBtn.classList.remove("js-illustrator");
   corelDrawBtn.classList.add("js-CorelDraw");
})

photoshop();
// illustrator();
// corelDraw();
