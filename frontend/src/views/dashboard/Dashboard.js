import React from 'react'
import classNames from 'classnames'
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import "../css/dashbord.css"
import { FaEye } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoIosAlert } from "react-icons/io";
import { BsFuelPumpFill } from "react-icons/bs";
import { LuPlaneLanding } from "react-icons/lu";
import { TbHours12 } from "react-icons/tb";

import { SiFueler } from "react-icons/si";
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { base_url } from '../../../constant/url';
import { AppHeader } from '../../components/index'


const Dashboard = () => {




  const{data:flightlogdata,isLoading} = useQuery({
      queryKey:["flightlogkeys"],
      queryFn: async()=>{
        const response = await axios.get(`${base_url}/api/flightlog/Getflightlogs`)
        console.log(response.data);
        return response.data

      }

  })


  const{data:asidata,isLoading:asiloading} = useQuery({
    queryKey:["asidatakey"],
    queryFn: async()=>{
      const response = await axios.get(`${base_url}/api/assembly/getAssembly`)
      return response.data

    }

})
console.log("datas",asidata)


const currentDate = new Date();

const MBT = [];
const MC = [];
const CFR = [];

const filteredData = asidata?.filter((item) => {
  const dueDate = new Date(item.airframeRemaining);
  const diffDays = Math.ceil((dueDate - currentDate)/ (1000 * 60 * 60 * 24)); 
  
  

  if (diffDays < 100) {
    const description = item.description.toLowerCase(); 
    if (description.includes("mbt")) {
      MBT.push(item);
    } else if (description.includes("mc")) {
      MC.push(item);
    } else if (description.includes("cfr")) {
      CFR.push(item);
    }
    return true;
  }
  return false;
});

// console.log("MBT Data:", MBT);
// console.log("MC Data:", MC);
// console.log("CFR Data:", CFR);


  return (
    <>                    
    
               
                
                
                <div className='row' >

    
                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card ">
                            <div className="card border-0 mb-4  p-5 fristcard">
                              <div className="card-body text-center">
                                <h6 className="mb-2 text-dark font-weight-normal"> RVSN - Height Keeping
                                </h6>
                                <h5 className="mb-4 text-dark font-weight-bold"> ( Due &lt; 100 Hrs )</h5>
                                <div className="px-4 d-flex align-items-center">
                                  <svg width="0" height="0">
                                    <defs>
                                      <linearGradient id="progress-order">
                                        <stop offset="0%" stopColor="#1579ff"/>
                                        <stop offset="100%" stopColor="#7922e5"/>
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  
                                    <CircularProgressbarWithChildren className="progress-order" value={85}
                                        
                                    
                                    >
                                      <div className='mt-2'>
                                      <FaEye className='FaEye'/>
                                        
                                      </div>
                                    </CircularProgressbarWithChildren>
                                  
                                </div>
                                <p className="mt-4 mb-0">Remaining</p>
                                <h5 className="mb-0 font-weight-bold mt-2 text-dark">85 Hours</h5>
                              </div>
                            </div>
                          </div>


                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card border-0 mb-4 p-5 fristcard">
                              <div className="card-body text-center">
                                <h6 className="mb-2 text-dark font-weight-normal">LH and RH Main Landing</h6>
                                <h5 className="mb-4 text-dark font-weight-bold"> ( Due &lt; 100 Hours )</h5>
                                <div className="px-4 d-flex align-items-center">
                                  <svg width="0" height="0">
                                    <defs>
                                    <linearGradient id="progress-visitors" x1="0%" y1="0%" x2="100%" y2="0%">
                                          <stop offset="0%" stopColor="#b4ec51"/>
                                          <stop offset="100%" stopColor="#429321"/>
                                        </linearGradient>
                                    </defs>
                                  </svg>
                                  
                                  <CircularProgressbarWithChildren   className="progress-order"
                                    value={50}
                                    styles={{

                                      path: { 
                                        stroke: "url(#progress-visitors)", // Apply gradient
                                        // strokeWidth: 4 // Reduce border thickness
                                      }, 
                                      trail: { 
                                        stroke: "#e0e0e0",
                                        // strokeWidth: 4 // Reduce trail thickness
                                      }
                                    }}>
                                      <div className='mt-2' >
                                      
                                      <LuPlaneLanding className='FaUserCircle' />
                                      </div>
                                    </CircularProgressbarWithChildren>
                                  
                                </div>
                                <p className="mt-4 mb-0">Remaining</p>
                                <h5 className="mb-0 font-weight-bold mt-2 text-dark">50 Hours</h5>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card border-0 mb-4 p-5 fristcard">
                              <div className="card-body text-center">
                                <h6 className="mb-2 text-dark font-weight-normal"> Engine operating hours</h6>
                                <h5 className="mb-4 text-dark font-weight-bold"> ( Due &lt; 100 Hours)</h5>
                                <div className="px-4 d-flex align-items-center">
                                  <svg width="0" height="0">
                                    <defs>
                                    <linearGradient id="progress-impressions" x1="0%" y1="0%" x2="100%" y2="0%">
                                          <stop offset="0%" stopColor="#fad961"/>
                                          <stop offset="100%" stopColor="#f76b1c"/>
                                    </linearGradient>
                                    </defs>
                                  </svg>
                                  
                                  <CircularProgressbarWithChildren
                                    className="progress-order"
                                    value={25}
                                    styles={{
                                      path: { stroke: "url(#progress-impressions)" }, // Apply gradient
                                      trail: { stroke: "#e0e0e0" }, // Change background color
                                    }}
                                  >
                                    <div className='mt-2'>
                                    {/* <IoIosAlert  className='IoIosAlert'/> */}
                                    <TbHours12  className='IoIosAlert'/>
                                    </div>
                                  </CircularProgressbarWithChildren>

                                  
                                </div>
                                <p className="mt-4 mb-0">Remaining</p>
                                <h5 className="mb-0 font-weight-bold mt-2 text-dark">25 Hours</h5>
                              </div>
                            </div>
                          </div>

                          </div>


                          <div className='row'>

                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card border-0 mb-4 p-5 fristcard" >
                              <div className="card-body text-center">
                                <h6 className="mb-2 text-dark font-weight-normal">Fuel MBT Test</h6>
                                <h5 className="mb-4 text-dark font-weight-bold">( Due &lt; 100 Days )</h5>
                                <div className="px-4 d-flex align-items-center">
                                <svg width="0" height="0">
                                    <defs>
                                      <linearGradient id="progress-order">
                                        <stop offset="0%" stopColor="#1579ff"/>
                                        <stop offset="100%" stopColor="#7922e5"/>
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  
                                    <CircularProgressbarWithChildren className="progress-order" value={65}
                                        
                                    
                                    >
                                      <div className='mt-2'>
                                     
                                      <BsFuelPumpFill className='FaUserCircle '/>
                                        
                                      </div>
                                    </CircularProgressbarWithChildren>
                                  
                                  
                                </div>
                                <p className="mt-4 mb-0">Remaining</p>
                                
                                <h5 className="mb-0 font-weight-bold mt-2 text-dark">{MBT.length}</h5>
                              </div>
                            </div>

                            
                          </div>

                          {/* second card */}
                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card border-0 mb-4 p-5 fristcard">
                              <div className="card-body text-center">
                                <h6 className="mb-2 text-dark font-weight-normal">Fuel MC </h6>
                                <h5 className="mb-4 text-dark font-weight-bold"> ( Due &lt; 100 Days )</h5>
                                <div className="px-4 d-flex align-items-center">
                                <svg width="0" height="0">
                                    <defs>
                                    <linearGradient id="progress-visitors" x1="0%" y1="0%" x2="100%" y2="0%">
                                          <stop offset="0%" stopColor="#b4ec51"/>
                                          <stop offset="100%" stopColor="#429321"/>
                                        </linearGradient>
                                    </defs>
                                  </svg>
                                  
                                  <CircularProgressbarWithChildren   className="progress-order"
                                    value={35}
                                    styles={{

                                      path: { 
                                        stroke: "url(#progress-visitors)", // Apply gradient
                                        // strokeWidth: 4 // Reduce border thickness
                                      }, 
                                      trail: { 
                                        stroke: "#e0e0e0",
                                        // strokeWidth: 4 // Reduce trail thickness
                                      }
                                    }}>
                                      <div className='mt-2' >
                                      
                                      <SiFueler className='FaUserCircle'/>
                                      </div>
                                    </CircularProgressbarWithChildren>
                                  
                                </div>
                                <p className="mt-4 mb-0">Remaining</p>
                                <h5 className="mb-0 font-weight-bold mt-2 text-dark">{MC.length}</h5>
                              </div>
                            </div>
                          </div>
                          

                          {/* third card */}
                          <div className="col-xl-4 col-lg-6 col-sm-6 grid-margin stretch-card">
                            <div className="card border-0 mb-4 p-5 fristcard">
                              <div className="card-body text-center">
                                <h6 className="mb-2 text-dark font-weight-normal">List of Required 14 CFR</h6>
                                <h5 className="mb-4 text-dark font-weight-bold">( Due &lt; 100 Days )</h5>
                                <div className="px-4 d-flex align-items-center">
                                  <svg width="0" height="0">
                                    <defs>
                                    <linearGradient id="progress-impressions" x1="0%" y1="0%" x2="100%" y2="0%">
                                          <stop offset="0%" stopColor="#fad961"/>
                                          <stop offset="100%" stopColor="#f76b1c"/>
                                    </linearGradient>
                                    </defs>
                                  </svg>
                                  
                                  <CircularProgressbarWithChildren
                                    className="progress-order"
                                    value={15}
                                    styles={{
                                      path: { stroke: "url(#progress-impressions)" }, // Apply gradient
                                      trail: { stroke: "#e0e0e0" }, // Change background color
                                    }}
                                  >
                                    <div className='mt-2'>
                                    <IoIosAlert  className='IoIosAlert'/>
                                    </div>
                                  </CircularProgressbarWithChildren>
                                  
                                </div>
                                <p className="mt-4 mb-0">Remaining</p>
                                <h5 className="mb-0 font-weight-bold mt-2 text-dark">{CFR.length}</h5>
                              </div>
                            </div>
                          </div>
                          

                          </div>
      {/* <WidgetsDropdown className="mb-4" />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-body-secondary">January - July 2023</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
            {progressExample.map((item, index, items) => (
              <CCol
                className={classNames({
                  'd-none d-xl-block': index + 1 === items.length,
                })}
                key={index}
              >
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">
                  {item.value} ({item.percent}%)
                </div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>
      <WidgetsBrand className="mb-4" withCharts /> */}
      <CRow className='px-3'>
        <CCol xs>
          <CCard className="mb-4 ">
            <CCardHeader>Flight Log Details</CCardHeader>
            <CCardBody>


              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      {/* <CIcon icon={cilPeople} /> */}
                      Log No
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">AirBorne Time</CTableHeaderCell>

                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Date
                    </CTableHeaderCell>

                    <CTableHeaderCell className="bg-body-tertiary">Departure</CTableHeaderCell>
                    {/* <CTableHeaderCell className="bg-body-tertiary text-center">
                      Payment Method
                    </CTableHeaderCell> */}
                    <CTableHeaderCell className="bg-body-tertiary">Arrival</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Cycle</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Final Hours</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {flightlogdata?.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        {/* <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} /> */}
                        <div>{item.Logno.first}</div>
                      </CTableDataCell>

                      <CTableDataCell>
                        <div >{item.HOBBS.airborntime}</div>
                        {/* 
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div> */}
                      </CTableDataCell>
                      
                      
                      <CTableDataCell className="text-center">
                        {/* <CIcon size="xl" icon={item.country.flag} title={item.country.name} /> */}
                        <div>{item.date}</div>
                      </CTableDataCell>

                      <CTableDataCell>
                        {/* <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.usage.value}%</div>
                          <div className="ms-3">
                            <small className="text-body-secondary">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} /> */}
                            <div className="small text-body-secondary text-nowrap">{item.departure.place}</div>
                            <div className="fw-semibold text-nowrap">{item.departure.time}</div>
                      </CTableDataCell>
                      
                      <CTableDataCell>
                        <div className="small text-body-secondary text-nowrap">{item.arrival.place}</div>
                        <div className="fw-semibold text-nowrap">{item.arrival.time}</div>
                      </CTableDataCell>

                      <CTableDataCell >
                              <td >
                                {Array.isArray(item.engineperiod)
                                    ? item.engineperiod.map((engine, idx) => (
                                        <span key={idx}>{engine.cycle || "N/A"} </span>
                                    ))
                                    : item.engineperiod?.cycle || "N/A"
                                }
                            </td>
                      </CTableDataCell>

                      <CTableDataCell >
                            <td>
                                {Array.isArray(item.airconditionperiod)
                                    ? item.airconditionperiod.map((engine, idx) => (
                                        <span key={idx}>{engine.finalhours || "N/A"} </span>
                                    ))
                                    : item.engineperiod?.finalhours || "N/A"
                                }
                            </td>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
