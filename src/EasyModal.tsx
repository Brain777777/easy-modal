import type { ComponentType, FC } from 'react'
import { useEffect } from 'react'

import './uniqueId'

export const create = <P extends {}>(Comp: ComponentType<P>): FC<P> => {
  return function Inner(props) {
    const { ...rest } = props
    useEffect(() => { }, [])
    return <Comp {...rest} />
  }
}
