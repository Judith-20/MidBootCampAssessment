// Function to apply animation when the navigation links are clicked
function applySlideInAnimation(element, animationClass) {
    element.classList.add(animationClass);
    element.addEventListener('animationend', () => {
        element.classList.remove(animationClass);
    }, { once: true });
}

// Function to display the body of the homepage
function Home() {
    const home = document.getElementById('mainpg');
    home.className = 'home';
    // to slide in from the left
    // on clicking the register now button it takes you to the sign up page
    applySlideInAnimation(home, 'slide-in-left');
    home.innerHTML = `<div id="mainpg1">
            <p id="para">Increase your Business <br> with us!</p>
            <h2>About Our Services</h2>
            <p>We provide a range of online business solutions designed to be flexible <br>
             and cater to your unique business needs. Our services include:</p>
            <ul>
                <li>Custom Software Development</li>
                <li>Cloud Solutions</li>
                <li>Digital Marketing</li>
                <li>E-commerce Platforms</li>
                <li>24/7 Technical Support</li>
            </ul>
            <button id="btn2" onclick="ShowStart()">REGISTER NOW</button> 
        </div>

        <div id="start1">
            <img id="start" src="./images/L1.png" alt="img">
            <img id="start1" src="./images/lab1.png" style="background-color: transparent;">
        </div>
        </div>`
}
document.getElementById('home').addEventListener('click', () => {
    Home()
});

document.getElementById('1st-btn').addEventListener('click', () => {
    ShowStart()
});

document.getElementById('btn1').addEventListener('click', () => {
    ShowStart()
});

// when you click on the button in the about us page it takes yo to the sign up page
function AboutUs() {
    const content = document.getElementById('mainpg');
    content.className = 'about';
    applySlideInAnimation(content, 'slide-in-right');
    content.innerHTML = `<div id="flex">
        <div id="soln">
            <p id="about1">#flexiblesolutions</p>
                <h2>Flexible Solutions for Your Business</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero illo cumque non fugit pariatur corporis asperiores velit! Odio recusandae consequuntur totam tenetur. Et voluptatum architecto inventore quos amet. Fuga exercitationem laboriosam voluptates blanditiis. Dolore totam sequi odit fugiat repellat officia veritatis maiores at, eveniet illum incidunt, ipsa, voluptatibus animi esse.</p>
        
        
            <button type="submit" id="btn3" onclick="Revert()">Start free today <img src="./images/rytarrow.jpg"></button>
        
        </div>
        <p id="about2"></p>
        </div>`
}
document.getElementById('abt').addEventListener('click', () => {
    AboutUs()
});

//on clicking the on the button on the about us page it tells the user to sign up or login
function Revert() {
   const pTag = document.getElementById('about2');
   pTag.textContent = 'Please Sign up or if you have an account you can login'
    pTag.style.color = 'red'
}

// displays on click of the our services page
function OurServices() {
    const content = document.getElementById('mainpg');
    applySlideInAnimation(content, 'slide-in-bottom');
    content.innerHTML = `<section id="description">
    <div id="serv">
        
        <p>Custom Software Development<br><br>
            <img src="./images/serv.png">
        </p>

        <p>Cloud Solutions<br><br>
            <img src="./images/serv1.png">
        </p>

        <p>Digital Marketing<br><br>
            <img src="./images/serv2.png">
        </p>

        <p>E-commerce Platforms<br><br>
            <img src="./images/serv3.png">
        </p>

        <p>24/7 Technical Support<br><br>
            <img src="./images/serv4.png">
        </p>

    </div>
</section>`
}
document.getElementById('service').addEventListener('click', () => {
    OurServices()
});

// for the price page
function Pricing() {
    const cont = document.getElementById('mainpg');
    applySlideInAnimation(cont, 'slide-in-top');
    cont.innerHTML = `<section id="sect1">
        <div id="box">
            <p id="list2">Free</p>
            <p id="list3">FREE</p>
            <p>forever free for individuals<br> and small teams up to 3</p>

           <p id="lst">Unlimited Access</p>
           <p id="lst">100MB Storage</p>
           <p id="lst">3 Users</p>
           <p id="lst">3 Users</p>
            <button type="submit" onclick="ShowStart()" id="arrow">Start for free</button>
            
        </div>
    
        <div id="box1">
            <p id="best">#bestdeal</p>
            <p id="list2">Unlimited</p>
            <p id="list3">$29</p>
            <p>per user/month billed yearly<br> <b>$39</b> billed monthly</p>
            
           <p id="lst">All in Free +</p>
            <p id="lst">Unlimited Guests</p>
            <p id="lst">Priority Support</p>
            <p id="lst">Smart Notifications</p>
            <button type="submit" onclick="ShowStart()" id="arrow">Get Unlimited</button>
        </div>
    
        <div id="box2">
            <p id="list2">Enterprise</p>
            <p id="list3">$35</p>
            <p>per user/month billed yearly<br> <b>$45</b> billed monthly</p>
            
            <p id="lst">All in Unlimited +</p>
            <p id="lst">Bulk Export</p>
            <p id="lst">Advanced Analytics</p>
            <p id="lst">Advanced Security</p>
           
            <button type="submit" onclick="ShowStart()" id="arrow">Get Enterprise</button>
        </div>
    </section>`
    }
    document.getElementById('price').addEventListener('click', () => {
        Pricing()
    });

    function Login() {
        const content = document.getElementById('mainpg');
        content.className = 'login-content';
        applySlideInAnimation(content, 'slide-in-left');
        content.innerHTML = `<section id="form-section">
    <h2>Login</h2><br><br>
    <form id="login-form" action="#" method="POST">
        <div class="login">
        
        <div class="form-group">
            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" required>
        </div><br><br>

        <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
    </div><br><br>

        <button type="submit" id="log" onclick = "Pricing()" >Login</button>
    </form>
</section>`
}
document.getElementById('login').addEventListener('click', () => {
    Login()
});

