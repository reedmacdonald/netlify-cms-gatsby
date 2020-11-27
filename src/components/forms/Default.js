import React from 'react'
import '../styles.scss'

const DefaultForm=(props)=>{
    console.log(props.grades,'<---grades')
    return(
        <>
        <h2>Personal</h2>
        <div className={'grid-four'}>
        <input label='First Name*' placeholder='Keanu'/>
        <input label='Last Name*' placeholder='Reeves'/>
        <input label='Email Address*' placeholder='keanu@reeves.io'/>
        <select label='Gender' name='gender' id='gender'>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
            <option value='nonbinary'>Non-Binary</option>
            <option value='transgender'>Transgender</option>
            <option value='decline'>I do not want to specify</option>
        </select>
        <select label='Race/Nationality' name='race' id='race'>
            <option value='1'>Race1</option>
            <option value='2'>Race2</option>
            <option value='3'>Race3</option>
            <option value='4'>Race4</option>
            <option value='5'>Race5</option>
        </select>
        <input label='Birthday' type="datetime-local"/>
        <select label='State of Residence' name='state' id='state'>
            <option value='California'>California</option>
            <option value='New York'>New York</option>
            <option value='Florida'>Florida</option>
            <option value='Massachussets'>Massachusetts</option>
            <option value='North Dakota'>North Dakota</option>
        </select>
        </div>
        <br/>
        <br/>
        <h2>Education</h2>
        <div className={'grid-four'}>
            <input label='Major (if applicable)' placeholder='Political Science'/>
            <select label='State of Residence' name='state' id='state'>
                {props.grades.map((x)=>{
                return (<option value={x}>{x}</option>)
                })}
            </select>
        <select label='1st-Generation Student' name='state' id='state'>
            <option value='Yes'>California</option>
            <option value='No'>New York</option>
        </select>
        <input label='University' placeholder='UCLA'/>
        </div>
        </>
    )
}
export default DefaultForm