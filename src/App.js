import { useEffect } from 'react';
import './App.css';
// const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    console.log('hiii');
  }, [])

  const onClose = () => {
  }
  return (
    <div className="App">
      working
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
