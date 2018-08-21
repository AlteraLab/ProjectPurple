import React from 'react';
import './SfPipe.css';
import { MdLocalFlorist } from 'react-icons/lib/md';

const SfPipe = ({ portIndex, onChange, pipe, pipeIndex }) => {
    let cnt= 0;
    return (
        <div className="ml-3 mr-3 mt-3">
            <div className="row StartFarmingModal-justify mb-0">
                <div className="StartFarmingModal-tline"></div>
                <div className="StartFarmingModal-pipe">
                    {
                        pipe.map(
                            (port) => <SfPort index={cnt} key={cnt} 
                            onChange={onChange} checked={port.toJS().status} 
                            value={pipeIndex}
                            name={cnt++}
                            />
                        )
                    }
                </div>
                <div className="StartFarmingModal-bline"></div>
            </div>
            <div className="row StartFarmingModal-justify mb-0">
                <div className="row StartFarmingModal-index mb-1">
                    {
                        pipe.map(
                            (index) => <SfCount index={portIndex} key={portIndex++} />
                        )
                    }
                </div>
            </div>
        </div>
    )
};

const SfPort = ({ index, onChange, checked, value, name }) => {
    let isCheck=""
    if(checked) isCheck="checked"
    return (
        <label id="myCheckbox">
            <input type="checkbox" name={index} checked={isCheck} onChange={onChange} 
            value={value} name={name}/>
            <span><span id="nopadding">
                {checked && <MdLocalFlorist size={20}/>}
            </span></span>
        </label>
    )
}

const SfCount = ({ index }) =>
    <div className="StartFarmingModal-count">
        <span className="text-muted smaller size-8" id="nanum-gothic">{index}</span>
    </div>

export default SfPipe;