import React, {useState} from 'react'

const useSelect = (stateInicial, options) => {
  
  const [state, setstate] = useState(stateInicial)

  const SelectNoticias = () => (
    <select 
      className="browser-default"
      onChange={e => setstate(e.target.value)}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  )

  return [state, SelectNoticias]
}

export default useSelect
