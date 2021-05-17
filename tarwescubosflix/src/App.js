import React, { useState } from 'react';
import './App.css';
import Cards from './components/cards';
import Movies from './components/data.js';
import profile from './images/profile.png';
import Banner from './components/banner';
import Filters from './components/filter';
import Sacola from './components/sacola';

function App() {


  const [moviesList, setMoviesList] = useState(Movies);
  
  const [filtros, setFiltros] = useState([]);

  function clickMovieFilter(category) {
  

  if (category === 'all') {
    setFiltros([]);
    return;
  }

  const contemFiltro = filtros.find((t) => t === category)
  
  if (contemFiltro) {
    setFiltros(
      filtros.filter((t) => t !== category)
    )
    return
  } else {
    setFiltros(
      [...filtros, category]
    );
  }

}
    
  function filtrarFilmes(filme) {
    
    if (filtros.length === 0) {
      return filme;
    }
    if (filtros.length > 0) {
      if (filtros.some((e) => filme.categories.includes(e))) {
        return filme
      } else {
        return
      } 
    }
      
  }

  return (
    <div className="App">
      <div className="topo">

        <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.84523 21.3983L22.5309 8.74064C23.0166 8.45862 23.6384 8.48562 24.0931 8.81864C26.1534 10.3217 27.9941 11.8458 29.2222 13.1269C29.2222 13.1269 30.2802 14.1529 30.7381 14.8039C31.4774 15.692 31.8332 16.853 31.8332 17.9811C31.8332 19.2472 31.4434 20.4442 30.6669 21.4013C30.4906 21.5723 29.8193 22.3253 29.1851 22.9403C25.4852 26.7685 15.8272 33.0929 10.7476 35.01C10.0083 35.319 8.03461 35.964 7.01065 36C6.02381 36 5.071 35.796 4.15531 35.349C3.02927 34.7339 2.14761 33.7799 1.65264 32.6488C1.33401 31.8628 0.842137 29.5047 0.842137 29.4357C0.523502 27.7526 0.2853 25.3885 0.167746 22.6283C0.146091 22.1333 0.409042 21.6533 0.84523 21.3983Z" fill="#FCBDEB"/>
        <path opacity="0.4" d="M2.29534 14.5806C1.33944 15.1416 0.136051 14.4246 0.182454 13.3475C0.296915 10.8214 0.494901 8.59529 0.736197 6.9392C0.773319 6.9032 1.26519 3.96605 1.83131 2.973C2.81815 1.12791 4.7547 -0.000145912 6.83665 -0.000145912H7.00989C8.35248 0.032855 11.2078 1.16091 11.2078 1.22991C12.6463 1.79694 14.5241 2.75699 16.5442 3.91205C17.4537 4.43408 17.4753 5.71514 16.5658 6.24617L2.29534 14.5806Z" fill="#F089D3"/>
        </svg>

        <div className="pesquisa">

          <input type="search" name="" id="pesquisaTopo" placeholder="Pesquise filmes ..." />

          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6.84448" cy="6.84448" r="5.99243" stroke="white" stroke-width="1.00001" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M11.0122 11.3232L13.3616 13.6665" stroke="white" stroke-width="1.00001" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </div>        
        
        <div className="links"> 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6648 18.6314L5.73346 21.8808C5.25989 22.1269 4.67646 21.9527 4.41538 21.4872V21.4872C4.33985 21.343 4.2991 21.1832 4.29639 21.0204V6.62223C4.29639 3.87623 6.17282 2.77783 8.87305 2.77783H15.2163C17.8341 2.77783 19.793 3.803 19.793 6.43916V21.0204C19.793 21.2801 19.6898 21.5293 19.5061 21.7129C19.3224 21.8966 19.0733 21.9998 18.8135 21.9998C18.6479 21.9972 18.485 21.9565 18.3376 21.8808L12.3696 18.6314C12.1497 18.5126 11.8847 18.5126 11.6648 18.6314Z" stroke="#FDFDFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M8.36963 9.32241H15.6648" stroke="#FDFDFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <a href="_blanck">Favoritos</a>
        </div>
       

        <div className="links"> 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.79413 7.05575C4.79413 5.80675 5.80713 4.79375 7.05513 4.79375H8.08413C8.68013 4.79375 9.25313 4.55775 9.67713 4.13675L10.3961 3.41675C11.2771 2.53175 12.7091 2.52775 13.5941 3.40875L13.6031 3.41675L14.3231 4.13675C14.7461 4.55775 15.3191 4.79375 15.9161 4.79375H16.9441C18.1931 4.79375 19.2061 5.80675 19.2061 7.05575V8.08275C19.2061 8.68075 19.4421 9.25275 19.8631 9.67675L20.5831 10.3967C21.4681 11.2777 21.4731 12.7087 20.5921 13.5947L20.5831 13.6037L19.8631 14.3237C19.4421 14.7457 19.2061 15.3197 19.2061 15.9157V16.9447C19.2061 18.1937 18.1931 19.2057 16.9441 19.2057H15.9161C15.3191 19.2057 14.7461 19.4427 14.3231 19.8637L13.6031 20.5827C12.7231 21.4687 11.2911 21.4727 10.4051 20.5917C10.4021 20.5887 10.3991 20.5857 10.3961 20.5827L9.67713 19.8637C9.25313 19.4427 8.68013 19.2057 8.08413 19.2057H7.05513C5.80713 19.2057 4.79413 18.1937 4.79413 16.9447V15.9157C4.79413 15.3197 4.55713 14.7457 4.13613 14.3237L3.41713 13.6037C2.53113 12.7227 2.52713 11.2907 3.40813 10.4057L3.41713 10.3967L4.13613 9.67675C4.55713 9.25275 4.79413 8.68075 4.79413 8.08275V7.05575" stroke="#FDFDFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M9.42969 14.5697L14.5697 9.42969" stroke="#FDFDFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M14.5664 15.3225C14.3664 15.3225 14.1764 15.2425 14.0364 15.1025C13.9664 15.0325 13.9164 14.9425 13.8764 14.8525C13.8364 14.7625 13.8164 14.6735 13.8164 14.5725C13.8164 14.4725 13.8364 14.3725 13.8764 14.2825C13.9164 14.1925 13.9664 14.1125 14.0364 14.0425C14.3164 13.7625 14.8164 13.7625 15.0964 14.0425C15.1664 14.1125 15.2264 14.1925 15.2664 14.2825C15.2964 14.3725 15.3164 14.4725 15.3164 14.5725C15.3164 14.6735 15.2964 14.7625 15.2664 14.8525C15.2264 14.9425 15.1664 15.0325 15.0964 15.1025C14.9564 15.2425 14.7664 15.3225 14.5664 15.3225Z" fill="#FDFDFD"/>
          <path opacity="0.4" d="M9.42627 10.1826C9.32627 10.1826 9.23627 10.1616 9.14627 10.1216C9.05627 10.0816 8.96627 10.0326 8.89627 9.96264C8.82627 9.88264 8.77627 9.80264 8.73627 9.71264C8.69627 9.62164 8.67627 9.53264 8.67627 9.43264C8.67627 9.33164 8.69627 9.23264 8.73627 9.14264C8.77627 9.05264 8.82627 8.96264 8.89627 8.90264C9.18627 8.62164 9.67627 8.62164 9.95627 8.90264C10.0963 9.04164 10.1763 9.23264 10.1763 9.43264C10.1763 9.53264 10.1663 9.62164 10.1263 9.71264C10.0863 9.80264 10.0263 9.88264 9.95627 9.96264C9.88627 10.0326 9.80627 10.0816 9.71627 10.1216C9.62627 10.1616 9.52627 10.1826 9.42627 10.1826Z" fill="#FDFDFD"/>
          </svg>
        
          <a href="_blanck">Promoções</a>
        </div>
       
        {/* ../assets/images/profile.png */}
        <div className="conta">
        <a href="_blanck" className="linkProfile">Tarcisio Wesley</a>
        
          <img src={ profile } alt="" />
        </div>

      </div>
      
      <Sacola/>
      
      
      
      <div className="conteiner">

        <Banner/>

        
        <h1>Top Filmes</h1>
        <div className="filmes">
         
          { moviesList.map((movie) => <Cards image={ movie.backgroundImg } title={ movie.title } price={ movie.price } stars={ movie.starsCount } favorite={ movie.isStarred }/>) }
          
        </div>
 
        <div className="divisoria">

          <h1>Filmes</h1>
                
          <section className="filters">
            
            <button className="filter filter--active" onClick={() => clickMovieFilter('all') } >
                Todos
            </button>
            
            <button className="filter" onClick={ () => clickMovieFilter('action') } >
                Ação
            </button>
            
            <button className="filter" onClick={ () => clickMovieFilter('romance') } >
                Romance
            </button>
            
            <button className="filter" onClick={ () => clickMovieFilter('science fiction') } >
                Ficção científica
            </button>
            
            <button className="filter" onClick={() => clickMovieFilter('horror') } >
                Terror
            </button>
            
          </section>
                   
        </div>
      
        <div className="filmes2">         
          
          { moviesList.filter(filtrarFilmes).map((movie) => <Cards image={ movie.backgroundImg } title={ movie.title } price={ movie.price } stars={ movie.starsCount } favorite={ movie.isStarred }/>) }
          
        </div> 
      </div>

      

    </div>
    
  )
}

export default App
