
import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import {Box,OutlinedInput,InputLabel,MenuItem,FormControl,Chip} from '@mui/material';

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
    const [projetTypes, setProjetTypes] = useState([]);

    React.useEffect(() => {
      console.log(projetTypes,"dsf",projetTypes.includes('tama38'))
      projetTypes.includes('tama38')?values.tama38=true:values.tama38=false   
      projetTypes.includes('pinuyBinuy')?values.pinuyBinuy=true:values.pinuyBinuy=false   
    }, [projetTypes]);
    const handleChange = (event) => {
        console.log('before',{projetTypes})

        const {
          target: { value },
        } = event;
        setProjetTypes(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
       

        console.log(value)
      };

  return (
    <>
    <div>ChooseTamaAndPinuyBinuy</div>


<FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">סוגי פרויקטים שמבוצעים על ידי היזם</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={projetTypes}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
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
      </FormControl>




      </>
  )
}

 export default ChooseTamaAndPinuyBinuy


// // value={values.companyName}
// // id="outlined-basic"
// // label="שם החברה"
// // variant="outlined"
// // {...getFieldProps("description")}
// // onChange={handleChange} 
// // error={touched.companyName && Boolean(errors.companyName)}
// // helperText={touched.companyName && errors.companyName}   


/*
import { FormControlLabel, Checkbox } from "@mui/material";

const ChooseTamaAndPinuyBinuy = ({ values, handleChange, errors, touched }) => {
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={values.tama38}
            onChange={handleChange}
            name="tama38"
            color="primary"
          />
        }
        label="תמא 38"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={values.pinuyBinuy}
            onChange={handleChange}
            name="pinuyBinuy"
            color="primary"
          />
        }
        label="פינוי בינוי"
      />
      {touched.tama38 && errors.tama38 && (
        <div style={{ color: "red" }}>{errors.tama38}</div>
      )}
      {touched.pinuyBinuy && errors.pinuyBinuy && (
        <div style={{ color: "red" }}>{errors.pinuyBinuy}</div>
      )}
    </>
  );
};

export default ChooseTamaAndPinuyBinuy;
*/





























// import * as React from 'react';
// import { Theme, useTheme } from '@mui/material/styles';
// import {Box,OutlinedInput,InputLabel,MenuItem,FormControl,Chip} from '@mui/material';

// import Select, { SelectChangeEvent } from '@mui/material/Select';

// import {useState} from 'react'

// const ChooseTamaAndPinuyBinuy = ({tama38,pinuyBinuy}) => {
//     function getStyles(name, personName, theme) {
//         return {
//           fontWeight:
//             personName.indexOf(name) === -1
//               ? theme.typography.fontWeightRegular
//               : theme.typography.fontWeightMedium,
//         };
//       }
      


//     const ITEM_HEIGHT = 48;
//     const ITEM_PADDING_TOP = 8;
//     const MenuProps = {
//       PaperProps: {
//         style: {
//           maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//           width: 250,
//         },
//       },
//     };
//     const names=['Tama38','PinuyBinuy'];
//     const theme = useTheme();
//     const [projetTypes, setProjetTypes] = useState([]);
  
//     const handleChange = (event) => {
//         console.log('before',{projetTypes})

//         const {
//           target: { value },
//         } = event;
//         setProjetTypes(
//           // On autofill we get a stringified value.
//           typeof value === 'string' ? value.split(',') : value,
//         );
//         projetTypes.includes('Tama38')?tama38=true:tama38=false   
//         projetTypes.includes('PinuyBinuy')?pinuyBinuy=true:pinuyBinuy=false   

//         console.log(value)
//       };

//   return (
//     <>
//     <div>ChooseTamaAndPinuyBinuy</div>


// <FormControl sx={{ m: 1, width: 300 }}>
//         <InputLabel id="demo-multiple-chip-label">סוגי פרויקטים שמבוצעים על ידי היזם</InputLabel>
//         <Select
//           labelId="demo-multiple-chip-label"
//           id="demo-multiple-chip"
//           multiple
//           value={projetTypes}
//           onChange={handleChange}
//           input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
//           renderValue={(selected) => (
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//               {selected.map((value) => (
//                 <Chip key={value} label={value} />
//               ))}
//             </Box>
//           )}
//           MenuProps={MenuProps}
//         >
//           {names.map((name) => (
//             <MenuItem
//               key={name}
//               value={name}
//               //style={getStyles(name, personName, theme)}
//             >
//               {name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>




//       </>
//   )
// }

// export default ChooseTamaAndPinuyBinuy


