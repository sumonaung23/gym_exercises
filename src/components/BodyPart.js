import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

const BodyPart = () => {
    return (
        <Stack
            type='button'
            alignItems='center'
            justifyContent='center'    
            className='bodyPart-card'
        >
            <img src={Icon} className='body-part-icon' alt='icon' />
        </Stack>
    )
}

export default BodyPart