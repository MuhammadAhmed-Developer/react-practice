import React from 'react'

export default function Footer() {

    let year = new Date().getFullYear()
  return (
    <div>
        <section>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col text-center text-white py-1 mb-0">
                          <p className='mb-0'>&copy; {year} All Right Reserved By Muhammad Ahmed</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
