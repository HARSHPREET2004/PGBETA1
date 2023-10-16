import React from 'react'

function Pyq() {
    return (
        <>
            <div className="pyqBody">
                <div className="pyqTopbar">
                    <div className="TbarCont">
                        <div className="subject">SUBJECTS</div>
                        <div className="MinMaj">
                            <button className='minor'>Minor</button>
                            <button className='major'>Major</button>
                        </div>
                        <div className="choice">
                            <select name="branch" id="branch">
                                <option value="ECE" >ECE</option>
                                <option value="ECE" >IT</option>
                                <option value="ECE" >CSE</option>
                                <option value="ECE" >EEE</option>
                                <option value="ECE" >BT</option>
                            </select>
                            <select name="semster" id="sem">
                                <option value="SEM-1" >SEM-1</option>
                                <option value="SEM-2" >SEM-2</option>
                                <option value="SEM-3" >SEM-3</option>
                                <option value="SEM-4" >SEM-4</option>
                                <option value="SEM-5" >SEM-5</option>
                                <option value="SEM-6" >SEM-6</option>
                                <option value="SEM-7" >SEM-7</option>
                                <option value="SEM-8" >SEM-8</option>

                            </select>
                        </div>
                        <div className="year">YEAR</div>
                    </div>
                </div>
                <hr/>
                <div className="pyqLeftbar">
                    Hello
                </div>
                <div className="pyqRightbar">
                    {/* RIGHTBAR */}
                </div>
            </div>
        </>
    );
}

export default Pyq