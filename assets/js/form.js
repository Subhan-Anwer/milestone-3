// Listen for the form submission
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent the form from refreshing the page

    // Get the value of the name input
    const nameValue = document.getElementById("name").value;
    const professionValue = document.getElementById("professionInput").value;
    const userPhone = document.getElementById("userPhone").value;
    const userEmail = document.getElementById("userEmail").value;
    const userWebsite = document.getElementById("userWebsite").value;
    const userLinkedin = document.getElementById("userLinkedin").value;
    const userAddress = document.getElementById("userAddress").value;
    const userYear1 = document.getElementById("year-1").value;
    const userDegree1 = document.getElementById("degree-1").value;
    const userUniversity = document.getElementById("university").value;
    const userYear2 = document.getElementById("year-2").value;
    const userDegree2 = document.getElementById("degree-2").value;
    const userCollege = document.getElementById("college").value;
    const userYear3 = document.getElementById("year-3").value;
    const userDegree3 = document.getElementById("degree-3").value;
    const userSchool = document.getElementById("school").value;
    const language1 = document.getElementById("language-1").value;
    const level1 = document.getElementById("level-1").value;
    const language2 = document.getElementById("language-2").value;
    const level2 = document.getElementById("level-2").value;
    const language3 = document.getElementById("language-3").value;
    const level3 = document.getElementById("level-3").value;


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

    // Redirect to the next page
    window.location.href = "user-resume.html";
});