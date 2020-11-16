//====================================
// (3) - Set focus on first text field
//====================================

    // sets nameInput to the text input element having id of 'name'
    const nameInput = document.getElementById('name');
    // calls function focus on input element in nameInput to set focus 
    // to it upon page loading 
    nameInput.focus();

//=========================
// (4) - "Job Role" section
//=========================

    // sets otherTitleInput to HTML input element object with id 'other-title'
    const otherTitleInput = document.getElementById('other-title');
    // hides the HTML input element in otherTitleInput by setting its display 
    // property to the string 'none'
    otherTitleInput.style.display = 'none';
    // sets jobRoleMenu to the HTML select element object having id of 'title'
    const jobRoleMenu = document.getElementById('title');
    // adds change event listener to the html select element object in
    // jobRoleMenu
    jobRoleMenu.addEventListener('change', (e) => {
        // sets jobRole to the value chosen by the user on the drop down
        // menu (as a string)
        const jobRole = e.target.value;
        // checks if the user chose the 'Other' option from the drop down 
        // menu by comparing the string in jobRole to the string 'other'
        // shows text input field if user selects 'Other' from the drop down menu
        jobRole === 'other' ? otherTitleInput.style.display = 'initial' : otherTitleInput.style.display = 'none'; 
    });

//=============================
// (5) - "T-Shirt" info section
//=============================
    const shirtColorMenu = document.getElementById('color');
    const shirtColorMenuLabel = shirtColorMenu.previousElementSibling;
    shirtColorMenuLabel.textContent = 'Color:';

    function toggleColorMenu(show) {
        if(show) {
            shirtColorMenuLabel.style.display = 'inherit';
            shirtColorMenu.hidden = false;
        }
        else {
            shirtColorMenuLabel.style.display = 'none';
            shirtColorMenu.hidden = true;
        }
    }

    function addBlankColorOption(menu) {
        const blankOptionHTML = `<option selected disabled hidden style='display: none' value=''>
                                 </option>`;
        menu.insertAdjacentHTML('afterbegin', blankOptionHTML);
    }

    function removeBlankColorOption(menu) {
        const menuOptions = menu.children;
        for(let option of menuOptions) {
            if(option.getAttribute('value') === '') {
                menu.removeChild(option);
            }
        }
    }

    toggleColorMenu(false);
    
    const shirtDesignMenu = document.getElementById('design');

    shirtDesignMenu.addEventListener('change', (e) => {
        const shirtDesign = e.target.value;
        if(shirtDesign) {
            filterColors(shirtDesign);
            toggleColorMenu(true);
        }
        else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            toggleColorMenu(false);
        }
    });
    
    const colorOptions = [...shirtColorMenu.children];
    const punsColorOptions  = colorOptions.filter( option => option.textContent.toLowerCase().includes('puns') );
    const heartColorOptions = colorOptions.filter( option => ! option.textContent.toLowerCase().includes('puns') );
    
    function filterColors(design) {
        if( design.includes('puns') ) {
            punsColorOptions.forEach( option => option.hidden = false );
            punsColorOptions[0].selected = true;
            heartColorOptions.forEach( option => option.hidden = true );
        }
        else {
            heartColorOptions.forEach( option => option.hidden = false );
            heartColorOptions[0].selected = true;
            punsColorOptions.forEach( option => option.hidden = true );
        }                                      
    }

//========================================
// (6) - "Register for Activities" section
//========================================
    const activitiesFieldset = document.querySelector('.activities');

    let total = 0;

    activitiesFieldset.addEventListener('click', e => {
        const elementName = e.target.tagName;
        if(elementName === 'INPUT') {
            const checkbox = e.target;
            const price = parseInt( checkbox.getAttribute('data-cost') );
            total = (checkbox.checked ? total+price : total-price);           
            updateTotalDisplay(total);
            const dayAndTime = checkbox.getAttribute('data-day-and-time');
        }
    });

    function updateTotalDisplay(sum) {
        if(sum != 0) {
            const totalSpan = activitiesFieldset.getElementById('total');
            if(totalSpan) {
                let regex = /\d{3}/g;
                totalSpan.innerText = totalSpan.innerText.replace(regex, `${sum}`);
            }
            else {
                const totalSpan = `<span id='total'> Total: $${sum}</span>`;
                activitiesFieldset.insertAdjacentHTML('beforeend', totalSpan);
            }
        }
        else { activitiesFieldset.getElementsByTagName('span')[0].remove(); }
    }

    function handleConflicts(dayAndTime) {

    }

