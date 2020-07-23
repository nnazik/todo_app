import * as React from 'react'
import './form.scss'
import { Button, Input, Row, Col } from 'antd';
import { TodoInterface, FormInterface } from './../../utils/todoInterfaces'

const Form = (props: FormInterface) => {

  const inputRef = React.useRef<Input>(null)
  const [formState, setFormState] = React.useState('')

  const getrandomeId = () => {
    return Math.random().toString(16).slice(-4)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(event.target.value)
  }

  const handleAddInput = (event: React.MouseEvent) => {

    if (formState !== '') {
      const newItem: TodoInterface = {
        id: getrandomeId(),
        text: formState,
        isDone: false
      }

      props.handleAdd(newItem)

      if (inputRef && inputRef.current) {
        inputRef.current.input.value = ''
      }
    }
  }

  return (
    <Row>
      <Col>
        <Input
          className="form-input"
          ref={inputRef}
          type="text"
          placeholder='type your text'
          onChange={event => handleInputChange(event)}
        />
      </Col>
      <Col>
        <Button className="form-btn" onClick={event => handleAddInput(event)} type="primary">Add to List</Button>
      </Col>
    </Row>
  )
}

export default Form
