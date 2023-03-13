import { useEffect, useState } from "react"
import { Button } from '@mui/material';

import axios from "axios"
const Uploader = ({ file, setFile, label ,subscribe}) => {
  const [selectFile, setSelectFile] = useState();
  useEffect(() => {
    setFile(selectFile);
  }, [selectFile])


    if (subscribe) {
      console.log('here')
      const formData = new FormData()
      formData.append("file", selectFile)
      axios.post("http://localhost:3600/upload", formData).then(({ data }) => {
        if (data?.name) {
          //setFile(data.name)
        }
      }).catch(err => {
        console.log("error")
      })
    }
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