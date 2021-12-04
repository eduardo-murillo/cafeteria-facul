import React from 'react';

import { Logo, Heading, Button, Container, ButtonForm, CloseForm, ModalFrame } from '../styles/Login';

import 'react-tabs/style/react-tabs.css';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../store/user';

const Profile: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector((state:any) => state.user)

    async function logout(){
      dispatch(userLogout())
      localStorage.setItem('user', '')
    }
    // const [ opened, setOpen ] = useState(false) 
    // const [ tabView, setTabView ] = useState(0)
    // const [ showModal, setShowModal ] = useState(false)
    // const [ modalText, setModalText ] = useState('')

    // const [ name, setName ] = useState('')
    // const [ email, setEmail ] = useState('')
    // const [ password, setPassword ] = useState('')
    // const [ cpf, setCpf ] = useState('')
    
    // async function  HandleLogin(event: FormEvent){
    //   event.preventDefault()
    //   const data = await api.get('user/login', {auth:{username: email, password}})
    //   const message = data.data.message
    //   const user = data.data.user
      
    //   if(message){
    //     dispatch(userLogin(user))
    //     localStorage.setItem('user', user)
    //     ShowModal(1500, message)
    //   }
    //   setOpen(false)
    // }
    // async function  HandleSignUp(event: FormEvent){
    //   event.preventDefault()
    //   const data = await api.post('user/signup', {name, email, password, cpf})
    //   const message = data.data.message
    //   const user = data.data.user

    //   if(data.data !== '' ){
    //     dispatch(userLogin(user))
    //     localStorage.setItem('user', user)
    //     ShowModal(1500, message)
    //     // setTimeout(function() {
    //     //   OpenFormLogin()
    //     // }, 2500);
    //   }else{
    //     ShowModal(1500, 'As informações estão incorretas')
    //   }
    //   setOpen(false)
    // }
    
    return (
      <>
        <Logo/> 
        <Heading>
            Olá, {user.name}
        </Heading>
        <Button >Editar Usuário</Button>
        <Button >Meus Pedidos</Button>
        <Button onClick={logout}>Sair</Button>
    </>
  );
}

export default Profile;