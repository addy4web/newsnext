import '../public/css/reset.css';
import '../public/css/grid.css';
import Header from './components/header';

export default function App({ Component, pageProps }) {
    return <>
    <Header/>
    <Component {...pageProps} /></>;
  }