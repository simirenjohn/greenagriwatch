# GreenAgriWatch

GreenAgriWatch is a web-based early warning dashboard for maize pest and disease prediction. It integrates satellite indicators, weather data, traditional farmer indicators, and simulated IoT sensor data to provide actionable insights.

## Features
- **Farmer Dashboard**: Mobile-first design with crop health summary, pest risk levels, and alerts.
- **Admin Dashboard**: Desktop-first design with system overview, indicator trends, and sensor health status.
- **Interactive Map**: Color-coded pest risk zones and clickable farm polygons.

## Tech Stack
- **Frontend**: React (Vite) + Tailwind CSS
- **Routing**: React Router (HashRouter)
- **Mapping**: Leaflet.js
- **Charts**: Chart.js
- **State Management**: React Context API

## Deployment
This project is hosted on GitHub Pages. Visit the live site at:
[https://simirenjohn.github.io/greenagriwatch](https://simirenjohn.github.io/greenagriwatch)

## Development
1. Clone the repository:
   ```bash
   git clone https://github.com/simirenjohn/greenagriwatch.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
5. Preview the production build:
   ```bash
   npm run preview
   ```

## License
This project is licensed under the MIT License.