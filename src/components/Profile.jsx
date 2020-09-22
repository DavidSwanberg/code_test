import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = () => {
  const [user, setUser] = useState({})
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
      setUser(response.data.results[0])
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
                <img src={picture}/>
                <div id="icons">
                <FontAwesomeIcon icon={["fas", "address-book"]} onClick={()=>setDisplayData(`${location.street.number.toString()} ${location.street.name} ${location.city},${location.state} ${location.country} ${location.postcode}`)}/>
                <FontAwesomeIcon icon={["fas", "envelope"]} onClick={()=>setDisplayData(email)}/>
                <FontAwesomeIcon icon={["fas", "birthday-cake"]} onClick={()=>setDisplayData(convertDate(birthday.date))}/>
                <FontAwesomeIcon icon={["fas", "map"]} onClick={()=>setDisplayData(`${location.coordinates.latitude},${location.coordinates.longitude}`)}/>
                <FontAwesomeIcon icon={["fas", "phone-alt"]} onClick={()=>setDisplayData(phone)}/>
                <FontAwesomeIcon icon={["fas", "key"]} onClick={()=>setDisplayData(`Username:${login.username} Password:${login.password}`)}/>
                </div>
            </div>
            <div className="bottom-container">
                <div className="data">
                    {displayData === null ? <h3>{name.first} {name.last}</h3>:<h3>{displayData}</h3>}
                </div>
                <p className="bio">Hi, I'm {name.first} {name.last} and I live in {location.city}, {location.state}. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas sed sit, aliquam, quam magni cumque consequuntur vel debitis consequatur quod officia exercitationem assumenda eius eum soluta sunt! At, omnis numquam?</p>
            </div>
        </div>
    )
}

export default Profile;
//name
//address
//location
//email
//phone
//birthday
//login
