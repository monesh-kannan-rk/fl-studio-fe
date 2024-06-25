import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import CommitHeader from '../components/CommitHeader';
import FileCommit from '../components/FileCommit';
import fileData from '../data/api.json'


function Commits() {
    const [allData, setAllData] = useState(fileData)
    const {owner, repository, commitSHA} = useParams();

  return (
    <div className='container'>
        <CommitHeader/>
        {/* <FileCommit/> */}
        {allData && allData.map((data, index) => {
          return <FileCommit key={index} content={data}/>
        })}
    </div>
  )
}

export default Commits