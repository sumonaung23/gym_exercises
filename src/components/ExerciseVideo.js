import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideo = ({ exerciseVideos, name }) => {
    console.log(exerciseVideos)
    if(!exerciseVideos.length) return 'Loading...'

    return (
        <Box sx={{ mt: {la: '200px', xs: '20px'}}} p='20px'>
            <Typography variant='h4' mb='33px'>
                Watch <span style={{color: '#ff2625', textTransform:'capitalize'}}>{name}</span> exercise videos
            </Typography>
            <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{
                flexDirection: {lg: 'row'},
                gap: {lg: '30px', xs: '0px'}
            }}>
                {exerciseVideos?.slice(0, 10)?.map((item, index) => (
                    <a key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target='_blank'
                    rel='noreferrer'>

                        <img style={{ borderRadius: '10px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
                        <Box>
                            <Typography variant='h5' color="#000">
                                {item.video.title}
                            </Typography>
                            <Typography variant='h6' color='#000'>
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                )
                )}
            </Stack>
        </Box>
    )
}

export default ExerciseVideo