const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

$(document).ready(function() {
    $("#submit-form").validate({
        rules: {
            fname: {
                required: true,
                minlength: 4,
                maxlength: 10

            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            fname: {
                required: "Enter the first name",
                minlength: "Enter atleast 4 characters"
            },
            email: {
                required: "Enter your email address"
            },
            message: {
                required: "Enter at least 10 characters"
            }
        },


    })
})


$("#submit-form").submit((e) => {
    var isvalid = $("#submit-form").valid();
    if (isvalid) {
        e.preventDefault()
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbyJtKDXph9GYYq6AECpU1riQjqvEqe__QFhP9vi/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function(response) {
                alert("Form submitted successfully")
                window.location.reload()
                    //window.location.href="https://google.com"
            },
            error: function(err) {
                alert("Something Error")

            }
        });
    }
})
