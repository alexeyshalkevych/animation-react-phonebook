import transition from 'styled-transition-group';

const Pop = transition.div.attrs({
  unmountOnExit: true,
  timeout: 500,
})`
  &:enter {
    transform: scale(0);
  }

  &:enter-active {
    transform: scale(1);
    transition: transform 500ms ease-in-out;
  }

  &:exit {
    transform: scale(1);
  }

  &:exit-Active {
    transform: scale(0);
    transition: transform 500ms ease-in-out;
  }
`;

export default Pop;
