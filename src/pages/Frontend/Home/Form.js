import React, { useState } from 'react';


const initialState = {
    image: '',
    name: '',
    email:'',
    date:'',
    time:'',

}



export default function Form() {

    const [state, setState] = useState(initialState)
    const [isPorcessing, setIsPorcessing] = useState(false)


    const handleChange= (e)=>{

setState(s=>({...s,[e.target.name]:e.target.value}))

    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const { name, email, date, time} = state

        name = name.trim()
        email = email.trim()
        

     

        console.log(state)
    
    }

    return (
        <div>
            <section>
                <div className="container mt-5 text-center">
                    <div className="row">
                        <div className="col card border-0 shadow p-lg-5 p-md-3 p-sm-2">
                            <div>

                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3 fw-bold">
                                        <h1>Fill to join</h1>
                                    </div>
                                    <div className="row text-center d-flex justify-content-center rounded-circle">
                                        <div className="col-4 "> 
                                            <label for="image-upload" className="form-control custom-file-upload ">
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

                                                    {!isPorcessing? 'Submit' : 'Submit...'}
                                                </button>
                                            </div>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
