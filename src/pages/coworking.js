import React, { Component } from 'react'
import Link from 'gatsby-link'
import MenuItem from '../components/Menuitem'
import Header from '../components/Header'
import logo from '../Group 40-min.png'
import '../layouts/style.css'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import {email, Basic, Time, Num, date, Radio, TextArea, File} from '../components/FormInputs'

const Icon = ({icon, link}) => (
  <span className="icon ">
    <i className={`fas fa-${icon}`}></i>
  </span>
)

const menu = [
  {
    title: 'ABOUT SHUFFLE',
    styles: 'bg-og tx-ma',
    path: '/about',
    isActive: false,
  },
  {
    title: 'UPCOMING EVENTS',
    styles: 'bg-gr tx-bl',
    path: '/events',
    isActive: false,
  },
  {
    title: 'MAKER SPACE',
    styles: 'bg-bl tx-gr',
    path: '/makerspace',
    isActive: false,
  },



  {
    title: 'CO-WORKING SPACE',
    styles: 'bg-ma tx-og',
    path: '/coworking',
    isActive: true,
  },

]

const options = [
  { title: 'whole day', time: '8 hours', price: '500',},
  { title: 'half day', time: '4 hours', price: '350',},
  { title: 'pit stop', time: '1 hour', price: '100',},
  { title: 'weekly', time: '5 days', price: '2,300',},
  { title: 'monthly', time: '20 days', price: '8,500',},
  { title: '25-day pass', time: '2 months', price: '10,500',},

]

const MakerForm = ({children}) => (
  <div>
      <h3 className="title-head tx-ma no-pad"> Book a Desk </h3>
      {children}
  </div>
)

const FormSection = ({subtitle, children}) => (
  <div>
    <h4 className="tx-ma all-caps"> {subtitle} </h4>
    {children}
  </div>
)

function renderOptions(opts){
  return opts.map((opt) => {
    return (

      <FormGroup>
        <Label className="row" >
          <Col xs={4}>
            <Control model=".passType" component={Radio} name="passtype" value={opt.title} />
            {opt.title}
          </Col>
          <Col xs={{size: 4}}>
            <p>{opt.time}</p>
          </Col>
          <Col xs={{size: 4}}>
            <p>P {opt.price}</p>
          </Col>
        </Label>

      </FormGroup>

    )
  })
}
const InfoSection = () => (
  <FormSection   subtitle='info'>
    <FormGroup row>
      <Label for="exampleEmail" sm={2}>name</Label>
      <Col sm={10}>
        <Control model=".name" component={Basic} placeholder="Juan" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleEmail" sm={2}>phone</Label>
      <Col sm={10}>
        <Control model=".phone" component={Basic} placeholder="+639176738977"/>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleEmail" sm={2}>email</Label>
      <Col sm={10}>
        <Control model=".email" component={Basic} placeholder="hello@shuffle.ph" />
      </Col>
    </FormGroup>
  </FormSection>
)

const PassType = () => (
    <FormSection   subtitle='Pass Type'>

      {renderOptions(options)}

    </FormSection>
)

class Coworking extends Component {
  handleChange(values) { console.log(values) }
  handleUpdate(form) { console.log(form) }
  handleSubmit(values) { console.log(values) }
  handleSubmitFailed(userForm) {
    // logs form-level errors
    console.log(userForm.$form.errors);

    // logs errors for user.email
    console.log(userForm.email.errors);
  }
  render(){
    return(
      <div>
       <Header />
        <div className="flex-wrap row-eq-height">
          <div className="col-md-6 content-body form-container cnt-size mtop">
          <LocalForm
            onUpdate={(form) => this.handleUpdate(form)}
            onChange={(values) => this.handleChange(values)}
            onSubmit={(values) => this.handleSubmit(values)}
          >
            <MakerForm>
              <InfoSection />
              <PassType />
              <Button className="bg-ma tx-og mt-5"block>Submit</Button>
            </MakerForm>
          </LocalForm>


          </div>
          <div className="col-md-6 no-pad ">
            <div className="d-flex flex-column">
              {menu.map((item) => (
                <MenuItem title={item.title} styles={item.styles} path={item.path} isActive={item.isActive} />
              ))}
            </div>
            </div>
        </div>
      </div>
    )
  }
}




export default Coworking
