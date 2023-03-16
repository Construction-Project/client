import * as React from 'react';
import { NumericFormat } from 'react-number-format';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
    props,
    ref,
) {
    const { onChange, ...other } = props;
    return (
        <NumericFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
        />
    );
});
const FormattedInputs = ({ label }) => {
    const [values, setValues] = React.useState({
    });
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    return (
        <Box>
            <FormControl variant="standard">
                <InputLabel htmlFor="formatted-text-mask-input">react-imask</InputLabel>
            </FormControl>
            <TextField
                label={label}
                value={values.numberformat}
                onChange={handleChange}
                name="numberformat"
                id="formatted-numberformat-input"
                InputProps={{
                    inputComponent: NumericFormatCustom,
                }}
                variant="standard"
            />
            <br></br>
            <br></br>
            <TextField
                label={label}
                value={values.numberformat}
                onChange={handleChange}
                name="numberformat"
                id="formatted-numberformat-input"
                InputProps={{
                    inputComponent: NumericFormatCustom,
                }}
                variant="standard"
            />
            <br></br>
            <br></br>
            <TextField
                label={label}
                value={values.numberformat}
                onChange={handleChange}
                name="numberformat"
                id="formatted-numberformat-input"
                InputProps={{
                    inputComponent: NumericFormatCustom,
                }}
                variant="standard"
            />
        </Box>
    );
}
export default FormattedInputs;