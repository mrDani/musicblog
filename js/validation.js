/********f************

    Do not alter this comment block. 
    Only fill out the information below.
    HTML Project
    Name: Daniel Babalola
    Date: August 8, 2024
    Description:

********************/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
        let isValid = true;

        const name = document.getElementById('name');
        const phone = document.getElementById('phone');
        const email = document.getElementById('email');
        const comments = document.getElementById('comments');

        if (name.value.trim() === '') {
            isValid = false;
            document.getElementById('nameError').style.display = 'block';
        } else {
            document.getElementById('nameError').style.display = 'none';
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone.value)) {
            isValid = false;
            document.getElementById('phoneError').style.display = 'block';
        } else {
            document.getElementById('phoneError').style.display = 'none';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            isValid = false;
            document.getElementById('emailError').style.display = 'block';
        } else {
            document.getElementById('emailError').style.display = 'none';
        }

        if (comments.value.trim() === '') {
            isValid = false;
            document.getElementById('commentsError').style.display = 'block';
        } else {
            document.getElementById('commentsError').style.display = 'none';
        }

        if (!isValid) {
            e.preventDefault();
        }
    });
});
