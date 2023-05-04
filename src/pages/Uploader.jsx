import { useEffect, useState } from "react"
import { Button } from '@mui/material';
import axios from "axios"

const Uploader = ({ picture, setPicture, label }) => {
  const [selectFile, setSelectFile] = useState();

  useEffect(() => {
    if (selectFile) {
      const formData = new FormData();
      formData.append("file", selectFile)
      console.log({selectFile})
      axios.post("http://localhost:3600/upload", formData).then(({ data }) => {
        if (data?.name) {
          
          setPicture([...picture, {'path':data.name,'name':selectFile.name}])
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
      <label htmlFor="file">  </label>
      <Button variant="contained" component="label">
        טען תמונה מהמחשב
        <input hidden type="file" onChange={onSelectFile} name="file" />
      </Button>
    </>
  )

}
export default Uploader

/**          <input hidden accept="image/*" multiple type="file" />
 */