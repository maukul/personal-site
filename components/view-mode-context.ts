import { createContext } from 'react'

export interface ViewMode {
  /** true = condensed "1-minute pitch" for recruiters. */
  recruiter: boolean
  setRecruiter: (value: boolean) => void
}

/** Default keeps the context usable without a provider (deep dive). */
export const ViewModeContext = createContext<ViewMode>({
  recruiter: false,
  setRecruiter: () => {},
})
