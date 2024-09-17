import React from 'react';
import '../assets/styles/home.scss';
import backgroundImage1 from '../assets/images/ezgif-5-b60b11bd32.jpeg';
import githubImage from '../assets/images/github.png';
import cvImage from '../assets/images/resume-2296951_640.webp';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');
  
  
    

const Home = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div>
            {/* <h1>Welcome to My Business</h1>
            <p>This is the home page.</p> */}
            <div className="module-content-parent">
                <div style={{ backgroundImage: `url(${backgroundImage1})`, paddingTop: 60 }} className="module-content white-text-module">
                    <div className="unit-wrapper">
                        <h2 className="headline">Inteligentní servis počítačů</h2>
                        <h3 style={{ color: 'rgb(252	203	168	)', fontSize: 30, marginTop: 10 }} className="subhead">Kvalita. Detailnost. Kreativita.</h3>

                        <div className="cta-links-new-gen">
                            <a>Learn more</a>
                            <button onClick={openModal}>warning</button>

                            {/* <a>Buy</a> */}
                        </div>
                    </div>
                </div>
                {/* <div className="module-content">
                <div className="unit-wrapper">
                            <h2 className="headline">Lorem, ipsum dolor.</h2>
                            <h3 className="subhead">Lorem ipsum dolor sit amet.</h3>

                            <div className="cta-links">
                                <a>Learn more</a>
                                <a>Buy</a>
                            </div>
                    </div>
                </div> */}
                <div className="container-50">
                    <div style={{ backgroundImage: 'linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)' }} className="module-content">
                        <img className='module-image' src={cvImage} alt="" srcset="" />

                        <div className="unit-wrapper">
                            <h2 className="headline">Stáhněte si můj životopis</h2>
                            <h3 className="subhead">Lorem ipsum dolor sit amet.</h3>

                            <div className="cta-links">
                                <a>Stáhnout</a>
                                {/* <a>Buy</a> */}
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }} className="module-content">
                        <div className="unit-wrapper">
                            <h2 className="headline">Můj Github</h2>
                            <h3 className="subhead">Můžete si prohlédnout moje univerzitní a osobní projekty</h3>

                            <div className="cta-links">
                                <a>Learn more</a>
                                {/* <a>Buy</a> */}
                            </div>
                        </div>
                        <img className='module-image' src={githubImage} alt="" srcset="" />

                    </div>
                </div>
                <div className="module-content">
                    <div className="unit-wrapper">
                        <h2 className="headline">Kontakt</h2>
                        <h3 className="subhead">Můžete mě kontaktovat e-mailem nebo přes WhatsApp. Také můžete zanechat zprávu prostřednictvím kontaktního formuláře a odpovíme vám na uvedený e-mail.</h3>

                        <div className="cta-links">
                            <a>Learn more</a>
                            <a>Formulář</a>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>This web site in developing</h2>
        <div>in case of any questions call 722 570 597</div>
        <button onClick={closeModal}>close</button>
       
      </Modal>

        </div>
    );
};

export default Home;