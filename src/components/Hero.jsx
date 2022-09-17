import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Typed from 'react-typed';

const Hero = () => {
  return (
    <section id="home" className={`bg-black flex md:flex-row flex-col ${styles.padding}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col  xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-col text-center justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Direito <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Blockchain</span>{" "}
          </h1>
        </div>

        <Typed
          className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'
            strings={['Web3', 'DAOs', 'NFTs', 'DeFi']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        <p className={`${styles.paragraph} max-w-[680px] mt-5 text-center`}>
          A JurisChain DAO visa ser um ambiente para a promoção de conhecimento, relacionamento e colaboração de profissionais jurídicos,
          bem como de todos aqueles interessados pelo tema de alguma maneira.
        </p>
      </div>

    


    </section>
  );
};

export default Hero;
