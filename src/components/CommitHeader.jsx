import React from 'react'
import Avatar from '../assets/avatar.png'

function CommitHeader({authorDetails}) {
  return (
    <div className='commit-header'>
        <div className='commit-profile'>
            <div className='commit-profile-image'>
                <img src={Avatar} alt='avatar' className='cpi'/>
            </div>
            <div className='commit-profile-content'>
                <span className='commit-profile-content-header'>{authorDetails?.message || "Remove some wrappers from a previous abstraction (#14142)"}</span>
                <p className='custom-style' style={{color:'#6D727C'}}>Authored by <span className='commit-profile-content-header-author'>{authorDetails?.author?.name || "eseliger"}</span> four days ago</p>
                <p className='custom-style' style={{color:'#32405D'}}>This is body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ipsum massa egestas id pellentesque volutpat maecenas amet.</p>
            </div>
        </div>
        <div className='commit-section custom-style'>
            <p className='d-flex'>Commited by <span className='bot ps-2 pe-2'>{ authorDetails?.committer?.name || "renovate-bot"}</span> three days ago</p>
            <p className='d-flex'>Commit <span className='commit-commit monsterat ps-2' style={{color:"#32405d"}}>{ authorDetails?.oid ||"05f0f517a5125a2bc78cda806329017ccabd059a"}</span></p>
            <p className='d-flex'>Parent <span className='commit-parent monsterat ps-2' style={{color:"#1c7cd6"}}>{authorDetails?.parents?.[0].oid||"ab003b92b05f0f517a5125a2bc78cda806329017"}</span></p>
        </div>
    </div>
  )
}

export default CommitHeader