import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';


//This is a component
function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient bg-clip-text text-transparent '>duo</span>  está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="#" className='relative rounded-lg overflow-hidden'>
          <img src="/game1.png" alt="" />

          <div className='w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>


        <a href="#" className='relative rounded-lg overflow-hidden'>
          <img src="/game2.png" alt="" />

          <div className='w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>


        <a href="#" className='relative rounded-lg overflow-hidden'>
          <img src="/game3.png" alt="" />

          <div className='w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 right-0'>
            <strong className='font-bold text-white block'>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>


        <a href="#" className='relative rounded-lg overflow-hidden'>
          <img src="/game4.png" alt="" />

          <div className='w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 right-0'>
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>


        <a href="#" className='relative rounded-lg overflow-hidden'>
          <img src="/game5.png" alt="" />

          <div className='w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        
        <a href="#" className='relative rounded-lg overflow-hidden'>
          <img src="/game6.png" alt="" />

          <div className='w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
