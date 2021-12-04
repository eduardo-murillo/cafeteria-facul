import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    position: fixed;
    bottom: 0;
    width: 100%;
    
    height: 60px;

    /* padding: 1rem 1rem; */
    border-top: 1.5px solid var(--c200);
    background: var(--c0);
`;
export const Item = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    cursor: pointer;
    
    &.active{
        color: var(--yellow);
        > span {
            color: var(--yellow);
            background: var(--c200);
        }
    }
    svg{
        position: relative;
        width: 32px;
        height: 32px;
    }
    > span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        width: 32px;
        margin-left: 0.2rem;
        background: var(--c300);
        border-radius: 50%;
        font-size: 20px;
        font-weight: 600;
        color: #000;
    }
`;
export const ActiveBar = styled.span`
    width: calc(16.665%);
    height: 3px;
    border-radius: 50px;
    background: var(--yellow);

    position: absolute;
    bottom: .3rem;
    transition: 200ms;
    /* margin-left: 7.5%; */

    &.left{left: 8.3325%;}
    &.middle{left: calc(50% - 8.3325%);}
    &.right{left: calc(100% - 24.9975%);}
`;