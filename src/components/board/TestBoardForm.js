import React, { useState } from "react"
import { Checkbox, FormControl, FormControlLabel, FormLabel, FormGroup } from "@material-ui/core"





export const FormTest = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked })
  }

  const { gilad, jason, antoine } = checked;

  return (

    <>
      <FormControl component="fieldset" >

        <FormLabel component="legend">Cheeses</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Antoine Llorca"
          />
        </FormGroup>



      </FormControl>





    </>




  )









}
