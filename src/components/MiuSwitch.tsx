import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

const MiuSwitch = () => {

    const [checked, setChecked] = useState(false)

    const [skills, setSkills] = useState<Array<string>>([])

    console.log({ checked });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }
    const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const index = skills.indexOf(e.target.value)
        if (index === -1) {
            setSkills([...skills, e.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== e.target.value))
        }

    }

    return (
        <Box>

            <Box>
                <FormControlLabel label='Dark Mode' control={<Switch checked={checked} onChange={handleChange} />} />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label={'HTML'}
                            control={<Switch
                                color='warning'
                                value={'HTML'}
                                checked={skills.includes('HTML')}
                                onChange={handleSkillChange}
                            />
                            }

                        />
                        <FormControlLabel
                            label={'CSS'}
                            control={<Switch
                                color='secondary'
                                value={'CSS'}
                                checked={skills.includes('CSS')}
                                onChange={handleSkillChange}
                            />
                            }

                        />
                        <FormControlLabel
                            label={'JavaScript'}
                            control={<Switch
                                color='success'
                                value={'JavaScript'}
                                checked={skills.includes('JavaScript')}
                                onChange={handleSkillChange}
                            />
                            }

                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}

export default MiuSwitch