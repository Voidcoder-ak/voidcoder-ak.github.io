const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Check if a user previously saved a theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    rootElement.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
    // Check the current theme
    const currentTheme = rootElement.getAttribute('data-theme');
    
    // Swap it
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    rootElement.setAttribute('data-theme', newTheme);
    
    // Save the new preference
    localStorage.setItem('theme', newTheme);
});

// Copy Code Button Logic
document.addEventListener('DOMContentLoaded', () => {
    // Find all <pre> tags (which wrap the code blocks)
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach((block) => {
        // Create the copy button
        const button = document.createElement('button');
        button.innerText = 'Copy';
        button.className = 'copy-btn';

        // Add it to the code block
        block.appendChild(button);

        // What happens when you click it
        button.addEventListener('click', async () => {
            // Find the actual text inside the <code> tag
            const code = block.querySelector('code').innerText;

            try {
                // Use the browser's clipboard API to copy the text
                await navigator.clipboard.writeText(code);
                
                // Visual feedback
                button.innerText = 'Copied!';
                setTimeout(() => {
                    button.innerText = 'Copy';
                }, 2000); // Change back after 2 seconds
            } catch (err) {
                console.error('Failed to copy text: ', err);
                button.innerText = 'Error';
            }
        });
    });
});