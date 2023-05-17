import ButtonPrint from "../common/ButtonPrint"
import InputControl from "./inputControl"

function General() {
    return <>
        <div className='stylerow'>
            <h3 className="head colorblue mb-4">
                Store Address
            </h3>
            <InputControl text="Title" />
            <InputControl text="Selling to specific countries" />
            <InputControl text="Sale to specific cities" />
        </div>

        <div className='stylerow mt-3'>
            <h3 className="head colorblue mb-4">
                General options
            </h3>
            <InputControl text="Time zone" />
            <InputControl text="The week begins"/>
            <InputControl text="Sale to specific cities"/>
        </div>


        <ButtonPrint data="save" />

    </>
}

export default General