//=============================
// (7) - "Payment Info" section
//=============================
    const paymentMenu = document.getElementById('payment');

    const ccDiv = document.getElementById('credit-card');

    const paypalDiv = document.getElementById('paypal');

    const bitcoinDiv = document.getElementById('bitcoin');

    showPaymentDefaults();
 
    paymentMenu.addEventListener('change', e =>{
        const payMethod = e.target.value;
        displayPaymentSection(payMethod);
    });

    function showPaymentDefaults() {
        const paymentOptions = paymentMenu.children;
       
        const selectPayOption = paymentOptions[0];
        selectPayOption.hidden = true;
       
        const ccPayOption = paymentOptions[1];
        ccPayOption.selected = true;

        displayPaymentSection(ccPayOption.value);
    }

    function displayPaymentSection(paymentType) {
        switch(paymentType) {
            case 'credit card':
                ccDiv.style.display = 'inherit';
                paypalDiv.style.display = 'none';
                bitcoinDiv.style.display = 'none';
                break;
            case 'paypal':
                ccDiv.style.display = 'none';
                paypalDiv.style.display = 'inherit';
                bitcoinDiv.style.display = 'none';
                break;
            default:
                ccDiv.style.display = 'none';
                paypalDiv.style.display = 'none';
                bitcoinDiv.style.display = 'inherit';
                break;
        }
    }
    
//======================
// (8) - Form Validation
//======================
     const emailInput = document.querySelector('#mail');
     const submitButton = document.getElementsByTagName('button')[0];
    
     submitButton.addEventListener('click', (e) => {
        // checks if name validator returns false 
        // i.e. no name was entered by user
        if( ! checkName() ) {
            e.preventDefault();
            if( nameInput.previousElementSibling.className !== 'error-message' ) {
                nameInput.style.borderColor = 'red';
                appendErrorMessage(nameInput, '*Please enter a name*');
            }
        }

        if( ! checkEmail() ) {
            e.preventDefault();
            if( emailInput.previousElementSibling.className !== 'error-message' ) {
                emailInput.style.borderColor = 'red';
                appendErrorMessage(emailInput, '*Please enter an email*');
            }
        }
        // checks if email validator returns false
        // i.e. improperly formatted email was entered by user
        if( ! validateEmail() ) {
            e.preventDefault();
        }
        // checks if the other option is selected on the job role drop down menu
        // calls job role validator to check and see if something was entered in the 
        // other job role text input field
        if(jobRoleMenu.value == 'other') {
            if( ! validateJobRole() ) {
                e.preventDefault();
                otherTitleInput.style.borderColor = 'red';
            }
        }
        // checks if activities validator returns false 
        // i.e. no activity was selected 

        // checks if credit card is the selected payment method
            // checks if credit card number validator returned false 
            // i.e. if user entered invalid or no cc number

            // checks if zip code validator returned false 
            // i.e. if user entered invalid or no zip code

            // checks if cvv validator returned false 
            // i.e. if user entered invalid or no cvv
        
     });

     function checkName() {
        return nameInput.value.length == 0 ? false : true;
     }

     function checkEmail() { 
        return emailInput.value.length == 0 ? false : true; 
     }

     function validateEmail() {
         return true;
     }

     function validateJobRole() {
         return true;
     }

     function appendErrorMessage(elementObject, errorMessage) {
         const errorMessageSpan = createErrorMessage(errorMessage);
         elementObject.insertAdjacentElement('beforebegin', errorMessageSpan);
     }
    
     function createErrorMessage(errorText) {
        const span = document.createElement('span');
        span.className = 'error-message';
        span.innerText = errorText;
        return span;
     }

     