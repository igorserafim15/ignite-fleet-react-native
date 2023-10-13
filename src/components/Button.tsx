import { Button as ButtonComponent, IButtonProps } from 'native-base'

type ButtonProps = IButtonProps

export function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonComponent
      height={52}
      rounded={6}
      fontWeight="bold"
      backgroundColor="primary.500"
      maxWidth="280px"
      width="100%"
      marginX="auto"
      _text={{
        fontSize: 16,
        fontWeight: 'bold',
      }}
      _pressed={{
        backgroundColor: 'primary.300',
      }}
      {...props}
    >
      {children}
    </ButtonComponent>
  )
}
