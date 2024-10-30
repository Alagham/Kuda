// import styled from 'styled-components';
import Moreinfo from "../components/More-info"
import Transfer from "../assets/transfer.png"
import Utils from "../assets/utils.png"
import Credit from "../assets/credit-card.png"

const More = () => {
  return (
    <div className="Container" style={{ display:"flex" , justifyContent:"center", gap:"10px", flexWrap:"wrap", width:"100%", alignItems:"center"}}>
        < Moreinfo
        Image= {Transfer}
        Header="Kuda Business"
        Paragraph= "Grow your business with our all-in-one business manager. Get a POS, bulk transfers, payroll and more."
        />

        < Moreinfo
        Image= {Utils}
        Header="Transfer & Spend"
        Paragraph= "Send money for free to any Nigerian account with 25 free transfers every month."
        />

        < Moreinfo
        Image= {Credit}
        Header="Loans"
        Paragraph= "Get up to ₦150,000 in your Kuda account easily and repay in convenient instalments."
        />
    </div>
  );
};

export default More;
// const =  styled.div