'use client'

import { useActionState } from 'react'
import * as React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormFieldContext, FormItemContext } from './context'

export function useFormField() {
  const fieldContext = React.use(FormFieldContext)
  const itemContext = React.use(FormItemContext)
  const { getFieldState } = useFormContext()

  if (fieldContext == null) {
    throw new Error('useFormField should be used within <FormField>')
  }

  if (itemContext == null) {
    throw new Error('useFormField should be used within <FormItem>')
  }

  const formState = useActionState({ name: fieldContext.name })
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
