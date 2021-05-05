import PropTypes from 'prop-types';
import Button from './Button';


const Header  = ({title, onAdd})=> {

   
    return(
        <header>
            <h1>{title}</h1>
            
            <Button color='black' text='Regar cultivos' onClick={
            onAdd}/>
            <Button color='black' text='Liberar alimento'/>
            <Button color='black' text='Ver lombricomposta'/>
            <Button color='black' text='Ver estado del agua'/>
            <Button color='black' text='Aumentar ph del agua'/>
            <Button color='black' text='Disminuir ph del agua'/>





        </header>
    )
}

Header.defaultProps = {
    title: 'Granja Dómotica',
}

Header.prototype = {
    title: PropTypes.string.isRequired
}

export default Header