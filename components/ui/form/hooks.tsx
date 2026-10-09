'use client'

import * as React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormFieldContext, FormItemContext } from './context'

export function useFormField() {
  const fieldContext = React.use(FormFieldContext)
  const itemContext = React.use(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  if (fieldContext == null) {
    throw new Error('useFormField should be used within <FormField>')
  }

  if (itemContext == null) {
    throw new Error('useFormField should be used within <FormItem>')
  }

  const fieldState = getFieldState(fieldContext.name, formState)

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}
