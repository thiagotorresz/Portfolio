import SkillCard from './SkillCard';

import {
  SiTailwindcss,
  SiFirebase,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiAngular ,
  SiPhp,
  SiBootstrap,
  SiCodeigniter 
} from 'react-icons/si';
import { DiDatabase, DiJava } from "react-icons/di";
import { BsPlusLg } from 'react-icons/bs';
import { HiMinus } from 'react-icons/hi';

import { i18n } from '../locale/i18n';
import { useState } from 'react';

const Skills = () => {
  const [active, setActive] = useState(false);
  const showMore = () => {
    setActive(!active);
  };

  return (
    <section name='skills' className='w-full pt-12 md:pt-20'>
      <div className='max-w-[900px] mx-auto p-4 md:p-8'>
        <div>
          <h1 className='font-medium text-xl 2xl:text-2xl border-b-4 inline-block border-theme-white mb-4 pb-1'>
            {i18n.t('skillsSection.sectionName')}
          </h1>
        </div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 text-center gap-5 pb-6 md:pb-0 md:pt-6'>
          <SkillCard color='#EFD81E' icon={SiJavascript} name='JavaScript' />
          <SkillCard color='#61DAFB' icon={SiReact} name='React' />
          <SkillCard color='#83CD29' icon={SiNodedotjs} name='Node.js' />
          <SkillCard color='#146BBC' icon={SiTypescript} name='TypeScript' />
          <SkillCard color='#DD0031' icon={SiAngular } name='Angular.js' />
          <SkillCard color='#F89917' icon={DiJava } name='Java' />
          <SkillCard color='#787CB4' icon={SiPhp} name='PHP' active={active} />
          <SkillCard color='#EE4323' icon={SiCodeigniter } name='CodeIgniter' active={active} />
          <SkillCard color='#36B7F0' icon={SiTailwindcss} name='Tailwind' active={active} />
          <SkillCard color='#553D7B' icon={SiBootstrap } name='Bootstrap' active={active} />
          <SkillCard color='#EE800F' icon={SiFirebase} name='Firebase' active={active} />
          <SkillCard color='#B3B3B6' icon={DiDatabase} name='Database' active={active} />
        </div>
        <button
          className='sm:hidden w-36 h-11 flex justify-center items-center mx-auto rounded bg-transparent border-2 hover:text-white active:text-white hover:bg-theme-blue-50 active:bg-theme-blue-50 hover:border-theme-blue-50 active:border-theme-blue-50 duration-200 group font-medium'
          onClick={showMore}>
          {active ? `${i18n.t('skillsSection.showLess')}` : `${i18n.t('skillsSection.showMore')}`}
          {active ? <HiMinus className='ml-1' /> : <BsPlusLg className='ml-1' />}
        </button>
      </div>
    </section>
  );
};

export default Skills;
