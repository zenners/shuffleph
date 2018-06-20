import React, {Component} from 'react'
import Link from 'gatsby-link'
import axios from 'axios'
import MenuItem from '../components/Menuitem'
import Header from '../components/Header'
import { LocalForm, Control, Errors } from 'react-redux-form';

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Workshop from '../workshop.png'
import FGD from '../fgd.png'
import Theater from '../theater.png'
import Launch from '../launch.png'
import Party from '../party.png'
import Screening from '../screening.png'

import '../layouts/style.css'
import {email, Basic, Time, Num, date, Radio, TextArea, File} from '../components/FormInputs'

const menu = [
  {
    title: 'MAKER-\nSPACE',
    styles: 'bg-bl tx-gr',
    path: '/makerspace',
    isActive: true,
  },
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
    title: 'CO-WORKING SPACE',
    styles: 'bg-ma tx-og',
    path: '/coworking',
    isActive: false,
  },

]

const layoutopts = [
  {title: 'Workshop', src: Workshop, desc: "Workshop Tables (8)", subdesc:"Stools (20)"},
  {title: 'FGD', src: FGD, desc: "Round Tables (6)", subdesc:"Stools (24)"},
  {title: 'Party', src: Party, desc: "Square Tables (6)", subdesc:"Stools (24)"},
  {title: 'Screening', src: Screening, desc: "Long Tables (4)", subdesc:"Chairs (20)"},
  {title: 'Launch', src: Launch, desc: "Long Tables (4)", },
  {title: 'Theater', src: Theater, subdesc:"Chairs (30)"},
]

// validators
const isPast = (val) => {
  var date = new Date(val)
  var now = new Date()
  if(now > date)
    console.log('past')
  else
    return true
}


const MakerForm = ({children}) => (
  <div>
      {children}
  </div>
)

const FormSection = ({subtitle, children}) => (
  <div>
    <h4 className="tx-ma all-caps"> {subtitle} </h4>
    {children}
  </div>
)

const InfoSection = () => (
  <FormSection   subtitle='info'>
    <FormGroup row>
      <Label for="exampleEmail" sm={2}>name</Label>
      <Col sm={10}>
        <Control.text
          model=".name"
          placeholder="Juan"
          name="name"
          required
          component={Basic}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleEmail" sm={2}>phone</Label>
      <Col sm={10}>
        <Control.text
          model=".phone"
          placeholder="+639178905643"
          name="phone"
          required
          component={Basic}
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleEmail" sm={2}>email</Label>
      <Col sm={10}>
        <Control.text
          model=".email"
          required
          component={email}
        />
      </Col>
    </FormGroup>
  </FormSection>
)

const EventSec = () => (
  <FormSection subtitle='event'>
    <FormGroup row>
      <Label for="exampleEmail" sm={2}>date</Label>
      <Col sm={10}>
      <Control.text
        required
        validators={{isPast}}
        model=".date"
        validateOn="blur"
        component={date}
      />
      <Errors
        model=".date"
        messages={{

          isPast: (val) => `${val} is a date in the past`,
        }}
      />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleEmail" sm={2}>time</Label>
      <Col sm={4}>
        <Control
          required
          model=".timeStart"
          component={Time}
        />
      </Col>
      <Label for="exampleEmail" sm={1}>to</Label>
      <Col sm={4}>
      <Control
        model=".timeEnd"
        component={Time}
      />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleEmail" sm={2}>no. of people</Label>
      <Col sm={10}>
      <Control
        required
        model=".pax"
        placeholder="10"
        component={Num}
      />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleEmail" sm={2}>type of event</Label>
      <Col sm={10}>
        <Control
          model=".type"
          required
          placeholder="Yoga Class"
          component={Basic}
        />
      </Col>
    </FormGroup>
    <FormGroup className=""  row>
      <Col sm={{size: 3, offset: 6}}>
        Weekday
      </Col>
      <Col sm={3}>
        Weekend
      </Col>
    </FormGroup>
    <FormGroup className=""  row>

    <Label for="exampleEmail" sm={2}>no. of hours</Label>
      <Label sm={4} check>
          <Control.radio required model=".duration" value="whole day" component={Radio}/>
          whole day (10 hrs)
        </Label>
        <Col sm={{size: 3}}>
          <p>P 8,500 </p>
        </Col>
        <Col sm={{size: 3}}>
          <p>P 9,500 </p>
        </Col>
        <Label sm={{size:4, offset: 2}} check>
        <Control.radio model=".duration" value="half day"component={Radio}/>
            half day (4 hrs)
          </Label>
          <Col sm={{size: 3}}>
            <p>P 5,000 </p>
          </Col>
          <Col sm={{size: 3}}>
            <p>P 6,000 </p>
          </Col>
          <Label sm={{size:4, offset: 2}} check>
          <Control.radio model=".duration" value="half day"component={Radio}/>
              pit stop (1 hr)
            </Label>
            <Col sm={{size: 3}}>
              <p>P 1,500 </p>
            </Col>
            <Col sm={{size: 3}}>
              <p>P 2,000 </p>
            </Col>
    </FormGroup>
  </FormSection>
)


