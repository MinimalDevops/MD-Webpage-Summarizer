# MD Webpage Summary Chrome Extension

This Chrome extension is part of the MD-Webpage-Summary project, which works in conjunction with the MD-N8N repository to generate markdown summaries of web pages.

## Prerequisites

1. Chrome browser
2. [MD-N8N Repository](https://github.com/yourusername/MD-N8N) set up and running
   - The webhook endpoint configuration instructions will be added later
   - Make sure the n8n instance is running on port 5678

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/MD-Webpage-Summary.git
   cd MD-Webpage-Summary
   ```

2. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked"
   - Select the `extension` folder from this repository

## Usage

1. Make sure your n8n instance from MD-N8N repository is running
2. Click the extension icon in your Chrome toolbar
3. Click the "Summarize" button to send the current webpage URL to n8n for processing

## Project Structure

```
MD-Webpage-Summary/
├── extension/
│   ├── manifest.json     # Extension configuration
│   ├── popup.html       # Extension popup interface
│   └── popup.js         # Extension functionality
├── .gitignore
└── README.md
```

## Dependencies

This extension requires:
1. [MD-N8N Repository](https://github.com/yourusername/MD-N8N)
   - Must be running locally on port 5678
   - Must have the webhook endpoint configured (configuration instructions to be added)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

[Add your chosen license here]

## Related Projects

- [MD-N8N Repository](https://github.com/yourusername/MD-N8N) - The n8n workflow repository that processes the webpage URLs 