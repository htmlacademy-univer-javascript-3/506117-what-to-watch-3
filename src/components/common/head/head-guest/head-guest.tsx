import Logo from '../../logo/logo';

function HeadGuest() {
  return (
    <header className="page-header">
      <Logo isLight={false}/>
      <div className="user-block">
        <a href="sign-in.html" className="user-block__link">Sign in</a>
      </div>
    </header>
  );
}

export default HeadGuest;
