import type { ModalAction, ModalStore } from './interface'

export const reducer = (state: ModalStore, action: ModalAction): ModalStore => {
  const { modalId, args, flags } = action.payload

  switch (action.type) {
    case 'open': {
      return {
        [modalId]: {
          id: modalId,
          visible: true,
          delayVisible: true,
        },
      }
    }
    case 'close': {
      return {

      }
    }
    case 'remove': {
      return {

      }
    }
    case 'set-flags': {
      return {

      }
    }
    default:
      return state
  }
}
