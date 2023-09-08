import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader 
      speed={2}
      width={300}
      height={360}
      viewBox="0 0 300 360"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="42" y="2" rx="0" ry="0" width="215" height="252" /> 
      <rect x="72" y="273" rx="0" ry="0" width="145" height="22" /> 
      <rect x="37" y="321" rx="0" ry="0" width="96" height="21" /> 
      <rect x="155" y="307" rx="33" ry="33" width="116" height="49" />
    </ContentLoader>
  )
  
export default MyLoader
  