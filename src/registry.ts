import type { FC } from 'react'
import type { Recordable } from './interface'

interface ModalFC {
  comp: FC
  props: Recordable
}

class Registry {
  private modals = new Map<string, ModalFC>()

  register(id: string, com: any, props: any) {
    const modal = this.modals.get(id)
    if (this.modals.has(id) && modal) {
      this.modals.set(id, {
        ...modal,
        props,
      })
    }
    else {
      this.modals.set(id, { comp: com, props })
    }
  }

  unregister(id: string) {
    this.modals.delete(id)
  }

  get(id: string) {
    return this.modals.get(id)
  }
}

export default Registry