// on submitting this form, an alert displays and the form fields returns empty. had issues with this initally(see below)
// but checked different resources, figured the issue and resolved it
const ShowStart = () => {
    const content = document.getElementById('mainpg');
    content.className = 'signup-content';
    content.innerHTML = `
        <section id="form-section">
            <h2>Sign Up</h2>
            <p>Please fill all fields</p>
            <form id="signup-form" action="#" method="POST">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" onmouseout="UserName()">
                    <span id="name-error" class="error-message"></span>
                </div><br><br>

                <div class="form-group">
                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email">
                    <span id="email-error" class="error-message"></span>
                </div><br><br>

                <div class="form-group">
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone">
                    <span id="phone-error" class="error-message"></span>
                </div><br><br>

                <div class="form-group">
                    <label for="password">Create a password:</label>
                    <input type="password" id="password" name="password">
                    <span id="password-error" class="error-message" onmouseout="ErrorMessage()"></span>
                    <p id="pass"><i>password should contain uppercase, lowercase, numbers and special characters like:@,#,%,!,*,^,& etc </i></p>
                </div>

                <div class="form-group">
                    <label for="confirmpassword">Confirm password:</label>
                    <input type="password" id="confirmpassword" name="password" onmouseout="ConfirmPassword()">
                    <p id="pass1"></p>
                </div><br>

                <div class="form-group">
                    <label for="referral">How did you hear about us?</label>
                    <select id="referral" name="referral">
                        <option value="">Select an option</option>
                        <option value="friend">Friend</option>
                        <option value="social_media">Social Media</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="other">Other</option>
                    </select>
                </div><br><br>

                <div class="plan">
                    <label for="plan">Which of the plans would you like to go for?</label>
                    <select id="plan" name="plan">
                        <option value="">Select an option</option>
                        <option value="free">Free</option>
                        <option value="unlimited">Unlimited</option>
                        <option value="enterprise">Enterprise</option>
                    </select>
                </div><br><br>

                <button type="submit" id="sub">Submit</button>
            </form>
        </section>`;

    //     document.getElementById('signup-form').addEventListener('submit', function(event) {
    //         event.preventDefault(); // Prevent the default form submission behavior
    //         alert('Form submitted successfully'); // Display the alert message
    //         this.reset(); // Reset the form fields
    //     });
    // }

    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        function reset_field(element) //reset_field() function:This function takes an element as a parameter.
            { 
                //This sets the textContent property of the given element to an empty string.
                element.textContent = ' ';
            }

            function check_field(field_name, error_name)
            //This function takes two parameters: field_name (ID of the input field) and error_name (ID of the error message element).
            {
                let field_text = document.getElementById(field_name).value;
    //check_field retrieves the value of the input field with the given ID (field_name) using document.getElementById().

                let err_string = '';
    //It initializes an empty string err_string to store the error message and a boolean variable is_ok to track the validity of the field.
                
                let is_ok = true;
                if (field_text.trim().length == 0) 
    //It checks if the trimmed length of the field text is zero (i.e., if the field is empty).
                {
                    err_string = field_name + ' field cannot be empty';
                    is_ok = false
                }
    //If the field is empty, it sets the err_string to indicate that the field is required and sets is_ok to false.
                document.getElementById(error_name).textContent = err_string;
    //It updates the text content of the error message element (error_name) with the err_string.
                return is_ok
    //Finally, it returns the value of is_ok, indicating whether the field is valid (true) or not (false).
            }

                reset_field(document.getElementById('name-error'))
                reset_field(document.getElementById('email-error'))
                reset_field(document.getElementById('phone-error'))
                reset_field(document.getElementById('password-error'))
    //It calls the reset_field() function to clear any previous error messages by passing the error message elements for the various fields.
                
        let is_ok = check_field("name", "name-error");
                is_ok &= check_field("email", "email-error");
                is_ok &= check_field("phone", "phone-error");
                is_ok &= check_field("password", "password-error");
                //It then calls the check_field() function for the email and password fields to validate them
    //It uses the logical AND (&=) operator to combine the results of the field validations. If the fields are valid, is_ok will remain true; otherwise, it will become false.

                if (is_ok) {
                    alert("Form submitted successfully")
    //If both fields are valid (is_ok is true), it displays an alert indicating that the form was submitted successfully.
                }
                return false;
    //Finally, it returns false to prevent the form from being submitted.
           
    });
}

// to change the name field to upper case
function UserName() {
    var NameUser = document.getElementById('name');
    NameUser.value = NameUser.value.toUpperCase();
}

//function to confirm the Password
function ConfirmPassword() {
    var Pass = document.getElementById('password');
    var ConPass = document.getElementById('confirmpassword');
    var Check = document.getElementById('pass1');
    
    if(ConPass.value !== Pass.value) {
        Check.innerText = 'Passwords do not match'
    } else{
        Check.innerText = ''
    }
}

// The form isn't submitting
// function Submit(event){
//     event.preventDefault()

//     var subm = document.getElementById('signup-form');
//     subm = alert('Form submitted successfully!');

// }
// document.getElementById('signup-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Form submitted successfully!');
