import { async } from '@firebase/util';
import { doc, query, serverTimestamp, setDoc, where } from 'firebase/firestore/lite';
import React, { useEffect, useState } from 'react';
import { firestore } from '../../../Config/Firebase';
import { collection, getDocs } from "firebase/firestore/lite";

const initialState = {
    image: '',
    name: '',
    email:'',
    date:'',
    time:'',

}



export default function Form() {

    const [state, setState] = useState(initialState)
    const [Document, setDocument] = useState({})
    const [isPorcessing, setIsPorcessing] = useState(false)
    const [isLoading, setisLoading] = useState(true)
    const [profile, setProfile] = useState([])
// console.log(Document)
// return
    const handleChange= (e)=>{

setState(s=>({...s,[e.target.name]:e.target.value}))

    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()

        let { name, email, date, time} = state

        name = name.trim()
        email = email.trim()
        if(name.length < 3){
          return  window.notify('Please Enter Name', 'error')
        }
        if(email.length < 3){
            return  window.notify('Please Enter Email', 'error')
        }
        if(!date){
            return  window.notify('Please Enter Date', 'error')
        }
        if(!time){
            return  window.notify('Please Enter Time', 'error')
        }

      let userProfile = {name, email, date, time}

      userProfile.dateCreated = serverTimestamp()
      userProfile.id = Math.random().toString(36).slice(2)
    
      
      
      
      createProfile(userProfile)
    }

    const createProfile = async (userProfile) => {
  setIsPorcessing(true)
        try{
            await setDoc(doc(firestore, "Profile", userProfile.id), userProfile)
            window.notify("Profile Created", "success")
            // alert('created')
        }catch(err){
            console.error(err)
            window.notify("Something went's Wrong", 'error')
        }
        setIsPorcessing(false)
        setState(initialState)
    }

    //  Read Profile 

    const fetchProfile =async () =>{

        let array = []

        const q = query(collection(firestore, "Profile"), //where("Profile", "==", Profile.id)//
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const data = doc.data()
          // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
          array.push(data)
        });
     setDocument(array)

    }

    useEffect(()=>{
        fetchProfile()
    }, [])
    

    return (
        <div>
           

            {/* Profile Created */}
            <section>
                <div className="container mt-5 text-center">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 card border-0 shadow p-lg-5 p-md-3 p-sm-2">
                            <div>

                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3 fw-bold">
                                        <h1>Fill to join</h1>
                                    </div>
                                    <div className="row text-center d-flex justify-content-center rounded-circle">
                                        <div className="col-6 "> 
                                            <label  for="image-upload" className="form-control custom-file-upload ">
                                            <i className="bi bi-cloud-arrow-up-fill fs-4 me-1 mt-3"></i> Choose Image
                                            </label>
                                            <input id="image-upload"   className='form-control' type="file" name="image" accept="image/*" onChange={handleChange}></input>
                                        </div>
                                    </div>
                                    <div className="row my-3">
                                        <div className="col-6">
                                            <input type="text" className='form-control' name='name' placeholder='Enter Name' onChange={handleChange} />
                                        </div>
                                        <div className="col-6">
                                            <input type="email" name='email' className='form-control' placeholder='Enter Email' onChange={handleChange}  />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <input type="date" name='date' className='form-control' onChange={handleChange}/>
                                        </div>
                                        <div className="col-6">
                                            <input type="time" name='time' className='form-control' onChange={handleChange} />
                                        </div>
                                    </div>
                                        <div className="row te mt-4">
                                            <div className="col">
                                                <button className='w-50 btn btn-secondary' disabled={isPorcessing}>

                                                    {!isPorcessing ? 'Submit' : 'Loading...'}
                                                </button>
                                            </div>
                                        </div>
                                </form>
                            </div>
                        </div>

                    {/* Profile Read------------------- */}
             
                
                   
                        <div className="col-lg-6 my-3">
                            {Document.map((profile, i)=>{
                               return <div key={i} className='card border-0 shadow p-lg-4 p-md-3'>
                                <div className="col-12 text-center">
                                  
                                  <img src="" alt="Profile-img" className='img-fluid rounded-circle border p-5 rounded-circle' />
                                </div>
                                <div className="row mt-3">
                                  <div className="col-5">
                                      <b> Name: </b><h6>{profile.name}</h6>
                                  </div>
                                  <div className="col-5">
                                      <b> Email: </b><h6>{profile.email}</h6>
                                  </div>
                                </div>
                                <div className="row mt-3">
                                  <div className="col-5">
                                      <b> Date: </b><h6>{profile.data}</h6>
                                  </div>
                                  <div className="col-5">
                                      <b> Time: </b><h6>{profile.time}</h6>
                                  </div>
                                </div>
                             </div>
                            })}
                        </div>
                    
                
                
           
                    </div>

                </div>
            </section>

            
        </div>
    )
}
