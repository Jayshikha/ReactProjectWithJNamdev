import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import Form from '../Form/Form';
import { MdMessage, MdCall , MdOutlineEmail } from "react-icons/md";
const ContactForm =()=>{
    return(
        <section className={styles.container}>  
        <div className={styles.contact_form}>
        <div className={styles.top_btn}>
            <p><Button 
                    text ="VIA SUPPORT CHAT"
                    icon={<MdMessage fontSize="24px"/>} />
                </p>
                <p><Button 
                    text ="VIA CALL"
                    icon={<MdCall fontSize="24px"/>}/>
                </p>
        </div>
        <div className="next">

        
               <p><Button 
             isSecondry_btn = {true}
            text =" VIA EMAIL FORM"
            icon={<MdOutlineEmail  fontSize="24px"/>}/>
        </p>
     </div>
     <Form/>
        </div>
        <div className={styles.contact_image}>   <img src="/images/person.png" alt="Company Logo" /></div>
       
        
        </section>
        
    );
};
export default ContactForm;