import react from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

export default function Experience(props)
{   
    return(
    <div>
        <div className = 'experience'>
            <img className = 'experience--img' src = {props.imgurl} alt = 'props.experience' />
            <div className = "experience--info">
                
                <div className = 'experience--loc'>
                    <img src = 'images/pin.png' alt = 'pin' className = 'pin' />
                    <h3><span style ={{fontWeight:'100', fontSize:"20px"}}>{props.location}</span></h3>
                    <h3><a href = {props.googlemapslink} >VIEW ON GOOGLE MAPS</a></h3>
                </div>
                     <h1 className = 'experience--title'>{props.title}</h1>

                <div className='experience--date'>
                    <h3>{props.startdate +" till"}</h3>
                    <h3>{props.enddate}</h3>
                </div>

                <p>{props.description}</p>

            </div>

        </div>
        <hr className = "Divider" />
    </div>
    )
}