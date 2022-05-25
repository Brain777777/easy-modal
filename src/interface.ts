type Recordable<T = any> = Record<string, T>

type Mapable<T = any> = Map<string, T>

export interface ModalState {
  id: string
  args?: Recordable<unknown>
  visible?: boolean
  delayVisible?: boolean
  keepMounted?: boolean
}

export type ModalStore = Mapable<ModalState>

export interface ModalAction {
  type: string
  payload: {
    modalId: string
    args?: Recordable<unknown>
    flags?: Recordable<unknown>
  }
}

export type ModalCallbacks = Recordable<{
  resolve: (args: unknown) => void
  reject: (args: unknown) => void
  promise: Promise<unknown>
}>

export interface ModalHandler<Props = Record<string, unknown>> {
  visible: boolean
  keepMounted: boolean
  show: (args?: Props) => Promise<unknown>
  hide: () => Promise<unknown>
  resolve: (args?: unknown) => void
  reject: (args?: unknown) => void
  remove: () => void
  resolveHide: (args?: unknown) => void
}

export interface ModalHocProps {
  id: string
  defaultVisible?: boolean
  keepMounted?: boolean
}
