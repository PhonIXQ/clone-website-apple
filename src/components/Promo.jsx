import styled from "styled-components";
import { promoImg } from "../constants";

const StyledPromo = styled.section`
   display: grid;
   grid-template-columns: auto auto;
   text-align: center;
`

const Promo = () => {
   return (
      <StyledPromo>
            {promoImg.map(({id, imgUrl}, idx) => (
               <div key={id}>
                  <img src={imgUrl} alt="id" />
               </div>
            ))}
      </StyledPromo>
   )
}

export default Promo