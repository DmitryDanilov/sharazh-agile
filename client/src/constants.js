export const DROPPABLE_AREA = 'droppableArea'

export const DRAGGABLE_ELEMENT = 'draggableElement'

export const dateFormatted = (date) => {
  let dateParts =  date.split('-');
  return `${dateParts[2].substring(0,2)}.${dateParts[1]}.${dateParts[0]}`
}

export const prefixZeros = '000000'