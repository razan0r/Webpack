export const handleSubmit = async (event) => {
    event.preventDefault();

    const url = document.getElementById('url').value;

    if (!validateUrl(url)) {
        alert('Please enter a valid URL.');
        return;
    }

    try {
        const response = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const resultsSection = document.getElementById('results');
        resultsSection.innerHTML = '';

        resultsSection.innerHTML = `
            <p>Polarity: ${data.polarity}</p>
            <p>Subjectivity: ${data.subjectivity}</p>
            <p>Text: ${data.text}</p>
        `;
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch data. Please try again later.');
    }
};


export const validateUrl = (url) => {
  
    const regex = /^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i;
    return regex.test(url);
};
