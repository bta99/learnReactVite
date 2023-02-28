import { useState } from "react";

export default function Modal(){

    const [show,setShow] = useState(false)

   
    const handleShow =()=>{
        setShow(!show);
    }
   
    const backgroundStyle = {
        backgroundColor:'rgba(49,49,49,0.8)',
        width:'100vh',
        height:'100vh',
        position:'fixed',
    }
//  const animation = ;
    const content = {
        width:'300px',
        height:'300px',
        backgroundColor:'white',
        position:'absolute',
        // top:'50%',
        // transform:'translateY(-50%)',
        borderRadius:'10px',
        transition:'2s',
       
    }

   
    

    return <>
    <button onClick={handleShow}>Click Show Modal</button>
    {
        show && <>
        <div className="modal-background"  onClick={()=>setShow(false)} style={backgroundStyle}>
    </div>
        <div className="content" style={content}>
            <div className="tieude-nutclose" style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                margin:'5px 10px',
                // backgroundColor:"blue",
            }}>
                <h3 style={{
                    textAlign:'center',
                }}>Tiêu đề</h3>
                <button onClick={()=>setShow(false)} style={{
                    height:'40px'
                }}>Close</button>
            </div>
            <p style={{
                padding:'10px',
                // backgroundColor:'red',
            }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, veritatis voluptatibus? Quas cum id architecto illo dolorem itaque amet placeat facere excepturi unde incidunt, asperiores temporibus nam commodi, corporis praesentium!
            </p>
        </div>
        </>
    }
    </>
}