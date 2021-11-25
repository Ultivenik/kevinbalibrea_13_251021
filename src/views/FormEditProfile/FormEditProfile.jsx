import React from 'react'
import { useDispatch } from 'react-redux';
import { closeButton, edit } from '../../services/actions';
import './FormEditProfile.css'

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
        dispatch({type: closeButton})
    }

    return (
        <form className="edit-profile-form" onSubmit={handleEditSubmit}>
            <p>
                <input className="text-field" type="text" />
                <input className="text-field" type="text" />
            </p>
            <p className="btn-container">
            <button className="btn save-btn">Save</button>
            <button className="btn cancel-btn" onClick={closeForm}>Cancel</button>

            </p>
        </form>
    )
}
