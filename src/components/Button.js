import PropTypes from 'prop-types'


const Button = ({color, text, action }) => {
    return (<button style ={{ backgroundColor : color}} className='btn' onClick={action} >{text}</button>)
}

Button.defaultProps={
    color:'steelblue',
}

Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button