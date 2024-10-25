// Listen for the form submission
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent the form from refreshing the page

    // Get the value of the name input
    const nameValue       = document.getElementById("name").value;
    const professionValue = document.getElementById("professionInput").value;
    const userPhone       = document.getElementById("userPhone").value;
    const userEmail       = document.getElementById("userEmail").value;
    const userWebsite     = document.getElementById("userWebsite").value;
    const userLinkedin    = document.getElementById("userLinkedin").value;
    const userAddress     = document.getElementById("userAddress").value;
    const userYear1       = document.getElementById("year-1").value;
    const userDegree1     = document.getElementById("degree-1").value;
    const userUniversity  = document.getElementById("university").value;
    const userYear2       = document.getElementById("year-2").value;
    const userDegree2     = document.getElementById("degree-2").value;
    const userCollege     = document.getElementById("college").value;
    const userYear3       = document.getElementById("year-3").value;
    const userDegree3     = document.getElementById("degree-3").value;
    const userSchool      = document.getElementById("school").value;
    const language1       = document.getElementById("language-1").value;
    const level1          = document.getElementById("level-1").value;
    const language2       = document.getElementById("language-2").value;
    const level2          = document.getElementById("level-2").value;
    const language3       = document.getElementById("language-3").value;
    const level3          = document.getElementById("level-3").value;
    const userAbout       = document.getElementById("about").value;
    const userJobYear1    = document.getElementById("job-year-1").value;
    const userJobDegree1  = document.getElementById("job-degree-1").value;
    const userPosition1   = document.getElementById("position-1").value;
    const userAboutJob1   = document.getElementById("about-job-1").value;
    const userJobYear2    = document.getElementById("job-year-2").value;
    const userJobDegree2  = document.getElementById("job-degree-2").value;
    const userPosition2   = document.getElementById("position-2").value;
    const userAboutJob2   = document.getElementById("about-job-2").value;
    const userJobYear3    = document.getElementById("job-year-3").value;
    const userJobDegree3  = document.getElementById("job-degree-3").value;
    const userPosition3   = document.getElementById("position-3").value;
    const userAboutJob3   = document.getElementById("about-job-3").value;
    const userLanguage1   = document.getElementById("language-1").value;
    const userLangLevel1  = document.getElementById("lang-level-1").value;
    const userLanguage2   = document.getElementById("language-2").value;
    const userLangLevel2  = document.getElementById("lang-level-2").value;
    const userLanguage3   = document.getElementById("language-3").value;
    const userLangLevel3  = document.getElementById("lang-level-3").value;
    const userLanguage4   = document.getElementById("language-4").value;
    const userLangLevel4  = document.getElementById("lang-level-4").value;
    const userLanguage5   = document.getElementById("language-5").value;
    const userLangLevel5  = document.getElementById("lang-level-5").value;
    const userLanguage6   = document.getElementById("language-6").value;
    const userLangLevel6  = document.getElementById("lang-level-6").value;


    // Store the name in local storage to access it on the next page
    localStorage.setItem("userName", nameValue);
    localStorage.setItem("userProfession", professionValue);
    localStorage.setItem("userPhone", userPhone);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("userWebsite", userWebsite);
    localStorage.setItem("userLinkedin", userLinkedin);
    localStorage.setItem("userAddress", userAddress);
    localStorage.setItem("userYear1", userYear1);
    localStorage.setItem("userDegree1", userDegree1);
    localStorage.setItem("userUniversity", userUniversity);
    localStorage.setItem("userYear2", userYear2);
    localStorage.setItem("userDegree2", userDegree2);
    localStorage.setItem("userCollege", userCollege);
    localStorage.setItem("userYear3", userYear3);
    localStorage.setItem("userDegree3", userDegree3);
    localStorage.setItem("userSchool", userSchool);
    localStorage.setItem("language1", language1);
    localStorage.setItem("level1", level1);
    localStorage.setItem("language2", language2);
    localStorage.setItem("level2", level2);
    localStorage.setItem("language3", language3);
    localStorage.setItem("level3", level3);
    localStorage.setItem("userAbout", userAbout);
    localStorage.setItem("userJobYear1", userJobYear1);
    localStorage.setItem("userJobDegree1", userJobDegree1);
    localStorage.setItem("userPosition1", userPosition1);
    localStorage.setItem("userAboutJob1", userAboutJob1);
    localStorage.setItem("userJobYear2", userJobYear2);
    localStorage.setItem("userJobDegree2", userJobDegree2);
    localStorage.setItem("userPosition2", userPosition2);
    localStorage.setItem("userAboutJob2", userAboutJob2);
    localStorage.setItem("userJobYear3", userJobYear3);
    localStorage.setItem("userJobDegree3", userJobDegree3);
    localStorage.setItem("userPosition3", userPosition3);
    localStorage.setItem("userAboutJob3", userAboutJob3);
    localStorage.setItem("userLanguage1", userLanguage1);
    localStorage.setItem("userLangLevel1", userLangLevel1);
    localStorage.setItem("userLanguage2", userLanguage2);
    localStorage.setItem("userLangLevel2", userLangLevel2);
    localStorage.setItem("userLanguage3", userLanguage3);
    localStorage.setItem("userLangLevel3", userLangLevel3);
    localStorage.setItem("userLanguage4", userLanguage4);
    localStorage.setItem("userLangLevel4", userLangLevel4);
    localStorage.setItem("userLanguage5", userLanguage5);
    localStorage.setItem("userLangLevel5", userLangLevel5);
    localStorage.setItem("userLanguage6", userLanguage6);
    localStorage.setItem("userLangLevel6", userLangLevel6);

    // Redirect to the next page
    window.location.href = "user-resume.html";
});