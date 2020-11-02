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
    
    let costs = [];
    activitiesFieldset.addEventListener('click', e => {
        const elementName = e.target.tagName;
        if(elementName === 'INPUT') {
            const checkbox = e.target;
            if(checkbox.checked){
                costs.push(checkbox.data-cost);
            }
            else {
                costs.pop(checkbox.data-cost);
            }
        }
    });

    function updateTotalDisplay(costs) {
        switch(costs.length) {
            case 0:
                break;
            case 1:
                break;
            default:
        }
    }