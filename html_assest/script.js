let eAccounting = document.querySelector("#eAccounting");
let webDevelopment = document.querySelector("#webDevelopment");
let graphicDesign = document.querySelector("#graphicDesign");
let animation = document.querySelector("#animation");
let uiUx = document.querySelector("#ui-ux");

let diplomaImg = document.querySelector("#diplomaImg");
let courserName = document.querySelector("#courserName");
let diplomaSyllabus1 = document.querySelector("#diplomaSyllabus1");
let diplomaSyllabus2 = document.querySelector("#diplomaSyllabus2");
let stdContent1 = document.querySelector("#stdContent1");
let stdContent2 = document.querySelector("#stdContent2");
let stdContent3 = document.querySelector("#stdContent3");
let stdContent4 = document.querySelector("#stdContent4");
let stdContent5 = document.querySelector("#stdContent5");
let stdContent6 = document.querySelector("#stdContent6");
let downloadSyllabus = document.querySelector("#downloadSyllabus");


function renderAccounting() {
<<<<<<< HEAD
    downloadSyllabus.action = "e-accounting.php"
=======
    downloadSyllabus.action = "e_acconting.php"
>>>>>>> 440e665dc426222b3760d87c584e79b2d765210d
    courserName.innerHTML = "<b>E-Accounting Diploma Course</b>";
    diplomaImg.src = "assest/home-assets/render/e-accounting.webp";
    diplomaSyllabus1.innerHTML = `
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Excel</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Pivot Table
    Dashboard</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Tally Prime</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">MS Office</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Resume Making</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Interview
    Preparation</span>
    </div>
    `

    diplomaSyllabus2.innerHTML = `
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">MIS</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Tally.ERP9</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">GST</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">MS Word</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">MS PowerPoint</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Digital
    Marketing</span>
    </div>
    <div class="mb-3">
    <a href="e_acconting.html"
    class="nav-link text-primary explore-more">Explore More
    <i class="bi bi-chevron-right"></i>
    </a>
    </div>
    `

    stdContent1.innerHTML = `
    <div class="border border-1 border-dark std-content-padding rounded-5 text-center">
    <img src="assest/home-assets/demo.webp"
    class="img-fluid object-fit-cover d-block diploma-radius diploma-img-h-1"
    alt="">
    <span class="d-block mt-3 std-name">Student name: Anuj</span>
    <a href="" class="btn btn-primary w-75">Watch Video</a>
    </div>
    `

    stdContent2.innerHTML = `
    <div class="border border-1 border-dark std-content-padding rounded-5 text-center">
    <img src="assest/home-assets/demo.webp"
    class="img-fluid object-fit-cover d-block diploma-radius diploma-img-h-2"
    alt="">
    <span class="d-block mt-3 std-name">Student name: Anuj</span>
    <a href="" class="btn btn-primary w-75">Watch Video</a>
    </div>
    `

    stdContent3.innerHTML = `
    <div class="border border-1 border-dark std-content-padding rounded-5 text-center">
    <img src="assest/home-assets/demo.webp"
    class="img-fluid object-fit-cover d-block diploma-radius diploma-img-h-3"
    alt="">
    <span class="d-block mt-3 std-name">Student name: Anuj</span>
    <a href="" class="btn btn-primary w-75">Watch Video</a>
    </div>
    `
    stdContent4.innerHTML = `
    <div
    class="border border-1 border-dark std-content-padding rounded-5 text-center">
    <img src="assest/home-assets/demo.webp"
    class="img-fluid object-fit-cover d-block diploma-radius diploma-img-h-3"
    alt="">
    <span class="d-block mt-3 std-name">Student name: Anuj</span>
    <a href="" class="btn btn-primary w-75">Watch Video</a>
    </div>
    `

    stdContent5.innerHTML = `
    <div
    class="border border-1 border-dark std-content-padding rounded-5 text-center">
    <img src="assest/home-assets/demo.webp"
    class="img-fluid object-fit-cover d-block diploma-radius diploma-img-h-3"
    alt="">
    <span class="d-block mt-3 std-name">Student name: Anuj</span>
    <a href="" class="btn btn-primary w-75">Watch Video</a>
    </div>
    `

    stdContent6.innerHTML = `
    <div
    class="border border-1 border-dark std-content-padding rounded-5 text-center">
    <img src="assest/home-assets/demo.webp"
    class="img-fluid object-fit-cover d-block diploma-radius diploma-img-h-3"
    alt="">
    <span class="d-block mt-3 std-name">Student name: Anuj</span>
    <a href="" class="btn btn-primary w-75">Watch Video</a>
    </div>
    `

}


