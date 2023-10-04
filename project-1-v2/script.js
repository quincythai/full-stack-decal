const discordLink = document.getElementById('discordLink');
const originalDiscord = discordLink.innerHTML; // Store the original text

discordLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    
    // Check the current content and toggle it
    if (discordLink.innerHTML === originalDiscord) {
        discordLink.innerHTML = "Discord: quincythai";
    } else {
        discordLink.innerHTML = originalDiscord;
    }
});

const contactLink = document.getElementById('contactLink');
const originalContact = contactLink.innerHTML;

contactLink.addEventListener('click', (event) => {
    if (contactLink.innerHTML === originalContact) {
        contactLink.innerHTML = "Contact: quincythai@berkeley.edu";
    } else {
        contactLink.innerHTML = originalContact;
    }
})