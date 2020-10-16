import React , {Component} from 'react';
import Modal from 'react-modal';
import DetailedInfo from "./DetailedInfo";

const customStyles = {
  content : {
      width:'60%',
      height:'60%',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)',
    border:'5px solid gray'
  }
};

class DisplayDaily extends Component{
    

    state={
        modalOpened:false
     }
    toggleModal = () => {
        this.setState({ modalOpened: !this.state.modalOpened });
      }


      showj = () =>{
        console.log(this.props.wdats)
      }
    render(){
     
        return(
      <div>
           


           <div className="primary-info" onClick={this.toggleModal}>
              <div className="icon" onClick={this.showj}>
                <img src={this.props.mySrc} />
                {this.props.info}
              </div>
              {this.props.day}
            </div>

                <br></br>
             
            <Modal  style={customStyles}
             
            ariaHideApp={false}
          
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal with image">
                   
                    <DetailedInfo  data ={this.props.wdats}/>
            </Modal>
           
       </div>

        )
    }
}

export default DisplayDaily;