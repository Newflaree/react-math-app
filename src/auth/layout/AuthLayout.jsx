export const AuthLayout = ({ children, title = '' }) => {
  return (
    
    <div className="login animate__animated animate__fadeIn animate__faster">
      <div className="box shadow-dark">
        <div className="img-area shadow-dark">
          <div className="img"></div>
        </div>

        <div className="form">
          <h1>{ title }</h1>

          { children }

        </div>
      </div>
    </div>
  )
}
