document.getElementById('summarizeBtn').addEventListener('click', async () => {
  // Get the current tab's URL
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const currentUrl = tab.url;

  const urls = [
    'http://localhost:5678/webhook/chrome-trigger',
    'http://localhost:5678/webhook-test/chrome-trigger'
  ];

  let success = false;
  let lastError = null;

  for (const url of urls) {
    try {
      const response = await fetch(url, {
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
      if (response.ok) {
        success = true;
        break;
      } else {
        lastError = new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      lastError = error;
    }
  }

  const button = document.getElementById('summarizeBtn');
  const originalText = button.textContent;

  if (success) {
    button.textContent = 'Sent to n8n!';
    button.style.backgroundColor = '#ff6d00'; // n8n orange color
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '#4CAF50';
    }, 2000);
  } else {
    console.error('Error:', lastError);
    button.textContent = 'Error!';
    button.style.backgroundColor = '#ff4444';
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '#4CAF50';
    }, 2000);
  }
}); 