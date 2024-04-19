import React from 'react'
import { hexToHsl, hexToRgb } from '../helper';

export default function ColourItem({ colour }) {
  const {color: name, hex} = colour;
  const hslVal = hexToHsl(hex);

  const getRgbVal = () => {
    const rgbVal = hexToRgb(hex);
    return `${rgbVal.r}, ${rgbVal.g}, ${rgbVal.b}`
  }
  return (
    <tr key={hex} className='colour-item'>
        <td style={{backgroundColor: hex}}></td>
        <td>{name}</td>
        <td>{hex}</td>
        <td>{getRgbVal()}</td>
        <td>{hslVal}</td>
    </tr>
  )
}
