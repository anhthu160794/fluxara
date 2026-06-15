document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 60){

        navbar.style.background = "#090012";

    }else{

        navbar.style.background = "rgba(5,1,15,0.7)";
    }

});
