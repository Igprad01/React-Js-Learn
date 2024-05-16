import ButtonA from "../ELements/button/button"
import Input from "../ELements/form/Input"



const FormLogin = () => {
    return (
        <form action="">
           <div className="">
           <div className="bg-slate-600 w-3/6 h-96 flex justify-center items-center gap-2 ml-96 mt-56">
            <Input placeholder = 'masukkan pesan disini'/>
           <ButtonA color = 'bg-black' textColor = 'text-white'/>
           </div>
           </div>
        </form>  
    )
}


export default FormLogin