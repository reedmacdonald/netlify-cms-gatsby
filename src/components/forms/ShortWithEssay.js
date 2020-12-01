import React from 'react'
import '../styles.scss'

const ShortWithEssay=(props)=>{
    return(
        <>
        <div className={'grid-four'}>
        <div>
        <label>First Name*
        <input label='First Name*' placeholder='Keanu'/>
        </label>
        </div>
        <div>
        <label>Last Name*
        <input label='Last Name*' placeholder='Reeves'/>
        </label>
        </div>
        <div>
        <label>Email Address*
        <input label='Email Address*' placeholder='keanu@reeves.io'/>
        </label>
        </div>
        <div>
        <label>Gender
        <select label='Gender' name='gender' id='gender'>
            <option value='female'>Female</option>
            <option value='male'>Male</option>
            <option value='nonbinary'>Non-Binary</option>
            <option value='transgender'>Transgender</option>
            <option value='decline'>I do not want to specify</option>
        </select>
        </label>
        </div>
        <div>
        <label>Race/Nationality
        <select label='Race/Nationality' name='race' id='race'>
            <option value='1'>Race1</option>
            <option value='2'>Race2</option>
            <option value='3'>Race3</option>
            <option value='4'>Race4</option>
            <option value='5'>Race5</option>
        </select>
        </label>
        </div>
        <div>
        <label>Birthday
        <input label='Birthday' type="datetime"/>
        </label>
        </div>
        <div>
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
        </div>
        <br/>
        <br/>

        <h3 style={{width:'100%',marginTop:'100px'}}>{props.essayQuestion||'In your opinion, what is the scariest thing?'}</h3>
        <textArea  style={{width:'100%',height:'250px',borderRadius:'30px'}} placeholder='Type your answer here'/>
        </>
    )
}
export default ShortWithEssay