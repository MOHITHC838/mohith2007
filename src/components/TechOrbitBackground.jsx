/* eslint-disable no-unused-vars */
import {
    SiHtml5,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiEclipseide,
    SiMysql,
    SiGit,
    SiGithub,
    SiRender,
    SiVercel,
    SiNetlify,
  } from "react-icons/si";
  
  import { FaCss3Alt } from "react-icons/fa";
  import { VscVscode } from "react-icons/vsc";
  import '../styles/TechOrbitBackground.css';
import AnimatedSection from '../components/AnimatedSection';

  
  const ORBIT_LOGOS = [
    { Icon: SiHtml5, color: '#E34F26', glow: true },
    { Icon: FaCss3Alt, color: '#1572B6' },
    { Icon: SiJavascript, color: '#F7DF1E', glow: true },
    { Icon: SiReact, color: '#61DAFB', glow: true },
    { Icon: SiNodedotjs, color: '#339933' },
    { Icon: SiExpress, color: '#000000' },
    { Icon: SiMongodb, color: '#47A248', glow: true },
    { Icon: VscVscode , color: '#007ACC' },
    { Icon: SiEclipseide, color: '#2C2255' },
    { Icon: SiMysql, color: '#4479A1' },
    { Icon: SiGit, color: '#F05032', glow: true },
    { Icon: SiGithub, color: '#181717' },
    { Icon: SiRender, color: '#46E3B7' },
    { Icon: SiVercel, color: '#000000' },
    { Icon: SiNetlify, color: '#00C7B7', glow: true },
  ];
  
  const TechOrbitBackground = () => {
    const count = ORBIT_LOGOS.length;
    const step = 360 / count;
  
    return (
      <div className="tech-orbit-bg" aria-hidden="true">
        <div className="tech-orbit-bg__gradient" />
        <div className="tech-orbit-bg__center-glow" />
  
        <div className="orbit-stage">
          <div className="orbit-ring orbit-ring--primary">
            {ORBIT_LOGOS.map(({ Icon, color, glow }, index) => {
              const angle = step * index;
              return (
                <div
                  key={Icon.name}
                  className="orbit-item"
                  style={{ '--orbit-angle': `${angle}deg` }}
                >
                  <div
                    className={`orbit-logo${glow ? ' orbit-logo--glow' : ''}`}
                    style={{ '--logo-color': color }}
                  >
                    <Icon className="orbit-logo__icon" />
                  </div>
                </div>
              );
            })}
          </div>
  
          {/* Optional subtle inner accent ring */}
          <div className="orbit-ring orbit-ring--accent" />
        </div>
      </div>
    );
  };
  
  export default TechOrbitBackground;