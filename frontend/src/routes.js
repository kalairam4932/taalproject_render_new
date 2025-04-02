import { element } from 'prop-types'
import React from 'react'
import { Route } from 'react-router-dom'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Custom Navigation

const Aircraft = React.lazy(() => import('./views/aircraft/Aircraft'))
const AircraftDetails = React.lazy(() => import('./views/aircraft/AircraftDetails'))
const AddAircraft = React.lazy(() => import('./views/aircraft/AircraftAccordion'))
const ManufactureTable= React.lazy(() => import('./views/masters/Manufacture'))
const ATATable = React.lazy(() => import('./views/masters/Ata'))
const AddManufacture = React.lazy(() => import('./views/masters/AddManufacture'))
const AddAta = React.lazy(() => import('./views/masters/AddAta'))
const MasterModel = React.lazy(() => import('./views/masters/model/Model'))
const AddModel = React.lazy(() => import('./views/masters/model/AddModel'))
const MasterPrimaryModel = React.lazy(() => import('./views/masters/primaryModel/PrimaryModel'))
const AddPrimaryModel = React.lazy(() => import('./views/masters/primaryModel/AddPrimaryModel'))
const AirFrame = React.lazy(() => import('./views/airFrame/AirFrame'))
const AddAirFrame = React.lazy(() => import('./views/airFrame/AddAirFrame'))
const City = React.lazy(() => import('./views/masters/city/City'))
const AddCity = React.lazy(() => import('./views/masters/city/AddCity'))
const Place = React.lazy(() => import('./views/masters/place/Place'))
const AddPlace = React.lazy(() => import('./views/masters/place/AddPlace'))
const License = React.lazy(() => import('./views/masters/license/ViewLicense'))
const AddLicense = React.lazy(() => import('./views/masters/license/AddLicense'))
const Part = React.lazy(() => import('./views/masters/part/part'))
const FlightLogDetails = React.lazy(() => import('./views/masters/flightLogDetails/FlighLogDetails'))
const FlightLogForm = React.lazy(() => import('./views/masters/flightLogDetails/FlightLogForm'))
const updateairframelink = React.lazy(()=> import('./views/airFrame/Updateairframe'))
const updatemodelmasterlink = React.lazy(()=> import('./views/masters/model/Updatemodeldata'))
const updateata = React.lazy(()=> import('./views/masters/updateata'))
const updateprimary = React.lazy(()=> import('./views/masters/primaryModel/Updateprimarymodel'))
const AISTable = React.lazy(() => import('./views/ais/AISTable'))
const AISForm = React.lazy(() => import('./views/ais/AISForm'))
const Updatelicense = React.lazy(() => import('./views/masters/license/Updatelicense'))
const updatemanufacture = React.lazy(() => import('./views/masters/updatemanufacture'))
const updateplaces = React.lazy(() => import('./views/masters/place/updateplace'))
const updatecity = React.lazy(() => import('./views/masters/city/updatecity'))
const dummyaircraft = React.lazy(() => import('./views/aircraft/dummyaircraft'))
//RH ENGINE ROUTER 
const RHENGINE = React.lazy(() => import('./views/RH/RHform'))
const RHTABLE = React.lazy(() => import('./views/RH/RHtable'))
const RHUPDATE = React.lazy(() => import('./views/RH/RHupdate'))
//LH ENGINE ROUTER
const LHENGINE = React.lazy(()=> import('./views/LH/LHform'))
const LHTABLE  = React.lazy(()=>import('./views/LH/LHtable'))
const LHUPDATE  = React.lazy(()=>import('./views/LH/LHupdate'))



// MASTER PAGES 
// 1 .services master
const SERVICEFORM  = React.lazy(()=>import('./views/masters/servicesmaster/Servicesform'))
const SERVICETABLE  = React.lazy(()=>import('./views/masters/servicesmaster/ServicesTable'))
const SERVICEUPDATE  = React.lazy(()=>import('./views/masters/servicesmaster/ServicesUpdate'))


//ASSEMBLE DIRECTIVE STATUS
const ADSFORM  = React.lazy(()=>import('./views/ads/AdsForm'))
const ADSTABLE  = React.lazy(()=>import('./views/ads/AdsTable'))



// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tabs', name: 'Tabs', element: Tabs },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },

  // Customs Path 

  { path: '/aircraft', name: 'Aircraft', element: Aircraft },
  { path: '/aircraftdetails', name: 'AircraftDetails', element: AircraftDetails },
  { path: '/addaircraft', name: 'AddAircraft', element: AddAircraft },
  { path: '/manufactureTable', name: 'manufactureTable', element: ManufactureTable },
  { path: '/ataTable', name: 'ataTable', element: ATATable },
  { path: '/addManufacture', name: 'AddManufacture', element: AddManufacture },
  { path: '/addAta', name: 'AddAta', element: AddAta},
  { path: '/masterModel', name: 'Master Model', element: MasterModel},
  { path: '/addModel', name: 'Add Model', element: AddModel},
  { path: '/masterPrimaryModel', name: 'Master Primary Model', element: MasterPrimaryModel},
  { path: '/addPrimaryModel', name: 'Add Primary Model', element: AddPrimaryModel},
  { path: '/airFrame', name: 'AirFrame', element: AirFrame},
  { path: '/addAirFrame', name: 'Add AirFrame', element: AddAirFrame},
  { path: '/city', name: 'City', element: City},
  { path: '/addCity', name: 'Add City', element: AddCity},
  { path: '/place', name: 'Place', element: Place},
  { path: '/addPlace', name: 'Add Place', element: AddPlace},
  { path: '/licenseMaster', name: 'license Master', element: License},
  { path: '/addLicense', name: 'Add License', element: AddLicense},
  { path: '/part', name: 'Part', element: Part},
  { path: '/flightLogDetails', name: 'Flight Log Details', element: FlightLogDetails},
  { path: '/flightLogForm', name: 'Flight Log Form', element: FlightLogForm },
  { path: '/editFlightLogForm/:id', name: 'Edit Flight Log Form', element: FlightLogForm },

  {path: '/updateairframe/:id' , name : 'Updata air frame' ,element : updateairframelink},
  {path: '/updatemodel/:id' , name : 'updatemodel' ,element : updatemodelmasterlink},

  { path: '/updateata/:id' , name : 'updateata' ,element : updateata},
  { path: '/updateprimary/:id' , name : 'updateprimary' ,element : updateprimary},
  { path: '/ais', name:'AIS Table', element: AISTable},
  { path:'/aisForm', name:'AIS Form', element :AISForm},
  { path: '/editAIS/:id', name: 'Edit AIS Table', element: AISForm},


  // license routers
  {path : '/Updatelicense/:id', name: Updatelicense, element : Updatelicense},
  {path : '/updatemanufacture/:id', name: updatemanufacture , element : updatemanufacture},
  {path : '/updateplaces/:id', name: updateplaces , element : updateplaces},
  {path : '/updatecity/:id', name: updatecity , element : updatecity},
  {path : '/dummyaircraft', name: dummyaircraft , element : dummyaircraft},


  //RH router
  {path : '/RHENGINE', name: RHENGINE , element : RHENGINE},
  {path : '/RHTABLE', name: RHTABLE , element : RHTABLE},
  {path : '/RHUPDATE/:id', name: RHUPDATE , element : RHUPDATE},

  // LH ENGINE ROUTER
  {path : '/LHENGINE',name:LHENGINE, element :LHENGINE },
  {path : '/LHTABLE',name:LHTABLE, element :LHTABLE },
  {path : '/LHUPDATE/:id',name:LHUPDATE, element :LHUPDATE },

  //master paths
  {path : '/SERVICEFORM',name:SERVICEFORM, element :SERVICEFORM },
  {path : '/SERVICETABLE',name:SERVICETABLE, element :SERVICETABLE },
  {path : '/SERVICEUPDATE',name:SERVICEUPDATE, element :SERVICEUPDATE },

  //ads
  {path : '/ADSFORM',name:ADSFORM, element :ADSFORM },
  {path : '/ADSTABLE',name:ADSTABLE, element :ADSTABLE },


  
  
  
]

export default routes
