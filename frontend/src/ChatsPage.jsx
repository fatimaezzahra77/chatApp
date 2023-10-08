import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic('d9b664b3-ad07-4ebe-b26b-e56aed200b56',
     props.user.username, props.user.secret);

    return ( 
        <div style={{ height:"100vh" }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height:"100%"}}/>
        </div>
     );
}
 
export default ChatsPage;