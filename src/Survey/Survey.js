import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Survey.css';
import dataValues from '../data/data.json';
import testValues from '../data/test.json';
import img from '../assets/img/hhomes.png';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


function getSteps() {
    return ['Welcome', 'Sales Counselor', 'Loan Processor', 'Loan Agent', 'Highland Homes'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Welcome Step...';
        case 1:
            return 'Sales Counselor steps and questions';
        case 2:
            return 'Loan processor steps and questions';
        case 3:
            return 'Loan Agent steps and questions';
        case 4:
            return 'Highland Homes steps and questions';
        default:
            return 'Unknown stepIndex';
    }
}

export default function Survey() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 2) {
            alert("now at 2");
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className="container survey-bg">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className="centralise">
                {activeStep === steps.length ? (
                    <div className="text-white">
                        <Typography>All steps completed</Typography>
                        <button className="btn btn-primary" onClick={handleReset}>Reset</button>
                    </div>
                ) : (
                        <div>
                            <div className="text-white" data-aos="fade-right" data-aos-easing="linear"
                                data-aos-duration="1500">

                                <div >
                                    {getStepContent(activeStep)}
                                </div>
                            </div>
                            <div className="buttons">
                                <button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className="btn-props btn-left"
                                >
                                    Back
              </button>
                                <button className="btn-props btn-right" onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </button>
                            </div>
                        </div>
                    )}
            </div>
            <div className="row bottom-div w-100 p-2 mb-0">
                <img src={img} alt="" className="bottom-img" />
            </div>
        </div>
    );
}