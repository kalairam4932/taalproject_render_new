import React, {useState} from 'react'
import './aircraft.css'
import AircraftStatus from './AircraftStatus';

const AircraftAccordion = () => {

  const [activeTab, setActiveTab] = useState("tab1");


  return (
    <div className="container mt-2 bg-white fw-bold">
      {/* Horizontal Tabs */}
      <ul className="nav nav-tabs d-flex " role="tablist">
        {["Aircraft Status", "Assembly(s)", "Tank(s)", "Feature(s)", "Certificate(s)","Board Info(s)"].map((title, index) => {
          const tabId = `tab${index + 1}`;
          return (
            <li className="nav-item" key={tabId} role="presentation">
              <button
                className={`nav-link ${activeTab === tabId ? "active" : ""}`}
                onClick={() => setActiveTab(tabId)}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Tab Content */}
      <div className="tab-content mt-3">
        {[<AircraftStatus />, "Content for Tab 2", "Content for Tab 3", "Content for Tab 4", "Content for Tab 5", "Content for Tab 6"].map((content, index) => {
          const tabId = `tab${index + 1}`;
          return (
            <div key={tabId} className={`tab-pane fade ${activeTab === tabId ? "show active" : ""}`}>
              <div className="p-3 border rounded ">
                {content}
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default AircraftAccordion