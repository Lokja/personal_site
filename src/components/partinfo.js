import React, { Component } from 'react'
import cpu_pic from '../assets/images/4690k.jpg'
import gpu_pic from '../assets/images/970.jpg'
import case_pic from '../assets/images/define_R5.jpeg'
import psu_pic from '../assets/images/psu.jpg'
import mb_pic from '../assets/images/motherboard.jpg'
import cooler_pic from '../assets/images/noctua.jpg'
import ram_pic from '../assets/images/ram.jpg'
import ssd1_pic from '../assets/images/ssd1.jpg'
import ssd2_pic from '../assets/images/ssd2.jpg'
import hdd_pic from '../assets/images/hdd.jpg'

const INFO = {
  cpu: {
    name: 'CPU',
    info: 'Intel Core-i5 4690K Devil\'s Canyon overclocked at 4.5GHz',
    pic: cpu_pic
  },
  psu: {
    name: 'Power Supply',
    info: 'Corsair - CXM 650W 80+ Bronze Certified Semi-Modular ATX PSU',
    pic: psu_pic
  },
  gpu: {
    name: 'Graphics Card',
    info: 'Zotac nVidia GeForce GTX 970',
    pic: gpu_pic
  },
  motherboard: {
    name: 'Motherboard',
    info: 'ASRock - Z97 Anniversary ATX LGA1150 Motherboard',
    pic: mb_pic
  },
  cooler: {
    name: 'CPU Cooler',
    info: 'Noctua - NH-D14 65.0 CFM CPU Cooler',
    pic: cooler_pic
  },
  ram: {
    name: 'Memory',
    info: 'Kingston - HyperX Fury Black 16GB (2 x 8GB) DDR3-1866 Memory',
    pic: ram_pic
  },
  ssd1: {
    name: '120GB SSD',
    info: 'Samsung - 850 EVO-Series 120GB 2.5" Solid State Drive - OS and applications',
    pic: ssd1_pic
  },
  ssd2: {
    name: '500GB SSD',
    info: 'Samsung - 850 Pro Series 512GB 2.5" Solid State Drive - Games',
    pic: ssd2_pic
  },
  hdd: {
    name: 'Hard Drive',
    info: 'Western Digital - Caviar Blue 1TB 3.5" 7200RPM Internal Hard Drive - Media',
    pic: hdd_pic
  },
  case: {
    name: 'Case',
    info: 'Fractal Design - Define R5 (Black) ATX Mid Tower Case',
    pic: case_pic
  }
}

class PartInfo extends Component {
  render() {
    var part = this.props.activePart
    return (
      <div className="partinfo">
        <h2>{INFO[part] ? INFO[part].name : ''}</h2>
        <div>{INFO[part] ? INFO[part].info : ''}</div>
        <img src={INFO[part] ? INFO[part].pic : null} alt="part"/>
      </div>
    )
  }
}

export default PartInfo
