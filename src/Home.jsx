import React from "react";

import { link, Outlet } from "react-router-dom";

function Home() {
    
    return(
      
        <React.Fragment>
           
           <div style={{
        backgroundColor: 'green',
        width: '100%',
        height: '700px'
    }}
>
           <nav className="navbar navbar-expand-lg">
                <link to = {"/"} className="Navbar-brand p-5" Home />
                <link to = {"About"} className="p-5" About us />
                <link to = {"Contact"} className="p-5" Contact />
            </nav>

            <Outlet></Outlet>

          </div>

           
        </React.Fragment>

    )

}
 export default Home;