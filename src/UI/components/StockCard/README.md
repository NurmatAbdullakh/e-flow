# StockCard Component

A reusable stock market card component built with Ant Design, React-JSS, and Recharts.

## Features

- 📊 Interactive line charts with area fill
- 🎨 Custom styling with React-JSS
- 📱 Responsive design
- 🎯 Hover effects and smooth transitions
- 🎨 Color-coded performance indicators (green for positive, red for negative)
- 📈 Custom tooltips with data points
- 🎛️ Configurable data and styling

## Usage

```tsx
import { StockCard } from "./StockCard";

const data = [
  { name: "Jan", value: 4100 },
  { name: "Feb", value: 4150 },
  { name: "Mar", value: 4080 },
  // ... more data points
];

<StockCard title="S&P500" percentage={3.1} data={data} isPositive={true} />;
```

## Props

| Prop         | Type          | Description                                                   |
| ------------ | ------------- | ------------------------------------------------------------- |
| `title`      | `string`      | The title of the stock/index                                  |
| `percentage` | `number`      | The percentage change (positive or negative)                  |
| `data`       | `StockData[]` | Array of data points for the chart                            |
| `isPositive` | `boolean`     | Whether the performance is positive (green) or negative (red) |

## Data Structure

```tsx
interface StockData {
  name: string; // X-axis label
  value: number; // Y-axis value
}
```

## Styling

The component uses React-JSS for styling with the following key classes:

- `.stockCard` - Main card container with hover effects
- `.cardHeader` - Header section with title and percentage
- `.performanceContainer` - Performance indicator styling
- `.chartContainer` - Chart area styling
- `.customTooltip` - Tooltip styling

## Demo

Use the `StockCardDemo` component to see examples of the component in action:

```tsx
import { StockCardDemo } from "./StockCardDemo";

<StockCardDemo />;
```

## Dependencies

- `antd` - UI components (Card, Typography, Icons)
- `react-jss` - CSS-in-JS styling
- `recharts` - Chart library for line graphs
- `@ant-design/icons` - Icon components
