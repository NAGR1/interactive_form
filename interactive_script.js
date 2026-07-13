$(document).ready(function(){

    $("#submitBtn").click(function(){

        let valid = true;

        $(".error-text").text("");
        $(".form-control, .form-select").removeClass("input-error");

        if($("#username").val().trim()==""){
            $("#username").addClass("input-error");
            $("#usernameError").text("this field must not be empty");
            valid=false;
        }
        if($("#email").val().trim()==""){
            $("#email").addClass("input-error");
            $("#emailError").text("this field must not be empty");
            valid=false;
        }

        
        if($("#password").val().trim()==""){
            $("#password").addClass("input-error");
            $("#passwordError").text("this field must not be empty");
            valid=false;
        }
        if($("#confirmPassword").val().trim()==""){
            $("#confirmPassword").addClass("input-error");
            $("#confirmPasswordError").text("this field must not be empty");
            valid=false;
        }

        if(
            $("#password").val().trim()!="" &&
            $("#confirmPassword").val().trim()!="" &&
            $("#password").val()!=$("#confirmPassword").val()
        ){
            $("#confirmPassword").addClass("input-error");
            $("#confirmPasswordError").text("confirmed password mismatched the password");
            valid=false;
        }

        // Topics
        if($(".topic:checked").length==0){
            $("#topicError").text("At least one topic must be selected");
            valid=false;
        }

        // Gender
        if($("#gender").val()==""){
            $("#genderError").text("please choose your gender");
            valid=false;
        }

        if(valid){
            alert("Form submitted successfully!");
        }

    });

});