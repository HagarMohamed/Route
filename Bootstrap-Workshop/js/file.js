new Typed("#typed", {
        strings: [
            "Developer",
            "Designer",
            "Freelancer"
        ],

        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,

        loop: true
    });

const filterButtons = document.querySelectorAll("[data-filter]");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((filterButton) => {
            filterButton.classList.toggle("active", filterButton === button);
        });

        portfolioItems.forEach((item) => {
            const shouldShow = selectedFilter === "all" || item.dataset.category === selectedFilter;
            item.classList.toggle("is-hidden", !shouldShow);
        });
    });
});