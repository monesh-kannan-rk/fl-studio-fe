import React, { useState } from 'react'
import Down from '../assets/down.svg'
import Right from '../assets/right.svg'
import TableData from './TableData'


function FileCommit({content}) {
    const [showFile, setShowFile] = useState(true)
    const handleFileClick = (e) => {
        // e.preventDefault();
        setShowFile(!showFile)
        chevIcon()
    }
    const chevIcon = () => {
        return showFile ? Down : Right
    }
  return (
    <>
        <div>
            <div className='' data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample" onClick={handleFileClick}>
                <img src={chevIcon()} alt='down'/>
                <a className="">
                    enterprise/internal/first/path/first_file.go
                </a>
            </div>
            <div className="collapse show code-table" id="collapseExample">
                {/* card card-body */}
                {content?.hunks && content?.hunks.map((data, index) => {
                    return <TableData content={data} key={index}/>
                })}
                
            </div>
        </div>
        <div className=""></div>
    </>
  )
}

export default FileCommit