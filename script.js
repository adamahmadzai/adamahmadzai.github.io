// Get references to the menu icon and navbar
const menuIcon = document.querySelector("#menu-icon"),
      navbar = document.querySelector(".navbar");

// Toggle navbar and menu icon class when the icon is clicked (used for mobile menu)
menuIcon.onclick = () => {
  navbar.classList.toggle("active");         // Shows/hides the nav links
  menuIcon.classList.toggle("bx-x");         // Switches icon (hamburger ↔ close)
};

// Wait until the DOM is fully loaded before running the animation and swiper
document.addEventListener("DOMContentLoaded", function() {
  AOS.init();  // Initialize AOS (Animate On Scroll library)

  // Initialize Swiper (for certification slider)
  new Swiper(".myCertSwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      768: { slidesPerView: 2 },      // 2 slides for medium screens
      1024: { slidesPerView: 3 }      // 3 slides for large screens
    }
  });
});

// Get references to modal elements
const modal = document.getElementById("iconModal");
const modalTitle = document.getElementById("modalTitle");
const modalList = document.getElementById("modalList");
const span = document.querySelector(".modal .close"); // Close button element (optional if using a bottom button)

// Dictionary mapping devicon class names to readable tech descriptions
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

// Add click event listener to each service box
document.querySelectorAll(".service-box").forEach(box => {
  box.addEventListener("click", () => {
    // Set modal title to the <h4> text inside the box (e.g., Frontend, Backend)
    const title = box.querySelector("h4").innerText;
    modalTitle.innerText = title;

    // Get all devicon <i> elements inside the box
    const icons = box.querySelectorAll("i");
    modalList.innerHTML = "";  // Clear previous content

    // For each icon, extract class and show description in a <li>
    icons.forEach(icon => {
      const cls = Array.from(icon.classList).find(c => c.startsWith("devicon"));
      if (!cls) return; // Skip non-devicon icons

      // Use dictionary description or fallback to capitalized class name
      const description = iconDescriptions[cls] || cls.replace("devicon-", "").replace(/-plain|-original|-wordmark/g, "").toUpperCase();

      // Create list item with description
      const li = document.createElement("li");
      li.textContent = description;
      modalList.appendChild(li);
    });

    // Show the modal
    modal.style.display = "block";
  });
});

// Close the modal when clicking the close button (if you still use it)
span.onclick = () => modal.style.display = "none";

// Also close the modal when clicking outside the modal content
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
