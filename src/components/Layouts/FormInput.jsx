import ButtonA from "../ELements/button/button"
import Input from "../ELements/form/Input"



const FormLogin = () => {
    return (
        <form action="">
           <div className="w-3/6 mt-10 flex justify-center items-center">
           <Input placeholder = 'masukkan pesan disini'/>
           <ButtonA color = 'bg-black' textColor = 'text-white'/>
           </div>
        </form>  
    )
}


export default FormLogin