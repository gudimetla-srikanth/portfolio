import React from 'react'
import './Skillset.css'
import { data } from '../../data'
export default function SkillsSet() {
    return (
        <div className="skill">
            <div className="skill_wrapper">
                <div className="skill_top"><h2>Technical Knowledge</h2></div>
                <div className="skill_bottom">
                    <div className="skill_item">
                        {data.map((item) => {
                            return <div className='skillset_data'>
                                <img src={item.skill_image} alt="" /></div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}
