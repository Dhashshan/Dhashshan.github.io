    var typed = new Typed(".sundarss",
        {
        strings: ["Frontend Developer ","Software Developer"],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    }
);



$("figure").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );
  function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
}





