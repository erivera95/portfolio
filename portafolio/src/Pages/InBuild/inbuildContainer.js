import React from 'react'
import DeskAnimation from '../../Components/DeskAnimation/deskAnimation'
import LoadingBarAnimation from '../../Components/LoadingBar/loadingBarAnimation'
import './styles.css'

export const InbuildContainer = () => {
    return (
        <div>
            <h1>En proceso...</h1>
            <DeskAnimation/>
            <LoadingBarAnimation/>
        </div>
    )
}
