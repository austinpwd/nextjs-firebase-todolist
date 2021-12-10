import styled from 'styled-components';
import {Brand} from 'components/brand'

import {Logo} from "components/icons/logo"
const SectionHeader = styled.header`
       display:flex;
       gap:0.5rem;
       h1{
           font-size: ${props => props.size || "1rem"};;
           font-weight:bold;
       };
`

const Title = styled.h1`
    font-size:2rem;
    font-weight:bold;
`
 
 function ContentSectionHeader ({title, ...props}) {
    return (
        <SectionHeader {...props}>
          <Logo {...props}/>
          <Title {...props}>{title || "Content Section Title"}</Title>
        </SectionHeader>
    )
}

export default ContentSectionHeader 