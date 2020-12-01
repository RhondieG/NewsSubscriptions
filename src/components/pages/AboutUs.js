import React from 'react';
// import '../../App.css';

export default function AboutUs() {
    return <div class="links">
        <center><h1 className='aboutUs'>Learn Who We Are</h1></center>
        <br />

        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <img className="img-fluid" alt="Rhonda-LinkedIn" src="/images/me.jpg" />
                </div>
                <div className="col-sm-6">
                    <h3>Builder</h3>
                    <a className="btn btn-block btn-dark" href="https://github.com/RhondieG" rel="noreferrer" target="_blank">
                       Github
                    </a>
                    <a className="btn btn-block btn-dark" href="https://www.linkedin.com/in/rhondagilliard/" rel="noreferrer" target="_blank">
                       Linked-In
                    </a>
                </div>
                
            </div>

            <div class="row mt-3">
                <div class="col-sm-6">
                    <img className="img-fluid" alt="Kendra-github" src="/images/kendra.jpeg" />
                    
                </div>
                <div className="col-sm-6">
                <h2>Scrum Master</h2>
                <a className="btn btn-block btn-dark" rel="noreferrer" href="https://github.com/kendrabrown82" target="_blank">
                        Github
                    </a>
                    <a className="btn btn-block btn-dark" rel="noreferrer" href="https://www.linkedin.com/in/kendra-choice-1ab3b728/" target="_blank">
                        Linked-In
                    </a>
                </div>
               
            </div>
        </div>
    </div>


}