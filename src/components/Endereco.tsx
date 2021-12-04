import React, { FormEvent, useState } from 'react';

import { Container } from '../styles/Basket';
import Input from './Input';
import { GrFormClose } from 'react-icons/gr'

import { Tab, Tabs, TabList, TabPanel,  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import api from '../../config/api'
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/user';

const EnderecoInput: React.FC = () => {
    const dispatch = useDispatch();

    const [ opened, setOpen ] = useState(false) 
    const [ tabView, setTabView ] = useState(0)
    const [ showModal, setShowModal ] = useState(false)
    const [ modalText, setModalText ] = useState('')

    const [ rua, setRua ] = useState('')
    const [ numero, setNumero ] = useState('')
    const [ bairro, setBairro ] = useState('')    
    
    return (
      <>
        <Container className={opened && 'opened'}>
          <Tabs selectedIndex={tabView}  onSelect={index => setTabView(index)}>            
            <TabPanel>
              <Input state={setRua} placeholder="Rua" />
              <Input state={setNumero} type="number" placeholder="Nº" />
              <Input state={setBairro} placeholder="Bairro" />
            </TabPanel>            
          </Tabs>
        </Container>
    </>
  );  
}

export default Input;