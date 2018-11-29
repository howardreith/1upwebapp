import React from 'react'

export default class FhirCondition extends React.Component {

  render () {
    return (
      <div className='tile'>
        <h2 className='primarycolor' style={{display: 'inline-block'}}>
          {this.props.resource.code && this.props.resource.code.coding ? <span>{this.props.resource.code.coding[0].display} {this.props.resource.code.coding[0].code}</span> : this.props.resource.code.text}
        </h2>
      </div>
    )
  }
}
