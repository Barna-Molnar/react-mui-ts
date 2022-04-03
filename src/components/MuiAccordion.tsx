import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <div>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel1')}>
                <AccordionSummary
                    id='panel1-header'
                    aria-controls='panel1-content'
                    expandIcon={<ExpandMore />}
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae expedita illo eligendi vitae autem porro illum? Sequi eum eveniet incidunt.
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel2')}>
                <AccordionSummary
                    id='panel2-header'
                    aria-controls='panel2-content'
                    expandIcon={<ExpandMore />}
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae expedita illo eligendi vitae autem porro illum? Sequi eum eveniet incidunt.
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel3')}>
                <AccordionSummary
                    id='panel3-header'
                    aria-controls='panel3-content'
                    expandIcon={<ExpandMore />}
                >
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae expedita illo eligendi vitae autem porro illum? Sequi eum eveniet incidunt.
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default MuiAccordion;