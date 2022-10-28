import Main from './Main/Main';
import Sidenav from './Sidenav/Sidenav';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

/**
 * Set the Layout for the entire app
 * @param {React.ReactNode} children - ReactNode to add in the Main section
 * @return {JSX.Element}
 */
export default function Layout({ children, ...rest }: Props): JSX.Element {
  return (
    <>
      <Sidenav />
      <Main {...rest}>{children}</Main>
    </>
  );
}