function renderWebDevelopment() {
    downloadSyllabus.action = "web.php"
    courserName.innerHTML = "<b>Web Development Diploma Course</b>";
    diplomaImg.src = "assest/home-assets/render/web-development.webp";

    diplomaSyllabus1.innerHTML = `
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">HTML5</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Bootstrap5 Table
    Dashboard</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">jQuery</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Nodejs</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Live project</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Admin panel</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">E-Commerce</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">LinkedIn profile Building</span>
    </div>
    `

    diplomaSyllabus2.innerHTML = `
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">JavaScript</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">React Js</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Portfolio</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">PHP & MYSQL</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">WordPress</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">GitHub</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">SEO</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Digital Marketing</span>
    </div>
    <div class="mb-3">
    <a href="web-development.html"
    class="nav-link text-primary explore-more">Explore More
    <i class="bi bi-chevron-right"></i>
    </a>
    </div>
    `

    stdContent1.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Anuj</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent2.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Anuj</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent3.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Anuj</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `
    stdContent4.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Anuj</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent5.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Anuj</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent6.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Anuj</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

}

function renderGraphicDesign() {
    downloadSyllabus.action = "graphic.php"
    courserName.innerHTML = "<b>Graphic Design Diploma Course</b>";
    diplomaImg.src = "assest/home-assets/render/graphic.webp";

    diplomaSyllabus1.innerHTML = `
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Photoshop</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">CorelDRAW</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Poster Designing</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Interview Preparation</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Digital Marketing</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">LinkedIn profile Building</span>
    </div>
    `

    diplomaSyllabus2.innerHTML = `
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Illustrator</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Logo Designing</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Banners Designing</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Portfolio</span>
    </div>
    <div class="mb-3">
    <a href="graphic.html"
    class="nav-link text-primary explore-more">Explore More
    <i class="bi bi-chevron-right"></i>
    </a>
    </div>
    `

    stdContent1.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Sammy</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent2.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Sammy</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent3.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Sammy</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `
    stdContent4.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Sammy</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent5.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Sammy</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent6.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Sammy</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `
}

function renderAnimation() {
    downloadSyllabus.action = "anime.php"
    courserName.innerHTML = "<b>Animation & Editing Design Diploma Course</b>";
    diplomaImg.src = "assest/home-assets/render/editing.webp";

    diplomaSyllabus1.innerHTML = `
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Abode After Effects</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Adobe Premier Pro</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Reel Making</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Adobe Audition</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Interview Preparation</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">LinkedIn profile Building</span>
    </div>
    `

    diplomaSyllabus2.innerHTML = `
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Blog Making</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Motion Graphic</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Digital Marketing</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Portfolio</span>
    </div>
    <div class="mb-3">
    <a href="animation.html"
    class="nav-link text-primary explore-more">Explore More
    <i class="bi bi-chevron-right"></i>
    </a>
    </div>
    `

    stdContent1.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Anish</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent2.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Anish</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent3.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Anish</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `
    stdContent4.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Anish</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent5.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Anish</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent6.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Anish</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `
}

function renderUiUx() {
    downloadSyllabus.action = "ui-ux.php"
    courserName.innerHTML = "<b>UI/UX Design Diploma Course</b>";
    diplomaImg.src = "assest/home-assets/render/ui-ux.webp";

    diplomaSyllabus1.innerHTML = `
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Figma</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Prototyping</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Adobe Audition</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Portfolio</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Interview Preparation</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">LinkedIn profile Building</span>
    </div>
    `

    diplomaSyllabus2.innerHTML = `
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Wireframing</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Blog making</span>
    </div>
    <div class="d-flex mt-1 align-items-center diploma-content-gap">
    <span class="d-block"><i
    class="bi bi-cloud-check diploma-icon"></i></span>
    <span class="d-block fw-semibold course-syllabus">Digital Marketing</span>
    </div>
    <div class="mb-3">
    <a href="ui-ux.html"
    class="nav-link text-primary explore-more">Explore More
    <i class="bi bi-chevron-right"></i>
    </a>
    </div>
    `

    stdContent1.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Shubham</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent2.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Shubham</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent3.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Shubham</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `
    stdContent4.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Shubham</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent5.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Shubham</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `

    stdContent6.innerHTML = `
    <div class="border border-1 border-dark std-content-padding text-center bg-color" id="stdContent1">
    <img src="assest/home-assets/demo.webp" class="w-100 object-fit-cover d-block diploma-radius-other" alt="">
    <span class="d-block mt-3 std-name-other text-start">Student name: Shubham</span>
    <span class="std-name-text text-start d-block">Website:United</span>
    <span class="std-name-text text-start d-block">GitHub:Link</span>
    <div class="row">
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">Veiw Project</a>
    </div>
    <div class="col-6">
    <a href="" class="d-block btn btn-primary project-text">watch</a>
    </div>
    </div>
    </div>
    `
}

<<<<<<< HEAD
// renderAccounting();
=======
renderAccounting();
>>>>>>> 440e665dc426222b3760d87c584e79b2d765210d
// renderWebDevelopment();
// renderGraphicDesign();
// renderAnimation();
// renderUiUx();

eAccounting.addEventListener("click", function () {
    renderAccounting();
    eAccounting.classList.add("js-eAccountingBtn")
    webDevelopment.classList.remove("js-webDevlopmentBtn")
    graphicDesign.classList.remove("js-graphicBtn")
    animation.classList.remove("js-animationBtn")
    uiUx.classList.remove("js-uiUxBtn")
})

webDevelopment.addEventListener("click", function () {
    renderWebDevelopment();
    eAccounting.classList.remove("js-eAccountingBtn")
    webDevelopment.classList.add("js-webDevlopmentBtn")
    graphicDesign.classList.remove("js-graphicBtn")
    animation.classList.remove("js-animationBtn")
    uiUx.classList.remove("js-uiUxBtn")
})

graphicDesign.addEventListener("click", function () {
    renderGraphicDesign();
    eAccounting.classList.remove("js-eAccountingBtn")
    webDevelopment.classList.remove("js-webDevlopmentBtn")
    graphicDesign.classList.add("js-graphicBtn")
    animation.classList.remove("js-animationBtn")
    uiUx.classList.remove("js-uiUxBtn")


})
animation.addEventListener("click", function () {
    renderAnimation();
    eAccounting.classList.remove("js-eAccountingBtn")
    webDevelopment.classList.remove("js-webDevlopmentBtn")
    graphicDesign.classList.remove("js-graphicBtn")
    animation.classList.add("js-animationBtn")
    uiUx.classList.remove("js-uiUxBtn")
})
uiUx.addEventListener("click", function () {
    renderUiUx();
    eAccounting.classList.remove("js-eAccountingBtn")
    webDevelopment.classList.remove("js-webDevlopmentBtn")
    graphicDesign.classList.remove("js-graphicBtn")
    animation.classList.remove("js-animationBtn")
    uiUx.classList.add("js-uiUxBtn")
})