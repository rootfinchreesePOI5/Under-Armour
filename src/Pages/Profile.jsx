import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import flow from '../assets/Images/flow.avif'
import steph from '../assets/Images/steph.avif'
import link from '../assets/Icons/link.svg'
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const {account , setAccount } = useContext(ShopContext)
  const [edit, setEdit] = useState(false);
  const [switching, setswitch] = useState(false);
  const navigate = useNavigate()
  const date = new Date();
  const today = date.getHours();

  const [main , setMain] = useState([])

  const applyfilter = (i) =>{
   i !== 0 ? setMain(account.slice(1 , 2)) :setMain(account.slice(0 ,1))
   console.log(i)
  }
  const applyswitch = () =>{
   switching === false ? setswitch(true) : setswitch(false)
  }

  useEffect(()=>{
    applyfilter()
  },[account])
  return (
    <div className="Profile">

      <p className="profile-title">Your Ua profile</p>
      <div className="profile-container">

        <div className="left-container">
          <div className="left1">
            {
              main.map((item , index) =>  {
                return <div key={index}>
                  {
                    edit === false ? <img  className="pro-pic" src={item.img} alt="" /> : <input type="file" />
                  }
                </div>
              }
              )
            }
          </div>
          <div className="pro-dets">
            {
            main.map((item ,index) => (
              edit === false ?
                <div key={index}>
                  <p>Username:<span>{item.name}</span></p>
                  <p>Emaiil:<span>{item.email}</span></p>
                </div> :
                <div key={index}>
                <input type="text"placeholder="Change userame" />
                <input type="text" placeholder="Change email" />
              </div>
              ))
            }
            <div className="edit">
              <button style={edit === false ? {display: 'block'} : {display: 'none'}} onClick={() => setEdit(true)}>Edit</button>
              <button style={edit === false ? {display: 'none'} : {display: 'block'}} onClick={() => setEdit(false)}>Save</button>
            </div>
            <div className="switch">
              <button onClick={applyswitch}>Switch Account</button>
            </div>
            <div style={switching === false ? {display: 'none'} : {display: 'contents'}} className="myaccounts-dropdown">
              {
                account.map((item , index) =>(
                  <div className="pro" key={index} onClick={() => {applyfilter(index), setswitch(false)}}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="right-container">
          <img src={today > 12 ? steph : flow} alt="" />
          <div className="flow" onClick={() => {navigate('/Curry') , scrollTo(0 , 0)}}>
            <button >shop now</button>
            <img src={link} alt="" />
          </div>
        </div>

      </div>
    </div>
  )

}
export default Profile;


