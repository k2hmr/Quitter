import { ResponsiveValue } from '@chakra-ui/react'
export const setResponsiveValue = (
  sp: string | number | undefined,
  pc: string | number | undefined,
) => {
  return {
    base: sp,
    sm: sp,
    md: pc,
    lg: pc,
    xl: pc,
  }
}

export const setResponsiveDirection = (
  sp: string | undefined,
  pc: string | undefined,
) => {
  return {
    base: sp,
    sm: sp,
    md: pc,
    lg: pc,
    xl: pc,
  } as ResponsiveValue<'row' | 'column'>
}
