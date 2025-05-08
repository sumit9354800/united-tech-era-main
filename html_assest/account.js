let excetbtn = document.querySelector("#excelBtn");
let MISBtn = document.querySelector("#MISBtn");
let tallyERPBtn = document.querySelector("#tallyERPBtn");
let tallyPrimeBtn = document.querySelector("#tallyPrimeBtn");
let mpBtn = document.querySelector("#mpBtn");
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

function excel() {
   img1.src = "assest/E-accounting-page/Assignments you will handel/excel/excel-1.webp";
   img2.src = "assest/E-accounting-page/Assignments you will handel/excel/excel-2.webp";
   img3.src = "assest/E-accounting-page/Assignments you will handel/excel/excel-3.webp";
   img4.src = "assest/E-accounting-page/Assignments you will handel/excel/excel-4.webp";
   img5.src = "assest/E-accounting-page/Assignments you will handel/excel/excel-5.webp";
   img6.src = "assest/E-accounting-page/Assignments you will handel/excel/excel-6.webp";

   content1.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Sales Performance Dashboard For A
    Business</b></h5>
    <p class="card-text">
    A Sales Performance Dashboard visually tracks sales metrics like revenue, products,
    reps, and regions, helping businesses analyze trends, measure goals, and make informed
    decisions to boost growth.
    </p>
    `
   content2.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Financial Performance Analysis Dashboard</b>
    </h5>
    <p class="card-text">
    A Financial Performance Analysis Dashboard tracks key financial metrics like revenue,
    expenses, profit margins, and ROI, providing businesses with insights to assess
    financial health, optimize decisions, and drive sustainable growth.
    </p>
    `
   content3.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Customer Segmentation Dashboard</b></h5>
    <p class="card-text">
    A Financial Performance Analysis Dashboard tracks key financial metrics like revenue,
    expenses, profit margins, and ROI, providing businesses with insights to assess
    financial health, optimize decisions, and drive sustainable growth.
    </p>
    `
   content4.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Budget Tracker Dashboard For A Business</b>
    </h5>
    <p class="card-text">
    A budget tracker dashboard monitors business expenses and revenues, providing real-time
    insights into financial performance. It helps track spending, compare against budgets,
    and ensure financial goals are met effectively.
    </p>
    `
   content5.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Expense Log Dashboard</b></h5>
    <p class="card-text">
    An expense log dashboard tracks and categorizes business expenditures, providing
    real-time visibility into spending patterns. It helps monitor budgets, identify
    cost-saving opportunities, and ensure financial efficiency across departments.
    </p>
    `
   content6.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Personal Finance Tracker Dashboard</b></h5>
    <p class="card-text">
    A personal finance tracker dashboard helps individuals manage income, expenses, savings,
    and investments. It provides insights into financial health, tracks spending habits, and
    supports informed decision-making for achieving financial goals.
    </p>
    `

}
function MIS() {
   img1.src = "assest/E-accounting-page/Assignments you will handel/MIS/mis-1.webp";
   img2.src = "assest/E-accounting-page/Assignments you will handel/MIS/mis-2.webp";
   img3.src = "assest/E-accounting-page/Assignments you will handel/MIS/mis-3.webp";
   img4.src = "assest/E-accounting-page/Assignments you will handel/MIS/mis-4.webp";
   img5.src = "assest/E-accounting-page/Assignments you will handel/MIS/mis-5.webp";
   img6.src = "assest/E-accounting-page/Assignments you will handel/MIS/mis-6.webp";

   content1.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Inventory Management System</b></h5>
    <p class="card-text">
   A system for tracking inventory levels, orders, sales, and deliveries.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Add/update/delete products</li>
    <li class="list-group-items"> Track stock levels</li>
    <li class="list-group-items"> Generate restocking alerts</li>
    <li class="list-group-items"> Reporting (e.g., low stock, fast-moving items)</li>
    </ul>
    `
   content2.innerHTML = `
    <h5 class="card-title"><b class="card-heading"> Employee Attendance and Payroll System</b>
    </h5>
       <p class="card-text">
   Manage employee attendance records and automatically calculate salaries.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Daily attendance (check-in/check-out)</li>
    <li class="list-group-items"> Leave management</li>
    <li class="list-group-items"> Payroll generation</li>
    <li class="list-group-items"> Reports: salary slips, monthly attendance</li>
    </ul>
    `
   content3.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Customer Relationship Management (CRM) System</b></h5>
       <p class="card-text">
   A system to manage a company's interactions with current and potential customers.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Contact database</li>
    <li class="list-group-items"> Lead tracking</li>
    <li class="list-group-items"> Follow-up reminders</li>
    <li class="list-group-items"> Sales reporting</li>
    </ul>
    `
   content4.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Library Management System</b>
    </h5>
      <p class="card-text">
 A system to manage book inventories, member registrations, and book issuance.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Add/update books</li>
    <li class="list-group-items"> Issue/return books</li>
    <li class="list-group-items"> Fine calculation for overdue books</li>
    <li class="list-group-items"> Member database</li>
    </ul>
    `
   content5.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Hospital Management System</b></h5>
       <p class="card-text">
   Manage hospital operations like patient records, doctor scheduling, and billing.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Patient registration</li>
    <li class="list-group-items"> Doctor appointment booking</li>
    <li class="list-group-items"> Medical records management</li>
    <li class="list-group-items"> Billing and discharge summary</li>
    </ul>
    `
   content6.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Online Course Registration System</b></h5>
       <p class="card-text">
    A system for students to register for courses online.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Student login/signup</li>
    <li class="list-group-items"> Course selection and enrollment</li>
    <li class="list-group-items"> Timetable generation</li>
    <li class="list-group-items"> Payment integration (optional)</li>
    </ul>
    `

}

function tallyERP() {
   img1.src = "assest/E-accounting-page/Assignments you will handel/Tally.ERP9/tally erp9 1.webp";
   img2.src = "assest/E-accounting-page/Assignments you will handel/Tally.ERP9/tally erp9 2.webp";
   img3.src = "assest/E-accounting-page/Assignments you will handel/Tally.ERP9/tally erp9 3.webp";
   img4.src = "assest/E-accounting-page/Assignments you will handel/Tally.ERP9/tally erp9 4.webp";
   img5.src = "assest/E-accounting-page/Assignments you will handel/Tally.ERP9/tally erp9 5.webp";
   img6.src = "assest/E-accounting-page/Assignments you will handel/Tally.ERP9/tally erp9 6.webp";

   content1.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Small Business Accounting System</b></h5>
    <p class="card-text">
  Set up a company in Tally and manage all financial transactions for a small business.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Company creation</li>
    <li class="list-group-items"> Ledger creation (Customers, Vendors, Bank, Cash)</li>
    <li class="list-group-items"> Sales and Purchase Voucher entries</li>
    <li class="list-group-items"> Generate Balance Sheet and Profit & Loss Account</li>
    </ul>
    `
   content2.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Inventory Management for a Retail Store</b>
    </h5>
       <p class="card-text">
  Use Tally's Inventory features to manage stock for a retail business.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Create stock groups, categories, and items</li>
    <li class="list-group-items"> Set unit measurements and pricing</li>
    <li class="list-group-items"> Enter stock inwards (purchases) and stock outwards (sales)</li>
    <li class="list-group-items"> Generate stock summary and movement reports</li>
    </ul>
    `
   content3.innerHTML = `
    <h5 class="card-title"><b class="card-heading">GST Accounting Project</b></h5>
       <p class="card-text">
  Manage GST-compliant transactions in Tally ERP 9.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Enable GST settings</li>
    <li class="list-group-items"> Create GST ledgers (CGST, SGST, IGST)</li>
    <li class="list-group-items"> Record GST-compliant sales and purchase vouchers</li>
    <li class="list-group-items"> Generate GSTR-1 and GSTR-3B reports</li>
    </ul>
    `
   content4.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Payroll Management System</b>
    </h5>
      <p class="card-text">
 Create and manage employee payroll in Tally.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Enable Payroll feature</li>
    <li class="list-group-items"> Create Employee Masters</li>
    <li class="list-group-items"> Create Pay Heads (Basic Salary, HRA, Deductions)</li>
    <li class="list-group-items"> Generate Salary Slips and Payroll Reports</li>
    </ul>
    `
   content5.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Bank Reconciliation System</b></h5>
       <p class="card-text">
   Manage and reconcile bank transactions with Tally.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Record all bank receipts and payments</li>
    <li class="list-group-items"> Enter bank statements manually</li>
    <li class="list-group-items"> Perform bank reconciliation in Tally</li>
    <li class="list-group-items"> Generate Bank Reconciliation Statements</li>
    </ul>
    `
   content6.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Manufacturing Company Accounts and Inventory</b></h5>
       <p class="card-text">
   Set up a simple manufacturing company's accounts and stock in Tally.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Record raw material consumption and finished goods production</li>
    <li class="list-group-items"> Maintain job costing reports</li>
    <li class="list-group-items"> Generate manufacturing journal production reports</li>
    </ul>
    `
}

