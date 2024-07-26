import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import bgImage from './images/bg.jpeg';
import narutoImage from './images/naruto.png';
import narutoSound from './sound/effect_naruto.mp3';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState('Hello');
  const audioRef = useRef(null);

  useEffect(() => {
    const loadQuotes = async () => {
      try {
        const response = await fetch('/Frases_naruto.txt'); // Caminho direto na raiz da pasta public
        if (!response.ok) {
          throw new Error('Falha ao carregar o arquivo de frases.');
        }
        const text = await response.text();
        const lines = text.trim().split('\n');
        const quotesArray = lines.map(line => {
          const parts = line.split('\t');
          return parts.length === 3 ? `${parts[1]}: ${parts[2]}` : '';
        }).filter(quote => quote.trim() !== '');
        console.log('Frases carregadas:', quotesArray); // Adicione esta linha para depuração
        setQuotes(quotesArray);
      } catch (error) {
        console.error('Erro ao carregar o arquivo de frases:', error);
      }
    };
    

    loadQuotes();
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Erro ao reproduzir o som:', error);
      });
    }
  };

  const getRandomQuote = () => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const newQuote = quotes[randomIndex];
      console.log('Nova citação:', newQuote); // Adicione esta linha para depuração
      setCurrentQuote(newQuote);
    } else {
      console.log('Nenhuma citação disponível'); // Adicione esta linha para depuração
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bgImage})` }}>
      <header className="App-header">
        <div className="content">
          <p className="Quote">{currentQuote}</p>
          <button className="Quote" onClick={() => { playSound(); getRandomQuote(); }}>
            Quote no Jutsu
          </button>
        </div>
        <img src={narutoImage} alt="Naruto" className="naruto-image" />
        <audio ref={audioRef} src={narutoSound} />
      </header>
    </div>
  );
}

export default App;
