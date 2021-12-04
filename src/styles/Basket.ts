import styled from 'styled-components';

export  const DeliveryPlace = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 2rem;
`;
export  const LeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 65px;
    height: 65px;

    @media (max-width: 1100px) {
        display: none
    }

    > svg {
        width: 100%;
        height: 100%;
    }
`;
export  const RightSide = styled.div`
    display: flex;
    justify-content:  center;
    align-items: flex-start;
    flex-direction: column;

    position: relative;
    padding-left: 20px;
    flex: 1;

    @media (max-width: 1100px) {
        align-items: center;
        padding: 0;
        > div {
            flex-direction: column;
        }
    }

    @media (max-width: 450px) {
        margin: 0 auto;
        width: max-content;
        padding: 0;
    }

    >  h1{
        font-size: 1rem;
    }
    > svg{  
        position: absolute;
        right: 0;

        width: 32px;
        height: 32px;
    }
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width:100%
    }
`;

export const Items = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;
    flex-direction: column;
    width: 100%;
`;
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1rem;
    padding: 1rem 2rem;
    border-radius: 99px;
    cursor: pointer;

    margin-top: 2rem;
    background: var(--c200);

    &.FinalButton{
        width: 100%;
        background: var(--c300);
        font-weight: 700;
    }
`;

export const Container = styled.div`
    & input:focus ~ label, & input:valid ~ label{
        background: var(--c100);
        padding: 0px 6px;
        width: fit-content;
        transform: scale(.75) translateY(-160%) translateX(-20%);
        color: var(--yellow);

        transition: 200ms;
    }

    margin-bottom: 10px;
    position: relative;
    margin-top: 10px;
    font-weight: 500;

    > input{
        border: solid 1.5px var(--c400);
        border-radius: 999px ;
        padding: 8px 15px;
        outline: 0;
        
        height: 44px;
        width: 312px;   
        background: transparent;
        &:focus{
            border: solid 1.5px var(--yellow) ;
            font-size: 14px;
        }
    }
    > label{
        position: absolute;
        left: 15px;
        top: 12px;
        transition: 200ms;

        text-align: left;
        font-size: 14px;

        padding: 0px 10px;
        
        display: flex;
        align-items: center;
        justify-content: flex-start;

        background: var(--c100);
    }
`;

export const Select = styled.select`
    border: solid 1.5px var(--c400);
    border-radius: 999px ;
    padding: 8px 15px;
    outline: 0;
    
    height: 44px;
    width: 312px;   
    background: transparent;
    &:focus{
        border: solid 1.5px var(--yellow) ;
        font-size: 14px;
    }
`;
