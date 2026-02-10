import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'

function Workspace() {
  return (
    <div className="space-y-8">
      <WelcomeBanner />
      <CourseList />
    </div>
  )
}

export default Workspace
