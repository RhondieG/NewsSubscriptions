import React from 'react';
import '../../App.css';

export default function AboutUs () {
    return <div class="row">
        <h1 className='aboutUs'>Learn Who We Are</h1>
        <br/>
                    <figure class="figure col-6">
                        <div class="row ">
                            <h2 class=" col-6 namePlate">Rhonda Gilliard</h2>
                            <a href="https://www.linkedin.com/in/rhondagilliard/" target="_blank">
                                <img class="logo" alt="Rhonda-LinkedIn" src="/images/linkedin.png"/> 
                            </a>
                            <a href="https://github.com/RhondieG" target="_blank">
                                <img class="logo" alt="Rhonda-github" src="/images/github.png"/>
                            </a>    
                        </div>
                        <a href="https://ca.slack-edge.com/T0569RDC6-UMLPL6HRU-dfab49b57702-512" data-lightbox="ourTeam">
                        <img class="Pics" src="https://ca.slack-edge.com/T0569RDC6-UMLPL6HRU-dfab49b57702-512"
                            class="figure-img img-fluid rounded" alt="..."/>
                        </a>
                        <figcaption>Builder </figcaption>
                    </figure>
                
                
                    <figure class="figure col-6">
                        <div class="row">
                        <h2 class="col-6 namePlate">Kendra Choice</h2>
                        <a href="https://www.linkedin.com/in/kendra-choice-1ab3b728/" target="_blank">
                            <img class="logo" alt="Kendra-LinkedIn" src="/images/linkedin.png"/>
                        </a>
                        <a href="https://github.com/kendrabrown82" target="_blank">
                            <img class="logo" alt="Kendra-github" src="/images/kendra.jpeg"/>  
                        </a>
                        
                    </div>
                        <figcaption>Scrum Master</figcaption>
                    </figure>
                </div>
                
}