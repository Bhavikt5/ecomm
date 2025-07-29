import './globals.css';
import { ReduxProvider } from '../store/provider'; 
import Navigation from 'components/Header/page';



export const metadata = {
  title: 'My App',
  description: 'Product Page with Redux Toolkit',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navigation/>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
