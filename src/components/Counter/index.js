import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as counterActions from '../../actions';
import Button from '../Button';

const CounterWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
`

const Counter = (props) => {

    const { count, increase, decrease } = props;
    return(
        <CounterWrap>
            <Button onClick={() => increase(5)}>Increase</Button>
            <div>{count}</div>
            <Button onClick={() => decrease(5)}>Decrease</Button>
        </CounterWrap>
    )
}

const mapStateProps = state => state;

const mapDispatchToProps = dispatch => (bindActionCreators(counterActions, dispatch));

export default connect(mapStateProps, mapDispatchToProps)(Counter);