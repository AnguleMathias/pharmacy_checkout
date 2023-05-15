import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditBillById, UpdateBillInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormBill = NonNullable<EditBillById['bill']>

interface BillFormProps {
  bill?: EditBillById['bill']
  onSave: (data: UpdateBillInput, id?: FormBill['id']) => void
  error: RWGqlError
  loading: boolean
}

const BillForm = (props: BillFormProps) => {
  const onSubmit = (data: FormBill) => {
    props.onSave(data, props?.bill?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormBill> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="total"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total
        </Label>

        <TextField
          name="total"
          defaultValue={props.bill?.total}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="total" className="rw-field-error" />

        <Label
          name="customerProfileId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Customer profile id
        </Label>

        <NumberField
          name="customerProfileId"
          defaultValue={props.bill?.customerProfileId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="customerProfileId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BillForm
