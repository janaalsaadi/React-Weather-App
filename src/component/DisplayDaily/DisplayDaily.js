import React , {Component} from 'react';
import Modal from 'react-modal';
import DisplayHourly from "../DisplayHourly/DisplayHourly";
import classes from './DisplayDaily.module.css';
const customStyles = {
  content : {
    width:'40%',
    height:'50%',
    top:'50%',
    left:'50%',
    right:'auto',
    bottom:'auto',
    transform:'translate(-50%, -50%)',
    border:'5px solid gray',
    color:'white',
    
  backgroundImage: 'linear-gradient(to right, pink, lightblue)'
  

  }
};

class DisplayDaily extends Component{
    

    state={
        modalOpened:false
     }
    toggleModal = () => {
        this.setState({ modalOpened: !this.state.modalOpened });
      }


    render(){
     
    return(
      <div>
           


           <div onClick={this.toggleModal} className={classes.card}>
            
            <div  style={{paddingLeft:'30%'}}>
                <img src={this.props.mySrc}  />

            </div>  

            <div className={classes.myText}>
            {this.props.info}
            </div> 
               
            <div className={classes.myText}>
              {this.props.day}

              </div>  

              
            </div>

             



            <Modal  style={customStyles}
             
            ariaHideApp={false}
          
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal with image">
                   
                    <DisplayHourly  
                    data ={this.props.wdats}/>
            </Modal>
           
      </div>

        )
    }
}

export default DisplayDaily;