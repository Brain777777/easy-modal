const ID_COUNTER = {}

const uniqueId = (prefix = 'ID_') => {
  if (!ID_COUNTER[prefix])
    ID_COUNTER[prefix] = 0

  const id = ++ID_COUNTER[prefix]

  if (prefix === 'ID_')
    return `${id}`

  return `${prefix}${id}`
}

export default uniqueId
