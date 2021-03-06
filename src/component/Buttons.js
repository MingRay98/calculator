import React, { Component } from 'react';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  operationColorStyle = {
    borderRadius: '5rem',
    backgroundColor: 'rgb(255, 123, 0)'
  }

  render() {
    let em = this.props.emitter;
    const emClick = (e)=>{em.emitEvent('handleNumClick',[e.target.value])};
    const emCalculate = ()=>em.emitEvent('handleCalculate');
    const emClear = ()=>em.emitEvent('handleClear');
    const emDelete = ()=> em.emitEvent('handleDelete');

    return (
      <div >
        <div className='OperationTopBtn' >
          <button className='Btn' onClick={emClear} style={{ borderRadius: '5rem', backgroundColor: 'white', color: 'red' }}>C</button>
          <button className='Btn' onClick={emClick} value='%' style={this.operationColorStyle}>%</button>
          <button className='Btn' onClick={emClick} value='/' style={this.operationColorStyle}>/</button>
          <button className='Btn' onClick={emClick} value='*' style={this.operationColorStyle}>X</button>
        </div>
        <div className='SecondContainer' >
          <div className='NumBtnDiv'>
            <div className='NumBtnInColumn'>
              <button className='Btn' onClick={emClick} value='1'>1</button>
              <button className='Btn' onClick={emClick} value='2'>2</button>
              <button className='Btn' onClick={emClick} value='3'>3</button>
            </div>

            <div className='NumBtnInColumn'>
              <button className='Btn' onClick={emClick} value='4'>4</button>
              <button className='Btn' onClick={emClick} value='5'>5</button>
              <button className='Btn' onClick={emClick} value='6'>6</button>
            </div>

            <div className='NumBtnInColumn'>
              <button className='Btn' onClick={emClick} value='7'>7</button>
              <button className='Btn' onClick={emClick} value='8'>8</button>
              <button className='Btn' onClick={emClick} value='9'>9</button>
            </div>

            <div className='NumBtnInColumn' >
              <button onClick={emDelete} className='Btn' style={{ backgroundColor: 'rgb(52, 56, 106)' ,borderRadius:'5rem'}} >←</button>
              <button onClick={emClick} className='Btn' value='0'>0</button>
              <button onClick={emClick} className='Btn' value='.'>．</button>
            </div>

          </div>
          <div className='OperationRigthBtn'>
            <div className='OperationRigthBtnPM'>
              <button className='Btn' onClick={emClick} value='+' style={this.operationColorStyle} >+</button>
              <button className='Btn' onClick={emClick} value='-' style={this.operationColorStyle} >-</button>
            </div>
            <button className='BigEnter' onClick={emCalculate} >=</button>
          </div>
        </div>
        </div>

    );
  }
}

export default Buttons;