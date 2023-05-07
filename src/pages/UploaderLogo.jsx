import { useEffect, useState } from "react"
import { Button } from '@mui/material';
import axios from "axios"
import { Chip, Card, Grid } from "@material-ui/core";
import UploadIcon from '@mui/icons-material/Upload';
import Avatar from '@mui/material/Avatar';
const UploaderLogo = ({ picture, setPicture, label }) => {
  const [selectFile, setSelectFile] = useState();

  useEffect(() => {
    if (selectFile) {
      const formData = new FormData();
      formData.append("file", selectFile)
      console.log(selectFile.name)
      axios.post("http://localhost:3600/upload", formData).then(({ data }) => {
        if (data?.name) {
          console.log({ data })
          setPicture({ 'path': data.name, 'name': selectFile.name })
        }
      }).catch(err => {
        console.log("error")
      })
    }
  }, [selectFile])

  const onSelectFile = (e) => {
    setSelectFile(e.target.files[0])

  }

  return (
    <>
      <label htmlFor="file">
      <button variant="contained" component="label" avatar={<Avatar><UploadIcon></UploadIcon></Avatar>}>
      <input hidden type="file" onChange={onSelectFile} name="file" />
        <Chip
          hidden type="file"
          label={label || "Load picture"}
          variant="contained"
          component="label"
          onChange={onSelectFile}
          name="file"
          avatar={<Avatar><UploadIcon></UploadIcon></Avatar>}
        // onDelete={() => handleRemovingImage(picture)}
        />
        </button>
        <Button variant="contained" component="label">
          {label || "Load picture"}
          <input hidden type="file" onChange={onSelectFile} name="file" />
        </Button>
      </label>
    </>
  )

}
export default UploaderLogo

/**          <input hidden accept="image/*" multiple type="file" />
 */