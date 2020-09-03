import React from "react";
import {useForm} from "react-hook-form";


export function Buscador(props) {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(props)
        props.filter(data);

    }


    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="b-form">
                <label>Name</label>
                <input className="b-input" name="name" id="name" ref={register({ required: true })}/>
                <input className="b-btn mt-3" type="submit"/>
            </form>
        </div>
    )
}