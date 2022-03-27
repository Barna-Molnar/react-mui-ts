import { Box, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup } from '@mui/material'
import { BookmarkBorder, Bookmark } from '@mui/icons-material'
import { useState } from 'react'

const MuiCheckbox = () => {

    const [exceptTnC, setExceptTnC] = useState(false)

    const [skills, setSkills] = useState<Array<string>>([])

    console.log({ exceptTnC })
    console.log({ skills })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExceptTnC(e.target.checked)

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
                <FormControlLabel
                    label={'I accept terms and conditions'}
                    control={<Checkbox
                        checked={exceptTnC}
                        onChange={handleChange}
                    />
                    }

                />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorder />}
                    checkedIcon={<Bookmark />}
                    checked={exceptTnC}
                    onChange={handleChange}
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label={'HTML'}
                            control={<Checkbox
                                value={'HTML'}
                                checked={skills.includes('HTML')}
                                onChange={handleSkillChange}
                            />
                            }

                        />
                        <FormControlLabel
                            label={'CSS'}
                            control={<Checkbox
                                color='secondary'
                                value={'CSS'}
                                checked={skills.includes('CSS')}
                                onChange={handleSkillChange}
                            />
                            }

                        />
                        <FormControlLabel
                            label={'JavaScript'}
                            control={<Checkbox
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

export default MuiCheckbox