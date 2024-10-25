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
const userName       = localStorage.getItem("userName");
const userProfession = localStorage.getItem("userProfession");
const userPhone      = localStorage.getItem("userPhone");
const userEmail      = localStorage.getItem("userEmail");
const userWebsite    = localStorage.getItem("userWebsite");
const userLinkedin   = localStorage.getItem("userLinkedin");
const userAddress    = localStorage.getItem("userAddress");
const userYear1      = localStorage.getItem("userYear1");
const userDegree1    = localStorage.getItem("userDegree1");
const userUniversity = localStorage.getItem("userUniversity");
const userYear2      = localStorage.getItem("userYear2");
const userDegree2    = localStorage.getItem("userDegree2");
const userCollege    = localStorage.getItem("userCollege");
const userYear3      = localStorage.getItem("userYear3");
const userDegree3    = localStorage.getItem("userDegree3");
const userSchool     = localStorage.getItem("userSchool");
const language1      = localStorage.getItem("language1");
const level1         = localStorage.getItem("level1");
const language2      = localStorage.getItem("language2");
const level2         = localStorage.getItem("level2");
const language3      = localStorage.getItem("language3");
const level3         = localStorage.getItem("level3");
const userAbout      = localStorage.getItem("userAbout");
const userJobYear1   = localStorage.getItem("userJobYear1");
const userJobDegree1 = localStorage.getItem("userJobDegree1");
const userPosition1  = localStorage.getItem("userPosition1");
const userAboutJob1  = localStorage.getItem("userAboutJob1");
const userJobYear2   = localStorage.getItem("userJobYear2");
const userJobDegree2 = localStorage.getItem("userJobDegree2");
const userPosition2  = localStorage.getItem("userPosition2");
const userAboutJob2  = localStorage.getItem("userAboutJob2");
const userJobYear3   = localStorage.getItem("userJobYear3");
const userJobDegree3 = localStorage.getItem("userJobDegree3");
const userPosition3  = localStorage.getItem("userPosition3");
const userAboutJob3  = localStorage.getItem("userAboutJob3");
const userLanguage1  = localStorage.getItem("userLanguage1");
const userLangLevel1 = localStorage.getItem("userLangLevel1");
const userLanguage2  = localStorage.getItem("userLanguage2");
const userLangLevel2 = localStorage.getItem("userLangLevel2");
const userLanguage3  = localStorage.getItem("userLanguage3");
const userLangLevel3 = localStorage.getItem("userLangLevel3");
const userLanguage4  = localStorage.getItem("userLanguage4");
const userLangLevel4 = localStorage.getItem("userLangLevel4");
const userLanguage5  = localStorage.getItem("userLanguage5");
const userLangLevel5 = localStorage.getItem("userLangLevel5");
const userLanguage6  = localStorage.getItem("userLanguage6");
const userLangLevel6 = localStorage.getItem("userLangLevel6");

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
    document.getElementById("about-me").textContent = userAbout;
    document.getElementById("job-year-1").textContent = userJobYear1;
    document.getElementById("company-1").textContent = userJobDegree1;
    document.getElementById("position-1").textContent = userPosition1;
    document.getElementById("about-job-1").textContent = userAboutJob1;
    document.getElementById("job-year-2").textContent = userJobYear2;
    document.getElementById("company-2").textContent = userJobDegree2;
    document.getElementById("position-2").textContent = userPosition2;
    document.getElementById("about-job-2").textContent = userAboutJob2;
    document.getElementById("job-year-3").textContent = userJobYear3;
    document.getElementById("company-3").textContent = userJobDegree3;
    document.getElementById("position-3").textContent = userPosition3;
    document.getElementById("about-job-3").textContent = userAboutJob3;
    document.getElementById("lang1").textContent = userLanguage1;
    document.getElementById("langlvl1").innerHTML = `<div style="width: ${userLangLevel1}%;"></div>`;
    document.getElementById("lang2").textContent = userLanguage2;
    document.getElementById("langlvl2").innerHTML = `<div style="width: ${userLangLevel2}%;"></div>`;
    document.getElementById("lang3").textContent = userLanguage3;
    document.getElementById("langlvl3").innerHTML = `<div style="width: ${userLangLevel3}%;"></div>`;
    document.getElementById("lang4").textContent = userLanguage4;
    document.getElementById("langlvl4").innerHTML = `<div style="width: ${userLangLevel4}%;"></div>`;
    document.getElementById("lang5").textContent = userLanguage5;
    document.getElementById("langlvl5").innerHTML = `<div style="width: ${userLangLevel5}%;"></div>`;
    document.getElementById("lang6").textContent = userLanguage6;
    document.getElementById("langlvl6").innerHTML = `<div style="width: ${userLangLevel6}%;"></div>`;
} else {
    // do nothing!
}