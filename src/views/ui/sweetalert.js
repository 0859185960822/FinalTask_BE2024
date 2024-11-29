import Swal from 'sweetalert2'

function showAlert() {
    Swal.fire({
        title: "Any fool can use a computer",
        confirmButtonColor: "#556ee6",
    });
}

function titleText() {
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question",
        confirmButtonColor: "#556ee6",
    });
}

function successmsg() {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        confirmButtonColor: "#556ee6",

    });
}

function confirm() {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#34c38f",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: "Yes, delete it!",
       
    }).then(result => {
        if (result.value) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
    });
}

function cancel() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger ml-2"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons
        .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "<span ms-2>No, cancel!</span>",
            showCancelButton: true,
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger ms-2',
                text: "text-white"
              },
        })
        .then(result => {
            if (result.value) {
                swalWithBootstrapButtons.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                );
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    "Cancelled",
                    "Your imaginary file is safe :)",
                    "error"
                );
            }
        });
}
function imageHeader() {
    Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: require("@/assets/images/logo-dark.png"),
        imageHeight: 20,
        confirmButtonColor: "#556ee6",
    });
}
function timer() {
    let timerInterval;
    Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        onBeforeOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {
                Swal.getContent().querySelector(
                    "b"
                ).textContent = Swal.getTimerLeft();
            }, 100);
        },
        onClose: () => {
            clearInterval(timerInterval);
        }
    }).then(result => {
        if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.timer
        ) {
            console.log("I was closed by the timer"); // eslint-disable-line
        }
    });
}
function custom() {
    Swal.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html:
            "You can use <b>bold text</b>, " +
            '<a href="//sweetalert2.github.io">links</a> ' +
            "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Thumbs down",
        confirmButtonColor: "#34c38f",
        cancelButtonColor: "#f46a6a",

    });
}

function position() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });
}

function customBackground() {
    Swal.fire({
        title: "Custom width, padding, background.",
        width: 600,
        padding: 100,
        confirmButtonColor: "#556ee6",
        background:
            "#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)"
    });
}

function ajax() {
    Swal.fire({
        title: "Submit email to run ajax request",
        input: "email",
        showCancelButton: true,
        confirmButtonText: "Submit",
        showLoaderOnConfirm: true,
        confirmButtonColor: "#556ee6",
        cancelButtonColor: "#f46a6a",
        preConfirm: email => {
            // eslint-disable-next-line no-unused-vars
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (email === "taken@example.com") {
                        Promise.reject(new Error("This email is already taken."));
                    } else {
                        resolve();
                    }
                }, 2000);
            });
        },
        allowOutsideClick: false
    }).then(email => {
        Swal.fire({
            title: "Ajax request finished!",
            html: "Submitted email: " + email,
            confirmButtonColor: "#556ee6",

        });
    }).catch(error => {
        console.log(error);
    })
}

// function chain() {
//     Swal.fire({
//         input: "text",
//         confirmButtonText: "Next &rarr;",
//         showCancelButton: true,
//         confirmButtonColor: "#556ee6",
//         cancelButtonColor: "#74788d",
//         progressSteps: ["1", "2", "3"]
//     })
//         .queue([
//             {
//                 title: "Question 1",
//                 text: "Chaining swal2 modals is easy"
//             },
//             "Question 2",
//             "Question 3"
//         ])
//         .then(result => {
//             if (result.value) {
//                 Swal.fire({
//                     title: "All done!",
//                     html:
//                         "Your answers: <pre><code>" +
//                         JSON.stringify(result.value) +
//                         "</code></pre>",
//                     confirmButtonText: "Lovely!"
//                 });
//             }
//         }).catch(error => {
//             console.log(error);
//         })
// }

function dynamicQueue() {
    var ipAPI = "https://api.ipify.org?format=json";
    Swal.fire([
        {
            title: "Your public IP",
            confirmButtonColor: "#556ee6",
            confirmButtonText: "Show my public IP",
            text: "Your public IP will be received " + "via AJAX request",
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return fetch(ipAPI)
                    .then(response => response.json())
                    .then(data => Swal.insertQueueStep(data.ip))
                    .catch(() => {
                        Swal.insertQueueStep({
                            type: "error",
                            title: "Unable to get your public IP"
                        });
                    });
            }
        }
    ]);
}

export const alerts = [
    {
        type: showAlert,
        message: "A basic message"
    },
    {
        type: titleText,
        message: "A title with a text under"
    },

    {
        type: successmsg,
        message: "A success message!"
    },
    {
        type: confirm,
        message: "A warning message, with a function attached to the 'Confirm' button..."
    },
    {
        type: cancel,
        message: "By passing a parameter, you can execute something else for 'Cancel'."
    },
    {
        type: imageHeader,
        message: "A message with a custom Image Header"
    },
    {
        type: timer,
        message: "A message with auto close timer",
        confirmButtonColor: "#556ee6",
    },
    {
        type: custom,
        message: "Custom HTML description and buttons"
    },
    {
        type: position,
        message: "A custom positioned dialog"
    },
    {
        type: customBackground,
        message: "A message with custom width, padding, and background"
    },
    {
        type: ajax,
        message: "Ajax request example"
    },
    // {
    //    type: chain,
    //    message: "Chaining modals (queue) example"
    // },
    {
        type: dynamicQueue,
        message: "Dynamic queue example"
    }
]

