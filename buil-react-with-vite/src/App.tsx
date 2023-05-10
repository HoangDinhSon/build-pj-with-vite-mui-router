import Button from "@mui/material/Button";
import * as React from "react";
import {TextField} from "@mui/material"
import {Avatar} from "@mui/material"

function App() {
 const  refButton =React.createRef();
  return (
    <div>
      <TextField variant="outlined" label="Name" multiline={false}></TextField>
      <Avatar src="https://mui.com/static/images/avatar/1.jpg" ></Avatar>
      <h1 className="underline">Hello</h1>
    </div>
  )
}

export default App
