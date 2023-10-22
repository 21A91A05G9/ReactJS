import background from './blue.jpg'
function Adminpage1(){
    return (
        <div  style={{ backgroundImage: `url(${background})`, height:'100vh', backgroundSize:'cover' }}>
        <div className="container  col-md-10 col-lg-9  col-sm-10 col-xl-8 col-xxl-5'" style={{paddingTop:'10rem'}}>
            <div className="row">
                <div className="col-md-5 col-lg-5">
                <div className="input-group mb-3 ">
                <span style={{backgroundColor:'orange',color:'black',border:'1px solid black'}} className="input-group-text" id="inputGroup-sizing-default"><b>From:</b></span>
                <input style={{backgroundColor:'',border:'1px solid black'}} type="text" className="form-control p-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                </div>

                

                <div className="col-md-5 col-lg-5">
                <div className="input-group mb-3 ">
                <span  style={{backgroundColor:'orange',color:'black',border:'1px solid black'}} className="input-group-text" id="inputGroup-sizing-default"><b>To:</b></span>
                <input style={{backgroundColor:'',border:'1px solid black'}} type="text" className="form-control p-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                </div>
                
                
                <div className='mx-2 col-md-1 col-lg-1 col-sm-10 col-xs-10' ><button type="button" style={{marginLeft:'40%'}} className=" btn btn-primary ">Search</button></div>
            </div>
        </div>
        </div>
    )
}
export default Adminpage1;