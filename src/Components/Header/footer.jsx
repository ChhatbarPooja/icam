import React from "react";
import {
    Box,
    Grid,
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    Icon,
    TableRow,
    Button,
    Tooltip,
} from '@mui/material'

const Main_footer=() => {

    return (
        <>
            <Box className="main-box footer-main-box">
                <Grid container className="footer-main">
                    <Grid item md={12} className="footer-title">
                        <h5>@2022 ICAM Video Telematics. All Rights Reserved</h5>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Main_footer;