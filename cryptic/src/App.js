import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import makeStyles from "@material-ui/core/styles/makeStyles";
import LockIcon from '@material-ui/icons/Lock';
import Button from "@material-ui/core/Button";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {decryptText} from "./code/decrypter";
import {encryptText} from "./code/encrypter";
import InputBase from "@material-ui/core/InputBase";
import {height} from "@material-ui/system";

let output;

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        textTransform: 'lowercase',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    answer: {
        margin: theme.spacing(1),
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}));


function App() {

    const classes = useStyles();

    return (

        <div className="App">
            <header className="App-header">
                <h1>Crypt iT</h1>
                <br></br>
                <p>encrypt your text</p>
                <form noValidate autoComplete="off">
                    <TextField
                        id="encrypt"
                        label="write here"
                        style={{width: '35%'}}
                        multiline
                        rowsMax={5}
                        color="primary"/>
                </form>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<LockOpenIcon/>}
                    onClick={handleClickEnc}
                >encrypt</Button>
                <InputBase
                    id = "outputEnc"
                    className={classes.answer}
                    multiline
                    readOnly = {true}
                    style={{width: '35%'}}
                    //rowsMax={5}
                    defaultValue = ""
                    inputProps={{ 'aria-label': 'naked' }}
                    onClick = {clickTextEnc}
                />
                <br></br>
                <p>decrypt your text</p>
                <form noValidate autoComplete="off">
                    <TextField
                        id="decrypt"
                        multiline
                        style={{width: '35%'}}
                        rowsMax={5}
                        label="write here"
                        color="primary"/>
                </form>
                <Button
                    align="center"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<LockIcon/>}
                    onClick={handleClickDec}
                >decrypt</Button>
                <InputBase
                    id = "outputDec"
                    className={classes.answer}
                    multiline
                    readOnly = {true}
                    style={{width: '35%'}}
                    //rowsMax={5}
                    defaultValue=""
                    inputProps={{ 'aria-label': 'naked' }}
                    onClick = {clickTextDec}
                />
                <br></br>
                <span>brought to you by <a onClick={handleClickName}>Alexandre Oliveira</a></span>
            </header>

        </div>
    );
}

function handleClickEnc() {
    output = document.getElementById("encrypt").value;
    output = encryptText(output.toString());
    if (output !== "Nothing to encrypt.") {
        document.getElementById("decrypt").value = "";
        document.getElementById("outputDec").value = "";
        if (output.toString().length >= 50){
            output = "click me to read entire text\n".concat(output);
        }
        document.getElementById("outputEnc").value = output.toString();
    }
}

function handleClickDec() {
    output = document.getElementById("decrypt").value;
    output = decryptText(output.toString());
    if (output !== "Nothing to decrypt.") {
        document.getElementById("encrypt").value = "";
        document.getElementById("outputEnc").value = "";
        if (output.toString().length >= 50){
            output = "click me to read entire text\n".concat(output);
        }
        document.getElementById("outputDec").value = output.toString();
    }
}

const handleClickName = () => {
    return window.open('https://www.linkedin.com/in/alexandreoliveira-softdev/', '_blank')
}

function clickTextDec(){
    let text = document.getElementById( "outputDec").value;
    document.getElementById( "outputDec").value =
        text.replace("click me to read entire text\n", "");
}

function clickTextEnc(){
    let text = document.getElementById( "outputEnc").value;
    document.getElementById( "outputEnc").value =
        text.replace("click me to read entire text\n", "");
}


export default App;