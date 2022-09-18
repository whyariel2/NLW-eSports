import { useState } from 'react';

import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';


//This is a component
function App() {
  const [hasUserClickedOnButton, setHasUserClickedOnButton] = useState(false)

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient bg-clip-text text-transparent '>duo</span>  está aqui.</h1>

      {/* Container Game Banner */}
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GameBanner bannerUrl='/game1.png' title='League of Legends' adsCount={5}/>
        <GameBanner bannerUrl='/game2.png' title='Apex Legends' adsCount={5}/>
        <GameBanner bannerUrl='/game3.png' title='CS:GO' adsCount={5}/>
        <GameBanner bannerUrl='/game4.png' title='Valorant' adsCount={5}/>
        <GameBanner bannerUrl='/game5.png' title='Minecraft' adsCount={5}/>
        <GameBanner bannerUrl='/game6.png' title='Fortnite' adsCount={5}/>
      </div>

      <CreateAdBanner />
    </div>
  );
}

export default App;