const Layout = () => (
  <FormSection subtitle='Layout'>
    <h4 className="instrc italic"> Select type of package or shuffle the space </h4>
    <FormGroup check row>
      {layoutopts.map((opt) => (
        <Label className="text-mobile-align" sm={6} check>
          <Control.radio model=".setup"value={opt.title} component={Radio}/>
          {' '}
          THE <span className="h4 bold">{opt.title}</span>
          <div className="ms-options">
            <img src={opt.src} />
            <p> {opt.desc} </p>
            <p> {opt.subdesc} </p>
          </div>

        </Label>
      ))}
    </FormGroup>
    <FormGroup className="text-mobile-align"  check row>
      <Label sm={12} check>
      <Control.radio model=".setup" value="custom" component={Radio}/>
      {' '}
        THE <span className="h4 bold">Shuffle</span>
      </Label>
      <Col sm={12}>
        upload an image of your preferred layout <br/><br/>
        <Control.file model=".attachment" component={File} />
      </Col>
    </FormGroup>
  </FormSection>
)

const Extras = () => (
  <FormSection subtitle="Extras">
    <FormGroup  check row>
      <Label sm={12} check>
        <Control component={Radio} value="food (10 pax)" model=".addOns" />
        {' '}
        food (good for 10) - 2500
      </Label>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleEmail" sm={4}>other requests</Label>
      <Col sm={8}>
        <Control.textarea model=".notes" component={TextArea} />
      </Col>
    </FormGroup>
  </FormSection>
)

var is_weekend =  function(date1){
    var dt = new Date(date1);
    console.log(dt.getDay())
    if(dt.getDay() == 6 || dt.getDay() == 0)
      return true

    return false

}

const apiUrl = 'https://9su5wlor3c.execute-api.ap-southeast-1.amazonaws.com/latest'
const encode = (data) => {
   return Object.keys(data)
       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
       .join("&");
 }
class MakerSpacePage extends Component {
  constructor(props) {
       super(props);
       this.state = { name: "", email: "", message: "" };
     }

  handleChange(values) { console.log(values) }
  handleUpdate(form) { console.log(form) }



  handleSubmit = values => {
     fetch("/", {
       method: "POST",
       headers: { "Content-Type": "application/x-www-form-urlencoded" },
       body: encode(values,{"form-name": "contact"})
     })
       .then(() => alert("Success!"))
       .catch(error => alert(error));

     // e.preventDefault();
   };


  //
  //     const url = 'https://formspree.io/dackalacbayo@gmail.com'
  //     // const config = { headers: {
  //     //   'Content-Type': 'application/x-www-form-urlencoded',
  //     //  }};
  //         axios.post(url, values)
  //         .then(response => console.log(response))
  //         .catch(errors => console.log(errors));
  //
  //   // const url = `${apiUrl}/api/events`
  //   // axios.post(url, values)
  //   //   .then((res) => console.log(res))
  //   //   .catch((err) => console.log(err))
  // }


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
          <div className="col-md-6 content-body form-container mtop">
            <LocalForm
              onUpdate={(form) => this.handleUpdate(form)}
              onChange={(values) => this.handleChange(values)}
              onSubmit={(values) => this.handleSubmit(values)}
            >
                <h3 className="title-head tx-ma no-pad"> Book our Makerspace </h3>
                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="contact" />
                <InfoSection onChange={(values) => this.handleChange(values)}/>
                <EventSec onChange={(values) => this.handleChange(values)}/>
                <Layout onChange={(values) => this.handleChange(values)}/>
                <Extras onChange={(values) => this.handleChange(values)}/>
                <Button className="bg-ma tx-og"block>Submit</Button>
                </form>
            </LocalForm>

          </div>
          <div className="col-md-6 no-pad">
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

export default MakerSpacePage
