import React, { useState } from "react";
import '../../App.css';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PlayButton from "./PlayButton";
import FileUpload from "./FileUpload";

import Recorder from "./Recorder";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import AdjustIcon from "@material-ui/icons/Adjust";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
// import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';


function NameTool() {
    const dataArray = [
        { uid: "USER01", name: "User 1" },
        { uid: "USER02", name: "User 2" },
        { uid: "USER03", name: "User 3" },
        { uid: "USER04", name: "User 4" },
        { uid: "USER05", name: "User 5" },
        { uid: "USER06", name: "User 6" },
        { uid: "USER07", name: "User 7" },
        { uid: "USER08", name: "User 8" },
        { uid: "USER09", name: "User 9" },
        { uid: "USER10", name: "User 10" },
        { uid: "USER11", name: "User 11" },
        { uid: "USER12", name: "User 12" },
        { uid: "USER13", name: "User 13" },
        { uid: "USER14", name: "User 14" },
        { uid: "USER15", name: "User 15" },
        { uid: "USER16", name: "User 16" },
        { uid: "USER17", name: "User 17" },
        { uid: "USER18", name: "User 18" },
        { uid: "USER19", name: "User 19" },
        { uid: "USER20", name: "User 20" },
        { uid: "USER21", name: "User 21" }
    ];
    // const optionsList = [];
    // dataArray.filter(d => optionsList.push({name : d.name}));
    const [selectedName, setSelectedName] = useState(null);
    const [itemsList, setItemsList] = useState([...dataArray]);
    const [togglePronounce, setTogglePronounce] = useState(false);
    const [audioData, setAudioData] = useState(null);

    useEffect(() => {
        if (selectedName !== null) setTogglePronounce(true);
    }, [selectedName])

    const onStopSelect = (audioData) => {
        setAudioData(audioData);
    }

    const playAvailableAudio = () => {
        // setShowPlay(true);
    }
    // const onValSelect = (val) => {
    //     setValue(val);
    // }

    // const onValChange = (searchVal) => {
    //     if (!searchVal || (typeof searchVal !== "object" && searchVal.trim() === "")) return;
    //     const filteredArray = dataArray.filter((data) => (data.uid.includes(searchVal) || data.name.includes(searchVal)))

    //     setItemsList(filteredArray);
    //     typeof searchVal === "object" ? setValue(searchVal.name) : setValue(searchVal);
    // }
    return (
        <div className="tool-body">

            <div class="name-search">
                <Autocomplete
                    options={itemsList}
                    renderInput={params => (
                        <TextField {...params} label="Search by Employee Unique ID or Name" variant="outlined" />
                    )}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 500 }}
                    value={selectedName}
                    onChange={(_event, newVal) => setSelectedName(newVal)}
                />
            </div>

            <div className="name-customize-tools" style={{ marginTop: 50 }}>

                {selectedName !== null && (
                    <>
                        {/* <PlayButton url="" name="" /> */}
                        <Button variant="contained" size="medium" onClick={playAvailableAudio} startIcon={<PlayCircleFilledIcon />}>Play Audio </Button>
                        <Recorder userName={selectedName} onStopSelect={onStopSelect} />
                        <FileUpload />
                    </>
                )}

            </div>
        </div>
    );
}

export default NameTool;
