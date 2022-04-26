import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import MoreInfoCard from "./moreInfoCard";

function MoreInfoRadioGroup({handleInfo}) {
  let [info, setInfo] = useState('about')

  return (
    <RadioGroup value={info} onChange={setInfo} className='h-full box-border flex flex-col justify-center gap-3 sm:w-[38%]'>
      <RadioGroup.Option value="about">
        {({ checked }) => (
          <MoreInfoCard category={'About Me'} desc={"Brief description of myself and my future goals"} icon={'about'} type={'about'} checked={checked} handleInfo={handleInfo} currentVal={info}/>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="skills">
        {({ checked }) => (
          <MoreInfoCard category={'Skills'} desc={"Technologies I've worked with"} icon={'skills'} type={'skills'} checked={checked} handleInfo={handleInfo} currentVal={info}/>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="current">
        {({ checked }) => (
          <MoreInfoCard category={'Current Focus'} desc={"What I am currently working on"} icon={'current'} type={'focus'} checked={checked} handleInfo={handleInfo} currentVal={info}/>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  )
}

export default MoreInfoRadioGroup