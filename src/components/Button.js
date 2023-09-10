import PropTypes from 'prop-types';

const Button =({color,text,onclick})=>{
return (
    <div>
          <button onClick={onclick} style={{backgroundColor:color}} className="btn">{text}</button>
    </div>
)
}

Button.defaultProps={
    color:'steelblue'
}

Button.propTypes={
    color:PropTypes.string,
    text:PropTypes.string,
    onclick:PropTypes.func.isRequired
}
export default Button;