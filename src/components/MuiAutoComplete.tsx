import { Stack, Autocomplete, TextField } from '@mui/material'
import React, { SyntheticEvent, useState } from 'react'

const skills = ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACT']

type Skill = {
    id: number;
    label: string
}

const skillsOptions: Array<Skill> = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}))

const MuiAutoComplete = () => {

    const [value, setValue] = useState<string | null>(null)

    const [skill, setSkill] = useState<Skill | null>(null)

    console.log({ value })
    console.log({ skill })

    const handleChange = (_event: SyntheticEvent<Element, Event>, value: string | null) => {
        setValue(value)
    }

    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete
                value={value}
                onChange={handleChange}
                options={skills}
                // freeSolo  in order to type any string in the box
                renderInput={(params) => <TextField {...params} label='Skills from Array<String>' />} />
            <Autocomplete
                value={skill}
                onChange={(_e: any, newValue: Skill | null) => setSkill(newValue)}
                options={skillsOptions}
                // freeSolo  in order to type any string in the box
                renderInput={(params) => <TextField {...params} label='Skills from Array<Skill>' />} />
        </Stack>
    )
}

export default MuiAutoComplete