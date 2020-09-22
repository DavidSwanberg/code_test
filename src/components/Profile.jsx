import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = () => {
  const [name, setName] = useState({})
  const [location, setLocation] = useState({})
  const [email,setEmail] = useState('')
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday]= useState({});
  const [login, setLogin]=useState({});
  const [picture, setPicture]=useState('');
  const [displayData, setDisplayData]=useState(null);

  const makeAPICall = async () => {
    try {
      const response = await axios('https://www.randomuser.me/api')
      setName(response.data.results[0].name)
      setLocation(response.data.results[0].location)
      setEmail(response.data.results[0].email)
      setPhone(response.data.results[0].phone)
      setBirthday(response.data.results[0].dob)
      setLogin(response.data.results[0].login)
      setPicture(response.data.results[0].picture.large)
    } catch (err) {
      console.error(err)
    }
  }
  
  useEffect(() => {
  makeAPICall()
  }, [])


  const convertDate = str =>{
    let arr = str.split('')
     let returnArr=[]
     for(let i=0;i<10;i++){
      if(arr[i]==='T'){
       returnArr.push(' ')
     }else{
      returnArr.push(arr[i])
    }
   }
   return returnArr.join('')
   }

    return(
        <div className="profile">
            <div className="top-container">
    <img className="profile-pic" src={picture} onClick={()=>setDisplayData(`Hi, I'm ${name.first} ${name.last} and I live in ${location.city}, ${location.state}. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas sed sit, aliquam, quam magni cumque consequuntur vel debitis consequatur quod officia exercitationem assumenda eius eum soluta sunt! At, omnis numquam?}`)}/>
                <div id="icons">
    <FontAwesomeIcon className="icon" id="address" icon={["fas", "address-book"]} onClick={()=>setDisplayData(`${location.street.number.toString()} ${location.street.name} ${location.city}, ${location.state} ${location.country} ${location.postcode}`)}/>
                <FontAwesomeIcon className="icon" id="envelope" icon={["fas", "envelope"]} onClick={()=>setDisplayData(email)}/>
                <FontAwesomeIcon className="icon" id="cake"icon={["fas", "birthday-cake"]} onClick={()=>setDisplayData(convertDate(birthday.date))}/>
                <FontAwesomeIcon className="icon" id="map" icon={["fas", "map"]} onClick={()=>setDisplayData(`${location.coordinates.latitude},${location.coordinates.longitude}`)}/>
                <FontAwesomeIcon className="icon" id="phone" icon={["fas", "phone-alt"]} onClick={()=>setDisplayData(phone)}/>
                <FontAwesomeIcon className="icon" id="key" icon={["fas", "key"]} onClick={()=>setDisplayData(`Username:${login.username} Password:${login.password}`)}/>
                </div>
            </div>
            <div className="bottom-container">
                <div className="data">
                    <h3>{name.first} {name.last}</h3>
                </div>
                {displayData === null ?<p className="bio">Hi, I'm {name.first} {name.last} and I live in {location.city}, {location.state}. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas sed sit, aliquam, quam magni cumque consequuntur vel debitis consequatur quod officia exercitationem assumenda eius eum soluta sunt! At, omnis numquam?</p>
                :<p className="bio">{displayData}</p>}
            </div>
        </div>
    )
}

export default Profile;

