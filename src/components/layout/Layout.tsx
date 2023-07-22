import Options from './Options';

function Layout(props: any) {
  return (
    <>
      <Options />
      {props.children}
    </>
  );
}

export default Layout;
