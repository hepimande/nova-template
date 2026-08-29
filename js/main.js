/* ========================================
   MOTHER TEMPLATE
   Main JavaScript
======================================== */


/* ----------------------------------------
   Mobile Navigation
---------------------------------------- */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');


if (menuToggle && navLinks) {

    menuToggle.addEventListener('click', () => {

        const isOpen =
            menuToggle.classList.toggle('is-open');

        navLinks.classList.toggle('is-open');

        menuToggle.setAttribute(
            'aria-expanded',
            isOpen
        );

        menuToggle.setAttribute(
            'aria-label',
            isOpen
                ? 'Close navigation'
                : 'Open navigation'
        );

    });


    /* Close menu after clicking a link */

    navLinks.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            menuToggle.classList.remove('is-open');
            navLinks.classList.remove('is-open');

            menuToggle.setAttribute(
                'aria-expanded',
                'false'
            );

            menuToggle.setAttribute(
                'aria-label',
                'Open navigation'
            );

        });

    });

}




/* ----------------------------------------
   Accordion
---------------------------------------- */

const accordionTriggers =
    document.querySelectorAll('.accordion-trigger');


accordionTriggers.forEach(trigger => {

    trigger.addEventListener('click', () => {

        const item =
            trigger.closest('.accordion-item');

        const isOpen =
            item.classList.toggle('is-open');

        trigger.setAttribute(
            'aria-expanded',
            isOpen
        );

    });

});




/* ----------------------------------------
   Modal
---------------------------------------- */

const modalOpeners =
    document.querySelectorAll('[data-modal-open]');

const modalClosers =
    document.querySelectorAll('[data-modal-close]');


function openModal(modal) {

    modal.classList.add('is-open');

    modal.setAttribute(
        'aria-hidden',
        'false'
    );

    document.body.classList.add('modal-open');


    const closeButton =
        modal.querySelector('.modal-close');

    if (closeButton) {
        closeButton.focus();
    }

}


function closeModal(modal) {

    modal.classList.remove('is-open');

    modal.setAttribute(
        'aria-hidden',
        'true'
    );

    document.body.classList.remove('modal-open');

}


modalOpeners.forEach(button => {

    button.addEventListener('click', () => {

        const modalId =
            button.getAttribute('data-modal-open');

        const modal =
            document.getElementById(modalId);

        if (modal) {
            openModal(modal);
        }

    });

});


modalClosers.forEach(button => {

    button.addEventListener('click', () => {

        const modal =
            button.closest('.modal');

        if (modal) {
            closeModal(modal);
        }

    });

});


/* Close with Escape */

document.addEventListener('keydown', event => {

    if (event.key !== 'Escape') {
        return;
    }

    const openModalElement =
        document.querySelector('.modal.is-open');

    if (openModalElement) {
        closeModal(openModalElement);
    }

});