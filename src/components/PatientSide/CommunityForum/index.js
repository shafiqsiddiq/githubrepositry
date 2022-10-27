import React from 'react'
import GenericCommunityForum from '../../../assets/genericComponents/GenericCommunityForum'

const viewportHeight = 150;
const CommunityForum = () => {
  return (
    <div style={{minHeight : `calc(100vh - ${viewportHeight}px`}}>
      <GenericCommunityForum />
    </div>

  )
}

export default CommunityForum