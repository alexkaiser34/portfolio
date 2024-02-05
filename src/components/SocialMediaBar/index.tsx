
import { Linkedin, Github, Envelope, Hr } from 'react-bootstrap-icons';
import './style.css'
import { maxHeaderSize } from 'http';

interface SocialProps {
  isExpanded: boolean
}
function SocialMediaBar(props: SocialProps){

  // const EndLine = ():JSX.Element => {
  //   return !props.isVert ? (
  //     <div className="hr" 
  //       style={{
  //         width: '60px',
  //         height: '3px',
  //         backgroundColor: 'lightblue',
  //         opacity: '0.3',
  //         border: 'none'
  //       }} 
  //     />
  //   ) : (
  //     <div className="d-flex" 
  //       style={{
  //         height: "60px"
  //         }}>
  //         <div className="vr" style={{
  //             color: 'lightblue', 
  //             width: '3px'
  //           }}>
  //         </div>
  //     </div>
  //   )
  // }
  return (
    <div className='sidebar ms-auto' style={{
      width: props.isExpanded ? '100%' : '',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: !props.isExpanded ? '20px' : 'calc(20px + 2vw)',
      paddingLeft: '20px',
      paddingRight: '20px'
      }}>
        <div className='sidebar-item'>
          <a href="mailto:alexkaiser@me.com" title='Email'><Envelope /></a>
        </div>
        <div className='sidebar-item'>
          <a href="https://www.linkedin.com/in/alex-kaiser34/" title='LinkedIn'><Linkedin /></a>
        </div>
        <div className='sidebar-item'>
          <a href="https://github.com/alexkaiser34" title='GitHub'><Github /></a>
        </div>
    </div>
  );
};

export default SocialMediaBar;