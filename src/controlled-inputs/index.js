import React from "react"
import FormWrapper, { FormWrapperConsumer } from "../form-wrapper"

const customOnChange = onChange => event => {
  event.stopPropagation()

  const { name, value } = event.target
  const vals = {
    target: {
      name: name,
      value: "Sir " + value
    }
  }
  onChange(vals)
}

const defaultOnChange = event => event

const FormInput = ({ name, label, onChange = defaultOnChange }) => (
  <React.Fragment>
    <label htmlFor={name}>{label || name}</label>
    <input id={name} name={name} onChange={onChange} />
  </React.Fragment>
)

const ControlledInputs = () => (
  <FormWrapper>
    <FormWrapperConsumer>
      {({ onChange }) => (
        <React.Fragment>
          <h1>Controlled inputs</h1>
          <fieldset>
            <FormInput
              name="first_name"
              label="First Name"
              onChange={customOnChange(onChange)}
            />
            <FormInput name="last_name" label="Last Name" />
          </fieldset>

          <fieldset>
            <button type="submit">Save</button>
          </fieldset>
        </React.Fragment>
      )}
    </FormWrapperConsumer>
  </FormWrapper>
)

export default ControlledInputs
