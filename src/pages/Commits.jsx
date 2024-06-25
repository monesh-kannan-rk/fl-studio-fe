import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import CommitHeader from '../components/CommitHeader';
import FileCommit from '../components/FileCommit';
import fileData from '../data/api.json'


function Commits() {
    const [allData, setAllData] = useState([])
    const [authorDetails, setAuthorDetails] = useState({})
    const {owner, repository, commitSHA} = useParams();

    const getCommiturl = `http://localhost:5000/repositories/${owner}/${repository}/commits/${commitSHA}`
    const getCommitDiff = `http://localhost:5000/repositories/${owner}/${repository}/commits/${commitSHA}/diff`

    const fetchData = async () => {
      try{
        const autorDetail = await fetch(getCommiturl)
        const diffDetail = await fetch(getCommitDiff)
        const authorData = await autorDetail.json()
        const commitData = await diffDetail.json()
        console.log({authorData, commitData});
        setAllData([commitData])
        setAuthorDetails(authorData)
      }catch(e){
        console.log(e)
        setAllData(fileData)
        setAuthorDetails({})
      }
    }

    useEffect(() => {
      fetchData()
      // console.log(allData);
    },[])

  return (
    <div className='container'>
        <CommitHeader authorDetails = {authorDetails}/>
        {/* <FileCommit/> */}
        {allData && allData.map((data, index) => {
          return <FileCommit key={index} content={data}/>
        })}
    </div>
  )
}

export default Commits