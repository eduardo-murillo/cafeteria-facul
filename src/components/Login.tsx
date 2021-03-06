import React, { FormEvent, useState } from 'react';

import { Logo, Heading, Button, Container, ButtonForm, CloseForm, ModalFrame } from '../styles/Login';
import Input from './Input';
import { GrFormClose } from 'react-icons/gr'

import { Tab, Tabs, TabList, TabPanel,  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import api from '../../config/api'
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/user';

const Login: React.FC = () => {
    const dispatch = useDispatch();

    const [ opened, setOpen ] = useState(false) 
    const [ tabView, setTabView ] = useState(0)
    const [ showModal, setShowModal ] = useState(false)
    const [ modalText, setModalText ] = useState('')

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ cpf, setCpf ] = useState('')
    
    async function  HandleLogin(event: FormEvent){
      event.preventDefault()
      const data = await api.get('user/login', {auth:{username: email, password}})
      const message = data.data.message
      const user = data.data.user
      
      if(message){
        dispatch(userLogin(user))
        localStorage.setItem('user', JSON.stringify(user))
        ShowModal(1500, message)
      }
      setOpen(false)
    }
    async function  HandleSignUp(event: FormEvent){
      event.preventDefault()
      const data = await api.post('user/signup', {name, email, password, cpf})
      const message = data.data.message
      const user = data.data.user

      if(data.data !== '' ){
        dispatch(userLogin(user))
        localStorage.setItem('user', JSON.stringify(user))
        ShowModal(1500, message)
        // setTimeout(function() {
        //   OpenFormLogin()
        // }, 2500);
      }else{
        ShowModal(1500, 'As informações estão incorretas')
      }
      setOpen(false)
    }
    
    return (
      <>
        <Logo/> 
        <Heading>
            Seja muito bem vindo ao Coffee Mountain!
            <p>Venha tomar um café conosco!</p>
        </Heading>
        <Button onClick={OpenFormLogin}>Fazer Login</Button>
        <Button  onClick={OpenFormRegister}>Cadastrar-se</Button>

        <Modal tilte={modalText} open={showModal}/>

        {/* FORM */}
        <Container className={opened && 'opened'}>
          <Tabs selectedIndex={tabView}  onSelect={index => setTabView(index)}>
            <TabList>
              <Tab>Entrar</Tab>/
              <Tab>Registrar-se</Tab>
              <CloseForm onClick={() => setOpen(false)}><GrFormClose/> </CloseForm>
            </TabList>

            <TabPanel>
              <Input state={setEmail} placeholder="Email" />
              <Input state={setPassword} type="password" placeholder="Senha" />

              <ButtonForm onClick={HandleLogin}>Entrar</ButtonForm>
            </TabPanel>
            <TabPanel>
              <Input state={setName} placeholder="Nome" />
              <Input state={setEmail} placeholder="Email" />
              <Input state={setPassword} type="password" placeholder="Senha" />              
              <Input state={setCpf} placeholder="CPF" />

              <ButtonForm onClick={HandleSignUp}>Registrar-se</ButtonForm>
            </TabPanel>
          </Tabs>
        </Container>
    </>
  );
  
  function OpenFormLogin(){
    setTabView(0)
    setOpen(true)
  }
  function OpenFormRegister(){
    setTabView(1)
    setOpen(true)
  }
  
  function ShowModal(time: number, text: string){
    setModalText(text)
    setShowModal(true)
    
    setTimeout(function() {
      setShowModal(false)
    }, time);
  }
  interface ModalProps{
    open: boolean
    tilte: string
  }
  function Modal(props: ModalProps){
    return(
      <ModalFrame style={{opacity: props.open? '90%': '00%'}}>
          <h3>{props.tilte}</h3>
      </ModalFrame>
    )
  }
}

export default Login;