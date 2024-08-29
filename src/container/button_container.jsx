import style from './Button.module.css'

const Button=({onbuttonclick} )=>{
    const Buttoninput=['Ac','+/-','%','/','7','8','9','pow','4','5','6','-','1','2','3','+','0','.','=','del']
    return (
        
        <div className={style.buttons}>
            {Buttoninput.map((item)=><button className={style.button} onClick={()=>onbuttonclick(item)}>{item}</button>)}
        </div>
    );
}
export default Button;