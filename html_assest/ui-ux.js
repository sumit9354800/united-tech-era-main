let figmaBtn = document.querySelector("#figma");
let xdBtn = document.querySelector("#xd");
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

function figma() {
    img1.src = "assest/ui-ux/Assignments/figma/figma1.webp";
    img2.src = "assest/ui-ux/Assignments/figma/figma2.webp";
    img3.src = "assest/ui-ux/Assignments/figma/figma3.webp";
    img4.src = "assest/ui-ux/Assignments/figma/figma4.webp";
    img5.src = "assest/ui-ux/Assignments/figma/figma5.webp";
    img6.src = "assest/ui-ux/Assignments/figma/figma6.webp";

    content1.innerHTML = `
    <h5 class="card-title"><b class="card-heading">E-commerce App (UX Flow + UI Design)</b>
    </h5>
    <p class="card-text">
    A sleek E-commerce app design in Figma, featuring intuitive UX flow for seamless
    navigation, clean UI design with easy product browsing, quick checkout, and vibrant
    product pages for a user-friendly experience.
    </p>
    `
    content2.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Fully Responsive Website</b>
    </h5>
    <p class="card-text">
    A fully responsive website design in Figma, optimized for all devices. Featuring
    adaptive UI/UX design, smooth navigation, fast load times, and visually appealing
    layouts, ensuring seamless user experience across platforms.
    </p>
    `
    content3.innerHTML = `
    <h5 class="card-title"><b class="card-heading">E-Learning Platform (Web + Mobile)</b>
    </h5>
    <p class="card-text">
    An intuitive E-learning platform design in Figma, seamlessly integrated for both web
    and mobile. Featuring engaging course layouts, interactive modules, progress
    tracking, and responsive UI for a smooth learning experience.
    </p>
    `
    content4.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Food Delivery App + Admin Panel</b>
    </h5>
    <p class="card-text">
    A comprehensive Food Delivery App design in Figma, including both user app and admin
    panel. Features intuitive order tracking, menu browsing, real-time updates, and
    streamlined admin management for efficient operations.
    </p>
    `
    content5.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Travel Booking App</b></h5>
    <p class="card-text">
    A seamless Travel Booking App design in Figma, featuring intuitive search
    functionality, detailed itineraries, booking management, and real-time updates.
    Provides users with an engaging, responsive experience for easy travel planning.
    </p>
    `
    content6.innerHTML = `
    <h5 class="card-title"><b class="card-heading">EBooking System (Flights or Hotels)</b>
    </h5>
    <p class="card-text">
    A streamlined Booking System design in Figma for flights or hotels, featuring simple
    search filters, booking management, real-time availability, and user-friendly
    interface for a seamless reservation experience across devices.
    </p>
    `

}

function xd() {
    img1.src = "assest/ui-ux/Assignments/xd/xd1.webp";
    img2.src = "assest/ui-ux/Assignments/xd/xd2.webp";
    img3.src = "assest/ui-ux/Assignments/xd/xd3.webp";
    img4.src = "assest/ui-ux/Assignments/xd/xd4.webp";
    img5.src = "assest/ui-ux/Assignments/xd/xd5.webp";
    img6.src = "assest/ui-ux/Assignments/xd/xd6.webp";

    content1.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Mobile App Screen (UI Design)</b></h5>
    <p class="card-text">
  A sleek mobile app screen UI design created in Adobe XD, showcasing intuitive navigation, modern layout, and visually appealing elements for an enhanced user experience on smartphones.
    </p>
    `
    content2.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Landing Page (Web Design)</b>
    </h5>
    <p class="card-text">
    A clean and engaging landing page web design crafted in Adobe XD, featuring a responsive layout, compelling visuals, and clear call-to-action elements to drive user interaction and conversions.
    </p>
    `
    content3.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Restaurant Menu Mobile App</b></h5>
    <p class="card-text">
    A modern restaurant menu mobile app design built in Adobe XD, offering a user-friendly interface with categorized dishes, vibrant food imagery, and smooth navigation for seamless browsing and ordering.
    </p>
    `
    content4.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Multi-Platform Dashboard (Web + Mobile)</b>
    </h5>
    <p class="card-text">
    A versatile multi-platform dashboard design in Adobe XD, optimized for both web and mobile, featuring responsive layouts, real-time data visualization, and intuitive navigation for efficient user interaction across devices.
    </p>
    `
    content5.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Event Management App</b></h5>
    <p class="card-text">
    An intuitive event management app design created in Adobe XD, featuring seamless scheduling, attendee tracking, and real-time updates with a clean, user-friendly interface optimized for mobile engagement.
    </p>
    `
    content6.innerHTML = `
    <h5 class="card-title"><b class="card-heading">To-Do List App Interface</b></h5>
    <p class="card-text">
    A minimalist to-do list app interface designed in Adobe XD, offering smooth task management, priority tagging, and intuitive navigation with a clean layout for efficient daily planning on mobile devices.
    </p>
    `

}



figmaBtn.addEventListener("click", () => {
    figma();
    figmaBtn.classList.add("js-figma");
    xdBtn.classList.remove("js-xd");
})

xdBtn.addEventListener("click", () => {
    xd();
    xdBtn.classList.add("js-xd");
    figmaBtn.classList.remove("js-figma");
})

// figma();
xd();

