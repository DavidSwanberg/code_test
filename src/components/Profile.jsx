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
      setPicture(response.data.results[0].picture.medium)
    } catch (err) {
      console.error(err)
    }
  }
  
  useEffect(() => {
  makeAPICall()
  }, [])


  console.log('user- ',user)

    return(
        <div className="profile">
            <div className="top-container">
                <img src={picture}/>
                <div id="icons">
                <FontAwesomeIcon icon={["fas", "address-book"]} />
                <FontAwesomeIcon icon={["fas", "envelope"]} />
                <FontAwesomeIcon icon={["fas", "birthday-cake"]} />
                <FontAwesomeIcon icon={["fas", "map"]} />
                <FontAwesomeIcon icon={["fas", "phone-alt"]} />
                <FontAwesomeIcon icon={["fas", "key"]} />
                </div>
            </div>
            <div className="bottom-container">
                <p className="data"></p>
                <p clasName="bio">Hi, I'm {name.first} {name.last} and I live in {location.city}, {location.state}. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas sed sit, aliquam, quam magni cumque consequuntur vel debitis consequatur quod officia exercitationem assumenda eius eum soluta sunt! At, omnis numquam?</p>
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
