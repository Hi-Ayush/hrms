import React from 'react';

const DashboardLayout=({children})=>{
    return(
        <div className="dashboard-layout">
            <nav className="side-nav-bar">
                This is nav
            </nav>
         <div className="main-container">
            {children}
            Here are children
            </div>
        </div>
    )
}
export default DashboardLayout;