import React from 'react'

const SkillTag = ({skill}) => {
  return (
    <div className='w-fit px-4 p-1 rounded-xl ring dark:ring-slate-500 ring-slate-400 font-semibold text-md capitalize dark:text-slate-300 text-slate-600'>{skill.name}
    </div>
  )
}

export default SkillTag