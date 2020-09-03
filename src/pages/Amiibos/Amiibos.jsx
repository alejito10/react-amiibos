import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import { environment } from "../../environments/environment";
import { AmiiboGallery } from "../../shared/components/AmiiboCallery/AmiiboGallery";
import { AmiibosContext } from "../../shared/contexts/AmiibosContext";
import {Buscador} from "../../shared/components/buscador/Buscador";

export function Amiibos () {

    // const [amiibos, setAmiibos] = useState([]);

    const [amiibos, setAmiibos] = useContext(AmiibosContext);
    const [amiibosFilter, setAmiisFilter]=useState([]);

    useEffect(() => {
        axios.get(environment.url + 'amiibo').then(res => {
            const amiibosLocal = res.data.amiibo;
            console.log(amiibosLocal);
            setAmiibos(amiibosLocal);
            setAmiisFilter(amiibosLocal);
        })
    }, [])

    function filterAmiibos(data){
        const localAmiibos=amiibos;
        console.log(localAmiibos)
        const arrayAmiibos=[]
        for (let i = 0;i<amiibos.length;i++){
            if (amiibos[i].name.includes(data.name)){
                arrayAmiibos.push(amiibos[i]);
            }

        }
        if (data.name==" "){
            setAmiibos(localAmiibos)
        }
        setAmiisFilter(arrayAmiibos);
        console.log(arrayAmiibos)
        console.log(localAmiibos)

    }
    return (
        <div>
            <h1 className="b-text-primary d-flex justify-content-center">Amiibos</h1>
            <Buscador filter={filterAmiibos}/>
            <AmiiboGallery amiibos={amiibosFilter}/>
        </div>
    );
}

