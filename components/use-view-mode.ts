'use client'

import { use } from 'react'

import { ViewModeContext } from './view-mode-context'

/** Access to the Deep dive / 1-min pitch state. */
export function useViewMode() {
  return use(ViewModeContext)
}
