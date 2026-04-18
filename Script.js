function showCategory(categoryId) {
    const sections = document.querySelectorAll(".category-section");

    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(categoryId).style.display = "block";
    document.getElementById(categoryId).scrollIntoView({
    behavior: "smooth"
});
}

window.onload = function() {
    showCategory('tabletop');
};