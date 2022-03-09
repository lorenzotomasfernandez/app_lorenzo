import React from 'react'
import './Piedepagina.css';
import { Button, ListGroup } from 'react-bootstrap';
import {AiOutlineFacebook} from "react-icons/ai";
import {ImWhatsapp} from "react-icons/im";
import {FiMail} from "react-icons/fi";
import {FaCcVisa} from "react-icons/fa";
import {FaCcMastercard} from "react-icons/fa";
import {SiAmericanexpress} from "react-icons/si";
import {FaCcPaypal} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Piedepagina = () => {
    return(
        <footer className='color1'>
            <div className='redSocial'>
               <h2><GrInstagram/> lftech.ar</h2>
               <p>Estamos en instagram</p>
               <Button variant="secondary" size="lg" active>SEGUINOS</Button>
            </div>
            <div className='list'>
                <h3><b>¡Sigamos conectados!</b></h3>
               <ListGroup horizontal>
                 <ListGroup.Item><AiOutlineFacebook/></ListGroup.Item>
                 <ListGroup.Item><ImWhatsapp/></ListGroup.Item>
                 <ListGroup.Item><FiMail/></ListGroup.Item>
               </ListGroup>
            </div>
            <div className='pago'>
                <h3><b>Medios de pago:</b></h3>
                <ListGroup horizontal>
                 <ListGroup.Item><FaCcVisa/></ListGroup.Item>
                 <ListGroup.Item><FaCcMastercard/></ListGroup.Item>
                 <ListGroup.Item><SiAmericanexpress/></ListGroup.Item>
                 <ListGroup.Item><FaCcPaypal/></ListGroup.Item>
               </ListGroup>
            </div>
        </footer>
    )
}

export default Piedepagina;