"use strict";
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // Ensure scrollUp exists and isn't null
    if (scrollUp) {
        // When the scroll is higher than 20px, add the show-scroll class
        window.scrollY >= 20 ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll');
    }
};
// Add scroll event listener
window.addEventListener('scroll', scrollUp);



// Get the user's name from local storage
const userName = localStorage.getItem("userName");
const userProfession = localStorage.getItem("userProfession");
const userPhone = localStorage.getItem("userPhone");
const userEmail = localStorage.getItem("userEmail");
const userWebsite = localStorage.getItem("userWebsite");
const userLinkedin = localStorage.getItem("userLinkedin");
const userAddress = localStorage.getItem("userAddress");
const userYear1 = localStorage.getItem("userYear1");
const userDegree1 = localStorage.getItem("userDegree1");
const userUniversity = localStorage.getItem("userUniversity");
const userYear2 = localStorage.getItem("userYear2");
const userDegree2 = localStorage.getItem("userDegree2");
const userCollege = localStorage.getItem("userCollege");
const userYear3 = localStorage.getItem("userYear3");
const userDegree3 = localStorage.getItem("userDegree3");
const userSchool = localStorage.getItem("userSchool");
const language1 = localStorage.getItem("language1");
const level1 = localStorage.getItem("level1");
const language2 = localStorage.getItem("language2");
const level2 = localStorage.getItem("level2");
const language3 = localStorage.getItem("language3");
const level3 = localStorage.getItem("level3");

if (userName) {
    document.getElementById("name").innerHTML = `${userName}<br><span id="profession">${userProfession}</span>`;
    document.getElementById("phone").textContent = userPhone;
    document.getElementById("email").textContent = userEmail;
    document.getElementById("website").textContent = userWebsite;
    document.getElementById("linkedin").textContent = userLinkedin;
    document.getElementById("address").textContent = userAddress;
    document.getElementById("year-1").textContent = userYear1;
    document.getElementById("degree-1").textContent = userDegree1;
    document.getElementById("university").textContent = userUniversity;
    document.getElementById("year-2").textContent = userYear2;
    document.getElementById("degree-2").textContent = userDegree2;
    document.getElementById("college").textContent = userCollege;
    document.getElementById("year-3").textContent = userYear3;
    document.getElementById("degree-3").textContent = userDegree3;
    document.getElementById("school").textContent = userSchool;
    document.getElementById("language-1").textContent = language1;
    document.getElementById("level-1").innerHTML = `<div style="width: ${level1}%;"></div>`;
    document.getElementById("language-2").textContent = language2;
    document.getElementById("level-2").innerHTML = `<div style="width: ${level2}%;"></div>`;
    document.getElementById("language-3").textContent = language3;
    document.getElementById("level-3").innerHTML = `<div style="width: ${level3}%;"></div>`;
} else {
    // do nothing!
}