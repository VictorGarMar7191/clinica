import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const ConsultForm = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        CURP
                        id="outlined-required"
                        label="CURP"
                        defaultValue=""
                        variant="outlined"
                    />
                    <br></br>
                    <TextField
                        Cedula
                        id="outlined-required"
                        label="Cedula"
                        defaultValue=""
                        variant="outlined"
                    />
                    <br></br>
                    <TextField
                        Peso
                        id="outlined-required"
                        label="Peso"
                        defaultValue=""
                        variant="outlined"
                    />
                    <br></br>
                    <TextField
                        Peso
                        id="outlined-required"
                        label="Peso"
                        defaultValue=""
                        variant="outlined"
                    />
                    <br></br>
                    <TextField
                        Altura
                        id="outlined-required"
                        label="Altura"
                        defaultValue=""
                        variant="outlined"
                    />
                    <br></br>
                    <TextField
                        Presion Arterial
                        id="outlined-required"
                        label="Presión Arterial"
                        defaultValue=""
                        variant="outlined"
                    />
                    <br></br>
                    <TextField
                        Temperatura
                        id="outlined-required"
                        label="Temperatura"
                        defaultValue=""
                        variant="outlined"
                    />
                    <br></br>
                    <TextField
                        Sintomas
                        id="outlined-multiline-flexible"
                        multiline
                        rowsMax={8}
                        label="Sintomas"
                        defaultValue=""
                        variant="outlined"
                    />
                    <br></br>
                    <TextField
                        Diagnostico
                        id="outlined-multiline-flexible"
                        multiline
                        rowsMax={8}
                        label="Diagnostico"
                        defaultValue=""
                        variant="outlined"
                    />
                    <br></br>
                    <TextField
                        Receta
                        id="outlined-multiline-flexible"
                        multiline
                        rowsMax={8}
                        label="Receta"
                        defaultValue=""
                        variant="outlined"
                    />
                    <br></br>
                    <TextField
                        Indicaciones
                        id="outlined-multiline-flexible"
                        multiline
                        rowsMax={8}
                        label="Indicaciones"
                        defaultValue=""
                        variant="outlined"
                    />
                </div>
            </form>
            <Button variant="contained" color="primary">
                Guardar
            </Button>
        </div>
    )
}

export default ConsultForm
