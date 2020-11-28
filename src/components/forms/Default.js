import React from 'react'
import '../styles.scss'

const DefaultForm=(props)=>{
    return(
        <>
        <h2>Personal</h2>
        <div className={'grid-four'}>
        <div>
        <h4>First Name*</h4>
        <input label='First Name*' placeholder='Keanu'/>
        </div>
        <div>
        <h4>Last Name*</h4>
        <input label='Last Name*' placeholder='Reeves'/>
        </div>
        <div>
        <h4>Email Address*</h4>
        <input label='Email Address*' placeholder='keanu@reeves.io'/>
        </div>
        <div>
        <h4>Gender</h4>
        <select label='Gender' name='gender' id='gender'>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
            <option value='nonbinary'>Non-Binary</option>
            <option value='transgender'>Transgender</option>
            <option value='decline'>I do not want to specify</option>
        </select>
        </div>
        <div>
        <h4>Race/Nationality</h4>
        <select label='Race/Nationality' name='race' id='race'>
            <option value='1'>Race1</option>
            <option value='2'>Race2</option>
            <option value='3'>Race3</option>
            <option value='4'>Race4</option>
            <option value='5'>Race5</option>
        </select>
        </div>
        <div>
        <h4>Birthday</h4>
        <input label='Birthday' type="datetime"/>
        </div>
        <div>
        <h4>State of Residence</h4>
        <select label='State of Residence' name='state' id='state'>
            <option value='California'>California</option>
            <option value='New York'>New York</option>
            <option value='Florida'>Florida</option>
            <option value='Massachussets'>Massachusetts</option>
            <option value='North Dakota'>North Dakota</option>
        </select>
        </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Education</h2>
        <div className={'grid-four'}>
        <div>
            <h4>Major (if applicable)</h4>
            <input label='Major (if applicable)' placeholder='Political Science'/>
            </div>
            <div>
            <h4>State of Residence</h4>
            <select label='State of Residence' name='state' id='state'>
                {props.grades.map((x)=>{
                return (<option value={x}>{x}</option>)
                })}
            </select>
            </div>
            <div>
            <h4>1st-Generation Student?</h4>
        <select label='1st-Generation Student' name='state' id='state'>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
        </select>
        </div>
        <div>
        <h4>University</h4>
        <input label='University' placeholder='UCLA'/>
        </div>
        </div>
        </>
    )
}
export default DefaultForm