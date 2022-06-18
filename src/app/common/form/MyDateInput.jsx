import React from 'react'
import { useField, useFormikContext } from 'formik'
import { FormField, Label } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function MyDateInput({ label, ...props }) {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(props)

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => setFieldValue(field.name, value)}
        timeClassName={handleColor}
      />
      {meta.touched && meta.error ? (
        <Label ribbon color='red' pointing>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  )
}
