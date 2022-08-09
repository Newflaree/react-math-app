export const UnitCard = ({ title = '', desc = '', icon = '' }) => {
  return (
    <div className='service-item padd-15'>
      <div className='service-item-inner'>
        <div className='icon'>
          <i className={ icon }></i>
        </div>
        <h4>{ title }</h4>
        <p>
          { desc }
        </p>
      </div>
    </div>
  )
}
