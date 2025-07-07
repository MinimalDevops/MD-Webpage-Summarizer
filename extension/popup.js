document.getElementById('summarizeBtn').addEventListener('click', async () => {
  // Get the current tab's URL
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const currentUrl = tab.url;

  try {
    // n8n specific headers and configuration
    const response = await fetch('http://localhost:5678/webhook-test/chrome-trigger', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Link: currentUrl,
        timestamp: new Date().toISOString(),
        source: 'chrome-extension'
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Change button text temporarily to show success
    const button = document.getElementById('summarizeBtn');
    const originalText = button.textContent;
    button.textContent = 'Sent to n8n!';
    button.style.backgroundColor = '#ff6d00'; // n8n orange color
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '#4CAF50';
    }, 2000);

  } catch (error) {
    console.error('Error:', error);
    // Show error state
    const button = document.getElementById('summarizeBtn');
    const originalText = button.textContent;
    button.textContent = 'Error!';
    button.style.backgroundColor = '#ff4444';
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '#4CAF50';
    }, 2000);
  }
}); 