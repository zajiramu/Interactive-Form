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
    //otherTitleInput.style.text = 'gray';
    const placeholder = otherTitleInput.value;
    // hides the HTML input element in otherTitleInput by setting its display 
    // property to the string 'none'
    otherTitleInput.style.display = 'none';
    // sets jobRoleMenu to the HTML select element object having id of 'title'
    const jobRoleMenu = document.getElementById('title');

    
    
    // adds change event listener to the html select element object in
    // jobRoleMenu
    jobRoleMenu.addEventListener('change', (e) => {
        removeErrorMessage(otherTitleInput);
        //otherTitleInput.style.borderColor = 'inherit';
        // sets jobRole to the value chosen by the user on the drop down
        // menu (as a string)
        const jobRole = e.target.value;
        // checks if the user chose the 'Other' option from the drop down 
        // menu by comparing the string in jobRole to the string 'other'
        // shows text input field if user selects 'Other' from the drop down menu
        if( jobRole === 'other' ) {
            otherTitleInput.style.display = '';
            otherTitleInput.style.color = 'gray';
            otherTitleInput.style.border = '2px solid rgb(111, 157, 220)';
            otherTitleInput.value = placeholder;
        } 
        else { otherTitleInput.style.display = 'none'; }
    });

    otherTitleInput.addEventListener('focus', (e) => {
        if( e.target.value === placeholder ) { 
            e.target.style.color = 'black';
            e.target.value = ''; 
        }
    });

    otherTitleInput.addEventListener('blur', (e) => {
         if( ! e.target.value ) { 
             e.target.style.color = 'gray';
             e.target.value = placeholder; 
         }
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
            const name = checkbox.getAttribute('name');
            const dayAndTime = checkbox.getAttribute('data-day-and-time');  
            checkbox.checked ? total += price : total -= price;
            handleConflicts(name, dayAndTime, checkbox.checked);
            updateTotalDisplay(total); 
        }
    });

    function updateTotalDisplay(sum) {
        if(sum != 0) {
            const totalSpan = activitiesFieldset.querySelector('#total-cost');
            if(totalSpan) {
                let regex = /\d{3}/g;
                totalSpan.innerText = totalSpan.innerText.replace(regex, `${sum}`);
            }
            else {
                const totalSpan = `<span id='total-cost'> Total: $${sum}</span>`;
                activitiesFieldset.insertAdjacentHTML('beforeend', totalSpan);
            }
        }
        else { activitiesFieldset.querySelector('#total-cost').remove(); }
    }

    const checkBoxes = activitiesFieldset.getElementsByTagName('input');

    function handleConflicts(name, dayAndTime, isChecked) {
        for( let i = 0; i < checkBoxes.length; i++) {
            const currCheckBox = checkBoxes.item(i);
            const currCheckBox_Name = currCheckBox.getAttribute('name');
            const currCheckBox_DayAndTime = currCheckBox.getAttribute('data-day-and-time');
            if( currCheckBox_DayAndTime == dayAndTime && currCheckBox_Name != name  ) { 
                if(isChecked) {
                    currCheckBox.disabled = true;
                    currCheckBox.parentElement.style.color = 'gray';
                }
                else {
                    currCheckBox.disabled = false;
                    currCheckBox.parentElement.style.color = '#000';
                } 
            }
        }
    }

    function handleActivitiesError() {
        const errorSpan = activitiesFieldset.getElementsByClassName()
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
        if( ! hasName() ) {
            e.preventDefault();
            if( nameInput.previousElementSibling.className !== 'error-message' ) {
                nameInput.style.borderColor = 'red';
                appendErrorMessage(nameInput, '*Please enter a name*');
            }
        }

        if( ! isValidEmail() ) {
            e.preventDefault();
            if( emailInput.previousElementSibling.className !== 'error-message' ) {
                emailInput.style.borderColor = 'red';
                appendErrorMessage(emailInput, '*Invalid Email*');
            }
        }
        // checks if the other option is selected on the job role drop down menu
        // calls job role validator to check and see if something was entered in the 
        // other job role text input field
        if(jobRoleMenu.value == 'other') {
            if( ! isValidJobRole() ) {
                e.preventDefault();
                if( otherTitleInput.previousElementSibling.className !== 'error-message' ) {
                    otherTitleInput.style.borderColor = 'red';
                    appendErrorMessage(otherTitleInput, '*Please enter a job role*');
                }
            }
        }
        // checks if activities validator returns false 
        // i.e. no activity was selected 
        if( ! isActivitySelected() ) {
            
        }
        // checks if credit card is the selected payment method
            // checks if credit card number validator returned false 
            // i.e. if user entered invalid or no cc number

            // checks if zip code validator returned false 
            // i.e. if user entered invalid or no zip code

            // checks if cvv validator returned false 
            // i.e. if user entered invalid or no cvv
        
     });

     function hasName() {
        return nameInput.value.length == 0 ? false : true;
     }

     function isValidEmail() {
         if( emailInput.value.length == 0 ) { return false; }
         return /[^@]+@[^@.]+\.[a-z]+/i.test(emailInput.value);
     }

     function isValidJobRole() {
         const jobRole = otherTitleInput.value;
         return ( jobRole == placeholder || jobRole == '') ? (false) : (true);
     }

     function isActivitySelected() {

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
     
     function removeErrorMessage(elementObject) {
         if(elementObject.previousElementSibling.className == 'error-message') {
             elementObject.previousElementSibling.remove();
         }
     }
     