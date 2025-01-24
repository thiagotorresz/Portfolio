import WorkElement from './WorkElement';
import rotaryMobileImg from '../assets/images/works/rotary.jpeg';
import rotaryDesktopImg from '../assets/images/works/rotary-desktop.png';
import casadecampoMobileImg from '../assets/images/works/casadecampo.jpeg';
import casadecampoDesktopImg from '../assets/images/works/casadecampo-desktop.png';
import villageresortMobileImg from '../assets/images/works/villageresort.jpeg';
import villageresortDesktopImg from '../assets/images/works/villageresort-desktop.png';
import amorexigenteMobileImg from '../assets/images/works/amorexigente.jpeg';
import amorexigenteDesktopImg from '../assets/images/works/amorexigente-desktop.png';

import Slider from 'react-slick';
import { i18n } from '../locale/i18n';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Works = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  let info = {
    villageresort: {
      alt: i18n.t('worksSection.villageresort.alt'),
      name: `${i18n.t('worksSection.villageresort.name')}`,
      description: `${i18n.t('worksSection.villageresort.description')}`,
      tools: 'HTML5, CSS3, PHP, JavaScript, Angular.js, MySQL',
      link: 'https://villageresort.com.br/',
    },
    casadecampo: {
      alt: i18n.t('worksSection.casadecampo.alt'),
      name: `${i18n.t('worksSection.casadecampo.name')}`,
      description: `${i18n.t('worksSection.casadecampo.description')}`,
      tools: 'React, Redux, Sass',
      link: 'http://villagecasadecampo.com.br/',
    },
    rotary: {
      alt: i18n.t('worksSection.rotary.alt'),
      name: `${i18n.t('worksSection.rotary.name')}`,
      description: `${i18n.t('worksSection.rotary.description')}`,
      tools: 'HTML5, CSS3, JavaScript',
      link: 'https://villageresort.com.br/rotary',
    },
    amorexigente: {
      alt: i18n.t('worksSection.amorexigente.alt'),
      name: `${i18n.t('worksSection.amorexigente.name')}`,
      description: `${i18n.t('worksSection.amorexigente.description')}`,
      tools: 'React, TypeScript, Sass',
      link: 'https://villageresort.com.br/amorexigente2025/',
    },
  };

  return (
    <section name='works' className='pt-12 md:pt-20 w-full text-theme-white'>
      <div className='flex flex-col w-full h-full max-w-[900px] mx-auto py-4 px-8'>
        <div className='pb-10'>
          <h1 className='font-medium text-xl 2xl:text-2xl border-b-4 inline-block border-theme-white mb-4 pb-1'>
            {i18n.t('worksSection.sectionName')}
          </h1>
          <p className='text-base 2xl:text-lg'>{i18n.t('worksSection.intro')}</p>
        </div>

        <>
          {/* Mobile Slider */}
          <div className='mx-auto w-full max-w-[400px] md:hidden'>
            <Slider {...settings}>
              <div>
                {/* Village Resort */}
                <WorkElement
                  img={villageresortMobileImg}
                  alt={info.villageresort.alt}
                  name={info.villageresort.name}
                  description={info.villageresort.description}
                  tools={info.villageresort.tools}
                  link={info.villageresort.link}
                  code={info.villageresort.code}
                />
              </div>
              <div>
                {/* casadecampo */}
                <WorkElement
                  img={casadecampoMobileImg}
                  alt={info.casadecampo.alt}
                  name={info.casadecampo.name}
                  description={info.casadecampo.description}
                  tools={info.casadecampo.tools}
                  link={info.casadecampo.link}
                  code={info.casadecampo.code}
                />
              </div>
              <div>
                {/* rotary */}
                <WorkElement
                  img={rotaryMobileImg}
                  alt={info.rotary.alt}
                  name={info.rotary.name}
                  description={info.rotary.description}
                  tools={info.rotary.tools}
                  link={info.rotary.link}
                  code={info.rotary.code}
                />
              </div>
              <div>
                {/* Aluga Fácil */}
                <WorkElement
                  img={amorexigenteMobileImg}
                  alt={info.amorexigente.alt}
                  name={info.amorexigente.name}
                  description={info.amorexigente.description}
                  tools={info.amorexigente.tools}
                  link={info.amorexigente.link}
                  code={info.amorexigente.code}
                />
              </div>
            </Slider>
          </div>
          {/* Desktop */}
          <div className='hidden md:flex flex-col'>
            {/* Village Resort */}
            <WorkElement
              img={villageresortDesktopImg}
              alt={info.villageresort.alt}
              name={info.villageresort.name}
              description={info.villageresort.description}
              tools={info.villageresort.tools}
              link={info.villageresort.link}
              code={info.villageresort.code}
            />
            {/* casadecampo */}
            <WorkElement
              img={casadecampoDesktopImg}
              alt={info.casadecampo.alt}
              name={info.casadecampo.name}
              description={info.casadecampo.description}
              tools={info.casadecampo.tools}
              link={info.casadecampo.link}
              code={info.casadecampo.code}
              reverse
            />
            {/* rotary */}
            <WorkElement
              img={rotaryDesktopImg}
              alt={info.rotary.alt}
              name={info.rotary.name}
              description={info.rotary.description}
              tools={info.rotary.tools}
              link={info.rotary.link}
              code={info.rotary.code}
            />
            {/* Aluga Fácil */}
            <WorkElement
              img={amorexigenteDesktopImg}
              alt={info.amorexigente.alt}
              name={info.amorexigente.name}
              description={info.amorexigente.description}
              tools={info.amorexigente.tools}
              link={info.amorexigente.link}
              code={info.amorexigente.code}
              reverse
            />
          </div>
        </>
      </div>
    </section>
  );
};

export default Works;
