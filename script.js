// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('password-output');
    const lengthSlider = document.getElementById('length-slider');
    const lengthVal = document.getElementById('length-val');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    
    const uppercase = document.getElementById('include-uppercase');
    const numbers = document.getElementById('include-numbers');
    const symbols = document.getElementById('include-symbols');

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Password Generator Logic
    const chars = {
        lower: 'abcdefghijklmnopqrstuvwxyz',
        upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numeric: '0123456789',
        special: '!@#$%^&*()_+~`|}{[]:;?><,./-='
    };

    function generatePassword() {
        let availableChars = chars.lower;
        if (uppercase.checked) availableChars += chars.upper;
        if (numbers.checked) availableChars += chars.numeric;
        if (symbols.checked) availableChars += chars.special;

        const length = parseInt(lengthSlider.value);
        let password = '';
        
        // Cryptographically Secure Random Values
        const array = new Uint32Array(length);
        window.crypto.getRandomValues(array);

        for (let i = 0; i < length; i++) {
            password += availableChars[array[i] % availableChars.length];
        }

        output.value = password;
        
        // Add subtle animation
        output.style.animation = 'none';
        setTimeout(() => {
            output.style.animation = 'fadeInPassword 0.3s ease';
        }, 10);
    }

    lengthSlider.addEventListener('input', (e) => {
        lengthVal.textContent = e.target.value;
    });

    generateBtn.addEventListener('click', generatePassword);

    copyBtn.addEventListener('click', () => {
        const textToCopy = output.value;
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = copyBtn.textContent;
            const originalBg = copyBtn.style.backgroundColor;
            
            copyBtn.textContent = '✓ Copied!';
            copyBtn.style.backgroundColor = 'var(--accent-dark)';
            
            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.backgroundColor = '';
            }, 2000);
        }).catch(() => {
            copyBtn.textContent = 'Failed';
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
            }, 1500);
        });
    });

    // Initial generation
    generatePassword();
});

// Add animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInPassword {
        from {
            opacity: 0.6;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
