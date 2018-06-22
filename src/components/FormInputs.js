import React from 'react'

import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export const email = (props) => (<Input {...props} type="email" name="email" id="exampleEmail" placeholder="hello@shuffle.ph"  />)
export const Basic = (props) => (<Input {...props} type="text" name={props.name} placeholder={props.placeholder} />)
export const Time = (props) => (<Input {...props} type="time" name="time" id="exampleTime" placeholder="time placeholder" />)
export const Num = (props) => (<Input  {...props} type="number" name="number" id="exampleNumber" placeholder={props.placeholder} />)
export const date = (props) => <Input {...props} type="date" name="date" id="exampleDate" placeholder="date placeholder" />
export const Radio = (props) => <Input {...props} type="radio" name={props.name ? props.name : ""} />
export const File = (props) => <Input {...props} type="file" name="file" id="exampleFile" />
export const TextArea = (props) => <Input {...props} type="textarea" name="text" id="exampleText" />
