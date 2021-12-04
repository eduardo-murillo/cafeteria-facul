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

    min-height: 249px;

    border-radius: 20px;
    margin-top: -30px;

    padding: 1.25rem;
    background: var(--c200); 

    > div{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        > h1 {
            font-size: 20px;
            height: 30px;
            overflow: hidden;
        }
        > span {
            display: flex;
            height: 100px;
            margin-top: 0.5rem;
        }
    }

    > button{
        margin-top: auto;

        width: 100%;
        padding: .75rem;
        border-radius: 99px;    

        display: flex;
        justify-content: center;
        align-items: center;

        background: var(--c300);
        cursor: pointer;
    }
`;
export const Price = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 0.5rem;
    >h1{
        font-size: 2.25rem;
        line-height: 2.25rem;
    }
    >h2{
        font-size: 3.25rem;
        line-height: 2.5rem;
    }
`;
