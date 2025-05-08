import React from 'react'
import Style from './partsform.module.css'

const Partsform = () => {
  return (
        <div className={`container mt-4 p-3 ${Style.boxborder}`}>
            <h5 className='text-primary'>Add Parts</h5>
            {/* first table */}
            <div className='border p-3 position-relative mt-2'>
                <div className={`${Style.text} position-absolute top-0  translate-middle fw-bold `}>General infromation</div>
                <div className='row mt-2'> 
                    <div className='col-6'> 
                        <div className='row '> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="partNo">part No </label></div>
                            <div className='col-6  '><input type="text" name='partNo' id='partNo' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end' ><label htmlFor="Description">Description </label></div>
                            <div className='col-6  '><input type="text" name='Description' id='Description' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="Unit">Unit </label></div>
                            <div className='col-6  '><input type="text" name='Unit' id='Unit' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end' ><label htmlFor="Serialno">Serial No Required </label></div>
                            <div className='col-6' ><input type="checkbox" name='Serialno' id='Serialno' style={{cursor:'pointer'}} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="ABCType">ABC Type </label></div>
                            <div className='col-6  '><input type="text" name='ABCType' id='ABCType' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="PartType">Part Type</label></div>
                            <div className='col-6  '><input type="text" name='PartType' id='PartType' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="IPCReference">IPC Reference</label></div>
                            <div className='col-6  '><input type="text" name='IPCReference' id='IPCReference' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="ItemTag">Item Tag</label></div>
                            <div className='col-6  '><input type="text" name='ItemTag' id='ItemTag' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="Manufacturer">Manufacturer</label></div>
                            <div className='col-6  '>
                                <select name="Manufacturer" id="Manufacturer" className={`${Style.input}`}>
                                        <option value="">Select</option>
                                        <option value="">Option 1</option>
                                        <option value="">Option 2</option>
                                        <option value="">Option 3</option>
                                </select>
                            </div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="ReceiptDate">Receipt Date</label></div>
                            <div className='col-6  '><input type="date" name='ReceiptDate' id='ReceiptDate' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="ReceiptNo">Receipt No</label></div>
                            <div className='col-6  '><input type="text" name='ReceiptNo' id='ReceiptNo' className={`${Style.input}`} /></div>

                        </div>
                        


                    </div>
                    <div className='col-6'> 
                        <div className='row '> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="ExpiryDate">Expiry Date</label></div>
                            <div className='col-6  '><input type="date" name='ExpiryDate' id='ExpiryDate' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="Category">Category </label></div>
                            <div className='col-6  '><input type="text" name='Category' id='Category' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="Location">Location </label></div>
                            <div className='col-6  '><input type="text" name='Location' id='Location' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="FolioNo">Folio No </label></div>
                            <div className='col-6  '><input type="text" name='FolioNo' id='FolioNo' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="ATAChapter">ATA Chapter </label></div>
                            <div className='col-6  '>
                                <select name="ATAChapter" id="ATAChapter" className={`${Style.input}`}>
                                        <option value="">Select</option>
                                        <option value="">Option 1</option>
                                        <option value="">Option 2</option>
                                        <option value="">Option 3</option>
                                </select>
                            </div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="BinCardNo">Bin Card No </label></div>
                            <div className='col-6  '><input type="text" name='BinCardNo' id='BinCardNo' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="ApproxRate">Approx Rate </label></div>
                            <div className='col-6  '><input type="text" name='ApproxRate' id='ApproxRate' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="Kit">Kit </label></div>
                            <div className='col-6  '><input type="checkbox" name='Kit' id='Kit'  /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="ReleaseNoteNo">Release Note No </label></div>
                            <div className='col-6  '><input type="date" name='ReleaseNoteNo' id='ReleaseNoteNo' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="ReleaseNoteDate">Release Note Date
                            </label></div>
                            <div className='col-6  '><input type="date" name='ReleaseNoteDate' id='ReleaseNoteDate' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end'><label htmlFor="NoofStock">No of Stock
                            </label></div>
                            <div className='col-6  '><input type="number" name='NoofStock' id='NoofStock' className={`${Style.input}`} /></div>

                        </div>

                    </div>
                </div>
            </div>
            {/* second table */}
            <div className='border p-3 position-relative mt-4'>
                <div className={`${Style.text} position-absolute top-0  translate-middle fw-bold `}>General infromation</div>
                <div className='row'>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-4 d-flex justify-content-end'>
                                <label htmlFor="ForCalibration">For Calibration</label>
                            </div>
                            <div className='col-6 d-flex gap-3'>
                                <input type="checkbox" name='ForCalibration' id='ForCalibration' style={{cursor:'pointer'}} />
                                <label >Gro.Equi./Calibration</label>
                            </div>

                        </div>  
                        <div className='row mt-1'>
                            <div className='col-4 d-flex justify-content-end'>
                                <label htmlFor="EquiMaintenance">Equi Maintenance</label>
                            </div>
                            <div className='col-6 d-flex gap-3'>
                                <input type="checkbox" name='EquiMaintenance' id='EquiMaintenance' style={{cursor:'pointer'}} />
                                <label >Condition/Service/Inspection</label>
                            </div>

                        </div> 
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end' ><label htmlFor="ToolType">Tool Type </label></div>
                            <div className='col-6  '><input type="text" name='ToolType' id='ToolType' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end' ><label htmlFor="Range">Range (Specification) </label></div>
                            <div className='col-6  '><input type="text" name='Range' id='Range' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end' ><label htmlFor="MaxUse">Max Use </label></div>
                            <div className='col-6  '><input type="text" name='MaxUse' id='MaxUse' className={`${Style.input}`} /></div>

                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row mt-1 '> 
                            <div className='col-4 d-flex justify-content-end' ><label htmlFor="interval">interval </label></div>
                            <div className='col-6  '><input type="text" name='interval' id='interval' className={`${Style.input}`} /></div>

                        </div>
                        <div className='row mt-1 '> 
                            <div className='col-4 d-flex justify-content-end' ><label htmlFor="CalibrationStandard">Calibration Standard </label></div>
                            <div className='col-6  '><input type="text" name='ToolType' id='ToolType' className={`${Style.input}`} /></div>

                        </div>

                    </div>

                </div>
            </div>   
            {/* third table */}
            <div className='border p-3 position-relative mt-4'>
                <div className={`${Style.text} position-absolute top-0  translate-middle fw-bold `}>General infromation</div>
                <div className='row'>
                    <div className='col-6'>
                    <div className='row'>
                        <div className='col-4 d-flex justify-content-end'>
                                <label htmlFor="ExpiryPeriod">Expiry Period in Months</label>
                        </div>
                        <div className='col-6 '>
                                <input type="text" name='ExpiryPeriod' id='ExpiryPeriod' className={`${Style.input}`}/>
                               
                        </div>

                    </div>  
                    <div className='row mt-1'>
                        <div className='col-4 d-flex justify-content-end'>
                                <label htmlFor="StorageLife">Storage Life in Month</label>
                        </div>
                        <div className='col-6 '>
                                <input type="text" name='StorageLife' id='StorageLife' className={`${Style.input}`}/>
                               
                        </div>

                    </div> 
                    <div className='row mt-1'>
                        <div className='col-4 d-flex justify-content-end'>
                                <label htmlFor="MinLevel">Min Level</label>
                        </div>
                        <div className='col-6 '>
                                <input type="text" name='MinLevel' id='MinLevel' className={`${Style.input}`}/>
                               
                        </div>

                    </div>
                    <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end' ><label htmlFor="ReOrderLevel">Re-Order Level </label></div>
                            <div className='col-6' ><input type="checkbox" name='ReOrderLevel' id='ReOrderLevel' style={{cursor:'pointer'}} /></div>

                    </div>
                    <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end' ><label htmlFor="ValuationReport">Valuation Report </label></div>
                            <div className='col-6' ><input type="checkbox" name='ValuationReport' id='ValuationReport' style={{cursor:'pointer'}} /></div>

                    </div>
                    <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end' ><label htmlFor="AirworthinessCheck">Airworthiness Check </label></div>
                            <div className='col-6' ><input type="checkbox" name='AirworthinessCheck' id='AirworthinessCheck' style={{cursor:'pointer'}} /></div>

                    </div>
                    <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end' ><label htmlFor="PartNouse">Part No in Use </label></div>
                            <div className='col-6' ><input type="checkbox" name='PartNouse' id='PartNouse' style={{cursor:'pointer'}} /></div>

                    </div>
                    <div className='row mt-1'>
                        <div className='col-4 d-flex justify-content-end'>
                                <label htmlFor="Note">Note</label>
                        </div>
                        <div className='col-6 '>
                                <input type="text" name='Note' id='Note' className={`${Style.input}`}/>
                               
                        </div>

                    </div>
                    <div className='row mt-1'>
                        <div className='col-4 d-flex justify-content-end'>
                                <label htmlFor="Makemodel">Make (Model)</label>
                        </div>
                        <div className='col-6 '>
                                <input type="text" name='Makemodel' id='Makemodel' className={`${Style.input}`}/>
                               
                        </div>

                    </div>

                    </div>
                    <div  className='col-6'>
                        <div className='row mt-1'>
                            <div className='col-4 d-flex justify-content-end'>
                                    <label htmlFor="InQuarters">In Quarters</label>
                            </div>
                            <div className='col-6 '>
                                    <input type="text" name='InQuarters' id='InQuarters' className={`${Style.input}`}/>
                                
                            </div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end' ><label htmlFor="ExpiryItem">Expiry Item </label></div>
                            <div className='col-6' ><input type="checkbox" name='ExpiryItem' id='ExpiryItem' style={{cursor:'pointer'}} /></div>

                        </div>
                        <div className='row mt-1'>
                            <div className='col-4 d-flex justify-content-end'>
                                    <label htmlFor="AMMCMM">AMM/CMM Reference</label>
                            </div>
                            <div className='col-6 '>
                                    <input type="text" name='AMMCMM' id='AMMCMM' className={`${Style.input}`}/>
                                
                            </div>

                        </div>
                        <div className='row mt-1'>
                            <div className='col-4 d-flex justify-content-end'>
                                    <label htmlFor="MAXLevel">MAX Level</label>
                            </div>
                            <div className='col-6 '>
                                    <input type="text" name='MAXLevel' id='MAXLevel' className={`${Style.input}`}/>
                                
                            </div>

                        </div>
                        <div className='row mt-1'>
                            <div className='col-4 d-flex justify-content-end'>
                                    <label htmlFor="ReOrdLevel">Re-Ord Level</label>
                            </div>
                            <div className='col-6 '>
                                    <input type="text" name='ReOrdLevel' id='ReOrdLevel' className={`${Style.input}`}/>
                                
                            </div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end' ><label htmlFor="OneTime">One Time Purchase </label></div>
                            <div className='col-6' ><input type="checkbox" name='OneTime' id='OneTime' style={{cursor:'pointer'}} /></div>

                        </div>
                        <div className='row mt-1'> 
                            <div className='col-4 d-flex justify-content-end' ><label htmlFor="StockReport">Show in Stock Report </label></div>
                            <div className='col-6' ><input type="checkbox" name='StockReport' id='StockReport' style={{cursor:'pointer'}} /></div>

                        </div>
                        <div className='row mt-1'>
                            <div className='col-4 d-flex justify-content-end'>
                                    <label htmlFor="useDate">Not in use Date</label>
                            </div>
                            <div className='col-6 '>
                                    <input type="date" name='useDate' id='useDate' className={`${Style.input}`}/>
                                
                            </div>

                        </div>
                    </div>


                </div>
            </div>
            {/* button code */}
            <div className='row p-2 d-flex justify-content-end '>
                <div className='col-2 d-flex gap-2'>
                <input className=" btn-light btn-border rounded px-4 p-1  " type="button" value="Back" />
                <input className=" btn-light btn-border rounded px-4 p-1  " type="submit" value="Save" />
          
                </div>
            </div>

        </div>
  )
}

export default Partsform