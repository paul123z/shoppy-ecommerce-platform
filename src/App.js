import React, {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'; 

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';

import {useStateContext} from './contexts/ContextProvider';

import './App.css'
// rafce TAB (ES7+)
const App = () => {
  const {activeMenu} = useStateContext
  // const activeMenu = true; we replaced it with DYNAMIC VALUE ABOVE

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
              {/* CONTROL+LEFT MOUSE CLICK, sends me to the component => Sidebar */}
              <Sidebar/>
            </div>
          ): (
            <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar/>
            </div>
          )}
          {/* if active menu = true, then md:ml-72, otherwise flex-2 */}

          {/* INSTALLED 'Tailwind CSS IntelliSense' extension, WHEN HOVERING OVER CSS I CAN SEE THE STYLE OF THAT CSS */}
          <div className={
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? ' md:ml-72'
            : 'flex-2'}`  
          }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar/>
            </div>
          </div>

          <div>
            <Routes>
              {/* Changing all at once, ALT CLICK CLICK CLICK , 'BACKSPACE {< ctrl+right, right } />' */}

              {/* Dashboard */}
              <Route path='/' element= {<Ecommerce/>} />
              <Route path='/ecommerce' element= {<Ecommerce/>} />
              

              {/* Pages */}
              <Route path='/orders' element= {<Orders/>} />
              <Route path='/employees' element= {<Employees/>} />
              <Route path='/customer' element= {<Customers/>} />
              

              {/* Apps */}
              <Route path='/kanban' element= {<Kanban/>} />
              <Route path='/editor' element= {<Editor/>} />
              <Route path='/calendar' element= {<Calendar/>} />
              <Route path='/color-picker' element= "ColorPicker"/>

              {/* Charts */}
              <Route path='/line' element= {<Line/>} />
              <Route path='/area' element= {<Area/>} />
              <Route path='/bar' element= {<Bar/>} />
              <Route path='/pie' element= {<Pie/>} />
              <Route path='/color-mapping' element= "ColorMapping" />
              <Route path='/pyramid' element= {<Pyramid/>} />
              <Route path='/stacked' element= {<Stacked/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App