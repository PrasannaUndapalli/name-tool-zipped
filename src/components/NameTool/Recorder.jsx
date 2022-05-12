

import React, { useState } from "react";

import AudioReactRecorder, { RecordState } from 'audio-react-recorder';

import Button from "@material-ui/core/Button";
import AdjustIcon from "@material-ui/icons/Adjust";
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import StopIcon from '@material-ui/icons/Stop';
import CloseIcon from '@material-ui/icons/Close';

import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import PlayButton from "./PlayButton";

function Recorder({ userName, onStopSelect }) {
    const [recordState, setRecordState] = useState(null);
    const [audioData, setAudioData] = useState(null);
    const [openPanel, setOpenPanel] = useState(false);

    const start = () => {
        setRecordState(RecordState.START)
    }

    const stop = () => {
        setRecordState(RecordState.STOP)
    }

    //audioData contains blob and blobUrl
    const onStop = (audioData) => {
        setAudioData(audioData);
        onStopSelect(audioData);
    }

    const handleRecordClick = () => {
        setOpenPanel(true);
    }

    const handleClose = () => {
        setOpenPanel(false);
    }

    const saveAudio = () => {
        //Do axios call 
        // console.log("recordState", audioData.url);
        setOpenPanel(false);
        cancelAudio();
    }

    const cancelAudio = () => {
        //Do axios call 
        // console.log("recordState", audioData.url);
        setRecordState(null);
        setAudioData(null);
    }

    return (<div>
        <Button variant="contained" size="medium" onClick={handleRecordClick} startIcon={<AdjustIcon />}>Record userName</Button>
        <Dialog onClose={handleClose} aria-labelled-by="customized-dialog-title" open={openPanel}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Record userName
                <IconButton className="float-right" onClick={() => setOpenPanel(false)} >
                    <CloseIcon /> </IconButton>
            </DialogTitle>
            <DialogContent>
                {!(audioData && audioData.url) ? (<>
                    <div> Go to a quiet place and the click on the record button </div>

                    {(recordState === null || recordState !== "start") && (<><div className="mic-icon"><IconButton size="medium" onClick={start} >
                        <MicOutlinedIcon fontSize="medium" /> </IconButton>
                    </div>

                        <div className="mic-icon-info">Click the button to start recording</div></>)}
                    <AudioReactRecorder state={recordState} onStop={onStop} />
                    {recordState === "start" && (<div className="stop-icon"><IconButton size="medium" onClick={stop} >
                        <StopIcon fontSize="medium" /> </IconButton></div>)}</>)


                    : (
                        <>
                            {audioData && audioData.url && (<PlayButton name="play-audio" url={audioData.url} />)}
                            <Button variant="outlined" onClick={saveAudio} className="save-audio"> Save </Button>
                            <Button variant="outlined" onClick={cancelAudio} className="cancel-audio"> Cancel </Button>
                        </>
                    )}

            </DialogContent>
        </Dialog>

    </div>
    )
}
export default Recorder;
