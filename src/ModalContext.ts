import * as React from 'react'
import type { ModalStore } from './interface'

const initialStore = new Map()

export const ModalContext = React.createContext<ModalStore>(initialStore)

export const ModalIDContext = React.createContext<string | null>(null)
