import React,{useState} from 'react'
import './Experience.css'
import sad from '../../assets/sad.gif'
import party1 from '../../assets/party1.gif'

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
            </div>

            <div className="consent">
            <div className='headingg2'><h3>TRUST ONE LAST TIME</h3> <h3> CAN YOU GIVE ME A CHANCE</h3> <h3 id='ki'> I LIKE YOU</h3></div>
                <div className='headingg'><h1>DO YOU LIKE ME</h1></div>
                <div className="btns">
                    <button className={`btnn ${active==="yes"?'active':''}`} onClick={()=>{setActive("yes");active==='yes'?setActive(false):""}}>
                        YES
                    </button>
                    <button className={`btnn ${active==="no"?'active':''}`} onClick={()=>{setActive("no");active==='no'?setActive(false):""}}>
                        NO
                    </button>
                </div>
            </div>

            <div className="agree" style={{display:`${active==="yes"?"":"none"}`}}>
            <div className='fgh'> 
            <h2 style={{fontSize:"50px",marginBottom:"30px"}} >THANK YOU </h2>
                <h2> Thank You for trusting me <br />This will be the best decision of your life <br />You won't regret<br /></h2></div>
            
                <div className="img-container">
                    <img src={party1} alt="Example GIF" className='gif1'/>
                </div>
                <div className="img-container2">
                    <img src={party1} alt="Example GIF" className='gif2'/>
                </div>
            </div>

            <div className="disagree" style={{display:`${active==="no"?"":"none"}`}}>
                <div className='fgh'>    <h2 style={{fontSize:"30px",marginBottom:"30px"}}>I RESPECT YOUR DECISION </h2>
                <h2>I hurt your feelings </h2>
                    <h2>I am extremely Sorry  </h2></div>
                <div className="img-container">
                    <img src={sad} alt="Example GIF" className='gif'/>
                </div>
            </div>
        </div>
    )
}

export default Experience