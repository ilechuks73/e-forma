import style from './BasicButton.module.css';

function BasicButton(props){
  return( <button className={style.button}>{props.children}</button>);
}

export default BasicButton;