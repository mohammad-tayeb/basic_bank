// add event handler with submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('clicked');


    // get the email address
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);

    //get the password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);

    // varify the email and pass
    if(email === 'tayeb@gmail.com' && password === '1234'){
        window.location.href = 'bank.html'
        console.log('valid');
    }
    else
     alert('Not valid');
})