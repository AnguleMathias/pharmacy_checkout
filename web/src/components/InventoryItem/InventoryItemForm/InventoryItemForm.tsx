import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type {
  EditInventoryItemById,
  UpdateInventoryItemInput,
} from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormInventoryItem = NonNullable<EditInventoryItemById['inventoryItem']>

interface InventoryItemFormProps {
  inventoryItem?: EditInventoryItemById['inventoryItem']
  onSave: (data: UpdateInventoryItemInput, id?: FormInventoryItem['id']) => void
  error: RWGqlError
  loading: boolean
}

const InventoryItemForm = (props: InventoryItemFormProps) => {
  const onSubmit = (data: FormInventoryItem) => {
    props.onSave(data, props?.inventoryItem?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormInventoryItem> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.inventoryItem?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.inventoryItem?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="quantity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantity
        </Label>

        <NumberField
          name="quantity"
          defaultValue={props.inventoryItem?.quantity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="quantity" className="rw-field-error" />

        <Label
          name="pharmacistProfileId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pharmacist profile id
        </Label>

        <NumberField
          name="pharmacistProfileId"
          defaultValue={props.inventoryItem?.pharmacistProfileId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="pharmacistProfileId" className="rw-field-error" />

        <Label
          name="billId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bill id
        </Label>

        <NumberField
          name="billId"
          defaultValue={props.inventoryItem?.billId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="billId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default InventoryItemForm
