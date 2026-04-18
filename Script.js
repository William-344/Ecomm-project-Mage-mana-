function showCategory(categoryId) {
    const sections = document.querySelectorAll(".category-section");

    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(categoryId).style.display = "block";
}

window.onload = function() {
    showCategory('tabletop');
};