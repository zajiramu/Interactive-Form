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

    // sets otherTitleInput to a new HTML input element object
    const otherTitleInput = document.createElement('input');
    // sets type attritbute of HTML input element object in 
    // otherTitleInput to 'text'
    otherTitleInput.setAttribute('type', 'text');
    // sets id attribute of HTML input element object in 
    // otherTitleInput to 'text'
    otherTitleInput.setAttribute('id','other-title');
    // sets value property of HTML input element object in 
    // otherTitleInput to the string 'Your Job Role'
    otherTitleInput.value = 'Your Job Role';
    // sets jobRoleMenu to the html select element object,
    // retrieved by using its title
    const jobRoleMenu = document.getElementById('title');
    // inserts html input element object in otherTitleInput after
    // the html select element object in jobRoleMenu
    jobRoleMenu.insertAdjacentElement("afterend", otherTitleInput);
    // sets display property of html input element object in otherTitleInput
    // to 'none', hiding it on the page
    otherTitleInput.style.display = 'none';
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
            const span = activitiesFieldset.querySelector('span');
            if(span) {
                let regex = /\d{3}/g;
                span.innerText = span.innerText.replace(regex, `${sum}`);
            }
            else {
                const totalSpan = document.createElement('span');
                totalSpan.innerText = `Total: $${sum}`;
                activitiesFieldset.insertAdjacentElement('beforeend', totalSpan);
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
                ccDiv.style.display = 'initial';
                paypalDiv.style.display = 'none';
                bitcoinDiv.style.display = 'none';
                break;
            case 'paypal':
                ccDiv.style.display = 'none';
                paypalDiv.style.display = 'initial';
                bitcoinDiv.style.display = 'none';
                break;
            default:
                ccDiv.style.display = 'none';
                paypalDiv.style.display = 'none';
                bitcoinDiv.style.display = 'initial';
                break;
        }
    }
    
//======================
// (8) - Form Validation
//======================
     const emailInput = document.querySelector('#mail');
     const shirtSizeMenu = document.querySelector('#size');
     const submitButton = document.getElementsByTagName('button')[0];
    
     submitButton.addEventListener('click', e => {
        // checks if name handler returns false 
        // i.e. no name was entered by user

        // checks if email handler returns false
        // i.e. no email / improperly formatted email was entered by user

        // checks if activities handler returns false 
        // i.e. no activity was selected 

        // checks if credit card is the selected payment method
            // checks if credit card number handler returned false 
            // i.e. if user entered invalid or no cc number

            // checks if zip code handler returned false 
            // i.e. if user entered invalid or no zip code

            // checks if cvv handler returned false 
            // i.e. if user entered invalid or no cvv
     });
    