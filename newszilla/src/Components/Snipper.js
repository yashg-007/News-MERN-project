import React, { Component } from 'react'

export class Snipper extends Component {
  render() {
    return (
      <div className='conatiner text-center'>
        <div class="loader">
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__ball"></div>
        </div>
      </div>
    )
  }
}

export default Snipper