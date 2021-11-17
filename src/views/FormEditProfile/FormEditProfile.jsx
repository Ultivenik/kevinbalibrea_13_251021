import React from 'react'
import { useDispatch } from 'react-redux';
import { edit } from '../../services/actions';

export default function FormEditProfile() {
    const dispatch = useDispatch()

    const handleEditSubmit = (e) =>{
        e.preventDefault()
        dispatch(edit({
            firstName: e.target[0].value,
            lastName: e.target[1].value
        }))
    }
    const closeForm = () =>{
        dispatch({type:"edit/closeButton"})
    }
    return (
        <form onSubmit={handleEditSubmit}>
            <p>
                <input type="text" />
                <input type="text" />
            </p>
            <button>Save</button>
            <button onClick={closeForm}>Cancel</button>
        </form>
    )
}
