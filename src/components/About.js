import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">
                  <img className="profile-pic" src="images/profile.jpg" alt="" />
               </div>

               <div className="nine columns main-col">

                  <h2>Om Kristian</h2>
                  <p>
                     Har en mastergrad i informatikk fra NTNU med spesialisering i kunstig intelligens.<br />
                  </p>
                  <p>
                     Fullstackutvikler med bred erfaring fra blant annet java, python og c#, samt Angular og React.
                     Jobber gjerne med alle lag i stacken; frontend, backend, men også infrastruktur og jobber gjerne med features fra konsept til kjørende løsning.
                  <br /> <br />

                  Kristian liker godt å sette seg inn i nye spennende teknologier og verktøy, han rekker gjerne opp hånden dersom det kreves at noe nytt læres eller utforskes for at teamet skal lykkes.
                  <br></br>
                  <br></br>

                  Han opptatt av- og har erfaring i å jobbe tett sammen med foretningen for å utvikle løsninger som gir verdi for han kunder. I den forbindelse har Kristian erfaring med å jobbe brukersentrert i prosjekter med mye endring.
                  Kristian er opptatt av å levere verdi for sine kunder. Han har fokus på å levere fra seg vedlikeholdbare løsninger som minimerer løpende kostnader og som passer inn hos kundens eksisterende infrastruktur og portefølje.
                  </p>

                  <div className="row">

                     <div className="columns contact-details">

                        <h2>Kontaktinformasjon</h2>
                        <p className="address">
                           <span>Kristian Ekle</span>
                           <br></br>
                           <span>
                              Oslo, Norge
                           </span>
                           <br></br>
                           <span>kristian.ekle@gmail.com</span>
                           <br></br>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}