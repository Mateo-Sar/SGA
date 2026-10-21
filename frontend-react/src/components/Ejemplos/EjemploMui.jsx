import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
function EjemploMui(){
    return(
    <>
        <Stack spacing={5} direction="column">
            <Button variant="text" color="error">Text</Button>
            <Button variant="contained">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack direction="column" spacing={5} sx={{

            mt:4, mx:3
        }}>
            <Button variant="contained" startIcon={<DeleteIcon />} color="error">
                Eliminar
            </Button>
            <Button variant="outlined" endIcon={<SendIcon />} sx={{bgcolor:"#02007c",color:"#FFFFFF","&:hover":{bgcolor:"#0c09a5"}}} >
                Enviar
            </Button>
    </Stack>
    </>
    )
}

export default EjemploMui