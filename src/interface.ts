export type Recordable<T = any> = Record<string, T>

export type Mapable<T = any> = Map<string, T>

export interface ModalState {
  id: string
  args?: Recordable
  visible?: boolean
  delayVisible?: boolean
  keepMounted?: boolean
}

export type ModalStore = Recordable<ModalState>

export interface ModalAction {
  type: string
  payload: {
    modalId: string
    args?: Recordable
    flags?: Recordable
  }
}

export type ModalCallbacks = Recordable<{
  resolve: (args: unknown) => void
  reject: (args: unknown) => void
  promise: Promise<unknown>
}>

export interface ModalHandler<Props = Recordable> {
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
