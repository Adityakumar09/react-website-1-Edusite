import React from 'react'
import './Programs.css'
import pro1 from '../../assets/program-1.png'
import pro2 from '../../assets/program-2.png'
import pro3 from '../../assets/program-3.png'
import pric1 from '../../assets/program-icon-1.png'
import pric2 from '../../assets/program-icon-2.png'
import pric3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs' >
        <div className="program">
            <img src={pro1} alt="" />
            <div className="caption">
                <img src={pric1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={pro2} alt="" />
            <div className="caption">
                <img src={pric2} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={pro3} alt="" />
            <div className="caption">
                <img src={pric3} alt="" />
                <p>Post Graduation </p>
            </div>
        </div>
        
    </div>
  )
}

export default Programs