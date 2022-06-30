import styled from 'styled-components'

import { FadeType } from '../types/fadeType'

export const FadeInStyled = styled.div<FadeType>`
  opacity: ${({ isOpacity }) => (isOpacity ? '1' : '0')};
  transform: translateY(${({ isTransY }) => (isTransY ? '0px' : '30px')});
  transition: all 0.7s ease-in-out ${({ delayTime }) => delayTime + 's'};
`
