import { Button as BaseButton } from 'rebass'
import styled, {keyframes} from 'styled-components'

const bounce = keyframes`
  0% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-50%) translateX(-50%);
  }
  100% {
    transform: translateY(0) translateX(-50%);
  }
`

// Add custom styles here
const LaScrollDownIndicatorptop = styled(BaseButton)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  animation: ${bounce} 1s ease infinite;
  color: inherit;
`

LaScrollDownIndicatorptop.displayName = 'LaScrollDownIndicatorptop'
LaScrollDownIndicatorptop.defaultProps = {
  children: '╲╱',
  bg: 'transparent'
}

export default LaScrollDownIndicatorptop
