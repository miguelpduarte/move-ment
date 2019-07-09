import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemIcon, ListItemText, Collapse } from "@material-ui/core";
import { QuestionAnswer, ExpandLess, ExpandMore } from "@material-ui/icons";
import FaqQuestion from "./FaqQuestion";
import FaqAnswer from "./FaqAnswer";

const FaqQA = ({question, answer}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <ListItem button onClick={() => setOpen(is_open => !is_open)}>
                <ListItemIcon>
                    <QuestionAnswer/>
                </ListItemIcon>
                <ListItemText>
                    <FaqQuestion>
                        {question}
                    </FaqQuestion>
                </ListItemText>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto">
                <FaqAnswer>
                    {answer}
                </FaqAnswer>
            </Collapse>
        </>
    );
};

FaqQA.propTypes = {
    question: PropTypes.node.isRequired,
    answer: PropTypes.node.isRequired,
};

export default FaqQA;
