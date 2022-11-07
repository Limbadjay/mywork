import{ useParams } from "react-router-dom"
function Contact(){
    const {mobile,email} = useParams()

    return(
        <div>
            <h1>Contact US</h1>
            <hr/>
            <b>Mobile:</b><br/>
            <b>email:</b>           
        </div>
    )
}
export default Contact