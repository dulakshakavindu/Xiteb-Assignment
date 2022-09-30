const check = document.querySelector('.circle');
const icon = document.querySelector('.fa-check');
const dropdown = document.querySelector('.destination-dropdown');
const otherDropdownValues = document.querySelector('.rest-of-the-options');
const otherSelectedValue = document.querySelectorAll('.other-selected-value');
const valueTxt = document.querySelector('.selected-value');
const noticebar = document.querySelector('.row-3-container');
const notice = document.querySelector('.fa-xmark');

check.addEventListener('click', () => {
   icon.classList.toggle('display-check');
});

icon.addEventListener('click', () => {
   icon.classList.toggle('display-check');
});

dropdown.addEventListener('click', () => {
   otherDropdownValues.classList.toggle('dropdown-display-block');
   otherDropdownValues.style.transform = 'translateY(10px)';
});

function show(userSelectedOption) {
   valueTxt.value = userSelectedOption;
   otherDropdownValues.classList.remove('dropdown-display-block');
}

notice.addEventListener('click', () => {
   noticebar.style.display = 'none';
});

// mobile header
const hamburger = document.querySelector('.fa-bars');
const mobileDropdown = document.querySelector('.mobile-dropdown');

hamburger.addEventListener('click', () => {
   mobileDropdown.classList.toggle('display-mobile-dropdown');
});
