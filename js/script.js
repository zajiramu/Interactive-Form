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
        if(jobRole === 'other') {
            // if 'Other' option was chosen by the user in the drop down
            // the text field to allow the user to input their custom job
            // title / role is displayed on the page
            otherTitleInput.style.display = 'initial';
        }
    });

//=============================
// (5) - "T-Shirt" info section
//=============================
    const shirtColorMenu = document.getElementById('color');
    const shirtColorMenuLabel = shirtColorMenu.previousElementSibling;

    function toggleColorMenu(show) {
        if(show) {
            shirtColorMenuLabel.textContent = 'Color:';
            removeBlankColorOption(shirtColorMenu);
            shirtColorMenu.disabled = false;
        }
        else {
            shirtColorMenuLabel.textContent = 'Please select a T-shirt theme.';
            addBlankColorOption(shirtColorMenu);
            shirtColorMenu.disabled = true;
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

    function hideAllOptions(menu) {
        let menuOptions = menu.children;
        for(let i = 0; i < menuOptions.length; i++) {
            menuOptions[i].hidden = true;
        }
    }
    
    const shirtDesignMenu = document.getElementById('design');

    shirtDesignMenu.addEventListener('change', (e) => {
        const shirtDesign = e.target.value;
        if(shirtDesign) {
            toggleColorMenu(true);
            filterColors(shirtDesign);
        }
        else {
            toggleColorMenu(false);
        }
    });

    function filterColors(design) {
        const colorOptions = [...shirtColorMenu.children];
        colorOptions.forEach( option => option.hidden = false );
        if(design === 'js puns') {
            const heartColorOptions = colorOptions.filter( option => ! (option.textContent.toLowerCase().includes('puns')) );
            heartColorOptions.forEach( option => option.hidden = true );
        }
        else if(design === 'heart js') {
            const punsColorOptions = colorOptions.filter( option => option.textContent.toLowerCase().includes('puns') );
            punsColorOptions.forEach( option => option.hidden = true );
        }
    }

//========================================
// (6) - "Register for Activities" section
//========================================
    const activitiesFieldset = document.querySelector('.activities');
    
    activitiesFieldset.addEventListener('click', e => {
        const elementName = e.target.tagName;
        if(elementName === 'INPUT') {
            
        }
    });