function tallyPrime() {
   img1.src = "assest/E-accounting-page/Assignments you will handel/Tally prime/1 tallyprime.webp";
   img2.src = "assest/E-accounting-page/Assignments you will handel/Tally prime/2 tally prime.webp";
   img3.src = "assest/E-accounting-page/Assignments you will handel/Tally prime/3 tally prime.webp";
   img4.src = "assest/E-accounting-page/Assignments you will handel/Tally prime/4 tally prime.webp";
   img5.src = "assest/E-accounting-page/Assignments you will handel/Tally prime/5 tally prime.webp";
   img6.src = "assest/E-accounting-page/Assignments you will handel/Tally prime/6 tally prime.webp";

   content1.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Basic Company Setup and Accounting Project</b></h5>
    <p class="card-text">
   Create a company and record basic financial transactions.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Company creation with basic details</li>
    <li class="list-group-items"> Pass vouchers for sales, purchase, payment...</li>
    <li class="list-group-items"> View Trial Balance, Profit & Loss, and Balance Sheet</li>
    </ul>
    `
   content2.innerHTML = `
    <h5 class="card-title"><b class="card-heading">GST-Based Sales and Purchase System</b>
    </h5>
       <p class="card-text">
  Manage GST-compliant purchases and sales with automatic tax calculation.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Enable GST settings in Tally Prime</li>
    <li class="list-group-items"> Create GST ledgers</li>
    <li class="list-group-items"> Create party ledgers with GSTIN</li>
    <li class="list-group-items"> Generate GST returns like GSTR-1 and GSTR-3B</li>
    <li class="list-group-items"> Record GST sales and purchases</li>
    </ul>
    `
   content3.innerHTML = `
    <h5 class="card-title"><b class="card-heading"> Inventory Management with Godown Tracking</b></h5>
       <p class="card-text">
 Manage inventory across multiple godowns/warehouses.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Create stock groups, categories, units</li>
    <li class="list-group-items"> Generate stock summary reports</li>
    <li class="list-group-items"> Record stock transfers between godowns</li>
    </ul>
    `
   content4.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Payroll and Employee Management System</b>
    </h5>
      <p class="card-text">
 Manage employee records and salary processing.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Enable Payroll feature</li>
    <li class="list-group-items"> Create employee groups and employee masters</li>
    <li class="list-group-items"> Record salary payments</li>
    <li class="list-group-items"> Generate pay slips and employee reports</li>
    </ul>
    `
   content5.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Order Processing Management System</b></h5>
       <p class="card-text">
  Manage sales and purchase orders from quotation to delivery.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Track pending orders</li>
    <li class="list-group-items"> Link purchase/sales orders with actual invoices</li>
    <li class="list-group-items"> Record Purchase Orders (PO) and Sales Orders (SO)</li>
    </ul>
    `
   content6.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Banking and Auto Bank Reconciliation Project</b></h5>
       <p class="card-text">
   Manage company banking transactions and automatic reconciliation
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Create bank ledgers</li>
    <li class="list-group-items"> Record payments, receipts, and deposits</li>
    <li class="list-group-items"> Import bank statement into Tally Prime (using Excel or Bank feed)</li>
    </ul>
    `
}

