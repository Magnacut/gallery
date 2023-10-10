import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import {useState,useEffect} from 'react';

function Head(props){
  return <header className="App-header">
        <div className='Header_Button'onClick={(event)=>{
  event.preventDefault();
  if($(".List_Con").css('display')==="none"){
  $(".List_Con").css({'display':'block'});
  //$("body").css({'overflow':'hidden'});
}
  else if($(".List_Con").css('display')==="block"){
    $(".List_Con").css({'display':'none'});
    //$("body").css({'overflow':'unset'});
  }
}}>
          <img className='Button_Img' src="plus.png">
          </img>
        </div>
        <div className='Header_Main'>
          <div className='Logo_Img'onClick={(event)=>{
              event.preventDefault();
              props.changeMode(1);
            }}>
            <img src="gallerylogo.png">
            </img>
          </div>
          <div className='Square_Box'>
            <div className='Square' onClick={(event)=>{
              event.preventDefault();
              props.changeMode(2);
            }}>Gallery1
            </div>
            <div className='Square'onClick={(event)=>{
              event.preventDefault();
              props.changeMode(3);
            }}>
            Gallery2
            </div>
            <div className='Square'onClick={(event)=>{
              event.preventDefault();
              props.changeMode(4);
            }}>
            Gallery3
           </div>
        </div>
        <div className='List_Con'>
          <div className='List'>
          <a href="https://magnacut.github.io/portfolio/" target="_blank">Portfolio Web Site</a>
          </div>
          <div className='List'>
          <a href="https://ybo1769f9e3.myportfolio.com/" target="_blank">Works</a>
          </div>
          <div className='List'>
          <a href="https://www.instagram.com/me_or_no/" target="_blank">Instagram</a>
          </div>
          <div className='List'>
          <a href="https://velog.io/@magnacut/" target="_blank">Velog</a>
          </div>
          <div className='List List_Blank'>
          Coming Soon
          </div>
        </div>
        </div>
        <div className='Header_Etc' >
        </div>
      </header>
}
function Footer(props){
  return <footer>
    <div className='Footer'>
    COPYRIGHT © 2023 SEUNGMIN LEE ALL RIGHTS RESERVED.
    </div>
  </footer>
}


function App() {
  const [mode, setMode] = useState(1);
  let main = null;
  if(mode === 1){
    main = <div className='Main_Back1'><img src='back1.png'></img></div>
   }
  if(mode === 2){
    main = <div className='Main_Back2'>
      <div className='Big_Pic1'><img src='46120007.JPG'></img></div>
      <div className='Big_Pic2'>
        <div className='Small_Pic'><img src='46120006.jpg'></img></div>
        <div className='Small_Pic_Center'><img src='46120011-2.JPG'></img></div>
        <div className='Small_Pic'><img src='46120013.JPG'></img></div>
        <br></br> Euljiro, Seoul, 2023
      </div>
      <div className='Big_Pic1'><img src='P1016371.jpg'></img></div>
      <div className='Big_Pic2'>
        <div className='Small_Pic'><img src='P1016368.png'></img></div>
        <div className='Small_Pic_Center'><img src='P1016376.png'></img></div>
        <div className='Small_Pic'><img src='P1016379.png'></img></div>
        <br></br> Daegu Photo Biennale, Daegu, 2023
      </div>
      <div className='Big_Pic1'><img src='레이어 1.png'></img></div>
      <div className='Big_Pic2'>
        <div className='Small_Pic'><img src='레이어 2.png'></img></div>
        <div className='Small_Pic_Center'><img src='레이어 3.png'></img></div>
        <div className='Small_Pic'><img src='레이어 4.png'></img></div>
        <br></br> Eulsukdo Island, Busan, 2023
      </div>
    </div>
   }
   if(mode === 3){
    main = <div className='Main_Back1'>
      Not yet....
    </div>
   }
   if(mode === 4){
    main = <div className='Main_Back1'>
      Not yet....
    </div>
   }

  
  return (
    <div className="App">
    <Head changeMode={(event)=>{
      setMode(event);
    }}></Head>
    {main}
    <Footer></Footer>
    </div>
  );
}

export default App;
