import './KitchenDashboard.css'


function kitchenDashboard(){
   return(
        <div className="kitchen-page">
              <div className="kitchen-navbar">
                  <div className="hamburger-icon">
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="kitchen-title"> Astha-Care </div>
                  <button className="back-button">Back</button>
                  </div>
              <div className="kitchen-body">
                 <div className="kitchen-sidebar">
                    
               <ul className='sidebar-menu'>
                   <li>Menu</li>
                   <li>Health</li>
               </ul>

                 </div>
                 <div className="kitchen-main">Main Content</div>
              </div>
        </div>


   )


}
 export default kitchenDashboard