function mp() {
   img1.src = "assest/E-accounting-page/Assignments you will handel/ms word powerpoint/1 ms word.webp";
   img2.src = "assest/E-accounting-page/Assignments you will handel/ms word powerpoint/2 ms word.webp";
   img3.src = "assest/E-accounting-page/Assignments you will handel/ms word powerpoint/3 ms word.webp";
   img4.src = "assest/E-accounting-page/Assignments you will handel/ms word powerpoint/4 ms word.webp";
   img5.src = "assest/E-accounting-page/Assignments you will handel/ms word powerpoint/5 ms word.webp";
   img6.src = "assest/E-accounting-page/Assignments you will handel/ms word powerpoint/6 ms word.webp";

   content1.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Professional Resume / CV</b></h5>
    <p class="card-text">
    Create a personal or fictional professional resume
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Skills Used: Formatting, tables, bullet points, sections (Education, Work Experience, Skills).</li>
    <li class="list-group-items"> Extra: Use different templates, borders, and simple design elements.</li>
    </ul>
    `
   content2.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Company Profile Document</b>
    </h5>
       <p class="card-text">
   Create a company profile for a real or imaginary company.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Skills Used: Page layout, inserting images, tables, headers, and footers.</li>
    <li class="list-group-items"> Content: Company overview, services, mission/vision, contact info.</li>
    </ul>
    `
   content3.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Company Profile Document</b></h5>
       <p class="card-text">
Draft a professional letter (e.g., job application, business inquiry, complaint).
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Skills Used: Letter formatting (sender address, recipient address, date, subject line), margins, alignment</li>
    <li class="list-group-items"> Extra: Use Word styles like 'Normal', 'Heading', 'No Spacing'.</li>
    </ul>
    `
   content4.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Product Launch Presentation</b>
    </h5>
      <p class="card-text">
 Create a presentation for launching a new product.
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Skills Used: Slide design, smart art, transitions, animations.</li>
    <li class="list-group-items"> Slides: Product features, pricing, advantages, comparison with competitors.</li>
    </ul>
    `
   content5.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Educational Topic Presentation</b></h5>
       <p class="card-text">
  Prepare a PowerPoint on an educational topic (e.g., "Renewable Energy", "Digital Marketing Basics", etc.)
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Skills Used: Inserting charts, tables, pictures, hyperlinks.</li>
    <li class="list-group-items"> Slides: Introduction, explanation, benefits, conclusion.</li>
    </ul>
    `
   content6.innerHTML = `
    <h5 class="card-title"><b class="card-heading">Tourist Destination Promotion</b></h5>
       <p class="card-text">
   Create a slideshow promoting a city/country (like Paris, Dubai, or your favorite place).
    </p>
    <ul class="list-group">
    <li class="list-group-items"> Skills Used: Background design, inserting videos/images, slide transitions.</li>
    <li class="list-group-items"> Slides: About the destination, famous places, best time to visit, activities.</li>
    </ul>
    `
}

excetbtn.addEventListener("click", () => {
   excel();
   excetbtn.classList.add("js-excel");
   MISBtn.classList.remove("js-mis");
   tallyERPBtn.classList.remove("js-tallyErp");
   tallyPrimeBtn.classList.remove("js-TallyPrime");
   mpBtn.classList.remove("js-mp");
})

MISBtn.addEventListener("click", () => {
   MIS();
   excetbtn.classList.remove("js-excel");
   MISBtn.classList.add("js-mis");
   tallyERPBtn.classList.remove("js-tallyErp");
   tallyPrimeBtn.classList.remove("js-TallyPrime");
   mpBtn.classList.remove("js-mp");
})

tallyERPBtn.addEventListener("click", () => {
   tallyERP();
   excetbtn.classList.remove("js-excel");
   MISBtn.classList.remove("js-mis");
   tallyERPBtn.classList.add("js-tallyErp");
   tallyPrimeBtn.classList.remove("js-TallyPrime");
   mpBtn.classList.remove("js-mp");
})

tallyPrimeBtn.addEventListener("click", () => {
   tallyPrime();
   excetbtn.classList.remove("js-excel");
   MISBtn.classList.remove("js-mis");
   tallyERPBtn.classList.remove("js-tallyErp");
   tallyPrimeBtn.classList.add("js-TallyPrime");
   mpBtn.classList.remove("js-mp");
})

mpBtn.addEventListener("click", () => {
   mp();
   excetbtn.classList.remove("js-excel");
   MISBtn.classList.remove("js-mis");
   tallyERPBtn.classList.remove("js-tallyErp");
   tallyPrimeBtn.classList.remove("js-TallyPrime");
   mpBtn.classList.add("js-mp");
})

excel();
// MIS();
// tallyERP();
// tallyPrime();
// mp();

