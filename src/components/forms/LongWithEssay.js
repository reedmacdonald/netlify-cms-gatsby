import React from 'react'
import '../styles.scss'

const LongWithEssay=(props)=>{
    return(
        <>
        <h2>Personal</h2>
        <div className={'grid-four'}>
        <label>First Name*
        <input placeholder='Keanu'/>
        </label>
        <label>Last Name*
        <input placeholder='Reeves'/>
        </label>
        <label>Email Address*
        <input placeholder='keanu@reeves.io'/>
        </label>
        <label>Gender<br/>
        <select label='Gender' name='gender' id='gender'>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
            <option value='nonbinary'>Non-Binary</option>
            <option value='transgender'>Transgender</option>
            <option value='decline'>I do not want to specify</option>
        </select>
        </label>
        <label>Race/Nationality
        <select label='Race/Nationality' name='race' id='race'>
            <option value='1'>Race1</option>
            <option value='2'>Race2</option>
            <option value='3'>Race3</option>
            <option value='4'>Race4</option>
            <option value='5'>Race5</option>
        </select>
        </label>
        <label>Birthday
        <input label='Birthday' type="datetime-local"/>
        </label>
        <label>State of Residence
        <select label='State of Residence' name='state' id='state'>
            <option value='California'>California</option>
            <option value='New York'>New York</option>
            <option value='Florida'>Florida</option>
            <option value='Massachussets'>Massachusetts</option>
            <option value='North Dakota'>North Dakota</option>
        </select>
        </label>
        </div>
        <br/>
        <br/>
        <br/>
        <h2>Education</h2>
        <div className={'grid-four'}>
        <label>Major (if applicable)
            <input label='Major (if applicable)' placeholder='Political Science'/>
            </label>
            <label>State of Residence
            <select label='State of Residence' name='state' id='state'>
                {props.grades.map((x)=>{
                return (<option value={x}>{x}</option>)
                })}
            </select>
            </label>
            <label>1st-Generation Student
        <select label='1st-Generation Student' name='state' id='state'>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
        </select>
        </label>
        <label>University
        <input label='University' placeholder='UCLA'/>
        </label>
        </div>
        <br/>
        <br/>
        <br/>
        <h3>{props.essayQuestion||'What do you think is the scariest thing?'}</h3>
        <textArea style={{width:'100%',marginTop:'20px',borderRadius:'10px'}} placeholder='Type your answer here'/>
        </>
    )
}
export default LongWithEssay