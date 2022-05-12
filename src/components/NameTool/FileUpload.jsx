import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/styles";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";

const Input = styled('input')({
  display: "none"
});

export default function FileUpload() {
  const fileRef = React.useRef();
  let [file, setFile] = useState();
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <label htmlFor="contained-button-file">
      <Input accept="image/*" id="contained-button-file" type="file" ref={fileRef} onChange={handleChange} />
      <Button variant="contained" onClick={() => fileRef.current.click()} className="uploadIcon" component="span" size="span" startIcon={<ArrowUpwardOutlinedIcon fontSize="small"/>}> Upload Audio </Button>
      </label>

      {/* <button onClick={() => fileRef.current.click()}>
        <input id="upload" name="upload" type="file" ref={fileRef} hidden
          onChange={handleChange} />
        Upload File
      </button>
      { file &&  file!==undefined && file!==null &&
        <div>
          <p>{file.name}</p>
          <p>{file.size}</p>
          <p>{file.type}</p>
        </div>
      }   */}
    </div>
  );


}