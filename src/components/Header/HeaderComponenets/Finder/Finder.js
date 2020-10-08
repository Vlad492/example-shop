import React,{useState} from 'react'
import { Form, Button,FormControl } from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

export default function Finder() {
    const [finderInput, setFinderInput] = useState('') // Finder input
    const [redirect, setRedirect] = useState(false)// Redirect while input form submits

    const submit = () =>{
        setRedirect(true)
    }
    if(redirect){
        return <Redirect to={{ pathname: `/search/${finderInput}` }} />
    }else{
    return (
        <Form inline onSubmit = {submit}>
            <FormControl type="text" placeholder="Search" onChange={(e)=>setFinderInput(e.target.value)} className="mr-sm-2" required />
            <Button variant="outline-success" type="submit" >Search</Button>
        </Form>
    )}
}