
import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import {Box,OutlinedInput,InputLabel,MenuItem,FormControl,Chip} from '@mui/material';
import { FormHelperText } from "@mui/material";

import Select, { SelectChangeEvent } from '@mui/material/Select';

import {useState} from 'react'

const ChooseTamaAndPinuyBinuy = ({ values, errors, touched ,getFieldProps}) => {

    function getStyles(name, personName, theme) {
        return {
          fontWeight:
            personName.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
        };
      }
      
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };
    const names=['tama38','pinuyBinuy'];
    const theme = useTheme();
    const [projectTypes, setProjectTypes] = useState([]);

    React.useEffect(() => {

      values.pinuyBinuy && setProjectTypes([...projectTypes,'pinuyBinuy'])
      values.tama38&& setProjectTypes([...projectTypes,'tama38'])
      values.pinuyBinuy && values.tama38&& setProjectTypes([...projectTypes,'pinuyBinuy','tama38'])


    }, []);
    
    React.useEffect(() => {
      console.log(projectTypes,"dsf",projectTypes.includes('tama38'))
      projectTypes.includes('tama38')?values.tama38=true:values.tama38=false   
      projectTypes.includes('pinuyBinuy')?values.pinuyBinuy=true:values.pinuyBinuy=false   
    }, [projectTypes]);



    const handleChange = (event) => {
        console.log('before',{projectTypes})

        const {
          target: { value },
        } = event;
        setProjectTypes(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
       

        console.log(value)
      };

  return (
    <>
    
<FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-chip-label" >סוגי פרויקטים שמבוצעים על ידי היזם</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={projectTypes}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}

          // touched={touched}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              //style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>


        {/* {(!values.tama38 && !values.pinuyBinuy) ? (
         <FormHelperText
            sx={{ color: "#bf3333", marginLeft: "16px !important" }}
         >
            {!values.tama38 && !values.pinuyBinuy}
         </FormHelperText>
         ) : null} */}

      </FormControl>




      </>
  )
}

 export default ChooseTamaAndPinuyBinuy




