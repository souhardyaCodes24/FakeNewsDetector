# Fake News Detector

A sophisticated AI-powered web application that analyzes news articles and text content to determine their authenticity using advanced machine learning algorithms. Built with modern React and integrated with Hugging Face AI models through Gradio API for real-time fake news detection.

## Features

- **AI-Powered Analysis**: Leverages advanced machine learning models to detect fake news patterns with high accuracy
- **Real-Time Processing**: Provides instant analysis of news articles and text content
- **Confidence Scoring**: Delivers percentage-based confidence levels for transparent predictions
- **Modern UI/UX**: Features a sleek, dark glassmorphic design with smooth animations
- **Interactive Loading**: Quantum loader animation provides visual feedback during processing
- **Responsive Design**: Optimized for seamless performance across all device sizes
- **Professional Interface**: Clean, modern layout with fade-in animations

## Technology Stack

- **Frontend**: React 18 with Vite for fast development and optimal performance
- **AI Integration**: Gradio API for seamless ML model connectivity
- **AI Model**: Hugging Face AI Model (SoAIdya/FakeNews) for accurate detection
- **Styling**: CSS-in-JS with custom dark glassmorphic design and green accents
- **Icons**: React Icons library for consistent iconography
- **Animations**: Custom CSS fade-in animations and ldrs/react loaders
- **Build Tool**: Vite for lightning-fast development and production builds

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/souhardyaCodes24/FakeNewsDetector.git
   cd FakeNewsDetector
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Navigate the Interface**: Start on the homepage featuring project information and key features
2. **Access AI Detector**: Click the "Try AI Detector" button to access the analysis interface
3. **Input Content**: Enter the news article, headline, or text content you want to analyze
4. **Analyze Content**: Click the "Analyze News" button to initiate AI processing
5. **Review Results**: Examine the comprehensive analysis including:
   - **Authenticity Classification**: TRUE or FALSE determination
   - **Confidence Score**: Percentage-based reliability metric
   - **Visual Indicators**: Color-coded results with progress bars
   - **Professional Guidance**: Tips for verification best practices

## Project Structure

```
fake-news-frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.jsx          # Main routing and navigation component
│   ├── HomePage.jsx     # Landing page with features and information
│   ├── AnalysisPage.jsx # AI analysis interface and functionality
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

## API Integration

The application integrates with Hugging Face AI models through Gradio API:
- **Model**: SoAIdya/FakeNews (Hugging Face)
- **API**: Gradio Client prediction interface
- **Input**: Text string containing news content for analysis
- **Output**: Authenticity classification with confidence score
- **Processing**: Real-time analysis with immediate feedback

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

### Key Components

- **App.jsx**: Main routing and navigation logic
- **HomePage.jsx**: Landing page with feature showcase and animations
- **AnalysisPage.jsx**: AI analysis interface with input and results
- **Loading State**: Quantum loader animation during AI processing
- **Results Display**: Dynamic cards with color-coded feedback
- **Responsive Design**: Adaptive layout for all screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Hugging Face**: For providing the AI model infrastructure and platform
- **Gradio Team**: For the excellent API integration capabilities
- **React Team**: For the robust and efficient frontend framework
- **Vite Team**: For the lightning-fast build tool and development experience
- **React Icons**: For the comprehensive icon library
- **LDRS Library**: For the beautiful loading animations

## Contact

**Souhardya** - [@souhardyaCodes24](https://github.com/souhardyaCodes24)

Project Link: [https://github.com/souhardyaCodes24/FakeNewsDetector](https://github.com/souhardyaCodes24/FakeNewsDetector)

---

Built with precision and care for combating misinformation through advanced AI technology.
