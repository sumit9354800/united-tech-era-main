let preproBtn = document.querySelector("#prePro");
let afterEffBtn = document.querySelector("#affterEff");
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

function prePro() {
    img1.src = "assest/animation & editing page/Assignments that you will handel/premier pro/pre-pro1.webp";
    img2.src = "assest/animation & editing page/Assignments that you will handel/premier pro/pre-pro2.webp";
    img3.src = "assest/animation & editing page/Assignments that you will handel/premier pro/pre-pro3.webp";
    img4.src = "assest/animation & editing page/Assignments that you will handel/premier pro/pre-pro4.webp";
    img5.src = "assest/animation & editing page/Assignments that you will handel/premier pro/pre-pro5.webp";
    img6.src = "assest/animation & editing page/Assignments that you will handel/premier pro/pre-pro6.webp";

    content1.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Promotional Video</b></h5>
    <p class="card-text">
    A promotional video highlights a product, service, or brand, using engaging visuals,
    persuasive messaging, and dynamic editing to attract and inform the target audience,
    driving interest and conversions
    </p>
    `
    content2.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Short Film Trailer</b>
    </h5>
    <p class="card-text">
    A short film trailer provides a captivating preview of the film's plot, characters,
    and tone, using dramatic cuts, music, and visuals to spark interest and entice
    viewers to watch the full film.
    </p>
    `
    content3.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Interactive YouTube Video</b></h5>
    <p class="card-text">
    An interactive YouTube video allows viewers to make choices that influence the
    storyline or content, creating a personalized experience with clickable options and
    multiple outcomes for increased engagement and interactivity.
    </p>
    `
    content4.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Documentary-Style Video</b>
    </h5>
    <p class="card-text">
    An interactive documentary-style video engages viewers by allowing them to explore
    different story paths, offering choices to dive deeper into specific topics,
    interviews, or perspectives, enhancing the educational experience.
    </p>
    `
    content5.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Commercials Ads Video</b></h5>
    <p class="card-text">
    A commercials ad video promotes a product, service, or brand through engaging
    visuals, persuasive messaging, and strong calls-to-action, aiming to captivate the
    audience and drive sales or brand awareness.
    </p>
    `
    content6.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Explainer Videos</b>
    </h5>
    <p class="card-text">
    Interactive explainer videos engage viewers by allowing them to choose specific
    topics or navigate through different sections, making complex information easier to
    understand while offering a personalized and engaging learning experience.
    </p>
    `

}

function afterEff() {
    img1.src = "assest/animation & editing page/Assignments that you will handel/after effects/affer-effact1.webp";
    img2.src = "assest/animation & editing page/Assignments that you will handel/after effects/affer-effact2.webp";
    img3.src = "assest/animation & editing page/Assignments that you will handel/after effects/affer-effact3.webp";
    img4.src = "assest/animation & editing page/Assignments that you will handel/after effects/affer-effact4.webp";
    img5.src = "assest/animation & editing page/Assignments that you will handel/after effects/affer-effact5.webp";
    img6.src = "assest/animation & editing page/Assignments that you will handel/after effects/affer-effact6.webp";

    content1.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Animated Logo Intro</b></h5>
    <p class="card-text">
   An animated logo intro creates a dynamic and engaging introduction for a brand, using motion graphics, 
   text animation, and smooth transitions to bring the logo to life and captivate the audience.
    </p>
    `
    content2.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Lower Thirds Animation</b>
    </h5>
    <p class="card-text">
   Lower thirds animation introduces text elements smoothly at the bottom of the screen, commonly used for names, titles, or information, adding style and professionalism to videos like interviews or broadcasts.
    </p>
    `
    content3.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Social Media Ad Animation</b></h5>
    <p class="card-text">
  Social media ad animation creates engaging, eye-catching content with dynamic text, images, and effects, designed to capture attention quickly and drive user interaction, ideal for platforms like Instagram, Facebook, and TikTok.
    </p>
    `
    content4.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Motion Graphics Infographic</b>
    </h5>
    <p class="card-text">
   A motion graphics infographic visually represents data or complex concepts through animated charts, graphs, and icons, making information more engaging, accessible, and easy to understand for audiences in various media formats.
    </p>
    `
    content5.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Text Effects for a Promo Video/b></h5>
    <p class="card-text">
   Text effects for a promo video use dynamic animations to highlight key messages, emphasizing important details with creative transitions, motion graphics, and typography to engage viewers and drive attention to the product.
    </p>
    `
    content6.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Dynamic Title Sequence</b></h5>
    <p class="card-text">
    A dynamic title sequence uses animated text, motion graphics, and creative transitions to introduce a film, TV show, or video, setting the tone and engaging the audience right from the start.
    </p>
    `

}



preproBtn.addEventListener("click", () => {
    prePro();
    preproBtn.classList.add("js-prePro");
    afterEffBtn.classList.remove("js-afterEff");
})

afterEffBtn.addEventListener("click", () => {
    afterEff();
    afterEffBtn.classList.add("js-afterEff");
    preproBtn.classList.remove("js-prePro");
})

prePro();
// afterEff();

