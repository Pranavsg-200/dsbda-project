import './App.scss';
import {FaDribbble} from 'react-icons/fa';
import {IoMailOutline, IoChevronForwardCircle, IoStar} from 'react-icons/io5';
import {IconContext} from "react-icons";
import {motion} from 'framer-motion';
import Symptoms from './component/Symptoms';
// import Link from "@material-ui/core/Link";

let easeing = [0.6,-0.05,0.01,0.99];

const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}

const fadeInUp = {
  initial:{
    y:-60,
    opacity:0,
    transition:{
      duration:0.6, ease:easeing
    }
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.6,
      delay:0.5,
      ease:easeing
    }
  }
};

const transition = {duration:1.4,ease:[0.6,0.01,-0.05,0.9]};

const firstName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:-1
    }
  }
}

const middleName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:-1
    }
  }
}

const lastName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:1
    }
  }
}

const letter = {
  initial:{
    y:400,
  },
  animate:{
    y:0,
    transition:{duration:1, ...transition}
  }
};

const btnGroup={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.6, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};
const star={
  initial:{
    y:60,
    opacity:0,
    transition:{duration:0.8, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};

const header={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.05, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};




function App() {
  return (
    <motion.div initial='initial' animate='animate'>
      <motion.header variants={stagger}>
          <motion.div className="logo_wrapper" variants={header}>MP<span>Medico</span></motion.div>
          <motion.div className="menu_container" variants={stagger}>
            <motion.span variants={header}>
              <IconContext.Provider value={{color:"#000", size:"18px", className:"icons_container"}}>
                {/* <div className="icon"><FaBehance/></div> */}
                <div className="icon"><FaDribbble/></div>
              </IconContext.Provider>
            </motion.span>
            <motion.span variants={header}>
              <IconContext.Provider value={{color:"#000", size:"18px"}}>
                <div className="icon"><IoMailOutline/></div>
                mpmedico.co
              </IconContext.Provider>
            </motion.span>
            <motion.span className="menu" variants={header}>
              <span></span>
              <span></span>
              <span></span>
            </motion.span>
          </motion.div>
      </motion.header>

      <motion.div className="content_wrapper" initial={{opacity:0,scale:0}} animate={{opacity:1, scale:1}} transition={{duration:0.3, ease:easeing}}>
        <div className="left_content_wrapper">

          <motion.h2>

            <motion.span variants={firstName} initial="initial" animate="animate" className='first'>
                <motion.span variants={letter}>D</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter} className="second">P</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>d</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>c</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>n</motion.span>
            </motion.span>
            <motion.span variants={middleName} initial="initial" animate="animate" className='second'>
                <motion.span variants={letter}>R</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>c</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>d</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>o</motion.span>
                <motion.span variants={letter}>n</motion.span>
            </motion.span>
            <motion.span variants={lastName} initial="initial" animate="animate" className='last'>
                <motion.span variants={letter}>S</motion.span>
                <motion.span variants={letter}>y</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>m</motion.span>
            </motion.span>
          </motion.h2>

          <motion.p variants={fadeInUp}>The main aim of this model is to detect disease and recommend precautions acoording to systoms observed.</motion.p>

          <motion.div className="btn_group" variants={stagger}>
              <motion.div className="btn btn_primary" variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}} onClick={Symptoms}>Ask me
                <IconContext.Provider value={{color:"#14da8f", size:"25px"}}>
                  <IoChevronForwardCircle/>
                </IconContext.Provider>
              </motion.div>
          </motion.div>


          <motion.div className="review_container" variants={stagger}>
            <motion.p className="more_review" variants={star}></motion.p>
          </motion.div>

        </div>

        <motion.div className="right_content_wrapper">          
          <motion.img src={process.env.PUBLIC_URL + '/images/pngwing.com.png'} alt="bg" initial={{x:200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5, delay:0.8}}/>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default App;


//lets start framer motion......