import React, { useState, useEffect} from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({})
  const [name, setName] = useState({})
  const [location, setLocation] = useState({})
  const [email,setEmail] = useState('')
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday]= useState({});
  const [login, setLogin]=useState({});

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
    } catch (err) {
      console.error(err)
    }
  }
  
  useEffect(() => {
  makeAPICall()
  }, [])


  console.log('user- ',user)

    return(
        <div>
            Profile
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
