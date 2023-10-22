import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons';

const Page1 = () => {
    const login={
        marginTop:'10rem',
        color:'#595959'
       
       
    }
    const head={
        width:'32%',
        height:'10%',
        backgroundColor:'orange',
        borderRadius:'48%',
        
    }
    const section={
        borderRadius: '5px',
        backgroundColor:'#80d4ff',
        
        
    }
    return (
    <>
    
    <div  className='container col-md-5 col-lg-5  col-sm-10 col-xl-4 col-xxl-3' style={login}>
        <form className='container p-3' style={section}>
            <div className='row'>
            <button className="container my-2 pl-2 pr-2" style={head}><h3><b>Login</b></h3></button>
            <div className="col-md-12 my-2">
               
                <div className="input-group">
                <div className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></div>
                <input type="email" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username"/>
                </div>
            </div>
            <div className="col-md--12 my-2">
                
                <div className="input-group">
                <div className="input-group-text"> <FontAwesomeIcon icon={faLock} /></div>
                <input type="password" className="form-control" id="inlineFormInputGroupUsername" placeholder="Email"/>
                </div>
            </div>
            <div className="col-md-12 my-2">
               
                <select className="form-select" id="inlineFormSelectPref">
                <option selected>--select--</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
               
                </select>
            </div>
            </div>
        </form>
    </div>
    </>
    )
}

export default Page1
