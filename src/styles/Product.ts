import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 2rem 1rem;
    width: 20%;
    max-width: 350px;
    min-width: 300px;
`;
export const Image = styled.div`
    background: var(--c100);
    height: 12rem;
    width: 100%;
    overflow: hidden;

    >img {
        max-height: 100%;
        object-fit: cover;
        width: 100%;
    }

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;
export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border-radius: 20px;
    margin-top: -30px;

    padding: 1.25rem;
    background: var(--c200); 

    >div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    > button{
        margin-top: 1rem;

        width: 100%;
        padding: .75rem;
        border-radius: 99px;    

        display: flex;
        justify-content: center;
        align-items: center;

        background: var(--c300);
        cursor: pointer;
    }

    
    > p{

    }
`;
export const Price = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    >h1{
        font-size: 2.25rem;
        line-height: 2.5rem
    }
    >h2{
        font-size: 4rem;
        line-height: 1;
    }
`;
