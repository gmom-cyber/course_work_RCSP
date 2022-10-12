import React from 'react'
import {Link} from "react-router-dom";

export const ErrorCard = () => {
    return (
        <>
            <h2>Упс, то что вы ввели не ссылка.</h2>
            <p>Попробуйте <Link to={`/create`}>еще раз!</Link> </p>


        </>
    )
}
