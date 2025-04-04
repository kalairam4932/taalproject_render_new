import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilArrowThickRight,
  cilPlus
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Flight Log Details',
    to: '/flightLogDetails',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Aircraft Master',

    to: '/aircraft',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Air Frame',
    to: '/airFrame',
    icon: <CIcon icon={cilExternalLink} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Other Masters',
    to: '/',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'License Master',
        to: '/licenseMaster',
      },
      {
        component: CNavItem,
        name: 'Model',
        to: '/masterModel',
      },
      {
        component: CNavItem,
        name: 'Manufacture',
        to: '/manufactureTable',
      },
      {
        component: CNavItem,
        name: 'ATA',
        to: '/ataTable',
      },
      {
        component: CNavItem,
        name: 'Place',
        to: '/place',
      },
      {
        component: CNavItem,
        name: 'City',
        to: '/city',
      },
      {
        component: CNavItem,
        name: 'Primary Model',
        to: '/masterPrimaryModel',
      },
      // {
      //   component: CNavItem,
      //   name: 'Services Master',
      //   to: '/SERVICETABLE',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Assembly Master',
      //   to: '/',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Inspection Master',
      //   to: '/',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Part',
      //   to: '/part',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Owner',
      //   to: '/',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Category',
      //   to: '/',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Pilot',
      //   to: '/',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Co-Pilot',
      //   to: '/',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Aircraft Master',
      //   to: '/aircraft',
      // },
      
    ],
  },
  {
    component: CNavItem,
    name: 'Assembly Inspection ',
    to: '/ais',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Assembly Directive ',
    to: '/ADSTABLE',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'RH Engine ',
    to: '/RHTABLE',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'LH Engine ',
    to: '/LHTABLE',
    icon: <CIcon icon={cilArrowThickRight} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavGroup,
  //   name: 'MPD?ADs/SBs',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'New MPD',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Configure MPD',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Requisition',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Engineering Requisition',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Store Requisition',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Workshop Requisition',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Material In',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Supplier(Against PO)',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Goods Receipts',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Material Out',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Issue',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'WO Return Issue',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Unused Issued Items',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Issue BER Parts',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Purchase Enquiries (RFQ)',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Outright',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Repair / Overhaul',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Rental / Lease',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Purchase Quatations',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Outright',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Repair / Overhaul',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Rental / Lease',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Purchase Orders',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Outright/ EX/ OH/ RE',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Rental / Lease',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Order Follow up',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Purchase Invoices',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Purchase Invoice',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Payment',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Other Charges (Docket)',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Sales Modules',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Enquiry',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Quotation',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Sales Order',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Sales Invoice',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Calibration/Equip Maintenance',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Equipment Calibration',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Calibration Due Report',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Tech Library',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Manual',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Manual Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Manual Revision Report',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Serviceability',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Schedule',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Compliance',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Finding Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Audit Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Schedule Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Compliance Due Report',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Quality Assurance',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Schedule',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Compliance',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Finding Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Audit Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Schedule Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Compliance Due Report',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'MEL/ Snag',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'MEL/Snag Corrective',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'MEL/Snag Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Release of Aircraft under MEL',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'MEL Due Report',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Tech Records',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Flight Log Book',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Log Fuel Oil',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Log Parameter List',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Log Maintenance Activity',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Fight Delay/ Cancellation',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Assembly Removal',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Assembly Installation',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Assembly Service',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Assembly Insepections',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Assembly Directives',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Component Removal',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Component Installation',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Component Service',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Component Inspections',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Component Modifications',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Multi Compliance',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Certificates Renewal',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'HR Module',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Employee Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Service Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Document Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Next to kin Info Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Skill Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Designation Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Document Due Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Training Due Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Designation Salary History',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Employee Training Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Sales History',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Work Order',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CAMO - Work Order',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Engineering Order',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Third Party - Work',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'WO Job',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Reminders',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Pending Order',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pending Payment',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pending to Receipt',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pending to Issue',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'No value item / no Invoice',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'QUARANTINE store stock',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Re-Order Level Items',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Min/Max Level Items',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Expiry Date',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pending Requisition',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Registers',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Receipt against P.O',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Goods Receipt',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Issue',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Purchase Enquiry',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Purchase Quotation',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Purchase Order',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Purchase Invoice',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Other Charge',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Sales Enquiry',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Sales Quotation',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Sales Order',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Sales Invoice',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Plot Log Book',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Crew Log Book',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Flight Log Book',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Fuel and Oil Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Fuel Type Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Removal History',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Installation History',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Compliance History',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Common History',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Electronic Log Book',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Day Log Book',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Component History Card',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Assembly History Card',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Part List',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Work Order Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Directive Issued Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Aircraft Monthly Flying',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Issue to Part Discard',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Requisition Register',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Crew Time Register',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Reports',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Store Balance',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Expiry Store Balance',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Part Order History',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Part Receipt History',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Part Issue History',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Part Bin Card History',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Curdling Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Inspection Kit Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Aircraft Consumption Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Order History',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Stock Utilization Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Bench Check',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Part No. Status',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Payment Details',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Store Transaction with Store',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Store Transaction with Aircraft',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'C of A Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Forecast Due',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Due - Per Period',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Maintenance Advice From QC',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Aircraft Current Status',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Aircraft Daily Status',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Summary Daily Status',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Aging Report For Store Balance',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Inspection Status Report ',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Service Status Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Day Book',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Component Current Status',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Inspection Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modification Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Compliance List',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'GRN Wise Purchase Summary',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Approved Part List',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Approved Vendor List',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Part Purchase Statement',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Canceled Order Item',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Removed Item Store Balance',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Directive Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Maintenance Man Hour',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Issue To Work Order',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Log Parameter',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Consumption Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Inspection Spares Required Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Invoice Charge',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Destination Log Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Directive Status Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Core Unit Due Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Margin Analysis Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Master Time Control list',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'GRO Expense',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Consumable Item List Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Part Consumption List',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Aircraft Specification Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Complied Maintenance Activities ',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Engine Oil Uplift',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Unused Return Part',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Inspection Item Status List',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Part Capitalization',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Monthly Maintenance Report',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Part Wise Component Status',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Analysis',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Valuation Analysis ',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Component Lead Time',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Asset Valuation',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Asset Valuation For Rotables / Tools',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Graph Reports',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Forecasted Demand List',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Monthly Trend List',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'ABC Analysis',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Order Register Graph',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Invoice Register Graph',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tran Status Count ',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tran Status Qty',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Aircraft Flying Hours',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Life History ',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Log Parameter Graph',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Mel/Snag ATA wise',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'MEL/Snag Month Wise',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Aircraft Utilization Graph',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'User Utilities',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Change Part Location/Type/Store',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Change Part Rate',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Change Part Expiry info',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Change Release Note No.',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Change Part Serial No./ Batch No.',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Part No. / Serial No. Status',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Reminder Setting',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Reminder Show',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Change Password',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Copy Directives',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Copy Inspections',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Copy Services',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Maintenance Activity',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Update Min. Stock Level and Re-Order Level',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Update TaskCard AMP Issue/ Rev No.',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'GRO Receipt To Outright',
  //       to: '/',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Admin Utilities',
  //   to: '/',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'User Manager',
  //       to: '/',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Role Manager',
  //       to: '/',
  //     },
  //   ],
  // },
]

export default _nav
