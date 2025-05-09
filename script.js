


const menuIcon=document.querySelector("#menu-icon"),navbar=document.querySelector(".navbar");menuIcon.onclick=()=>{navbar.classList.toggle("active"),menuIcon.classList.toggle("bx-x")},document.addEventListener("DOMContentLoaded",function(){AOS.init(),new Swiper(".myCertSwiper",{slidesPerView:1,spaceBetween:40,loop:!1,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2},1024:{slidesPerView:3}}})});





const modal = document.getElementById("iconModal");
const modalTitle = document.getElementById("modalTitle");
const modalList = document.getElementById("modalList");
const span = document.querySelector(".modal .close");

// Dictionary of icon class to descriptions
const iconDescriptions = {
  "devicon-html5-plain": "HTML5: Markup language for structuring web pages.",
  "devicon-css3-plain": "CSS3: Stylesheets for visually presenting web content.",
  "devicon-javascript-plain": "JavaScript: Adds interactivity to websites.",
  "devicon-react-original": "React: A JavaScript library for building UIs.",
  "devicon-mysql-plain": "MySQL: A relational database management system.",
  "devicon-python-plain": "Python: A general-purpose, readable programming language.",
  "devicon-java-plain": "Java: Widely used object-oriented language.",
  "devicon-r-original": "R: Language for statistical computing and graphics.",
  "devicon-laravel-plain-wordmark": "Laravel: PHP framework for web apps.",
  "devicon-bootstrap-plain": "Bootstrap: CSS framework for responsive design.",
  "devicon-tailwindcss-plain": "Tailwind CSS: Utility-first CSS framework.",
  "devicon-amazonwebservices-plain-wordmark": "AWS: Amazon's cloud computing services.",
  "devicon-aws-plain": "AWS CLI/SDK: Interfaces for managing AWS services.",
  "devicon-linux-plain": "Linux: Open-source OS kernel.",
  "devicon-figma-plain": "Figma: Interface design and prototyping tool.",
  "devicon-github-plain": "GitHub: Platform for code versioning and collaboration."
};

// Bind modal open to each service-box
document.querySelectorAll(".service-box").forEach(box => {
  box.addEventListener("click", () => {
    const title = box.querySelector("h4").innerText;
    modalTitle.innerText = title;

    const icons = box.querySelectorAll("i");
    modalList.innerHTML = "";

    icons.forEach(icon => {
      const cls = Array.from(icon.classList).find(c => c.startsWith("devicon"));
      if (!cls) return; // Skip if no devicon class
    
      const description = iconDescriptions[cls] || cls.replace("devicon-", "").replace(/-plain|-original|-wordmark/g, "").toUpperCase();
      const li = document.createElement("li");
      li.textContent = description;
      modalList.appendChild(li);
    });
    

    modal.style.display = "block";
  });
});

span.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};