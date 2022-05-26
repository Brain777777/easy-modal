import type { ModalAction, ModalStore, Recordable } from './interface'

export const reducer = (state: ModalStore, action: ModalAction): ModalStore => {
  const { id, args } = action.payload

  switch (action.type) {
    case 'open': {
      return {
        ...state,
        [id]: {
          ...state[id],
          id,
          args,
          visible: true,
          delayVisible: true,
        },
      }
    }
    case 'close': {
      if (!state[id])
        return state

      return {
        ...state,
        [id]: {
          ...state[id],
          id,
          visible: false,
        },
      }
    }
    case 'remove': {
      const copyedState = { ...state }
      delete copyedState[id]
      return copyedState
    }
    // case 'set-flags': {
    //   return {
    //     ...state,
    //     [id]: {
    //       ...state[id],
    //       ...flags,
    //     },
    //   }
    // }
    default:
      return state
  }
}

export const opne = (id: string, args?: Recordable): ModalAction => {
  return {
    type: 'open',
    payload: {
      id,
      args,
    },
  }
}

export const close = (id: string): ModalAction => {
  return {
    type: 'close',
    payload: {
      id,
    },
  }
}

export const remove = (id: string): ModalAction => {
  return {
    type: 'remove',
    payload: {
      id,
    },
  }
}

