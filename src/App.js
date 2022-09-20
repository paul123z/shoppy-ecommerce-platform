import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'; 

// rafce TAB (ES7+)
const App = () => {
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
        <div className ="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
            <TooltipComponent content ="Settings" position ="Top">
              <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{background:'blue',
              borderRadius: '50%'}}>
                <FiSettings />
              </button>
            </TooltipComponent>
            {/* if active menu = true, then show SIDEBAR, otherwise DONT SHOW SIDEBAR
            
            w-0 means WIDTH 0

            dark: etc... means settings on DARK MODE
            */}
          </div>
          {activeMenu ?( 
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
            </div>
          ): (
            <div className="w-0 dark:bg-secondary-dark-bg">
              Sidebar
            </div>
          )}
          {/* if active menu = true, then md:ml-72, otherwise flex-2 */}

          {/* INSTALLED 'Tailwind CSS IntelliSense' extension, WHEN HOVERING OVER CSS I CAN SEE THE STYLE OF THAT CSS */}
          <div className={
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? ' md:ml-72'
            : 'flex-2'}`  
          }>
            <div className="fixed"></div>
          </div>

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App