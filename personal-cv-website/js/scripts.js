document.addEventListener("DOMContentLoaded", () => {
  // Add a cool effect to the header
  const header = document.querySelector("header");
  header.addEventListener("mouseover", () => {
    header.style.transform = "scale(1.05)";
    header.style.transition = "transform 0.3s ease-in-out";
  });

  header.addEventListener("mouseout", () => {
    header.style.transform = "scale(1)";
  });

  // Add a cool effect to the sections
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
    section.addEventListener("mouseover", () => {
      section.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
      section.style.transition = "box-shadow 0.3s ease-in-out";
    });

    section.addEventListener("mouseout", () => {
      section.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
  });
});
