import React,{useState} from 'react'
import './Experience.css'
import sad from '../../assets/sad.gif'
import cute1 from '../../assets/cute.gif'
import cute2 from '../../assets/panda.gif'
import cute3 from '../../assets/pandu.gif'
import cute4 from '../../assets/bear.gif'
import cute5 from '../../assets/love.gif'
import cute6 from '../../assets/yu.gif'
import cute7 from '../../assets/cry.gif'
import cute8 from '../../assets/hap.gif'
import cute9 from '../../assets/kanha.gif'





const Experience = () => {

    const[active,setActive]=useState(false)

    return (
        <div className='experience'>
            <h1 className='jo'>Experience</h1>
            {/* <h1 className='gt'>Hello Dear</h1> */}

            <div className="paracon">
                
                {/* <p>you have suffered many thing in your life . some boys have not treated you well . they dont deserve this gem .can you trust the men's gender one last time . i promise i will make this decision one of the best decision of your life . you will never regret for trusting on me . Allow me to give you the exceptional love , respect and care which you deserved . i promise i will never leave you in any situations .  </p> */}
                <div className='para' id='para1'><span className="para1">You've been through a lot in your life, and I know you haven't been treated the way you deserve.People couldn't see the amazing person you are. </span></div>
                <div className='para' id='para2'><span className="para2">As your best friend, I've seen your strength and your kindness, and I cherish every moment we've shared. I'm asking you to trust one last time and give me a chance.</span></div>
                <div className="para" id='para3'><span className="para3">I want to be there for you in every situation, through the good times and the bad. I promise I will never leave you, no matter what happens  <br />Please can you give me a chance </span></div>
                <div className='para' id='para4'><span className="para4">I promise that if you do, it will be one of the best decisions you'll ever make. You won't regret trusting me. Let me show you the love, respect, and care that you've always deserved.  </span></div>
                <div className='para' id='para5'><span className="para5"> I genuinely believe we could have something truly special together. Our friendship means the world to me, and I think we could build something even more amazing.</span></div>
            </div>
            <div class="wrapper">
                <div class="static-txt">I will give you </div>
                <ul class="dynamic-txts">
                    <li><span>Love</span></li>
                    <li><span>Care</span></li>
                    <li><span>Respect</span></li>
                    <li><span>Happiness</span></li>
                </ul>
                <div className="img-container">
                    <img src={cute2} alt="Example GIF" className='gif6'/>
                </div>
            </div>

            <div className="consent" style={{overflow:"hidden",borderBottomLeftRadius:`${active===false?'70px':''}`}}>
                <div className='headingg2'><h3>PLEASE TRUST ONE LAST TIME</h3> <h3> CAN YOU GIVE ME A CHANCE</h3> <h3 id='ki'> I LIKE YOU</h3></div>
                <div className='headingg4'><h1>WILL YOU BE MY KANHA </h1></div>
                <div className='headingg'><h1>DO YOU LIKE ME ?</h1></div>
                <div className="img-container">
                    <img src={cute4} alt="Example GIF" className='gif13'/>
                </div>
                <div className="img-container">
                    <img src={cute9} alt="Example GIF" className='gif14'/>
                </div>
                <div className="img-container">
                    <img src={cute1} alt="Example GIF" className='gif5'/>
                </div>
                <div className="img-container2">
                    <img src={cute5} alt="Example GIF" className='gif9'/>
                </div>
                <div className="img-container2">
                    <img src={cute6} alt="Example GIF" className='gif10'/>
                </div>
                <div className="btns">
                    <button className={`btnn ${active==="yes"?'active':''}`} onClick={()=>{setActive("yes");active==='yes'?setActive(false):""}}>
                        YES
                    </button>
                    <button className={`btnn ${active==="no"?'active':''}`} onClick={()=>{setActive("no");active==='no'?setActive(false):""}}>
                        NO
                    </button>
                </div>
                <div className="img-container">
                    <img src={cute3} alt="Example GIF" className='gif7'/>
                </div>
                <div className='headingg3'>Thank You for changing my behaviour and making me a little extrovert</div> <div className='headingg9'>giving me that much courage to confess my feelings ,unlike 9th class .</div>
            </div>

            <div className="agree" style={{display:`${active==="yes"?"":"none"}`,borderBottomLeftRadius:`${active!==false?'70px':''}`}}>
            <div className='fgh'> 
            <h2 style={{fontSize:"50px",marginBottom:"30px"}} >	&#10084; 	&#10084; THANK YOU 	&#10084; 	&#10084; </h2>
                <h2> Thank You for trusting me <br  /> I promise i will try to make you always happy <br />i promise i will be always loyal to you <br />i will proove that this will be the best decision of your life </h2></div>
                <div className="img-container">
                    <img src={cute8} alt="Example GIF" className='gif1'/>
                </div>
                <div className="img-container">
                    <img src={cute8} alt="Example GIF" className='gif2'/>
                </div>
            </div>

            <div className="disagree" style={{display:`${active==="no"?"":"none"}`,borderBottomLeftRadius:`${active!==false?'70px':''}`}}>
                <div className='fgh'>    <h2 style={{fontSize:"30px",marginBottom:"30px"}}>I RESPECT YOUR DECISION </h2>
                    <h2> Sorry  </h2></div>
                    <h2 style={{color:"white"}}>I wish i could rewrite our friendship </h2>
                    <h2 style={{color:"white"}} >and delete the part in which i felt in love with you</h2>
                <div className="img-container">
                    <img src={sad} alt="Example GIF" className='gif'/>
                </div>
                <div className="img-container2">
                    <img src={cute7} alt="Example GIF" className='gif11'/>
                </div>
            </div>
        </div>
    )
}

export default Experience