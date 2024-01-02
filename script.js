var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var hiddenElements = document.querySelectorAll('.hidden');
var skillElements = document.querySelectorAll('.skill');
var hiddenLeftElements = document.querySelectorAll('.hidden-left');

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    }
    // else {
    //   entry.target.classList.remove("show")
    // }
  })
});

const observerSkill = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("skill-show")
    }
    else {
      entry.target.classList.remove("skill-show")
    }
  })
});

hiddenElements.forEach((el) => observer.observe(el));
skillElements.forEach((el) => observerSkill.observe(el));