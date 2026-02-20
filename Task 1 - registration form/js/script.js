const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const contact = document.getElementById("contact").value;
    const dob = document.getElementById("dob").value;

    const namePattern = /^[A-Za-z]+$/;

    if (!namePattern.test(firstName)){
        alert("First name should only contain letters!");
        return;
    }

    if (!namePattern.test(lastName)){
        alert("Last name should only contain letters!");
        return;
    }

    const today = new Date();
    const selectedDOB = new Date(dob);    

    if (selectedDOB > today){
        alert("Date of birth cannot be in the future!");
        return;
    }

    alert("Registration Form submitted sucessfully!!");

    form.submit();
})