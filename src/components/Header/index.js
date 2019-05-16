import React from 'react';
import Logo from 'components/Logo';
import tmdbLogo from 'assets/images/tmdb_logo.png';

function Header () {
  return (
    <header className="rm-header">
      <div className="container">
        <Logo />
        <a href="https://www.themoviedb.org/?language=pt-BR" target="_blank" rel="noopener noreferrer">
          <img src={tmdbLogo} alt="The Movie DB" />
        </a>
      </div>
    </header>
  );
}

export default Header;
