function rolar(sectionId){
    var section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth'
    });
}