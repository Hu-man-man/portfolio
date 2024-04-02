import React, { useState, useEffect, CSSProperties } from 'react';

const App: React.FC = () => {
  const [styles, setStyles] = useState<CSSProperties[]>([]);

  useEffect(() => {
    const newStyles: CSSProperties[] = [];
    for (let i = 0; i < 15; i++) {
      const left = `${Math.floor(Math.random() * 100)}vw`; // Position aléatoire sur l'axe horizontal
      const size = `${Math.floor(Math.random() * 40) + 60}px`; // Taille aléatoire entre 40px - 100px
      const delay = `${Math.floor(Math.random() * 25)}s`; // Délai d'animation aléatoire
      newStyles.push({
        position: 'fixed',
        left,
        bottom: '-180px',
        height: size,
        width: size,
        boxShadow: '0 0 50px #97D9DF, 0 0 100px #97D9DF, 0 0 150px #97D9DF, 0 0 200px #97D9DF',
        animation: 'animate 25s linear infinite',
        animationDelay: delay,
      });
    }
    setStyles(newStyles);
  }, []);

  return (
    <div className="h-screen">
      <div className="wrapper">
        {styles.map((style, index) => (
          <span key={index} style={style} />
        ))}
      </div>
      <style>{`
        @keyframes animate {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          80% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-800px) rotate(200deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default App;

